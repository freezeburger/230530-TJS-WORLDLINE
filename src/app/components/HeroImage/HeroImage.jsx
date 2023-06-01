
import PropTypes from 'prop-types';
import './HeroImage.css';
import styled from '@emotion/styled';

const Image = styled.img`
    width:100%;
    height:100%;
    transform:scale(1);
    transition:transform .4s ease;
    &:hover{
      transform:scale(${ props => props.zoomScale });
    }
`;

const HeroImage = props => {

  return (
  <div className="HeroImageContainer" data-testid="HeroImage" >
    <Image 
      src={ props.url } 
      zoomScale={ props.zoomScale } 
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
  url: 'https://placehold.co/600x400',
  zoomScale:3
};

export default HeroImage;
