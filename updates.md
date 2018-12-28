---
layout: page
title: Updates
permalink: /Updates/
---

<ul>
{% for update in site.data.updates %}
  <li>
    <a href="https://github.com/{{ update.github }}">
      {{ update.name }}
    </a>
  </li>
{% endfor %}
</ul>
