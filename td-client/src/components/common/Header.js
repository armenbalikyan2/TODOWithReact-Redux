import React from 'react';
import { Breadcrumb } from 'antd';
import {
  UnorderedListOutlined,
  PlusOutlined,
  HomeFilled,
} from '@ant-design/icons';
import './headerStyle.css';

const Header = () => {
  return (
    <div>
      <header />
      <nav>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeFilled />
              <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/list">
              <UnorderedListOutlined />
              <span>Task List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/addTask">
              <PlusOutlined />
              <span>Add Task</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </nav>
    </div>
  );
};
export default Header;
