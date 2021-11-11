import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const { SubMenu } = Menu;
const Navbar = ({ userDetails }) => {
  let history = useHistory();
  const handleLoginClick = (details) => {
    history.push({
      pathname: "/login",
      //  state: { details }
    });
  };
  console.log(userDetails.imageUrl);
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>
        <Link to="/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Menu mode="horizontal" className="other-menus">
      {userDetails ? (
        <Dropdown overlay={menu} className="profile-dropdown">
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            href="/#"
          >
            <div className="headeravatar">
              <Avatar image={userDetails.imageUrl} alt={"alt"} />{" "}
            </div>
            {userDetails.userName}
          </a>
        </Dropdown>
      ) : (
        <Menu.Item
          className="login-btn"
          key="login"
          onClick={handleLoginClick}
          icon={<UserOutlined />}
        >
          Login
        </Menu.Item>
      )}
    </Menu>
  );
};
export default Navbar;
