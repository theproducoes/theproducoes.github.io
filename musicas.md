---
layout: music
title: Músicas
permalink: /musicas/
---

<script type="text/javascript">
	var url = window.location.href;
	var id = url.split('=').pop();
	document.write("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+id+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
</script>
<ul>
{% for update in site.data.updates %}
  <li>
    <a href="https://github.com/{{ update.github }}">
      {{ update.name }}
    </a>
  </li>
{% endfor %}
</ul>
