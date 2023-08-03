import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, HeaderComponent, IAmComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, SingleProjectComponent, ContactComponent, FooterComponent, SocialMediaIconsComponent, ImprintComponent, MainPageComponent, PrivacyPolicyComponent, LogoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
