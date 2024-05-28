import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators" style={{color:'#E6E6E6'}}>
                    <button style={{color:'#E6E6E6'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={{color:'#E6E6E6'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={{color:'#E6E6E6'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button style={{color:'#E6E6E6'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/cover1.png" class="d-block w-100" alt="Nike" height="600px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/cover2.png" class="d-block w-100" alt="Nike" height="600px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/cover3.png" class="d-block w-100" alt="Nike" height="600px"/>
    </div>
    <div class="carousel-item">
                            <img src="/assets/images/home/cover2.png" class="d-block w-100" alt="Nike" height="600px"/>
    </div>    
                            </div>
                            <button class="carousel-control-prev " style={{color:'#E6E6E6',padding:'15px',borderRadius:'50%'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span style={{color:'#E6E6E6',backgroundColor:'#E6E6E6',padding:'15px',borderRadius:'50%'}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span style={{color:'#E6E6E6'}} class="visually-hidden">Previous</span>
                            </button>
                            <button style={{color:'#E6E6E6',padding:'15px',borderRadius:'50%'}} class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span style={{color:'#E6E6E6',backgroundColor:'#E6E6E6',padding:'15px',borderRadius:'50%'}} class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span style={{color:'#E6E6E6'}} class="visually-hidden">Next</span>
                            </button>
                            
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
