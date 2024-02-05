import { Component, ViewChild } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interface';
import { VehicleSelectionService } from '../services/vehicle_select.service';
import { DateRangeService } from '../services/date-range.service';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected_car.component.html',
  styleUrls: ['./selected_car.component.css']
})
export class SelectedCarComponent{
    title = 'Selected Car';
    selectedCar! : Vehicle;
    selectedDateRange : any;
    constructor(private selectedVehicle : VehicleSelectionService, private dateRangeService : DateRangeService) {}

    ngOnInit(){
      this.dateRangeService.dateSelected.subscribe(date =>{
        this.selectedDateRange = date;
      })
      this.selectedVehicle.selectedVehicle.subscribe(vehicle => {
        if (vehicle) {
          this.selectedCar = vehicle;
        }
      });
      console.log(this.selectedDateRange);
    }

    setVehicle(vehicle : Vehicle){
        this.selectedCar = vehicle;
    }
}