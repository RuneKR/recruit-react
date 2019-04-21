import React, { Component } from "react";
import { Menu as AntdMenu } from "antd";

class Menu extends Component {
  render() {
    return (
      <AntdMenu>
        <AntdMenu.Item key="home">
          <a href="">Home</a>
        </AntdMenu.Item>
        <AntdMenu.Item key="contactus">
          <a href="">Contact Us</a>
        </AntdMenu.Item>
      </AntdMenu>
    );
  }
}
export default Menu;
