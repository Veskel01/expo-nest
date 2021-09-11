import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class MySqlConnection implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const host = this.configService.get('DB_HOST');
    const port = this.configService.get('DB_PORT');
    const username = this.configService.get('DB_USERNAME');
    const password = this.configService.get('DB_PASSWORD');
    const database = this.configService.get('DB_DATABASE_NAME');

    return {
      type: 'postgres',
      host,
      port,
      password,
      username,
      database,
      autoLoadEntities: true,
      synchronize: true,
      uuidExtension: 'pgcrypto',
    };
  }
}
