import CryptoJS from 'crypto-js';

export const isValidUsername = (str: string) => ['admin', 'editor'].indexOf(str.trim()) >= 0;

export function aseDecode(encryptedBase64Str: string | CryptoJS.WordArray) {
  const key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12');
  if (typeof encryptedBase64Str === 'string') {
    encryptedBase64Str = encryptedBase64Str.replace(/[\r\n]/g, '');
  }
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  let jsonStr = CryptoJS.enc.Utf8.stringify(decrypted);
  jsonStr = jsonStr.indexOf('}') > -1 ? jsonStr.substring(0, jsonStr.indexOf('}') + 1) : '{}';
  return JSON.parse(jsonStr);
}

// /**
//  * 加密
//  * @param encryptedBase64Str
//  * @returns {any}
//  */
export function aesEncode(word: any) {
  const key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12');
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}
