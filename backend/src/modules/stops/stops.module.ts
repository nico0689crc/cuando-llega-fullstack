import { Module } from '@nestjs/common';
import { StopsService } from './stops.service';
import { StopsResolver } from './stops.resolver';

@Module({
  providers: [StopsResolver, StopsService],
})
export class StopsModule {}
