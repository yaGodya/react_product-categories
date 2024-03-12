import classNames from 'classnames';

export const ProductList = ({ products }) => (
  <tbody>
    {products.map(product => (
      <tr key={product.id} data-cy="Product">
        <td className="has-text-weight-bold" data-cy="ProductId">
          {product.id}
        </td>
        <td data-cy="ProductName">{product.name}</td>
        <td data-cy="ProductCategory">
          {product.categories
            ? `${product.categories.icon} - ${product.categories.title}`
            : ''}
        </td>
        <td
          data-cy="ProductUser"
          className={classNames(
            product.user && product.user.sex === 'm'
              ? 'has-text-link'
              : 'has-text-danger',
          )}
        >
          {product.user ? product.user.name : ''}
        </td>
      </tr>
    ))}
  </tbody>
);
