import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RickMortyService } from '@/services/rickmorty.service';
import { RickMortyI } from '@/interfaces/rickmorty.interface';
import { RickmortyDetailsComponent } from '../rickmorty-details/rickmorty-details.component';

@Component({
  selector: 'app-rickmorty-list',
  imports: [
    RickmortyDetailsComponent
  ],
  templateUrl: './rickmorty-list.component.html',
  styleUrl: './rickmorty-list.component.css'
})
export class RickmortyListComponent implements OnInit{
  private RickMortyService = inject(RickMortyService);

  rickmortyDatalist: WritableSignal<RickMortyI[]|undefined> = signal(undefined);

  ngOnInit(): void{

    this.RickMortyService.getCharacters().subscribe(
      {
        next: (response) => {
          this.rickmortyDatalist.set(response)
        }
      }
    );
  }
}
