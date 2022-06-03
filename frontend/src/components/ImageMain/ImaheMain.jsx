import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

 function ImageMain() {
  return (
    <Box sx={{ width: 600, height: 700 , marginLeft: 10, marginTop: 12 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{margin: 5}}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://krasivodel.ru//wp-content/uploads/2020/06/Piter-krasivyye-foto-4.jpg',
    title: 'Bed',
  },
  {
    img: 'https://krasivye-mesta.ru/img/Palace-Square.jpg',
    title: 'Books',
  },
  {
    img: 'https://ezdili-znaem.com/wp-content/uploads/2018/08/piter-lakhta-center-1.jpg?x33780',
    title: 'Sink',
  },
  {
    img: 'https://a.d-cd.net/212c7f9s-960.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://34travel.me/media/upload/images/2018/may/piter/new-palasatka/296A1742.jpg',
    title: 'Blinds',
  },
  {
    img: 'https://novyekartinki.net/uploads/photos/show/180_nochnoy-piter.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://i.pinimg.com/736x/68/32/f3/6832f3ac392cdd6170ad0edad7625a45.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://a.d-cd.net/362c7f9s-960.jpg',
    title: 'Doors',
  },
  {
    img: 'https://i.pinimg.com/originals/ff/5d/7e/ff5d7e1e3ce85ee486cefe59b0eb17c7.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i1.7fon.org/thumb/g599654.jpg',
    title: 'Storage',
  },
  {
    img: 'https://i1.7fon.org/thumb/u308941.jpg',
    title: 'Candle',
  },
 
];

export default ImageMain
