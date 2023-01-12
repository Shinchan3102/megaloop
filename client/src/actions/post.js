
import * as api from '../api';

export const fetchAll = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAll();
        console.log(data);
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (err) {
        console.log("actions post err " + err);
    }
}

// export const getMemoriesBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         // console.log(searchQuery);
//         const { data: { data } } = await api.fetchMemoryBySearch(searchQuery);
//         // console.log(data);
//         // console.log('data');
//         dispatch({ type: 'FETCH_BY_SEARCH', payload: data })
//     } catch (err) {
//         console.log("Search err " + err);
//     }
// }

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (err) {
        console.log('creatememory err ' + err);
    }
}

export const updatePost = (post,id) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(post,id);
        console.log(data);
        dispatch({ type: 'UPDATED_POST', payload: data });
    } catch (err) {
        console.log('updateMemory err ' + err);
    }
}

export const updateCategory=(category,navigate)=>async(dispatch)=>{
    try{
        const {data} = await api.updateCategory(category);
        console.log(data);
        dispatch(fetchAll());
        navigate('/');
    }catch(err){
        console.log('update category err '+err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const {data}=await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: data });
    } catch (err) {
        console.log('deleteMemory err ' + err);
    }
}

export const deleteCategory=(category,navigate)=>async(dispatch)=>{
    try{
        console.log(category);
        const {data}=await api.deleteCategory(category);
        console.log(data);
        dispatch(fetchAll());
        navigate('/')
    } catch(err){
        console.log('delete category error '+err)
    }
}
