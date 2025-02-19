import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'google-map';
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: any) {

    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: '',
      draggable: true
    });

    console.log(`mapClicked: ${$event}`)
  }

  markerDragEnd(m: MvMarker, $event: any) {
    console.log('markerDragEnd', m, $event);
  }

  circleDragEnd($event: any) {
    console.log('circleDragEnd', $event);
  }

  circleRadiusChange($event: any) {
    console.log('circleRadiusChange', $event);
  }

  circleCenterChange($event: any) {
    console.log('circleCenterChange', $event);
  }

  circleClick($event: any) {
    console.log('circleClick', $event);
  }

  circleRightClick($event: any) {
    console.log('circleRightClick', $event);
  }

  markers: MvMarker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];
}

// just an interface for type safety.
interface MvMarker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
