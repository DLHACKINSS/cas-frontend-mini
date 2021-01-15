import { Carousel, Row, Space, Typography } from 'antd';
import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
// import { isImg } from './utils';

const sampleCarousel = [
  {
    image:
      'https://bizflycloud.mediacdn.vn/thumb_wm/825,100/bizflycloud/images/ima16069887512971.png',
    des: 'Được học từ những người giỏi nhất',
  },
  {
    image:
      'https://bizflycloud.mediacdn.vn/thumb_wm/825,100/bizflycloud/images/pic16000509903655.png',
    des: 'Giúp bạn hiểu khách hàng hơn, cung cấp dịch vụ tốt hơn',
  },
  {
    image:
      'https://bizflycloud.mediacdn.vn/thumb_wm/825,100/bizflycloud/images/ban15965247537094.png',
    des: 'Giải pháp thanh toán tiện lợi với các nền tảng phổ biến',
  },
];
class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <div className="carousel">
          <Carousel autoplay draggable={true} speed={1000} className="w-100">
            {sampleCarousel.map((item, key) => (
              <div key={key}>
                <Row justify="center">
                  <Space size="middle" direction="vertical">
                    <img
                      src={item.image}
                      style={{ margin: '0 auto', maxHeight: '479px' }}
                      alt=""
                    ></img>
                    <Typography.Title style={{ color: 'white' }}>
                      {item.des}
                    </Typography.Title>
                  </Space>
                </Row>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Banner;
