import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Cup} from './models/Cup';
import {Size} from './models/Size';
import {ValueAddedService} from './models/ValueAddedService';


export class CupsData implements InMemoryDbService {
  createDb() {
    let sizes = [
      { id: 1, size: new Size('small', 'S', 'tall') },
      { id: 2, size: new Size('medium', 'M', 'grande') },
      { id: 3, size: new Size('large', 'L','veinte') },
      { id: 4, size: new Size('extra-large', 'XL', 'enorme') }
    ];
    
    let vas = [
      { id: 1, vas: new ValueAddedService('cozy', 'Ergonomic, space-age temperature control', 'pan_tool') },
      {id: 2, vas: new ValueAddedService('wifi', 'Enables your cup as a wifi hotspot', 'wifi_tethering') },
      {id: 3, vas: new ValueAddedService('bug-free', 'Guarantees your cup will be 99% bug-free', 'bug_report') }
    ];
    
    let cups = [
      { 
        id: 1, cup: new Cup('The Generic', 'generic', sizes[0].size, 'The basic cup. Nothing fancy!', [])
      },
      {
        id: 2, cup: new Cup('The Rocinante', 'generic', sizes[1].size, 'A smaller cup, but it packs a punch!', 
        [vas[0].vas, vas[2].vas])
      },
      {
        id: 3, cup: new Cup('The Hombre', 'generic', sizes[2].size, 'For experienced cup owners.', [vas[0].vas, vas[2].vas])
      },
      {
      id: 4, cup: new Cup('The Caballero', 'generic', sizes[3].size, 'Not for the faint of heart...', 
      [vas[0].vas, vas[1].vas, vas[2].vas])
      }
    ];
    return {cups, sizes, vas };
  }
}

/*
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
*/