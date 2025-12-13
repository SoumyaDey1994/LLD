class Request {
  constructor(config) {
    this.config = config;
  }

  execute() {
    console.log(`...........Executing request: ..........`);
    console.log(`URL: ${this.config.url}`);
    console.log(`Method: ${this.config.method}`);
    console.log(`Timeout: ${this.config.timeout}`);
    console.log(`Headers: ${JSON.stringify(this.config.headers)}`);
    console.log(`Body: ${JSON.stringify(this.config.body)}`);
  }
}

class RequestBuilder {
  constructor(url) {
    this.config = {
      url,
      headers: null,
      method: "GET",
      body: null,
      timeout: 5000,
    };
  }

  setMethod(method) {
    this.config.method = method;
    // return this;
  }

  setTimeout(timeoutInMs) {
    this.config.timeout = timeoutInMs;
    // return this;
  }

  setHeaders(headers) {
    this.config.headers = { ...this.config.headers, ...headers };
  }

  setBody(body) {
    this.config.body = { ...this.config.body, ...body };
  }

  build() {
    return new Request(this.config);
  }
}

const reqBuilder = new RequestBuilder("api/users");

reqBuilder.setMethod("POST");
reqBuilder.setHeaders({
  authorization: "Bearer dsgdhkljdgsjhjs",
  contentType: "application/json",
});
reqBuilder.setBody({
  name: "Soumya",
  lastName: "Dey",
  place: "Bengaluru",
  age: 31,
});
reqBuilder.setTimeout(1000);

const req = reqBuilder.build();
req.execute();
