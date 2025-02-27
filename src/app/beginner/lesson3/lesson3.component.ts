import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component {
  familyVocabulary = [
    { emoji: '👨', term: 'Father', definition: 'the male parent' },
    { emoji: '👩', term: 'Mother', definition: 'the female parent' },
    { emoji: '👴', term: 'Grandfather', definition: "your father's or mother's father" },
    { emoji: '👵', term: 'Grandmother', definition: "your father's or mother's mother" },
    { emoji: '👦', term: 'Son', definition: 'a male child' },
    { emoji: '👧', term: 'Daughter', definition: 'a female child' },
    { emoji: '🧑‍🤝‍🧑', term: 'Siblings', definition: 'brothers and sisters' },
    { emoji: '🤵', term: 'Husband', definition: 'the male partner in a marriage' },
    { emoji: '👰', term: 'Wife', definition: 'the female partner in a marriage' },
    { emoji: '🤵', term: 'Partner', definition: 'a person with whom someone shares a romantic relationship' }
  ];

  familyExamples = [
    "My father's name is John.",
    "I have two brothers and one sister.",
    "My grandmother lives in another city.",
    "I am the oldest child in my family.",
    "My wife and I have been married for five years."
  ];

  familyQuestions = [
    { question: "How many people are in your family?", answer: "There are five people in my family." },
    { question: "Do you have any siblings?", answer: "Yes, I have one brother and one sister." },
    { question: "What does your father do?", answer: "My father is a teacher." },
    { question: "Do you live with your parents?", answer: "Yes, I live with my parents." }
  ];
}
