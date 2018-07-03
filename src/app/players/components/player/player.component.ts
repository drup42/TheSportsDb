import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player';

@Component({
  selector: 'fdj-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  hasValidPicture = true;
  hasValidThumbnail = true;

  constructor() { }

  ngOnInit() {
  }

  shouldDisplayThumbnail(): boolean {
    return this.hasValidThumbnail && !this.hasValidPicture;
  }

  shouldDisplayPicture(): boolean {
    return this.hasValidPicture;
  }

  disableThumbnail() {
    this.hasValidThumbnail = false;
  }

  disablePicture() {
    this.hasValidPicture = false;
  }

}
