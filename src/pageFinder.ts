import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { Page3 } from "./page3";

export class PageFinder {
  routes: RoutableView[] = [];

  constructor() {
      
    this.routes?.push(new RoutableView(Page1, "page", "1"));
    this.routes?.push(new RoutableView(Page2, "page", "2"));
    this.routes?.push(new RoutableView(Page3, "page", "3"));
  }

  getView(module: string, page: string): RoutableView | undefined {
    return this.routes.find(
      (x) => x.module?.toLowerCase() == module.toLowerCase() && x.page.toLowerCase() === page.toLowerCase()
    );
  }
}

export class RoutableView {
  view: any;
  module: string;
  page: string;
  
  constructor(view: any, module: string, page: string) {
    this.view = view;
    this.module = module;
    this.page = page;
  }
}
