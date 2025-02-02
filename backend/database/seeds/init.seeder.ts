import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import LinesSeeder from './lines.seeder';
import StopsSeeder from './stops.seeder';
import LinesStopsSeeder from './lines_stops.seeder';

export default class InitSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [LinesSeeder, StopsSeeder, LinesStopsSeeder],
      factories: [],
    });
  }
}
