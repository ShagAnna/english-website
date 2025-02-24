import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progress: number = 0;

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.progressService.progress$.subscribe(progress => {
      this.progress = progress;
    });
  }
}
