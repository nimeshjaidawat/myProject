import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleguideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
