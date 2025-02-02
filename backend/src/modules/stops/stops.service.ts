import { Injectable } from '@nestjs/common';
import { CreateStopInput } from './dto/create-stop.input';
import { UpdateStopInput } from './dto/update-stop.input';

@Injectable()
export class StopsService {
  create(createStopInput: CreateStopInput) {
    return 'This action adds a new stop';
  }

  findAll() {
    return `This action returns all stops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stop`;
  }

  update(id: number, updateStopInput: UpdateStopInput) {
    return `This action updates a #${id} stop`;
  }

  remove(id: number) {
    return `This action removes a #${id} stop`;
  }
}
