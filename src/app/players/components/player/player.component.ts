import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player';

@Component({
  selector: 'fdj-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  hasValidThumbnail = true;
  hasValidPicture = true;

  constructor() { }

  ngOnInit() {
  }

  shouldDisplayThumbnail(): boolean {
    return this.hasValidThumbnail;
  }

  shouldDisplayPicture(): boolean {
    return this.hasValidPicture && !this.hasValidThumbnail;
  }

  disableThumbnail() {
      this.hasValidThumbnail = false;
  }

  disablePicture() {
    this.hasValidPicture = false;
  }

}
