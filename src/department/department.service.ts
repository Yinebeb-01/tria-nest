import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  create(departmentData: CreateDepartmentDto): Promise<Department> {
    const newDepartment = this.departmentRepository.create(departmentData);
    return this.departmentRepository.save(newDepartment);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: string): Promise<Department | null> {
    const dept = await this.departmentRepository.findOneBy({ id });
    if (!dept) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return dept;
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department | undefined> {
    const department = await this.departmentRepository.findOneBy({ id });
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    department.name = updateDepartmentDto.name;
    department.description = updateDepartmentDto.description;
    department.managing_department = updateDepartmentDto.managing_department;

    return this.departmentRepository.save(department);
  }

  async remove(id: string) {
    const department = await this.departmentRepository.findOneBy({ id });
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    await this.departmentRepository.delete(id);
  }

  /* Mysql-Query:
  `SELECT JSON_OBJECT(
          'name', department.name, 
          'description', department.description,
          'child', IF(count(child.id > 0), JSON_ARRAYAGG(
                  JSON_OBJECT(
                    'name', child.name, 
                    'description', child.description)
                  ), JSON_ARRAY())
            ) AS hierarchy
    FROM department
          LEFT JOIN department AS child ON 
              department.id = child.managing_department
    WHERE department.id = ?;
  `
  */
  async getChildDepartment(departmentId: string) {
    const result = await this.departmentRepository.query(
      `SELECT json_build_object(
  'name', department.name,
  'description', department.description,
  'child', CASE
               WHEN count(child.id) > 0 THEN json_agg(
                       json_build_object(
                               'name', child.name,
                               'description', child.description
                       )
                                             )
               ELSE '[]'
      END
) AS hierarchy FROM department LEFT JOIN department AS child ON
department.id = child. managing_department WHERE department.id = $1 GROUP BY department.name, department.description;`,
      [departmentId],
    );

    return result[0].hierarchy;
  }

  // Mysql- change '?' to '$1'
  async getParentDepartment(departmentId: string) {
    const result = await this.departmentRepository.query(
      `
      SELECT parent.id, parent.name, parent.description FROM department join department parent on department.managing_department=parent.id
      where department.id=$1;
  `,
      [departmentId],
    );

    return result[0];
  }
}
