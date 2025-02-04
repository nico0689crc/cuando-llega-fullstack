import { ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class Core {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
