import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/interfaces/interfaces.ts';
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
 
  constructor(private route: ActivatedRoute, private Services: SevicesService) {
    this.route.params.subscribe(params => {

      if(params['ID']){
        this.ID = params['ID'];
      }

      this.Services.getBookOfId(this.ID).subscribe(detail=>{
        this.data = detail[0];
      });

    });
  }

  ngOnInit(): void {
  }


}
