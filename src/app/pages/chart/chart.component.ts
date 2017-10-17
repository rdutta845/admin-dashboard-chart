  // import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
  // import { Router, ActivatedRoute } from '@angular/router';
  // import { BreadcrumbService } from 'ngx-admin-lte';
  // import { DomSanitizer } from '@angular/platform-browser';
  // declare var $: any;


  // @Component({
  //   selector: 'app-chart',
  //   styleUrls: ['./chart.component.css'],
  //   templateUrl: './chart.component.html'
  // })
  // export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {

  //   constructor(
  //   ) {
  //     // TODO
          
  //       // this.pages =   {

  //       //   }
      
  //   }

  //   public ngOnInit() {
        
  //    var area = new Morris.Area({
  //          element: 'revenue-chart',
  //          resize: true,
  //          data: [
  //            {y: '2011 Q1', item1: 2666, item2: 2666},
  //            {y: '2011 Q2', item1: 2778, item2: 2294},
  //            {y: '2011 Q3', item1: 4912, item2: 1969},
  //            {y: '2011 Q4', item1: 3767, item2: 3597},
  //            {y: '2012 Q1', item1: 6810, item2: 1914},
  //            {y: '2012 Q2', item1: 5670, item2: 4293},
  //            {y: '2012 Q3', item1: 4820, item2: 3795},
  //            {y: '2012 Q4', item1: 15073, item2: 5967},
  //            {y: '2013 Q1', item1: 10687, item2: 4460},
  //            {y: '2013 Q2', item1: 8432, item2: 5713}
  //          ],
  //          xkey: 'y',
  //          ykeys: ['item1', 'item2'],
  //          labels: ['Item 1', 'Item 2'],
  //          lineColors: ['#a0d0e0', '#3c8dbc'],
  //          hideHover: 'auto'
  //        });

  //        // LINE CHART
  //        var line = new Morris.Line({
  //          element: 'line-chart',
  //          resize: true,
  //          data: [
  //            {y: '2011 Q1', item1: 2666},
  //            {y: '2011 Q2', item1: 2778},
  //            {y: '2011 Q3', item1: 4912},
  //            {y: '2011 Q4', item1: 3767},
  //            {y: '2012 Q1', item1: 6810},
  //            {y: '2012 Q2', item1: 5670},
  //            {y: '2012 Q3', item1: 4820},
  //            {y: '2012 Q4', item1: 15073},
  //            {y: '2013 Q1', item1: 10687},
  //            {y: '2013 Q2', item1: 8432}
  //          ],
  //          xkey: 'y',
  //          ykeys: ['item1'],
  //          labels: ['Item 1'],
  //          lineColors: ['#3c8dbc'],
  //          hideHover: 'auto'
  //        });

  //        //DONUT CHART
  //        var donut = new Morris.Donut({
  //          element: 'sales-chart',
  //          resize: true,
  //          colors: ["#3c8dbc", "#f56954", "#00a65a"],
  //          data: [
  //            {label: "Download Sales", value: 12},
  //            {label: "In-Store Sales", value: 30},
  //            {label: "Mail-Order Sales", value: 20}
  //          ],
  //          hideHover: 'auto'
  //        });
  //        //BAR CHART
  //        var bar = new Morris.Bar({
  //          element: 'bar-chart',
  //          resize: true,
  //          data: [
  //            {y: '2006', a: 100, b: 90},
  //            {y: '2007', a: 75, b: 65},
  //            {y: '2008', a: 50, b: 40},
  //            {y: '2009', a: 75, b: 65},
  //            {y: '2010', a: 50, b: 40},
  //            {y: '2011', a: 75, b: 65},
  //            {y: '2012', a: 100, b: 90}
  //          ],
  //          barColors: ['#00a65a', '#f56954'],
  //          xkey: 'y',
  //          ykeys: ['a', 'b'],
  //          labels: ['CPU', 'DISK'],
  //          hideHover: 'auto'
  //        });
        
        
      
  //   }
      
  //  public ngAfterViewInit() {
      
  //       // let self =this;
  //       // $(window).resize(function() {
  //       //   self.setHeight();
  //       // });
       
  //       // this.setHeight();
      
  //   }
      
  //  setHeight():void {
       
  //     // if((this.boxSection.length == 1 && this.pageData.layout == "box") || this.pageData.layout == "tab"){
  //     // var windowHeight = $(window).innerHeight();
  //     // if($('.pageHeightAuto .box-iframe').offset()){
  //     //     var topHeight = $('.pageHeightAuto .box-iframe').offset().top;
  //     //     this.singleIframeHeight = (windowHeight - topHeight).toString();
  //     //      this.cdRef.detectChanges();
  //     //     $('.pageHeightAuto .box-iframe').css('height', windowHeight-topHeight);
  //     // }
      
  //     // }
  //   }
    

  //   public ngOnDestroy() {
  //   //   $("body").removeClass("pageHeightAuto");
  //   //   $('.pageHeightAuto .box-iframe').css('height', '');
  //   //   this.sub.unsubscribe();
  //   //   this.breadServ.clear();
  //   //   this.route = null;
  //   }
  // }


  import { Component } from '@angular/core';
   
  @Component({
    selector: 'app-chart',
    styleUrls: ['./chart.component.css'],
    templateUrl: './chart.component.html'
  })
  export class ChartComponent {
      options: Object;
      options1: Object;
      public from=0;
      public to=0;
      public arr=[29.9, 71.5, 106.4, 129.2, 100, 30, 40];
      public arr1=[100, 30, 40, 29.9, 71.5, 106.4, 129.2];
      public arr2=[10, 3, 4, 2.9, 7.5, 16.4, 19.2];
      constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: this.arr,
            },
            {
              data: this.arr1,
            },
            {
              data: this.arr2,
            }]
        };
       //  this.options1 = {
       //     title : { text : 'chart selection event example' },
       //     chart: { zoomType: 'x'},
       //     series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }]
       // };
     }
  }