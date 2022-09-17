import React from 'react'
import { Row, Col, Form, Button, Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const CreateCourseStudentRequest = () => {
    return (
        <>
            <Form layout="vertical">
                <Row gutter={24}>
                    <Col span={24}>
                        Type: &nbsp;
                        <Button.Group className="round-button mb-30" >
                            <Button value="large" type="primary">Online class</Button>
                            <Button value="default">Online course</Button>
                        </Button.Group>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Course Title:" name="">
                            <Input placeholder="First name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Level:" name="">
                            <Select placeholder="Select a option" allowClear>
                                <Option value="Beginer">Beginer</Option>
                                <Option value="Intemediate">Intemediate</Option>
                                <Option value="Advanced">Advanced</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Category:" name="">
                            <Select placeholder="Select a option" allowClear>
                                <Option value="Category">Category 1</Option>
                                <Option value="Category">Category 2</Option>
                                <Option value="Category">Category 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Sub Category:" name="">
                            <Select placeholder="Select a option" allowClear>
                                <Option value="Sub Category">Sub Category 1</Option>
                                <Option value="Sub Category">Sub Category 2</Option>
                                <Option value="Sub Category">Sub Category 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Course Title:" name="">
                            <TextArea rows={4} />
                        </Form.Item>

                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CreateCourseStudentRequest