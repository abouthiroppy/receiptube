import React from './../../../bower_components/react/react.js'

class SearchVideoCard extends React.Component {
  var cards = this.state.users.map((card) => {

  });
  render() {
    return (
      <div className='card small'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img src='http://up.gc-img.net/post_img_web/2014/03/ead738bfc1ad2e04a657e2ddf2ac0002_22243.jpeg' />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>Title<i className='material-icons right'>more_vert</i></span>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    );
  }
}

var container = document.querySelector('#search-video-list')

React.render(<SearchVideoCard />, container)
