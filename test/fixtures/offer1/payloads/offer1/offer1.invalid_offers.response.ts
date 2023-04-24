import { Offer1Deserializer } from '../../../../../src/data/factory/offer1/offer1.deserializer';

const single_valid_offer_payload = {
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
      {
        // should be mapped to `externalOfferId`
        offer_id: '2',
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
const no_valid_offer_payload = {
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
export default [
  {
    name: 'Offer 1 No valid Offer',
    payload: no_valid_offer_payload,
    deserializer: new Offer1Deserializer(),
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'offer_name'",
            params: { missingProperty: 'offer_name' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [],
    },
  },
  {
    name: 'Offer 1 Single Valid Offer',
    payload: single_valid_offer_payload,
    deserializer: new Offer1Deserializer(),
    expected: {
      logsCount: 1,
      consoleLog: [
        'Unsupported Schema',
        [
          {
            dataPath: '',
            keyword: 'required',
            message: "should have required property 'offer_name'",
            params: { missingProperty: 'offer_name' },
            schemaPath: '#/required',
          },
        ],
      ],
      result: [
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
  },
];
