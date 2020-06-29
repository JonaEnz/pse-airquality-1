import { FrostFactory } from "./Frost/FrostFactory";
import { FrostModelConverter } from "./Frost/FrostModelConverter";
import { QueryBuilder } from "./Frost/QueryBuilder";
import { Station } from "../Model/Station";
import { Position } from "../Model/Position";
import { FrostResult } from "../Model/FrostResult";

export class GetObservationStationFactory extends FrostFactory {
  GetConverter(): FrostModelConverter<Station[]> {
    return new GetObservationStationConverter();
  }
  GetBuilder(): QueryBuilder {
    return new GetObservationStationBuilder();
  }
}

class GetObservationStationBuilder extends QueryBuilder {
  getQuery(obj: GetObservationStationOptions): string {
    return obj.middle.getString();
  }
}

class GetObservationStationConverter extends FrostModelConverter<Station[]> {
  convert(json: string): FrostResult<Station[]> {
    var st = [new Station(new Position(0, 0))];
    return new FrostResult<Station[]>(st, true);
  }
}

export interface GetObservationStationOptions {
  middle: Position;
  radius: number;
}
