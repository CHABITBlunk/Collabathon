import React from 'react'
// import Image from 'react-bootstrap'


const Homepage = () => {
    return (
        <div className="homepage">
            <img className='banner' src='/images/Banne_ Cropped.png' />

        <h3 className='rowTitle'>Weekly Top Rated</h3>
        <div className="topRatedContainer">
            <div>
            <img className='productImage' src='/images/Group 20.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 21.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 22.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 23.png' />
            </div>
        </div>
        <h3 className='rowTitle'>Latest Buzz</h3>
        <div className="topRatedContainer">
            <div>
            <img className='productImage' src='/images/Group 24.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 25.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 26.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Group 27.png' />
            </div>
        </div>
        <h3 className='rowTitle'>Gift Guide</h3>
        <div className="giftGuideContainer">
            <div>
            <img className='productImage' src='/images/Frame 8.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Frame 9.png' />

            </div>
            <div>
            <img className='productImage' src='/images/Frame 10.png' />

            </div>

        </div>
           
        </div>
    )
}

export default Homepage
