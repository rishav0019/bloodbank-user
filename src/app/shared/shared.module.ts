import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
// import { LoginComponent } from "../login/login.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

const MaterialComponents = [MatInputModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialComponents,
    MatDialogModule,
  ],
  exports: [MaterialComponents],
})
export class SharedModule {}
