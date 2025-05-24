import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveMatchesComponent } from "./live-matches/live-matches.component";
import { NavComponent } from "./nav/nav.component";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LiveMatchesComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
