import MadeInCanada from '../../components//exported/mic.png'
import EcoFriendly from '../../components//exported/eco.png'
import '../../styles/global.css'
import '../../styles/ProductPros.css'
const ProductPros = () =>{
    return(
        <div>
            <div className='mic-info'>
                <div className='stamp'>
                    <img src={MadeInCanada} alt="Made in Candada"/>
                </div>
                <div>
                    <div className='mic-box'>
                        <h3>Made in Canada</h3>
                        <img src={MadeInCanada} alt="Made in Candada"/>
                    </div>
                    <p>As Canadians, we wanted to provide others with a product made in Canada. We needed to support local manufacturing so that you, as the customer, would know that you are spending right here at home. In addition, sourcing materials and manufacturing within Canada can also ensure higher quality control standards and faster turnaround times for production and shipping. This means that you can offer your customers a product that is not only made locally but is also of high quality and is delivered quickly. Moreover, supporting local manufacturing also encourages small business growth and the growth of local communities. Your business can create economic benefits by supporting other Canadian companies in your supply chain, such as suppliers and logistics providers. In today's globalized economy, it can be easy to forget the importance of local production and its impact on our communities. By providing a product made in Canada, you're not only offering a unique selling proposition for your business but also helping to support Canadian jobs, communities, and the environment.</p>
                </div>
            </div>
            <div className='eco-info'>
            <div className='stamp'>
                <img src={EcoFriendly} alt="Eco Friendly logo"/>
            </div>
            <div>
                <div className='eco-box'>
                    <h3>Eco-Friendly</h3>
                    <img src={EcoFriendly} alt="Eco Friendly logo"/>
                </div>
                <p>Our aim is to use at least 50% recycled material in our packaging and to make all of it globally recyclable. We are fundamentally reevaluating how we deliver our goods, including the kind of packaging to customers and if a package is necessary. Additionally, board games can be reused and passed down from generation to generation, reducing the need for new products. Wooden board games from sustainably sourced wood and use non-toxic, water-based paints and finishes. We also use recycled materials to make board games for your customers. This commitment to sustainability can also help to differentiate your brand from competitors and attract environmentally conscious customers. Furthermore, the longevity of board games as a form of entertainment means that they have the potential to be reused and passed down through generations, reducing the need for new products and further conserving resources. This can also provide a unique selling point for your business, as customers may appreciate the value of a long-lasting, sustainable development that can be enjoyed for years to come.</p>
            </div>
        </div>

        </div>
    )
}

export default ProductPros;
