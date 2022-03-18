import { Map, GoogleApiWrapper } from "google-maps-react"
import React, { Component } from 'react'

class GoogleMaps extends Component {
    render() {

        return (
            <Map
                google = {this.props.google}
                style = {{width: '100%', height: '100%'}}
                zoom = {10}

                initialCenter = { {
                        lat: 53.2734,
                        lng: -7.77832031
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
