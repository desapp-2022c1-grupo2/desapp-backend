import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons/entity/base.entity";

@Entity('materia')
export class Assignment extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'materia_id'})
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    @Column( { name: 'anio' })
    year: number;

    @Column({ name: 'es_cursada_anterior' })
    previous_course: boolean

}
