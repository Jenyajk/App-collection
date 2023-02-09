import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  login: boolean = true;
  logout: any;
  lang: string = 'en'

  constructor(
    private translateService: TranslateService
  ) { }


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



  ngOnInit() {
    localStorage.setItem("lang", this.lang)
    // let current_lang = localStorage.getItem('lang')
    // if (!current_lang) {
    //   localStorage.setItem("lang", this.lang)
    // } else {
    //   this.lang = current_lang
    //  console.log('ddd')
    // }
    let current_login = localStorage.getItem('login')
    if (!current_login) {
      this.login = true
    } else this.login = false

  }

}
