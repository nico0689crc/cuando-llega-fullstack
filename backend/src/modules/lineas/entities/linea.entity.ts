import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Core } from 'src/core/entities/core.entity';

@Entity({ name: 'lines' })
@ObjectType()
export class Line extends Core {
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  @Field(() => String)
  code: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field(() => String)
  description: string;

  @Column({
    type: 'varchar',
    name: 'entity_code',
    length: 255,
    nullable: false,
  })
  @Field(() => String)
  entityCode: string;

  @Column({
    type: 'varchar',
    name: 'company_code',
    length: 255,
    nullable: false,
  })
  @Field(() => String)
  companyCode: string;
}
