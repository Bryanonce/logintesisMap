import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeligroPage } from './peligro.page';

describe('PeligroPage', () => {
  let component: PeligroPage;
  let fixture: ComponentFixture<PeligroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeligroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeligroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
