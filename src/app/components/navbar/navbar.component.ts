import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public goYoutube() {
    window.open('https://www.youtube.com/channel/UC99duNPf5BxFKBe8vvx1F2Q', '_self');
  }
}
