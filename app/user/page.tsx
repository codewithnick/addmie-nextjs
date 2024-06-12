// pages/index.tsx
import Navbar from '@/components/Navbar'
import PostContainer from '@/components/PostContainer';
import React from 'react';

const UserIndexPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PostContainer></PostContainer>
    </div>
  );
};

export default UserIndexPage;
