import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableParadasLineas1738511115015
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stops_lines',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
          },
          {
            name: 'stop_code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'line_code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'line_description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'abbreviation_flag',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'expanded_abbreviation_flag',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'abbreviation_flag_git',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'position',
            type: 'decimal',
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

    await queryRunner.createForeignKey(
      'stops_lines',
      new TableForeignKey({
        columnNames: ['stop_code'],
        referencedColumnNames: ['code'],
        referencedTableName: 'stops',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'stops_lines',
      new TableForeignKey({
        columnNames: ['line_code'],
        referencedColumnNames: ['code'],
        referencedTableName: 'lines',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stops_lines');
  }
}
