import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ScrollService } from './services/scroll.service';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-renting';
  constructor(private router: Router, private scrollService: ScrollService, private apiService: ApiService) {}

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

  message: any; 
  ngOnInit() { 
      this.apiService.getMessage().subscribe(data => { 
          this.message = data; 
      }); 
  } 
}
