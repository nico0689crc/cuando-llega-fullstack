import { CreateStopLineInput } from './create-stop_line.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStopLineInput extends PartialType(CreateStopLineInput) {
  @Field(() => Int)
  id: number;
}
