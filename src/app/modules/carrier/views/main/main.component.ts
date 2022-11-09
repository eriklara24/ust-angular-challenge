import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarrierService } from 'src/app/services/carrier.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  items: any = [];
  trackingForm: FormGroup = this.formBuilder.group({
    trackingNumber: new FormControl('')
  })

  constructor(
    private carrierService: CarrierService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  getByID() {
    this.carrierService.getByID(this.trackingForm.value.trackingNumber).subscribe(data => {
      console.log(data);
      this.items = data.items;
    });
  }
}
