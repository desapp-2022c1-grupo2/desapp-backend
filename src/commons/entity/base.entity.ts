import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";



export class BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn({ name: 'created_at'})
    createdAT: Date

    @UpdateDateColumn({name:'update_at'})
    updatedAT: Date
}