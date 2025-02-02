import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableParadas1738511096252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stops',
        columns: [
          {
            name: 'code',
            type: 'varchar',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'identificator',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lat',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lng',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stops');
  }
}
