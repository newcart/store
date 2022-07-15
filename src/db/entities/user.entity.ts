import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id : number;
    @Column({ unique: true })
    code: string;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column({nullable:true})
    tc_kimlik: string;
    @Column({nullable:true})
    gsm: string;
    @Column({nullable:true})
    telephone: string;
    @Column({nullable:true})
    api_key: string;
    @Column({nullable:true})
    secret_key: string;
    @Column({nullable:true})
    image: string;
    @Column({nullable:true})
    address_id: number;
    @Column({nullable:true})
    store_id: number;
    @Column({nullable:true})
    user_type_id: number;
    @Column({nullable:true})
    language_id: number;
    @Column({nullable:true})
    last_ip: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    status: boolean;
}


