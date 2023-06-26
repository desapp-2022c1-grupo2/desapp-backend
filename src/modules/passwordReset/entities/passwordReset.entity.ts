import {Column, Entity, PrimaryGeneratedColumn, Timestamp} from "typeorm";

@Entity('password_reset')
export class PasswordReset {
    constructor(entityRole: string, entityId: number) {
        // this.id = id;
        this.entityRole = entityRole;
        this.entityId = entityId;
        // this.createdAt = createdAt;
    }

    @PrimaryGeneratedColumn({name: "hash_id"})
    id: string;

    @Column({name: 'entity_role'})
    entityRole: string;

    @Column({name: 'entity_id'})
    entityId: number;

    @Column({name: 'created_at', type: 'timestamp' })
    createdAt: Date;
}
