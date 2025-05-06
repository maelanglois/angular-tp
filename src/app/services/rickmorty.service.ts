import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { RickMortyI } from '@/interfaces/rickmorty.interface';

@Injectable({
    providedIn: "root"
})
export class RickMortyService {
    private http = inject(HttpClient);
    public characters = signal<RickMortyI[]>([]);
    readonly url = 'https://rickandmortyapi.com/api/character';

    getCharacters(): Observable<RickMortyI[]> {
        return this.http.get<{results: RickMortyI[]}>(this.url).pipe(
            map((response) => response.results)
        );
    }
    
    getCharacter(id:string):Observable<RickMortyI> {
        return this.http.get<RickMortyI>(`${this.url}/${id}`).pipe(
            map((response) => response)
        )
    }
}