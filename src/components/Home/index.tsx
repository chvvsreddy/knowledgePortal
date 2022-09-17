import React from 'react'
import { Col, Row, Tabs } from 'antd';
import './index.css'
import CourseItem from '../MyCourses/CourseItem';
import CourseFilter from '../MyCourses/CourseFilter';


const { TabPane } = Tabs;
const onChange = (key: string) => {
    console.log(key);
};

const Home = () => {
    return (
        <>
            <h1 className='mt-30'>Online Courses</h1>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Computer Science" key="1">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
                <TabPane tab="Data Science" key="2">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
                <TabPane tab="Business & Management" key="3">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
                <TabPane tab="Creative Arts & Media " key="4">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
                <TabPane tab="Healthcare & Medicine" key="5">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
                <TabPane tab="IT & Computer Science" key="6">
                    <Row gutter={24}>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                        <Col span={6}><CourseItem /></Col>
                    </Row>
                </TabPane>
            </Tabs>

            <div className='popular-courses'>
                <h2>Popular categories</h2>
                <Row gutter={24}>
                    <Col span={6} ><a href=''>Design</a></Col>
                    <Col span={6} ><a href=''>Development</a></Col>
                    <Col span={6} ><a href=''>Marketing</a></Col>
                    <Col span={6} ><a href=''>IT and Software</a></Col>
                    <Col span={6} ><a href=''>Personal Development</a></Col>
                    <Col span={6} ><a href=''>Business</a></Col>
                    <Col span={6} ><a href=''>Photography</a></Col>
                    <Col span={6} ><a href=''>Music</a></Col>
                </Row>
            </div>

            <div className='search-courses'>
                <h2>Search Courses</h2>
                <Row gutter={24}>
                    <Col span={6} ><CourseFilter /></Col>
                    <Col span={18} >
                        <Row gutter={24}>
                            <Col span={8}><CourseItem /></Col>
                            <Col span={8}><CourseItem /></Col>
                            <Col span={8}><CourseItem /></Col>
                            <Col span={8}><CourseItem /></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default Home