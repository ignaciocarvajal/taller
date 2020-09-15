import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMainPageComponent } from './game-main-page.component';

describe('GameMainPageComponent', () => {
  let component: GameMainPageComponent;
  let fixture: ComponentFixture<GameMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
