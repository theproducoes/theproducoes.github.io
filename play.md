---
layout: music
title: Play
permalink: /play
---

<script type="text/javascript">
  $( document ).ready(function() {
      var container = document.getElementById("video")
  var url = window.location.href;
  var id = url.split('=').pop();
          var div = document.createElement("div");
          div.innerHTML = "<div class='player'><iframe src='https://www.youtube.com/embed/"+id+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
          container.appendChild(div);
});
</script>
<div id="video"></div>