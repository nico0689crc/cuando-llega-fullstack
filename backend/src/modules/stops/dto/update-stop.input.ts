import { CreateStopInput } from './create-stop.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStopInput extends PartialType(CreateStopInput) {
  @Field(() => Int)
  id: number;
}
