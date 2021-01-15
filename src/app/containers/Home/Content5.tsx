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
          <h1>Gói Mặc Định</h1>
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
    products: [...props.data.products],
    os: 'OS 1',
    duration: 1,
  });
  const showModal = input => {
    setType(input);
    setShow(true);
  };
  return (
    <Card
      bodyStyle={{ padding: '0 1rem' }}
      style={{ border: 'none', background: 'transparent' }}
      hoverable
      cover={
        <div className="package">
          <div className="package--header">
            <Row justify="center" align="middle" className="title">
              <b>{props.data.name}</b>
            </Row>
            <Divider></Divider>
            <Row justify="center">
              <Title level={2}>{formatPrice(props.data.price)}</Title> VND
            </Row>
            <Row justify="center">
              <Typography.Text>/Tháng</Typography.Text>
            </Row>
          </div>
          <Space direction="vertical" size={6} style={{ width: '100%' }}>
            {props.data.products.map((item, idx) => (
              <Row justify="center" key={idx}>
                {item.name}: {item.quantity} {item.unit}&nbsp;
                {item.description ? (
                  <Typography.Text>({item.description})</Typography.Text>
                ) : (
                  ''
                )}
              </Row>
            ))}
            <Row justify="center">OS:</Row>

            <Row justify="center">
              <Select
                showSearch
                style={{ width: '60%' }}
                placeholder="Select OS"
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                  option.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
                defaultValue={Data.PackageOS[0]}
                onChange={value => setData({ ...data, os: value })}
              >
                {Data.PackageOS.map((item, idx) => (
                  <Option value={item} key={idx}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Row>
            <Row justify="center">DURATION:</Row>
            <Row justify="center">
              <Select
                showSearch
                style={{ width: '60%' }}
                placeholder="Select Duration"
                optionFilterProp="children"
                filterOption={(input: any, option: any) =>
                  option.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
                defaultValue={Data.PackageDuration[0]}
                onChange={value => setData({ ...data, duration: value })}
              >
                {Data.PackageDuration.map((item, idx) => (
                  <Option value={item} key={idx}>
                    {item}&nbsp;tháng
                  </Option>
                ))}
              </Select>
            </Row>
            {user ? (
              <>
                <Row justify="center">
                  <Button
                    type="primary"
                    shape="round"
                    className="mt-2 "
                    onClick={() => showModal('Buy')}
                  >
                    Buy
                  </Button>
                </Row>
                <Row justify="center">
                  <Button
                    shape="round"
                    className="mt-2 "
                    onClick={() => showModal('Trial')}
                  >
                    Trial
                  </Button>
                </Row>
              </>
            ) : (
              <>
                <Row gutter={[0, 64]}></Row>
                <Row justify="center">
                  <Button type="primary" shape="round" className="mt-2 ">
                    <NavLink to="sign-in">
                      Sign In to Buy or Trial &nbsp;
                    </NavLink>
                  </Button>
                </Row>
              </>
            )}
          </Space>

          <PackageModal
            show={show}
            data={data}
            price={props.data.price}
            type={type}
            setShow={() => setShow(false)}
            title={props.data.name}
          />
        </div>
      }
    ></Card>
  );
}
