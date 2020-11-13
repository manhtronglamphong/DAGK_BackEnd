import {
  Entity,
  Column,
  UpdateDateColumn,
  DeleteDateColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;
}
