// src/modules/booking/domain/entities/booking.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bookings')
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  businessId: number;

  @Column()
  date: Date;

  @Column()
  status: string;
}
