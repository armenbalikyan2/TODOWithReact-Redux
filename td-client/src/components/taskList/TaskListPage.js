import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Form } from 'antd';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './listScreen.css';
import { getDataLoading, removeDataLoading } from '../../actions';
import { EditableCell } from '../common/EditableCell';

export let taskId;
export let editingtask;

const TaskListPage = (props) => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    props.getDataLoading();
    console.log(props.tasks ? props.tasks : undefined);
  }, []);
  console.log(props.tasks)

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setEditingKey('');
      } else {
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const onSelectChange = () => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
    ],
  };

  if (props.tasks) {
    var data = [];
    props.tasks.map((item) => data.push(item.task));
  }

  const handleDelete = (key) => {
    taskId = key;
    props.removeDataLoading();
    window.location.reload(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '75%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
              type="primary"
              size="small"
              htmlType="save"
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="danger" size="small" htmlType="candel">
                Cancel
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
            type="primary"
            size="small"
            htmlType="edit"
          >
            Edit
          </Button>
        );
      },
      width: '10%',
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) =>
        props.tasks.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            key={Math.random.toString()}
            onConfirm={() => {
              let value = props.tasks.filter((value) => value.task === record);
              handleDelete(value[0].id);
            }}
          >
            <Button type="danger" size="small" htmlType="delete">
              Delete
            </Button>
          </Popconfirm>
        ) : null,
      width: '10%',
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
    <div className="listForm">
      <Form
        form={form}
        component={false}
        style={{
          display: 'flexbox',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Table
          rowKey={(data) => data.id}
          rowSelection={rowSelection}
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
    removeDataLoading: () => dispatch(removeDataLoading),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
