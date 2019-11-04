import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  constructor() { }
  _ref:any;   
  removeObject(){
    console.log('working')
    console.log(this._ref,'working2')
    this._ref.destroy();
  }   
  save(){
    alert('Saved Successfully!');
  }
  ngOnInit() {
  }

}
