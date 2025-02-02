import { CreateLineInput } from './create-line.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLineInput extends PartialType(CreateLineInput) {
  @Field(() => Int)
  id: number;
}
