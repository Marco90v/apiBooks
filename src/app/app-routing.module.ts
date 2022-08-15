import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path:'*', component:HomeComponent },

  { path:'', component:HomeComponent },
  { path:'page/:page', component:HomeComponent },
  { path:'mostviewed', component:HomeComponent },
  { path:'mostviewed/page/:page', component:HomeComponent },
  { path:'category/:category', component:HomeComponent },
  { path:'category/:category/page/:page', component:HomeComponent },
  { path:'detail/:ID', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
