import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const RESPONSIVE_BREAKS = ['span', 'sm', 'md', 'lg'];
const GRID_PREFIX = 'grid';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    span: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  get values(){
    const {span, sm, md, lg} = this.props;
    return RESPONSIVE_BREAKS.map(item=>{
      return this.props[item] ? `${GRID_PREFIX}-${item}-${this.props[item]}` : null;
    })
  }

  render() {
    const {
      className,
      span,
      sm,
      md,
      lg,
      ...props
    } = this.props;

    return (
      <div {...props} className={classNames(
        this.values,
        'react-float-grid', className)}  />
    );
  }
}
