import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public items: any[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i <= 30; i++) {
      this.items.push(i);
    }
  }

}
