import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UserCasesProxyModule {
  static GET_USER_USECASES_PROXY = 'getUserUsercasesProxy';
}