import React, { useEffect, useState } from "react";
import styles from "./map.module.css";
import {
  YMaps,
  Map,
  ZoomControl,
  SearchControl,
  Placemark,
} from "react-yandex-maps";
import { useSelector } from "react-redux";

// function useGeocoder(ymaps, adress){
//   if (ymaps) {
//     // addresses => [{geometry: [0, 0]}, {geometry: [0, 0]}]
//     // return [{geometry: ...}, {geometry: ...}]
//   }
// }

// function getGeometryByAddress(ymaps, adress) {
//   return ymaps.geocode(adress).then(x => x.geoObjects.get(0).geometry);
// }

function MyMap() {
  const [zoom, setZoom] = React.useState(9);
  const { cards } = useSelector((state) => state.cards);
  console.log("cardsForPlacemark!!!!!!!!!!", cards);
  const [ymaps, setYMaps] = useState();
  // const placemarks = useGeocoder(ymaps, adress);
  const [placemarks, setPlacemarks] = useState([]);
  console.log("PLACEMARKSSTATE!!!!!!!!!", placemarks);

  useEffect(async () => {
    const data = cards?.map((event) => {
      ymaps.geocode(event.adress).then((x) => x.geoObjects.get(0).geometry.getCoordinates());
    });
    console.log("ssssssssss", data);
    const cords = await Promise.all(data);
    setPlacemarks(cords);
    console.log("xxxxxxxxxxxxxxx", cords);
  }, []);

  const mapState = React.useMemo(
    () => ({ center: [59.9386, 30.3141], zoom }),
    [zoom]
  );
  console.log("myMAPS");
  return (
    <div className={styles.map}>
      <YMaps
        query={{
          apikey: "08501024-c117-4e90-8cf0-3d8ba0ef0295",
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <Map
                  modules={["geocode"]}
                  onLoad={(ymaps) => {
                    window.ymaps = ymaps;
                    console.log("YMAPS");
                  }}
                  state={mapState}
                >
                  <ZoomControl />
                  {placemarks?.map((el) => (el = <Placemark />))}
                  <SearchControl type="RouteButton" />
                </Map>
              </td>
            </tr>
          </tbody>
        </table>
      </YMaps>
    </div>
  );
}

export default MyMap;
