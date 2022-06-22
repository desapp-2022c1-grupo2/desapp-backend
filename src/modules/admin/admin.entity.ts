import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../commons/entity/base.entity";

@Entity('admin')
export class Admin extends BaseEntity {

    @Column({name:'nombre'})
    name: string;

    @Column()
    lastName: string;

}