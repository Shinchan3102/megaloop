import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/post';
import './Create.css';

const Create = () => {
    const [post, setPost] = useState({
        title: '', url: '', category: ''
    });

    const { updatePosts } = useSelector((state) => state.post);

    useEffect(() => {
        if (updatePosts) {
            setPost(updatePosts);
        }
    }, [updatePosts]);

    const handleChange = (e) => {
        if (e.target.name === 'category')
            setPost({ ...post, [e.target.name]: e.target.value.toLowerCase() });
        else
            setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.title.trim() === '' || post.url.trim() === '' || post.category.trim() === '') {
            window.alert('Enter all the fields perfectly');
        }
        else if(updatePosts){
            dispatch(updatePost(post,updatePosts._id));
            setPost({ title: '', url: '', category: '' });
            dispatch({ type: 'REMOVE' });
        }
        else {
            console.log(post);
            dispatch(createPost(post));
            setPost({ title: '', url: '', category: '' });
            dispatch({ type: 'REMOVE' });
        }
    }
    const dispatch = useDispatch();
    return (
        <div className='create-container'>
            <div className='create'>
                <h3>Create or Update the post</h3>
                <RxCross2 className='crossIcon' onClick={() => { dispatch({ type: 'REMOVE' }) }} />
                <div className='create-form'>
                    <div>
                        <input type='text' placeholder='Title' className='create-field' name='title' value={post.title} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type='text' placeholder='Paste youtube url' className='create-field' name='url' value={post.url} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type='text' placeholder='Category' className='create-field' name='category' value={post.category} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type='submit' className='submit' onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
