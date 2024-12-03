import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-add-books',
  imports: [FormComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  fields = [
    { label: 'Titulo', type: 'text', placeholder: 'Digite o titulo do livro' },
    { label: 'Data de lançamento', type: 'date' },
    { label: 'Autor', type: 'select' }
  ];
}
