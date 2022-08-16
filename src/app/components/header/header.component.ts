import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  protected categorys: Array<Category> = [];
  protected menuCategorys: Boolean = false;
  protected search = this.formBuilder.group({
    word: '',
    type: "titulo"
  });

  constructor(private getCategorys: SevicesService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.getCategorys.getCategory().subscribe((categorys:Array<Category>)=>{
      this.categorys = categorys;
    });
  }

  handlerMenuCategorys(){
    this.menuCategorys = !this.menuCategorys;
  }

  getBookByWord(){
    // console.log(this.search.value);
    this.search.value.word && this.router.navigateByUrl(`/search/${this.search.value.type}/${this.search.value.word}`);
  }

}
