import {BaseEntity} from "../../../commons/entity/base.entity";
import {Column} from "typeorm";

export class Jtp extends BaseEntity {

  @Column({name: 'nombre'})
  name: string;

  @Column({name: 'apellido'})
  lastName: string;

  @Column()
  email: string;

  @Column({name: "materia_id"})
  courseId: number;
}