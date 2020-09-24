import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { TimelineComponent } from './timeline/timeline.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { CategoryComponent } from './category/category.component';
import { InviteFriendsComponent } from './invite-friends/invite-friends.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    WelcomeMsgComponent,
    LoginComponent,
    TimelineComponent,
    UploadPostComponent,
    CategoryComponent,
    InviteFriendsComponent,
    FeaturedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
