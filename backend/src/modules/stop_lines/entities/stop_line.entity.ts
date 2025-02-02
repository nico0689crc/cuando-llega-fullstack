import { Entity, Column, PrimaryColumn, ManyToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Core } from 'src/core/entities/core.entity';
import { Stop } from 'src/modules/stops/entities/stop.entity';
import { Line } from 'src/modules/lines/entities/line.entity';

@Entity({ name: 'stops_lines' })
@ObjectType()
export class StopLine extends Core {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'stop_code' })
  @Field(() => String)
  stopCode: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'line_code' })
  @Field(() => String)
  lineCode: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'line_description' })
  @Field(() => String)
  lineDescription: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'abbreviation_flag' })
  @Field(() => String)
  abbreviationFlag: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'expanded_abbreviation_flag' })
  @Field(() => String)
  expandedAbbreviationFlag: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'abbreviation_flag_git' })
  @Field(() => String)
  abbreviationFlagGit: string;

  @ManyToOne(() => Stop, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'stop_code', referencedColumnName: 'code' })
  stop: Stop;

  @ManyToOne(() => Line, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'line_code', referencedColumnName: 'code' })
  line: Line;
}
