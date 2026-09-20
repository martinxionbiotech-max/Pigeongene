/**
 * 检测试剂盒定价区间 —— 站点唯一价格来源
 *
 * schema 的 AggregateOffer 与页面可见价格文案取自同一常量，保证「结构化数据与可见内容一致」。
 * 单位 USD，中国出厂价（ex-works China），随规格（48T/96T）与订购数量浮动。
 */
export const KIT_PRICE_RANGE = {
  low: 24,
  high: 180,
  currency: 'USD',
} as const;

export const KIT_PRICE_TEXT_EN =
  `US$${KIT_PRICE_RANGE.low}–${KIT_PRICE_RANGE.high} per kit (ex-works China; varies with format 48T/96T and order quantity)`;

export const KIT_PRICE_TEXT_ZH =
  `${KIT_PRICE_RANGE.low}–${KIT_PRICE_RANGE.high} 美元/盒（中国出厂价，随规格 48T/96T 与订购数量浮动）`;

/**
 * 与页面可见价格区间同源的 AggregateOffer。
 * Google 要求 Product 家族节点必须带 offers / review / aggregateRating，
 * 本站无评价数据（不虚构），故只声明价格区间。
 */
export function kitOffers(url: string, offerCount = 1) {
  return {
    '@type': 'AggregateOffer',
    priceCurrency: KIT_PRICE_RANGE.currency,
    lowPrice: KIT_PRICE_RANGE.low,
    highPrice: KIT_PRICE_RANGE.high,
    offerCount,
    availability: 'https://schema.org/InStock',
    url,
  };
}
