import react from "react";
import './History.css';
import founder from "./founder.jpeg";
function History() {

return (
    <section className="history">
        <div className="header">
            <h2>Born To Be Wild</h2>
            <p>the vision that created the ultimate driving machine.</p>
        </div>
        <img src={founder} alt="Porsche Founder" className="founder-image" />
        <div className="history-content">
        <h1>Ferdinand Porsche </h1>
        <p>From plumber’s apprentice to ingenious designer. Ferdinand Porsche shaped the automotive industry like few others. He invented the wheel-hub motor and developed cars, trucks, aircraft engines and sports and racing cars for various companies. His masterpiece was the Volkswagen, which years later also formed the basis for the entrepreneurial success of his children.</p>
        </div>
    </section>

)

}
export default History;




