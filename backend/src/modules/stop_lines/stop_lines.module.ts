import { Module } from '@nestjs/common';
import { StopLinesService } from './stop_lines.service';
import { StopLinesResolver } from './stop_lines.resolver';

@Module({
  providers: [StopLinesResolver, StopLinesService],
})
export class StopLinesModule {}
