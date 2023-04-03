import Carousel from 'react-bootstrap/Carousel';

const ItemInicio=()=>{
return(
    <div className='carrusel'>
    <Carousel w100>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/public/img/maxresdefault.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/public/img/Header_Musical_Instruments_ogp_db908ae027e29317f45d72030a23291c.webp"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" imagenCarrusel"
          src="/public/img/av2-shop-card-v3@2x.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

    <div className="banner">
      <img src="/public/img/yamaha.jpg" alt="" />
      <img src="/public/img/fender.png" alt="" />
      <img src="/public/img/Pearl_drum_logo.png" alt="" />
      <img src="/public/img/casio.png" alt="" />
    </div>
    </div>

    
)

}


export default ItemInicio;