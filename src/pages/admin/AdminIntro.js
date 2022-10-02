import { Form } from 'antd'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoading, HideLoading } from 'redux/rootSlice'

function AdminIntro(data) {
  const dispatch = useDispatch()
  const {portfolioData} = data
  const onFinish = async function(values) {
    try {
      dispatch(ShowLoading())
      const res = await axios.post('http://localhost:3200/api/portfolio/update-intro', {
        ...values,
        id: portfolioData.intros[0]._id
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    dispatch(HideLoading())
  }
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intros[0]}>
        <Form.Item name='firstName' label="First Name">
          <input placeholder='First Name'/>
        </Form.Item>
        <Form.Item name='lastName' label="Last Name">
          <input placeholder='Last Name'/>
        </Form.Item>
        <Form.Item name='caption' label="Caption">
          <input placeholder='Caption'/>
        </Form.Item>
        <Form.Item name='description' label="Description">
          <textarea placeholder='Description'/>
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-4 bg-primary text-white'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro