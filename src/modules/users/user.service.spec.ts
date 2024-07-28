import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersService', () => {
  let service: UsersService;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken(User.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users with _id', async () => {
      const result = [
        {  name: 'Deiby' },
        {  name: 'Alice' },
      ] as User[];

      jest.spyOn(model, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toEqual(result);
      expect(model.find).toHaveBeenCalled();
    });
  });

});
