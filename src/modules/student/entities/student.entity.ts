import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";

@Entity('estudiante')
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn('increment', {name:'estudiante_id'})
    id: number;

    @Column({name: 'nombre'})
    name: string;

    @Column({name: 'apellido'})
    lastName: string;

    @Column({name: 'mail'})
    email: string;

    // @Column()
    // clave: string;

    @Column({name: 'celular'})
    phone: string;

    @Column({name: 'dni'})
    dni: string;

    @Column({name: 'fecha_nacimiento'})
    birthdate: Date;

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

    @Column({name: 'sobre_mi'})
    about: string;

    @Column({name: 'imagen'})
    picture: string;

    @Column()
    materia2: string;

    @Column()
    habilitado: number;

}
