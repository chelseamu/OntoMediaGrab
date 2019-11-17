// https://bitkan.com/zh/user/6452321/blog

javascript: (function() {
    var list = $("web-info-card");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".info-card-time");
        var pubDate = pubDateElement.text().trim();

        var titleElement = $(this).find(".info-card-word-blog-title");
        var title = titleElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: title,
            link: window.location.origin + $(this).find("a.info-card-word").attr("href")
        };
        result.push(item);
    });
    var resultText = "";
    $.each(result, function(i) {
        resultText += result[i].pubDate + "\t";
        resultText += result[i].title + "\t";
        resultText += result[i].link + "\r";
    });

    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();