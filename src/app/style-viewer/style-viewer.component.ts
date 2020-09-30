import { Component, Input, OnInit } from '@angular/core';
import { StyleSearchService } from '../services/style-search.service';

@Component({
  selector: 'app-style-viewer',
  templateUrl: './style-viewer.component.html',
  styleUrls: ['./style-viewer.component.css']
})
export class StyleViewerComponent implements OnInit {

  @Input() styles;
  @Input() firstSearch;

  constructor(private styleSearchService: StyleSearchService) { }

  ngOnInit() {
    console.log(this.styles);

  }

}
