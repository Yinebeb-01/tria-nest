import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id:  number;

    @Column()
    name: string;

    @Column()
    description: string;

    // fixme: unable to load foregin key
    // Many departments can be managed by one department (nullable true for the top-most level)
    // @ManyToOne( () => Department, {eager:true }) 
    // @JoinColumn({name:"managing_department"})
    @Column({ nullable: true })
    managing_department: number;
}
