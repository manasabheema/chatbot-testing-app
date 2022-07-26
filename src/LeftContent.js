export default function LeftContent() {
  return (
    <div className="left-container">
      <div className="left-nav">
        <h3>Your Links</h3>
        <ul className="left-nav-items">
          <li>Link one</li>
          <li>Link Two</li>
          <li>Link Three</li>
        </ul>
      </div>
      <div className="cards-container">
        <div className="card card-1">
          <h4>Card One</h4>
          <p>Point one</p>
          <p>Point two</p>
        </div>
        <hr />
        <div className="card card-2">
          <h4>Card Two</h4>
          <p>Point one</p>
          <p>Point two</p>
        </div>
        <hr />
        <div className="card card-3">
          <h4>Card Three</h4>
          <p>Point one</p>
          <p>Point two</p>
        </div>
      </div>
    </div>
  );
}
