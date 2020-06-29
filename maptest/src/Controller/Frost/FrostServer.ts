import { FrostFactory } from "./FrostFactory";
import { FrostResult } from "../../Model/FrostResult";

export class FrostServer {
  getUrl(): string {
    return "";
  }
  setUrl(url: string) {}

  send(url: string) {
    return "{}";
  }

  request(ff: FrostFactory, options: any): FrostResult<any> {
    var query = ff.GetBuilder().getQuery(options);
    var json = this.send(query);
    var obs = ff.GetConverter().convert(json);
    return obs;
  }
}
