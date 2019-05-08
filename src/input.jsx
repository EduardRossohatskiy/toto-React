import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onKeyUp={this.props.onKeyUp}
      />
    );
  }
}
export default Input;