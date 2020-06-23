export class Position {
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  lat: number;
  lng: number;

  getString(): string {
    return "N " + this.lat + "° O" + this.lng + "°";
  }
}
