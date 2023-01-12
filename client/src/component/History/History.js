import React from 'react';
import { useSelector } from 'react-redux';
import Create from '../Create/Create';
import Sidebar from '../Sidebar/Sidebar';
import './History.css';
import HistoryList from './HistoryList';

const History = () => {
    const { isAdd } = useSelector((state) => state.post);
    return (
        <div className='history-container'>
            {
                isAdd ?
                    <Create />
                    :
                    <></>
            }
            <Sidebar />
            <HistoryList />
        </div>
    )
}

export default History
