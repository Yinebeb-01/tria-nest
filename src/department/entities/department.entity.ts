import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id:  number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;

    // Many departments can be managed by one department (nullable: true), for the top-most level
    @ManyToOne(() => Department, { nullable: true }) 
    managing_department: number;
}
