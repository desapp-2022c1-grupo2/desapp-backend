import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('admin')
export class Admin {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({name:'nombre'})
    name: string;

    @Column()
    lastName: string;

    @Column()
    rol: string;
}