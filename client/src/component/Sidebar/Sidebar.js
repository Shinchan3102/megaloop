import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteCategory, updateCategory } from '../../actions/post';
import './Sidebar.css';

const Sidebar = () => {
    const { categories, isEdit } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        presentCategory: '', updatedCategory: ''
    });

    const deleteCate = (category) => {
        dispatch(deleteCategory(category, navigate));
    }
    const editCategory = (category) => {
        setCategory({ ...category, presentCategory: category.toLowerCase() });
        dispatch({ type: 'EDIT' });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (category.updatedCategory.trim !== '') {
            dispatch(updateCategory(category,navigate));
        }
        dispatch({ type: 'REMOVE_EDIT' });
    }
    console.log(categories);
    return (
        <div className='sidebar_container'>
            {
                isEdit ?
                    <div className='edit-container'>
                        <div className='edit-sub-container'>
                            <TiDelete className='edit-icon' onClick={() => { dispatch({ type: 'REMOVE_EDIT' }) }} />
                            <input type={'text'} placeholder='Rename the category' className='edit-input' value={category.updatedCategory} onChange={(e) => { setCategory({ ...category, updatedCategory: e.target.value.toLowerCase() }) }} />
                            <input type={'submit'} className='submit edit-input' onClick={handleSubmit} />
                        </div>
                    </div>
                    : <></>
            }
            <div className='sidebar-element'>
                <NavLink className='category' to={`/`} >
                    HOME
                </NavLink>
            </div>
            <div className='sidebar-element'>
                <NavLink className='category' to={`/history`} >
                    HISTORY
                </NavLink>
            </div>

            {
                categories?.map((category, index) => {
                    return (
                        <div className='sidebar-element'>
                            <NavLink className='category' to={`/${category.toLowerCase()}`} key={index}>
                                {category}
                            </NavLink>
                            <div className='sidebar-element-icon'>
                                <MdEdit className='sidebar-icon' onClick={() => { editCategory(category) }} />
                                <TiDelete className='sidebar-icon' onClick={() => { deleteCate(category) }} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar
