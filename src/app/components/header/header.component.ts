import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input () links:any;
  isRoute:Router;

  constructor(private router:Router, private cookieService:CookieService){
    this.isRoute = router;
  }

  handleLogout(){
    this.cookieService.delete('token');
    this.router.navigate(['/'])
  }
}
