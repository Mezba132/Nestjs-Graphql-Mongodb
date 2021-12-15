import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "../dto/args/getUser.Args";
import { CreateUserInput } from "../dto/input/create-user.Input";
import { User } from "../models/user";
import { UsersServices } from "./users.services";
import {DeleteUserInput} from "../dto/input/delete-user.input";
import {UpdateUserInput} from "../dto/input/update-user.input";

@Resolver( () => User)
export class UsersResolvers {

    constructor( private readonly userServices : UsersServices) {}

    @Query( () => User)
    getUser(@Args() getUserArgs : GetUserArgs) : Promise<User> {
        return this.userServices.getUser(getUserArgs)
    }

    @Query( () => [User])
    getUsers() {
        return this.userServices.getUsers()
    }

    @Mutation(() => User)
    createUser(@Args('createUserData')  createUserData : CreateUserInput ) : Promise<User> {
        return this.userServices.createUser(createUserData)
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData : UpdateUserInput) : Promise<User> {
        return this.userServices.updateUser(updateUserData)
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData : DeleteUserInput) : Promise<User> {
        return this.userServices.deleteUser(deleteUserData)
    }

}