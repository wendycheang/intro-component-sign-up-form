
import './App.css';

import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="main-section section">
          <h1 className="header">Learn to code by watching others</h1>
          <p className="description">See how experience developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable</p>
        </section>

        <section className="side-section section">
          <div className="advertise">
            <p className="advertise__description"><b>Try it free 7 days</b> then $20/mo. thereafter</p>
          </div>

          <SignUpForm />
        </section>
      </main>
    </div>
  );
}

export default App;
