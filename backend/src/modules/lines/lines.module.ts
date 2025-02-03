import { Module } from '@nestjs/common';
import { LinesService } from './lines.service';
import { LinesResolver } from './lines.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Line } from './entities/line.entity';


@Module({
  providers: [LinesResolver, LinesService],
  imports: [TypeOrmModule.forFeature([Line])],
})
export class LinesModule {}
