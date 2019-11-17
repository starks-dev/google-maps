export class Service {
  elementId: string;

  private googleMaps: google.maps.Map;

  private directionService: google.maps.DirectionsService = new google.maps.DirectionsService();

  constructor(elementId: string) {
    this.elementId = elementId;

    this.googleMaps = new google.maps.Map(document.getElementById(elementId), {
      zoom: 6,
      center: { lat: 41.532134, lng: 2.086543 }
    });

    // this.directionService.route(
    //   {
    //     origin: { lat: 41.532134, lng: 2.086543 },
    //     destination: { lat: 52.3499, lng: 4.923129 },
    //     travelMode: google.maps.TravelMode.DRIVING
    //   },
    //   status => {
    //     console.log(status);
    //   }
    // );

    this.googleMaps.addListener('click', args => {
      console.log('Latitude: ' + args.latLng.lat());
      console.log('Longitude: ' + args.latLng.lng());
    });
  }
}
