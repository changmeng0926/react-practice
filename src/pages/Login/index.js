import { Button, Checkbox, Form, Input, Card } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import logo from '@assets/img/logo.jpg'
import useStore from '@/store'
import './index.scss'

function Login() {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async (values) => {
    const { mobile, password } = values
    await loginStore.login({ mobile, password })
    navigate('/', { replace: true })
  }
  const formData = [
    {
      name: 'mobile',
      placeholder: '请输入用户名',
      prefix: <UserOutlined className="site-form-item-icon" />,
      rules: [
        { required: true, message: '请输入手机号!' },
        {
          message: '请输入正确的手机号',
          pattern: /^1[3-9]\d{9}$/,
          validateTrigger: 'onBlur',
        },
      ],
      type: '',
    },
    {
      name: 'password',
      placeholder: '请输入密码',
      prefix: <LockOutlined className="site-form-item-icon" />,
      rules: [
        { required: true, message: '密码必须输入!' },
        { len: 6, message: '请输入6位密码', validateTrigger: 'onBlur' },
      ],
      type: 'password',
    },
  ]
  return (
    <div className="login">
      <Card className="login-container" style={{ width: 500 }}>
        <img src={logo} className="logo" alt="none" />
        <Form
          validateTrigger={['onChange', 'onBlur']}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {formData.map(({ name, placeholder, prefix, rules, type }) => {
            return (
              <Form.Item key={name} name={name} rules={rules}>
                <Input size="large" prefix={prefix} placeholder={placeholder} type={type} />
              </Form.Item>
            )
          })}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>
                我已阅读并同意<span className="agreement-link">「用户协议」</span>和
                <span className="agreement-link">「隐私条款」</span>
              </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
