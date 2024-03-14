const FamousCard = () => {
  return (
    <div className="col-3">
      <div className="famous-card position-relative">
        <img src="images/famous-01.webp" className="img-fluid" alt="famous" />
        <div className="famous-content position-absolute">
          <h5>Big Screen</h5>
          <h6>Smart Watch Series 7</h6>
          <p>From $399 or $16.62/mo. for 24 mo.*</p>
        </div>
      </div>
    </div>
  );
};

export default FamousCard;
