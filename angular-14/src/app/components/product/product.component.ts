import { IProduct } from './../../models/product.model'
import { products } from './../../data/product'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() products: IProduct

  details = false

  constructor () {}

  ngOnInit () {}
}
