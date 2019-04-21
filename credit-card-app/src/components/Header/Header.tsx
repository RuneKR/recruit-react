import React, { Component } from "react";
import { Layout, Button, Drawer, Icon } from "antd";

import "./Header.scss";
import Menu from "../Menu/Menu";

class Header extends Component {
  state = { isMenuVisible: false };

  showMenu = () => {
    this.setState({
      isMenuVisible: true
    });
  };

  hideMenu = () => {
    this.setState({
      isMenuVisible: false
    });
  };

  render() {
    return (
      <Layout.Header>
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={this.hideMenu}
          visible={this.state.isMenuVisible}
        >
          <Menu />
        </Drawer>
        <Icon
          className="header-menuButton"
          onClick={this.showMenu}
          type="menu-unfold"
        />
        <h2 className="header-title">Register card form</h2>
      </Layout.Header>
    );
  }
}

export default Header;
