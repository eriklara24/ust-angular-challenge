import { Component, Input, OnInit } from '@angular/core';
import { Package } from 'src/app/resources/interfaces';
import dateToString from '../../../../resources/utilties';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})


export class PackageDetailComponent implements OnInit {

  @Input() package: Package = {
    paynumber: 'None',
    status: 'None',
    actualPickUpDate: new Date(0),
    actualDeliveryDate: new Date(0),
    originCity: 'None',
    destinationCity:' None',
    searchCriteria: 'None',
    trackingComments: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  dateToString(date: Date) {
    if (!date) return 'Not Set'

    return `${date.getFullYear()/date.getMonth() + 1/date.getDate()}`;
  }
}
