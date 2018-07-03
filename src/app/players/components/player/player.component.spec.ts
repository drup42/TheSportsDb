import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerComponent} from './player.component';
import {Player} from '../../models/player';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

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

  const triggerImgBreak = (img: DebugElement) => {
    img.triggerEventHandler('error', null);
    fixture.detectChanges();
  };

  const getImgElement = (): DebugElement  => {
    return debugElement.queryAll(By.css('img'))[0];
  }

  it('should display data correctly with Picture (Nominal case)', () => {

    /*Given*/
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
    const img = getImgElement();
    expect(img.properties.src).toBe(expectedPictureUrl);
    expect(component.shouldDisplayPicture()).toBe(true);
    expect(component.shouldDisplayThumbnail()).toBe(false);
    expect(component.shouldDisplayDefaultForMissingPicture()).toBe(false);
  });

  it('should fallback on thumbnail When picture is broken', () => {

    /*Given*/
    const expectedThumbnailUrl = 'thumbnailUrl';
    const player: Player = new Player(
      'name',
      'position',
      'birthday',
      'signingAmount',
      'pictureUrl',
      expectedThumbnailUrl);
    component.player = player;
    fixture.detectChanges();

    /*When*/
    let img = getImgElement();
    triggerImgBreak(img);

    /*Then*/
    img = getImgElement();
    expect(img.properties.src).toBe(expectedThumbnailUrl);
    expect(component.shouldDisplayPicture()).toBe(false);
    expect(component.shouldDisplayThumbnail()).toBe(true);
    expect(component.shouldDisplayDefaultForMissingPicture()).toBe(false);
  });

  it('should fallback on default image When thumbnail and picture are broken', () => {

    /*Given*/
    const expectedImgSrcPath = 'assets/images/missing_profile.png';
    const player: Player = new Player(
      'name',
      'position',
      'birthday',
      'signingAmount',
      'pictureUrl',
      'thumbnailUrl');
    component.player = player;
    fixture.detectChanges();

    /*When*/
    let img = getImgElement();
    triggerImgBreak(img);
    img = getImgElement();
    triggerImgBreak(img);

    /*Then*/
    img = getImgElement();
    expect(img.attributes.src).toBe(expectedImgSrcPath);
    expect(component.shouldDisplayPicture()).toBe(false);
    expect(component.shouldDisplayThumbnail()).toBe(false);
    expect(component.shouldDisplayDefaultForMissingPicture()).toBe(true);
  });
});
