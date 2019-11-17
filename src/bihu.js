// https://bihu.com/people/1090129
// Require insert jQuery first

javascript: (function() {
    var list = $(".ArticleItem");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".user-info p").last();
        var pubDate = pubDateElement.text().trim();

        var titleElement = $(this).find(".content-info a").first();
        var title = titleElement.text().trim();

        var extraInfoElements = $(this).find(".item-bottom").find("span");
        var daShang = extraInfoElements[0].innerText;
        var like = extraInfoElements[1].innerText;
        var comments = extraInfoElements[2].innerText;

        var item = {
            pubDate: pubDate,
            title: title,
            link: window.location.origin + titleElement.attr("href"),
            daShang: daShang,
            like: like,
            comments: comments
        };
        result.push(item);
    });

    var resultText = "";
    $.each(result, function(i) {
        resultText += result[i].pubDate + "\t";
        resultText += result[i].title + "\t";
        resultText += result[i].link + "\t";
        resultText += result[i].daShang + "\t";
        resultText += result[i].like + "\t";
        resultText += result[i].comments + "\r";
    });

    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();