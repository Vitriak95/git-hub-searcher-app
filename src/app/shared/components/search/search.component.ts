import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input('id') idProps: string;
  @Input('label') labelProps: string;
  @Output('searchHandler') searchHandlerEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handlerInput(event: Event): void {
    console.log('event', (event.target as HTMLInputElement).value);

    this.searchHandlerEvent.emit((event.target as HTMLInputElement).value);
  }

}
