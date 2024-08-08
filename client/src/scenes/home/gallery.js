import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

import '../../styles/gallery.css';

import img1 from '../../components/img/board-1.jpg';
import img2 from '../../components/img/board-2.webp';
import img3 from '../../components/img/board-3.webp';
import img4 from '../../components/img/board-4.webp';
import img5 from '../../components/img/board-5.webp';
import img6 from '../../components/img/focused-puck.webp';
import img7 from '../../components/img/pucks.webp';
import img8 from '../../components/img/boy-playing.webp';
import img9 from '../../components/img/wooden-board.webp';
import img10 from '../../components/img/ocean-view.webp';
import img11 from '../../components/img/living-room-kids.webp';
import img12 from '../../components/img/triangle-home.webp';
import img13 from '../../components/img/grass-back.webp';
import img14 from '../../components/img/back-back-board.webp';

export default function MyGallery() {
  const [itemsToShow, setItemsToShow] = React.useState(12);
  const [showLoadMore, setShowLoadMore] = React.useState(true);

  const itemData = [
    {img: img1,
    title: '9on9',
  },
  {
    img: img2,
    title: '9on9',
  },
  {
    img: img3,
    title: '9on9',
  },
  {
    img: img4,
    title: '9on9',
  },
  {
    img: img5,
    title: '9on9',
  },
  {
    img: img6,
    title: '9on9',
  },
  {
    img: img7,
    title: '9on9',
  },
  {
    img: img8,
    title: '9on9',
  },
  {
    img: img9,
    title: '9on9',
  },
  {
    img: img10,
    title: '9on9',
  },
  {
    img: img11,
    title: '9on9',
  },
  {
    img: img12,
    title: '9on9',
  },
  {
    img: img13,
    title: '9on9',
  },
  {
    img: img14,
    title: '9on9',
  },
  ];

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 8);
  };

  React.useEffect(() => {
    if (itemsToShow >= itemData.length) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [itemsToShow, itemData.length]);

  return (
    <div>
      <div className="gallery">
        <h1>GALLERY</h1>
      </div>
      <div className="container">
      <Box  className='gallery-box' sx={{ width: 9/10, height: 1/0}}> 
        <ImageList  className='image-ul' variant="masonry" cols={'fitcontent'} gap={8}>
          {itemData.slice(0, itemsToShow).map((item) => (
            <ImageListItem key={item.img} className='image-li'>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        {showLoadMore && (
          <Box className='button-box' sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="contained" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
      </div>
    </div>
  );
}
