import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from './entities/reservation.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<Reservation>,
  ) {}

  async create(createReservationDto: CreateReservationDto) {
    const createdReservation = new this.reservationModel(createReservationDto);
    return await createdReservation.save();
  }

  findAll() {
    return this.reservationModel.find();
  }

  findOne(id: number) {
    return this.reservationModel.findById(id);
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationModel.findByIdAndUpdate(id, updateReservationDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.reservationModel.findByIdAndDelete(id);
  }
}
