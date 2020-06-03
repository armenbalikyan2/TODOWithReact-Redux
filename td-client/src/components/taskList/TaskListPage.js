import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import './listScreen.css';
import { removeDataLoading, getDataLoading } from '../../actions';
import { EditableCell } from '../common/EditableCell';


const TaskListPage = (props) => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState();
  const tasks = useSelector((state) => state.tasks.taskData);
  const loading = useSelector((state) => state.tasks.gettingTask);
  const getTasksLoading = () => dispatch(getDataLoading);
  const removeTasksLoading = (payload) => dispatch(removeDataLoading(payload));

  useEffect(() => {
    getTasksLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (record) => {
    props.history.push(`/edit/${record}`);
  };

  const onSelectChange = () => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleDelete = (key) => {
    removeTasksLoading(key);
    window.location.reload(false);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '75%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) =>
        tasks.length >= 1 ? (
          <Popconfirm
            title="Sure to edit?"
            key={Math.random.toString()}
            onConfirm={() => {
              handleEdit([record.name, record.id]);
            }}
          >
            <Button type="primary" size="small" htmlType="edit">
              Edit
            </Button>
          </Popconfirm>
        ) : null,
      width: '10%',
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (text, record) =>
        tasks.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            key={Math.random.toString()}
            onConfirm={() => handleDelete(record.id)}
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
      <Spin spinning={loading} size="default">
        <Table
          pagination={false}
          rowKey={(data) => data.id}
          rowSelection={rowSelection}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={tasks}
          columns={mergedColumns}
        />
      </Spin>
    </div>
  );
};

export default TaskListPage;
