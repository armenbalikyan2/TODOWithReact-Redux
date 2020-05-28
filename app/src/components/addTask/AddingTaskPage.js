import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './inputScreen.css';
import { connect } from 'react-redux';
import { getDataLoading, setDataLoading } from '../../actions';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

export let task = {};
const AddingTaskPage = (props) => {
  useEffect(() => {
    props.getDataLoading();
  }, []);
  const onFinish = (values) => {
    task = {
      id: props.tasks.length.toString(),
      name: values.names.toString(),
    };

    props.setDataLoading();
    props.history.push('/list');
    window.location.reload(false);
  };

  return (
    <div className="addTask">
      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
      >
        <Form.List name="names">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Task' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input task's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Add Task" style={{ width: '60%' }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: '60%' }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
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
    getDataLoading: () => dispatch(getDataLoading),
    setDataLoading: () => dispatch(setDataLoading),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddingTaskPage);
