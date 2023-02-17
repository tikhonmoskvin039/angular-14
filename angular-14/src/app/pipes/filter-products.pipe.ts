import { IProduct } from './../models/product.model'
import { products } from './../data/product'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterProducts' // ! название пайпу нажно задавать в кэймел кейсе - ЧЕРЕЗ ДЕФИС НЕ РАБОТАЕТ!!!!
})
export class FilterProductsPipe implements PipeTransform {
  transform (products: IProduct[], search: string): IProduct[] {
    if (search.length === 0) return products
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  }
}
