const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOOES.THIS PRODUCT IS REALLY VALUABLE.
        </p>
        <div className="hero-btn">
          <button type="button" className="btn btn-danger">
            Shop Now
          </button>
          <button type="button" className="btn btn-light sec-btn">
            Category
          </button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icon">
          <img src="images/flipkart_logo.png" alt="flipkart-image" />
          <img src="images/amazone_logo.png" alt="amazone-image" />
        </div>
      </div>
      <div className="hero-image">
        <img src="images/Shoes.png" />
      </div>
    </main>
  );
};

export default HeroSection;
