import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path:'*', component:HomeComponent },

  { path:'', component:HomeComponent },
  { path:'page/:page', component:HomeComponent },
  { path:'mostviewed', component:HomeComponent },
  { path:'mostviewed/page/:page', component:HomeComponent },
  { path:'category/:category', component:HomeComponent },
  { path:'category/:category/page/:page', component:HomeComponent },
  { path:'detail/:ID', component:DetailComponent },
  { path:'search/:type/:word', component:HomeComponent },
  { path:'search/:type/:word/page/:page', component:HomeComponent },
  { path:'favorites', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
