import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header__text-box'>
                    <h1 className='header__title'>Anime-Niac</h1>
    
                    <div className='heading-primary'>
                        <span className="heading-primary--main">Moshi Moshi</span>
                        <span className="heading-primary--sub"> Some other bs here</span>
                    </div>
                </div>
            </div>
        )
    }
}
