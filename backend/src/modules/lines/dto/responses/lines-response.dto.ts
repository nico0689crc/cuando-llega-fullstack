import { ObjectType, Field } from '@nestjs/graphql';
import { MessageEntityResponse } from 'src/core/dto/message-entity-response.dto';
import { LinesFindAllResponse } from './lines-find-all-response.dto';

@ObjectType()
export class LinesResponse extends MessageEntityResponse {
  @Field(() => LinesFindAllResponse, { nullable: true })
  result?: LinesFindAllResponse;
}
