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

function MyMap() {
  const [zoom, setZoom] = React.useState(9);
  const { cards } = useSelector((state) => state.cards);

  const [myYmap, setMyYmap] = useState();

  const [placemarks, setPlacemarks] = useState([]);

  const [mapIsOpen, setMapisOpen] = useState();

  useEffect(() => {
    if (myYmap) {
      const cardTitle = cards?.data?.map((el) => {
        return el;
      });
      setMapisOpen(cardTitle);
      const data = cards?.data?.map((event) => {
        return window.ymaps
          .geocode(event.adress)
          .then((x) => x.geoObjects.get(0).geometry.getCoordinates());
      });

      const cords = Promise.all(data).then((cords) => {
        setPlacemarks(cords);
      });
    }
  }, [cards, myYmap]);

  const mapState = React.useMemo(
    () => ({ center: [59.9386, 30.3141], zoom }),
    [zoom]
  );

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
                    <Placemark
                      geometry={el}
                      properties={{
                        balloonContent: mapIsOpen[index].adress,
                        iconCaption: mapIsOpen[index].title,
                      }}
                    />
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
