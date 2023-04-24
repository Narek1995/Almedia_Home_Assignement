import { Offer, OfferBoxSizeEnum } from '../../model/offer.entity';
import { OfferDeserializer } from '../offer.deserializer';
import schema from './offer2.validaton.schema';
import { OfferType } from '../offer.factory';

export class Offer2Deserializer extends OfferDeserializer {
  protected getSchema(): any {
    return schema;
  }

  protected parse(data: any): Offer {
    const res: Offer = new Offer();
    res.externalOfferId = data.Offer.campaign_id;
    res.thumbnail = data.Offer.icon;
    res.boxSize = OfferBoxSizeEnum.small;
    res.name = data.Offer.name;
    res.offerUrlTemplate = data.Offer.tracking_url;
    res.requirements = data.Offer.instructions;
    res.description = data.Offer.description;
    res.isDesktop = data.OS.web ? 1 : 0;
    res.isIos = data.OS.ios ? 1 : 0;
    res.isAndroid = data.android ? 1 : 0;
    res.providerName = OfferType.offer_2;
    return res;
  }

  protected generateOfferList(data: any): Offer[] {
    return Object.values(data.data);
  }
}
