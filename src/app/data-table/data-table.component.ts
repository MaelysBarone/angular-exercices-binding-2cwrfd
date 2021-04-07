import { Component, OnInit, Input } from "@angular/core";
import { users } from "../../users-data";
import { DataService } from "../data.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  @Input() data = [];
  constructor() {}

  ngOnInit() {
  }
}
