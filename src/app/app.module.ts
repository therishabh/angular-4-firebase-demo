import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// enviornments imported.. 
import { environment } from './../environments/environment';

// firebase module imported..
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
// import { AngularFireModule } from 'angularfire2'; 
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
