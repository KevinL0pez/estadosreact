import { Map, GoogleApiWrapper } from "google-maps-react"
import React, { Component } from 'react'

class GoogleMaps extends Component {
    render() {

        return (
            <Map
                google = {this.props.google}
                style = {{width: '100%', height: '100%'}}
                zoom = {15}

                initialCenter = { {
                        lat: 4.541114,
                        lng: -75.668008
                    }
                }


            />
        )

    }
}

export default GoogleApiWrapper ({
    apiKey: 'AIzaSyDKvOka2VOKRJOm5pch0ch6rjeP2gy-8Fc'

}) (GoogleMaps)

// Archivo JSON - Ubicaciones (Pintar las ubicaciones en el map)

// Coordenadas de la ubicación (Longitud - Latitud)
