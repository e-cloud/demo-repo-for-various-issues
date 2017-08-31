import { Component, OnInit } from '@angular/core';
import { ShortenPipe } from 'ngx-pipes'

@Component({
  selector: 'app-test-route2',
  templateUrl: './test-route2.component.html',
  styleUrls: ['./test-route2.component.css'],
  providers: [ShortenPipe]
})
export class TestRoute2Component implements OnInit {
  text = 'Hey foo bar'

  get shortenStr() {
    return this.shorten.transform(this.text, 3)
  }

  constructor(private shorten: ShortenPipe) { }

  ngOnInit() {
  }

}
