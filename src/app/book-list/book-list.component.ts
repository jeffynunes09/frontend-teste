import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-book-list',
  imports: [FormComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  fields = [
    { label: 'Titulo', type: 'text', placeholder: 'Digite o titulo do livro' },
    { label: 'Data de lançamento', type: 'date' },
    { label: 'Autor', type: 'select' }
  ];

}
