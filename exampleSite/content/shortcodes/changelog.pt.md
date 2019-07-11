---
title: "Lista de alterações"
weight: 41
tags:
  - shortcodes
hideSideMenu: true
---

# Changelog

## Examples

{{% changelog-row %}}
{{% changelog-text %}}
#### Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis quis diam luctus venenatis. Integer consectetur tortor non varius posuere. Vivamus vel felis nunc. Mauris nec hendrerit sem, ullamcorper ullamcorper eros. Morbi feugiat, neque non pellentesque consequat, tortor nulla sagittis orci, id consectetur diam risus et quam. Pellentesque tincidunt purus in nisl egestas, porta feugiat libero mollis. Integer maximus libero ligula, id dignissim dolor cursus sit amet. Ut consequat id erat ac ultrices.
{{% /changelog-text %}}

{{% changelog-video url="/video/keyboard-cat" %}}
{{% /changelog-row %}}

{{% changelog-row image-left="true" %}}
{{% changelog-text %}}
#### Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut turpis quis diam luctus venenatis. Integer consectetur tortor non varius posuere. Vivamus vel felis nunc. Mauris nec hendrerit sem, ullamcorper ullamcorper eros. Morbi feugiat, neque non pellentesque consequat, tortor nulla sagittis orci, id consectetur diam risus et quam. Pellentesque tincidunt purus in nisl egestas, porta feugiat libero mollis. Integer maximus libero ligula, id dignissim dolor cursus sit amet. Ut consequat id erat ac ultrices.
{{% /changelog-text %}}

{{% changelog-image url="/img/theme.png" %}}
{{% /changelog-row %}}

## Usage

```

{{%/* changelog-row */%}}
{{%/* changelog-text */%}}
#### Título

Texto do changelog
{{%/* /changelog-text */%}}

{{%/* changelog-video url="/video/video-url" */%}}
{{%/* /changelog-row */%}}

{{%/* changelog-row image-left="true" */%}}
{{%/* changelog-text */%}}
#### Título

Texto do changelog
{{%/* /changelog-text */%}}

{{%/* changelog-image url="/imgs/image-url.png" */%}}
{{%/* /changelog-row */%}}
```
