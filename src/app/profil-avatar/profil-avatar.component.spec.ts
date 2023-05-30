import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAvatarComponent } from './profil-avatar.component';

describe('ProfilAvatarComponent', () => {
  let component: ProfilAvatarComponent;
  let fixture: ComponentFixture<ProfilAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
