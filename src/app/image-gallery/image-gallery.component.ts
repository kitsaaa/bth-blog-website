import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    { thumbnail: '/../../assets/cat_for_animation1.jpg', full: '/../../assets/cat_for_animation1.jpg' },
    { thumbnail: '/../../assets/cat_for_animation2.jpg', full: '/../../assets/cat_for_animation2.jpg' },
    { thumbnail: '/../../assets/cat_for_animation3.jpg', full: '/../../assets/cat_for_animation3.jpg' }
  ];
  selectedImage: string | null = null;

  showFullImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeFullImage() {
    this.selectedImage = null;
  }
}