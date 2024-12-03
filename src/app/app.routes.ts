import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';  // Componente correto importado
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

// Definição das rotas
export const routes: Routes = [
  {
    path: "", component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuração de rotas com RouterModule.forRoot()
  exports: [RouterModule]  // Exportação do RouterModule
})
export class AppRoutingModule { }
