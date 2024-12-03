import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';  // Componente correto importado
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';

// Definição das rotas
export const routes: Routes = [
  {
    path: "", component:HomeComponent,
    
  },
  {
    path:"books", component:BookListComponent
  },
  {
    path:"authors", component:AuthorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]  
})
export class AppRoutingModule { }
