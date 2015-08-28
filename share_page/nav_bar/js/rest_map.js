// This will be a map for REST input
var rest_map = {
  story_share: {route: 'stories/share/json', rest_type: 'post'},
  story_index: {route: 'stories/index/json', rest_type: 'post'}
}
// REST  processor
var rest_processor = function (rest, data, cb) {
  if(rest.rest_type == "get"){
    $.get(rest.route, function (results) {
      // Return the resuts using a callback
      cb(results);
    })
  } else if (rest.rest_type == "post") {
    $.post(rest.route, data, function (results) {
        // Return the resuts using a callback
        cb(results);
    });
  }
}
