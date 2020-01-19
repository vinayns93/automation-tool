import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-scripts',
  templateUrl: './test-scripts.component.html',
  styleUrls: ['./test-scripts.component.scss']
})
export class TestScriptsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

}
