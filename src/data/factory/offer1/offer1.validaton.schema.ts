import {
  defaultTextRule,
  defaultVarcharRule,
  defaultVarcharRuleWithNulls,
} from '../offer.schema.validation.rules';

export default {
  type: 'object',
  properties: {
    offer_id: defaultVarcharRule,
    offer_name: defaultVarcharRule,
    offer_desc: defaultTextRule,
    call_to_action: defaultTextRule,
    offer_url: defaultVarcharRuleWithNulls,
    offer_url_easy: defaultVarcharRuleWithNulls,
    image_url: defaultVarcharRuleWithNulls,
    image_url_220x124: defaultVarcharRuleWithNulls,
    platform: defaultVarcharRule,
    device: defaultVarcharRule,
  },
  required: [
    'offer_id',
    'offer_name',
    'offer_desc',
    'call_to_action',
    'platform',
    'device',
  ],
  allOf: [
    { anyOf: [{ required: ['offer_url'] }, { required: ['offer_url_easy'] }] },
    {
      anyOf: [{ required: ['image_url'] }, { required: ['image_url_220x124'] }],
    },
  ],
};
