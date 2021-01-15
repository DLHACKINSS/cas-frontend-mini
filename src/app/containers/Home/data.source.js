import React from 'react';
import { Landing, Profile } from './Loadable';

export const Banner01DataSource = {
  wrapper: { className: 'banner0 kizn902x5p-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Điểm đột phá' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578132820447.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Nhóm kín Facebook thảo luận',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578132327681.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Học bất cứ khi nào bạn thích',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://cdn.hachium.com/users/63b473111695d3a2ea83bb8736b484a6/1578132851130.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Sở hữu tài liệu trọn đời',
            },
            {
              name: 'content',
              children: '',
            },
          ],
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://www.flaticon.com/svg/vstatic/svg/2991/2991146.svg?token=exp=1610685369~hmac=660c4bb95388f9ff032fe5b2958d294d',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <p className="my-2">
                  CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ AZUNCE
                </p>
              ),
            },
            {
              name: 'content1',
              children: (
                <p className="my-2">
                  Hà Nội: Tầng 12A, TNR Tower, 54A Nguyễn Chí Thanh, Đống Đa.
                </p>
              ),
            },
            {
              name: 'content2',
              children: (
                <p className="my-2">
                  MST/ĐKKD: xxxxxxx do Sở Kế hoạch và Đầu tư cấp ngày 27/8/2015
                </p>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Sản phẩm' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: 'Compute Service' },
            { name: 'link1', href: '#', children: 'VDC Service' },
            { name: 'link2', href: '#', children: 'Business Email' },
            { name: 'link3', href: '#', children: 'Load Balancer' },
            { name: 'link4', href: '#', children: 'Simple Storage' },
            { name: 'link5', href: '#', children: 'Xem thêm' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Về AZUNCE' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: 'Giới thiệu' },
            { href: '#', name: 'link2', children: 'Tuyển dụng' },
            { href: '#', name: 'link3', children: 'Khách hàng' },
            { href: '#', name: 'link4', children: 'Chính sách bảo mật' },
            { href: '#', name: 'link5', children: 'Các sản phẩm khác' },
            { href: '#', name: 'link6', children: 'Xem thêm' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Địa chỉ' },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <strong>Trụ sở chính:</strong>
                  <p>Tầng 12A, TNR Tower, 54A Nguyễn Chí Thanh, Đống Đa.</p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <strong>Chi nhánh TP.Hồ Chí Minh:</strong>
                  <p>
                    Tầng 1, Lô L 29B-33B Tân Thuận, KCX Tân Thuận, phường Tân
                    Thuận Đông, Quận 7
                  </p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <strong>Chi nhánh TP.Đà Nẵng:</strong>
                  <p>182-184 đường 2/9, quận Hải Châu.</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <p className="pb-1">
          © 2020 TNHH MTV viễn thông quốc tế AZUNCE. All Rights Reserved
        </p>
      </>
    ),
  },
};

export const PackageData = [
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608280755221.jpg',
    title: 'Khóa học bán hàng trên Shopee cho người mới',
    description: 'Bùi Thanh Thịnh',
    price: 499000,
  },
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608281070158.jpg',
    title: 'Khoá học quảng cáo Google mạng tìm kiếm',
    description: 'Bùi Thanh Thịnh',
    price: 399000,
  },
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608276435076.jpg',
    title: 'Khoá học quảng cáo Facebook',
    description: 'Bùi Thanh Thịnh',
    price: 489000,
  },
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608281370861.jpg',
    title: 'Khoá học thiết kế website bán hàng WordPress',
    description: 'Bùi Thanh Thịnh',
    price: 399000,
  },
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608281370861.jpg',
    title: 'Khoá học thiết kế website bán hàng WordPress',
    description: 'Bùi Thanh Thịnh',
    price: 299000,
  },
  {
    image:
      'https://hachium.storage.googleapis.com/users/839565e25cb134b083290afa13615fe9/1608280555623.jpg',
    title: 'Bán hàng trên Youtube hiệu quả',
    description: 'Bùi Thanh Thịnh',
    price: 699000,
  },
];

export const PackageOS = ['OS 1', 'OS 3', 'OS 2'];
export const PackageDuration = [1, 12, 24];

export const CustomPackage = [
  { prefix: 'CPU', suffix: 'vCPU', max: 64 },
  { prefix: 'MEMORY', suffix: 'GB', step: 10, max: 2050 },
  { prefix: 'DISK', suffix: 'GB', step: 10, max: 2050 },
  { prefix: 'SNAPSHOT', suffix: 'GB', step: 10, max: 2050 },
  { prefix: 'BACKUP', suffix: 'GB', step: 10, max: 2050 },
];

export const Region = ['HCM', 'HN'];

export const RouteLanding = [
  {
    path: '/profile',
    login: true,
    component: Profile,
  },
  // { path: '/', component: Landing },
];

export const Content4Products = [
  {
    id: 1,
    name: 'CPU',
    description: 'Intel Xeon',
    is_base: true,
    unit: 'vCPU',
  },
  {
    id: 2,
    name: 'MEMORY',
    unit: 'GB',
    is_base: true,
  },
  {
    id: 3,
    name: 'DISK',
    description: 'Intel Xeon',
    unit: 'GB',
    is_base: true,
  },
  {
    id: 4,
    name: 'SNAPSHOT',
    unit: 'GB',
    is_base: true,
  },
  {
    id: 5,
    name: 'BACKUP',
    unit: 'GB',
    is_base: true,
  },
];
