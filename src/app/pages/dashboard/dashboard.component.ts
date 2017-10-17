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
  public str =" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod. Brunch 3 wolf moon tempor,sunt aliqua put a bird on it squid single-origin coffee nullaassumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beerfarm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamuslabore sustainableVHS."

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
