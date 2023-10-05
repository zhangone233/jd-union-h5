import http from '@utils/http';

interface CommodityListReq {
  eliteId: number;
  pageIndex: number;
  pageSize: number;
}
export interface CommodityListItem {
  /** 商品id（无用...） */
  spuId: number;
  /** 商品规格id（同链接id） */
  skuId: number;
  /** 商品名称 */
  skuName: string;
  /** 商品落地页（不一定是推广链接） */
  materialUrl: string;
  /** 商品主图链接 */
  imageUrl: string;
  /** 商品归属：g=自营；p=pop(应该是非自营) */
  owner: string;
  /** 评论数 */
  comments: number;
  /** 商品好评率 */
  goodCommentsShare: number;
  /** 价格信息 */
  priceInfo: {
    /** 商品价格 */
    price: number;
    /** 促销价 */
    lowestPrice: number;
    /** 促销价类型，1：无线价格；2：拼购价格； 3：秒杀价格；4：预售价格 */
    lowestPriceType: 1 | 2 | 3 | 4;
    /** 券后价（有无券都返回此字段） */
    lowestCouponPrice: number;
    /** 历史最低价天数（例：当前券后价最近180天最低） */
    historyPriceDay: number;
  };
  /** 红包列表（可能没有） */
  coupons: Array<{
    /** 券链接 */
    link: string;
    /** 券面额 */
    discount: number;
    /** 领取开始时间（时间戳，毫秒） */
    getStartTime: number;
    /** 券领取结束时间（时间戳，毫秒） */
    getEndTime: number;
    /** 券有效使用开始时间（时间戳，毫秒） */
    useStartTime: number;
    /** 券有效使用结束时间（时间戳，毫秒） */
    useEndTime: number;
  }>;
}
type CommodityListResp = CommodityListItem[];
export const getCommodityList = async (query: CommodityListReq) => {
  const [err, res] = await http.request2<
    CommodityListResp,
    CommodityListReq
  >({
    method: 'GET',
    url: '/goods/jingfen/custom/query',
    query,
  });
  const { code, data, message } = res ?? {};
  if (!err && code === 200) return data;
  return Promise.reject(message);
};

interface CommodityClassificationResp {
  /** 频道id */
  id: number;
  /** 频道名称 */
  name: string;
}
export const getCommodityClassification = async () => {
  type Resp = CommodityClassificationResp[];
  const [err, res] = await http.request2<Resp, null>({
    method: 'GET',
    url: '/goods/jingfen/elite',
  });
  const { code, data, message } = res ?? {};
  if (!err && code === 200) return data;
  return Promise.reject(message);
};
