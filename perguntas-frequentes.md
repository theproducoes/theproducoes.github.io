---
layout: page
title: Perguntas frequentes
permalink: /perguntas-frequentes/
---

<div class="content-wrapper">



<!--<div class="faq-header">Frequently Asked Questions</div>-->

<div class="faq-content">
  <div class="faq-question">
    <input id="q1" type="checkbox" class="panel">
    <label for="q1" class="panel-title"><div class="plus">></div>
    Não tenho o jogo, como faço para baixar e instalar o jogo completo e atualizado?</label>
    <div class="panel-content"><a href="{{ "/jogo-completo/" | relative_url }}">Clique aqui</a> e siga as instruções para baixar e instalar o jogo completo e atualizado.</div>
  </div>

  <div class="faq-question">
    <input id="q2" type="checkbox" class="panel">
    <label for="q2" class="panel-title"><div class="plus">></div>
    Qual é a atualização mais recente?</label>
    <div class="panel-content">{% for post in site.tags['Atualizações'] limit:1 %}
            A mais recente é a {{ post.title }}. Caso não tenha, <a href="{{ post.url | relative_url }}">clique aqui</a> e saiba como baixar e instalar.
          {% endfor %}</div>
  </div>

  <div class="faq-question">
    <input id="q3" type="checkbox" class="panel">
     <label for="q3" class="panel-title"><div class="plus">></div>
   Por que meu jogo fecha quando vou iniciar a partida?</label>
    <div class="panel-content">Você está usando uma atualização antiga. {% for post in site.categories['Atualizações'] limit:1 %}
            A mais recente é a {{ post.title }}. Caso não tenha, <a href="{{ post.url | relative_url }}">clique aqui</a> e saiba como baixar e instalar.
          {% endfor %}</div>
  </div>

  <div class="faq-question">
    <input id="q4" type="checkbox" class="panel">
     <label for="q4" class="panel-title"><div class="plus">></div>
   Meu jogo está fechando no final da 1ª temporada no modo dirigente. O que faço para resolver?</label>
    <div class="panel-content">Provavelmente você marcou algum amistoso de pré-temporada, treino ou esqueceu de apagar a pasta FIFA 08 em Documentos. Inicie um novo modo dirigente sem marcar amistosos de pré-temporada, treinos e sempre quando instalar uma atualização apague a pasta FIFA 08 em Documentos.</div>
  </div>
  
  <div class="faq-question">
    <input id="q5" type="checkbox" class="panel">
    <label for="q5" class="panel-title"><div class="plus">></div>
    Tem para PS2?</label>
    <div class="panel-content">Não, infelizmente não funciona no PS2.</div>
  </div>

  <div class="faq-question">
    <input id="q6" type="checkbox" class="panel">
    <label for="q6" class="panel-title"><div class="plus">></div>
    Minha dúvida não está na lista. E agora?</label>
    <div class="panel-content">Entre em <a href="{{ "/contato/" | relative_url }}">contato</a> que em breve sua dúvida será respondida.</div>
  </div>
</div>
</div>
