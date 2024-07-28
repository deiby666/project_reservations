import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from './db-config';
import { ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (ConfigService: ConfigType<typeof dbConfig>) => {
        const { db } = ConfigService;
        const uriDb = `${db.mongoHost}${db.user}:${db.password}@${db.cluster}/${db.name}?retryWrites=true&w=majority`;
        return { uri: uriDb };
      },
      inject: [dbConfig.KEY],
    }),
  ],
})
export class persistenceModule {}
