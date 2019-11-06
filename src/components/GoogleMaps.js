import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMaps = props => {
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 45.776018, lng: 3.086281 }}
      >
        <Marker position={{ lat: 45.776018, lng: 3.086281 }} />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfecQvyJd5bM4rzc4LUXmgTcoJ6u9QvRA",
})(GoogleMaps)
