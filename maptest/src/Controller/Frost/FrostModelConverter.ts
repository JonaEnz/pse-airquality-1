import { FrostResult } from "../../Model/FrostResult";

export abstract class FrostModelConverter<T> {
  abstract convert(json: string): FrostResult<T>;
}
