import { ExtractJwt, Strategy  } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersServices } from '../../users/users.services';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(private readonly usersServices: UsersServices) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "JWT@Secret"
    })
  }

  validate(validationPayload: { email: string, sub: string }): Promise<any> | null {
    return this.usersServices.getUser({email : validationPayload.email});
  }
}