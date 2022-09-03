import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  protected status: any = 200;
  protected listBooks: Book[] | null = null;
  protected itemsPage: number = 10;
  protected ruta: string = "";
  protected search = this.formBuilder.group({
    word: '',
    type: "titulo"
  });

  protected like:string = '../../../assets/iconmonstr-favorite-2.png'


  constructor(private route: ActivatedRoute, private Services: SevicesService, private formBuilder: FormBuilder, private router: Router) {
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
      if(this.listBooks !== null) this.listBooks = [];
      if(route.snapshot.url[0]?.path === 'favorites'){
        const myFaves = localStorage.getItem('myFaves');
        console.log(myFaves);
      }else{
        this.getBooks();
      }
    });
    if(route.snapshot.url[0]?.path === 'favorites'){
      // console.log('favorites');
      this.listBooks = this.Services.getFave();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy():void{
    console.log("ngOnDestroy");
  }

  getBooks(){
    this.status = 200;
    this.Services.getBooks(this.ruta).subscribe({
      next:(books)=>{
        const items = this.Services.filterSimpleBooks(books);
        this.listBooks = items;
      },
      error:(e)=> {
        this.status = e.status;
        console.log(e);
      },
      complete:()=>console.log("complete")
    });
  }

  getBookByWord(){
    this.search.value.word && this.router.navigateByUrl(`/search/${this.search.value.type}/${this.search.value.word}`);
  }

  saveFave(newFave:any){
    console.log(newFave);
  }

}
