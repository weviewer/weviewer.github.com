$(document).ready(function() {
  $.get('data.json', function(data) {
      var url = data[window.location.hash.slice(1)].paper_url;
      $("#content").append(url)
      var disqus_shortname = 'weviewer'; // required: replace example with your forum shortname
      var disqus_identifier = url;
      var disqus_title = "This is a test 123";

      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
  });
});