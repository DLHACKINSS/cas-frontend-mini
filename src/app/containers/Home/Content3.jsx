import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import Effect from './Effect';

const sampleData = [
  {
    image:
      'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578034589245.png',
    des:
      'Mình đã học khoá học này của Thịnh và cảm thấy rất hài lòng, Thịnh hướng dẫn rất tận tình và giúp mình mở mang ra rất nhiều kiến thức về Marketing Online. Từ đó mà doanh số của spa cũng tăng lên rất đáng kể và hiện tại vẫn đang theo Thịnh học những kiến thức khác về Marketing Online.',
  },
  {
    image:
      'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578034576929.png',
    des:
      'Mình là dân làm SEO thuần tuý, chưa từng động vào quảng cáo Facebook. Đến khi mình cần Facebook Ads để gia tăng lợi nhuận, mình đã chọn Thanh Thịnh Bùi Team là một điểm đến tin cậy.',
  },
  {
    image:
      'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578034547755.png',
    des:
      'Mình tham gia khoá học quảng cáo trên Facebook của Thanh Thịnh Bùi được hơn 2 tháng thấy các module bài của Thịnh rất hữu ích, cách Thịnh hướng dẫn target lại audience rất hiệu quả giúp mình tiếp cận được đúng tối tượng và cải thiện đơn hàng.',
  },
];
class Content3 extends React.PureComponent {
  // displayBrand = () => (
  //   <img
  //     src="https://upload.wikimedia.org/wikipedia/vi/a/a2/FPT_Telecom_logo.svg"
  //     width="27%"
  //     alt="img"
  //     className="our-customer"
  //     style={{ marginBottom: '2rem' }}
  //   />
  // );
  children = () => (
    <Row justify="space-between">
      {sampleData.map((item, key) => (
        <Col span={6}>
          <Row justify="center">
            <img
              src={item.image}
              key={key}
              width="35%"
              alt="img"
              className="our-customer"
              style={{ marginBottom: '2rem', borderRadius: '50%' }}
            />
          </Row>
          <Row justify="center">
            <Typography
              style={{
                height: '7rem',
                overflow: 'hidden',
              }}
            >
              {item.des}
            </Typography>
          </Row>
        </Col>
      ))}
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
