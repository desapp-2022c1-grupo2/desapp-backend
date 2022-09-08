import {IsNumber} from "class-validator";

export class CreateStudentDto {

  @IsNumber()
  estudiante_id: number;

}
