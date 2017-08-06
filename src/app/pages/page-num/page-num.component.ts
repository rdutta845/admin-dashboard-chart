import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import globalData from '../../app.globals';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html',
  providers: [globalData]
})
export class PageNumComponent implements OnInit, OnDestroy {
  private id = 0;
  private sub: any;
  private pageData:any;
  private boxSection: any;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    public globalData: globalData,
    public sanitizer: DomSanitizer
  ) {
    // TODO
    
  }

  public ngOnInit() {
      
    $("body").addClass("pageHeightAuto");
    // when calling routes change
    const idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
        this.pageData = this.globalData.pages[this.id];
      this.boxSection = this.globalData.pages[this.id].section;
      console.log(this.boxSection);
      // changing header
      this.breadServ.set({
        description: 'This is our ' + this.id + ' page',
        display: true,
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'clock-o',
            link: ['/page/' + this.id],
            title: 'Page ' + this.id
          }
        ]
      });
    });
  }

  public ngOnDestroy() {
    $("body").removeClass("pageHeightAuto");
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
