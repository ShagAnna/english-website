import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private readonly totalLessons = 20;
  private completedLessons = 0;
  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  constructor() {
    this.restoreProgress();
  }

  private restoreProgress(): void {
    const savedProgress = localStorage.getItem('completedLessons');
    this.completedLessons = savedProgress ? parseInt(savedProgress, 10) : 0;
    this.updateProgress();
  }

  completeLesson(): void {
    if (this.completedLessons < this.totalLessons) {
      this.completedLessons++;
      localStorage.setItem('completedLessons', this.completedLessons.toString());
      this.updateProgress();
    }
  }

  private updateProgress(): void {
    const progress = (this.completedLessons / this.totalLessons) * 100;
    this.progressSubject.next(progress);
  }
}
