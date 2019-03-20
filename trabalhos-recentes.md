---
layout: page
title: Trabalhos recentes
permalink: /trabalhos-recentes/
---

<ul>
{% for update in site.data.updates limit:20 %}
  <li>{{ update.name }}</li>
  {% assign update_counter = update_counter | plus:1 %}
{% endfor %}
</ul>

Estas são algumas das novidades que estarão presentes em futuras atualizações.