import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column({ nullable: true })
  @ApiProperty()
  managing_department: string;

  @ManyToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'managing_department' })
  managingDepartment: Department;
}
