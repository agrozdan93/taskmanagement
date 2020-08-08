import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
  ];
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`not valid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatus.indexOf(status); // false
    return idx !== -1;
  }
}
