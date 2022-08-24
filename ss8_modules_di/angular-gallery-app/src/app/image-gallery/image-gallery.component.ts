import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://i.pinimg.com/564x/50/5b/52/505b5207c97d90a36e64aad2d5ebfc10.jpg',
    'https://i.pinimg.com/564x/c1/36/9c/c1369cea824585999a761e31040c6bd2.jpg',
    'https://i.pinimg.com/564x/50/5b/52/505b5207c97d90a36e64aad2d5ebfc10.jpg',
    'https://i.pinimg.com/564x/da/b8/aa/dab8aab671ebc7c699b9d6919143d8bb.jpg'
  ];
  itemWidth: number;
  config = 1;
  p = 1;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }
}
