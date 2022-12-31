import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss']
})
export class ProfileModuleComponent implements OnInit {
  addLink: boolean = false;

  @Input() profileId: number = 0
  @Input() fullName: string = ''
  @Input() jobTitle: string = ''
  @Input() about: string = ''
  @Input() links: Array<any> = []

  @Output() profileUpdate = new EventEmitter<any>();

  deleteLinks: Array<any> = []

  constructor(private saveProfileService: PortfolioService) { }

  ngOnInit(): void {
  }

  handleOpenAddLink() {
    this.addLink = !this.addLink;
  }
  handleAddLink(name: string, url: string, icon: string) {
    this.links.push({ "name": name, "icon": icon, "url": url, "profile": { "id": this.profileId } });
  }
  handleRemoveLink(name: string) {
    this.deleteLinks = [...this.deleteLinks, ...this.links.filter(link => link.name === name)];
    this.links = this.links.filter(link => link.name !== name);
    console.log(this.deleteLinks)
  }

  handleSaveProfile(fullName: string, jobTitle: string, about: string, profileImg: any, bannerImg: any) {
    const profileData = {
      "id": this.profileId,
      "name": fullName,
      "jobTitle": jobTitle,
      "about": about
    }
    //POST to create the link, if it doesn't contain an ID
    const addLinks = this.links.filter(link => !link.id);
    //fileters the deleteLinks array to only contain links that have an id and sends it to the backend
    const delLinks = this.deleteLinks.filter(link => link.id);

    this.saveProfileService.postProfile(bannerImg[0], profileImg[0], JSON.stringify(profileData), JSON.stringify(addLinks), JSON.stringify(delLinks))
    .subscribe(res => this.profileUpdate.emit(JSON.parse(res)));

    this.deleteLinks = [];
  }
}
