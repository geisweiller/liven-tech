import React, { useCallback, useRef } from 'react';
import { NoImage } from '../../../assets/images';
import { IPicturePic } from './interfaces';

import * as S from './styles';

const ProductPic: React.FC<IPicturePic> = ({ src, alt, width, height }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleNotLoaded = useCallback(() => {
    if (imageRef.current) {
      imageRef.current.src = NoImage;
    }
  }, [imageRef]);

  return (
    <S.ProductImage
      src={NoImage}
      alt={alt}
      width={width}
      height={height}
      ref={imageRef}
      onError={handleNotLoaded}
      data-testid="picture"
    />
  );
};

export default ProductPic;
