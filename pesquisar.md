---
layout: default
title: Pesquisar
search_omit: true
---



  <!-- Search results placeholder -->
  <p data-search-found class="search-count">
    <span data-search-found-count></span> resultado(s) encontrados para &ldquo;<span data-search-found-term></span>&rdquo;.
  </p>
  <div data-search-results class="posts list-wrapper"></div>
  <div id="pagination-container"></div>

<!-- Html Elements for Search -->
<!--<div id="search-container">
<input type="text" id="search-input" placeholder="pesquisar...">
<ul id="results-container"></ul>
</div> -->
<div class="searchBar" id="search-container">
  <input class="searchQueryInput" id="search-input" type="text" name="searchQueryInput" placeholder="Pesquisar..." value="" />
  <button class="searchQuerySubmit" type="submit" name="searchQuerySubmit">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>
  </button>
</div>
<div class="posts results-container" id="results-container"></div>


{% comment %}
  <!-- Search result template -->
<div class="posts">
  <script type="text/x-template" id="search-result">
    <div class="post list-item">
      <div class="post-img">
        <a href="##Url##">
        <figure>
          <img data-src="##Image##" alt="##Title##" title="##Title##">
        </figure>
        </a>
      </div>
      <div class="post-text">
        <div class="category">
          ##Content##
        </div>
        <h2>
          <a class="post-link" href="##Url##">##Title##</a>
        </h2>
        <span class="post-meta">##Date##</span>
      </div>
    </div>
  </script>
</div>

<div class="tags">
<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- List of all tags -->
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
      <a href="?q={{ this_word | cgi_escape }}" class="tag">{{ this_word }}
      {% comment %}
        <span>({{ site.tags[this_word].size }})</span>
      {% endcomment %}
      </a>
  {% endunless %}{% endfor %}

{% comment %}
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first | downcase }}#{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_hashes = site_tags | split:',' | sort %}
{% for hash in tag_hashes %}
  {% assign keyValue = hash | split: '#' %}
  {% capture tag_word %}{{ keyValue[1] | strip_newlines }}{% endcapture %}
    <a href="?q={{ tag_word }}" class="tag">
      {{ tag_word }}
      <span class="badge pull-right">({{ site.tags[tag_word].size }})</span>
    </a>
{% endfor %}
{% endcomment %}
</div>
{% endcomment %}

  <!-- Search script - Must appear after template -->
  <script src="/scripts/search.js"></script>
  <div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="{{ site.baseurl }}" data-a2a-title="Hidden" style="display: none;">
      <a class="a2a_button_facebook"></a>
      <a class="a2a_button_twitter"></a>
      <a class="a2a_button_whatsapp"></a>
      <a class="a2a_button_telegram"></a>
  </div>