import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  @Entity()
  export class Board {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    username: string;
  
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