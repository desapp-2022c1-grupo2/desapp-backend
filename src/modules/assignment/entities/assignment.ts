import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../../../commons";


@Entity('trabajo')
export class Assignment extends BaseEntity {

    @PrimaryGeneratedColumn('increment',{name:'trabajo_id'})
    id: number;

    @Column({ name: 'jtp_id'})
    jtp_id: number;

    @Column({name: 'numero'})
    number?: number;

    @Column({ name: 'nombre'})
    name: string;

    @Column({ name: 'url'})
    url: string;

    @Column( { name: 'descripcion'})
    description: string;

}