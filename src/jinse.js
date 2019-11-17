// https://www.jinse.com/member/186302
// Require insert jQuery first

javascript: (function() {
    var list = $(".clear.list");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".article-info > span").first();
        var pubDate = pubDateElement.text().trim();

        var readCountElement = $(this).find('.js-article-num');
        var readCount = readCountElement.text().trim();

        var titleElement = $(this).find("h3 a");
        var title = titleElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: title,
            link: titleElement.attr("href"),
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