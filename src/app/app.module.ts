import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { CardComponent } from './card/card.component';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BroadcastService } from './broadcast.service';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [BroadcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
