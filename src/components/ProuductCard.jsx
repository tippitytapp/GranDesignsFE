import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, Badge} from "reactstrap";

function ProductCard(props) { 
    const { product } = props
    return (
      <Card className="procard">
        <CardBody>
                <CardTitle style={{fontSize: '2rem'}}>
            {product.title ? product.title : "Product Name"}
          </CardTitle>
        </CardBody>
        <CardImg
                width="100%"
                height="400px"
          src={product.src ? product.src : ""}
          alt={product.alt ? product.alt : ""}
        />
        <CardBody>
                <CardText>
                    Tags: &nbsp;
            {product.tags &&
              product.tags.map((tag) => {
                return (
                  <Badge key={Math.random()} pill>
                    {tag}
                  </Badge>
                  );
              })}
                    {product.custom && <Badge pill>custom</Badge>}
                </CardText>
                <CardText>Price: ${product.price}</CardText>
          {product.custom ? <CardLink href="#">Customize</CardLink> : <> </>}

          <CardLink href="#">Add to Cart</CardLink>
        </CardBody>
      </Card>
    );
}

export default ProductCard;