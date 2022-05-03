import React from 'react'
import { Button, Row, Col, Typography } from 'antd'
import { auth } from '../../firebaseconfig'

const { Title } = Typography


function Shop() {
  return (
    <>
            <Row justify='center'>
                <Col span={3}>
                    <Title style={{ textAlign: 'center' }} level={3} >Home</Title>
                    <Button onClick={() => {auth.signOut()}} style={{ width: '100%' }}>Đăng xuất</Button>
                </Col>
            </Row>
    </>
  )
}

export default Shop;
