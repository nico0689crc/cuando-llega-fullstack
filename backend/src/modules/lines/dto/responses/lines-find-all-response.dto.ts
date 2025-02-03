import { ObjectType, Field } from '@nestjs/graphql';
import { FindAllResponse } from 'src/core/dto/find-all-response.dto';
import { Line } from '../../entities/line.entity';

@ObjectType()
export class LinesFindAllResponse extends FindAllResponse {
  @Field(() => [Line])
  data: Line[];
}
