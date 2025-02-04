import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { StopsService } from './stops.service';
import { Stop } from './entities/stop.entity';
import { NextArrivalsResponse } from './dto/responses/next-arrivals-response.dto';
import { NearestStopsResponse } from './dto/responses/nearest-stops-response.dto';

@Resolver(() => Stop)
export class StopsResolver {
  constructor(private readonly stopsService: StopsService) {}

  @Query(() => NextArrivalsResponse, { name: 'next_arrivals' })
  nextArrivals(
    @Args('stopIdentifier', { type: () => String }) stopIdentifier: string,
    @Args('lineCode', { type: () => String }) lineCode: string,
  ) {
    return this.stopsService.nextArrivals({ stopIdentifier, lineCode });
  }

  @Query(() => NearestStopsResponse, { name: 'nearest_stops' })
  findNearestStops(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number = 1,
    @Args('pageSize', { type: () => Int, nullable: true, defaultValue: 10 })
    pageSize: number = 10,
    @Args('latitude', { type: () => Number }) latitude: number,
    @Args('longitude', { type: () => Number }) longitude: number,
    @Args('radius', { type: () => Number, nullable: true, defaultValue: 1 })
    radius?: number,
  ) {
    return this.stopsService.findNearestStops(
      page,
      pageSize,
      latitude,
      longitude,
      radius,
    );
  }
}
