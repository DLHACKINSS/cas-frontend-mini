import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import {
  Button,
  Card,
  Carousel,
  Divider,
  notification,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatPrice } from 'utils/formatPrice';
import { selectAccount } from '../Auth/selectors';
import { selectError, selectNotice, selectRegion } from '../Orders/selectors';
import { actions } from '../Orders/slice';
import * as Data from './data.source';
import Effect from './Effect';
import PackageModal from './PackageModal';

const { Option } = Select;
export default function Content5(props) {
  const notice = useSelector(selectNotice);
  const error = useSelector(selectError);
  const region = useSelector(selectRegion);
  const dispatch = useDispatch();
  const refCarousel: any = useRef(null);

  useEffect(() => {
    if (notice || error) {
      const status = notice ? 'success' : 'error';
      notification[status]({
        message: notice ? notice : error,
        placement: 'bottomRight',
        duration: 5,
      });
    }
  });

  const children = () => (
    <>
      <Row justify="space-between" gutter={[0, 24]}>
        <LeftCircleTwoTone
          className="direct-button"
          onClick={() => refCarousel.current.prev()}
        />
        <Typography.Text>
          Khu vực:&nbsp;
          <Select
            value={Data.Region[region]}
            style={{ width: '5rem' }}
            onChange={value => dispatch(actions.setRegion(value))}
          >
            {Data.Region.map((item, idx) => (
              <Select.Option value={idx} key={idx}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Typography.Text>
        <RightCircleTwoTone
          className="direct-button"
          onClick={() => refCarousel.current.next()}
        />
      </Row>
      <Carousel
        ref={refCarousel}
        draggable={true}
        speed={500}
        key="block0"
        slidesToShow={4}
        slidesToScroll={2}
        dots={false}
      >
        {Data.PackageData.map((item, idx) => (
          <DisplayPackage data={item} key={idx} />
        ))}
      </Carousel>
    </>
  );
  return (
    <div className="home-page-wrapper content5-wrapper">
      <div className="home-page content5">
        <div key="title" className="title-wrapper">
          <h1>Khóa học</h1>
        </div>
        <Effect children={children()} />
      </div>
    </div>
  );
}

function DisplayPackage(props) {
  const user = useSelector(selectAccount);
  const [show, setShow] = useState(false);
  const [type, setType] = useState('Trial');
  const [data, setData] = useState({
    os: 'OS 1',
    duration: 1,
  });
  const showModal = input => {
    setType(input);
    setShow(true);
  };
  return (
    <Card
      hoverable
      cover={<img alt="example" src={props.data.image} />}
      style={{ height: '20rem' }}
    >
      <Card.Meta
        title={props.data.title}
        description={props.data.description}
      />
      <PackageModal
        show={show}
        data={data}
        price={props.data.price}
        setShow={() => setShow(false)}
        title={props.data.title}
      />
      <Row justify="end">
        <Button size="large" type="primary" ghost onClick={() => setShow(true)}>
          <Typography.Title level={4}>
            {formatPrice(props.data.price)}
          </Typography.Title>
        </Button>
      </Row>
    </Card>
  );
}
