import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { LinesService } from './lines.service';
import { Line } from './entities/line.entity';
import { LinesResponse } from './dto/responses/lines-response.dto';
import { LineResponse } from './dto/responses/line-response.dto';

@Resolver(() => Line)
export class LinesResolver {
  constructor(private readonly linesService: LinesService) {}

  // Todas las lineas
  // Una sola line

  @Query(() => LinesResponse, { name: 'lines' })
  async findAll(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number = 1,
    @Args('pageSize', { type: () => Int, nullable: true, defaultValue: 10 })
    pageSize: number = 10,
  ) {
    return await this.linesService.findAll({page, pageSize});
  }

  @Query(() => LineResponse, { name: 'line' })
  async findOne(@Args('code', { type: () => String }) code: string): Promise<LineResponse> {
    return await this.linesService.findOne(code);
  }
}
