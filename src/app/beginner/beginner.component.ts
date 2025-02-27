// beginner.component.ts
import { Component } from '@angular/core';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent {
  selectedLesson: string = ''; 

  lessons = [
    { id: 'lesson1', title: 'Lesson 1: Daily Routine', link: '/beginner/lesson1', component: Lesson1Component },
    { id: 'lesson2', title: 'Lesson 2: Food and Drink', link: '/beginner/lesson2', component: Lesson2Component },
    { id: 'lesson3', title: 'Lesson 3: Family', link: '/beginner/lesson3', component: Lesson3Component },
    { id: 'lesson4', title: 'Lesson 4: Hobbies and Interests', link: '/beginner/lesson4', component: Lesson4Component },
    { id: 'lesson5', title: 'Lesson 5: Weather and Seasons', link: '/beginner/lesson5', component: Lesson5Component },
    { id: 'lesson6', title: 'Lesson 6: Travel and Transportation', link: '/beginner/lesson6', component: Lesson6Component },
  ];

  openLesson(lessonId: string) {
    this.selectedLesson = lessonId;
  }
}
