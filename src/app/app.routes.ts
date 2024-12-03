import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { NgModule } from '@angular/core';
import { AddBooksComponent } from './add-books/add-books.component';

// Definição das rotas
export const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'  // Rota inicial
  },
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'authors', component: AuthorListComponent
  },
  {
    path: 'createdauthor', component: AddAuthorsComponent
  },
  {
    path: 'createdbooks', component:AddBooksComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'  // Rota de fallback (caso nenhuma das rotas seja encontrada)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]  
})
export class AppRoutingModule { }
