import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyService } from '@/services/rickmorty.service';

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
  characters = this.rickmortyService.characters;

  ngOnInit() {
    this.rickmortyService.getCharacter().subscribe();
  }
}
