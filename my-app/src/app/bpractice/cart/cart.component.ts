import { Component, OnInit } from '@angular/core';
import { ItemCountService } from '../item-count.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  count:number=0
  constructor(private itemservice:ItemCountService){}

  ngOnInit(): void {
    // ItemCountService.countval$.subscribe(length=>{
    //     this.count = length
    //   })

      this.itemservice.arraynumber.subscribe(res=>this.count=res)
  }

}
