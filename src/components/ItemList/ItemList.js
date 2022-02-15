import Item from "../Item/Item.js";
import { Container, Row } from "react-bootstrap";

const ItemList = ({productsArray = []}) => {
    
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {productsArray.map(product => {
                    return <Item key={product.id} title={product.name} category={product.category} price={product.price} img={product.img}/>
                })}
            </Row>
        </Container>
    )
}

export default ItemList