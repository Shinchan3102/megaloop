import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoLinkExternal } from 'react-icons/go';
import { deletePost } from '../../actions/post';
import PlayYoutube from './PlayYoutube';
import { TiDelete } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import './Card.css';
import { useLocation } from 'react-router-dom';
const getYouTubeID = require('get-youtube-id');
const youtubeThumbnail = require('youtube-thumbnail');

const Card = () => {
  const { posts } = useSelector((state) => state.post);
  const location = useLocation();
  const [youtube, setYoutube] = useState({
    mode: false, id: null
  });

  const setHistory = (post) => {
    const date = new Date();
    dispatch({ type: 'ADD_HISTORY', payload: { ...post, date: date.toString() } })
  }

  const dispatch = useDispatch();

  const handlePostDeletion = async (id) => {
    dispatch(deletePost(id));
  };

  console.log(posts);
  return (
    <div className='card-container'>
      {
        youtube.mode ?
          <PlayYoutube id={youtube.id} setYoutube={setYoutube} />
          :
          <></>
      }
      {
        location.pathname === '/' ?
          posts?.map((post, index) => {
            return (
              <div className='card' key={index} style={{ background: `url(${youtubeThumbnail(post.url).medium.url})` }}>
                <div className='card-icon'>
                  <MdEdit onClick={() => { dispatch({ type: 'UPDATE', payload: post }) }} className='card-single-icon' />
                  <TiDelete onClick={() => { handlePostDeletion(post._id) }} className='card-single-icon' />
                </div>
                <div className='card-title' onClick={() => {
                  setYoutube({ mode: true, id: getYouTubeID(post.url) });
                  setHistory(post);
                }}>
                  {
                    post.title.length > 20 ?
                      post.title.slice(0, 17) + '...'
                      :
                      post.title
                  } <GoLinkExternal />
                </div>
              </div>
            )
          })
          :
          posts?.map((post, index) => {
            if (location.pathname === `/${post.category}`) {
              return (
                <div className='card' key={index} style={{ background: `url(${youtubeThumbnail(post.url).medium.url})` }}>
                  <div className='card-icon'>
                    <MdEdit onClick={() => { dispatch({ type: 'UPDATE', payload: post }) }} className='card-single-icon' />
                    <TiDelete onClick={() => { handlePostDeletion(post._id) }} className='card-single-icon' />
                  </div>
                  <div className='card-title' onClick={() => { setYoutube({ mode: true, id: getYouTubeID(post.url) }) }}>
                    {post.title} <GoLinkExternal />
                  </div>
                </div>
              )
            }
            return <></>

          })
      }

    </div>
  )
}

export default Card
