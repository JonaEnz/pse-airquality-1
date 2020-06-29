import { FrostFactory } from "./FrostFactory";
import { FrostResult } from "../../Model/FrostResult";

export class FrostServer {
  url: string = "";

  getUrl(): string {
    return this.url;
  }
  setUrl(url: string) {
    this.url = url;
  }

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
