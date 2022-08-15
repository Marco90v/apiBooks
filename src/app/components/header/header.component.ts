import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/interfaces.ts';
import { SevicesService } from 'src/app/services/sevices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  protected categorys: Array<Category> = [];
  protected menuCategorys: Boolean = false;

  constructor(private getCategorys: SevicesService) { }

  ngOnInit(): void {
    this.getCategorys.getCategory().subscribe((categorys:Array<Category>)=>{
      this.categorys = categorys;
    });
    // this.categorys = [{"category_id":677,"name":"Ajedrez","nicename":"ajedrez"},{"category_id":2007,"name":"Arte - Bellas Artes","nicename":"arte-bellas-artes"},{"category_id":234,"name":"Aspectos Legales","nicename":"libros_aspecotos_legales"},{"category_id":201,"name":"Bases de datos","nicename":"bases_de_datos"},{"category_id":206,"name":"Ciencia","nicename":"ciencia"},{"category_id":1188,"name":"Cine","nicename":"cine"},{"category_id":717,"name":"C\u00f3mics","nicename":"comics"},{"category_id":209,"name":"Control de Versiones","nicename":"control_de_versiones"},{"category_id":212,"name":"Desarrollo Web","nicename":"desarrollo_web"},{"category_id":306,"name":"Dise\u00f1o \/ 3D","nicename":"diseno_3d"},{"category_id":1441,"name":"Educaci\u00f3n","nicename":"educacion"},{"category_id":2354,"name":"Electr\u00f3nica","nicename":"electronica"},{"category_id":216,"name":"Ensayos \/ Novelas","nicename":"ensayos_y_novelas"},{"category_id":2204,"name":"Filosof\u00eda","nicename":"filosofia"},{"category_id":1941,"name":"Geograf\u00eda \/ Turismo","nicename":"geografia-turismo"},{"category_id":2802,"name":"Historia","nicename":"historia"},{"category_id":1149,"name":"Idiomas","nicename":"idiomas"},{"category_id":640,"name":"Informaci\u00f3n","nicename":"informacion"},{"category_id":217,"name":"Marketing \/ Business","nicename":"marketing_y_business"},{"category_id":218,"name":"Metodolog\u00edas \u00c1giles","nicename":"metodologias_agiles"},{"category_id":1805,"name":"Multimedia","nicename":"multimedia"},{"category_id":1904,"name":"M\u00fasica","nicename":"musica"},{"category_id":220,"name":"Programaci\u00f3n","nicename":"libros_programacion"},{"category_id":230,"name":"Redes y Sys Admin","nicename":"redes_y_sysadmins"},{"category_id":1859,"name":"Retroinform\u00e1tica","nicename":"retroinformatica"},{"category_id":596,"name":"Revistas","nicename":"revistas"},{"category_id":1295,"name":"Rob\u00f3tica","nicename":"robotica"},{"category_id":231,"name":"SEO \/ SEM","nicename":"seo_y_sem"},{"category_id":907,"name":"Software General","nicename":"software-general"},{"category_id":232,"name":"Software Libre","nicename":"libros_software_libre"},{"category_id":501,"name":"Textos Acad\u00e9micos","nicename":"textos-academicos"},{"category_id":235,"name":"Web 2.0 y Social Media","nicename":"libros_web_2_0_y_social_media"}]
  }

  handlerMenuCategorys(){
    this.menuCategorys = !this.menuCategorys;
  }

}
