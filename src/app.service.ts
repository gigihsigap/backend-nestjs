import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  getAnjay(): string {
    return 'anjay mabar';
  }
}
