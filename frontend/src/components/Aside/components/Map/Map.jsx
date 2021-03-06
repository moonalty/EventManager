import React, { useEffect, useState } from "react";
import styles from "./map.module.css";
import stylesIsOpen from "./mapIsOpen.module.css";
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
  const [myYmap, setMyYmap] = useState();
  // const placemarks = useGeocoder(ymaps, adress);
  const [placemarks, setPlacemarks] = useState([]);
  // console.log("PLACEMARKSSTATE!!!!!!!!!", placemarks);
  const [mapIsOpen, setMapisOpen] = useState();
  console.log("MAPISOPEN",mapIsOpen );
  //let ymaps = window.ymaps;
  console.log(React.version);
  useEffect(() => {
    // setTimeout(() => {
    // console.log('YMAPSYOPT', window.ymaps);
    if (myYmap) {
      // console.log("11111111111111111111", cards);
      const cardTitle = cards?.data?.map((el)=> {
        return el
      })
      setMapisOpen(cardTitle)
      const data = cards?.data?.map((event) => {
        // console.log("EVENT!!!!!", event);
        // console.log(window.ymaps, "WOHOOOO");
        return window.ymaps
          .geocode(event.adress)
          .then((x) => x.geoObjects.get(0).geometry.getCoordinates());
      });
      // console.log("ssssssssss", data);
      const cords = Promise.all(data).then((cords) => {
        setPlacemarks(cords);
        // console.log("xxxxxxxxxxxxxxx", cords);
      });
    }
    // }, 4000);
  }, [cards, myYmap]);

  const mapState = React.useMemo(
    () => ({ center: [59.9386, 30.3141], zoom }),
    [zoom]
  );
  // console.log("myMAPS");
  return (
    <div className={styles.map}>
      <YMaps
        query={{
          apikey: "08501024-c117-4e90-8cf0-3d8ba0ef0295",
        }}
        // onApiAvaliable={(ymaps) => console.log('========================',ymaps)}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <Map
                  // onClick={setMapisOpen(stylesIsOpen)}
                  width="100%"
                  height="400px"
                  modules={["geocode"]}
                  onLoad={(ymaps) => {
                    setMyYmap(ymaps);
                    window.ymaps = ymaps;
                  }}
                  state={mapState}
                >
                  <ZoomControl />
                  <SearchControl type="RouteButton" />
                  {placemarks?.map((el, index) => (
                    <Placemark geometry={el} properties ={{
                      // hintContent: mapIsOpen[index],
                      balloonContent:mapIsOpen[index]?.adress,
                      iconCaption : mapIsOpen[index]?.title
                  }} />
                  ))}
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
