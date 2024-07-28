import { Module } from '@nestjs/common';
import { persistenceModule } from './modules/persistence/persistence.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './modules/persistence/db-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
      envFilePath: '.env',
    }),
    persistenceModule,
  ],
})
export class AppModule {}
