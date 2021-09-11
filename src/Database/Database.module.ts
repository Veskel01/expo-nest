import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlConnection } from './Db.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MySqlConnection,
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
