import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  questions = [
    {
      question: 'What is the past tense of "go"?',
      options: ['gone', 'went', 'goes', 'going'],
      correctAnswer: 'went'
    },
    {
      question: 'Choose the correct spelling:',
      options: ['accomodation', 'accommodation', 'acomodation', 'acommodation'],
      correctAnswer: 'accommodation'
    },
    {
      question: 'Which is a synonym of "happy"?',
      options: ['sad', 'joyful', 'angry', 'bored'],
      correctAnswer: 'joyful'
    }
  ];

  userAnswers: string[] = [];
  results: number | null = null;

  submitTest() {
    this.results = this.userAnswers.filter(
      (answer, index) => answer === this.questions[index].correctAnswer
    ).length;
  }

  isAllAnswered(): boolean {
    return this.userAnswers.length === this.questions.length &&
      this.userAnswers.every(answer => answer !== undefined);
  }
}
