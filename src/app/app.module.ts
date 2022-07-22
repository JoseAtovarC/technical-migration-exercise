import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';

const downgradedAngularComponents: any[] = [CardComponent];

@NgModule({
  declarations: [
    ...downgradedAngularComponents,

  ],
  imports: [UpgradeModule, BrowserModule, NgbModule, HttpClientModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  static entryComponents = [...downgradedAngularComponents];

  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app-root'], { strictDi: true });
  }
}
