import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(timestamp: number, ...args: unknown[]): unknown {
    if (timestamp === 0) {
      return '0 secs';
    }

    const hours = Math.floor(timestamp / 3600);

    timestamp %= 3600;

    const minutes = Math.floor(timestamp / 60);
    const seconds = timestamp % 60;

    console.log(hours, minutes, seconds);

    return timestamp;
  }
}
