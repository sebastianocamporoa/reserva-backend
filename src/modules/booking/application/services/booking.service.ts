// src/modules/booking/application/services/booking.service.ts
import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../../domain/repositories/booking.repository';
import { BookingEntity } from '../../domain/entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(private readonly bookingRepository: BookingRepository) {}

  async findAll(): Promise<BookingEntity[]> {
    return this.bookingRepository.findAll();
  }

  async findById(id: number): Promise<BookingEntity> {
    return this.bookingRepository.findById(id);
  }

  async create(booking: BookingEntity): Promise<BookingEntity> {
    return this.bookingRepository.create(booking);
  }

  async update(booking: BookingEntity): Promise<BookingEntity> {
    return this.bookingRepository.update(booking);
  }

  async delete(id: number): Promise<void> {
    return this.bookingRepository.delete(id);
  }
}
