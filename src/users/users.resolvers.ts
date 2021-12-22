import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/getUser.Args";
import { User } from "../Models/user";
import { UsersServices } from "./users.services";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/custom-decorators/current-user.decorator';

@Resolver( () => User)
export class UsersResolvers {

    constructor( private readonly userServices : UsersServices) {}

    @Query( () => [User])
    @UseGuards(JwtAuthGuard)
    getUsers(@CurrentUser() user : User) : Promise<User[]> {
        if(user && user.role === 'admin'){
            return this.userServices.getUsers()
        }
        else {

            throw new Error('Get Users - Access Denied')
        }
    }

    @Query( () => User)
    @UseGuards(JwtAuthGuard)
    getUser(@CurrentUser() user : User, @Args() getUserArgs : GetUserArgs) : Promise<User> {
        if(user && user.role === 'admin'){
            return this.userServices.getUser(getUserArgs)
        }
        else {

            throw new Error('Get Users - Access Denied')
        }
    }

    @Mutation(() => User)
    @UseGuards(JwtAuthGuard)
    updateUser(@CurrentUser() user : User, @Args('updateUserData') updateUserData : UpdateUserInput) : Promise<User> {
        if(user && user.role === 'admin'){
            return this.userServices.updateUser(updateUserData)
        }
        else {

            throw new Error('Update - Access Denied')
        }
    }

    @Mutation(() => User)
    @UseGuards(JwtAuthGuard)
    deleteUser(@CurrentUser() user : User, @Args('deleteUserData') deleteUserData : DeleteUserInput) : Promise<User> {
        if(user && user.role === 'admin') {
            return this.userServices.deleteUser(deleteUserData)
        }
        else {
            throw new Error('Delete - Access Denied')
        }
    }

}
