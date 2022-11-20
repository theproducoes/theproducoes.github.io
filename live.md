---
layout: music
title: Play
permalink: /live
---

<script type="text/javascript">
      $(function() {
        function parseRSS(callback) {
          var videoId = window.location.href.split('v=').pop();
          var ts = (new Date()).getTime().toString().slice(0,7);
          $.ajax({
            //url: 'https://feeds.buzzsprout.com/1367764.rss',
            //url: 'https://corsanywhere.herokuapp.com/https://tntsports.com.br/rss/feed.xml',
            url: 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+videoId+'&format=json?='+ts,
            cache: true,
            //url: 'https://thingproxy.freeboard.io/fetch/https://tntsports.com.br/rss/feed.xml',
            dataType: 'json',
            error: function(e) {
                  console.log("XML reading Failed: ", e);        
            },
            success: function(response) {
              //$('#ProductList').empty('');
                //console.log(response);
                json = response;
                document.title = json.title;
            }
          });
        }
        //$('#btn').click(function()
        $(document).ready(function () {
          parseRSS();
        });
      });
  $( document ).ready(function() {
    var container = document.getElementById("video")
    var url = window.location.href;
    var id = url.split('v=').pop();
    //var findTitle = url.split('&?t=').pop();
    //document.title = decodeURI(findTitle);
    //window.history.replaceState('', '', 'play?v='+id.split('&?t=').slice(0,1));
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NG0SLXRECB');
    var div = document.createElement("div");
    div.innerHTML = "<div class='player'><iframe src='https://www.youtube.com/embed/"+id.split('&?t=').slice(0,1)+"?autoplay=1' frameborder='0' allowfullscreen='1' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe><div class='live-chat'><iframe width='420' height='345' frameborder='0' src='https://www.youtube.com/live_chat?v="+id.split('&?t=').slice(0,1)+"&amp;embed_domain=theproducoes.github.io'></iframe></div></div>";
    container.appendChild(div);

//fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+id+'&eventType=live&type=video&key=AIzaSyAiGUfZIhNwjCbo_Qh-S0uNKLn23Iye9Zk')
//  .then((response) => response.json())
//  .then((data) => {
//                $('#ProductList').empty('');
//                console.log(data);
//                json = data.items;
//                console.log(json.items);
//                //for (var i in json) {
//                //    var row = $('<tr>');
//                //    row.append($('<td id=' + json[i].id.videoId + '>').html(json[i].id.videoId));
//                //    //row.append($('<td id=' + json[i].etag + '>').html(json[i].etag));
//                //    $('</tr>');
//                //    $('#ProductList').append(row);
//                //}
//  })
  });
</script>
<div id="video"></div>
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