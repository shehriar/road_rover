import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { LocationService } from './location.service';
  
@Injectable({ 
    providedIn: 'root'
}) 
export class ApiService { 
    constructor(private http: HttpClient) { }
    getMessage() { 
        return this.http.get( 
            'http://localhost:3000/api/message'); 
    } 
    getLocations():Observable<any>{
        return this.http.get(
            'http://localhost:3000/api/locations'
        )
    }

    getAllCarModels():Observable<any>{
        return this.http.get(
            'http://localhost:3000/api/vehicle_models'
        )
    }

    getVehicleDataFromPickupLocation(pickupLocation:string):Observable<any>{
        console.log(pickupLocation);
        return this.http.post(
            'http://localhost:3000/api/vehicles_from_pickup_location',
            { pickupLocation: pickupLocation }
        );
    }

    getVehicleTypes():Observable<any>{
        return this.http.get(
            'http://localhost:3000/api/vehicle_types'
        )
    }

    getVehicleMakes():Observable<any>{
        return this.http.get(
            'http://localhost:3000/api/vehicle_makes'
        )
    }

    getFuelTypes():Observable<any>{
        return this.http.get(
            'http://localhost:3000/api/fuel_types'
        )
    }
}