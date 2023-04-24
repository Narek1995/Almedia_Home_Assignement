import { Offer2Deserializer } from '../../../../../src/data/factory/offer2/offer2.deserializer';

const single_offer_payload = {
  status: 'success',
  data: {
    // offers from offer2 provider
    '15828': {
      Offer: {
        // should be mapped to `externalOfferId`
        campaign_id: 3,
        store_id: null,
        tracking_type: 'CPA',
        campaign_vertical: 'professional_finance',
        currency_name_singular: 'coin',
        currency_name_plural: 'coins',
        network_epc: '4.8359',
        // should be mapped to `icon`
        icon: 'https://offer3.some.image.url',
        // should be mapped to `name`
        name: 'Offer 3',
        // should be mapped to `offerUrlTemplate`
        tracking_url: 'https://offer3.some.url',
        // should be mapped to `requirements`
        instructions: 'Offer 3 Instructions',
        disclaimer: null,
        // should be mapped to `description`
        description: 'Offer 3 description',
        short_description: 'Make a Deposit to Earn!',
        offer_sticker_text_1: 'RECOMMENDED',
        offer_sticker_text_2: null,
        offer_sticker_text_3: null,
        offer_sticker_color_1: 'D100BC',
        offer_sticker_color_2: 'FFFFFF',
        offer_sticker_color_3: 'FFFFFF',
        sort_order_setting: null,
        category_1: 'free',
        category_2: null,
        amount: 53550,
        payout_usd: 69.25,
        start_datetime: '2022-04-19 11:58:30',
        end_datetime: '2042-04-19 04:59:00',
        is_multi_reward: false,
      },
      Country: {
        include: {
          US: {
            id: 243,
            code: 'US',
            name: 'United States',
          },
        },
        exclude: [],
      },
      State: {
        include: [],
        exclude: [],
      },
      City: {
        include: [],
        exclude: [],
      },
      Connection_Type: {
        cellular: true,
        wifi: true,
      },
      Device: {
        include: [],
        exclude: [],
      },
      OS: {
        // this should be mapped to `isAndroid`
        android: false,
        // this should be mapped to `isIos`
        ios: true,
        // this should be mapped to `isDesktop`
        web: true,
        min_ios: null,
        max_ios: null,
        min_android: null,
        max_android: null,
      },
    },
  },
};
const multi_offer_payload = {
  status: 'success',
  data: {
    // offers from offer2 provider
    '3': {
      Offer: {
        // should be mapped to `externalOfferId`
        campaign_id: 3,
        store_id: null,
        tracking_type: 'CPA',
        campaign_vertical: 'professional_finance',
        currency_name_singular: 'coin',
        currency_name_plural: 'coins',
        network_epc: '4.8359',
        // should be mapped to `icon`
        icon: 'https://offer3.some.image.url',
        // should be mapped to `name`
        name: 'Offer 3',
        // should be mapped to `offerUrlTemplate`
        tracking_url: 'https://offer3.some.url',
        // should be mapped to `requirements`
        instructions: 'Offer 3 Instructions',
        disclaimer: null,
        // should be mapped to `description`
        description: 'Offer 3 description',
        short_description: 'Make a Deposit to Earn!',
        offer_sticker_text_1: 'RECOMMENDED',
        offer_sticker_text_2: null,
        offer_sticker_text_3: null,
        offer_sticker_color_1: 'D100BC',
        offer_sticker_color_2: 'FFFFFF',
        offer_sticker_color_3: 'FFFFFF',
        sort_order_setting: null,
        category_1: 'free',
        category_2: null,
        amount: 53550,
        payout_usd: 69.25,
        start_datetime: '2022-04-19 11:58:30',
        end_datetime: '2042-04-19 04:59:00',
        is_multi_reward: false,
      },
      Country: {
        include: {
          US: {
            id: 243,
            code: 'US',
            name: 'United States',
          },
        },
        exclude: [],
      },
      State: {
        include: [],
        exclude: [],
      },
      City: {
        include: [],
        exclude: [],
      },
      Connection_Type: {
        cellular: true,
        wifi: true,
      },
      Device: {
        include: [],
        exclude: [],
      },
      OS: {
        // this should be mapped to `isAndroid`
        android: false,
        // this should be mapped to `isIos`
        ios: true,
        // this should be mapped to `isDesktop`
        web: true,
        min_ios: null,
        max_ios: null,
        min_android: null,
        max_android: null,
      },
    },
    '4': {
      Offer: {
        // should be mapped to `externalOfferId`
        campaign_id: 4,
        store_id: null,
        tracking_type: 'CPA',
        campaign_vertical: 'professional_finance',
        currency_name_singular: 'coin',
        currency_name_plural: 'coins',
        network_epc: '4.8359',
        // should be mapped to `icon`
        icon: 'https://offer4.some.image.url',
        // should be mapped to `name`
        name: 'Offer 4',
        // should be mapped to `offerUrlTemplate`
        tracking_url: 'https://offer4.some.url',
        // should be mapped to `requirements`
        instructions: 'Offer 4 Instructions',
        disclaimer: null,
        // should be mapped to `description`
        description: 'Offer 4 description',
        short_description: 'Make a Deposit to Earn!',
        offer_sticker_text_1: 'RECOMMENDED',
        offer_sticker_text_2: null,
        offer_sticker_text_3: null,
        offer_sticker_color_1: 'D100BC',
        offer_sticker_color_2: 'FFFFFF',
        offer_sticker_color_3: 'FFFFFF',
        sort_order_setting: null,
        category_1: 'free',
        category_2: null,
        amount: 53550,
        payout_usd: 69.25,
        start_datetime: '2022-04-19 11:58:30',
        end_datetime: '2042-04-19 04:59:00',
        is_multi_reward: false,
      },
      Country: {
        include: {
          US: {
            id: 243,
            code: 'US',
            name: 'United States',
          },
        },
        exclude: [],
      },
      State: {
        include: [],
        exclude: [],
      },
      City: {
        include: [],
        exclude: [],
      },
      Connection_Type: {
        cellular: true,
        wifi: true,
      },
      Device: {
        include: [],
        exclude: [],
      },
      OS: {
        // this should be mapped to `isAndroid`
        android: false,
        // this should be mapped to `isIos`
        ios: true,
        // this should be mapped to `isDesktop`
        web: true,
        min_ios: null,
        max_ios: null,
        min_android: null,
        max_android: null,
      },
    },
  },
};
const empty_offer_payload = {
  status: 'success',
  data: {},
};
export default [
  {
    name: 'Offer 2 Empty offer',
    payload: empty_offer_payload,
    deserializer: new Offer2Deserializer(),
    expectedResult: [],
  },
  {
    name: 'Offer 2 Single offer',
    payload: single_offer_payload,
    deserializer: new Offer2Deserializer(),
    expectedResult: [
      {
        providerName: 'offer2',
        externalOfferId: 3,
        thumbnail: 'https://offer3.some.image.url',
        boxSize: 'small',
        name: 'Offer 3',
        offerUrlTemplate: 'https://offer3.some.url',
        requirements: 'Offer 3 Instructions',
        description: 'Offer 3 description',
        isDesktop: 1,
        isIos: 1,
        isAndroid: 0,
      },
    ],
  },
  {
    name: 'Offer 2 Multi offer',
    payload: multi_offer_payload,
    deserializer: new Offer2Deserializer(),
    expectedResult: [
      {
        providerName: 'offer2',
        externalOfferId: 3,
        thumbnail: 'https://offer3.some.image.url',
        boxSize: 'small',
        name: 'Offer 3',
        offerUrlTemplate: 'https://offer3.some.url',
        requirements: 'Offer 3 Instructions',
        description: 'Offer 3 description',
        isDesktop: 1,
        isIos: 1,
        isAndroid: 0,
      },
      {
        providerName: 'offer2',
        externalOfferId: 4,
        thumbnail: 'https://offer4.some.image.url',
        boxSize: 'small',
        name: 'Offer 4',
        offerUrlTemplate: 'https://offer4.some.url',
        requirements: 'Offer 4 Instructions',
        description: 'Offer 4 description',
        isDesktop: 1,
        isIos: 1,
        isAndroid: 0,
      },
    ],
  },
];
