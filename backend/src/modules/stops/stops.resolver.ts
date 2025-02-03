import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StopsService } from './stops.service';
import { Stop } from './entities/stop.entity';
import { NextArrivalsResponse } from './dto/responses/next-arrivals-response.dto';

@Resolver(() => Stop)
export class StopsResolver {
  constructor(private readonly stopsService: StopsService) {}

  // Todas las paradas cercanas a una ubicación
  // Proximo arribo de un colectivo a una parada

  @Query(() => NextArrivalsResponse, { name: 'next_arrivals' })
  nextArrivals(
    @Args('stopIdentifier', { type: () => String }) stopIdentifier: string,
    @Args('lineCode', { type: () => String }) lineCode: string,
  ) {
    return this.stopsService.nextArrivals({ stopIdentifier, lineCode });
  }
}
