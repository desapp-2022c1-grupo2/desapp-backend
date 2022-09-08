import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";

@Entity('materia')
export class Course extends BaseEntity {

  @PrimaryGeneratedColumn({type: "int", name: "materia_id"})
  id: number;

  @Column({name: 'nombre'})
  name: string;

  @Column({name: 'materia_padre_id', type: "int"})
  parentCourseId: number;

  @Column({name: 'anio'})
  year: number;

  @Column({name: 'es_cursada_anterior'})
  isPreviousCourse: number;


}
