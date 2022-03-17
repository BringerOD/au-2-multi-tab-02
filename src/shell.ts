import { Params, RouteNode, bindable, IRouteViewModel, singleton } from "aurelia";

import { PageFinder } from "./pageFinder";

@singleton()
export class shell implements IRouteViewModel {
  @bindable() view: any | undefined = undefined;

  activePages: any[] = [];


  constructor(private pageFinder: PageFinder) {}

  async load(params: Params, next: RouteNode, current: RouteNode) {

    console.log(`Shell Load Called with module: ${params.module} page: ${ params.page}`);
    
    var existing = this.activePages.find((x) => x.module === params.module && x.page == params.page);

    if (existing) {
      console.log(`Existing page found with module: ${params.module} page: ${ params.page}`);
      console.log(existing);
    }
    

    console.log(`Setting existing pages to inactive  count: ${ this.activePages.length}`);
    for (const page of this.activePages) {
      page.isActive = false;
    }

    if (existing) {
      existing.isActive = true;
      return;
    }

    var route = this.pageFinder.getView(params.module!, params.page!);

    let newPage = {
      name: params.module! + " " + params.page!,
      module: params.module!,
      page: params.page!,
      view: route?.view,
      link: "shell/" + params.module! + "/" + params.page!,
      isActive: true,
    };

    this.activePages.push(newPage);

    console.log(`Page Added to collection count: ${ this.activePages.length}`);
    console.log(this.activePages);
  }

  async setPageActive(page: any) {
    
    for (const pageItem of this.activePages) {
      pageItem.isActive = false;
    }
    page.isActive = true;
    
    console.log(this.activePages);
  }
}
