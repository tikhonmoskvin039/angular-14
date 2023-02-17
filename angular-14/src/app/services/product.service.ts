import { products } from './../data/product'
import { ErrorService } from './error.service'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable, delay, catchError, throwError, retry, tap } from 'rxjs'
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor (private http: HttpClient, private errorService: ErrorService) {}

  products: IProduct[] = []

  getAll (): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5)
      })
      .pipe(
        delay(500),
        retry(2), // ! эта штука позволяет сделать дополнительные запросы на сервер автоматически в случае ошибки
        tap(products => this.products = products),
        catchError(this.errorHandler.bind(this))
      ) // * work with errors on server side
  }

  private errorHandler (error: HttpErrorResponse) {
    // * work with errors on server side

    this.errorService.handle(error.message)

    return throwError(() => error.message)
  }

  create (product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      'https://fakestoreapi.com/products',
      product
    ).pipe(tap(prod => this.products.push(prod)))
  }
}

// ! инжектэбл регистрирует наш сервис автоматически в корневом модуле // создаём для подключения данных  с сервера
