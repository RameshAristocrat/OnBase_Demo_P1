// import {
//   NativeDateAdapter,
//   DateAdapter,
//   MAT_DATE_FORMATS,
// } from "@angular/material";
import { MatNativeDateModule, NativeDateAdapter } from "@angular/material/core";

import{MaterialModule} from "../../../mat-modules/material.module"
export const PICK_FORMATS = {
  parse: { dateInput: { month: "short", year: "numeric", day: "numeric" } },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "short" },
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" },
  },
};

export class PickDateFormat extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === "input") {
      let day: string = date.getDate().toString();
      day = +day < 10 ? "0" + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? "0" + month : month;
      let year = date.getFullYear();
      return `${month}/${day}/${year}`;
    } else {
      return date.toDateString();
    }
  }
}
