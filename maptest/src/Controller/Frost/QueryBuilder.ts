export abstract class QueryBuilder {
  abstract getQuery(obj: any): string;
}
