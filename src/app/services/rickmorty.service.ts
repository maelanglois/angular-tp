import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RickMortyI } from '@/interfaces/rickmorty.interface';

@Injectable({
    providedIn: "root"
})
export class RickMortyService {
    private http = inject(HttpClient);
    public characters = signal<RickMortyI[]>([]);
    readonly url = 'https://rickandmortyapi.com/api/character';

    getCharacter(): Observable<RickMortyI[]> {
        return this.http.get<RickMortyI[]>(this.url).pipe(
            tap(characters => this.characters.set(characters))
        );
    }
}