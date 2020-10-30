import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RootPage } from './root.page';

describe('RootPage', () => {
  let component: RootPage;
  let fixture: ComponentFixture<RootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootPage ],
    });

    fixture = TestBed.createComponent(RootPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
