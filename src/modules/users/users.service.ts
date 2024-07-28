import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private reservationModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdReservation = new this.reservationModel(createUserDto);
    return await createdReservation.save();
  }

  findAll() {
    return this.reservationModel.find();
  }

  findOne(id: number) {
    return this.reservationModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.reservationModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.reservationModel.findByIdAndDelete(id);
  }
}
