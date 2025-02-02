import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StopLinesService } from './stop_lines.service';
import { StopLine } from './entities/stop_line.entity';
import { CreateStopLineInput } from './dto/create-stop_line.input';
import { UpdateStopLineInput } from './dto/update-stop_line.input';

@Resolver(() => StopLine)
export class StopLinesResolver {
  constructor(private readonly stopLinesService: StopLinesService) {}

  @Mutation(() => StopLine)
  createStopLine(@Args('createStopLineInput') createStopLineInput: CreateStopLineInput) {
    return this.stopLinesService.create(createStopLineInput);
  }

  @Query(() => [StopLine], { name: 'stopLines' })
  findAll() {
    return this.stopLinesService.findAll();
  }

  @Query(() => StopLine, { name: 'stopLine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stopLinesService.findOne(id);
  }

  @Mutation(() => StopLine)
  updateStopLine(@Args('updateStopLineInput') updateStopLineInput: UpdateStopLineInput) {
    return this.stopLinesService.update(updateStopLineInput.id, updateStopLineInput);
  }

  @Mutation(() => StopLine)
  removeStopLine(@Args('id', { type: () => Int }) id: number) {
    return this.stopLinesService.remove(id);
  }
}
