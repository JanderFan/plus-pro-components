# Search 搜索

## 基础用法

:::demo

search/basic

:::

## 显示个数

配置 `show-number` 属性为显示个数，默认值 2。

:::demo

search/show-number

:::

## 展开收缩隐藏

配置 `hasUnfold` 属性为`false`展开收缩隐藏，同时默认值显示所有搜索框。

:::demo

search/hide-unfold

:::

## 异步数据用法

[PlusColumn](/components/config.html) 配置中的 `options` 支持数，函数和 Promise。
[PlusColumn](/components/config.html) 配置中的 `fieldProps` 支持对象 object，函数和 Promise。

:::demo

search/async

:::

## Search API

## Search Attributes

| 名称                    | 说明                                                                                                      | 类型                                                                                    | 默认值                              | 是否必须 |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| `model-value / v-model` | 搜索表单绑定值                                                                                            | `object`[FieldValues](/components/type.html#fieldvalues)                                |                                     | 否       |
| `columns`               | 搜索配置信息                                                                                              | `array` [PlusColumn[]](/components/config.html)                                         | `[]`                                | 否       |
| `hasFooter`             | 是否需要全部按钮                                                                                          | `boolean`                                                                               | `true`                              | 否       |
| `hasReset`              | 是否需要底部按钮 `重置`                                                                                   | `boolean`                                                                               | `true`                              | 否       |
| `hasUnfold`             | 是否显示展开收缩按钮， 当 columns 中有效的数据（hideInSearch 不为 true）的长度小于`showNumber` 时自动隐藏 | `boolean`                                                                               | `true`                              | 否       |
| `searchLoading`         | 查询按钮 loading                                                                                          | `boolean`                                                                               | `false`                             | 否       |
| `searchText`            | 查询按钮文字                                                                                              | `string`                                                                                | `查询`                              | 否       |
| `resetText`             | 重置按钮文字                                                                                              | `string`                                                                                | `重置`                              | 否       |
| `inline`                | 一行内显示                                                                                                | `boolean`                                                                               | `true`                              | 否       |
| `showNumber`            | 默认显示个数                                                                                              | `number`                                                                                | `2`                                 | 否       |
| `rowProps`              | el-row 属性                                                                                               | `object`[RowProps](https://element-plus.org/zh-CN/component/layout.html#row-attributes) | `{gutter: 20}`                      | 否       |
| `colProps`              | el-col 属性                                                                                               | `object`[ColProps](https://element-plus.org/zh-CN/component/layout.html#col-attributes) | `{xs: 24,sm: 12,md: 8,lg: 8,xl: 6}` | 否       |
| ...                     | ...                                                                                                       | ...                                                                                     | ...                                 | ...      |

:::tip 提示
**`...`表示同时支持所有 [PlusFrom 方法](/components/form.html) Attributes** 。
:::

## Search Events

| 名称     | 说明                   | 类型                                                                                        |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------- |
| `search` | 点击查询按钮触发的事件 | `function` <docs-tip content='(values: FieldValues) => void'></docs-tip>                    |
| `change` | 表单变化触发的事件     | `function` <docs-tip content='(values: FieldValues,column: PlusColumn) => void'></docs-tip> |
| `reset`  | 点击重置按钮触发的事件 | `function` <docs-tip content='() => void'></docs-tip>                                       |

## Exposes

| 名称               | 说明            | 类型                                                      |
| ------------------ | --------------- | --------------------------------------------------------- |
| `plusFormInstance` | `PlusFrom` 实例 | `object` <docs-tip content="PlusFormInstance"></docs-tip> |

**支持所有[PlusFrom 方法](/components/form.html)**

::: tip 提示
如 `validate`,`validateField`等
:::
