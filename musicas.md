---
layout: music
title: Músicas
permalink: /musicas/
---

<div class="container some-list">
	<div class="videos">
		<div class="container">
		{% for music in site.data.musics %}
			{% if music.category contains "20.0" %}
		      	<div class="video">
				    <a href="/play?v={{ music.id }}">
				        <figure><img class="video-img" data-src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg">
				            <section class="video-text-container"><img class="video-icon" src="https://assets.website-files.com/60aab62d85f38c27463f37cb/60ac48f814e628c3bf932792_play-video-music-x-webflow-template.svg">
				                <section class="video-text-wrapper">
				                    <h2 class="video-title">{{ music.music }}</h2>
				                    <section class="video-sub-text">{{ music.artist }}</section>
				                </section>
				            </section>
				        </figure>
				    </a>
				</div>
		    {% endif %}
		  {% assign update_counter = update_counter | plus:1 %}
		{% endfor %}
		</div>	
	</div>
	<div class="video-category">
		<h2>Músicas da atualização 19.0</h2>
	</div>
	<div class="videos">
		<div class="container">
		{% for music in site.data.musics %}
			{% if music.category contains "19.0" %}
		      <!--<div class="video">
		      	<a href="{{ relative_url }}/play?v={{ music.id }}">
		      		<figure>
		      			<img src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg" alt="{{ music.name }}">
		      			<figcaption>{{ music.name }}</figcaption>
		      		</figure>
		      	</a>
		      </div>-->
		    <div class="video">
			    <a href="/play?v={{ music.id }}">
			        <figure><img class="video-img" data-src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg">
			            <section class="video-text-container"><img class="video-icon" src="https://assets.website-files.com/60aab62d85f38c27463f37cb/60ac48f814e628c3bf932792_play-video-music-x-webflow-template.svg">
			                <section class="video-text-wrapper">
			                    <h2 class="video-title">{{ music.music }}</h2>
			                    <section class="video-sub-text">{{ music.artist }}</section>
			                </section>
			            </section>
			        </figure>
			    </a>
			</div>
		    {% endif %}
		  {% assign update_counter = update_counter | plus:1 %}
		{% endfor %}
		</div>
	</div>
	<div class="video-category">
		<h2>Músicas da atualização 18.2</h2>
	</div>
	<div class="videos">
		<div class="container">
		{% for music in site.data.musics %}
			{% if music.category contains "18.2" %}
		    <div class="video">
			    <a href="/play?v={{ music.id }}">
			        <figure><img class="video-img" data-src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg">
			            <section class="video-text-container"><img class="video-icon" src="https://assets.website-files.com/60aab62d85f38c27463f37cb/60ac48f814e628c3bf932792_play-video-music-x-webflow-template.svg">
			                <section class="video-text-wrapper">
			                    <h2 class="video-title">{{ music.music }}</h2>
			                    <section class="video-sub-text">{{ music.artist }}</section>
			                </section>
			            </section>
			        </figure>
			    </a>
			</div>
		    {% endif %}
		  {% assign update_counter = update_counter | plus:1 %}
		{% endfor %}
		</div>
	</div>
	<div class="video-category">
		<h2>Músicas da atualização 18.1</h2>
	</div>
	<div class="videos">
		<div class="container">
		{% for music in site.data.musics %}
			{% if music.category contains "18.1" %}
		    <div class="video">
			    <a href="/play?v={{ music.id }}">
			        <figure><img class="video-img" data-src="https://img.youtube.com/vi/{{ music.id }}/mqdefault.jpg">
			            <section class="video-text-container"><img class="video-icon" src="https://assets.website-files.com/60aab62d85f38c27463f37cb/60ac48f814e628c3bf932792_play-video-music-x-webflow-template.svg">
			                <section class="video-text-wrapper">
			                    <h2 class="video-title">{{ music.music }}</h2>
			                    <section class="video-sub-text">{{ music.artist }}</section>
			                </section>
			            </section>
			        </figure>
			    </a>
			</div>
		    {% endif %}
		  {% assign update_counter = update_counter | plus:1 %}
		{% endfor %}
		</div>
	</div>
</div>
