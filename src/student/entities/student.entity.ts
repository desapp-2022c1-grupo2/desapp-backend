import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('estudiantes')
export class Student {

    @PrimaryGeneratedColumn('increment')
    id: number
}
