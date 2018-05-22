import { Component, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.css']
})
export class StaticCardComponent implements OnInit {

  //@Attribute - startowa wartość jako statycznanie ma możliwości zmiany
  //@Input - wiązanie dynamiczne, można zmieniać przekazaną wartość

  constructor(
    @Attribute('text') public bodyText,
    @Attribute('type') public type
  ) { }

  ngOnInit() {
  }

}
