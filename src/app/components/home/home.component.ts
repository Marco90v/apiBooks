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
  // protected path: string = "";


  constructor(private route: ActivatedRoute, private Services: SevicesService) {
    route.params.subscribe(params => {
      // console.log(route.snapshot.url[0].path);
      let pageStart :number = 0;
      if(route.snapshot.url[0]?.path === 'mostviewed'){
        this.ruta += "&criteria=most_viewed";
        // this.path += "mostviewed/";
      }
      if(params['category']){
        this.ruta += "&category=" + params['category'];
        // console.log(params['category']);
      }
      if(params['page']){
        pageStart = params['page'] * this.itemsPage - this.itemsPage;
      }
      this.ruta += "&results_range=" + pageStart +",10";
      this.listBooks = [];
      // console.log(this.ruta);
      this.getBooks();
    });
  }

  ngOnInit(): void {


  }

  getBooks(){
    this.Services.getBooks(this.ruta).subscribe((books)=>{

      const items = this.Services.filterSimpleBooks(books);
      this.listBooks = items;
    });
  }

  setListBooks(books:Array<Book>){
    // console.log(books);
    this.listBooks = books;
  }

}
