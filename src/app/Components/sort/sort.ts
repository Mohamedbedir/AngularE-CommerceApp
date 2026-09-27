import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-sort',
  styleUrl: './sort.css',
  templateUrl: './sort.html',
})
export class Sort {
  Sort=''
  @Output()
  SortEvent:EventEmitter<string>=new EventEmitter();

  sendSort(){
    this.SortEvent.emit(this.Sort)
  }
}
