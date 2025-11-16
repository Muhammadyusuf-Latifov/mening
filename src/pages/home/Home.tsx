import { memo } from "react";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type FieldType = {
  full_name?: string;
  last_name?: string;
  email?: string;
};

const App: React.FC = () => {
  const [form] = Form.useForm(); // 👉 form instance
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    axios.post("https://68d519fce29051d1c0ad51ee.mockapi.io/user", values);

    form.resetFields();
    navigate("/finish");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="w-[full] h-screen flex items-center justify-center">
      <div className="container ">
        <Form
          className=""
          layout="vertical"
          form={form} // 👉 form instance ni ulash shart
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Ismingizni kiriting"
            name="full_name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Familyangizni  kiriting"
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email manzilingizni  kiriting"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email"/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(App);
