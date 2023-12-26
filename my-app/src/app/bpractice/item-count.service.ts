import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCountService {
  arraynumber:BehaviorSubject<number>= new BehaviorSubject<number>(0)
}
