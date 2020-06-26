import { Scale } from "./Scale";

export class Feature {
  id: string;
  name: string;
  desc: string;
  scale: Scale;
  link: string;
  limit: number;

  constructor(name: string) {
    var test = require("../Jsons/" + name + ".json");
    if (test == null) {
      throw new TypeError();
    }
    var t = test as FeatureDefinition;
    this.id = t.id;
    this.name = t.nameId;
    this.desc = t.descriptionId;
    this.scale = new Scale(t.defaultScale);
    this.link = "";
    this.limit = t.limit;
  }

  getID(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return this.desc;
  }
  getRelatedScale(): Scale {
    return this.scale;
  }
  getRelatedWeblink(): string {
    return this.link;
  }
  getLimit(): number {
    return this.limit;
  }
}

interface FeatureDefinition {
  id: string;
  nameId: string;
  unitOfMeasurement: string;
  descriptionId: string;
  defaultScale: { n: number; s: string }[];
  limit: number;
}
