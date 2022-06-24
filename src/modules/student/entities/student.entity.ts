import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons/entity/base.entity";

@Entity('estudiante')
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn('increment', {name:'estudiante_id'})
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    mail: string;

    @Column()
    clave: string;

    @Column()
    celular: string;

    @Column()
    dni: string;

    @Column()
    fecha_nacimiento: Date;

    @Column()
    materia_cursada: number;

    @Column()
    fecha_cambio_materia_cursada: Date;

    @Column()
    materia_padre_cursada: number;

    @Column()
    comision: number;

    @Column()
    rondina: number;

    @Column()
    sobre_mi: string;

    @Column()
    imagen: string;

    @Column()
    materia2: string;

    @Column()
    habilitado: number;

}