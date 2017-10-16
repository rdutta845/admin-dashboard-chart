import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-dash',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashComponent implements OnInit, AfterViewInit, OnDestroy {

  public obj:Object;
  public objArray:any;
  public section:any;
  constructor(
  ) {
    // TODO
    this.obj={
      "newOrder":12,
      "bounceRate":13,
      "userRegistration":14,
      "uniqueVisitor":15
    }
    this.section=[
        {
          "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1939335151&single=true&headers=false&chrome=false&widget=false",
          "title": "Men & Women Offers",
          "type": "iframe",
          "height": "100%"
        },
        {
          "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1685717330&single=true&headers=false&chrome=false&widget=false",
          "title": "Baby & Kids Offers",
          "type": "iframe",
          "height": "100%"
        }
      ]

  }

  public ngOnInit() {
      
      this.objArray = [
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      },
      {
        "renderingEngine":"Trident",
        "browser":"InternetExplorer 4.0",
        "platform":"Win 95+",
        "engineversion":"4",
        "cssgrade":"X"
      }
    ]
    
    
  }
    
 public ngAfterViewInit() {
    
    
  }
    

  public ngOnDestroy() {
  }
}
