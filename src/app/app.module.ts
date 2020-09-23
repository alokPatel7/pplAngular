import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { RegisterComponent } from './register/register.component';
// import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
// import { LoginComponent } from './login/login.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    //   AppComponent,
    //   HeaderComponent,
    //   FooterComponent,
    //   RegisterComponent,
    //   WelcomeMsgComponent,
    //   LoginComponent,
  ],
  imports: [
    BrowserModule,
    //  AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
