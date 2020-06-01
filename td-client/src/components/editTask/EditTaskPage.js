import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import './editScreen.css';
import { connect } from 'react-redux';
import { editDataLoading, setDataLoading } from '../../actions';

const EditTaskPage = (props) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    props.editDataLoading();
  }, []);

  const onFinish = (values) => {
    task = {
      id: props.tasks.length.toString(),
      name: values.note.toString(),
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
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="task" className="Input1" rules={[{ required: true }]}>
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editDataLoading: () => dispatch(editDataLoading),
    setDataLoading: () => dispatch(setDataLoading),
  };
}

export let task = {};
export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
