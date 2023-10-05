import { type FC } from 'react';
import { Skeleton } from '@mui/material';
import styles from './index.module.scss';
import Product from './components/product';
import { transformRpxToVw } from '@utils/css';

import { getCommodityList } from '@service/JD';
import { useRequest, useSetState } from 'ahooks';

interface ProductListProps {
  eliteId: number;
}
interface ProductListState {
  pageSize: number;
  pageIndex: number;
}

const ProductList: FC<ProductListProps> = ({ eliteId }) => {
  const [{ pageSize, pageIndex }, setState] = useSetState<ProductListState>({
    pageSize: 15,
    pageIndex: 1,
  });

  const { data: CLData } = useRequest(() =>
    getCommodityList({
      eliteId,
      pageSize,
      pageIndex,
    }),
  );

  return (
    <div className={styles.container}>
      {CLData?.map((item) => (
        <div
          key={item.skuId}
          className={styles.productItem}
        >
          <Product data={item} />
        </div>
      )) ??
        Array(pageSize)
          .fill(null)
          .map(() => (
            <Skeleton
              variant="rounded"
              height={transformRpxToVw(120)}
              sx={{ mb: transformRpxToVw(10) }}
            />
          ))}
      <br />
    </div>
  );
};

export default ProductList;
