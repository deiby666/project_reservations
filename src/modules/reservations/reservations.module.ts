import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { reservationSchema, Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: reservationSchema },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
