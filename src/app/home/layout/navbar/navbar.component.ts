import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  public selectLanguage(event: any){
    this.translateService.use(event)
 }

  ngOnInit(): void {
  }

}
