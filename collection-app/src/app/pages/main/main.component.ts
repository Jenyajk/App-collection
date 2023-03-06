import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnInit{
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    let lang = localStorage.getItem("lang")
  }

}
