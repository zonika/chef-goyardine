var page = require('webpage').create();

page.viewportSize = { width: 1024, height: 768 };
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.clipRect = { top: 0, left: 0, width: 960, height: 400 };

page.open('http://localhost:8008/?message=lets%20fucking%20goooooooooooooooo', function() {
  page.render('ok.png');

  phantom.exit();
});
