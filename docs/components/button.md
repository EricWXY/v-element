---
title: Button | Er-Element
description: Button 组件文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、 `round`和 `circle`来定义按钮的样式。

::: preview
demo-preview=../demo/button/Basic.vue
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。
使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

::: preview
demo-preview=../demo/button/Disabled.vue
:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。
使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。 通过向右方添加`<i>`标签来添加图标， 你也可以使用自定义图标。

::: preview
demo-preview=../demo/button/Icon.vue
:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。
通过设置 `loading` 属性为 `true` 来显示加载中状态。

::: tip
您可以使用 `loading` 插槽或 `loadingIcon`属性自定义您的loading图标

ps: `loading` 插槽优先级高于`loadingIcon`属性
:::

::: preview
demo-preview=../demo/button/Loading.vue
:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。
使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

::: preview
demo-preview=../demo/button/Size.vue
:::

## Tag

您可以自定义元素标签。例如，按钮，div，路由链接，nuxt链接。

::: preview
demo-preview=../demo/button/Tag.vue
:::