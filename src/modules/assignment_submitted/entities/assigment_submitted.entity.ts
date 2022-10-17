import { BaseEntity } from '../../../commons';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '../../student';
import { Assignment } from '../../assignment';

@Entity('tp_entregado')
export class AssignmentSubmitted extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'tp_entregado_id' })
  id: number;

  @ManyToOne(() => Assignment, (assignment) => assignment, {
    eager: true,
  })
  @JoinColumn({ name: 'trabajo_id' })
  public assignment: Assignment;

  @Column({ name: 'miembros' })
  members: string;

  @Column({ name: 'etiquetas' })
  tags: string;

  @Column({ name: 'publico' })
  public: string;

  @Column({ name: 'portada' })
  frontPage: string;

  @Column({ name: 'fecha_entrega' })
  dataSubmitted: Date;
  @Column({ name: 'nota' })
  qualification: number;

  @Column({ name: 'promediar' })
  average: number;

  @Column({ name: 'reflexiones' })
  reflections: string;

  @ManyToOne(() => Student, (student) => student, {
    eager: true,
  })
  @JoinColumn({ name: 'estudiante_id' })
  student: Student;

  @Column({ name: 'publico_estudiante' })
  studentPublic: number;
}
