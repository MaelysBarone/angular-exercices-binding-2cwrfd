import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DataService } from "../data.service"

@Component({
  selector: "app-filter-selector",
  templateUrl: "./filter-selector.component.html",
  styleUrls: ["./filter-selector.component.css"],
  
})
export class FilterSelectorComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {}
}
