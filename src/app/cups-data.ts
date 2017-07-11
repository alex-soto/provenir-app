import {InMemoryDbService} from 'angular-in-memory-web-api';
export class CupsData implements InMemoryDbService {
  createDb() {
    let sizes = [
      { id: 1, name: 'small', code: 'S', displayName: 'tall' },
      { id: 2, name: 'medium', code: 'M', displayName: 'grande' },
      { id: 3, name: 'large', code: 'L', displayName: 'veinte' },
      { id: 4, name: 'extra-large', code: 'XL', displayName: 'enorme' }
    ];
    let cups = [
      {
        cup: { id: 1, name: 'The Generic', type: 'generic', size: sizes[0], displayText: 'The basic cup. Nothing fancy!' }
      }
    ];
    return {cups, sizes};
  }
}