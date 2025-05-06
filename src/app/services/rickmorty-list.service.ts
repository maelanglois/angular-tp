import { Injectable } from "@angular/core";
import { RickMortyI } from "@/interfaces/rickmorty.interface";

@Injectable({
  providedIn: "root"
})
export class RickmortyService {
  characters!: RickMortyI[];

  getRickmortyList(): RickMortyI[] {
    return this.characters;
  }

  getRickMortyByID(RickMortyId: number): RickMortyI|undefined{
    const rickmortyCharacters = this.characters.find(rickmortyCharacters => rickmortyCharacters.id === RickMortyId);
    if(!rickmortyCharacters) return undefined;
    return rickmortyCharacters;
  }
}