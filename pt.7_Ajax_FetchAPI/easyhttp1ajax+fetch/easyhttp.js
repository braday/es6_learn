// @@@@@@@ RESTful Custom Library for app.js to use
function easyHTTP() {
  //@@@@ can be this.xhr
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request, the argument can be any api, callback treat as asyn
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// @@@ Make an HTTP POST Request, what url, what data to send to 'db', then callback
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
