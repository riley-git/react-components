import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
    
      let tabClass = 'transition-transform text-gray-400 duration-200 font-display font-regular pb-2 pt-2 inline-block list-none px-2 mr-4 cursor-pointer';
      let tabAdd = ' border-green-500 border-b-4 text-green-500 font-bold';
      if (activeTab === label) {
        tabClass = tabClass.concat(tabAdd) ;
      }
  
      return (
        <li
          style={{ marginBottom: "-4px" }}
          className={tabClass}
          onClick={onClick}
        >
          {label}
        </li>
      );
    }
  }
  
  export default Tab;