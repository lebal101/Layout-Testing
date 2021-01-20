import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products = {
    name: "Products"
  };

  sets = {
    name: "Sets",
    content: {
      "Set 1": 1,
      "Set 2": 2,
      "Set 3": 3,
      "Set 4": 4
    }
  };

  positions = {
    name: "Positions",
    content: {
      "Pos 1": 1,
      "Pos 2": 2,
      "Pos 3": 3,
      "Pos 4": 4,
      "Pos 5": 5
    }
  };

  tools = [
    {
      name: "Tool1",
      content: "14212-124-54"
    },
    {
      name: "Tool2",
      content: "14212-124-54"
    },
    {
      name: "Tool3",
      content: "14216452-124-54"
    },
    {
      name: "Tool4",
      content: "2356-124-54"
    }
  ];
}
