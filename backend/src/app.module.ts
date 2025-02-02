import { Module } from '@nestjs/common';
import { StopsModule } from './modules/stops/stops.module';
import { LinesModule } from './modules/lines/lines.module';
import { StopLinesModule } from './modules/stop_lines/stop_lines.module';

@Module({
  imports: [LinesModule, StopsModule, StopLinesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
