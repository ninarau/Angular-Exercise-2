import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {};
  private apinVastaus: any = [];

  constructor(private http: Http) { }

  private getJson () {
    this.http.get('tsconfig.json')
      .subscribe(
        (res:Response) => {
          const json = res.json();
          this.vastaus = json.compilerOptions;
          console.log(this.vastaus);
        }
      );
  }

  private getApi () {
    this.http.get('http://jklgeeks.herokuapp.com/api/v1/geeks')
      .subscribe(
        (res:Response) => {
          this.apinVastaus = res.json();
          console.log(this.apinVastaus);
        }
      );
  }

  ngOnInit() {
    this.getJson();
    this.getApi();
  }

}
