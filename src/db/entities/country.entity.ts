import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'countries' })
export class CountryEntity {
    @PrimaryGeneratedColumn()
    country_id: number;
    @Column({ unique: true })
    code: string;
    @Column()
    name: string;
    @Column({nullable:true})
    image: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    status: boolean;
}
