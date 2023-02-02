import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  login: any;
  logout:any;
  lang: string = 'EN'

  constructor(
    private translateService: TranslateService
  ) { }


 public switchLanguageEN() {
    this.lang = 'EN'
let l = localStorage.getItem('lang')
   this.changeLanguage()
  }


  public switchLanguageRU() {
    this.lang = 'RU'
    this.changeLanguage()
  }
  public changeLanguage() {
    if (this.lang === 'EN') {
      this.translateService.use("en")
      this.lang = "EN"
    } else {
      this.translateService.use("ru");
      this.lang = "РУ"
    }
  }

  ngOnInit() {
   localStorage.setItem('lang', this.lang)
  }

}
