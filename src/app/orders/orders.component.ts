import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { IOrder } from '../shared/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];
  ordersChecked: boolean = false;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders() {
    this.ordersService.getUserOrders().subscribe(
      (orders: IOrder[]) => {
        this.ordersChecked = true;
        if (orders) {
          this.orders = orders;
          console.log(orders);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
