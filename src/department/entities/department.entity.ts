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

  // fixme: unable to load foregin key
  // Many departments can be managed by one department (nullable true for the top-most level)
  // @ManyToOne( () => Department, {eager:true })
  // @JoinColumn({name:"managing_department"})
  @Column({ nullable: true })
  @ApiProperty()
  managing_department: number;
}
