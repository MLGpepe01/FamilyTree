import React from 'react';
import ReactFamilyTree from 'react-family-tree';
import Person from './Person';
import InfoBox from './InfoBox';
import styles from './App.css'; // eslint-disable-line no-unused-vars

import data from './example_data';
const rootId = 'Homer';
const familyNamesList = ["homer", "Marge", "Lisa", "Bart", "Herb", "Abraham", "Moana"];

const WIDTH = 70;
const HEIGHT = 80;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    }
  }

  renderPerson(node) {
    let dx = node.left * (WIDTH / 2);
    let dy = node.top * (HEIGHT / 2);
    let style = {
      width: WIDTH,
      height: HEIGHT,
      transform: `translate(${dx}px, ${dy}px)`,
    };
    return (
      <Person
          key={node.id}
          node={node}
          isRoot={node.id === rootId}
          style={style}
          handleClick={() => {console.log()}}
          type={node.type} />
    );
  }
//Change click handler in <App> to set 'info' state to the current person's node
  render() {
    return (
      <div className='root'>
        <ReactFamilyTree
            nodes={data}
            rootId={rootId}
            width={WIDTH}
            height={HEIGHT}
            canvasClassName='tree'
            renderNode={(node) => this.renderPerson(node)} />
        <InfoBox
            namesList={familyNamesList}
            info={this.state.info} />
      </div>
    );
  }
}

export default App;
