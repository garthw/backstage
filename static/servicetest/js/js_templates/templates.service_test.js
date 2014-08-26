var backstage = (function (backstage) {
  'use strict';

  _.extend((backstage.templates = backstage.templates || {}), {
    "servicetest-template": _.template([
      '<div class="arrow-holder">',
        '<label for="num-input">Input Number Between 1 and 100</label><br>',
        '<input id="num-input" type="text"></input><br>',
        '<input class="form-update" type="submit" value="Submit"><br><br>',
        '<div>Number Evaluated: <%= number %></div>',
        '<div>Result: <%= value %></div>',
        '<div># of Times Calculated: <%= occurrences %></div>',
        '<div>Datetime: <%= datetime %></div>',
        '<% if (error) { %>',
        '<div class="error">Error: <%= error %></div>',
        '<% } %>',
      '</div>'
    ].join(""))
  });

  return backstage;

}(backstage || {}));