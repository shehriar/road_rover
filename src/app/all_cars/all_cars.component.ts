import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all_cars.component.html',
  styleUrls: ['./all_cars.component.css']
})

export class AllCarsComponent implements OnInit{
    title = 'Autocomplete Search';
    constructor(private apiService: ApiService){};

    allCarModels!: string[];

    ngOnInit() {
        this.apiService.getAllCarModels().subscribe({
            next: (response) => {
              this.allCarModels = response.vehicle_models.map((cars: any) => `${cars.vehiclemodel}`);
            },
            error: (err) => {
                console.error('Error fetching locations:', err);
            }
        })
    }
}