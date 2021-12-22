import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-graphql')
  ],
  providers: [],
})
export class AppModule {}
