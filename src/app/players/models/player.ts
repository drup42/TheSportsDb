export class Player {

  fullName: string;
  position: string;
  birthday: string;
  signingAmount: string;
  pictureUrl: string;
  thumbnailUrl: string;

  constructor(fullName: string, position: string, birthday: string, signingAmount: string, picture: string, thumbnailUrl: string) {
    this.fullName = fullName;
    this.position = position;
    this.birthday = birthday;
    this.signingAmount = signingAmount;
    this.pictureUrl = picture;
    this.thumbnailUrl = thumbnailUrl;
  }
}
