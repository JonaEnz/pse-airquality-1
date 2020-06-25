import { Position } from "./Position";

export class Station {
  constructor(pos: Position) {
    this.position = pos;
    this.id = pos.lat + " " + pos.lng;
  }

  position: Position;
  id: string;
}
