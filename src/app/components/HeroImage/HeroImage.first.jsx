
import PropTypes from 'prop-types';
import './HeroImage.css';
import { useRef } from 'react';

const HeroImage = props => {

  // const CSS = { transform:`scale(${props.zoomScale})` };

  const hanldeMouseEnter = () => imageRef.current.style.transform = `scale(${props.zoomScale})` 
  const hanldeMouseLeave = () => imageRef.current.style.transform = `scale(1)` 

  const imageRef = useRef();

  return (
  <div className="HeroImageContainer">
    <img 
      className="HeroImage" 
      data-testid="HeroImage" 
      ref={ imageRef }
      onMouseEnter={ hanldeMouseEnter }
      onMouseLeave={ hanldeMouseLeave }
      src={ props.url } 
      />
  </div>
  )
};

HeroImage.propTypes = {
  url: PropTypes.string,
  zoomScale:  PropTypes.number
};

//  https://picsum.photos/600/400
//  https://placehold.co/600x400

HeroImage.defaultProps = {
  url: ' https://picsum.photos/600/400',
  zoomScale:1.5
};

export default HeroImage;
