import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Line } from 'src/modules/lines/entities/lines.entity';

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
            id: uuidv4(),
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
