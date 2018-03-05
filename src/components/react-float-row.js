import React, {PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const UNIT = 'px';
const GRID_PREFIX = 'grid';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    gutter: PropTypes.number
  };

  static defaultProps = {
    gutter: 0
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  get children(){
    const { children, gutter } = this.props;
    return children.map((child,index)=>{
      const { style, ...props } = child.props;
      const _style = objectAssign( {
        key:index,
        style:{
          paddingLeft : gutter / 2 + UNIT,
          paddingRight : gutter / 2 + UNIT,
        }
      }, style );
      const newProps = objectAssign( _style, props );
      return cloneElement(child, newProps);
    });
  }

  render() {
    const {
      className,
      children,
      gutter,
      style,
      ...props
    } = this.props;

    const _style = objectAssign({
      marginLeft: -gutter/2 + UNIT,
      marginRight: -gutter/2 + UNIT,
    }, style );

    return (
      <section {...props} className={classNames(`${GRID_PREFIX}-row`,'react-float-grid', className)} style={_style}>
        { this.children }
      </section>
    );
  }
}
