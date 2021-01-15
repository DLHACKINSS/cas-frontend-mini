import {
  CaretDownOutlined,
  FacebookFilled,
  MailFilled,
  PhoneFilled,
  YoutubeFilled,
} from '@ant-design/icons';
import { Button, Col, Divider, Dropdown, Menu, Row, Space } from 'antd';
import ENicon from 'assets/icon/nation_flag/um.svg';
import VNicon from 'assets/icon/nation_flag/vn.svg';
import logo from 'assets/img/logo/logo_2017.svg';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useInjectReducer } from 'utils/redux-injectors';
import { selectAccount } from '../Auth/selectors';
import { reducer, sliceKey } from '../Auth/slice';
import AvatarUser from '../Dashboard/AvatarUser';
import './less/style.less';

function Header(props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [currentLanguage, setCurrentLanguage] = useState('VN');
  const [isScroll, setIsScroll] = useState('text-white');
  const refHeader = useRef();
  const account = useSelector(selectAccount);
  const language = (
    <Menu onClick={value => setCurrentLanguage(value.key)} className="language">
      <Menu.Item key="VN">
        <Row justify="space-between">
          <img src={VNicon} className="nation-icon" alt=""></img>
          VN
        </Row>
      </Menu.Item>
      <Menu.Item key="EN">
        <Row justify="space-between">
          <img src={ENicon} className="nation-icon" alt=""></img>
          EN
        </Row>
      </Menu.Item>
    </Menu>
  );
  const product = (
    <Menu>
      <Menu.Item>
        <a href="/#custom_package">Compute</a>
      </Menu.Item>
      <Menu.Item>VDC</Menu.Item>
    </Menu>
  );
  const support = (
    <Menu>
      <Menu.Item>Tài liệu</Menu.Item>
      <Menu.Item>FAQ</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    let element = refHeader.current.childNodes;
    let headerStyle = refHeader.current.style;
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        element[1].style.display = 'none';
        headerStyle.top = '-2.2rem';
        headerStyle.height = '5.7rem';
        headerStyle.backgroundColor = 'white';
        headerStyle.paddingTop = '5px';
        headerStyle.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
        headerStyle.transition = 'top 1s ease';
        setIsScroll('text-black');
      } else {
        headerStyle.height = '6.5rem';
        element[1].style.display = 'flex';
        headerStyle.top = 0;
        setIsScroll('text-white');
        headerStyle.backgroundColor = '#093C6E';
        headerStyle.paddingTop = '0';
        headerStyle.boxShadow = '0';
        headerStyle.transition = 'top 0s ';
      }
    });
  }, []);
  return (
    <div className="header-landing" ref={refHeader}>
      <Row align="middle" className="header-landing--top">
        <Col span={2} push={1}>
          <Space size={24}>
            <NavLink to="/">
              <FacebookFilled />
            </NavLink>
            <NavLink to="/">
              <YoutubeFilled />
            </NavLink>
          </Space>
        </Col>
        <Col span={21}>
          <Row justify="end">
            <Space size={50}>
              <Dropdown
                overlay={language}
                placement="bottomCenter"
                arrow={true}
              >
                <Button type="link" className="pr-0">
                  {currentLanguage}
                  <CaretDownOutlined />
                </Button>
              </Dropdown>
              <span>
                <PhoneFilled />
                &nbsp; Hotline: 024 7300 2222
              </span>
              <span>
                <MailFilled />
                &nbsp; Email: ftel.ftihn.idc@fpt.com.vn
              </span>
            </Space>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={22} push={1}>
          <Divider className="header-landing--divider"></Divider>
        </Col>
      </Row>

      <Row wrap={false} className="header-landing--bottom">
        <Col span={2} push={1}>
          <NavLink to="/">
            <img src={logo} width={90} alt=""></img>
          </NavLink>
        </Col>
        <Col span={21} className="right">
          <Row justify="end">
            <Menu
              mode="horizontal"
              style={{
                backgroundColor: 'transparent',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 5,
              }}
            >
              <Menu.Item key="1">
                <Dropdown
                  overlay={product}
                  placement="bottomCenter"
                  arrow={true}
                >
                  <Button
                    type="link"
                    className={`${isScroll}`}
                    style={{ padding: 0 }}
                  >
                    SẢN PHẨM
                    <CaretDownOutlined />
                  </Button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="2">
                <Dropdown
                  overlay={support}
                  placement="bottomCenter"
                  arrow={true}
                >
                  <Button
                    type="link"
                    className={`${isScroll}`}
                    style={{ padding: 0 }}
                  >
                    HỖ TRỢ
                    <CaretDownOutlined />
                  </Button>
                </Dropdown>
              </Menu.Item>
              {account ? (
                <>
                  <Menu.Item key="3" style={{ marginRight: 0 }}>
                    <NavLink
                      to="/dashboard/compute/instances"
                      className={`${isScroll}`}
                    >
                      DASHBOARD
                    </NavLink>
                  </Menu.Item>
                  <div style={{ marginLeft: '3rem' }}>
                    <AvatarUser user={props.user} />
                  </div>
                </>
              ) : (
                <>
                  <Menu.Item key="3">
                    <NavLink to="sign-in" className={`${isScroll}`}>
                      SIGN IN
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="4" style={{ marginRight: 0 }}>
                    <NavLink to="sign-up" className={`${isScroll}`}>
                      SIGN UP
                    </NavLink>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
