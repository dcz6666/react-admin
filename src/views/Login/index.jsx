import React, { Component } from 'react'
import { Layout, Divider,Form, Input,Button } from 'antd'
import {widthRouter} from 'react-router-dom'
import '@/style/view-style/login.scss'
class Login extends Component {
    render() {
        console.log("this.props.form",this.props.form);
        const {getFieldDecorator} =this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form>
                            <Form.Item>
                               {getFieldDecorator('usename',{
                                    rules:[{required: true,message: '请输入用户名!'}]
                               })(
                                <Input placeholder="用户名"/>
                               )}
                            </Form.Item>

                            <Form.Item>
                                {getFieldDecorator('password',{
                                    rules:[{required: true,message: '请输入密码!'}]
                                })(
                                 <Input.Password placeholder="密码"/>
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button className='login-form-button' type="primary">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}
// export default widthRouter(Form.create()(Login))
export default Form.create()(Login)