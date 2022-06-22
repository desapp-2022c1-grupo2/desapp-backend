import {Injectable} from '@nestjs/common';
import {CreateAssignmentDto} from './dto/create-assignment.dto';
import {UpdateAssignmentDto} from './dto/update-assignment.dto';

@Injectable()
export class AssignmentService {
  create(createAssignmentDto: CreateAssignmentDto) {
    return 'This action adds a new assignment';
  }

  findAll() {
    return [
      {
        trabajo_id: "30",
        jtp_id: "7",
        numero: "1",
        nombre: "Pre entrega PF TP Invierno- Somos lo que comemos",
        url: "pre-entrega-pf-tp-invierno-somos-lo-que-comemos",
        descripcion_corta: " INTERFAZ + ALIMENTACI\u00c3\u201cN + el producto como sistema + sustentabilidad",
        descripcion: "Pre entrega PF\r\nPlasmar todo lo trabajado en los ejercicios semanales incluyendo el ejercicio 8 + GIF\r\n",
        consigna: "",
        fecha_inicio: "2020-08-23 23:14:30",
        fecha_entrega: "2020-08-24",
        etiquetas: "Interfaz, producto como sistema, sustentabilidad",
        variable_1: "Posicionamiento",
        variable_2: "Propuesta",
        variable_3: "Secuencia de uso",
        variable_4: "Interfaz",
        variable_5: "Comunicaci\u00c3\u00b3n ",
        tipo: "0",
        estado: "0",
        materia_id: "31",
        proceso_individual: "0"
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} assignment`;
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
