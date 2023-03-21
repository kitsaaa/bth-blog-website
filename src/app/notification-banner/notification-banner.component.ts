import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(500),
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class NotificationBannerComponent {
  isVisible = false;

  toggleNotification() {
    this.isVisible = !this.isVisible;
  }
}