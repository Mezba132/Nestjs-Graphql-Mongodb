import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {

    @Field()
    readonly email : string

    @Field()
    readonly name : string

    @Field()
    readonly age : number

    @Field()
    readonly isSubscribed : boolean

}