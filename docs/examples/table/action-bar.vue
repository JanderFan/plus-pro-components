<template>
  <div>
    <PlusTable
      key="1"
      :columns="tableConfig"
      :table-data="tableData"
      :action-bar="{ buttons, showNumber: 2 }"
      @clickAction="handleClickButton"
    />

    <PlusTable
      key="2"
      :columns="tableConfig"
      :table-data="tableData"
      :action-bar="{ buttons: buttons1, type: 'button', showNumber: 2, width: 240 }"
      @clickAction="handleClickButton"
    />

    <PlusTable
      key="3"
      :columns="tableConfig"
      :table-data="tableData"
      :action-bar="{ buttons: buttons2, type: 'icon', showNumber: 2 }"
      @clickAction="handleClickButton"
    />

    <PlusTable
      key="4"
      :columns="tableConfig"
      :table-data="tableData"
      :action-bar="{ buttons: buttons3, width: '60px' }"
      @clickAction="handleClickButton"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTable } from 'plus-pro-components'
import type { PlusColumn, ButtonsCallBackParams } from 'plus-pro-components'
import { View, Edit, Delete, DocumentCopy } from '@element-plus/icons-vue'

interface TableRow {
  id: number
  name: string
  status: string
  tag: string
  time: Date
}

const TestServe = {
  getList: async () => {
    const data = Array.from({ length: 3 }).map((item, index) => {
      return {
        id: index,
        name: index + 'name',
        status: String(index % 3),
        tag: index === 1 ? 'success' : index === 2 ? 'warning' : index === 3 ? 'info' : 'danger',
        time: new Date()
      }
    })
    return {
      data: data as TableRow[]
    }
  }
}

const { tableData, buttons } = useTable<TableRow[]>()
const { buttons: buttons1 } = useTable<TableRow[]>()
const { buttons: buttons2 } = useTable<TableRow[]>()
const { buttons: buttons3 } = useTable<TableRow[]>()

buttons.value = [
  {
    // 查看
    text: '查看',
    code: 'view',
    props: (row: any) => ({
      type: 'info',
      disabled: row.status === '1'
    }),
    show: (row: any) => row.status === '1'
  },
  {
    // 修改
    text: '修改',
    code: 'edit',
    // props v0.1.16 版本新增函数类型
    props: (row: any) => ({
      type: 'primary',
      disabled: row.status === '1'
    }),
    show: computed(() => true)
  },
  {
    // 删除
    text: '删除',
    code: 'delete',
    // props v0.1.16 版本新增计算属性支持
    props: computed(() => ({ type: 'danger' })),
    confirm: {
      options: { draggable: true }
    }
  },
  {
    text: '复制',
    code: 'copy',
    props: {
      type: 'success'
    }
  }
]

buttons1.value = [
  {
    // 查看
    text: '查看',
    code: 'view',
    icon: View,
    props: {
      type: 'info'
    },
    show: (row: any) => row.status === '1'
  },
  {
    // 修改
    text: '修改',
    code: 'edit',
    icon: Edit,
    // props v0.1.16 版本新增函数类型
    props: (row: any) => ({
      type: 'primary',
      disabled: row.status === '1'
    }),
    show: computed(() => true)
  },
  {
    // 删除
    text: '删除',
    code: 'delete',
    icon: Delete,
    // props v0.1.16 版本新增计算属性支持
    props: computed(() => ({ type: 'danger' })),
    confirm: {
      message: data => `确定删除id为${data.row.id}的数据吗？`,
      options: { draggable: true }
    }
  },
  {
    text: '复制',
    code: 'copy',
    icon: DocumentCopy,
    props: {
      type: 'success'
    }
  }
]
buttons2.value = [
  {
    // 查看
    text: '查看',
    code: 'view',
    icon: View,
    props: {
      type: 'info'
    },
    show: (row: any) => row.status === '1'
  },
  {
    // 修改
    text: '修改',
    code: 'edit',
    icon: Edit,
    // props v0.1.16 版本新增函数类型
    props: (row: any) => ({
      type: 'primary',
      size: row.status === '1' ? 28 : 16,
      color: row.status === '1' ? 'red' : '#333'
    }),
    show: computed(() => true)
  },
  {
    // 删除
    text: '删除',
    code: 'delete',
    icon: Delete,
    // props v0.1.16 版本新增计算属性支持
    props: computed(() => ({ type: 'danger' })),
    confirm: {
      message: data => `确定删除id为${data.row.id}且行数为${data.index}的数据吗？`
    }
  },
  {
    text: '复制',
    code: 'copy',
    icon: DocumentCopy,
    props: {
      type: 'success'
    }
  }
]
buttons3.value = [
  {
    // v0.0.8开始支持 text支持函数类型
    text: row => (row.status === '1' ? '开启' : '关闭'),
    code: 'status',
    icon: View,
    props: {
      type: 'primary'
    }
  }
]

const tableConfig: PlusColumn[] = [
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '状态',
    prop: 'status',
    valueType: 'select',
    options: [
      {
        label: '未解决',
        value: '0',
        color: 'red'
      },
      {
        label: '已解决',
        value: '1',
        color: 'blue'
      },
      {
        label: '解决中',
        value: '2',
        color: 'yellow'
      },
      {
        label: '失败',
        value: '3',
        color: 'red'
      }
    ]
  },
  {
    label: '标签',
    prop: 'tag',
    valueType: 'tag',
    fieldProps: (value: string) => {
      return { type: value }
    }
  },
  {
    label: '时间',
    prop: 'time',
    valueType: 'date-picker'
  }
]

const getList = async () => {
  try {
    const { data } = await TestServe.getList()
    tableData.value = data || []
  } catch (error) {}
}
getList()

const handleClickButton = (data: ButtonsCallBackParams) => {
  console.log(data.buttonRow.text)
}
</script>
