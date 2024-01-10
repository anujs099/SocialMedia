import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setUsers } from "../Redux/uiSlice";
import { useNavigate } from "react-router-dom";


function Register() {
  const dispatch = useDispatch();
  const redirect=useNavigate()

  function registerForm(values) {
    redirect("/login");
    dispatch(
      setUsers({
        email: values.email,
        password: values.password,
      })
    );
  }
  return (
    <div className="d-flex justify-content-center mt-3">
      <Form
        name="Register"
        onFinish={registerForm}
        layout="vertical"
        className="border m-2 p-3 w-50"
      >
        <h3 className="text-center text-primary">Register</h3>
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="text-center">
          <Button type="primary" htmlType="submit" className="mx-1">
            Register
          </Button>
          <Button type="primary" onClick={()=>{redirect('/login')}}>
             Back
          </Button>
        </div>
      </Form>
    </div>
  );
}

export { Register };
