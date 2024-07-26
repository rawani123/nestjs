import { Module } from '@nestjs/common';

import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
      UserModule
    ],
  
    controllers: [AlbumController],
  })
export class AppModule {}
