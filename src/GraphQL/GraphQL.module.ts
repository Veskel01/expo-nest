import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EntitiesModule } from '../Entities/Entities.module';
import { VoidScalar } from './Void.scalar';

@Module({
  imports: [
    EntitiesModule,
    GraphQLModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        playground: true,
        context: ({ req, res }) => ({ req, res }),
        cors: {
          origin: configService.get('REACT_ORIGIN'),
          credentials: true,
        },
        debug: false,
        useGlobalPrefix: true,
        autoSchemaFile: process.cwd() + '/src/GraphQL/Schema.graphql',
        path: 'graphql',
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [VoidScalar],
})
export class GraphQlConfigModule {}
