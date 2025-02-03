import { ObjectType, Field } from '@nestjs/graphql';
import { MessageEntityResponse } from 'src/core/dto/message-entity-response.dto';
import { Line } from '../../entities/line.entity';

@ObjectType()
export class LineSingleResponse {
  @Field(() => Line)
  data: Line;
}

@ObjectType()
export class LineResponse extends MessageEntityResponse {
  @Field(() => LineSingleResponse, { nullable: true })
  result?: LineSingleResponse;
}
