
import { Component, 
  OnInit, 
  ViewChild, 
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
  import {ExpComponent} from '../exp/exp.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private _cfr: ComponentFactoryResolver) { }
 
  addComponent(){    
    var comp = this._cfr.resolveComponentFactory(ExpComponent);
    console.log('comp',comp)
    var expComponent = this.container.createComponent(comp);
    console.log('expComponent',expComponent)
    expComponent.instance._ref = expComponent;
}
  

  ngOnInit() {
  }

}
