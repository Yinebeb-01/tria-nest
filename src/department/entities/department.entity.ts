import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column({ nullable: true })
  @ApiProperty()
  managing_department: number;
}
