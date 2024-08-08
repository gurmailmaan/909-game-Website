import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
import img4 from '../../components/img/boy-playing.webp';
import Pdf from '../../components/rules.pdf';
import bgvideo from '../../components/img/bgVideo.mp4';
import TestimonialCarousel from './TestimonialCarousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    text: "I absolutely love this board game! The gameplay is engaging and strategic, and the mechanics are easy to understand. The artwork and components are top-notch, adding to the overall immersive experience. It's a game that keeps me coming back for more, and I highly recommend it to any board game enthusiast!",
    author: 'John Doe',
  },
  {
    text: 'The quality of the components and artwork is outstanding, making it visually appealing and enjoyable to play. Overall, it is a fantastic addition to any board game collection.',
    author: 'Himanshu Kansal',
  },
  {
    text: 'I cannot say enough good things about this board game! The gameplay is addictive, and the strategic depth keeps me hooked. The game offers a unique and immersive theme that adds an extra layer of excitement. The quality of the components is excellent, and the artwork is stunning. The rulebook is well-written, making it easy to learn and teach to others.',
    author: 'Bob Smith',
  },
];



function Home() {

  useEffect(() => {
    AOS.init({duration: 800})
  }, [])


  return (
    <div className="home-box">
        <div className="section-1">
          <video src={bgvideo} autoPlay muted loop className='video' />
          <div className="overlay"></div>
          <h2  data-aos="fade-up">A Board <span>Game</span> <br/>For Everyone</h2>
          <Link data-aos="fade-up" to ="/shop">BUY NOW</Link>
        </div>

    <div className="section-container">
        <div className="section-2">
          <div className="sec2-box1" data-aos="fade-right">
            <h2>HOW TO PLAY</h2>
            <p>1. &nbsp; Set the board on a level surface.<br/>
            2. &nbsp; Form two teams (1 – 4 players each). Each squad receives four bean pucks (select a colour).<br/>
            3. &nbsp; decide who fires first Keep in mind that shooting last can be advantageous!<br/>
            4. &nbsp; Position each team nine feet from each end of the shooting line.</p>
            <Link to = {Pdf} target = "_blank">RULES</Link>
          </div>
          <div className="sec2-box2" data-aos="fade-up">
            <img src={img4} alt="Login-icon" />
          </div>
        </div>
    </div>

        <div className="section-3">
          <div>
            <h2> <span>LEARN </span> &nbsp; <span>PLAY</span> &nbsp;<span>GROW</span> </h2>
            </div>
        </div>

      <div className="container">
        <div className="section-5">
          <h2>TESTIMONIALS</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      <div className="section-6"></div>
        <div className="section-4">
          <div className="sec4-overlay"></div>
          <div className="about">
            <h2 data-aos="fade-right"><span>AB</span>OUT US</h2>
            <p  data-aos="fade-right">In the past, pandemics resulted in a rise in state power and an increase in people's fear. Jalfam game was started because we needed an outlet from the doom and gloom of pandemic. According to our research, board games foster this communal empathy in two different ways.</p>
            <Link to ="/about">OUR STORY</Link>
          </div>
        </div>
    </div>
  );
}
export default Home;