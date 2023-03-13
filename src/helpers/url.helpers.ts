import qs from 'qs';

export const prepareUrl = (path: string, params: { [key: string]: string | number }, delimiter = '&'): string => {
  const query: { [key: string]: string | number } = {};
  const result = Object
    .keys(params)
    .reduce((str, key) => {
      // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
      if (str.match(new RegExp(`:${key}`))) {
        str = str.replace(new RegExp(`:${key}`), params[key]?.toString());
      } else {
        query[key] = params[key];
      }
      return str;
    }, path);

  return qs.stringify(query) ? `${result}?${qs.stringify(query, { delimiter })}` : result;
};
