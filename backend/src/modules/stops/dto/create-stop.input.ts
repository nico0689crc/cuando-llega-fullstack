import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStopInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
