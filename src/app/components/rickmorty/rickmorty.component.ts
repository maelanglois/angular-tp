import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RickMortyService } from '@/services/rickmorty.service';
import { RickMortyI } from '@/interfaces/rickmorty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rickmorty',
  imports: [
    CommonModule
  ],
  templateUrl: './rickmorty.component.html',
  styleUrl: './rickmorty.component.css'
})

export class RickmortyComponent implements OnInit {
  private rickmortyService = inject(RickMortyService);
  character: WritableSignal<RickMortyI|undefined> = signal(undefined);

  private route = inject(ActivatedRoute)


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.rickmortyService.getCharacter(id).subscribe(
      {
        next: (response) => {          
          this.character.set(response)
        },
        error: () => {
          console.log("error");
        }
      },
    );
  }

}
