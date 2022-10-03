import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";

@Entity('admin')
// @TableInheritance({ column: { type: "varchar", name: "type" } })
export class Admin extends BaseEntity {

  @PrimaryGeneratedColumn({type: "int"})
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

}
