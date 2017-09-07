import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  imports: [
    BrowserModule
  ],
})
export class NgHqAppShellModule {
  ngDoBootstrap(applicationRef:ApplicationRef){
    console.log('app-shell', 'bootstrapping...');
  }
}
