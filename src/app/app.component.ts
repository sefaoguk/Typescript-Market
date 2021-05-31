import { Component} from '@angular/core';
import { CategoryService } from './category.service';
import { DataService } from './dataservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angeGeoMarket';
  homeData = this.dataService.data;
  childData;
  category;
  categoryServ = [];
  openSidebars: boolean = false;
  constructor(private categoryService: CategoryService, private dataService: DataService) { }

  ngOnInit(category): void {
    console.log(this.homeData)
    this.categoryService.category.find((veri) => {
      this.categoryServ.push(veri.categoryItem)
    });
    this.category = category;
    console.log(this.category)
  }
  getData(data) {
    // this.childData = data;
    this.childData = data;
    console.log(this.childData)
  }
  openSidebar() {
    this.openSidebars = !this.openSidebars;
  }
}
