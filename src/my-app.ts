

import { routes } from 'aurelia-direct-router';

  @routes([
    { id: 'test', path: '',  component:  () => import('./test'), title: 'test' },
    { id: 'page', path: 'shell/:module/:page', component:  () => import('./shell'), title: 'shell' },
  ] )
export class MyApp {

  
}

