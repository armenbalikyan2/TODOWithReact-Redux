import React from 'react';
import { Menu } from 'antd';
import {
  UnorderedListOutlined,
  PlusOutlined,
  HomeFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">
        <Link to="/">
          <HomeFilled />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/list">
          <UnorderedListOutlined />
          <span>Task List</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/add-task">
          <PlusOutlined />
          <span>Add Task</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default HeaderComponent;
