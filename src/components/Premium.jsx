import React from 'react';
import styled from 'styled-components';

const Premium = () => {
  return (
    <>
    <h4 className='premium_head'>Subscribe now and start streaming</h4>
        <StyledWrapper className='premium' style={{height:'100vh'}}>
          <div className="cards__inner me-5" style={{width:'500px'}}>
            <div className="cards__card card">
              <p className="card__heading">Free Plan</p>
              <p className="card__price">$0/month</p>
              <ul className="card_bullets flow" role="list">
                <li>Watch Live sports</li>
                <li>Daily Sports news</li>
                <li>Live chat </li>
              </ul>
              <a className="card__cta cta" href="#basic">Get Started</a>
            </div>
            <div className="overlay cards__inner" />
          </div>
          {/* Card 2 */}
          <div className="cards__inner ms-3" style={{width:'500px'}}>
            <div className="cards__card card">
              <p className="card__heading">Premium</p>
              <p className="card__price">$49/month</p>
              <ul className="card_bullets flow" role="list">
                <li>Access to all features</li>
                <li>High quality streaming</li>
                <li>No ads</li>
              </ul>
              <a className="card__cta cta" href="#basic">Get Started</a>
            </div>
            <div className="overlay cards__inner" />
          </div>
        </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .main__heading {
    font-weight: 600;
    font-size: 2.25em;
    margin-bottom: 0.75em;
    text-align: center;
    color: #eceff1;
  }

  .cards {
    position: relative;
  }

  .card {
    --flow-space: 0.5em;
    --hsl: var(--hue), var(--saturation), var(--lightness);
    flex: 1 1 14rem;
    padding: 1.5em 2em;
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    align-items: start;
    gap: 1.25em;
    color: #eceff1;
    background-color: #2b2b2b;
    border: 1px solid #eceff133;
    border-radius: 15px;
  }

  .card:nth-child(1) {
    --hue: 165;
    --saturation: 82.26%;
    --lightness: 51.37%;
  }

  .card__bullets {
    line-height: 1.4;
  }

  .card__heading {
    font-size: 1.05em;
    font-weight: 600;
  }

  .card__price {
    font-size: 1.75em;
    font-weight: 700;
  }

  .flow > * + * {
    margin-top: var(--flow-space, 1.25em);
  }

  .cta {
    display: block;
    align-self: end;
    margin: 1em 0 0.5em 0;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    outline: 1px solid white;
    padding: 0.7em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
  }

  .card:hover {
    --lightness: 80%;
    background: #ffffff80;
    color: #000;
    outline: 1px solid rgb(255, 255, 255);
    box-shadow: inset 0 0 80px whitesmoke, inset 20px 0 80px rgba(255, 0, 255, 0.747),
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
    transition: all ease-in-out 0.3s;
  }

  .card:hover > .cta {
    outline: none;
    background-color: #0d0d0d;
  }`;

export default Premium;
