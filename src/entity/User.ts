import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;


  @Column()
  password: string;

  @Column()
  roleId: number;

  @Column()
  phone: string;

  @Column({type: "timestamp",default: ()=> "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({type: "timestamp", default: null})
  updatedAt: Date;

  @Column({type: "timestamp", default: null})
  deletedAt: Date;
}
