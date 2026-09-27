import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pagenation',
  styleUrl: './pagenation.css',
  templateUrl: './pagenation.html',
})
export class Pagenation {
  @Input() pageIndex = 1;
  @Input() pageSize = 10;
  @Input() count = 0;

  @Output() pageChange = new EventEmitter<number>();

  get pageCount(): number {
    return this.pageSize ? Math.ceil(this.count / this.pageSize) : 0;
  }

  get pages(): number[] {
    return Array.from({ length: this.pageCount }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.pageCount && page !== this.pageIndex) {
      this.pageChange.emit(page);
    }
  }
}
