import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as fs from 'fs';
import * as path from 'path';
import { Line } from 'src/modules/lines/entities/line.entity';

export default class LinesSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const lineRepository = dataSource.getRepository(Line);

    const linesCount = await lineRepository.count();

    if (linesCount === 0) {
      const filePath = path.join(__dirname, '..', '..', 'data', 'lines.json');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: lines } = JSON.parse(fileContent);

      await lineRepository.save(
        lines.map(
          ({
            CodigoLineaParada: code,
            Descripcion: description,
            CodigoEntidad: entityCode,
            CodigoEmpresa: companyCode,
          }) => ({
            code,
            description,
            entityCode,
            companyCode,
          }),
        ),
      );

      console.log('Lines seeded successfully.');
    } else {
      console.log(`Skipped seeding. ${linesCount} Lines already exist.`);
    }
  }
}
