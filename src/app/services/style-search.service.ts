import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StyleSearchService {

  constructor(private http: HttpClient) { }

  getStylesForSearch(searchString: string) {
    return this.http.get(`https://sandbox368.bravissimo.site/api/search/${searchString}`).pipe(map(data => {
      // sort by price style.colours[0].pricing.price
      // split off top ten
      return data['items'].sort((a, b) => {
        if (!a.colours[0].pricing.price || !b.colours[0].pricing.price) {
          return;
        }
        if (a.colours[0].pricing.price < b.colours[0].pricing.price) {
          return -1;
        }
        if (a.colours[0].pricing.price > b.colours[0].pricing.price) {
          return 1;
        }
        return 0;
      }).splice(0, 10)

    }));
  }
}
