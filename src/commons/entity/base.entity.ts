import {CreateDateColumn, UpdateDateColumn} from "typeorm";



export abstract class BaseEntity {

    abstract id: number

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name:'update_at'})
    updatedAt: Date
}