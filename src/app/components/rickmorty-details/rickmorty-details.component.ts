import { RickMortyI } from '@/interfaces/rickmorty.interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rickmorty-details',
  imports: [CommonModule],
  templateUrl: './rickmorty-details.component.html',
  styleUrl: './rickmorty-details.component.css'
})
export class RickmortyDetailsComponent {
  @Input() character!:RickMortyI;
}
