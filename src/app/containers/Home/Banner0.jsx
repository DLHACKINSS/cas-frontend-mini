import { Carousel, Row } from 'antd';
import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
// import { isImg } from './utils';
import { sampleCarousel } from 'utils/sampleData';

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
              <Row key={key}>
                <img src={item} style={{ margin: '0 auto' }} alt=""></img>
              </Row>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Banner;
