import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, type, image, link, fadeInRefs }) =>  {
	return (
    <Link to={link}>
    <div
    className="main-card fade-in"
                style={{ backgroundImage: `url(${image})` }}
                ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                <div className="sub-card">
                    <div className="card-content">
                        <div className="main-heading">{title}</div>
                        <div className="heading-type">{type}</div>
                    </div>
                </div>
            </div>
    </Link>
	);
  }
  
  export default Card;
  