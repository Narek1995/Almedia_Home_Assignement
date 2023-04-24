import { Offer1Deserializer } from '../../../../../src/data/factory/offer1/offer1.deserializer';

const multi_offer_payload = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url: 'https://offer1.some.url',
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer1.image.some.url',
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
      {
        // should be mapped to `externalOfferId`
        offer_id: '2',
        // should be mapped to `name`
        offer_name: 'Offer 2',
        // should be mapped to `description`
        offer_desc: 'Offer 2 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 2',
        disclaimer: 'TThis is Offer 2',
        // should be mapped to offerUrlTemplate
        offer_url: 'https://offer2.some.url',
        offer_url_easy: 'https://offer2.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer2.image.some.url',
        image_url_220x124: 'https://offer2.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const single_offer_payload = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url: 'https://offer1.some.url',
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer1.image.some.url',
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_with_offer_url = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url: 'https://offer1.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer1.image.some.url',
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_with_offer_easy_url = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer1.image.some.url',
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_with_image_url = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url: 'https://offer1.image.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_with_image_url_small = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_desktop = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'desktop',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_ios = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const offer_android = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [
      {
        // should be mapped to `externalOfferId`
        offer_id: '1',
        // should be mapped to `name`
        offer_name: 'Offer 1',
        // should be mapped to `description`
        offer_desc: 'Offer 1 description',
        // should be mapped to `requirements`
        call_to_action: 'Test Offer 1',
        disclaimer: 'TThis is Offer 1',
        // should be mapped to offerUrlTemplate
        offer_url_easy: 'https://offer1.easy.some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        // should be mapped to `thumbnail`
        image_url_220x124: 'https://offer1.image.small.some.url',
        countries: ['NZ'],
        // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
        platform: 'mobile',
        device: 'android',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
const empty_offer_payload = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: [],
  },
};
export default [
  {
    name: 'Offer 1 Empty offer',
    payload: empty_offer_payload,
    deserializer: new Offer1Deserializer(),
    expectedResult: [],
  },
  {
    name: 'Offer 1 Single offer',
    payload: single_offer_payload,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.some.url',
        thumbnail: 'https://offer1.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Multi offer',
    payload: multi_offer_payload,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.some.url',
        thumbnail: 'https://offer1.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
      {
        providerName: 'offer1',
        externalOfferId: '2',
        name: 'Offer 2',
        description: 'Offer 2 description',
        requirements: 'Test Offer 2',
        offerUrlTemplate: 'https://offer2.some.url',
        thumbnail: 'https://offer2.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer url only',
    payload: offer_with_offer_url,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.some.url',
        thumbnail: 'https://offer1.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer easy url only',
    payload: offer_with_offer_easy_url,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer image url only',
    payload: offer_with_image_url,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.some.url',
        boxSize: 'large',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer small image url only',
    payload: offer_with_image_url_small,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.small.some.url',
        boxSize: 'small',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer desktop',
    payload: offer_desktop,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.small.some.url',
        boxSize: 'small',
        isDesktop: 1,
        isAndroid: 0,
        isIos: 0,
      },
    ],
  },
  {
    name: 'Offer 1 Offer Ios',
    payload: offer_ios,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.small.some.url',
        boxSize: 'small',
        isDesktop: 0,
        isAndroid: 0,
        isIos: 1,
      },
    ],
  },
  {
    name: 'Offer 1 Offer Android',
    payload: offer_android,
    deserializer: new Offer1Deserializer(),
    expectedResult: [
      {
        providerName: 'offer1',
        externalOfferId: '1',
        name: 'Offer 1',
        description: 'Offer 1 description',
        requirements: 'Test Offer 1',
        offerUrlTemplate: 'https://offer1.easy.some.url',
        thumbnail: 'https://offer1.image.small.some.url',
        boxSize: 'small',
        isDesktop: 0,
        isAndroid: 1,
        isIos: 0,
      },
    ],
  },
];
