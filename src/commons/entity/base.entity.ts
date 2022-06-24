import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";



export class BaseEntity {

    @CreateDateColumn({ name: 'created_at'})
    createdAT: Date

    @UpdateDateColumn({name:'update_at'})
    updatedAT: Date
}