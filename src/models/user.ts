import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ObjectType, Field, Int} from '@nestjs/graphql';

@Schema()
@ObjectType()
export class User extends Document {

    @Prop()
    @Field({ nullable: true })
    name: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field(() => Int)
    age: number;

    @Prop()
    @Field({ nullable: true })
    isSubscribed?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);