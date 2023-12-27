import Component from '@glimmer/component';
//import ENV from 'rental-project/config/environment';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component {
  @tracked mapImageUrl;
  @tracked cityName;

  constructor() {
    super(...arguments);
    const bingMapsKey =
      'Aq-0_8qrxXocfFMeYVXEX5G-3C0b7Jv4zczZLXw4MIkC6OrIEs8NWfaN6ZF-lLV2';
    const { cityName, mapType = 'Aerial' } = this.args;
    this.cityName = cityName;
    console.log(cityName);
    this.fetchCoordinates(this.cityName, bingMapsKey).then(
      ({ latitude, longitude }) => {
        console.log(latitude, longitude);
        const mapArea = `${latitude - 1},${longitude - 1},${latitude + 1},${
          longitude + 1
        }`;
        this.mapImageUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/${mapType}?mapArea=${mapArea}&mapSize=500,300&key=${bingMapsKey}`;
      },
    );
  }
  async fetchCoordinates(cityName, apiKey) {
    const response = await fetch(
      `https://dev.virtualearth.net/REST/v1/Locations/${encodeURIComponent(
        cityName,
      )}?key=${apiKey}`,
    );
    const data = await response.json();
    const coordinates = data.resourceSets[0]?.resources[0]?.point
      .coordinates || [0, 0];
    const [latitude, longitude] = coordinates;
    return { latitude, longitude };
  }
}
