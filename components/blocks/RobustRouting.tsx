import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `app.get("/", || async {
    "GET request"
})

app.get("/:param", |c: Context| async move {
    format!("param: {}", c.params("param"))
})

app.post("/", || async {
    "POST request"
})`;

class RobustRouting extends Component {
  render() {
    return (
      <section className="generic-block">
        <div className="mid">
          <div className="left">
            <h3>Robust Routing</h3>
            <p>
              Setting up routes for your application has never been so easy! The
              Express-like route definitions are easy to understand and work
              with.
            </p>
          </div>
          <div className="right">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default RobustRouting;
