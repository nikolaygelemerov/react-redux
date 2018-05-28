import React, { Fragment, Component } from 'react';

import styles from './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    //console.log('Modal did update');
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show
              ? 'translate(-50%, -50%)'
              : 'translate(-100vh, -100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
