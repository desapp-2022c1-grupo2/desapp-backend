import { BaseEntity } from '../../../commons';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Course} from "../../course";

@Entity('jtp')
export class Jtp extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'jtp_id' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'apellido' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'clave', type: 'varchar', length: 255 })
  password: string;

  @Column({ name: 'materia_id' })
  courseId: number;


}
