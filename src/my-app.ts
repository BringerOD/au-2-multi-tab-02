
import { IRouteViewModel, Routeable,route } from "aurelia";

@route({
    routes: [
      { id: 'test', path: '', component:  () => import('./test'), title: 'Shell' },
      { id: 'page', path: 'shell/:module/:page', component:  () => import('./shell'), title: 'Shell' },
    ]
  })
export class MyApp {

  
}

