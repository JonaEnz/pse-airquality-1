import { FrostModelConverter } from "./FrostModelConverter";
import { QueryBuilder } from "./QueryBuilder";

export abstract class FrostFactory {
  abstract GetConverter(): FrostModelConverter<any>;
  abstract GetBuilder(): QueryBuilder;
}
