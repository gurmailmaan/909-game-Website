import React from 'react';
import leann from '../../components/img/leann-zahara.jpg'
import annette from '../../components/img/annette-maltais.jpg'
import john from '../../components/img/john-Thibert.jpg'
import '../../styles/About.css';

function About() {
  return (
    <div className='web-max'>
        <div className="Article-1">
          <div className="article1-sec1">
            <h1>ABOUT US</h1>
          </div>
          <div className="article1-sec2">
            <p>In the past, pandemics resulted in a rise in state power and an increase in people's fear. Jalfam game was started because we needed an outlet from the doom and gloom of pandemic. According to our research, board games foster this communal empathy in two different ways. Firstly, board games are challenging but not insurmountable. As psychologists and game researchers have demonstrated, many people claim to experience emotional growth when skillfully challenged. Game offer challenges that players can succeed at, empowering them in new ways.
            </p>
          </div>
          <div className="article1-sec3"></div>
        </div>

        <div className="Article-2">
          <div className="article2-sec1"></div>
          <div className="article2-sec2" >
            <p>Secondly, board games are inherently social. The vast majority of board games require social interaction to function, even if there are several board games that may be played alone. In a cooperative game like 9 on 9 game players must strategize to get 99 points. Players participate in friendly competition. All players can find something to enjoy in cooperative and competitive games. By keeping all these things in mind we developed a game 9on9, that emphasizes enjoyment, movement, and skill.</p>
          </div>
        </div>
        <div className="Article-3">
          <h3>TEAM MEMBERS</h3>
          <div className="person-1">
              <img src={annette} alt="1st Person" />
              <h4 data-aos="fade-right">Annette Maltais</h4>
          </div>
          <div className="person-2">
              <img src={john} alt="2nd Person" />
              <h4 data-aos="fade-right">John Thibert</h4>
              </div>
          <div className="person-3">
              <img src={leann} alt="3rd Person" />
              <h4 data-aos="fade-right">Leann Zahara</h4>
              </div>
        </div>
    </div>
  );
}

export default About