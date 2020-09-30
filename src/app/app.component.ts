import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StyleSearchService } from './services/style-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'bravissimo-web-api-test';
  searchStyle = '';
  styles: any = [];
  loading = false;
  firstSearch = true;
  styleSearchSubscription: Subscription;

  constructor(private styleSearchService: StyleSearchService) { }

  onSearch() {
    this.loading = true;

    this.styleSearchSubscription = this.styleSearchService.getStylesForSearch(this.searchStyle).subscribe(data => {
      this.firstSearch = false;
      this.styles = data;
      this.searchStyle = '';
      this.loading = false;
    }, err => {
      console.log(err);
      this.firstSearch = false;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.styleSearchSubscription.unsubscribe();
  }

}
