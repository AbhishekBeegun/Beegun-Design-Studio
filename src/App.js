import Navigation from './Navigation';
import { Link } from 'react-scroll';
import './App.css';
import flash from './Font/Flash.mp4';
import infinity from './Font/Infinity.mp4';
import Support from './Font/Support.mp4';
import Coins from './Font/Coins.mp4';
import Diamond from './Font/Diamond.mp4';
import Finger from './Font/Fingerprint.mp4';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="Top" id="topmain">
        <section className="Top1">
         <svg width="120" height="46" viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0.0340909 35V0.0909081H7.29545V13.2159H7.51705C7.83523 12.5114 8.29545 11.7955 8.89773 11.0682C9.51136 10.3295 10.3068 9.71591 11.2841 9.22727C12.2727 8.72727 13.5 8.47727 14.9659 8.47727C16.875 8.47727 18.6364 8.97727 20.25 9.97727C21.8636 10.9659 23.1534 12.4602 24.1193 14.4602C25.0852 16.4489 25.5682 18.9432 25.5682 21.9432C25.5682 24.8636 25.0966 27.3295 24.1534 29.3409C23.2216 31.3409 21.9489 32.858 20.3352 33.892C18.733 34.9148 16.9375 35.4261 14.9489 35.4261C13.5398 35.4261 12.3409 35.1932 11.3523 34.7273C10.375 34.2614 9.57386 33.6761 8.94886 32.9716C8.32386 32.2557 7.84659 31.5341 7.51705 30.8068H7.19318V35H0.0340909ZM7.14205 21.9091C7.14205 23.4659 7.35795 24.8239 7.78977 25.983C8.22159 27.142 8.84659 28.0455 9.66477 28.6932C10.483 29.3295 11.4773 29.6477 12.6477 29.6477C13.8295 29.6477 14.8295 29.3239 15.6477 28.6761C16.4659 28.017 17.0852 27.108 17.5057 25.9489C17.9375 24.7784 18.1534 23.4318 18.1534 21.9091C18.1534 20.3977 17.9432 19.0682 17.5227 17.9205C17.1023 16.7727 16.483 15.875 15.6648 15.2273C14.8466 14.5795 13.8409 14.2557 12.6477 14.2557C11.4659 14.2557 10.4659 14.5682 9.64773 15.1932C8.84091 15.8182 8.22159 16.7045 7.78977 17.8523C7.35795 19 7.14205 20.3523 7.14205 21.9091ZM42.3452 35.5114C39.652 35.5114 37.3338 34.9659 35.3906 33.875C33.4588 32.7727 31.9702 31.2159 30.9247 29.2045C29.8793 27.1818 29.3565 24.7898 29.3565 22.0284C29.3565 19.3352 29.8793 16.9716 30.9247 14.9375C31.9702 12.9034 33.4418 11.3182 35.3395 10.1818C37.2486 9.04545 39.4872 8.47727 42.0554 8.47727C43.7827 8.47727 45.3906 8.75568 46.8793 9.3125C48.3793 9.85795 49.6861 10.6818 50.7997 11.7841C51.9247 12.8864 52.7997 14.2727 53.4247 15.9432C54.0497 17.6023 54.3622 19.5455 54.3622 21.7727V23.767H32.2543V19.267H47.527C47.527 18.2216 47.2997 17.2955 46.8452 16.4886C46.3906 15.6818 45.7599 15.0511 44.9531 14.5966C44.1577 14.1307 43.2315 13.8977 42.1747 13.8977C41.0724 13.8977 40.0952 14.1534 39.2429 14.6648C38.402 15.1648 37.7429 15.8409 37.2656 16.6932C36.7884 17.5341 36.544 18.4716 36.5327 19.5057V23.7841C36.5327 25.0795 36.7713 26.1989 37.2486 27.142C37.7372 28.0852 38.4247 28.8125 39.3111 29.3239C40.1974 29.8352 41.2486 30.0909 42.4645 30.0909C43.2713 30.0909 44.0099 29.9773 44.6804 29.75C45.3509 29.5227 45.9247 29.1818 46.402 28.7273C46.8793 28.2727 47.2429 27.7159 47.4929 27.0568L54.2088 27.5C53.8679 29.1136 53.169 30.5227 52.1122 31.7273C51.0668 32.9205 49.7145 33.8523 48.0554 34.5227C46.4077 35.1818 44.5043 35.5114 42.3452 35.5114ZM71.0327 35.5114C68.3395 35.5114 66.0213 34.9659 64.0781 33.875C62.1463 32.7727 60.6577 31.2159 59.6122 29.2045C58.5668 27.1818 58.044 24.7898 58.044 22.0284C58.044 19.3352 58.5668 16.9716 59.6122 14.9375C60.6577 12.9034 62.1293 11.3182 64.027 10.1818C65.9361 9.04545 68.1747 8.47727 70.7429 8.47727C72.4702 8.47727 74.0781 8.75568 75.5668 9.3125C77.0668 9.85795 78.3736 10.6818 79.4872 11.7841C80.6122 12.8864 81.4872 14.2727 82.1122 15.9432C82.7372 17.6023 83.0497 19.5455 83.0497 21.7727V23.767H60.9418V19.267H76.2145C76.2145 18.2216 75.9872 17.2955 75.5327 16.4886C75.0781 15.6818 74.4474 15.0511 73.6406 14.5966C72.8452 14.1307 71.919 13.8977 70.8622 13.8977C69.7599 13.8977 68.7827 14.1534 67.9304 14.6648C67.0895 15.1648 66.4304 15.8409 65.9531 16.6932C65.4759 17.5341 65.2315 18.4716 65.2202 19.5057V23.7841C65.2202 25.0795 65.4588 26.1989 65.9361 27.142C66.4247 28.0852 67.1122 28.8125 67.9986 29.3239C68.8849 29.8352 69.9361 30.0909 71.152 30.0909C71.9588 30.0909 72.6974 29.9773 73.3679 29.75C74.0384 29.5227 74.6122 29.1818 75.0895 28.7273C75.5668 28.2727 75.9304 27.7159 76.1804 27.0568L82.8963 27.5C82.5554 29.1136 81.8565 30.5227 80.7997 31.7273C79.7543 32.9205 78.402 33.8523 76.7429 34.5227C75.0952 35.1818 73.1918 35.5114 71.0327 35.5114ZM107.229 45.3636C105.274 45.3636 103.638 45.1136 102.32 44.6136C101.001 44.125 99.9446 43.4773 99.1491 42.6705C98.3537 41.875 97.7514 41.0227 97.3423 40.1136L100.956 37.8636C101.229 38.3409 101.581 38.8864 102.013 39.5C102.445 40.125 103.098 40.6648 103.973 41.1193C104.859 41.5852 106.104 41.8182 107.706 41.8182C109.808 41.8182 111.649 41.3068 113.229 40.2841C114.808 39.2614 115.786 37.6591 116.161 35.4773L116.979 30.1591H116.638C116.274 30.6364 115.768 31.2273 115.121 31.9318C114.473 32.625 113.604 33.2443 112.513 33.7898C111.422 34.3239 110.024 34.5909 108.32 34.5909C106.195 34.5909 104.376 34.0909 102.865 33.0909C101.354 32.0909 100.268 30.6364 99.6094 28.7273C98.9616 26.8182 98.8651 24.5 99.3196 21.7727C99.7628 19.0909 100.615 16.7557 101.876 14.767C103.149 12.767 104.717 11.2216 106.581 10.1307C108.445 9.02841 110.479 8.47727 112.683 8.47727C114.388 8.47727 115.695 8.76136 116.604 9.32955C117.524 9.88636 118.195 10.5227 118.615 11.2386C119.036 11.9432 119.354 12.5227 119.57 12.9773H119.979L120.661 8.81818H124.547L120.115 35.75C119.74 38 118.928 39.8295 117.678 41.2386C116.428 42.6591 114.893 43.6989 113.075 44.358C111.257 45.0284 109.308 45.3636 107.229 45.3636ZM109.342 30.9773C110.945 30.9773 112.371 30.608 113.621 29.8693C114.882 29.1307 115.928 28.0682 116.757 26.6818C117.587 25.2955 118.161 23.6364 118.479 21.7045C118.797 19.8182 118.774 18.1534 118.411 16.7102C118.047 15.267 117.359 14.1364 116.348 13.3182C115.348 12.5 114.036 12.0909 112.411 12.0909C110.695 12.0909 109.212 12.5227 107.962 13.3864C106.723 14.25 105.717 15.4091 104.945 16.8636C104.172 18.3182 103.638 19.9318 103.342 21.7045C103.047 23.5227 103.058 25.1307 103.376 26.5284C103.695 27.9148 104.342 29.0057 105.32 29.8011C106.308 30.5852 107.649 30.9773 109.342 30.9773ZM145.82 24.2955L148.411 8.81818H152.433L148.07 35H144.047L144.797 30.5682H144.524C143.706 31.8977 142.564 33.0284 141.098 33.9602C139.632 34.8807 137.911 35.3409 135.933 35.3409C134.297 35.3409 132.899 34.983 131.74 34.267C130.592 33.5398 129.774 32.4489 129.286 30.9943C128.808 29.5284 128.751 27.6818 129.115 25.4545L131.911 8.81818H135.933L133.206 25.1818C132.899 27.0909 133.189 28.6136 134.075 29.75C134.962 30.8864 136.24 31.4545 137.911 31.4545C138.911 31.4545 139.967 31.1989 141.081 30.6875C142.206 30.1761 143.206 29.392 144.081 28.3352C144.967 27.2784 145.547 25.9318 145.82 24.2955ZM162.051 19.25L159.46 35H155.438L159.801 8.81818H163.688L163.006 12.9091H163.347C164.165 11.5795 165.273 10.5114 166.67 9.70455C168.068 8.88636 169.756 8.47727 171.733 8.47727C173.483 8.47727 174.96 8.84091 176.165 9.56818C177.381 10.2841 178.239 11.375 178.739 12.8409C179.25 14.2955 179.324 16.1364 178.96 18.3636L176.165 35H172.142L174.869 18.6364C175.21 16.5909 174.943 14.9886 174.068 13.8295C173.205 12.6705 171.835 12.0909 169.96 12.0909C168.665 12.0909 167.466 12.3693 166.364 12.9261C165.273 13.483 164.347 14.2955 163.585 15.3636C162.835 16.4318 162.324 17.7273 162.051 19.25Z" fill="black"/>
         <path d="M96.7969 19.2841H182.028V22.5568H96.7969V19.2841Z" fill="black"/>
         </svg>
          <h1>Achieving what matters most to you</h1>
          <p>Throught elegant and refined digital experiences</p>
          <Link to = "end"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} className="plan-btn">See plans</Link>
          <p>Designs you'll ❤️, 100%</p>
          <div className="Marquee">
            <div className="Marqueep">
              <p>Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞ Forever Upwards ∞
              </p>
            </div>
          </div>
        </section>
        <section className="Top2" id ="top">
          <h2>Upgrade to the next Level of digital products</h2>
          <p>Scope of our work</p>
          <div className="Services">
            <li>Websites</li><li>UI/UX designs</li><li>E-commerce</li><li>Progressive Apps</li><li>Logos & branding</li><li>Mobile apps</li><li>Social Media graphics</li>
            <li>Brochures</li><li>Billboards</li><li>Digital ads</li><li>Icons</li>
            <li>Trade banners</li><li>SEO</li>
          </div>   
        </section>
      </div>


      <div className="Center" id ="center">
        <section className="Center1">
          <h2>Perks we offer</h2>
          <p>Benefits so good that you'll never need to go anywhere else for your design.
          </p>
          <Link to = "end"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000} className="plan-btn">See plans</Link>
          <div className="Benefits">
            <div>
            <video src={infinity} alt="load" autoPlay loop muted />
              <h5>Unlimited design</h5>
              
            </div>

            <div>
            <video src={flash} alt="load" autoPlay loop muted />
              <h5>Fast Delivery</h5>
             
            </div>


            <div>
            <video src={Coins} alt="load" autoPlay loop muted />             
              <h5>No more no less</h5>
              
            </div>


            <div>
            <video src={Diamond} alt="load" autoPlay loop muted />

              <h5>Top quality</h5>
              
            </div>


            <div>
            <video src={Support} alt="load" autoPlay loop muted />
              <h5>We adjust to you</h5>
              
            </div>


            <div>
            <video src={Finger} alt="load" autoPlay loop muted />
              <h5>Your design is 100% yours</h5>
              
            </div>
          </div>
        </section>
        <section className="Center2">
          <div><p>What we believe</p></div>
          <div><h1>Data informs ,<span>Emotions</span><br></br>decides.</h1>
          <p>For us, a product has to be : <span>Simple</span> ,<br></br>
          <span>intuitive</span> and <span>structured</span> with <span>aesthetics</span> designs <br></br>
          and set the standards for others to <span>inspire</span>.<br></br>
          <br></br>
          But most of all, act as a medium to promote<span> your brand's objectives.</span></p>
          </div>

        </section>
      </div>




      <div className="End" id="end">
        <section>
          <h4>Plan 1</h4>
          <p>Most popular</p>
          <h5>Rs 225,000</h5>
          <button className="plan-btn">Get Started</button>
          <a className="Blue" href="">Book a call</a>
          <div>
            <h5>What's included :</h5>
          <li>Unlimited requests</li>
          <li>Unlimited stock photos</li>
          <li>Unlimited revisions</li>
          </div>
        </section>


        <section>
          <h4>Plan 2</h4>
          <p>Save Rs 25,000</p>
          <h5>Rs 200,000</h5>
          <button className="plan-btn">Get Started</button>
          <a href="">Book a call</a>
          <div>
            <h5>What's included :</h5>
          <li>Unlimited requests</li>
          <li>Unlimited stock photos</li>
          <li>Unlimited revisions</li>
          </div>
        </section>

        <section>
          <h4>Plan 3</h4>
          <p>Save Rs 50,000</p>
          <h5>Rs 175,000</h5>
          <button className="plan-btn">Get Started</button>
          <a href="">Book a call</a>
          <div>
            <h5>What's included :</h5>
          <li>Unlimited requests</li>
          <li>Unlimited stock photos</li>
          <li>Unlimited revisions</li>
          </div>
        </section>  
    
        <section>
          <p>ADD-ON</p>
          <h4>Webflow</h4>
          <p>Get a faster and better website</p>
          <h5>Rs 50,000</h5>
        </section>     
      </div>

      <div className="Footer">
        <h1>See if our studio is right for you.</h1>
        <p>Get a guided tour thought, and find out how you and your<br></br>
        team can change the way you source design, forever.</p>
        <button className="plan-btn">Get started</button>
        <div>
        <svg width="120" height="46" viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0.0340909 35V0.0909081H7.29545V13.2159H7.51705C7.83523 12.5114 8.29545 11.7955 8.89773 11.0682C9.51136 10.3295 10.3068 9.71591 11.2841 9.22727C12.2727 8.72727 13.5 8.47727 14.9659 8.47727C16.875 8.47727 18.6364 8.97727 20.25 9.97727C21.8636 10.9659 23.1534 12.4602 24.1193 14.4602C25.0852 16.4489 25.5682 18.9432 25.5682 21.9432C25.5682 24.8636 25.0966 27.3295 24.1534 29.3409C23.2216 31.3409 21.9489 32.858 20.3352 33.892C18.733 34.9148 16.9375 35.4261 14.9489 35.4261C13.5398 35.4261 12.3409 35.1932 11.3523 34.7273C10.375 34.2614 9.57386 33.6761 8.94886 32.9716C8.32386 32.2557 7.84659 31.5341 7.51705 30.8068H7.19318V35H0.0340909ZM7.14205 21.9091C7.14205 23.4659 7.35795 24.8239 7.78977 25.983C8.22159 27.142 8.84659 28.0455 9.66477 28.6932C10.483 29.3295 11.4773 29.6477 12.6477 29.6477C13.8295 29.6477 14.8295 29.3239 15.6477 28.6761C16.4659 28.017 17.0852 27.108 17.5057 25.9489C17.9375 24.7784 18.1534 23.4318 18.1534 21.9091C18.1534 20.3977 17.9432 19.0682 17.5227 17.9205C17.1023 16.7727 16.483 15.875 15.6648 15.2273C14.8466 14.5795 13.8409 14.2557 12.6477 14.2557C11.4659 14.2557 10.4659 14.5682 9.64773 15.1932C8.84091 15.8182 8.22159 16.7045 7.78977 17.8523C7.35795 19 7.14205 20.3523 7.14205 21.9091ZM42.3452 35.5114C39.652 35.5114 37.3338 34.9659 35.3906 33.875C33.4588 32.7727 31.9702 31.2159 30.9247 29.2045C29.8793 27.1818 29.3565 24.7898 29.3565 22.0284C29.3565 19.3352 29.8793 16.9716 30.9247 14.9375C31.9702 12.9034 33.4418 11.3182 35.3395 10.1818C37.2486 9.04545 39.4872 8.47727 42.0554 8.47727C43.7827 8.47727 45.3906 8.75568 46.8793 9.3125C48.3793 9.85795 49.6861 10.6818 50.7997 11.7841C51.9247 12.8864 52.7997 14.2727 53.4247 15.9432C54.0497 17.6023 54.3622 19.5455 54.3622 21.7727V23.767H32.2543V19.267H47.527C47.527 18.2216 47.2997 17.2955 46.8452 16.4886C46.3906 15.6818 45.7599 15.0511 44.9531 14.5966C44.1577 14.1307 43.2315 13.8977 42.1747 13.8977C41.0724 13.8977 40.0952 14.1534 39.2429 14.6648C38.402 15.1648 37.7429 15.8409 37.2656 16.6932C36.7884 17.5341 36.544 18.4716 36.5327 19.5057V23.7841C36.5327 25.0795 36.7713 26.1989 37.2486 27.142C37.7372 28.0852 38.4247 28.8125 39.3111 29.3239C40.1974 29.8352 41.2486 30.0909 42.4645 30.0909C43.2713 30.0909 44.0099 29.9773 44.6804 29.75C45.3509 29.5227 45.9247 29.1818 46.402 28.7273C46.8793 28.2727 47.2429 27.7159 47.4929 27.0568L54.2088 27.5C53.8679 29.1136 53.169 30.5227 52.1122 31.7273C51.0668 32.9205 49.7145 33.8523 48.0554 34.5227C46.4077 35.1818 44.5043 35.5114 42.3452 35.5114ZM71.0327 35.5114C68.3395 35.5114 66.0213 34.9659 64.0781 33.875C62.1463 32.7727 60.6577 31.2159 59.6122 29.2045C58.5668 27.1818 58.044 24.7898 58.044 22.0284C58.044 19.3352 58.5668 16.9716 59.6122 14.9375C60.6577 12.9034 62.1293 11.3182 64.027 10.1818C65.9361 9.04545 68.1747 8.47727 70.7429 8.47727C72.4702 8.47727 74.0781 8.75568 75.5668 9.3125C77.0668 9.85795 78.3736 10.6818 79.4872 11.7841C80.6122 12.8864 81.4872 14.2727 82.1122 15.9432C82.7372 17.6023 83.0497 19.5455 83.0497 21.7727V23.767H60.9418V19.267H76.2145C76.2145 18.2216 75.9872 17.2955 75.5327 16.4886C75.0781 15.6818 74.4474 15.0511 73.6406 14.5966C72.8452 14.1307 71.919 13.8977 70.8622 13.8977C69.7599 13.8977 68.7827 14.1534 67.9304 14.6648C67.0895 15.1648 66.4304 15.8409 65.9531 16.6932C65.4759 17.5341 65.2315 18.4716 65.2202 19.5057V23.7841C65.2202 25.0795 65.4588 26.1989 65.9361 27.142C66.4247 28.0852 67.1122 28.8125 67.9986 29.3239C68.8849 29.8352 69.9361 30.0909 71.152 30.0909C71.9588 30.0909 72.6974 29.9773 73.3679 29.75C74.0384 29.5227 74.6122 29.1818 75.0895 28.7273C75.5668 28.2727 75.9304 27.7159 76.1804 27.0568L82.8963 27.5C82.5554 29.1136 81.8565 30.5227 80.7997 31.7273C79.7543 32.9205 78.402 33.8523 76.7429 34.5227C75.0952 35.1818 73.1918 35.5114 71.0327 35.5114ZM107.229 45.3636C105.274 45.3636 103.638 45.1136 102.32 44.6136C101.001 44.125 99.9446 43.4773 99.1491 42.6705C98.3537 41.875 97.7514 41.0227 97.3423 40.1136L100.956 37.8636C101.229 38.3409 101.581 38.8864 102.013 39.5C102.445 40.125 103.098 40.6648 103.973 41.1193C104.859 41.5852 106.104 41.8182 107.706 41.8182C109.808 41.8182 111.649 41.3068 113.229 40.2841C114.808 39.2614 115.786 37.6591 116.161 35.4773L116.979 30.1591H116.638C116.274 30.6364 115.768 31.2273 115.121 31.9318C114.473 32.625 113.604 33.2443 112.513 33.7898C111.422 34.3239 110.024 34.5909 108.32 34.5909C106.195 34.5909 104.376 34.0909 102.865 33.0909C101.354 32.0909 100.268 30.6364 99.6094 28.7273C98.9616 26.8182 98.8651 24.5 99.3196 21.7727C99.7628 19.0909 100.615 16.7557 101.876 14.767C103.149 12.767 104.717 11.2216 106.581 10.1307C108.445 9.02841 110.479 8.47727 112.683 8.47727C114.388 8.47727 115.695 8.76136 116.604 9.32955C117.524 9.88636 118.195 10.5227 118.615 11.2386C119.036 11.9432 119.354 12.5227 119.57 12.9773H119.979L120.661 8.81818H124.547L120.115 35.75C119.74 38 118.928 39.8295 117.678 41.2386C116.428 42.6591 114.893 43.6989 113.075 44.358C111.257 45.0284 109.308 45.3636 107.229 45.3636ZM109.342 30.9773C110.945 30.9773 112.371 30.608 113.621 29.8693C114.882 29.1307 115.928 28.0682 116.757 26.6818C117.587 25.2955 118.161 23.6364 118.479 21.7045C118.797 19.8182 118.774 18.1534 118.411 16.7102C118.047 15.267 117.359 14.1364 116.348 13.3182C115.348 12.5 114.036 12.0909 112.411 12.0909C110.695 12.0909 109.212 12.5227 107.962 13.3864C106.723 14.25 105.717 15.4091 104.945 16.8636C104.172 18.3182 103.638 19.9318 103.342 21.7045C103.047 23.5227 103.058 25.1307 103.376 26.5284C103.695 27.9148 104.342 29.0057 105.32 29.8011C106.308 30.5852 107.649 30.9773 109.342 30.9773ZM145.82 24.2955L148.411 8.81818H152.433L148.07 35H144.047L144.797 30.5682H144.524C143.706 31.8977 142.564 33.0284 141.098 33.9602C139.632 34.8807 137.911 35.3409 135.933 35.3409C134.297 35.3409 132.899 34.983 131.74 34.267C130.592 33.5398 129.774 32.4489 129.286 30.9943C128.808 29.5284 128.751 27.6818 129.115 25.4545L131.911 8.81818H135.933L133.206 25.1818C132.899 27.0909 133.189 28.6136 134.075 29.75C134.962 30.8864 136.24 31.4545 137.911 31.4545C138.911 31.4545 139.967 31.1989 141.081 30.6875C142.206 30.1761 143.206 29.392 144.081 28.3352C144.967 27.2784 145.547 25.9318 145.82 24.2955ZM162.051 19.25L159.46 35H155.438L159.801 8.81818H163.688L163.006 12.9091H163.347C164.165 11.5795 165.273 10.5114 166.67 9.70455C168.068 8.88636 169.756 8.47727 171.733 8.47727C173.483 8.47727 174.96 8.84091 176.165 9.56818C177.381 10.2841 178.239 11.375 178.739 12.8409C179.25 14.2955 179.324 16.1364 178.96 18.3636L176.165 35H172.142L174.869 18.6364C175.21 16.5909 174.943 14.9886 174.068 13.8295C173.205 12.6705 171.835 12.0909 169.96 12.0909C168.665 12.0909 167.466 12.3693 166.364 12.9261C165.273 13.483 164.347 14.2955 163.585 15.3636C162.835 16.4318 162.324 17.7273 162.051 19.25Z" fill="black"/>
         <path d="M96.7969 19.2841H182.028V22.5568H96.7969V19.2841Z" fill="black"/>
         </svg>
         <p>Beegun studio is headquartered in Mauritius.</p>
         <a href="">☝️</a>
         <a href="">Benefits</a>
         <a href="">Pricing</a>

        </div>
      </div>
   
    </div>
  );
}

export default App;
