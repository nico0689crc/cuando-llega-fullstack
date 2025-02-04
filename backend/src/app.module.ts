import { Module } from '@nestjs/common';
import { StopsModule } from './modules/stops/stops.module';
import { LinesModule } from './modules/lines/lines.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './core/config/envs';
import { Line } from './modules/lines/entities/line.entity';
import { Stop } from './modules/stops/entities/stop.entity';
import { StopLine } from './modules/stop_lines/entities/stop_line.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.postgresHost || 'localhost',
      port: parseInt(envs.postgresContainerPort, 10) || 5432,
      username: envs.postgresUser || 'your_username',
      password: envs.postgresPassword || 'your_password',
      database: envs.postgresDb || 'your_database',
      autoLoadEntities: true,
      synchronize: false,
      entities: [Line, Stop, StopLine],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      introspection: true,
      plugins: process.env.NODE_ENV !== 'production' ? [ApolloServerPluginLandingPageLocalDefault()] : [],
    }),
    LinesModule,
    StopsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
