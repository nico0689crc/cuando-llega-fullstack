import { Entity, Column, PrimaryColumn, JoinTable, ManyToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Core } from 'src/core/entities/core.entity';
import { Line } from 'src/modules/lines/entities/line.entity';

@Entity({ name: 'stops' })
@ObjectType()
export class Stop extends Core {
  @PrimaryColumn()
  @Field(() => ID)
  code: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field(() => String)
  identificator: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field(() => String)
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field(() => String)
  lat: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field(() => String)
  lng: string;

  @ManyToMany(() => Line, (line) => line.stops, {
    cascade: ['insert'],
    eager: true,
  })
  @JoinTable({
    name: 'stops_lines',
    joinColumn: {
      name: 'stop_code',
      referencedColumnName: 'code',
    },
    inverseJoinColumn: {
      name: 'line_code',
      referencedColumnName: 'code',
    },
  })
  @Field(() => [Line], { nullable: true })
  lines: Line[];
}
