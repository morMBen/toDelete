import React from 'react';
// import LargeHeading from './LargeHeading';

class Card extends React.Component {
  state = { name: 'Reut' };
  func() {
    // this.setState((prev) => {
    //   console.log(prev.name);
    // });

    this.setState({ name: 'Yoni' });
    this.setState((pervState, prevProps) => {
      return pervState.name + ' Yoni';
    });
    this.setState({ name: this.state.name + ' Yoni' });
  }
  render() {
    return (
      <div className='card'>
        <button
          onClick={() => {
            this.func();
          }}
        >
          click
        </button>
        {/* {this.func()} */}
        {/* <LargeHeading webHeadingName={this.props.webHeadingName} /> */}
        <p>{this.props.text}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
