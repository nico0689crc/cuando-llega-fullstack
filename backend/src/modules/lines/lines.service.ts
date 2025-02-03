import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllOptions } from './interfaces/find-all.interface';
import { LinesResponse } from './dto/responses/lines-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { LineResponse } from './dto/responses/line-response.dto';

@Injectable()
export class LinesService {
  constructor(
    @InjectRepository(Line)
    private readonly lineRepository: Repository<Line>,
  ) {}

  async findAll(options: FindAllOptions): Promise<LinesResponse> {
    const { page, pageSize } = options;

    try {
      const [lines, totalItems] = await this.lineRepository.findAndCount({
        skip: (page - 1) * pageSize,
        take: pageSize,
        relations: ['stopLines', 'stopLines.stop'],
      });

      lines.forEach((line) => {
        line.stopLines.sort((a, b) => {
          if (a.abbreviationFlagGit > b.abbreviationFlagGit) return 1;
          if (a.abbreviationFlagGit < b.abbreviationFlagGit) return -1;
          if (+a.position > +b.position) return 1;
          if (+a.position < +b.position) return -1;
          return 0;
        });
      });

      const totalPages = Math.ceil(totalItems / pageSize);

      return {
        message: 'Lines fetched successfully',
        result: {
          data: lines,
          totalItems,
          totalPages,
          currentPage: page,
          pageSize,
        },
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: `Failed to fetch lines: ${error.message}`,
        statusCode: 500,
      };
    }
  }

  async findOne(code: string): Promise<LineResponse> {
    const line = await this.lineRepository.findOne({
      where: { code },
      relations: ['stopLines', 'stopLines.stop'],
      order: {
        stopLines: {
          abbreviationFlagGit: 'ASC',
          position: 'ASC',
        },
      },
    });

    if (!line) {
      throw new NotFoundException(`Line with id ${code} not found`);
    }

    return {
      message: 'Line fetched successfully',
      result: {
        data: line,
      },
      statusCode: 200,
    };
  }
}
