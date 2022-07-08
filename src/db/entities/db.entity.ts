import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'user' })
export class DbEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column({nullable:true})
    store: number;
    @Column({ unique: true })
    email: string;
}
