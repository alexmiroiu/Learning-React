import ProductItem from './ProductItem';
import classes from './Products.module.css';

const FAKE_PRODUCTS = [
  {id: 'p1', price: 6, title: 'Some book', description: 'A random book'},
  {id: 'p2', price: 9, title: 'dune', description: 'Second chapter of dune'}

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {FAKE_PRODUCTS.map(product => <ProductItem key={product.id} title={product.title} price={product.price} description={product.description} id={product.id}/>)}
      </ul>
    </section>
  );
};

export default Products;
