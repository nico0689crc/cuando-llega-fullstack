import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StopsService } from './stops.service';
import { Stop } from './entities/stop.entity';
import { CreateStopInput } from './dto/create-stop.input';
import { UpdateStopInput } from './dto/update-stop.input';

@Resolver(() => Stop)
export class StopsResolver {
  constructor(private readonly stopsService: StopsService) {}

  @Mutation(() => Stop)
  createStop(@Args('createStopInput') createStopInput: CreateStopInput) {
    return this.stopsService.create(createStopInput);
  }

  @Query(() => [Stop], { name: 'stops' })
  findAll() {
    return this.stopsService.findAll();
  }

  @Query(() => Stop, { name: 'stop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stopsService.findOne(id);
  }

  @Mutation(() => Stop)
  updateStop(@Args('updateStopInput') updateStopInput: UpdateStopInput) {
    return this.stopsService.update(updateStopInput.id, updateStopInput);
  }

  @Mutation(() => Stop)
  removeStop(@Args('id', { type: () => Int }) id: number) {
    return this.stopsService.remove(id);
  }
}
