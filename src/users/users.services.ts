import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../dto/input/create-user.Input";
import { User } from "../models/user";
import {GetUserArgs} from "../dto/args/getUser.Args";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types, Schema} from "mongoose";
import {DeleteUserInput} from "../dto/input/delete-user.input";
import {UpdateUserInput} from "../dto/input/update-user.input";

@Injectable()
export class UsersServices {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    public async createUser( createUserData : CreateUserInput ) : Promise<User> {
        const newUser = new this.userModel(createUserData);
        return await newUser.save();
    }

    public async getUsers() : Promise<User[]> {
        return await this.userModel.find().exec();
    }

    public async getUser( getUserArgs : GetUserArgs ) : Promise<User> {
        return await this.userModel.findOne({ email : getUserArgs.email }).exec()
    }

    public async deleteUser( deleteUser : DeleteUserInput ) : Promise<User> {
        return await this.userModel.findOneAndDelete({ email : deleteUser.email }).exec()
    }

    public async updateUser( updateUser : UpdateUserInput ) : Promise<User> {
        const user = await this.userModel.findOne({email : updateUser.email}).exec()
        user.name = updateUser.name
        user.email = updateUser.email
        user.age = updateUser.age
        user.isSubscribed = updateUser.isSubscribed
        return user.save();
    }

}