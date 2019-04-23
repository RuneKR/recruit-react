import React, { Component } from "react";
import { Layout, Drawer, Icon } from "antd";

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
    const title = (
      <div>
        Menu
        <Icon
          type="arrow-left"
          className="header-menuClose"
          onClick={this.hideMenu}
        />
      </div>
    );

    return (
      <Layout.Header>
        <Drawer
          title={title}
          placement="left"
          closable={false}
          onClose={this.hideMenu}
          visible={this.state.isMenuVisible}
        >
          <div className="header-menu">
            <Menu />
          </div>
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
