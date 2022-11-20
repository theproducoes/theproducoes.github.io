/**
 * A simple JSON search
 * Requires jQuery (v 1.7+)
 *
 * @author  Mat Hayward - Erskine Design
 * @version  0.1
 */


 /* ==========================================================================
    Initialisation
    ========================================================================== */

var q, jsonFeedUrl = "/feeds/feed.json",
    $searchForm = $("[data-search-form]"),
    $searchInput = $("[data-search-input]"),
    $resultTemplate = $("#search-result"),
    $resultsPlaceholder = $("[data-search-results]"),
    $foundContainer = $("[data-search-found]"),
    $foundTerm = $("[data-search-found-term]"),
    $foundCount = $("[data-search-found-count]"),
    allowEmpty = true,
    showLoader = true,
    loadingClass = "is--loading";


$(document).ready( function() {
    // hide items found string
    $foundContainer.hide();

    // initiate search functionality
    initSearch();
});




 /* ==========================================================================
    Search functions
    ========================================================================== */
 

/**
 * Initiate search functionality.
 * Shows results based on querystring if present.
 * Binds search function to form submission.
 */
function initSearch() {

    // Get search results if q parameter is set in querystring
    if (getParameterByName('q')) {
        q = decodeURIComponent(getParameterByName('q'));
        $searchInput.val(q);
        execSearch(q);
    }

    // Get search results on submission of form
    $(document).on("submit", $searchForm, function(e) {
        e.preventDefault();
        q = $searchInput.val();
        execSearch(q);
    });
}


/**
 * Executes search
 * @param {String} q 
 * @return null
 */
function execSearch(q) {
    if (q != '' || allowEmpty) {
        if (showLoader) {
            toggleLoadingClass();
        }

        getSearchResults(processData());
    }
}


/**
 * Toggles loading class on results and found string
 * @return null
 */
function toggleLoadingClass() {
    $resultsPlaceholder.toggleClass(loadingClass);
    $foundContainer.toggleClass(loadingClass);
}


/**
 * Get Search results from JSON
 * @param {Function} callbackFunction 
 * @return null
 */
function getSearchResults(callbackFunction) {
    $.get(jsonFeedUrl, callbackFunction, 'json');
}


/**
 * Process search result data
 * @return null
 */
function processData() {
    $results = [];
    
    return function(data) {
        
        var resultsCount = 0,
            results = "";

        $.each(data, function(index, item) {
            // check if search term is in content or title 
            //if (item.search_omit != "true" && (item.content.toLowerCase() == q.toLowerCase())) {
            if (item.search_omit != "true" && (item.content.toLowerCase() == "<em>"+q.toLowerCase()+"</em>")) {
            //if (item.search_omit != "true" && (item.content.toLowerCase().indexOf(q.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
                var result = populateResultContent($resultTemplate.html(), item);
                resultsCount++;
                results += result;
            }
        });

        if (showLoader) {
            toggleLoadingClass();
        }

        populateResultsString(resultsCount);
        showSearchResults(results);
        document.title = q;
        //if (resultsCount > 3) {
        //    $('.paginate-posts').paginate({
        //        perPage: 10
        //    });
        //}
        // jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

        var items = $(".list-wrapper .list-item");
        var numItems = items.length;
        var perPage = 10;

        items.slice(perPage).hide();

        if (numItems > 10 ) {
            $('#pagination-container').pagination({
                items: numItems,
                itemsOnPage: perPage,
                prevText: "&laquo;",
                nextText: "&raquo;",
                onPageClick: function (pageNumber) {
                    var showFrom = perPage * (pageNumber - 1);
                    var showTo = showFrom + perPage;
                    items.hide().slice(showFrom, showTo).show();
                    $('html, body').animate({scrollTop: 0}, 0);
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-NG0SLXRECB');
                }
            });
        }
        // Now we'll create a function to check the URL fragment
        // and change page according to the number it finds there.
        function checkFragment() {
            // If there's no hash, treat it like page 1.
            var hash = window.location.hash || "#page-1";

            // We'll use regular expressions to check the hash string as follows:
            // ^            Be strictly at the beginning of the string (i.e. fail "hi!#page-3").
            // #page-       Exactly match the text "#page-".
            // (            Start a matching group so we can access what's inside (i.e. the page number) later.
            //      \d      Match any digit (i.e. 0123456789).
            //      +       Match the previous literal (i.e. digit in this case) one or more times.
            // )            End the matching group.
            // $            Be strictly at the end of the string (i.e. fail "#page-3hi!").
            hash = hash.match(/^#page-(\d+)$/);

            if(hash) {
                // The `selectPage` function is one of many described in the documentation:
                // https://flaviusmatis.github.io/simplePagination.js/

                // We've captured the page number in a regex group: `(\d+)`.
                $("#pagination-container").pagination("selectPage", parseInt(hash[1]));
            }
        };

        // We'll call this function whenever back/forward is pressed...
        $(window).bind("popstate", checkFragment);
        // (Thanks to [Mike O'Connor](https://stackoverflow.com/users/3568095/mike-oconnor)
        // for highlighting the need for this!)
        
        // ... and we'll also call it when the page has loaded
        // (which is right now).
        checkFragment();
        console.log(resultsCount);
    }
}


/**
 * Add search results to placeholder
 * @param {String} results
 * @return null
 */
function showSearchResults(results) {
    // Add results HTML to placeholder
    $resultsPlaceholder.html(results);

    //var myLazyLoad = new LazyLoad({
    //    threshold: 0
    //});
    // After your content has changed...
    //myLazyLoad.update();
    a2a.init_all();
}


/**
 * Add results content to item template
 * @param {String} html 
 * @param {object} item
 * @return {String} Populated HTML
 */
function populateResultContent(html, item) {
    html = injectContent(html, item.title, '##Title##');
    html = injectContent(html, item.image, '##Image##');
    html = injectContent(html, item.content, '##Content##');
    html = injectContent(html, item.url, '##Url##');
    html = injectContent(html, item.excerpt, '##Excerpt##');
    html = injectContent(html, item.date, '##Date##');
    return html;
}


/**
 * Populates results string
 * @param {String} count 
 * @return null
 */
function populateResultsString(count) {
    $foundTerm.text(q);
    $foundCount.text(count);
    $foundContainer.show();
}




 /* ==========================================================================
    Helper functions
    ========================================================================== */


/**
 * Gets query string parameter - taken from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 * @param {String} name 
 * @return {String} parameter value
 */
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


/**
 * Injects content into template using placeholder
 * @param {String} originalContent
 * @param {String} injection
 * @param {String} placeholder 
 * @return {String} injected content
 */
function injectContent(originalContent, injection, placeholder) {
    var regex = new RegExp(placeholder, 'g');
    return originalContent.replace(regex, injection);
}
