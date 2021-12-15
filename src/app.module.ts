import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-graphql')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
