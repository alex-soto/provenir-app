import {InMemoryDbService} from 'angular-in-memory-web-api';
export class CupsData implements InMemoryDbService {
  createDb() {
    let cups = [
      { id: 1, name: 'cup1', type: 'type1', displayText: 'example display text' }
    ];
    return {cups};
  }
}