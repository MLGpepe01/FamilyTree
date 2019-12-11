import React from 'react';

class NamesList extends React.Component {
  render() {
    let namesLiList = [];
    for (let i in this.props.namesList) {
      let nameString = this.props.namesList[i];
      namesLiList.push(<li key={i}>{nameString}</li>);
    }

    return(
      <ul className="names-list">
        {namesLiList}
      </ul>
    );
  }
}

export default NamesList;
