import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Layout, PageHeader, message } from "antd";
import { Link } from "@reach/router";
import { useNavigate } from "@reach/router";
import { useFirebase } from "../firebase/useFirebase";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const TextLayout = styled.div``;

function PasswordChange() {
  const { passwordchange } = useFirebase();
  const navigate = useNavigate();

  const onFormFinish = async (values) => {
    try {
      await passwordchange (values.email);
      message.success("Email sent");
      navigate("/");
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <MainLayout>
      <PageHeader title="Password Change" />
      <Form onFinish={onFormFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Reset
          </Button>
        </Form.Item>
      </Form>

      <TextLayout>
        Don't have login yet? Register <Link to="/register">here</Link>
      </TextLayout>
    </MainLayout>
  );
}

export default PasswordChange;
