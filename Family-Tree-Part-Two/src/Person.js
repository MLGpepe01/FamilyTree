import React from 'react';
import classNames from 'classnames';
import styles from './Person.css'; // eslint-disable-line no-unused-vars

class Person extends React.Component {
  renderSubTree(node) {
    if (node.hasSubTree) {
      return <div className={classNames('sub', node.gender)} />;
    }
  }

  render() {
    let rootStyles;
    if (this.props.isRoot) {
      rootStyles = ['inner', this.props.node.gender, 'isRoot'];
    } else {
      rootStyles = ['inner', this.props.node.gender];
    }

    return (
      <div className='root' style={this.props.style}>
        <div
            className={classNames(rootStyles)}
            onClick={() => this.props.handleClick}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
          {this.props.node.id}
        </div>
        {this.renderSubTree(this.props.node)}
      </div>
    );
  }
}

export default Person;
