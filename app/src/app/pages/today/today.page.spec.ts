import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { TodayPage } from './today.page';

describe('TodayPage', () => {
  let component: TodayPage;
  let fixture: ComponentFixture<TodayPage>;
  const storeMock = jasmine.createSpyObj('Store', ['select']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayPage ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Store, useValue: storeMock }]
    });

    fixture = TestBed.createComponent(TodayPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
