import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'user_roles' })
export class UserRoleEntity {
    @PrimaryGeneratedColumn()
    user_role_id: number;
    @Column( {nullable:false})
    user_type_id: number;
    @Column( {nullable:false})
    service_id: number;
    @Column({ unique: true })
    code: string;
    @Column()
    name: string;
    @Column()
    can_view: boolean;
    @Column()
    can_update: boolean;
    @Column()
    can_delete: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    status: boolean;
}
