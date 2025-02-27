import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from 'src/app/progress.service';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() vocabulary!: { emoji: string, term: string, definition: string }[];
  @Input() examples!: string[];
  @Input() questions!: { question: string, answer: string }[];
  @Input() lessonKey!: string;
  
  isCompleted = false;

  constructor(private router: Router, private progressService: ProgressService) {}


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
