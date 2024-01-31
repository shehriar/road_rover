import { Component, ElementRef, ViewChild} from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  constructor(private scrollService: ScrollService) {}

  @ViewChild('homeComponent', { static: false }) homeComponent!: ElementRef;


  onBookARideClick() {
    this.scrollService.scrollToSearchCar();
  }

  ngOnInit() {
    this.scrollService.scrollToHomeObservable.subscribe(() => {
      this.homeComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
