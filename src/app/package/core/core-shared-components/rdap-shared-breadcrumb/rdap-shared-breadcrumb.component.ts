import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rdap-shared-breadcrumb',
  templateUrl: './rdap-shared-breadcrumb.component.html',
  styleUrls: ['./rdap-shared-breadcrumb.component.scss']
})
export class RdapSharedBreadcrumbComponent implements OnInit {

  breadcrumbList: any[];
  breadcrumbLinksList: any[];
  breadcrumbarr: any[];
  breadcrumbdetails: any[];
  route: string;
  routeName: string;
  constructor(private httpClient: HttpClient, location: Location, router: Router) {
    this.breadcrumbdetails = [];
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.routeName = this.route.split('/')[this.route.split('/').length - 1];
      } else {
        this.route = 'Home'
      }
    });
    this.httpClient.get("assets/config/breadcrumb-details.json").subscribe(data => {
      //console.log(data)
      this.breadcrumbdetails.push(data);
      this.breadcrumb();
    });
  }

  ngOnInit(): void {

    // console.log(this.breadcrumbarr);
    // console.log(this.breadcrumbLinksList);
  }

  breadcrumb() {
    this.breadcrumbList = [];
    this.breadcrumbLinksList = [];
    this.breadcrumbarr = [];
    this.breadcrumbarr.push({ label: "Home", url: "/main/launcher" });
    this.breadcrumbList = this.route.split('/');
    this.breadcrumbLinksList = [this.breadcrumbList[0]];
    let tempBreadcrumbDetail = [];
    for (let i = 1; i <= this.breadcrumbList.length; i++) {
      const link = this.breadcrumbLinksList[i - 1] + '/' + this.breadcrumbList[i]
      this.breadcrumbLinksList.push(link);
      //this.breadcrumbList[i]
      if ((i > 1) && (i < this.breadcrumbList.length)) {
        if (this.breadcrumbList[i] == "launcher") {
          this.breadcrumbarr.push({ label: "Dashboard", url: "/main/launcher" });
        } else {
          tempBreadcrumbDetail = this.breadcrumbdetails[0].filter(x => {
            if (x.page == this.breadcrumbList[i]) {
              if (x.details.length > 1) {
                this.breadcrumbarr.push(x.details.filter(x => { return x.url == this.route })[0]);
              } else {
                this.breadcrumbarr.push(x.details[0]);
              }
            }
          });
        }

      }
    }
  }

}
