import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditcatComponent } from './editcat/editcat.component';
import { ShowcatComponent } from './showcat/showcat.component';


const routes: Routes = [
  { path: 'kittens/:id' , component: ShowcatComponent, children:[
    {path: 'edit', component: EditcatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
