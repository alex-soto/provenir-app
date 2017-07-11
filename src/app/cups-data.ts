import {InMemoryDbService} from 'angular-in-memory-web-api';
export class CupsData implements InMemoryDbService {
  createDb() {
    let sizes = [
      { id: 1, name: 'small', code: 'S', displayName: 'tall' },
      { id: 2, name: 'medium', code: 'M', displayName: 'grande' },
      { id: 3, name: 'large', code: 'L', displayName: 'veinte' },
      { id: 4, name: 'extra-large', code: 'XL', displayName: 'enorme' }
    ];
    
    let vas = [
      { id: 1, name: 'cozy', description: 'Ergonomic, space-age temperature control', icon: 'pan_tool' },
      {id: 2, name: 'wifi', description: 'Enables your cup as a wifi hotspot', icon: 'wifi_tethering' },
      {id: 3, name: 'bug-free', description: 'Guarantees your cup will be 99% bug-free', icon: 'bug_report'}
    ];
    
    let cups = [
      {
        cup: { id: 1, name: 'The Generic', type: 'generic', size: sizes[0], 
        valueAddedServices: [], displayText: 'The basic cup. Nothing fancy!' }
      },
      {
        cup: { id: 2, name: 'The Rocinante', type: 'generic', size: sizes[1],
        valueAddedServices: [vas[0], vas[2]], displayText: 'A smaller cup, but it packs a punch!' }
      },
      {
        cup: { id: 3, name: 'The Hombre', type: 'generic', size: sizes[2], 
        valueAddedServices: [vas[0], vas[2]], displayText: 'For experienced cup owners.' }
      },
      {
        cup: { id: 4, name: 'The Caballero', type: 'generic', size: sizes[3],
        valueAddedServices: [vas[0], vas[1], vas[2]], displayText: 'Not for the faint of heart...' }
      }
    ];
    return {cups, sizes, vas };
  }
}