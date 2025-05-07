import { NasaI } from '@/interfaces/nasa.interface';
import { RickMortyService } from '@/services/rickmorty.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nasa',
  imports: [
    CommonModule,
  ],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})

export class NasaComponent implements OnInit {
  private apiService = inject(RickMortyService);
  nasa: WritableSignal<any> = signal(undefined);

  ngOnInit(): void {
    this.apiService.getNasa().subscribe({
      next: (data: any) => this.nasa.set(data),
      error: () => console.error("J'ai pas la photo")
    })
  }
}
