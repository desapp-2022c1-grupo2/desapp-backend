import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../commons';

@Entity('admin')
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'nombre' })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'apellido' })
  lastName: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ unique: true, type: 'varchar', length: 255, name: 'email' })
  email: string;

}
