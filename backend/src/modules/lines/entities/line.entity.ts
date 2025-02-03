import { Entity, Column, PrimaryColumn, ManyToMany, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Core } from 'src/core/entities/core.entity';
import { Stop } from 'src/modules/stops/entities/stop.entity';
import { StopLine } from 'src/modules/stop_lines/entities/stop_line.entity';

@Entity({ name: 'lines' })
@ObjectType()
export class Line extends Core {
  @PrimaryColumn()
  @Field(() => ID)
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

  @ManyToMany(() => Stop, (stop) => stop.lines)
  stops: Stop[];

  @OneToMany(() => StopLine, (stopLine) => stopLine.line)
  @Field(() => [StopLine], { nullable: true })
  stopLines: StopLine[];
}
