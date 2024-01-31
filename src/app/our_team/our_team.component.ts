import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our_team.component.html',
  styleUrls: ['./our_team.component.css']
})
export class OurTeamComponent{
  title = 'Our Team';

  @ViewChild('ourTeamComponent', { static: false }) ourTeamComponent!: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToOurTeamObservable.subscribe(() => {
      this.ourTeamComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
