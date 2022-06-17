import {Injectable} from '@nestjs/common';
import {CreateStudentDto} from './dto/create-student.dto';
import {UpdateStudentDto} from './dto/update-student.dto';

@Injectable()
export class StudentService {
  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return [
      {
      estudiante_id: "20",
      nombre: "Germ\u00c3\u00a1n",
      apellido: "Brizou",
      mail: "gerbrizou@gmail.com",
      clave: "ger300497",
      celular: "2944536432",
      dni: "40112013",
      fecha_nacimiento: "1997-04-30",
      materia_cursada: "33",
      fecha_cambio_materia_cursada: "2020-01-01 00:00:00",
      materia_padre_cursada: "0",
      comision: "0",
      rondina: "0",
      sobre_mi: "",
      imagen: "5e98d8f860912f177b9c7050f.jpg",
      materia2: "4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,24,25,26",
      habilitado: "1"
    },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
