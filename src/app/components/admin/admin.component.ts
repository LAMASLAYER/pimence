import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login';
import {GlobalService} from '../../services/global.service';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public selected: boolean;
  public selected2: boolean;
  public newLogin: Login;
  public adminService: AdminService;
  private globalService: GlobalService;
  public emptyUser: boolean;
  public emptyPassword: boolean;

  constructor(adminService:AdminService, globalService: GlobalService) {
    this.adminService = adminService;
    this.globalService = globalService;
  }

  ngOnInit() {
    this.newLogin = new Login();
    this.newLogin.username = '';
    this.newLogin.password = '';
  }

  public setEmptyUser(value:boolean) {
    this.emptyUser = value;
  }

  public getEmptyUser(): boolean {
    return this.emptyUser;
  }

  public setEmptyPassword(value: boolean) {
    this.emptyPassword = value;
  }

  public getEmptyPassword(): boolean {
    return this.emptyPassword;
  }

  public log():void {
    this.setEmptyUser(false);
    this.setEmptyPassword(false);
    if(this.newLogin.username === '' && this.newLogin.password !== '') {
      this.setEmptyUser(true);
    } else if(this.newLogin.password === '' && this.newLogin.username !== ''){
      this.setEmptyPassword(true);
    } else if(this.newLogin.username === '' && this.newLogin.password === '') {
      this.setEmptyPassword(true);
      this.setEmptyUser(true);
    }else {
      this.adminService.login(this.newLogin).subscribe(
        res => {
        }
      );
    }
  }



}
