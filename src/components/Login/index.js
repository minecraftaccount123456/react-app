import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../firebaseconfig';

const { Title } = Typography;
const fbProvider = new FacebookAuthProvider();

function Login() {

    const handleClick = () => {
        signInWithPopup(auth, fbProvider)
    }

    return (
        <div className='login'>
            <Row justify='center'>
                <Col span={6}>
                    <Title style={{ textAlign: 'center' }} level={3} >Đăng nhập</Title>
                    <Button style={{ width: '100%', marginTop: 5 }}>Đăng nhập bằng Google</Button>
                    <Button style={{ width: '100%' }} onClick={handleClick}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Login;