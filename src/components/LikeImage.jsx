import React from 'react';
import LikeCounter from './LikeCounter';

const LikeImage = () => {
  return (
    <LikeCounter render={(likeImageCounter, handleLikeImageCounter) => (
      <div>
        <button onClick={handleLikeImageCounter}>Like Image {likeImageCounter}</button>
      </div>
    )} />
  );
};

export default LikeImage;
