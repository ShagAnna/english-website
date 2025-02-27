import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component {
  foodAndDrinksVocabulary = [
    { emoji: '🍞', term: 'Bread', definition: 'a basic food made from flour and baked' },
    { emoji: '🍚', term: 'Rice', definition: 'small white or brown grains that are cooked and eaten' },
    { emoji: '🍕', term: 'Pizza', definition: 'a popular dish with dough, cheese, and toppings' },
    { emoji: '🍔', term: 'Burger', definition: 'a sandwich with a cooked meat patty inside' },
    { emoji: '🥗', term: 'Salad', definition: 'a dish made of fresh vegetables' },
    { emoji: '🍎', term: 'Apple', definition: 'a red or green fruit that is sweet and crunchy' },
    { emoji: '🥛', term: 'Milk', definition: 'a white liquid from cows, used in drinks and cooking' },
    { emoji: '🍵', term: 'Tea', definition: 'a hot drink made by boiling tea leaves in water' },
    { emoji: '☕', term: 'Coffee', definition: 'a popular hot drink made from coffee beans' },
    { emoji: '🥤', term: 'Juice', definition: 'a drink made from squeezed fruits' }
  ];

  foodAndDrinksExamples = [
    "I eat bread and eggs for breakfast.",
    "My favorite food is pizza because it’s so tasty!",
    "For lunch, I usually have rice with vegetables.",
    "I love drinking coffee in the morning.",
    "I drink a glass of milk before going to bed.",
    "Salads are healthy and full of vitamins.",
    "Do you like apple juice or orange juice?",
    "We had a burger and fries for dinner last night."
  ];

  foodAndDrinksQuestions = [
    { question: "What’s your favorite food?", answer: "My favorite food is pasta!" },
    { question: "What do you usually eat for breakfast?", answer: "I usually eat toast and drink tea." },
    { question: "Do you like spicy food?", answer: "Yes, I love spicy food!" },
    { question: "What’s a popular dish in your country?", answer: "A popular dish in my country is curry." },
    { question: "Do you prefer coffee or tea?", answer: "I prefer coffee because it wakes me up!" }
  ];
}
