import {BaseEntity} from "../../../commons/entity/base.entity";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('jtp')
export class Jtp extends BaseEntity {

  @PrimaryGeneratedColumn()
  jtp_id: number;

  @Column({name: 'nombre'})
  name: string;

  @Column({name: 'apellido'})
  lastName: string;

  @Column()
  email: string;

  // @Column({name: 'clave'})
  // password: string;

  @Column({name: "materia_id"})
  courseId: number;
}