var vidWrap = document.getElementById('video');
  var contentWrap = document.getElementById('content');
  var vid = document.getElementsByTagName('video')[0];

  vid.addEventListener('ended', myHandler, false);

  function myHandler(e){
    vidWrap.style.display = 'none';
    contentWrap.style.display = 'block';
  }
