import {Injectable} from '@angular/core';

@Injectable()

export class UtilsService {

  convertIsoStringToDate(iso: string) {
    return new Date(Date.parse(iso)).toLocaleDateString("en-US")
  }
}

