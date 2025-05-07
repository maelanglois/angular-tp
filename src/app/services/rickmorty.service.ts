import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RickMortyI } from '@/interfaces/rickmorty.interface';

@Injectable({
  providedIn: "root"
})
export class RickMortyService {
  private http = inject(HttpClient);
  public characters = signal<RickMortyI[]>([]);
  readonly url = 'https://rickandmortyapi.com/api/character';

  readonly nasaUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'zbFWOjM5P0ucALw4qi95evMmavUZa7lHGtoZM2D7';

  // Rick and Morty
  getCharacters(): Observable<RickMortyI[]> {
    return this.http.get<{ results: RickMortyI[] }>(this.url).pipe(
      map((response) => response.results)
    );
  }

  getCharacter(id: string): Observable<RickMortyI> {
    return this.http.get<RickMortyI>(`${this.url}/${id}`).pipe(
      map((response) => response)
    );
  }

  // Nasa
  getNasa(date?: string): Observable<any> {
  const params = date ? `?api_key=${this.apiKey}&date=${date}` : `?api_key=${this.apiKey}`;
  return this.http.get<any>(`${this.nasaUrl}${params}`);
}
}
