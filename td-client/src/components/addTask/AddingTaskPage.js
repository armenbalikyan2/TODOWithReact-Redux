import React, { useEffect } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import './inputScreen.css';
import { connect } from 'react-redux';
import { getDataLoading, setDataLoading } from '../../actions';

const AddingTaskPage = (props) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    props.getDataLoading();
  }, []);


  const onFinish = (values) => {
    task = {
      id: props.tasks.length.toString(),
      name: values.task.toString(),
    };

    props.setDataLoading();
    props.history.push('/list');
    window.location.reload(false);
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
      <Spin spinning={props.loading} size='default'>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="task"
            className="Input1"
            rules={[{ required: true }]}
          >
            <Input placeholder="Add task" />
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

function mapStateToProps(state) {
  return {
    tasks: state.tasks.taskData,
    loading: state.tasks.gettingUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDataLoading: () => dispatch(getDataLoading),
    setDataLoading: () => dispatch(setDataLoading),
  };
}

export let task = {};
export default connect(mapStateToProps, mapDispatchToProps)(AddingTaskPage);
