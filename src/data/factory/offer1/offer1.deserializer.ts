import { Offer, OfferBoxSizeEnum } from '../../model/offer.entity';
import { OfferDeserializer } from '../offer.deserializer';
import schema from './offer1.validaton.schema';
import { OfferType } from '../offer.factory';

export class Offer1Deserializer extends OfferDeserializer {
  protected parse(data: any): Offer {
    const res: Offer = new Offer();
    res.externalOfferId = data.offer_id;
    res.name = data.offer_name;
    res.description = data.offer_desc;
    res.requirements = data.call_to_action;
    res.offerUrlTemplate = data.offer_url || data.offer_url_easy;
    res.thumbnail = data.image_url || data.image_url_220x124;
    res.boxSize = data.image_url
      ? OfferBoxSizeEnum.large
      : OfferBoxSizeEnum.small;
    if (data.platform === 'mobile') {
      res.isDesktop = 0;
      res.isAndroid = data.device !== 'iphone_ipad' ? 1 : 0;
      res.isIos = res.isAndroid ? 0 : 1;
    } else {
      res.isDesktop = 1;
      res.isAndroid = 0;
      res.isIos = 0;
    }
    res.providerName = OfferType.offer_1;
    return res;
  }

  protected generateOfferList(data: any): any[] {
    return data.response.offers;
  }

  protected getSchema(): any {
    return schema;
  }
}
