import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private instanceId: string = Math.random().toString(36).substring(2, 9);
  private createdAt: Date = new Date();

  getInstanceInfo(): string {
    return `NotificationService Instance #${this.instanceId} (Created at ${this.createdAt.toLocaleTimeString()})`;
  }

  notify(message: string): string {
    return `[Scope #${this.instanceId}] ${message}`;
  }
}
