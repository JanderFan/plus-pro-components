# Form 表单

## 基础用法(默认通栏)

:::demo

form/basic

:::

## 两列

:::demo

form/two-columns

:::

## 混合

:::demo

form/mixed

:::

## 异步数据用法

[PlusColumn](/components/config.html) 配置中的 `options` 支持数组，函数和 Promise。
[PlusColumn](/components/config.html) 配置中的 `fieldProps`和`formItemProps` 支持对象 object，函数和 Promise。

**常见的使用场景是数据来自后端接口，这里调用后端接口，返回 [OptionsRow[]](/components/type.html#optionsrow)数组即可。**

:::demo

form/async

:::

## 分组表单

配置 `group` 字段，则显示分组。配置 `group` 字段后，`columns` 则不在生效。

:::demo

form/group

:::

## 分组表单自定义头部

添加 `group-item-header` 插槽即可实现。

:::demo

form/group-item-header

:::

## 自定义表单项

自定义表单项的核心方法是定义 `renderField`方法，该方法可以返回以下三种情况

- 返回一个 [Component](https://cn.vuejs.org/api/built-in-special-elements.html#component)。 （会自动包裹 modelValue 和 onChange） <el-tag  effect="dark">推荐</el-tag>
- 调用 vue 的[渲染函数 h](https://cn.vuejs.org/guide/extras/render-function.html) 返回一个 `VNode`。（会自动包裹 modelValue，需要手动调用`renderField`中的 `onChange` 用来实现双向绑定）
- 返回一个 [string](https://cn.vuejs.org/api/built-in-special-elements.html#component)。 （渲染原生标签，配合[PlusColumn](/components/config.html) 的 `slots`使用 ）

::: tip 提示
`renderField 返回的值`的`props` 和配置项的`fieldProps`会同时生效，`renderField 返回的值`的`props`优先级高于 `fieldProps`.

:::

:::demo

form/custom

:::

## 所有内置的表单类型

:::demo

form/all

:::

## Form API

## Form Attributes

| 名称                    | 说明                      | 类型                                                                                     | 默认值  | 是否必须 |
| ----------------------- | ------------------------- | ---------------------------------------------------------------------------------------- | ------- | -------- |
| `model-value / v-model` | 表单绑定值                | `object` [FieldValues](/components/type.html#fieldvalues)                                |         | 否       |
| `columns`               | 表单配置信息              | `array`[PlusColumn[]](/components/config.html)                                           | `[]`    | 否       |
| `rowProps`              | el-row 的 props           | `object`[RowProps](https://element-plus.org/zh-CN/component/layout.html#row-attributes)  |         | 否       |
| `colProps`              | el-col 属性               | `object`[ColProps](https://element-plus.org/zh-CN/component/layout.html#col-attributes)  |         | 否       |
| `labelWidth`            | el-form 的 labelWidth     | `string`                                                                                 | `84px`  | 否       |
| `labelPosition`         | el-form 的 labelPosition  | `string` <docs-tip content="'left' / 'right' / 'top'"></docs-tip>                        | `left`  | 否       |
| `labelSuffix`           | el-form 的 labelSuffix    | `string`                                                                                 | `:`     | 否       |
| `hasErrorTip`           | 是否需要校验 message 提示 | `boolean`                                                                                | `true`  | 否       |
| `hasFooter`             | 是否需要全部底部按钮      | `boolean`                                                                                | `true`  | 否       |
| `footerAlign`           | 底部按钮对齐方式          | `string` <docs-tip content="'left' / 'right'"></docs-tip>                                | `left`  | 否       |
| `hasReset`              | 是否需要底部按钮 `重置`   | `boolean`                                                                                | `true`  | 否       |
| `submitLoading`         | 确定按钮 loading          | `boolean`                                                                                | `false` | 否       |
| `rules`                 | 表单校验                  | `object` [FormRules](https://element-plus.org/zh-CN/component/form.html#form-attributes) | `{}`    | 否       |
| `group`                 | 分组表单配置              | `false` / (`object` [PlusFormGroupRow](/components/type.html#plusformgrouprow) )         | `{}`    | 否       |
| `submitText`            | 提交按钮文字              | `string`                                                                                 | `提交`  | 否       |
| `resetText`             | 重置按钮文字              | `string`                                                                                 | `重置`  | 否       |
| ...                     | ...                       | ...                                                                                      | ...     | ...      |

**`...`表示同时支持所有[ElForm Attributes](https://element-plus.org/zh-CN/component/form.html#form-attributes)**

:::tip 提示
**model 参数已在组件内部处理，一般不需要传**。
:::

## Form Events

| 名称          | 说明                             | 类型                                                                                        |
| ------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| `submit`      | 点击提交按钮校验通过触发的事件   | `function` <docs-tip content='(values: FieldValues) => void'></docs-tip>                    |
| `change`      | 表单变化触发的事件               | `function` <docs-tip content='(values: FieldValues,column: PlusColumn) => void'></docs-tip> |
| `reset`       | 点击重置按钮触发的事件           | `function` <docs-tip content='() => void'></docs-tip>                                       |
| `submitError` | 点击提交按钮校验不通过触发的事件 | `function` <docs-tip content='(error:any) => void'></docs-tip>                              |
| ...           | ...                              | ...                                                                                         |

**`...`表示同时支持所有[ElForm Events](https://element-plus.org/zh-CN/component/form.html#form-%E4%BA%8B%E4%BB%B6)**

:::tip 提示

如 el-form 的 validate。

:::

## Form Slots

| 插槽名              | 说明                                  |
| ------------------- | ------------------------------------- |
| `default`           | 表单的内容 默认是 `PlusFormItem` 组件 |
| `footer`            | 表单底部按钮                          |
| `group-item-header` | 分组表单头部                          |

## Exposes

| 名称           | 说明           | 类型                                                                 |
| -------------- | -------------- | -------------------------------------------------------------------- |
| `formInstance` | `el-form` 实例 | `object` <docs-tip content="InstanceType<typeof ElForm>"></docs-tip> |

**拿到 formInstance 后支持所有[ElForm 方法](https://element-plus.org/zh-CN/component/form.html#form-exposes)**

::: tip 提示
如 `validate`,`validateField`等
:::
