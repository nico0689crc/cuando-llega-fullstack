import { Module } from '@nestjs/common';
import { LinesService } from './lines.service';
import { LinesResolver } from './lines.resolver';

@Module({
  providers: [LinesResolver, LinesService],
})
export class LinesModule {}
