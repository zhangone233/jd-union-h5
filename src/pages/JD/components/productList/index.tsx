
import { FC, useState, useEffect } from 'react';
import Product, { type IProductCardProps } from './product';
import styles from './index.module.scss';

interface ProductListProps {
  eliteId?: string,
  pageIndex?: number,
  pageSize?: number
}

const ProductList: FC<ProductListProps> = (prop) => {

  const url = 'http://localhost:8088/goods/material/query?eliteId=' + prop.eliteId;
  const [productList, setProductList] = useState<IProductCardProps[]>();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  function getProducts() {
    fetch(url).then(resp => resp.json())
      .then(res => {
        const { code, message, data } = res;
        if (code === 200) {
          const list = data.map((item: any) => {
            const {
              skuId,
              spuId,
              skuName,
              goodCommentsShare,
              imageInfo: { imageList },
              inOrderCount30Days,
              priceInfo
            } = item;

            return {
              spuId,
              skuId,
              skuName,
              priceInfo,
              imageUrl: imageList?.[0] ?? '',
              goodCommentsShare,
              inOrderCount30Days
            };
          });
          setProductList(list as IProductCardProps[]);
        } else {
          alert(message);
        }
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      {productList?.map(product => (
        <Product key={product.skuId} {...product} />
      ))}
    </div>
  );
};

export default ProductList;