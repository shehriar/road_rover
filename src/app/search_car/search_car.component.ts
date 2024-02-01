import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ScrollService } from '../services/scroll.service';

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

  @ViewChild('searchCarComponent', { static: false }) searchCarComponent!: ElementRef;

  constructor(private scrollService: ScrollService, private router: Router) {}

  ngOnInit() {
    this.scrollService.scrollToCarSearchObservable.subscribe(() => {
      this.searchCarComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  clickButton(path: string) {
    this.router.navigateByUrl(path);
  } 
}
