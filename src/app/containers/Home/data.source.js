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
    children: [{ name: 'title', children: 'Dịch Vụ' }],
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
                'https://bizflycloud.mediacdn.vn/bizflycloud/69/1/2020/06/29/15/57/clo15933994766576.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Virtual Datacenter',
            },
            {
              name: 'content',
              children:
                'Khởi tạo nhanh chóng, cấu hình mạnh mẽ, thay đổi linh hoạt, cung cấp toàn quyền điều khiển cho người dùng',
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
                'https://bizflycloud.mediacdn.vn/bizflycloud/69/1/2020/06/29/15/57/clo15933994766576.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Virtual Datacenter',
            },
            {
              name: 'content',
              children:
                'Khởi tạo nhanh chóng, cấu hình mạnh mẽ, thay đổi linh hoạt, cung cấp toàn quyền điều khiển cho người dùng',
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
                'https://bizflycloud.mediacdn.vn/bizflycloud/69/1/2020/06/29/15/57/clo15933994766576.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Virtual Datacenter',
            },
            {
              name: 'content',
              children:
                'Khởi tạo nhanh chóng, cấu hình mạnh mẽ, thay đổi linh hoạt, cung cấp toàn quyền điều khiển cho người dùng',
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
            'https://upload.wikimedia.org/wikipedia/vi/a/a2/FPT_Telecom_logo.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <p className="my-2">CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT</p>
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
        title: { children: 'Về FTI VDC' },
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
          © 2020 TNHH MTV viễn thông quốc tế FPT. All Rights Reserved
        </p>
      </>
    ),
  },
};

export const PackageData = [
  {
    name: 'Basic-Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
  },
  {
    name: 'Basic-Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
  },
  {
    name: 'Basic-Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
  },
  {
    name: 'Basic-Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
  },
  {
    name: 'Basic-Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
  },
  {
    name: 'Basic Small',
    price: 880000,
    products: [
      {
        id: 1,
        name: 'CPU',
        quantity: 1,
        description: 'Intel Xeon',
        is_base: true,
        unit: 'vCPU',
      },
      {
        id: 2,
        name: 'MEMORY',
        quantity: 4,
        unit: 'GB',
        is_base: true,
      },
      {
        id: 3,
        name: 'DISK',
        quantity: 60,
        description: 'Intel Xeon',
        unit: 'GB',
        is_base: true,
      },
    ],
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
