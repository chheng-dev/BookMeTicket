import React from "react";
import GoogleMapReact from 'google-map-react';

function Gmap(){
    const defaultProps = {
        center: {
          lat: 11.577932691968394,
          lng: 104.90597885363206
        },
        zoom: 11
      };    
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return(
        <div className="h-96 md:h-1/2">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={11.577932691968394}
                    lng={104.90597885363206}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Gmap