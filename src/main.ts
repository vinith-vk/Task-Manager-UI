import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,        // <== include this if you're using appConfig
    provideHttpClient(withFetch()) // <== this enables HttpClient globally
  ]
}).catch(err => console.error(err));