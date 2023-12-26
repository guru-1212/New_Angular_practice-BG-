import { Component, OnInit } from '@angular/core';
import { ItemCountService } from '../item-count.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  inputValue: string = '';
  newArr: string[] = ['sadf', 'sadf', 'svad', 'sdf', 'esf'];

  constructor ( private itemServiceCount:ItemCountService){}

  ngOnInit(): void {
      this.arrLenght()
  }

  getInputVal() {
    this.newArr.push(this.inputValue);
    this.inputValue = '';
    console.log(this.newArr);
    this.arrLenght()
  }

  delete(index: number) {
    this.newArr = this.newArr.filter((item, i) => i !== index);
    this.arrLenght()
  }

arrLenght() {
  this.itemServiceCount.arraynumber.next(this.newArr.length)
}


}
