import { Module } from '@nestjs/common';
import { persistenceModule } from './modules/persistence/persistence.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './modules/persistence/db-config';
import { UsersModule } from './modules/users/users.module';
import { ReservationsModule } from './modules/reservations/reservations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
      envFilePath: '.env',
    }),
    persistenceModule,
    UsersModule,
    ReservationsModule
  ],
})
export class AppModule {}
