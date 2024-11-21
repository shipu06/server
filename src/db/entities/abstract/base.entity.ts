import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false})
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'last_updated_at', nullable: false})
    lastUpdatedAt: Date

    @BeforeInsert()
    setCreatedAt() {
      if (!this.createdAt) {
        this.createdAt = new Date();
      }
    }
  
    @BeforeUpdate()
    setUpdatedAt() {
      this.lastUpdatedAt = new Date();
    }
}