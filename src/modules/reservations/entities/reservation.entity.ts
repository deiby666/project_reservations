import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Reservation {
  @Prop()
  type: string;

  @Prop()
  userID: string;
}

export const reservationSchema = SchemaFactory.createForClass(Reservation);
