import { Injectable } from '@nestjs/common';
import { CreateStopLineInput } from './dto/create-stop_line.input';
import { UpdateStopLineInput } from './dto/update-stop_line.input';

@Injectable()
export class StopLinesService {
  create(createStopLineInput: CreateStopLineInput) {
    return 'This action adds a new stopLine';
  }

  findAll() {
    return `This action returns all stopLines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stopLine`;
  }

  update(id: number, updateStopLineInput: UpdateStopLineInput) {
    return `This action updates a #${id} stopLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} stopLine`;
  }
}
