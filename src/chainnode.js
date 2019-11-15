// https://www.chainnode.com/forum/188
// Require insert jQuery first

javascript: (function() {
    var list = $('.post-item__body');
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find("time");
        var pubDate = pubDateElement.text().trim();

        var linkElement = $(this).find(".post-item__title");
        var readCountElement = $(this).find('.post-item__author-right > span').first();
        var readCount = readCountElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: linkElement.find("a").text().trim(),
            link: window.location.origin + linkElement.find("a").attr("href"),
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