import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStopLineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
