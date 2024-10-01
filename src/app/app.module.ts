import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeroComponent,
    AboutComponent,
    SkillComponent,
    ExperienceComponent,
    ContactComponent,
    MobileHeaderComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
