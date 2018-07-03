import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerComponent} from './player.component';
import {Player} from '../../models/player';
import {DebugElement} from '@angular/core';

fdescribe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should display data correctly with default missing profile image', () => {

    /*Given*/
    spyOn(component, 'disablePicture');
    const expectedName = 'fullName';
    const expectedPosition = 'position';
    const expectedBirthday = 'birthday';
    const expectedSigningAmount = 'signingAmount';
    const expectedPictureUrl = 'pictureUrl';
    const expectedThumbnailUrl = 'thumbnailUrl';
    const player: Player = new Player(
      expectedName,
      expectedPosition,
      expectedBirthday,
      expectedSigningAmount,
      expectedPictureUrl,
      expectedThumbnailUrl);
    component.player = player;

    /*When*/
    fixture.detectChanges();

    /*Then*/
    expect(component.player.fullName).toBe(expectedName);
    expect(component.player.position).toBe(expectedPosition);
    expect(component.player.birthday).toBe(expectedBirthday);
    expect(component.player.signingAmount).toBe(expectedSigningAmount);
  });
});
