import React from 'react'
import { useSelector } from 'react-redux'

const HistoryList = () => {
    const { history } = useSelector((state) => state.post);
    return (
        <div className='historylist-container'>
            {
                history.length === 0 ?
                    <h2>No history data</h2>
                    :
                    <div className='list-container'>
                        {
                            history.map((post, index) => {
                                return (
                                    <>
                                        <div key={index} className='list'>
                                            <div>
                                                {post.title}
                                            </div>
                                            <div>
                                                {post.url}
                                            </div>
                                            <div>
                                                {post.date.slice(0,25)}
                                            </div>
                                        </div>
                                        <hr />
                                    </>

                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default HistoryList
