import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date_picker.component.html',
  styleUrls: ['./date_picker.component.css']
})
export class DatePickerComponent{
  title = 'Search Car';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}
