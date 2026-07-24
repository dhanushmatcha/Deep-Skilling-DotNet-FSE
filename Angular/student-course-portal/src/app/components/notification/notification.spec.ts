import { TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification';

describe('NotificationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationComponent]
    }).compileComponents();
  });

  it('should create NotificationComponent', () => {
    const fixture = TestBed.createComponent(NotificationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
