import { BaseEntity } from '../../../commons';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssignmentSubmitted } from '../../assignment_submitted/entities';
import { Jtp } from '../../jtp';
import { Student } from '../../student';

@Entity('evaluacion')
export class Evaluation extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'evaluacion_id' })
  id: number;

  @Column({ name: 'tipo', type: 'int' })
  type: number;

  @ManyToOne(
    () => AssignmentSubmitted,
    (assignmentSubmitted) => assignmentSubmitted,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'tp_entregado_id' })
  public assignment_submitted: AssignmentSubmitted;

  @ManyToOne(() => Student, (student) => student, {
    eager: true,
  })
  @JoinColumn({ name: 'estudiante_id' })
  public student: Student;

  @ManyToOne(() => Jtp, (jtp) => jtp, {
    eager: true,
  })
  @JoinColumn({ name: 'jtp_id' })
  public jtp: Jtp;

  @Column({ name: 'variable_1', type: 'int' })
  variable1: number;

  @Column({ name: 'variable_2', type: 'int' })
  variable2: number;

  @Column({ name: 'variable_3', type: 'int' })
  variable3: number;

  @Column({ name: 'variable_4', type: 'int' })
  variable4: number;

  @Column({ name: 'variable_5', type: 'int' })
  variable5: number;

  @Column({ name: 'reflexiones', type: 'varchar' })
  reflections: string;
}
