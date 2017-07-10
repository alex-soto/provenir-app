import {InMemoryDbService} from 'angular-in-memory-web-api';
export class CupsData implements InMemoryDbService {
  createDb() {
    let cups = [
      { id: 1, name: 'cup1', type: 'type1', displayText: 'example display text' }
    ];
    let sizes = [
      { id: 1, name: 'small', code: 'S', displayName: 'tall' },
      { id: 2, name: 'medium', code: 'M', displayName: 'grande' },
      { id: 3, name: 'large', code: 'L', displayName: 'veinte' },
      { id: 4, name: 'extra-large', code: 'XL', displayName: 'enorme' }
    ];
    return {cups, sizes};
  }
}