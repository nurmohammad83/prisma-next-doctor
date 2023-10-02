import React from 'react';
import { Layout, Menu, } from 'antd';

const { Header } = Layout;
interface IProps {
  items:{key:number,label:string}[]
}
const Navbar = ({items}:IProps) => {

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;