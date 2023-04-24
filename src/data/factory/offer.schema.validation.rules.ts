export const defaultVarcharRule = {
  type: 'string',
  maxLength: 255,
  minLength: 1,
};
export const defaultVarcharRuleWithNulls = {
  type: ['string', 'null'],
  maxLength: 255,
  minLength: 1,
};
export const defaultTextRule = { type: 'string', minLength: 1 };
