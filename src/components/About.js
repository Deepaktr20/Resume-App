import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I am Deepak, I am from Ajjampura Chikkamagaluru which is also called as Land of Coffee, I completed my Engineering in Dayanand Sagar College of Engineering,Bangalore.
            I scored more than 85% in the Engineering which shows that I was very sincere in Academics and I also got so many awards in sports also like cricket, Volleyball etc. 
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Thimmapura,Karnataka
              </p>
              <p>
                <strong>Email:</strong> trdeepak093@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 9902443408
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Kannada
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
              <p>
                <strong>Third Language</strong> - Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
