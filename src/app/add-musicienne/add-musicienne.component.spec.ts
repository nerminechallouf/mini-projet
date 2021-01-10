import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicienneComponent } from './add-musicienne.component';

describe('AddMusicienneComponent', () => {
  let component: AddMusicienneComponent;
  let fixture: ComponentFixture<AddMusicienneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusicienneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicienneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
