import dummyjson from 'dummy-json';
function generateJsonData(){
    const template = `{
        {{#repeat 3}}
       "id": {{@index}},
       "name": "{{firstName}} {{lastName}}",
       "work": "{{company}}",
       "email": "{{email}}",
       "dob": "{{date '1900' '2000' 'YYYY'}}",
       "address": "{{int 1 100}} {{street}}",
       "city": "{{city}}",
       {{/repeat}}
   }`
   const result = dummyjson.parse(template);
   const obj = JSON.parse(result);
   return obj;
}
export default generateJsonData;