import Carousel from 'react-bootstrap/Carousel';

const ItemInicio=()=>{
return(
    <div className='carrusel'>
    <Carousel>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/img/maxresdefault.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/img/Header_Musical_Instruments_ogp_db908ae027e29317f45d72030a23291c.webp"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/img/av2-shop-card-v3@2x.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

    <div className="banner">
      <img src="/img/yamaha.jpg" alt="" />
      <img src="/img/fender.png" alt="" />
      <img src="/img/Pearl_drum_logo.png" alt="" />
      <img src="/img/casio.png" alt="" />
    </div>
    </div>

    
)

}


export default ItemInicio;