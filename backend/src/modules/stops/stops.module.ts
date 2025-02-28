import { Module } from '@nestjs/common';
import { StopsService } from './stops.service';
import { StopsResolver } from './stops.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stop } from './entities/stop.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Line } from '../lines/entities/line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stop, Line]), ConfigModule],
  providers: [StopsService, StopsResolver, ConfigService],
})
export class StopsModule {}
