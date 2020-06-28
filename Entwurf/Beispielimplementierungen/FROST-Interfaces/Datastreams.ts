interface Datastream {
  name: string;
  description: string;
  properties: Properties;
  observationType: string;
  observedArea?: ObservedArea;
  phenomenonTime?: string;
  resultTime?: string;
  "Sensor@iot.navigationLink": string;
  "Thing@iot.navigationLink": string;
  "Observations@iot.navigationLink": string;
  unitOfMeasurement: UnitOfMeasurement;
  "ObservedProperty@iot.navigationLink": string;
  "@iot.id": string;
  "@iot.selfLink": string;
}

interface UnitOfMeasurement {
  name: string;
  symbol: string;
  definition: string;
}

interface ObservedArea {
  type: string;
  coordinates: number[];
}

interface Properties {
  "operator.domain": string;
  "hardware.serial_number": string;
  license: License;
}

interface License {
  name: string;
  legal_notice: string;
  url: string;
}
