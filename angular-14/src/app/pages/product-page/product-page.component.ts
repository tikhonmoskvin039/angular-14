import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/product.model'
import { ModalService } from 'src/app/services/modal.service'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  constructor (
    public productsService: ProductService,
    public modalService: ModalService
  ) {}
  title = 'angular-14'
  loading = false

  term = ''

  products: IProduct[] = []
  // products$: Observable<IProduct[]>

  ngOnInit (): void {
    this.loading = true
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false))) // * tap используется для того, чтобы точно что-то сделать после асинхронной операции

    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
