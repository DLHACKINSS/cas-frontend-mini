import { Row } from 'antd';
import React from 'react';
import Effect from './Effect';

class Content3 extends React.PureComponent {
  displayBrand = () => (
    <img
      src="https://upload.wikimedia.org/wikipedia/vi/a/a2/FPT_Telecom_logo.svg"
      width="27%"
      alt="img"
      className="our-customer"
      style={{ marginBottom: '2rem' }}
    />
  );
  children = () => (
    <Row justify="space-between">
      {this.displayBrand()}
      {this.displayBrand()}
      {this.displayBrand()}
      {this.displayBrand()}
      {this.displayBrand()}
      {this.displayBrand()}
    </Row>
  );
  render() {
    return (
      <div className="home-page-wrapper content3-wrapper">
        <div className="home-page content3">
          <div className="title-wrapper">
            <h1>Khách Hàng Tin Dùng</h1>
          </div>
          <Effect children={this.children()} />
        </div>
      </div>
    );
  }
}

export default Content3;
