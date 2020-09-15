import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameMainPageModule } from './views/pages/game-main-page/game-main-page.module';
import { GamesCreatePageModule } from './views/pages/games-create-page/games-create-page.module';
import { GamesDetailPageModule } from './views/pages/games-detail-page/games-detail-page.module';
import { GamesUpdatePageModule } from './views/pages/games-update-page/games-update-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './views/ui-components/header/header.module';
import { FooterModule } from './views/ui-components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameMainPageModule,
    GamesCreatePageModule,
    GamesUpdatePageModule,
    GamesDetailPageModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
