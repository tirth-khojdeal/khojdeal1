import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Title from "./components/Title/Title";
import "./NewApp.css";

function NewApp(){
  return (
    <div className="Main">
      <Header/>
       <Title/>
        <ProductGrid/>
        <Experience/>
      <Footer/>
    </div>
  );
}
export default NewApp;