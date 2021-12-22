import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ObjectType, Field, Int} from '@nestjs/graphql';

@Schema()
@ObjectType()
export class User extends Document {

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field()
    mobile : string;

    @Prop()
    @Field()
    hashPassword : string

    @Prop()
    @Field()
    role : string
}

export const UserSchema = SchemaFactory.createForClass(User);
