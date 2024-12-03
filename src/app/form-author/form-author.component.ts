import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-form-author',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-author.component.html',
  styleUrls: ['./form-author.component.css']
})
export class FormAuthorComponent {
  name?: string;
  birthDate?: string;  

  constructor(private router: Router, private authorService: AuthorService) {}

  onSubmit() {
    if (!this.name || !this.birthDate) {
      console.error("Os campos Nome e Data de Nascimento são obrigatórios.");
      return; 
    }
  
    const authorData = {
      name: this.name || "",       
      birthDate: this.birthDate || "" 
    };
  
    this.authorService.createAuthor(authorData).subscribe({
      next: (response) => {
        console.log('Autor criado com sucesso:', response);
        this.router.navigate(['createdbooks']);
      },
      error: (error) => {
        console.error('Erro ao criar autor:', error);
      }
    });
  }
}
