import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, Category, Detail, Pagination } from '../interfaces/interfaces.ts';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SevicesService {

  constructor(private http: HttpClient, private sanitized: DomSanitizer) { }

  private urlBase = "https://www.etnassoft.com/api/v1/get/?json=true";

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlBase + "&get_categories=all");
  }

  getBooks(params:String){
    return this.http.get<Book[]>(this.urlBase + params);
  }

  getTotalBooks(params:String){
    return this.http.get<Pagination>(this.urlBase + params + "&count_items=true");
  }

  filterSimpleBooks(Books:Book[]):Book[]{
    return Books.map(book=>{
      return{
        ID: book.ID,
        title: book.title,
        author: book.author,
        cover: book.cover,
        pages: book.pages
      }
    });
  }

  getBookOfId(ID:number){
    return this.http.get<Detail[]>(this.urlBase + "&id=" + ID);
  }

  replaceEntitiesInJSON(str:string):string{
    return str.replaceAll("&lt;","<")
      .replaceAll("&gt;",">")
  }

}
