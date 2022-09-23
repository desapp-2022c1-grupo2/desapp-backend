import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";

@Entity('admin')
export class Admin extends BaseEntity {

  @PrimaryGeneratedColumn({type: "int"})
  id: number;

  @Column({name: 'nombre'})
  name: string;

  @Column()
  lastName: string;

  @Column()
  password: string;


}
