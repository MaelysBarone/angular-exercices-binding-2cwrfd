import { Component, OnInit, VERSION } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  data = [];
  yourName;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getUsersData();
  }
}
