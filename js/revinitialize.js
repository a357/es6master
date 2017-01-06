// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  multiplex: {
    // Example values. To generate your own, see the socket.io server instructions.
    secret: null, // Obtained from the socket.io server. Gives this (the master) control of the presentation
    id: 'cd4c1b33a6688b2c', // Obtained from socket.io server
    url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
  },
  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
    { src: 'plugin/multiplex/master.js', async: true },
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

