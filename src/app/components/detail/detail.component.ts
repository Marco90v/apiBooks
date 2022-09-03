import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, Detail } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  protected ID: number = 0;
  protected data: Detail | null = null;
  protected isFave: boolean = false;
  protected nolike:string = '../../../assets/iconmonstr-favorite-2.png';
  protected like:string = '../../../assets/iconmonstr-favorite-3.png';

 
  constructor(private route: ActivatedRoute, private Services: SevicesService) {
    this.route.params.subscribe(params => {

      if(params['ID']){
        this.ID = params['ID'];
      }

      this.Services.getBookOfId(this.ID).subscribe(detail=>{
        this.data = detail[0];
      });

      this.isFave = this.Services.getIdFave().find(id => id === this.ID.toString()) ? true : false;

    });
  }

  ngOnInit(): void {
  }

  addFave(){
    if(this.data && !this.isFave) {
      let newFormatData:Book | null = null;
      newFormatData = this.Services.filterSimpleBooks([this.data])[0];
      this.Services.setFave(newFormatData);
      this.isFave = !this.isFave;
    }else if(this.isFave){
      this.Services.deleteFave(this.ID.toString());
      this.isFave = !this.isFave;
    }
  }


}
