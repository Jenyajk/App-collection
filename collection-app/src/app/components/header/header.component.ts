import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ApiService} from "../../core/api/api.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  login: boolean = true;
  logout!: boolean;
  lang: string = 'en'
  username: string | null = ''

  constructor(
    private translateService: TranslateService,
    private apiService: ApiService
  ) {

  }


 public switchLanguageEN() {
    this.lang = 'en'
   this.changeLanguage()
   localStorage.setItem("lang", this.lang)

  }

  public switchLanguageRU() {
    this.lang = 'ru'
    this.changeLanguage()
    localStorage.setItem("lang", this.lang)
  }
  public changeLanguage() {
    if (this.lang === 'en') {
      this.translateService.use("en")
      this.lang = "en"
    } else {
      this.translateService.use("ru");
      this.lang = "ru"
    }
  }

  logoutGo() {
    localStorage.removeItem('username')
    this.username = ''
    this.login = true
  }

  ngOnInit() {
    localStorage.setItem("lang", this.lang)
    let name = localStorage.getItem('username')
    if ( name!) {
      this.username = name
      this.login = false
    }
  }

}
