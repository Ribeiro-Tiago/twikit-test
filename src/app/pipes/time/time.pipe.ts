import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  addPluralS(val: number, str: string) {
    return val === 1 ? str : `${str}s`;
  }

  transform(timestamp: number, ...args: unknown[]): unknown {
    if (timestamp === 0) {
      return '0 seconds';
    }

    const totalSeconds = timestamp / 1000;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor((totalSeconds % 3600) % 60);

    if (hours > 0) {
      return `${hours} ${this.addPluralS(
        hours,
        'hour'
      )} ${minutes} ${this.addPluralS(
        minutes,
        'minute'
      )} ${seconds} ${this.addPluralS(seconds, 'second')}`;
    }

    if (minutes > 0) {
      return `${minutes} ${this.addPluralS(
        minutes,
        'minute'
      )} ${seconds} ${this.addPluralS(seconds, 'second')}`;
    }

    return `${seconds} ${this.addPluralS(seconds, 'second')}`;
  }
}
