import { ModalService } from './../../services/modal.service';
import { ProductService } from './../../services/product.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor (private productService: ProductService, private modalService: ModalService) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  ngOnInit () {}

  get title () {
    return this.form.controls.title as FormControl
  }

  submit () {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
