import {IsString} from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";

export class CreateJtpDto {
   @PrimaryGeneratedColumn()
   jtp_id: number;

   @IsString()
   nombre: string;

   @IsString()
   apellido: string;

   @IsString()
   email: string;

   @IsString()
   clave: string;

   @IsString()
   materia_id: number

}
