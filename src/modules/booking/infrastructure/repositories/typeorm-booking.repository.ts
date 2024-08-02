// src/modules/booking/infrastructure/repositories/typeorm-booking.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from '../../domain/repositories/booking.repository';
import { BookingEntity } from '../../domain/entities/booking.entity';

@Injectable()
export class TypeOrmBookingRepository extends BookingRepository {
  constructor(
    @InjectRepository(BookingEntity)
    private readonly repository: Repository<BookingEntity>,
  ) {
    super();
  }

  async findAll(): Promise<BookingEntity[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<BookingEntity> {
    return this.repository.findOne({ where: { id } });
  }

  async create(booking: BookingEntity): Promise<BookingEntity> {
    return this.repository.save(booking);
  }

  async update(booking: BookingEntity): Promise<BookingEntity> {
    return this.repository.save(booking);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
