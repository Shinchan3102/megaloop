import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';
import Create from '../Create/Create';

const Home = () => {
    const { isAdd } = useSelector((state) => state.post);

    return (
        <div className='home-container'>
            {
                isAdd ?
                    <Create />
                    :
                    <></>
            }
            <Sidebar />
            <Card />
        </div>
    )
}

export default Home
