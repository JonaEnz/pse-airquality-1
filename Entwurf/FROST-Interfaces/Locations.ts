interface Location {
  name: string;
  description: string;
  encodingType: string;
  location: Position;
  "HistoricalLocations@iot.navigationLink": string;
  "Things@iot.navigationLink": string;
  "@iot.id": string;
  "@iot.selfLink": string;
}

interface Position {
  type: string;
  coordinates: number[];
}
