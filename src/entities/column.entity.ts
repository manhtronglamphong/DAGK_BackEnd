import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  @Entity()
  export class Columns {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    boardId: string;
  
    @Column()
    name: string;
  
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