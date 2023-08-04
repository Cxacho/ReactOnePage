import data from "../assets/services.json"
function Services(){
    return(
        <section id="services">

            <h2>Usługi</h2>

            <p className="services-text">Zapraszam do zapoznania się z moją ofertą, gdzie znajdziesz szeroki wybór. Moja oferta obejmuje najnowocześniejsze technologie oraz kreatywne rozwiązania, które z pewnością Cię zainspirują.</p>

            <div className="services-container">

                {data.services.map((service)=>(
                    <div className="service-item">

                        <h3>{service.name}</h3>
                        <p>{service.description}</p>

                    </div>
                ))}

            </div>



        </section>
    )
}

export default Services