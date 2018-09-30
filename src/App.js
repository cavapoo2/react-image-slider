import React, { Component } from 'react';
import './App.css';
import Images from './images';
import Button from './button';

class App extends Component {

  constructor(props) {
    super(props);

    let or = window.location.origin;
    this.state = {
      all: [
        { src: or + '/images/as.jpg', alt: "hello as" },
        { src: or + '/images/bs.jpg', alt: "hello bs" },
        { src: or + '/images/cs.jpg', alt: "hello cs" },
        { src: or + '/images/ds.jpg', alt: "hello ds" },
        { src: or + '/images/es.jpg', alt: "hello es" },
        { src: or + '/images/hs.jpg', alt: "hello hs" },
        { src: or + '/images/is.jpg', alt: "hello is" },
        { src: or + '/images/js.jpg', alt: "hello js" },
        { src: or + '/images/ks.jpg', alt: "hello ks" },
        { src: or + '/images/ls.jpg', alt: "hello ls" },
        { src: or + '/images/ms.jpg', alt: "hello ms" },
        { src: or + '/images/ss.jpg', alt: "hello ss" },
        { src: or + '/images/os.jpg', alt: "hello os" },
        { src: or + '/images/ps.jpg', alt: "hello ps" },
        { src: or + '/images/qs.jpg', alt: "hello qs" }
      ],
      idx: [0, 1, 2, 3],
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
//    this.handleDebug = this.handleDebug.bind(this);

  }
  handleLeftClick({ target }) {

    if (this.state.idx[0] === 0) return; // no more left shifts
    let n = this.state.idx.map(v => v - 1);
    this.setState({
      ...this.state.all,
      idx: [...n],
    })

  }
  handleRightClick({ target }) {
    if (this.state.idx[this.state.idx.length - 1] === this.state.all.length - 1) return; // no more right shifts
    let n = this.state.idx.map(v => v + 1);
    this.setState({
      ...this.state.all,
      idx: [...n],
    })
  }
  imagesFromIndex() {
    return this.state.idx.map(i => this.state.all[i]);
  }
  /*
  handleDebug({ target }) {
    console.log('clicked');
    console.log(this.state.idx);
    console.log(this.imagesFromIndex());
  }*/

  render() {
    return (
      <div>
        <div className="imageMain">
          <Button text="Left" handler={this.handleLeftClick} />
          <Images images={this.imagesFromIndex()} />
          <Button text="Right" handler={this.handleRightClick} />
        </div>
       {/* <Button text="Debug" handler={this.handleDebug} />*/}
      </div>
    );
  }
}

export default App;
