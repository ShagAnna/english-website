import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  progress: number = 0;
  
  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
    this.progressService.progress$.subscribe(progress => {
      this.progress = progress;
    });
  }

}
