import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, UserService } from 'ngx-admin-lte';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  styles: ['./login.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private password: string;
  private email: string;

  constructor(
    private userServ: UserService,
    private router: Router,
    private http:Http
  ) {
  }

  public ngOnInit() {
    window.dispatchEvent( new Event( 'resize' ) );
  }

  private login() {

    let data = new URLSearchParams();
      data.append('username', this.email);
      data.append('password', this.password);

      this.http
        .post('http://cashlu.com/app_login/signin', data)
          .subscribe(data => {
                console.log(data.json());
                let userData = data.json();
                let lastNameUser = userData.name.split(" ")[1] ? userData.name.split(" ")[1] : "";
                let user1 = new User( {
                      avatarUrl: 'public/assets/img/user2-160x160.jpg',
                      email: userData.username,
                      firstname: userData.name.split(" ")[0],
                      lastname: lastNameUser
                  });

          user1.connected = true;

          this.userServ.setCurrentUser( user1 );
          localStorage.setItem('ssdUser', JSON.stringify({ username: userData.username, token: userData.token, firstname: userData.name.split(" ")[0] , lastname : lastNameUser }));

          this.router.navigate( ['home'] );

      }, error => {
          swal('Login Failed', 'Invalid Username or Password', 'error')
          console.log(error.json());
      });

  }
 

}
