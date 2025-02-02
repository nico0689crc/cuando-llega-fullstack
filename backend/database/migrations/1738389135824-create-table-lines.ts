import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLines1738389135824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lines',
        columns: [
          {
            name: 'code',
            type: 'varchar',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'entity_code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'company_code',
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
    await queryRunner.dropTable('lines');
  }
}
