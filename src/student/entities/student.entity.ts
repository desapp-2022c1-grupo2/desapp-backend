import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('student')
export class Student {

    @PrimaryGeneratedColumn('increment')
    id: number
}
