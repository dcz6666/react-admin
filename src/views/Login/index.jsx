import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Divider, Form, Input, Button, notification, message } from 'antd'
// import { widthRouter } from 'react-router-dom'
import '@/style/view-style/login.scss'
class Login extends Component {
    state = {
        loading: false
    }
    onFinish = (values) => {
        console.log('Received values of form: 1', values);
        switch (values.username) {
            case 'admin':
                values.auth = 0
                break;
            default:
                values.auth = 1
        }
        localStorage.setItem('user', JSON.stringify(values))
        this.enterLoading()
        this.timer = setTimeout(()=>{
            message.success("登录成功！")
            console.log("this.props",this.props)
            this.props.history.push("/")
        },2000)
    };
    enterLoading=()=>{
        this.setState({loading:true})
    }

    componentDidMount() {
        notification.open({
            message: '欢迎使用后台管理平台',
            duration:3,
            description:'账号 admin(管理员) 其他（游客）密码随意',
        })
    }
    componentWillUnmount(){
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }

    render() {
        let {loading} =this.state
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form name="normal_login" initialValues={{ remember: true }} onFinish={this.onFinish}>
                            <Form.Item name="username" rules={[{ required: true, message: '请您输入您的姓名' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '请输入正确密码' }]} >
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Login