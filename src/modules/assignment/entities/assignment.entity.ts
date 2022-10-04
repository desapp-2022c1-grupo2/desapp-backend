import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../commons';

@Entity('trabajo')
export class Assignment extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'trabajo_id' })
  id: number;

  @Column({ name: 'jtp_id' })
  jtpId: number;

  @Column({ name: 'numero' })
  number?: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'url' })
  url: string;

  @Column({ name: 'descripcion_corta' })
  shortDescr: string;

  @Column({ name: 'descripcion', type: 'varchar', length: 5000 })
  description: string;

  @Column({ name: 'consigna' })
  taskDescription: string;

  @Column({ name: 'fecha_inicio', type: 'timestamp' })
  startDate: Date;

  @Column({ name: 'fecha_entrega', type: 'date' })
  endDate: Date;

  @Column({ name: 'etiquetas' })
  tags: string;

  @Column({ name: 'variable_1' })
  var1: string;

  @Column({ name: 'variable_2' })
  var2: string;

  @Column({ name: 'variable_3' })
  var3: string;

  @Column({ name: 'variable_4' })
  var4: string;

  @Column({ name: 'variable_5' })
  var5: string;

  @Column({ name: 'tipo', type: 'tinyint' })
  type: number;

  @Column({ name: 'estado', type: 'tinyint' })
  status: number;

  @Column({ name: 'materia_id' })
  courseId: number;

  @Column({ name: 'proceso_individual', type: 'tinyint' })
  individualProcess: number;
}
