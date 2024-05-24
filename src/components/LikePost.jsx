import React from 'react';
import LikeCounter from './LikeCounter';

const LikePost = () => {
  return (
    <LikeCounter render={(likePostCounter, handleLikePostCounter) => (
      <div>
        <button onClick={handleLikePostCounter}>Like Post {likePostCounter}</button>
      </div>
    )} />
  );
};

export default LikePost;
