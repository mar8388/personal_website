var easter_egg = new Konami();
easter_egg.code = function(){
  {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'link';
    link.media = 'all';
    head.appendChild(link);
  }
}
easter_egg.load();
