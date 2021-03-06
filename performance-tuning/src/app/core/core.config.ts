import { Injectable } from '@angular/core';

export const APP_NAME = 'angular-material';
export const REFERRER = `/${APP_NAME}/#/home`;

@Injectable({
  providedIn: 'root'
})
export class CoreConfig {
  public appName: string = APP_NAME;
  public referrer: string = REFERRER;
}
