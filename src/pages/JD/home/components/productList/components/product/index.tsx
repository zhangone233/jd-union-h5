import { type FC } from 'react';
import styles from './index.module.scss';
import { Card, Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { type CommodityListItem } from '@service/JD';

interface ProductProps {
  data: CommodityListItem;
}
const Product: FC<ProductProps> = ({ data }) => {
  console.log(data, 'data');
  const { skuName, imageUrl, coupons, priceInfo } = data ?? {};
  const { link, discount } = coupons?.[0] ?? {};
  const { price, lowestCouponPrice } = priceInfo ?? {};

  const handleGoGet = () => {
    link && window.open(link);
  };

  return (
    <div className={styles.container}>
      <Card
        sx={{ maxWidth: 345 }}
        classes={{
          root: styles.cardBox,
        }}
      >
        <div className={styles.media}>
          <img
            alt="icon"
            src={imageUrl}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <h6>{skuName}</h6>
          </div>
          <div className={styles.content}>
            <div className={styles.price}>
              <div className={styles.originalPrice}>
                <span className={styles.couponsText}>原价：</span>
                <span className={styles.couponsCoin}>￥</span>
                <span className={styles.couponsDiscount}>{price}</span>
              </div>
              <div className={styles.lowestCouponPrice}>
                <span className={styles.couponsText}>券后价：</span>
                <span className={styles.couponsCoin}>￥</span>
                <span className={styles.couponsDiscount}>{lowestCouponPrice}</span>
              </div>
            </div>

            <div className={styles.coupons}>
              <div className={styles.discount}>
                <span className={styles.couponsText}>券：</span>
                <span className={styles.couponsCoin}>￥</span>
                <span className={styles.couponsDiscount}>{discount}</span>
              </div>
              <div className={styles.goGet}>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={handleGoGet}
                  className={styles.getBtn}
                  startIcon={<AddShoppingCart />}
                >
                  去领券
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
