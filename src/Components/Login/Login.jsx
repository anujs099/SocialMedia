import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../Redux/uiSlice";

export default function Login() {
  const { users } = useSelector((state) => state.ui);
  const dispatch=useDispatch()
  const redirect = useNavigate();

  function setLogin(values) {
    const user = users.find(
      (item) => item.email === values.email && item.password === values.password
    );

    if (user) {
      redirect("/home");
      dispatch(setAuth(true))
    } else {
    }
  }
  return (
    <div className="d-flex justify-content-center mt-3">
      <Form
        name="login"
        onFinish={setLogin}
        layout="vertical"
        className="border m-2 p-3 w-50"
      >
        <h1 className="text-center text-primary">Login</h1>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Enter a valid email address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"password"}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter password",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="text-center">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>

        <a onClick={() => redirect("/register")} className="underline">
          New User ? Register Here
        </a>
      </Form>
    </div>
  );
}
