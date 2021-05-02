import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.reload();
  }
  reload(){
    if (!localStorage.getItem('load')) { 
      localStorage.setItem('load', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('load') 
    }
  }

  

}
