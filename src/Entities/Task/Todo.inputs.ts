import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  is_completed: boolean;
}

@InputType()
export class UpdateTodoInput {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  newContent: string;
}
