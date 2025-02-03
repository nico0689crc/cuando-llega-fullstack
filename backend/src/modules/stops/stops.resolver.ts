import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StopsService } from './stops.service';
import { Stop } from './entities/stop.entity';

@Resolver(() => Stop)
export class StopsResolver {
  constructor(private readonly stopsService: StopsService) {}

  // Todas las paradas por línea
  // Todas las paradas cercanas a una ubicación
  // Proximo arribo de un colectivo a una parada

  @Query(() => [Stop], { name: 'stops' })
  findAll() {
    return this.stopsService.findAll();
  }

  @Query(() => Stop, { name: 'stop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stopsService.findOne(id);
  }
}
