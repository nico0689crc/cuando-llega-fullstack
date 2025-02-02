import { Injectable } from '@nestjs/common';
import { CreateLineInput } from './dto/create-line.input';
import { UpdateLineInput } from './dto/update-line.input';

@Injectable()
export class LinesService {
  create(createLineInput: CreateLineInput) {
    return 'This action adds a new line';
  }

  findAll() {
    return `This action returns all lines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} line`;
  }

  update(id: number, updateLineInput: UpdateLineInput) {
    return `This action updates a #${id} line`;
  }

  remove(id: number) {
    return `This action removes a #${id} line`;
  }
}
