import { type FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button
} from '@mui/material';

interface PriceInfo {
    /** 商品价格 */
    price: number,
    /** 促销价 */
    lowestPrice: number,
    /** 促销价类型，1：商品价格；2：拼购价格； 3：秒杀价格； 4：预售价格 */
    lowestPriceType: number,
    /** 券后价（有无券都返回此字段） */
    lowestCouponPrice: number

}

export interface IProductCardProps {
    /** spuId */
    spuId: number,
    /** skuId，商品id */
    skuId: number,
    /** 商品名称 */
    skuName: string,
    /** 封面图Url */
    imageUrl: string,
    /** 商品好评率 */
    goodCommentsShare: number,
    /** 30天引单数量 */
    inOrderCount30Days: number,
    /** 价格信息 */
    priceInfo: PriceInfo
}
const Product: FC<IProductCardProps> = (props) => {
  console.log(props, 'pppp');
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.skuName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;