// src/modules/booking/domain/repositories/booking.repository.ts
import { BookingEntity } from '../entities/booking.entity';

export abstract class BookingRepository {
  abstract findAll(): Promise<BookingEntity[]>;
  abstract findById(id: number): Promise<BookingEntity>;
  abstract create(booking: BookingEntity): Promise<BookingEntity>;
  abstract update(booking: BookingEntity): Promise<BookingEntity>;
  abstract delete(id: number): Promise<void>;
}
