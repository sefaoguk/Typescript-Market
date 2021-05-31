import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { DataService } from '../dataservice.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() outputData: EventEmitter<any> = new EventEmitter();
  category = [];
  constructor(private dataService: DataService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    //Sidebardaki Categorilerin gözükmesi için gereken array
   const category= this.categoryService.category.find((veri) => {
      this.category.push(veri.categoryItem)
    });
  
    this.outputData.emit(category)
  }
  sendMain(item) {

    //tıklanıldığında istenilen category -> maine aktarımı
    const main = this.dataService.data.filter(veri => veri.category == item);
 
    this.outputData.emit(main)
    
    console.log(main)

  }
}
