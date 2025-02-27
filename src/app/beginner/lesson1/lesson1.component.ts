import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from 'src/app/progress.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component {
  isCompleted = false;
  lessonKey = 'lesson1Completed';

  constructor(
    private router: Router,
    private progressService: ProgressService
  ) { }

  public dailyRoutineVocabulary = [
    { emoji: '🛏️', term: 'Wake up', definition: 'to stop sleeping and get out of bed' },
    { emoji: '🚿', term: 'Take a shower', definition: 'to wash your body under running water' },
    { emoji: '🥞', term: 'Have breakfast', definition: 'to eat the first meal of the day' },
    { emoji: '🏢', term: 'Go to work', definition: 'to leave home for work' },
    { emoji: '🎒', term: 'Go to school', definition: 'to leave home for school' },
    { emoji: '🍽️', term: 'Have lunch', definition: 'to eat a meal in the middle of the day' },
    { emoji: '🏠', term: 'Go home', definition: 'to return to your house' },
    { emoji: '📺', term: 'Watch TV', definition: 'to watch shows or movies on television' },
    { emoji: '📖', term: 'Read a book', definition: 'to read for fun or learning' },
    { emoji: '🛌', term: 'Go to bed', definition: 'to get into bed and sleep' }
  ];

  public dailyRoutineExamples = [
    "I wake up at 6:30 AM every day.",
    "I take a shower before I have breakfast.",
    "I go to work at 8:00 AM and start at 9:00 AM.",
    "At lunchtime, I usually eat a sandwich and drink coffee.",
    "I finish work at 5:00 PM and go home.",
    "In the evening, I cook dinner and watch TV.",
    "Before going to bed, I like to read a book.",
    "I go to sleep at 11:00 PM."
  ];

  public dailyRoutineQuestions = [
    { question: "What time do you wake up?", answer: "I wake up at 7:00 AM." },
    { question: "What do you do after you wake up?", answer: "I brush my teeth and take a shower." },
    { question: "What time do you go to work/school?", answer: "I go to work at 8:30 AM." },
    { question: "What do you do in the evening?", answer: "In the evening, I relax, watch TV, and read a book." },
    { question: "What time do you go to bed?", answer: "I usually go to bed at 10:30 PM." }
  ];


}
