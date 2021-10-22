import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: '50vh' }} src="https://www.yanrefitness.com/wp-content/uploads/2021/08/Figure-1-Setting-Up-Your-Gym-Business.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: '50vh' }} src="https://allamericanfitness.com/wp-content/uploads/2016/11/Modern-Gym.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: '50vh' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBqcYtdkjMLz0uWvraLOJ9Y7MIWZsx4EY9jxIXDbQjWsTD2z-yJZ8leU7VTck4z07DAQ&usqp=CAU" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
