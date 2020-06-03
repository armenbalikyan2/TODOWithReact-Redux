import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import './inputScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDataLoading, editDataLoading } from '../../actions';
import { useParams } from 'react-router-dom';

const AddingTaskPage = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.gettingTask);
  const setTasksLoading = (payload) => dispatch(setDataLoading(payload));
  const editTasksLoading = (payload) => dispatch(editDataLoading(payload));
  let params = useParams();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  if (params.type) {
    params = params.id.split(',');
    params = {
      id: params[1],
      name: params[0],
    };
  }

  const onFinish = (values) => {
    let task = {
      name: values.task.toString(),
    };

    if (params.name) {
      editTasksLoading([params.id, values.task]);
      props.history.push('/list');
      return;
    }

    setTasksLoading(task);
    props.history.push('/list');
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Task...',
    });
  };

  return (
    <div className="addTask">
      <Spin spinning={loading} size="default">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="task"
            className="Input1"
            rules={[{ required: true }]}
          >
            {params.type || params.name ? (
              <Input placeholder="Add task" defaultValue={params.name} />
            ) : (
              <Input placeholder="Add task" />
            )}
          </Form.Item>
          <Form.Item className="Input1">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default AddingTaskPage;
