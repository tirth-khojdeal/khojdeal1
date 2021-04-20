import {Container} from './styles';
function Footer() {
  return (
    <Container>
      <div className="tr-footer">
        <div>
          <h3>To Check Availability and Discounts</h3>
        </div>
        <div className="trf-link">
          <a href="/">
            <span>Visit Amazon</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
