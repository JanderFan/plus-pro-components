# DrawerForm 表单

DrawerForm 组件是 [ElDrawer](https://element-plus.gitee.io/zh-CN/component/drawer.html)和 [PlusForm](/components/form.html) 组件的组合。

## 基础用法

:::demo

drawer-form/basic

:::

## DrawerForm API

## DrawerForm Attributes

| 名称                        | 说明                                                                           | 类型                                                                                         | 默认值                                                                 | 是否必须 |
| --------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------- |
| `model-value / v-model`     | 表单绑定值                                                                     | [FieldValues](/components/type.html#fieldvalues)                                             |                                                                        | 否       |
| `visible / v-model:visible` | 抽屉显示                                                                       | `boolean`                                                                                    | `false`                                                                | 否       |
| `form`                      | [PlusForm](/components/form.html) 的 props                                     | [PlusFormProps](/components/form.html#form-attributes)                                       | `{footerAlign:"right"}`                                                | 否       |
| `drawer`                    | [ElDrawer](https://element-plus.gitee.io/zh-CN/component/drawer.html) 的 props | [ElDrawerProps](https://element-plus.gitee.io/zh-CN/component/drawer.html#drawer-attributes) | `{closeOnClickModal:false,closeOnPressEscape:false, title:"抽屉表单"}` | 否       |

## DrawerForm Events

| 名称     | 说明                           | 类型                                       |
| -------- | ------------------------------ | ------------------------------------------ |
| `submit` | 点击确定按钮校验通过触发的事件 | [Function] `(values: FieldValues) => void` |
| `change` | 表单变化触发的事件             | [Function] `(values: FieldValues) => void` |
| `cancel` | 点击取消按钮触发的事件         | [Function] `() => void`                    |

## DrawerForm Slots

| 插槽名          | 说明                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| `drawer-header` | [ElDrawer](https://element-plus.gitee.io/zh-CN/component/drawer.html) 的 header slot |
| `drawer-footer` | [ElDrawer](https://element-plus.gitee.io/zh-CN/component/drawer.html) 的 footer slot |
| `form-footer`   | [PlusForm](/components/form.html) 的 footer slot                                     |

## Exposes

| 名称             | 说明             | 类型                            |
| ---------------- | ---------------- | ------------------------------- |
| `formInstance`   | `el-form` 实例   | `InstanceType<typeof ElForm>`   |
| `drawerInstance` | `el-drawer` 实例 | `InstanceType<typeof ElDrawer>` |
