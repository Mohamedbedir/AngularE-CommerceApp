import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  search=''

  @Output()
  searchEvent:EventEmitter<string>=new EventEmitter();

  SendValue(){
    this.searchEvent.emit(this.search)
  }

}
