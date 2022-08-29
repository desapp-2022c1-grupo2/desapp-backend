import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";

/**
 * Tabla relacional entre JTP y Materia (course)
 * Relacion many to many
 * Esto modifica la base de datos que esta en produccion
 * Consultar
 */

@Entity('jtp_materia')
export class JtpCourseEntity extends BaseEntity {

    @PrimaryGeneratedColumn({type: 'int', name: 'jtp_materia_id'})
    id: number;



}