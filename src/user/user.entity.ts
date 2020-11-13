import { BaseEntity, Column, Entity, Unique } from 'typeorm';
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;
}
