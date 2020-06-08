import React, { Component } from 'react';

class Certificate extends Component {
  render() {

    if(this.props.data){
      var certi = this.props.data.certi.map(function(certi){
        var certiImage = 'images/certi/'+certi.image;
        return <div key={certi.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={certi.url} title={certi.title}>
               <img alt={certi.title} src={certiImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certi.title}</h5>
                     <p>{certi.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="Certificate">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Certificates.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certi}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certificate;
