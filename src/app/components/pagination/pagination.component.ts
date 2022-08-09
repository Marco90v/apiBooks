import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  protected num_items :number = 0;
  protected totalPages :number = 0;
  protected itemsPage: number = 10;
  protected pageInitial: number = 1;
  protected pageCurrent: number = 1;
  protected rangePage: number = 5;
  protected ruta: string = "";

  @Output() setBooks = new EventEmitter<Array<Book>>();

  constructor(private route: ActivatedRoute, private router: Router, private getPagination: SevicesService) {

    route.params.subscribe(params => {
      // console.log(params);
      // let pageStart :number = 0;
      // if(params['page']){
      //   pageStart = params['page'] * this.itemsPage - this.itemsPage;
      // }
      // this.ruta += "&results_range=" + pageStart +",10"; 
      let page = Number(params['page']);
      if (page) this.pageCurrent = page;
    });
    
    // this.getPagination.getTotalBooks().subscribe(item=> {
    //   this.num_items = Math.ceil(Number(item.num_items))
    //   this.totalPages = this.num_items / 10;
    // })
    this.num_items = 4207;
    this.totalPages = Math.ceil(this.num_items / this.itemsPage);
    // this.totalPages = 7;
  }

  ngOnInit(): void {

  }

   

  getNextPage(){
    if(this.pageCurrent < this.totalPages) this.router.navigateByUrl('/'+ (this.pageCurrent+1));
  }

  getPrevPage(){
    if(this.pageCurrent > 1) this.router.navigateByUrl('/'+ (this.pageCurrent-1));
  }

}
