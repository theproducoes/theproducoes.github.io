---
layout: music
title: Músicas da Atualização 18.2
permalink: /musicas/atualizacao-18-2
---

<div class="container">
	<div class="videos">
		{% for music in site.data.musics %}
			{% if music.category contains "" %}
		      <div class="video">
		      	<a href="{{ relative_url }}/play?v={{ music.id }}">
		      		<figure>
		      			<img src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg" alt="{{ music.name }}">
		      			<figcaption>{{ music.name }}</figcaption>
		      		</figure>
		      	</a>
		      </div>
		    {% endif %}
		  {% assign update_counter = update_counter | plus:1 %}
		{% endfor %}
	</div>
</div>