import { Position } from "../Model/Position";
export class MapPin {
  position: Position;
  value: number;
  stationId: string;

  constructor(position: Position, stationId: string) {
    this.position = position;
    this.stationId = stationId;
    this.value = 0;
  }
  getPosition(): Position {
    return this.position;
  }
  setPosition(position: Position): void {
    this.position = position;
  }

  getValue(): number {
    return this.value;
  }
  setValue(value: number): void {
    this.value = value;
  }

  getStationId(): string {
    return this.stationId;
  }
  setStationId(id: string): void {
    this.stationId = id;
  }

  getColor(): string {
    return "";
  }
  setColor(color: string): void {}
}
