import './dev.scss';
import {Row, Col} from './main';

/*===example start===*/

// install: npm install afeiship/react-float-grid --save import : import
// ReactFloatGrid from 'react-float-grid'

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-float-grid">
        <h3>Grid/Responsive</h3>
        <Row gutter={10}>
          <Col span={12} className="item">
            <div className="bd">
              item</div>
          </Col>
          <Col span={12} className="item">
            <div className="bd">item</div>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={8} className="item">
            <div className="bd">
              item</div>
          </Col>
          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>

          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>

          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>

          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>

          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>

          <Col span={8} className="item">
            <div className="bd">item</div>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">
              item</div>
          </Col>
          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>

          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>

          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>

          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>

          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>

          <Col sm={24} md={12} lg={4} className="item">
            <div className="bd">item</div>
          </Col>
        </Row>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App/>, document.getElementById('app'));
