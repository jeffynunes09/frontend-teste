import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-books',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './form-books.component.html',
  styleUrl: './form-books.component.css'
})
export class FormBooksComponent {
title?: string;
post?: Date;
author?: string;
onSubmit() {
throw new Error('Method not implemented.');
}

}
