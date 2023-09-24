import http from '@utils/http';

interface CommodityListReq {
  eliteId: number;
  pageIndex: number;
  pageSize: number;
}
interface CommodityListResp {

}
export const getCommodityList = () => {
  return http.request<CommodityListResp, CommodityListReq>({
    method: 'GET',
    url: '/goods/jingfen/custom/query',
  });
};

interface CommodityClassificationResp {
  /** 频道id */
  id: number;
  /** 频道名称 */
  name: string;
}
export const getCommodityClassification = () => {
  return http.request<CommodityClassificationResp[], null>({
    method: 'GET',
    url: '/goods/jingfen/elite',
  });
};
