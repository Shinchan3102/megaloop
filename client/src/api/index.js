import axios from 'axios';

const API=axios.create({baseURL:'https://megaloop.vercel.app/'});

export const fetchAll=()=>API.get(`/`);
export const createPost=(newPost)=> API.post('/post',newPost);
export const updatePost=(updatedPost,id)=> API.patch(`/post/${id}`,updatedPost);
export const updateCategory=(category)=> API.patch(`/category`,category);
export const deletePost=(id)=>API.delete(`/post/${id}`);
export const deleteCategory=(category)=>API.delete(`/category/${category.toLowerCase()}`);