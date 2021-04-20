import {Container} from './styles';
function Footer() {
  return (
    <Container>
      <div className="tr-footer">
        <div className="trf-desc">
          <h3>To Check Availability and Discounts</h3>
        </div>
        <div className="trf-space">
          <a className="trf-link" href="/">
            <span className="trf-link-text">Visit Amazon</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
