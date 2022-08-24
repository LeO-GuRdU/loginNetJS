import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  listAll(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://restcountries.com/v3.1/all').pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }
}
