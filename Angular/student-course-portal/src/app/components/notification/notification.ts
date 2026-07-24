import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

/**
 * Component-Level Dependency Injection:
 * Providing NotificationService inside the @Component providers array creates a separate, isolated service
 * instance scoped strictly to NotificationComponent and its child view hierarchy.
 * Unlike @Injectable({ providedIn: 'root' }) singletons, this instance is not registered in the root injector,
 * ensuring complete state isolation and automatic cleanup when the component is destroyed.
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent implements OnInit {
  instanceInfo: string = '';
  activeMessage: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.instanceInfo = this.notificationService.getInstanceInfo();
    this.activeMessage = this.notificationService.notify('Notification Widget Active');
  }

  sendAlert(): void {
    this.activeMessage = this.notificationService.notify(`Alert triggered at ${new Date().toLocaleTimeString()}`);
  }
}
