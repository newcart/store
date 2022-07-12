import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'stores' })
export class DbEntity {
    @PrimaryGeneratedColumn()
    store_id: number;
    @Column({ unique: true })
    store_code: number;
    @Column()
    store_name: string;
    @Column({nullable:true})
    address: string;
    @Column({nullable:true})
    town_id: number;
    @Column({nullable:true})
    city_id: number;
    @Column({nullable:true})
    tax_number: string;
    @Column({nullable:true})
    tax_office: string;
    @Column({nullable:true})
    email: string;
    @Column({nullable:true})
    mobile: string;
    @Column({nullable:true})
    telephone: string;
    @Column({nullable:true})
    image: string;
    @CreateDateColumn({nullable:true})
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    status: boolean;
}
