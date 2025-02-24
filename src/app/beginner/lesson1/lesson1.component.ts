import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from 'src/app/progress.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  isCompleted = false;
  lessonKey = 'lesson1Completed';

  constructor(
    private router: Router,
    private progressService: ProgressService
  ) { }

  ngOnInit(): void {
    this.isCompleted = localStorage.getItem(this.lessonKey) === 'true';
  }

  goBack() {
    this.router.navigate(['/beginner']);
  }

  markLessonComplete() {
    if (!this.isCompleted) {
      this.progressService.completeLesson();
      this.isCompleted = true; 
      localStorage.setItem(this.lessonKey, 'true'); 
    }
  }

}
