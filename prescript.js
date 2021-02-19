// Zet je public key
const xPublic = 'demo';
const secret = 'demo';

pm.environment.set('x-public', xPublic);

// Date zetten voor de api call
const dateNow = new Date();
const dateNowString = dateNow.getUTCFullYear() + '-' + ("0" + (dateNow.getUTCMonth() + 1)).slice(-2)  + '-' +  dateNow.getUTCDate() + 'T' + dateNow.getUTCHours() + ':'+ dateNow.getMinutes() + ':' + dateNow.getSeconds() + 'Z';
pm.environment.set('x-date', dateNowString);


// X-Hash genereren voor de API call
// "$sPublic_key|$sMethod|$sUri|$sData|$sTimeStamp";
const targetUrl = request.url.trim(); 
const targetUrlClean = targetUrl.replace(new RegExp('^https?://[^/]+/'),'/');
const method = request.method.toUpperCase();

var postData = '';

if(method == 'POST' || method == 'PATCH' || method == 'PUT') {
    postData = request.data;
} 

const xHashString = xPublic + '|' + method + '|' + targetUrlClean + '|'  + postData + '|' + dateNowString;

const xHash = CryptoJS.HmacSHA512(xHashString, secret).toString(CryptoJS.enc.Hex);
pm.environment.set('x-hash', xHash);

