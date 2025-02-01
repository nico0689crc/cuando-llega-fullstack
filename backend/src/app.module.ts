import { Module } from '@nestjs/common';
import { LinesModule } from './modules/lines/lines.module';

@Module({
  imports: [LinesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
