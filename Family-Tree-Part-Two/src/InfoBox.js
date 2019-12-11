import React from 'react';
import NamesList from './NamesList';

class InfoBox extends React.Component {
  render() {
    return(
      <div className="info-box">
        Use the info prop here.
        <NamesList namesList={this.props.namesList} />
      </div>
    );
  }
}

export default InfoBox;
