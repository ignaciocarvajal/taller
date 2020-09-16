import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

@Input() games: any;
@Output() goDetail: EventEmitter<string> = new EventEmitter<string>();
@Output() goModify: EventEmitter<string> = new EventEmitter<string>();
@Output() goDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  modify(id: string) {
    this.goModify.emit(id);
  }
  delete(id: string) {
    this.goDelete.emit(id);
  }
  detail(id: string) {
    this.goDetail.emit(id);
  }

}
