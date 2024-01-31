import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-renting';
  constructor(private router: Router, private scrollService: ScrollService) {}

  onHomeClick() {
    this.scrollService.scrollToHome();
  }

  onAboutClick(){
    this.scrollService.scrollToAbout();
  }

  onOurTeamClick(){
    this.scrollService.scrollToOurTeam();
  }

  onContactClick(){
    this.scrollService.scrollToContact();
  }
  onCarListClick(){
    this.scrollService.scrollToCarList();
  }
}
