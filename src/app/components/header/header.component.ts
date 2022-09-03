import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  protected arrow:string = '../../../assets/white-down-arrow-png-2.png';
  protected categorys: Array<Category> = [];
  protected menuCategorys: Boolean = false;
 
  constructor(private getCategorys: SevicesService) {}

  ngOnInit(): void {

    this.getCategorys.getCategory().subscribe({
      next: (value) => this.categorys = value,
      error: (e) => console.log(e.statusText, e.status),
      complete: () => console.log("complete")
    });
  }

  handlerMenuCategorys(){
    this.menuCategorys = !this.menuCategorys;
  }


}
