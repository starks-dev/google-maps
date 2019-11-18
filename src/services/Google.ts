class Google {
  private directionService: google.maps.DirectionsService = new google.maps.DirectionsService();

  // private autocomplete?: google.maps.places.Autocomplete[] | any;

  constructor() {}

  addAutocompleteInputId(input: HTMLInputElement) {
    new google.maps.places.Autocomplete(input);
  }
}

export { Google };
