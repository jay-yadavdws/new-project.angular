import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  user:any;
  flag:boolean=false
  
  toggleButton(){
    this.flag= !this.flag
  }
  
  constructor() { }

  ngOnInit(): void {
    this.user=[{
      name:'J',
      designation:'SD'
    },
    {
      name:'A',
      designation:'DC'
    }
  ]
  }

}
