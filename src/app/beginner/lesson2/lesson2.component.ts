import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from 'src/app/progress.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

constructor(private router: Router, private progressService: ProgressService) { }
isCompleted = false;
lessonKey = 'lesson2Completed';

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
