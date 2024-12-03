import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const BASE_URL = 'https://backend-teste-13hy.onrender.com/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}

  // Método para criar um autor
  createAuthor(authorData: { name: string, birthDate: string }): Observable<any> {
    return this.http.post(`${BASE_URL}`, authorData);
  }

  // Método para obter todos os autores
  getAllAuthors(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/all`);
  }
}
