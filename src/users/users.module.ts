import { Module } from "@nestjs/common";
import { UsersResolvers } from "./users.resolvers";
import { UsersServices } from "./users.services";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../models/user";

@Module({
    imports: [MongooseModule.forFeature([{ name : 'User', schema: UserSchema }])],
    providers: [UsersResolvers, UsersServices]
})
export class UsersModule {}