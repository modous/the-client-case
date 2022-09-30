function createMap(){
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.3759250759437, lng: 4.908394762488651},
      zoom: 13
    });
    
    const trexMarker = new google.maps.Marker({
      position: {lat: 52.3759250759437, lng: 4.908394762488651},
      map: map,
      title: 'OBA Oosterdokskade'
    });
    
    const trexMarker1 = new google.maps.Marker({
        position: {lat: 52.3889343533289, lng: 4.880050638536307},
        map: map,
        title: 'OBA Spaarndammerstraat'
      });

      const trexMarker2 = new google.maps.Marker({
        position: {lat: 52.36429770883803, lng: 4.938856711551853},
        map: map,
        title: 'OBA Javaplein'
      });
    
      const trexMarker3 = new google.maps.Marker({
        position: {lat: 52.353327900638206, lng: 4.906540513404021},
        map: map,
        title: 'OBA cc amstel'
      });
  }

//   function createMap(){
//     const map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 37.422, lng: -122.084},
//       zoom: 16
//     });
// }