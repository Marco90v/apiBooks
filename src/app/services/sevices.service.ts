import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, Category, Pagination } from '../interfaces/interfaces.ts';

@Injectable({
  providedIn: 'root'
})
export class SevicesService {

  constructor(private http: HttpClient) { }

  private urlBase = "https://www.etnassoft.com/api/v1/get/?json=true";

  getCategory():Observable<Array<Category>>{
    return this.http.get<Array<Category>>(this.urlBase + "&get_categories=all");
    // .map(item=>return item);
  }

  // getBooks(start:Number = 0){
  //   return this.http.get<Array<Book>>(this.urlBase + "&results_range="+start+",10&");
  // }
  getBooks(params:String){
    return this.http.get<Array<Book>>(this.urlBase + params);
  }

  getTotalBooks(){
    // https://www.etnassoft.com/api/v1/get/?count_items=true
    return this.http.get<Pagination>(this.urlBase + "&count_items=true");
  }
}
