/**
 * Description：发布文章
 * **/
import { Button, Form, Card, Breadcrumb, Radio, Select, Input, Upload, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import { useSearchParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { addArticle, getDetails } from '@/api'
import './index.scss'
import useStore from '@/store'

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

function Publish() {
  const formRef = useRef(null)
  const [params] = useSearchParams()
  const articleId = params.get('id')

  const { channelStore } = useStore()
  const [imgCount, setImgCount] = useState(1)
  function radioChange(e) {
    const v = e.target.value
    setImgCount(v)

    if (cacheImgList.current.length === 0) return
    if (v === 1) {
      const imgs = cacheImgList.current ? cacheImgList.current[0] : []
      setFileList([imgs])
    } else if (v === 3) {
      setFileList(cacheImgList.current)
    }
  }
  async function submit(value) {
    const { content, currentChannel, title } = value
    const params = {
      content: <p>{content}</p>,
      currentChannel,
      title,
      cover: {
        type: imgCount,
        images: fileList.map((i) => i.url),
      },
    }
    await addArticle(params)
  }

  const cacheImgList = useRef([]) //  上传图片缓存
  const [fileList, setFileList] = useState([])
  const [previewImage, setPreviewImage] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  async function loadDetails(params) {
    const res = await getDetails(params)
    const { content, cover, currentChannel, title } = res.data
    formRef.current.setFieldsValue({ content, currentChannel, title })
    const images = cover.images.map((url) => url)
    setFileList(images)
    cacheImgList.current = images
    setImgCount(cover.type)
  }
  useEffect(() => {
    if (articleId) {
      loadDetails({ id: articleId })
    }
  }, [articleId])

  const handleUploadChange = ({ fileList }) => {
    const files = fileList.map((file) => {
      if (file.response) {
        return { url: file.response.data.img }
      }
      return file
    })
    setFileList(files)
    cacheImgList.current = files
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}></div>
    </div>
  )

  return (
    <div className="publish">
      <Card
        className="publish-card"
        title={
          <Breadcrumb
            items={[{ title: <Link to="/">首页</Link> }, { title: `${articleId ? '编辑' : '发布'}文章` }]}
          />
        }
      >
        <Form
          ref={formRef}
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          style={{ maxWidth: 600 }}
          initialValues={{ currentStatus: 0, content: 'this is content' }}
          onFinish={submit}
          autoComplete="off"
        >
          <Form.Item label="标题：" name="title" rules={[{ required: true, message: '请输入标题' }]}>
            <Input placeholder="请输入文章标题" style={{ width: 280 }} />
          </Form.Item>
          <Form.Item label="频道：" name="currentChannel" rules={[{ required: true, message: '请选择频道' }]}>
            <Select placeholder="请选择文章频道" style={{ width: 280 }} options={channelStore.channels} />
          </Form.Item>
          <Form.Item label="封面：">
            <Radio.Group className="cover-radio" value={imgCount} onChange={radioChange}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无</Radio>
            </Radio.Group>
            {imgCount > 0 && (
              <Upload
                className="cover-upload"
                listType="picture-card"
                showUploadList
                action="https://mock.mengxuegu.com/mock/640af59c4689d550adbe0a82/react-practice/upload"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleUploadChange}
                multiple={imgCount > 1}
                maxCount={imgCount}
              >
                {fileList.length >= imgCount ? null : uploadButton}
              </Upload>
            )}
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{ required: true, message: '请输入内容' }]}>
            <ReactQuill theme="snow"></ReactQuill>
          </Form.Item>
          <Form.Item name="currentChannel">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Publish)
