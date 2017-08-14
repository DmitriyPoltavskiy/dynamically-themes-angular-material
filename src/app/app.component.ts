import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  class:string = 'unicorn-dark-theme';
  selectedValue: string;

  foods = [
    {value: 'unicorn-dark-theme', viewValue: 'unicorn-dark-theme'},
    {value: 'unicorn-light-theme', viewValue: 'unicorn-light-theme'},
    {value: '', viewValue: ''}
  ];

  constructor(overlayContainer: OverlayContainer) {
    // overlayContainer.themeClass = 'unicorn-dark-theme';
    // alert(overlayContainer.themeClass);
  }
}
