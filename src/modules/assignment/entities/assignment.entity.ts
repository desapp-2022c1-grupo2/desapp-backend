import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";


@Entity('trabajo')
export class AssignmentEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment',{name:'trabajo_id',})
    id: number;

    @Column({ name: 'jtp_id', nullable: true })
    jtp_id: number;

    @Column({name: 'numero'})
    number?: number;

    @Column({ name: 'nombre', nullable: true})
    name: string;

    @Column({ name: 'url'})
    url: string;

    @Column( {name: 'descripcion_corta', nullable: true})
    descripcion_corta: string;

    @Column( { name: 'descripcion', nullable: true})
    description: string;

    @Column({ name: 'consigna',nullable: true})
    consigna: string

    @Column({ name: 'fecha_inicio',nullable: true})
    fechaInicio: Date;

    @Column({ name: 'fecha_entrega', nullable: true})
    fechaEntrega: Date;

    @Column({ name: 'etiquetas', nullable: true})
    etiquetas: string

    @Column({ name: 'variable1', nullable: true})
    variable1: string;

    @Column({ name: 'variable2', nullable: true})
    variable2: string;

    @Column({ name: 'variable3', nullable: true})
    variable3: string;

    @Column({ name: 'variable4', nullable: true})
    variable4: string;

    @Column({ name: 'variable5', nullable: true})
    variable5: string;

    @Column({ name: 'tipo', nullable: true} )
    tipo: number;

    @Column({ name: 'estado', nullable: true})
    estado: number;

    @Column({ name: 'materia_id',nullable: true})
    materiaId: number;

    @Column({ name: 'proceso_individual', nullable: true})
    procesoIndividual: number;

}