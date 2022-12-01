import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  IException,
  IFormatExceptionMessage,
} from '../../domain/exceptions/exceptions.interface';

@Injectable()
export class ExceptionsService implements IException {
  UnauthorizedException(data: IFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }

  badRequestException(data: IFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }

  forbiddenException(data: IFormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }

  internalServerErrorException(data: IFormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }
}