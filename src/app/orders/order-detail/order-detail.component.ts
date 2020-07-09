import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(
    private bcService: BreadcrumbService,
    private activateRoute: ActivatedRoute,
    private orderService: OrdersService
  ) {
    this.bcService.set('@orderDetails', '');
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService
      .getOrderDetails(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (order: IOrder) => {
          this.order = order;
          this.bcService.set(
            '@orderDetails',
            'Order# ' + order.id + ' - ' + order.status
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
