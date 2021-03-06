import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.scss"],
})
export class InputDateComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() name = "Date";
  @Input() placeholder = "Date";
  @Input() min: Date;
  @Input() max: Date;
  constructor() {}

  ngOnInit() {}
}
