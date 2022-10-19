import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss']
})
export class ProfileModuleComponent implements OnInit {
  addLink:boolean=false;

  @Input() fullName:string = ''
  @Input() jobTitle:string = ''
  @Input() about:string = ''
  @Input() links:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

  handleAddLink(){
    this.addLink = !this.addLink;
  }

}
