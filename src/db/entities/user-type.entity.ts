import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'user_types' })
export class UserTypeEntity {
    @PrimaryGeneratedColumn()
    user_type_id: number;
    @Column({ unique: true })
    code: string;
    @Column()
    name: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    status: boolean;
}
