/**
 * Description：文章列表
 * **/
import { Select, Radio, DatePicker, Button, Form, Table, Space, message } from 'antd'
import { observer } from 'mobx-react-lite'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import thumbnail from '@/assets/img/thumbnail.png'
import { useState, useEffect } from 'react'
import { getArticles, deleteArticle } from '@/api'
import useStore from '@/store'

const { RangePicker } = DatePicker

function Article() {
  const navigate = useNavigate()
  const { channelStore } = useStore()

  const [filters, setFilters] = useState([])
  const filterHandler = (values) => {
    setFilters({ ...values })
  }

  const [articles, setArticles] = useState([])
  const [pages, setPages] = useState({ pageSize: 10, pageNum: 1 })
  function pageChange(page) {
    setPages({ ...pages, page })
  }
  useEffect(() => {
    async function loadArticles() {
      const params = { ...pages, ...filters }
      const res = await getArticles(params)
      setArticles(res.data.list)
    }
    loadArticles()
  }, [pages, filters])

  async function deleteItem(data) {
    const res = await deleteArticle({ id: data.id })
    if (res.code === 200) {
      const list = articles.filter((i) => i.id !== data.id)
      setArticles(list) // easy-mock, 不能真实删除数据，模拟接口删除数据
      message.success('删除成功')
    }
  }
  const statusOptions = [
    { value: 0, label: '全部' },
    { value: 1, label: '草稿' },
    { value: 2, label: '待审核' },
    { value: 3, label: '审核通过' },
    { value: 4, label: '审核失败' },
  ]
  const statusObj = {
    0: '全部',
    1: '草稿',
    2: '待审核',
    3: '审核通过',
    4: '审核失败',
  }

  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      render: (cover) => <img src={cover || thumbnail} width={100} height={80} alt="" />,
      width: 120,
    },
    { title: '标题', dataIndex: 'title' },
    { title: '状态', dataIndex: 'status', render: (status) => statusObj[status], width: 88 },
    { title: '发布时间', dataIndex: 'updateTime', width: 160 },
    { title: '阅读数', dataIndex: 'pageview', width: 80 },
    {
      title: '操作',
      render: (data) => {
        return (
          <Space>
            <Button
              type="text"
              onClick={() => navigate(`/publish?id=${data.id}`)}
              style={{ color: '#1677ff' }}
              icon={<EditOutlined />}
            ></Button>
            <Button type="text" onClick={() => deleteItem(data)} danger icon={<DeleteOutlined />}></Button>
          </Space>
        )
      },
    },
  ]

  return (
    <div className="article">
      <div className="self-card">
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          style={{ maxWidth: 600 }}
          initialValues={{ currentStatus: 0 }}
          onFinish={filterHandler}
          autoComplete="off"
        >
          <Form.Item label="状态：" name="currentStatus">
            <Radio.Group>
              {statusOptions.map((i) => (
                <Radio key={i.value} value={i.value}>
                  {i.label}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道：" name="currentChannel">
            <Select placeholder="请选择文章频道" style={{ width: 280 }} options={channelStore.channels} />
          </Form.Item>
          <Form.Item label="日期：" name="currentPicker">
            <RangePicker style={{ width: 280 }} format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="self-card article-container">
        <div>{`根据筛选条件共查询到${articles.length}结果`}</div>
        <Table
          pagination={{ total: articles.length, pageSize: pages.pageSize }}
          rowKey="id"
          dataSource={articles}
          columns={columns}
          onChange={pageChange}
        />
      </div>
    </div>
  )
}

export default observer(Article)
