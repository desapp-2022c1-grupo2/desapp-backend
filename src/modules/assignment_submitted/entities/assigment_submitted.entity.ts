import { BaseEntity } from '../../../commons';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_entregado')
export class Assigment_SubmittedEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'tp_entregado_id' })
  id: number;

  @Column({ name: 'trabajo_id' })
  tpId: number;

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

  @Column({ name: 'estudiante_id' })
  studentId: number;

  @Column({ name: 'publico_estudiante' })
  studentPublic: number;
}
