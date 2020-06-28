interface Thing {
  name: string;
  description: string;
  properties: Properties;
  "Datastreams@iot.navigationLink": string;
  "MultiDatastreams@iot.navigationLink": string;
  "Locations@iot.navigationLink": string;
  "HistoricalLocations@iot.navigationLink": string;
  "@iot.id": string;
  "@iot.selfLink": string;
}

interface Properties {
  "hardware.id": string;
  shortname: string;
  "operator.domain": string;
}
