import { SeeRequestComponent } from "./dashboard/see-request/see-request.component";
import { RequestBloodComponent } from "./dashboard/request-blood/request-blood.component";
import { DonersComponent } from "./dashboard/doners/doners.component";
import { FeedbackComponent } from "./dashboard/feedback/feedback.component";
import { MyProfileComponent } from "./dashboard/my-profile/my-profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EligibilityComponent } from "./home/eligibility/eligibility.component";
import { AuthguardService } from "./common/services/authguard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home/home-page.component";
import { AboutUsComponent } from "./home/about-us/about-us.component";
import { BloodbankPhoneComponent } from "./home/bloodbank-phone/bloodbank-phone.component";
import { LoginComponent } from "./login/login.component";
import { LandingComponent } from "./home/landing/landing.component";
import { AuthGuard } from "./auth.guard";
import { UpcomingEventsComponent } from "./home/upcoming-events/upcoming-events.component";
import { GalleryComponent } from "./home/gallery/gallery.component";
// import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "my-profile",
        component: MyProfileComponent,
      },
      {
        path: "feedback",
        component: FeedbackComponent,
      },
      {
        path: "doners",
        component: DonersComponent,
      },
      {
        path: "requests",
        component: SeeRequestComponent,
      },
    ],
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: LandingComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "phone-number",
    component: BloodbankPhoneComponent,
  },
  {
    path: "upcoming-events",
    component: UpcomingEventsComponent,
  },
  {
    path: "gallery",
    component: GalleryComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full",
    // component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
