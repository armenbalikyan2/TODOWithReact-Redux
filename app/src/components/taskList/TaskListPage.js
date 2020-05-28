import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { connect } from 'react-redux';
import { EditableCell } from '../common/EditableCell';
import axios from 'axios';

import {
  getDataLoading,
  setDataLoading,
  removeDataLoading,
} from '../../actions';

export let taskId;
export let editingtask;

const TaskListPage = (props) => {
  const [form] = Form.useForm();

  if (props.tasks) {
    var data = [];
    props.tasks.map((item) => data.push(item.task));
  }

  useEffect(() => {
    props.getDataLoading();
  }, []);

  const handleDelete = (key) => {
    taskId = key;
    props.removeDataLoading();
    window.location.reload(false);
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        props.tasks.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              let value = props.tasks.filter((value) => value.task == record);
              handleDelete(value[0].id);
            }}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
      />
    </Form>
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
    removeDataLoading: () => dispatch(removeDataLoading),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
