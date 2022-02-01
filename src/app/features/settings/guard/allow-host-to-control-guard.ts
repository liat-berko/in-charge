import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AllowHostToControlGuard implements CanActivate {
  constructor() {}

  canActivate() {
    return true;
  }
}
