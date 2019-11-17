// https://www.8btc.com/author/61091
// Require insert jQuery first
javascript: (function() {
    var list = $(".article-item-warp .article-item__body");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".article-item__author").clone().children().remove().end();;
        var pubDate = pubDateElement.text().trim();

        var readCountElement = $(this).find('.article-item__data');
        var readCount = readCountElement.text().trim();

        var titleElement = $(this).find(".article-item__title .link-dark-major");
        var title = titleElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: title,
            link: window.location.origin + titleElement.attr("href"),
            readCount: readCount
        };
        result.push(item);
    });

    var resultText = "";
    $.each(result, function(i) {
        resultText += result[i].pubDate + "\t";
        resultText += result[i].title + "\t";
        resultText += result[i].link + "\t";
        resultText += result[i].readCount + "\r";
    });

    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();