interface RootObject {
  name: string;
  description: string;
  properties: Properties;
  'Datastreams@iot.navigationLink': string;
  'MultiDatastreams@iot.navigationLink': string;
  definition: string;
  '@iot.id': string;
  '@iot.selfLink': string;
}

interface Properties {
  conventions: Conventions;
  shortname: string;
  'shortname.definition': string;
}

interface Conventions {
  unitOfMeasurement: UnitOfMeasurement;
  fixedPoints: FixedPoints;
}

interface FixedPoints {
  '0': string;
  '5': string;
  '10': string;
  '15': string;
  '20': string;
  '25': string;
  '30': string;
  '40': string;
  '50': string;
  '100': string;
  '2147483647': string;
}

interface UnitOfMeasurement {
  name: string;
  symbol: string;
  definition: string;
}