// src/modules/booking/infrastructure/controllers/booking.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookingService } from '../../application/services/booking.service';
import { BookingEntity } from '../../domain/entities/booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.bookingService.findById(id);
  }

  @Post()
  async create(@Body() booking: BookingEntity) {
    return this.bookingService.create(booking);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() booking: BookingEntity) {
    booking.id = id;
    return this.bookingService.update(booking);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.bookingService.delete(id);
  }
}
