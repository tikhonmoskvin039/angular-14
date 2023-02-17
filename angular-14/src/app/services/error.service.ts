import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor () {}

  error$ = new Subject<string>() // * create a stream for some errors

  handle (message: string) {
    this.error$.next(message)
  }

  clear () {
    this.error$.next('') // * clear the error
  }
}
