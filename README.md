<div class="container">
    <h1 class="header">
     URL Shortener
    </h1>
    <h3>Example creation usage:</h3>
    <code><a href="https://shortnr-nicholashu.c9users.io/new/https://www.google.com">https://shortnr-nicholashu.c9users.io/new/https://www.google.com</a></code>
    <br>
    <code><a href="https://shortnr-nicholashu.c9users.io/new/http://freecodecamp.com/news">https://shortnr-nicholashu.c9users.io/new/http://freecodecamp.com/news</a></code>
    <br>If you want to pass a site that doesn't exist (or an invalid url) for some reason you can do:<br>
    <code><a href="https://shortnr-nicholashu.c9users.io/new/invalid?allow=true">https://shortnr-nicholashu.c9users.io/new/invalid?allow=true</a></code>
    <h3>Example creation output:</h3>
    <code>
      {
        "original_url": "http://freecodecamp.com/news",
        "short_url": "https://shurli.herokuapp.com/4"
      }
    </code>
    <h3>Usage:</h3>
    <code><a href="https://shortnr-nicholashu.c9users.io/4">https://shortnr-nicholashu.c9users.io/4</a></code>
    <h3>Will redirect to:</h3>
    <code><a href="http://freecodecamp.com/news">http://freecodecamp.com/news</a></code>
  </div>