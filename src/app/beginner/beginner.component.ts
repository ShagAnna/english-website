// beginner.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent {
  selectedLesson: string = ''; // Holds the currently selected lesson

  // Method to update the selected lesson when a card is clicked
  openLesson(lesson: string) {
    this.selectedLesson = lesson;
  }
}
