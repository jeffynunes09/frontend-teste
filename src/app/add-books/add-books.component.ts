import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBooksComponent } from "../form-books/form-books.component";


@Component({
  selector: 'app-add-books',
  imports: [FormsModule, FormBooksComponent],
  standalone:true,
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {

}
