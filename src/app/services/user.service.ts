import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://dummyjson.com/auth/login';
  httpClient = inject(HttpClient);

  login(data: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, data))
  }
}

