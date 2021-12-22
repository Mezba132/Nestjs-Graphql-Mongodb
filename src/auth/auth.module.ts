import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../Models/user';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersServices } from '../users/users.services';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name : 'User', schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: "JWT@Secret",
      signOptions: { expiresIn: '3600s' }
    }),
  ],
  providers: [AuthResolver, AuthService, UsersServices, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
