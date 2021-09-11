import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ConfigModuleValidation from './Config/Config.validation';
import { DatabaseModule } from './Database/Database.module';
import { EntitiesModule } from './Entities/Entities.module';
import { GraphQlConfigModule } from './GraphQL/GraphQL.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: ConfigModuleValidation,
    }),
    DatabaseModule,
    EntitiesModule,
    GraphQlConfigModule,
  ],
})
export class AppModule {}
