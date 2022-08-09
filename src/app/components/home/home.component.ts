import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route: ActivatedRoute, private getBooksService: SevicesService) {
    route.params.subscribe(params => {
      // console.log(params);
      let pageStart :number = 0;
      if(params['page']){
        pageStart = params['page'] * this.itemsPage - this.itemsPage;
      }
      this.ruta += "&results_range=" + pageStart +",10";
      this.listBooks = [];
      this.getBooks();
    });
  }

  ngOnInit(): void {

  //   this.listBooks = [
  //     {
  //         "ID": "17081",
  //         "title": "Interface Circuits for Microsensor Integrated Systems",
  //         "author": "Giuseppe Ferri & Vincenzo Stornelli (Eds.)",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/Interface_Circuits_for_Microsensor_Integrated_Systems-OpenLibra-321x461.jpg",
  //         "pages": "172"
  //     },
  //     {
  //         "ID": "17074",
  //         "title": "Advanced Memristor Modeling: Memristor Circuits and Networks",
  //         "author": "Valeri Mladenov",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/Advanced_Memristor_Modeling-OpenLibra-321x461.png",
  //         "pages": "186"
  //     },
  //     {
  //         "ID": "17066",
  //         "title": "The MagPi #79",
  //         "author": "Varios",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/MagPi79-OpenLibra-350x461.jpg",
  //         "pages": "100"
  //     },
  //     {
  //         "ID": "17064",
  //         "title": "HackSpace #16",
  //         "author": "Varios",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/02/HackSpaceMag16-OpenLibra-350x461.jpg",
  //         "pages": "132"
  //     },
  //     {
  //         "ID": "17062",
  //         "title": "Conquer the command line. 2nd Ed.",
  //         "author": "Richard Smedley",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/02/Essentials_Bash_v2-OpenLibra-326x461.png",
  //         "pages": "95"
  //     },
  //     {
  //         "ID": "17079",
  //         "title": "New Directions on Model Predictive Control",
  //         "author": "Jinfeng Liu & Helen E. Durand (Eds.)",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/New-Directions-on-Model-Predictive-Control_OpenLibra-321x461.jpg",
  //         "pages": "232"
  //     },
  //     {
  //         "ID": "17076",
  //         "title": "Bridging gender gaps?",
  //         "author": "Leonardo Gasparini & Mariana Marchionni (Eds.)",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/Bridging_Gender_Gaps-OpenLibra-326x461.png",
  //         "pages": "353"
  //     },
  //     {
  //         "ID": "17072",
  //         "title": "Wearable Technologies",
  //         "author": "Nicola Carbonaro & Alessandro Tognetti",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/Wearable-Technologies_OpenLibra-321x461.jpg",
  //         "pages": "162"
  //     },
  //     {
  //         "ID": "17070",
  //         "title": "Lies, Damned Lies, or Statistics: How to Tell the Truth with Statistics",
  //         "author": "Jonathan A. Poritz",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/lies_damned_lies_or_statistics-OpenLibra-350x461.gif",
  //         "pages": "143"
  //     },
  //     {
  //         "ID": "17068",
  //         "title": "The MagPi #80",
  //         "author": "Varios",
  //         "cover": "https://olcovers2.blob.core.windows.net/coverswp/2019/03/MagPi80_OpenLibra-350x461.gif",
  //         "pages": "100"
  //     }
  // ]

  }

  getBooks(){
    this.getBooksService.getBooks(this.ruta).subscribe((books)=>{
      // console.log(books);
      // this.listBooks = [];
      books.map(book=>{
        this.listBooks.push({
          ID: book.ID,
          title: book.title,
          author: book.author,
          cover: book.cover,
          pages: book.pages
        });
      });
    });
  }

  setListBooks(books:Array<Book>){
    // console.log(books);
    this.listBooks = books;
  }

}
