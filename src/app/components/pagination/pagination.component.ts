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
  protected path: string = "";

  @Output() setBooks = new EventEmitter<Array<Book>>();

  constructor(private route: ActivatedRoute, private router: Router, private getPagination: SevicesService) {

    if(this.route.snapshot.url[0]?.path === 'mostviewed'){
      this.ruta += "&criteria=most_viewed";
      this.path += "mostviewed";
    }

    this.route.params.subscribe(params => {

      if(params['category']){
        this.path += "category/" + params['category'];
        this.ruta += "&category=" + params['category'];
      }
      if(params['type'] && params['word']){
        this.ruta = '';
        this.path = '';
        if(params['type']==="titulo") this.ruta += `&book_title="${params['word']}"`;
        if(params['type']==="autor") this.ruta += `&book_author="${params['word']}"`;

        if(params['type']==="titulo")  this.path += `/search/${params['type']}/${params['word']}`;
      }
      
      let page = Number(params['page']);
      if (page) this.pageCurrent = page;
    });
    
    this.getPagination.getTotalBooks(this.ruta).subscribe(item=> {
      this.num_items = Number(item.num_items);
      this.totalPages = Math.ceil(this.num_items / this.itemsPage);
    });
  }

  ngOnInit(): void {}


  getNextPage(){
    if(this.pageCurrent < this.totalPages) this.router.navigateByUrl(this.path + '/page/'+ (this.pageCurrent+1));
  }

  getPrevPage(){
    if(this.pageCurrent > 1) this.router.navigateByUrl(this.path + '/page/'+ (this.pageCurrent-1));
  }

}
