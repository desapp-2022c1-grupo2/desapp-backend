import {BaseEntity} from "../../../commons";
import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Evaluations extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: 'evaluacion_id'})
    id: number;

    @Column({ name: 'tipo', type: "int"})
    tipo: number;

    @Column({ name: 'tp_entregado_id', type: "int"})
    assignment_submitted: number;

    @Column({ name:'estudiante_id', type: "int"})
    student: number;

    @Column({ name: 'jtp_id' , type: "int"})
    jtp: number;

    @Column({ name: 'variable1', type: "int"})
    variables1: number;

    @Column({ name: 'variable2', type: "int"})
    variable2: number;

    @Column({ name: 'variable3', type: "int"})
    variable3: number;

    @Column({ name: 'variable4', type: "int"})
    variable4: number;

    @Column({ name: 'variable5', type: "int"})
    variable5: number;

    @Column({ name:'reflexiones' , type: "varchar"})
    reflections: string;
}