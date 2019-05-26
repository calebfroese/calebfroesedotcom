import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as googleAnalytics from 'google-analytics-js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

googleAnalytics(environment.analytics.code, environment.analytics.domain);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
