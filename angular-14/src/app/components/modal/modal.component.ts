import { ModalService } from './../../services/modal.service';
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor (public modalService: ModalService) {}

  @Input() title: string

  ngOnInit () {}
}
