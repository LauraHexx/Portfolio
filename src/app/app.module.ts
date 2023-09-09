import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IAmComponent } from './i-am/i-am.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LogoComponent } from './logo/logo.component';
import { FormComponent } from './form/form.component';
import { HeaderMenuMobileComponent } from './header-menu-mobile/header-menu-mobile.component';
import { HeaderMenuDestopComponent } from './header-menu-destop/header-menu-destop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IAmComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    SingleProjectComponent,
    ContactComponent,
    FooterComponent,
    SocialMediaIconsComponent,
    ImprintComponent,
    MainPageComponent,
    PrivacyPolicyComponent,
    LogoComponent,
    FormComponent,
    HeaderMenuMobileComponent,
    HeaderMenuDestopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
