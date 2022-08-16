import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  protected listBooks: Array<Book> = [];
  protected itemsPage: number = 10;
  protected ruta: string = "";

  constructor(private route: ActivatedRoute, private Services: SevicesService) {
    this.route.params.subscribe(params => {
      let pageStart :number = 0;
      if(route.snapshot.url[0]?.path === 'mostviewed'){
        this.ruta += "&criteria=most_viewed";
      }
      if(params['category']){
        this.ruta += "&category=" + params['category'];
      }
      if(params['type'] && params['word']){
        this.ruta = '';
        if(params['type']==="titulo") this.ruta += `&book_title="${params['word']}"`;
        if(params['type']==="autor") this.ruta += `&book_author="${params['word']}"`;
      }
      if(params['page']){
        pageStart = params['page'] * this.itemsPage - this.itemsPage;
      }
      this.ruta += "&results_range=" + pageStart +",10";
      this.listBooks = [];
      this.getBooks();
    });
  }

  ngOnInit(): void {}

  getBooks(){
    this.Services.getBooks(this.ruta).subscribe((books)=>{
      const items = this.Services.filterSimpleBooks(books);
      this.listBooks = items;
    });
  }


}
