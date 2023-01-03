import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent {
  @Input() data:any;
  isRoute:Router; 
  apiRoute:String = environment.apiURL;

  @Output() profileUpdate = new EventEmitter<any>();

  constructor(private router: Router){
    this.isRoute = router;
  }

  onProfileUpdate(event:any){
    this.profileUpdate.emit(event);
  }
}
