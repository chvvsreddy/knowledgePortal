import React from 'react'
import { Select } from 'antd';
import CircleItem from './CircleItem'
import './index.css'

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
function Circles() {
  return (
    <>
    <h3 className='mt-10'>Your Circles</h3>
    <div className='circles-block'>
      <CircleItem /><CircleItem /><CircleItem />
      <div className='circle-add circle'><div>+</div><p>Add new</p></div>
    </div>
    <h3 className='mt-10'>All Circles</h3>
    <div className='circle-filter'>Sort by Category<Select defaultValue="Web devlopment"  onChange={handleChange}>
          <Option value="Recent">Recent</Option>
          <Option value="Web devlopment">Web devlopment</Option>
          <Option value="Networking">Networking</Option>
        </Select></div>
    <div className='circles-block mt-20'>
      <CircleItem /><CircleItem /><CircleItem /><CircleItem /><CircleItem /><CircleItem />
    </div>
    </>
  )
}

export default Circles