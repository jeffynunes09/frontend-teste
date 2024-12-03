import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Adicionar a importação do RouterModule

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [RouterModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  addBooks() {
 
    this.router.navigate(['createdauthor']);
  }
}
