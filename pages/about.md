---
layout: page
title: About
description: 看尽世间一切
keywords: Zhuang Ma, 马壮
comments: true
menu: 关于
permalink: /about/
---

我是 Bruce Lin，总想走到高出，看水往下流。

仰慕「优雅无比的艺术」。

坚信熟能生巧，努力改变人生。

## 关于我的

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }})
{% endfor %}

## Skill Keywords

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
