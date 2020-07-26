import { RouterModule } from "@angular/router";

import { environment } from "./../environments/environment.prod";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page.component";
import { AboutUsComponent } from "./home/about-us/about-us.component";
import { BloodbankPhoneComponent } from "./home/bloodbank-phone/bloodbank-phone.component";
import { MenuItemComponent } from "./home/menu-item/menu-item.component";
import { NgImageSliderModule } from "ng-image-slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { EligibilityComponent } from "./home/eligibility/eligibility.component";
import { FirebaseUIModule, firebase, firebaseui } from "firebaseui-angular";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AngularFirestore } from "@angular/fire/firestore";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./dashboard/my-profile/my-profile.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatExpansionModule } from "@angular/material/expansion";

import { MatNativeDateModule, MatButtonModule } from "@angular/material";
import { DonersComponent } from "./dashboard/doners/doners.component";
import { RequestBloodComponent } from "./dashboard/request-blood/request-blood.component";
import { SeeRequestComponent } from "./dashboard/see-request/see-request.component";
import { FeedbackComponent } from "./dashboard/feedback/feedback.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
// import { StarRatingModule } from "angular-star-rating";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod:
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
      requireDisplayName: true,
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInFlow: "popup",
};

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    BloodbankPhoneComponent,
    AboutUsComponent,
    HomePageComponent,
    EligibilityComponent,
    LoginComponent,
    DashboardComponent,
    MyProfileComponent,
    DonersComponent,
    RequestBloodComponent,
    SeeRequestComponent,
    FeedbackComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    // StarRatingModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    NgImageSliderModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    AngularFirestore,
  ],
  exports: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
