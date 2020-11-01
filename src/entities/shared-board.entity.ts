import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  @Entity()
  export class SharedBoard {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    boardId: string;
  
    @Column()
    sharedUsername: string;

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