import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss']
})
export class ProfileModuleComponent implements OnInit {
  addLink:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  handleAddLink(){
    this.addLink = !this.addLink;
  }

}
