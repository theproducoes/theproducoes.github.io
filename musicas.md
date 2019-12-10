---
layout: music
title: Músicas
permalink: /musicas/
---

<div class="container some-list">
	<div class="videos">
		{% for music in site.data.musics %}
			{% if music.category contains "20.0" %}
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
		<div class="video-category">
		<h2>Músicas da atualização 19.0</h2>
	</div>
	<div class="videos">
		{% for music in site.data.musics %}
			{% if music.category contains "19.0" %}
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
	<div class="video-category">
		<h2>Músicas da atualização 18.2</h2>
	</div>
	<div class="videos">
		{% for music in site.data.musics %}
			{% if music.category contains "18.2" %}
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
	<div class="video-category">
		<h2>Músicas da atualização 18.1</h2>
	</div>
	<div class="videos">
		{% for music in site.data.musics %}
			{% if music.category contains "18.1" %}
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
