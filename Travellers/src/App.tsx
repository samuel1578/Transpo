import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Explore Ghana</h1>
          <p>Your gateway to discovering the beauty of Ghana</p>
          <button>Book Now</button>
        </div>
      </section>
      <section className="explore" id="explore">
        <h2>Explore our best destinations</h2>
        <p>Explore the latest travel trends.</p>
        <div className="destinations">
          <a href="#" className="destination">
            <img src="https://images.pexels.com/photos/20131678/pexels-photo-20131678/free-photo-of-independence-arch-in-accra-ghana.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Accra" />
            <h3>Accra</h3>
          </a>
          <a href="#" className="destination">
            <img src="https://images.pexels.com/photos/723534/pexels-photo-723534.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cape Coast" />
            <h3>Cape Coast</h3>
          </a>
          <a href="#" className="destination">
            <img src="https://images.pexels.com/photos/14584405/pexels-photo-14584405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Volta Region" />
            <h3>Volta Region</h3>
          </a>
        </div>
      </section>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src="https://images.pexels.com/photos/3975142/pexels-photo-3975142.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Travel Planning" />
            <h3>Travel Planning</h3>
            <p>We plan your trip from start to finish, ensuring you have a seamless experience.</p>
          </div>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/18087264/pexels-photo-18087264/free-photo-of-men-holding-a-line-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Guided Tours" />
            <h3>Guided Tours</h3>
            <p>Our guided tours cover the most beautiful and historic sites in Ghana.</p>
          </div>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/8493777/pexels-photo-8493777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Accommodation" />
            <h3>Accommodation</h3>
            <p>We provide accommodation options that suit your needs and budget.</p>
          </div>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.pexels.com/photos/12190172/pexels-photo-12190172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery 1" />
          <img src="https://images.pexels.com/photos/1367572/pexels-photo-1367572.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery 2" />
          <img src="https://images.pexels.com/photos/12037245/pexels-photo-12037245.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery 3" />
          <img src="https://images.pexels.com/photos/31091463/pexels-photo-31091463/free-photo-of-modern-beachside-architecture-in-ghana.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery 4" />
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default App;

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Explore Ghana. All rights reserved.</p>
    </footer>
  );
}

export { Footer };