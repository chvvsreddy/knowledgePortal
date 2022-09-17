import React from 'react'
import { Collapse, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { StarFilled } from '@ant-design/icons';

const { Panel } = Collapse;
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const CourseFilter = () => {
    return (
        <div>
            <Collapse bordered={false} defaultActiveKey={['1']} ghost>
                <Panel header="Category" key="1">
                    <Checkbox onChange={onChange} checked>Computer Science</Checkbox>
                    <Checkbox onChange={onChange}>Data Science</Checkbox>
                    <Checkbox onChange={onChange}>Business & Management</Checkbox>
                </Panel>
                <Panel header="Sub Category" key="2">
                    <Checkbox onChange={onChange}>C Programming</Checkbox>
                    <Checkbox onChange={onChange}>Django</Checkbox>
                    <Checkbox onChange={onChange}>Java</Checkbox>
                    <Checkbox onChange={onChange}>JavaScript</Checkbox>
                </Panel>
                <Panel header="Rating" key="3">
                    <Checkbox onChange={onChange}>Any</Checkbox>
                    <Checkbox onChange={onChange}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Checkbox>
                    <Checkbox onChange={onChange}><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Checkbox>
                    <Checkbox onChange={onChange}><StarFilled /><StarFilled /><StarFilled /></Checkbox>
                </Panel>
                <Panel header="Level" key="4">
                    <Checkbox onChange={onChange}>Any</Checkbox>
                    <Checkbox onChange={onChange}>Beginner</Checkbox>
                    <Checkbox onChange={onChange}>Medium</Checkbox>
                    <Checkbox onChange={onChange}>Advanced</Checkbox>
                </Panel>
                <Panel header="Language" key="5">
                    <Checkbox onChange={onChange}>Any</Checkbox>
                    <Checkbox onChange={onChange}>English</Checkbox>
                    <Checkbox onChange={onChange}>Hindi</Checkbox>
                </Panel>
                <Panel header="Features" key="6">
                    <Checkbox onChange={onChange}>Only video</Checkbox>
                    <Checkbox onChange={onChange}>Video and Material</Checkbox>
                    <Checkbox onChange={onChange}>Only Materiali</Checkbox>
                </Panel>
                <Panel header="Price" key="7">
                    <Checkbox onChange={onChange}>FREE</Checkbox>
                    <Checkbox onChange={onChange}>Below $100</Checkbox>
                    <Checkbox onChange={onChange}>Above $100</Checkbox>
                </Panel>
            </Collapse>
        </div>
    )
}

export default CourseFilter