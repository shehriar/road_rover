import { Component, ElementRef, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ScrollService } from '../services/scroll.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './search_car.component.html',
  styleUrls: ['./search_car.component.css']
})
export class SearchCarComponent{
  title = 'Search Car';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  pickupCitySelected : string = "";
  @Output() selectedLocation = new EventEmitter<string>();

  @ViewChild('searchCarComponent', { static: false }) searchCarComponent!: ElementRef;

  constructor(private scrollService: ScrollService, private router: Router, private locationService : LocationService) {}

  ngOnInit() {
    this.scrollService.scrollToCarSearchObservable.subscribe(() => {
      this.searchCarComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    this.locationService.getPickupLocationObservable().subscribe(location => {
      this.pickupCitySelected = location.split(',')[0];
    });
  }

  clickButton(path: string) {
    this.router.navigateByUrl(path);
  }
}
