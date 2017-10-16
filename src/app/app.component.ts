import { Component, OnInit } from '@angular/core';
import { User, MenuService, Message, MessagesService } from 'ngx-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Hot Info',
      'icon': 'bullhorn',
      'link': ['/page/home']
    },
    {
      'title': 'Category Wise Offers',
      'icon': 'shopping-cart',
      'sublinks': [
      {
		  'title': 'Fashion',
		  'link': ['/page/fashion-offers'],
	  },
	  {
		  'title': 'Travel',
		  'link': ['/page/travel-offers'],
	  },
      {
		  'title': 'Recharge & Bill',
		  'link': ['/page/recharge-bill-offers'],
	  },
      {
		  'title': 'Health & Beauty',
		  'link': ['/page/health-beauty-offers'],
	  },
      {
		  'title': 'Electronics',
		  'link': ['/page/electronics-offers'],
	  },
     //////////////////*****************Edited By Rahul************////////////
      {
        'title':'Computer & Laptop',
        'link': ['/page/laptop-desktop'],
    }
    /////////////////*****************Ended By Rahul*************/////////////
	 ]
    },
    {
      'title': 'Payment Gateway Offers',
      'icon': 'credit-card',
      'link': ['/page/payment-gateway-offers'],
    },
    {
      'title': 'Online Stores Info',
      'icon': 'shopping-cart',
      'sublinks': [
      {
		  'title': 'Fashion',
		  'link': ['/page/fashion-stores'],
	  },
      {
		  'title': 'Electronics',
		  'link': ['/page/electronics-stores'],
	  },

      {
		  'title': 'Home & Kitchen',
		  'link': ['/page/home-kitchen-stores'],
	  },
	  {
		  'title': 'Travel',
		  'link': ['/page/travel-stores'],
	  },
      {
		  'title': 'Recharge & Bill',
		  'link': ['/page/recharge-bill-stores'],
	  },
      {
		  'title': 'Health & Beauty',
		  'link': ['/page/health-beauty-stores'],
	  },
	  {
		  'title': 'All Stores (A to Z)',
		  'link': ['/page/all-stores'],
	  }
	 ]
    },
    {
      'title': 'Shopping Guidance',
      'icon': 'graduation-cap',
      'sublinks': [
        {
          'title': 'World Of Online Shopping',
          'link': ['/page/worldof-online-shopping'],
        },
        {
          'title': 'Deals and Offers',
          'link': ['/page/deals-offers-guide'],
        },
        {
          'title': 'About SSD',
          'link': ['/page/about-ssd'],
        },
        {
          'title': 'Fashion & Accessories Shopping ',
          'link': ['/page/ne-shopping'],
        },
        {
          'title': 'Fashion & Accessories Shopping(tab)',
          'link': ['/page/ne1-shopping'],
        },
        {
          'title': 'Appliances',
          'link': ['/page/ne2-shopping'],
        },
        {
          'title': 'Electronics',
          'link': ['/page/ne3-shopping'],
        },
        {
          'title': 'Health',
          'link': ['/page/ne4-shopping'],
        },
        {
          'title': 'Cosmetics',
          'link': ['/page/ne5-shopping'],
        },
        {
          'title': 'Travel',
          'link': ['/page/ne6-shopping'],
        },
        {
          'title': 'Furniture ',
          'link': ['/page/ne7-shopping'],
        }
      ]
    },
    {
      'title': 'Business Guidance',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Introduction',
          'link': ['/page/introduction'],
        },
        {
          'title': 'Step by Step Guide',
          'link': ['/page/step-by-step-guide'],
        },
        {
          'title': 'How to Start',
          'link': ['/page/how-to-start'],
        },
        {
          'title': 'Set Up Business',
          'link': ['/page/set-up-business'],
        },
        {
          'title': 'How SSD Works',
          'link': ['/page/how-ssd-works'],
        },
        {
          'title': 'How CashLu Works',
          'link': ['/page/how-cashlu-works'],
        },
        {
          'title': 'Marketing Guidance',
          'link': ['/page/marketing-guidance'],
        }
      ]
    },
	{
      'title': 'My Plans',
      'icon': 'users',
      'sublinks': [
        {
          'title': 'SSD Plans',
          'link': ['/page/ssd-plans'],
        },
	    {
          'title': 'Master Adviser Plan',
          'link': ['/page/master-adviser-plan'],
        }
	  ]
	},
    {
      'title': 'Start Shopping',
      'icon': 'money',
      'link': ['http://cashlu.com'],
      'external': true,
      'target': '_blank'
    },
    {
      'title': 'Chart',
      'icon': 'money',
      'link': ['/chart']
      // 'external': true,
      // 'target': '_blank'
    },
    {
      'title': 'dashboard',
      'icon': 'money',
      'link': ['/dashboard']
      // 'external': true,
      // 'target': '_blank'
    }
    /*,
    {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        },
        {
          'title': 'Yahoo',
          'link': ['http://yahoo.com'],
          'icon': 'yahoo',
          'external': true,
          'target': '_blank'
        }
      ]
    }*/
  ];

  constructor(
    private menuServ: MenuService,
    private msgServ: MessagesService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrentMenu(this.mylinks);

    // FAKE MESSAGE 
    // defining some test users
    /*const user1 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'WEBER',
        lastname: 'Antoine'
    });
    const user2 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'le contenu d\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );*/
  }

}
