import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [ ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }

}
