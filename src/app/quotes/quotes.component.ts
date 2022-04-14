import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
new Quotes(1, 'The minority have a say but the majority have their way', 'by Dr Opiyo'),
new Quotes(2,'The greatest glory in living lies not in never falling, but in rising every time we fall','by Nelson Mandela'),
new Quotes(3,'The way to get started is to quit talking and begin doing','by Walt Disney'),
new Quotes(4,'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma- which is living with the results of othe peoples thinking','by Steve Jobs'),
new Quotes(5,'If life were predictable it would cease to be life, and be without flavour','by Eleanor Roosevelt'),
new Quotes(6,'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough','by Oprah Winfrey'),
new Quotes(7,'If you set your goals ridiculosly high and its a failure, you will fail above everyone elses success','by James Cameron'),
];


  constructor() { }

  ngOnInit(): void {
  }

}
