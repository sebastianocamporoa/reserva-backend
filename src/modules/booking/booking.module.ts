// src/modules/booking/booking.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingController } from './infrastructure/controllers/booking.controller';
import { BookingService } from './application/services/booking.service';
import { BookingRepository } from './domain/repositories/booking.repository';
import { TypeOrmBookingRepository } from './infrastructure/repositories/typeorm-booking.repository';
import { BookingEntity } from './domain/entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  controllers: [BookingController],
  providers: [
    BookingService,
    {
      provide: BookingRepository,
      useClass: TypeOrmBookingRepository,
    },
  ],
})
export class BookingModule {}
