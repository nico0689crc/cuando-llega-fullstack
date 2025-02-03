import * as path from 'path';
import * as fs from 'fs';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Stop } from 'src/modules/stops/entities/stop.entity';

export default class StopsSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const stopRepository = dataSource.getRepository(Stop);

    const stopsCount = await stopRepository.count();

    if (stopsCount === 0) {
      const stopsArray = [];
      const filePath = path.join(__dirname, '..', '..', 'data', 'stops.json');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: stops } = JSON.parse(fileContent);
      
      Object.keys(stops).forEach((key) => stopsArray.push({
        code: key,
        identificator: stops[key].identificator,
        description: stops[key].description,
        lat: stops[key].lat,
        lng: stops[key].lng
      }));
      
      await stopRepository.save(stopsArray);

      console.log('Stops seeded successfully.');
    } else {
      console.log(`Skipped seeding. ${stopsCount} stops already exist.`);
    }
  }
}
