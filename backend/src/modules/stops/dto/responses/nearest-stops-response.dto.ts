import { ObjectType, Field } from '@nestjs/graphql';
import { MessageEntityResponse } from 'src/core/dto/message-entity-response.dto';
import { Stop } from '../../entities/stop.entity';
import { FindAllResponse } from 'src/core/dto/find-all-response.dto';

@ObjectType()
export class NearestStopsResultResponse extends FindAllResponse {
  @Field(() => [Stop])
  data: Stop[];
}

@ObjectType()
export class NearestStopsResponse extends MessageEntityResponse {
  @Field(() => NearestStopsResultResponse, { nullable: true })
  result?: NearestStopsResultResponse;
}
