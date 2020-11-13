import React, { Component } from 'react'

export default class JumbotronContent extends Component {
    render() {
        return (
        <>
            <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                    A Social Platform for Otaku
                    </h2>
                </div>
            <div class='row'>
                <div class='col-1-of-4'>
                    <h3 className='heading-tertiary'>Connect with your friends</h3>
                </div>
                <div class='col-1-of-4'>
                    <h3 className='heading-tertiary'>Share your fan art and cosplays</h3>
                </div>
                <div class='col-1-of-4'>
                    <h3 className='heading-tertiary'>Share your fan art and cosplays</h3>
                </div>
                <div class='col-1-of-4'>
                    <h3 className='heading-tertiary'>Recommend movies and series</h3>
                </div>
            </div>
        </>
        )
    }
}
