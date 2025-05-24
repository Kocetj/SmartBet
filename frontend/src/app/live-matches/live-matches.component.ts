import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveService } from '../services/live.service';

@Component({
  selector: 'app-live-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-matches.component.html'
})
export class LiveMatchesComponent implements OnInit {
  matches: any[] = [];

  constructor(private liveService: LiveService) {}

  ngOnInit(): void {
    this.liveService.getLiveMatches().subscribe({
      next: (data) => {
        this.matches = data.response || [];
      },
      error: (err) => {
        console.error('Napaka pri pridobivanju tekem:', err);
      }
    });
  }
}
