import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

const HomePage = () => {
  let history = useHistory();

  const handleLoginClick = (details) => {
    history.push({
      pathname: "/login",
      //  state: { details }
    });
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">one</Menu.Item>

      <SubMenu key="SubMenu" title="two">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="login" onClick={handleLoginClick} icon={<UserOutlined />}>
        Login
      </Menu.Item>
    </Menu>
  );
};

export default HomePage;
