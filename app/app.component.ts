import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'demoapp';
  //interpolation example
  studentname: string = 'Hazel';
  schoolname: string = 'xyz school';
  num1: number = 3;
  num2: number = 9;
  grade: number = 6
}