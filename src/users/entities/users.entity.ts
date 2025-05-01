import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  // 1) 길이가 20을 넘지 않을 것
  // 2) 유일무이한 값이 될 것
  @Column({
    length: 20,
    unique: true,
  })
  nickname: string;

  // 1) 유일무이한 값이 될 것
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
