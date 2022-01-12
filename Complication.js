;(function () {
  let Weekdays = [ 'Su','Mo','Tu','We','Th','Fr','Sa' ];

  exports.draw = function draw (x,y, Radius, Settings) {
    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let today = new Date();
    g.drawString(Weekdays[today.getDay()], x,y);
  };
})();
