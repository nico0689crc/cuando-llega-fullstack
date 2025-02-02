import * as path from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { StopLine } from 'src/modules/stop_lines/entities/stop_line.entity';

export default class LinesStopsSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const stopLineRepository = dataSource.getRepository(StopLine);

    const stopsLinesCount = await stopLineRepository.count();

    if (stopsLinesCount === 0) {
      const stopsLinesArray = [];
      const filePath = path.join(__dirname, '..', '..', 'data', 'stops.json');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: stops } = JSON.parse(fileContent);
      
      Object.keys(stops).forEach((key) => {
        stops[key].lines.forEach((line) => {
          stopsLinesArray.push({
            id: uuidv4(),
            stopCode: key,
            lineCode: line.line_code,
            lineDescription: line.line_description,
            abbreviationFlag: line.abbreviation_flag,
            expandedAbbreviationFlag: line.expanded_abbreviation_flag,
            abbreviationFlagGit: line.abbreviation_flag_git,
          });
        }); 
      });
      
      await stopLineRepository.save(stopsLinesArray);

      console.log('Stops-Lines seeded successfully.');
    } else {
      console.log(`Skipped seeding. ${stopsLinesCount} stops-lines already exist.`);
    }
  }
}
