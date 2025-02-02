import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LinesService } from './lines.service';
import { Line } from './entities/line.entity';
import { CreateLineInput } from './dto/create-line.input';
import { UpdateLineInput } from './dto/update-line.input';

@Resolver(() => Line)
export class LinesResolver {
  constructor(private readonly linesService: LinesService) {}

  @Mutation(() => Line)
  createLine(@Args('createLineInput') createLineInput: CreateLineInput) {
    return this.linesService.create(createLineInput);
  }

  @Query(() => [Line], { name: 'lines' })
  findAll() {
    return this.linesService.findAll();
  }

  @Query(() => Line, { name: 'line' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.linesService.findOne(id);
  }

  @Mutation(() => Line)
  updateLine(@Args('updateLineInput') updateLineInput: UpdateLineInput) {
    return this.linesService.update(updateLineInput.id, updateLineInput);
  }

  @Mutation(() => Line)
  removeLine(@Args('id', { type: () => Int }) id: number) {
    return this.linesService.remove(id);
  }
}
