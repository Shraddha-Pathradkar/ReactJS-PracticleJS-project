import React from "react";
import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import ParticleBackground from "../../particleBackground";

const LoginPage = () => {
  let history = useHistory();

  const onFinish = (userDetails) => {
    history.push({
      pathname: "/home",
      state: { userDetails },
    });
  };
  const responseGoogle = (response) => {
    history.push({
      pathname: "/home",
      state: { response },
    });
  };

  return (
    <React.Fragment>
      <Layout>
        <Sider
          theme="dark"
          width="800"
          style={{
            paddingLeft: " 600px",
            minHeight: 400,
            width: "60%",
          }}
        >
          <ParticleBackground />
        </Sider>

        <Layout>
          <Content>
            <div
              style={{
                background: "#ffff",
                minHeight: "80%",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                style={{
                  minHeight: "200px",
                  paddingTop: "209px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="/#">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  Or <a href="/#">register now!</a>
                  <div className="signIngoogle-wrapper">
                    Or
                    <GoogleLogin
                      className="signIngoogleBtn"
                      clientId={
                        "1041911607548-2lo88ocjd9ji262cmbra7bc24cgrgsn6.apps.googleusercontent.com"
                      }
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    >
                      {/* <SvgIcon name="googlelogo" viewbox="0 0 512 512" /> Sign */}
                      Sign in with Google
                    </GoogleLogin>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default LoginPage;
