import { IsNumber, IsString } from 'class-validator';

export class CreateJtpDto {
  @IsNumber()
  jtp_id: number;

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  email: string;

  // @IsString()
  // clave: string;

  @IsNumber()
  materia_id: number;
}
