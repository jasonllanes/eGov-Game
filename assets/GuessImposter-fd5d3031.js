import{u as Ha,b as Va,r as v,j as c,e as Ga}from"./index-ce5f6cae.js";const za=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw at(e)},at=function(n){return new Error("Firebase Database ("+Gr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ya=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,h=i+2<n.length,l=h?n[i+2]:0,f=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;h||(_=64,o||(p=64)),s.push(t[f],t[d],t[p],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ya(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw new qa;const p=r<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),d!==64){const C=l<<6&192|d;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yr=function(n){const e=zr(n);return Rs.encodeByteArray(e,!0)},rn=function(n){return Yr(n).replace(/\./g,"")},as=function(n){try{return Rs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){return qr(void 0,n)}function qr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Qa(t)||(n[t]=qr(n[t],e[t]));return n}function Qa(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=()=>Ja().__FIREBASE_DEFAULTS__,Za=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},el=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&as(n[1]);return e&&JSON.parse(e)},Kr=()=>{try{return za()||Xa()||Za()||el()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tl=n=>{var e,t;return(t=(e=Kr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},nl=n=>{const e=tl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qr=()=>{var n;return(n=Kr())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[rn(JSON.stringify(t)),rn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(il())}function rl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xr(){return Gr.NODE_ADMIN===!0}function ol(){try{return typeof indexedDB=="object"}catch{return!1}}function al(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="FirebaseError";class Bt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ll,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,s)}}function cl(n,e){return n.replace(hl,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n){return JSON.parse(n)}function U(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=kt(as(r[0])||""),t=kt(as(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ul=function(n){const e=eo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},dl=function(n){const e=eo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ze(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ls(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function an(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Xi(r)&&Xi(o)){if(!an(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Xi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],h=this.chain_[4],l,f;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),f=1518500249):(l=r^o^a,f=1859775393):d<60?(l=r&o|a&(r|o),f=2400959708):(l=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+l+h+f+s[d]&4294967295;h=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function et(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _l(n){return(await fetch(n,{credentials:"include"})).ok}class At{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ue;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vl(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yl(n){return n===De?void 0:n}function vl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const bl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},El=j.INFO,wl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Nl=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=wl[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class no{constructor(e){this.name=e,this._logLevel=El,this._logHandler=Nl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Il=(n,e)=>e.some(t=>n instanceof t);let Zi,er;function xl(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sl(){return er||(er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,cs=new WeakMap,io=new WeakMap,qn=new WeakMap,ks=new WeakMap;function Tl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ne(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&so.set(t,n)}).catch(()=>{}),ks.set(e,n),e}function Rl(n){if(cs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});cs.set(n,e)}let hs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||io.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ne(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kl(n){hs=n(hs)}function Al(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Kn(this),e,...t);return io.set(s,e.sort?e.sort():[e]),Ne(s)}:Sl().includes(n)?function(...e){return n.apply(Kn(this),e),Ne(so.get(this))}:function(...e){return Ne(n.apply(Kn(this),e))}}function Dl(n){return typeof n=="function"?Al(n):(n instanceof IDBTransaction&&Rl(n),Il(n,xl())?new Proxy(n,hs):n)}function Ne(n){if(n instanceof IDBRequest)return Tl(n);if(qn.has(n))return qn.get(n);const e=Dl(n);return e!==n&&(qn.set(n,e),ks.set(e,n)),e}const Kn=n=>ks.get(n);function Pl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ne(o);return s&&o.addEventListener("upgradeneeded",h=>{s(Ne(o.result),h.oldVersion,h.newVersion,Ne(o.transaction),h)}),t&&o.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),a.then(h=>{r&&h.addEventListener("close",()=>r()),i&&h.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ol=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],Qn=new Map;function tr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qn.get(e))return Qn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ml.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ol.includes(t)))return;const r=async function(o,...a){const h=this.transaction(o,i?"readwrite":"readonly");let l=h.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&h.done]))[0]};return Qn.set(e,r),r}kl(n=>({...n,get:(e,t,s)=>tr(e,t)||n.get(e,t,s),has:(e,t)=>!!tr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ll(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ll(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",nr="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new no("@firebase/app"),Fl="@firebase/app-compat",Wl="@firebase/analytics-compat",$l="@firebase/analytics",Bl="@firebase/app-check-compat",Ul="@firebase/app-check",Hl="@firebase/auth",Vl="@firebase/auth-compat",Gl="@firebase/database",zl="@firebase/data-connect",Yl="@firebase/database-compat",ql="@firebase/functions",Kl="@firebase/functions-compat",Ql="@firebase/installations",Jl="@firebase/installations-compat",Xl="@firebase/messaging",Zl="@firebase/messaging-compat",ec="@firebase/performance",tc="@firebase/performance-compat",nc="@firebase/remote-config",sc="@firebase/remote-config-compat",ic="@firebase/storage",rc="@firebase/storage-compat",oc="@firebase/firestore",ac="@firebase/ai",lc="@firebase/firestore-compat",cc="firebase",hc="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",uc={[us]:"fire-core",[Fl]:"fire-core-compat",[$l]:"fire-analytics",[Wl]:"fire-analytics-compat",[Ul]:"fire-app-check",[Bl]:"fire-app-check-compat",[Hl]:"fire-auth",[Vl]:"fire-auth-compat",[Gl]:"fire-rtdb",[zl]:"fire-data-connect",[Yl]:"fire-rtdb-compat",[ql]:"fire-fn",[Kl]:"fire-fn-compat",[Ql]:"fire-iid",[Jl]:"fire-iid-compat",[Xl]:"fire-fcm",[Zl]:"fire-fcm-compat",[ec]:"fire-perf",[tc]:"fire-perf-compat",[nc]:"fire-rc",[sc]:"fire-rc-compat",[ic]:"fire-gcs",[rc]:"fire-gcs-compat",[oc]:"fire-fst",[lc]:"fire-fst-compat",[ac]:"fire-vertex","fire-js":"fire-js",[cc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Map,dc=new Map,fs=new Map;function sr(n,e){try{n.container.addComponent(e)}catch(t){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ln(n){const e=n.name;if(fs.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,n);for(const t of Dt.values())sr(t,n);for(const t of dc.values())sr(t,n);return!0}function fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new Zr("app","Firebase",mc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=hc;function ro(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ds,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ie.create("bad-app-name",{appName:String(i)});if(t||(t=Qr()),!t)throw Ie.create("no-options");const r=Dt.get(i);if(r){if(an(t,r.options)&&an(s,r.config))return r;throw Ie.create("duplicate-app",{appName:i})}const o=new Cl(i);for(const h of fs.values())o.addComponent(h);const a=new _c(t,s,o);return Dt.set(i,a),a}function oo(n=ds){const e=Dt.get(n);if(!e&&n===ds&&Qr())return ro();if(!e)throw Ie.create("no-app",{appName:n});return e}function yc(){return Array.from(Dt.values())}function Ke(n,e,t){let s=uc[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(o.join(" "));return}ln(new At(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="firebase-heartbeat-database",Cc=1,Pt="firebase-heartbeat-store";let Jn=null;function ao(){return Jn||(Jn=Pl(vc,Cc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),Jn}async function bc(n){try{const t=(await ao()).transaction(Pt),s=await t.objectStore(Pt).get(lo(n));return await t.done,s}catch(e){if(e instanceof Bt)ye.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(t.message)}}}async function ir(n,e){try{const s=(await ao()).transaction(Pt,"readwrite");await s.objectStore(Pt).put(e,lo(n)),await s.done}catch(t){if(t instanceof Bt)ye.warn(t.message);else{const s=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ye.warn(s.message)}}}function lo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=1024,wc=30;class Nc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>wc){const o=Sc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ye.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rr(),{heartbeatsToSend:s,unsentEntries:i}=Ic(this._heartbeatsCache.heartbeats),r=rn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ye.warn(t),""}}}function rr(){return new Date().toISOString().substring(0,10)}function Ic(n,e=Ec){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),or(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),or(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ol()?al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ir(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ir(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function or(n){return rn(JSON.stringify({version:2,heartbeats:n})).length}function Sc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n){ln(new At("platform-logger",e=>new jl(e),"PRIVATE")),ln(new At("heartbeat",e=>new Nc(e),"PRIVATE")),Ke(us,nr,n),Ke(us,nr,"esm2020"),Ke("fire-js","")}Tc("");var Rc="firebase",kc="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(Rc,kc,"app");const ar="@firebase/database",lr="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="";function Ac(n){co=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:kt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Dc(e)}}catch{}return new Pc},Me=ho("localStorage"),ps=ho("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new no("@firebase/database"),Oc=function(){let n=1;return function(){return n++}}(),uo=function(n){const e=ml(n),t=new pl;t.update(e);const s=t.digest();return Rs.encodeByteArray(s)},Ut=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ut.apply(null,s):typeof s=="object"?e+=U(s):e+=s,e+=" "}return e};let je=null,cr=!0;const Mc=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Qe.logLevel=j.VERBOSE,je=Qe.log.bind(Qe),e&&ps.set("logging_enabled",!0)):typeof n=="function"?je=n:(je=null,ps.remove("logging_enabled"))},z=function(...n){if(cr===!0&&(cr=!1,je===null&&ps.get("logging_enabled")===!0&&Mc(!0)),je){const e=Ut.apply(null,n);je(e)}},Ht=function(n){return function(...e){z(n,...e)}},ms=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ut(...n);Qe.error(e)},ve=function(...n){const e=`FIREBASE FATAL ERROR: ${Ut(...n)}`;throw Qe.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+Ut(...n);Qe.warn(e)},jc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Lc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tt="[MIN_NAME]",Le="[MAX_NAME]",Be=function(n,e){if(n===e)return 0;if(n===tt||e===Le)return-1;if(e===tt||n===Le)return 1;{const t=hr(n),s=hr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Fc=function(n,e){return n===e?0:n<e?-1:1},vt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+U(e))},As=function(n){if(typeof n!="object"||n===null)return U(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=U(e[s]),t+=":",t+=As(n[e[s]]);return t+="}",t},fo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Y(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const po=function(n){m(!Nn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,h;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(h=t;h;h-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(h=e;h;h-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const f=l.join("");let d="";for(h=0;h<64;h+=8){let p=parseInt(f.substr(h,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},Wc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$c=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Bc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Uc=new RegExp("^-?(0*)\\d{1,10}$"),Hc=-2147483648,Vc=2147483647,hr=function(n){if(Uc.test(n)){const e=Number(n);if(e>=Hc&&e<=Vc)return e}return null},lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},It=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,pc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Je{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Je.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="5",mo="v",_o="s",go="r",yo="f",vo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Co="ls",bo="p",_s="ac",Eo="websocket",wo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,s,i,r=!1,o="",a=!1,h=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=h,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Me.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Me.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Io(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Eo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qc(n)&&(t.ns=n.namespace);const i=[];return Y(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.counters_={}}incrementCounter(e,t=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ka(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={},Zn={};function Ps(n){const e=n.toString();return Xn[e]||(Xn[e]=new Kc),Xn[e]}function Qc(n,e){const t=n.toString();return Zn[t]||(Zn[t]=e()),Zn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&lt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="start",Xc="close",Zc="pLPCommand",eh="pRTLPCB",xo="id",So="pw",To="ser",th="cb",nh="seg",sh="ts",ih="d",rh="dframe",Ro=1870,ko=30,oh=Ro-ko,ah=25e3,lh=3e4;class Ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ht(e),this.stats_=Ps(t),this.urlFn=h=>(this.appCheckToken&&(h[_s]=this.appCheckToken),Io(t,wo,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lh)),Lc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Os((...r)=>{const[o,a,h,l,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ur)this.id=a,this.password=h;else if(o===Xc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ur]="t",s[To]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[th]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mo]=Ds,this.transportSessionId&&(s[_o]=this.transportSessionId),this.lastSessionId&&(s[Co]=this.lastSessionId),this.applicationId&&(s[bo]=this.applicationId),this.appCheckToken&&(s[_s]=this.appCheckToken),typeof location<"u"&&location.hostname&&vo.test(location.hostname)&&(s[go]=yo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ye.forceAllow_=!0}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){return Ye.forceAllow_?!0:!Ye.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wc()&&!$c()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Yr(t),i=fo(s,oh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rh]="t",s[xo]=e,s[So]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Os{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Oc(),window[Zc+this.uniqueCallbackIdentifier]=e,window[eh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Os.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xo]=this.myID,e[So]=this.myPW,e[To]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ko+s.length<=Ro;){const o=this.pendingSegs.shift();s=s+"&"+nh+i+"="+o.seg+"&"+sh+i+"="+o.ts+"&"+ih+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ah)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=16384,hh=45e3;let cn=null;typeof MozWebSocket<"u"?cn=MozWebSocket:typeof WebSocket<"u"&&(cn=WebSocket);class re{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ht(this.connId),this.stats_=Ps(t),this.connURL=re.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[mo]=Ds,typeof location<"u"&&location.hostname&&vo.test(location.hostname)&&(o[go]=yo),t&&(o[_o]=t),s&&(o[Co]=s),i&&(o[_s]=i),r&&(o[bo]=r),Io(e,Eo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Me.set("previous_websocket_failure",!0);try{let s;Xr(),this.mySock=new cn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cn!==null&&!re.forceDisallow_}static previouslyFailed(){return Me.isInMemoryStorage||Me.get("previous_websocket_failure")===!0}markConnectionHealthy(){Me.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=kt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fo(t,ch);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{static get ALL_TRANSPORTS(){return[Ye,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=re&&re.isAvailable();let s=t&&!re.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[re];else{const i=this.transports_=[];for(const r of Ot.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ot.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ot.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=6e4,dh=5e3,fh=10*1024,ph=100*1024,es="t",dr="d",mh="s",fr="r",_h="e",pr="o",mr="a",_r="n",gr="p",gh="h";class yh{constructor(e,t,s,i,r,o,a,h,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=h,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ht("c:"+this.id+":"),this.transportManager_=new Ot(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=It(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(es in e){const t=e[es];t===mr?this.upgradeIfSecondaryHealthy_():t===fr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=vt("t",e),s=vt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_r,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=vt("t",e),s=vt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=vt(es,e);if(dr in e){const s=e[dr];if(t===gh){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===_r){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mh?this.onConnectionShutdown_(s):t===fr?this.onReset_(s):t===_h?ms("Server Error: "+s):t===pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ms("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ds!==s&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),It(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):It(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Me.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Do{static getInstance(){return new hn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=32,vr=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new D("")}function I(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Te(n){return n.pieces_.length-n.pieceNum_}function O(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function Ms(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Po(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function L(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=I(n),s=I(e);if(t===null)return e;if(t===s)return Q(O(n),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ch(n,e){const t=Mt(n,0),s=Mt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Be(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function js(n,e){if(Te(n)!==Te(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ne(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Te(n)>Te(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class bh{constructor(e,t){this.errorPrefix_=t,this.parts_=Mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wn(this.parts_[s]);Oo(this)}}function Eh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=wn(e),Oo(n)}function wh(n){const e=n.parts_.pop();n.byteLength_-=wn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Oo(n){if(n.byteLength_>vr)throw new Error(n.errorPrefix_+"has a key path longer than "+vr+" bytes ("+n.byteLength_+").");if(n.parts_.length>yr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yr+") or object contains a cycle "+Pe(n))}function Pe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Do{static getInstance(){return new Ls}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1e3,Nh=60*5*1e3,Cr=30*1e3,Ih=1.3,xh=3e4,Sh="server_kill",br=3;class ge extends Ao{constructor(e,t,s,i,r,o,a,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=h,this.id=ge.nextPersistentConnectionId_++,this.log_=Ht("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ct,this.maxReconnectDelay_=Nh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!Xr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ls.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(U(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ue,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const h=a.d,l=a.s;ge.warnOnListenWarnings_(h,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&de(e,"w")){const s=Ze(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ul(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ms("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xh&&(this.reconnectDelay_=Ct),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ih)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,s())},l=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:h,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new yh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{J(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&J(d),h())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ls(this.interruptReasons_)&&(this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>As(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=br&&(this.reconnectDelay_=Cr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=br&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+co.replace(/\./g,"-")]=1,Jr()?e["framework.cordova"]=1:rl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hn.getInstance().currentlyOnline();return ls(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(tt,e),i=new S(tt,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn;class Mo extends In{static get __EMPTY_NODE(){return nn}static set __EMPTY_NODE(e){nn=e}compare(e,t){return Be(e.name,t.name)}isDefinedOn(e){throw at("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Le,nn)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,nn)}toString(){return".key"}}const Xe=new Mo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??G.RED,this.left=i??Z.EMPTY_NODE,this.right=r??Z.EMPTY_NODE}copy(e,t,s,i,r){return new G(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Z.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Th{copy(e,t,s,i,r){return this}insert(e,t,s){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Z{constructor(e,t=Z.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Z(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new Z(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sn(this.root_,null,this.comparator_,!0,e)}}Z.EMPTY_NODE=new Th;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n,e){return Be(n.name,e.name)}function Fs(n,e){return Be(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;function kh(n){gs=n}const jo=function(n){return typeof n=="number"?"number:"+po(n):"string:"+n},Lo=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else m(n===gs||n.isEmpty(),"priority of unexpected type.");m(n===gs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;class V{static set __childrenNodeConstructor(e){Er=e}static get __childrenNodeConstructor(){return Er}constructor(e,t=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:I(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=I(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Te(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=po(this.value_):e+=this.value_,this.lazyHash_=uo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=V.VALUE_TYPE_ORDER.indexOf(t),r=V.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo,Wo;function Ah(n){Fo=n}function Dh(n){Wo=n}class Ph extends In{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Be(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Le,new V("[PRIORITY-POST]",Wo))}makePost(e,t){const s=Fo(e);return new S(t,new V("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new Ph;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=Math.log(2);class Mh{constructor(e){const t=r=>parseInt(Math.log(r)/Oh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(n,e,t,s){n.sort(e);const i=function(h,l){const f=l-h;let d,p;if(f===0)return null;if(f===1)return d=n[h],p=t?t(d):d,new G(p,d.node,G.BLACK,null,null);{const _=parseInt(f/2,10)+h,C=i(h,_),T=i(_+1,l);return d=n[_],p=t?t(d):d,new G(p,d.node,G.BLACK,C,T)}},r=function(h){let l=null,f=null,d=n.length;const p=function(C,T){const $=d-C,pe=d;d-=C;const me=i($+1,pe),dt=n[$],qt=t?t(dt):dt;_(new G(qt,dt.node,T,null,me))},_=function(C){l?(l.left=C,l=C):(f=C,l=C)};for(let C=0;C<h.count;++C){const T=h.nextBitIsOne(),$=Math.pow(2,h.count-(C+1));T?p($,G.BLACK):(p($,G.BLACK),p($,G.RED))}return f},o=new Mh(n.length),a=r(o);return new Z(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;const Ge={};class _e{static get Default(){return m(Ge&&F,"ChildrenNode.ts has not been loaded"),ts=ts||new _e({".priority":Ge},{".priority":F}),ts}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ze(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Z?t:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Xe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=un(s,e.getCompare()):a=Ge;const h=e.toString(),l={...this.indexSet_};l[h]=e;const f={...this.indexes_};return f[h]=a,new _e(f,l)}addToIndexes(e,t){const s=on(this.indexes_,(i,r)=>{const o=Ze(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Ge)if(o.isDefinedOn(e.node)){const a=[],h=t.getIterator(S.Wrap);let l=h.getNext();for(;l;)l.name!==e.name&&a.push(l),l=h.getNext();return a.push(e),un(a,o.getCompare())}else return Ge;else{const a=t.get(e.name);let h=i;return a&&(h=h.remove(new S(e.name,a))),h.insert(e,e.node)}});return new _e(s,this.indexSet_)}removeFromIndexes(e,t){const s=on(this.indexes_,i=>{if(i===Ge)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new _e(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt;class w{static get EMPTY_NODE(){return bt||(bt=new w(new Z(Fs),null,_e.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lo(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bt}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bt:t}}getChild(e){const t=I(e);return t===null?this:this.getImmediateChild(t).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?bt:this.priorityNode_;return new w(i,o,r)}}updateChild(e,t){const s=I(e);if(s===null)return t;{m(I(e)!==".priority"||Te(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(O(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&w.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jo(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":uo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vt?-1:0}withIndex(e){if(e===Xe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xe?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jh extends w{constructor(){super(new Z(Fs),w.EMPTY_NODE,_e.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const Vt=new jh;Object.defineProperties(S,{MIN:{value:new S(tt,w.EMPTY_NODE)},MAX:{value:new S(Le,Vt)}});Mo.__EMPTY_NODE=w.EMPTY_NODE;V.__childrenNodeConstructor=w;kh(Vt);Dh(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=!0;function W(n,e=null){if(n===null)return w.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new V(t,W(e))}if(!(n instanceof Array)&&Lh){const t=[];let s=!1;if(Y(n,(o,a)=>{if(o.substring(0,1)!=="."){const h=W(a);h.isEmpty()||(s=s||!h.getPriority().isEmpty(),t.push(new S(o,h)))}}),t.length===0)return w.EMPTY_NODE;const r=un(t,Rh,o=>o.name,Fs);if(s){const o=un(t,F.getCompare());return new w(r,W(e),new _e({".priority":o},{".priority":F}))}else return new w(r,W(e),_e.Default)}else{let t=w.EMPTY_NODE;return Y(n,(s,i)=>{if(de(n,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(W(e))}}Ah(W);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends In{constructor(e){super(),this.indexPath_=e,m(!x(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Be(e.name,t.name):r}makePost(e,t){const s=W(e),i=w.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,Vt);return new S(Le,e)}toString(){return Mt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends In{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Be(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=W(e);return new S(t,s)}toString(){return".value"}}const $h=new Wh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n){return{type:"value",snapshotNode:n}}function nt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function jt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Lt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Bh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(jt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(nt(t,s)):o.trackChildChange(Lt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(jt(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Lt(i,r,o))}else s.trackChildChange(nt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.indexedFilter_=new Ws(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ft.getStartPost_(e),this.endPost_=Ft.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=w.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(w.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ft(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=w.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,_)=>d(_,p)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const h=new S(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(h);if(a.hasChild(t)){const d=a.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,l,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,h);if(f&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Lt(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(jt(t,d));const T=a.updateImmediateChild(t,w.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(nt(p.name,p.node)),T.updateImmediateChild(p.name,p.node)):T}}else return s.isEmpty()?e:f&&o(l,h)>=0?(r!=null&&(r.trackChildChange(jt(l.name,l.node)),r.trackChildChange(nt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Le}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new $s;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hh(n){return n.loadsAllData()?new Ws(n.getIndex()):n.hasLimit()?new Uh(n):new Ft(n)}function wr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===$h?t="$value":n.index_===Xe?t="$key":(m(n.index_ instanceof Fh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=U(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=U(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+U(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=U(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+U(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Nr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ao{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ht("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=dn.getListenId_(e,s),a={};this.listens_[o]=a;const h=wr(e._queryParams);this.restRequest_(r+".json",h,(l,f)=>{let d=f;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,s),Ze(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,t){const s=dn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=wr(e._queryParams),s=e._path.toString(),i=new ue;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fl(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let h=null;if(a.status>=200&&a.status<300){try{h=kt(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,h)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return{value:null,children:new Map}}function ct(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=I(e);n.children.has(s)||n.children.set(s,fn());const i=n.children.get(s);e=O(e),ct(i,e,t)}}function ys(n,e){if(x(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(F,(s,i)=>{ct(n,new D(s),i)}),ys(n,e)}}else if(n.children.size>0){const t=I(e);return e=O(e),n.children.has(t)&&ys(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function vs(n,e,t){n.value!==null?t(e,n.value):Gh(n,(s,i)=>{const r=new D(e.toString()+"/"+s);vs(i,r,t)})}function Gh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Y(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=10*1e3,Yh=30*1e3,qh=5*60*1e3;class Kh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zh(e);const s=Ir+(Yh-Ir)*Math.random();It(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Y(e,(i,r)=>{r>0&&de(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),It(this.reportStats_.bind(this),Math.floor(Math.random()*2*qh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Bs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=oe.ACK_USER_WRITE,this.source=Bs()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new pn(k(),t,this.revert)}}else return m(I(this.path)===e,"operationForChild called for unrelated child."),new pn(O(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.source=e,this.path=t,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new Wt(this.source,k()):new Wt(this.source,O(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=oe.OVERWRITE}operationForChild(e){return x(this.path)?new Fe(this.source,k(),this.snap.getImmediateChild(e)):new Fe(this.source,O(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=oe.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Fe(this.source,k(),t.value):new st(this.source,k(),t)}else return m(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new st(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=I(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Jh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bh(o.childName,o.snapshotNode))}),Et(n,i,"child_removed",e,s,t),Et(n,i,"child_added",e,s,t),Et(n,i,"child_moved",r,s,t),Et(n,i,"child_changed",e,s,t),Et(n,i,"value",e,s,t),i}function Et(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,h)=>Zh(n,a,h)),o.forEach(a=>{const h=Xh(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(h,n.query_))})})}function Xh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Zh(n,e,t){if(e.childName==null||t.childName==null)throw at("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,e){return{eventCache:n,serverCache:e}}function xt(n,e,t,s){return xn(new Re(e,t,s),n.serverCache)}function Bo(n,e,t,s){return xn(n.eventCache,new Re(e,t,s))}function mn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function We(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;const eu=()=>(ns||(ns=new Z(Fc)),ns);class M{static fromObject(e){let t=new M(null);return Y(e,(s,i)=>{t=t.set(new D(s),i)}),t}constructor(e,t=eu()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(x(e))return null;{const s=I(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(O(e),t);return r!=null?{path:L(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=I(e),s=this.children.get(t);return s!==null?s.subtree(O(e)):new M(null)}}set(e,t){if(x(e))return new M(t,this.children);{const s=I(e),r=(this.children.get(s)||new M(null)).set(O(e),t),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=I(e),s=this.children.get(t);if(s){const i=s.remove(O(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=I(e),s=this.children.get(t);return s?s.get(O(e)):null}}setTree(e,t){if(x(e))return t;{const s=I(e),r=(this.children.get(s)||new M(null)).setTree(O(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(O(e),L(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=I(e),r=this.children.get(i);return r?r.foreachOnPath_(O(e),L(t,i),s):new M(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new M(null))}}function St(n,e,t){if(x(e))return new ae(new M(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Q(i,e);return r=r.updateChild(o,t),new ae(n.writeTree_.set(i,r))}else{const i=new M(t),r=n.writeTree_.setTree(e,i);return new ae(r)}}}function Cs(n,e,t){let s=n;return Y(t,(i,r)=>{s=St(s,L(e,i),r)}),s}function xr(n,e){if(x(e))return ae.empty();{const t=n.writeTree_.setTree(e,new M(null));return new ae(t)}}function bs(n,e){return Ue(n,e)!=null}function Ue(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function Sr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function xe(n,e){if(x(e))return n;{const t=Ue(n,e);return t!=null?new ae(new M(t)):new ae(n.writeTree_.subtree(e))}}function Es(n){return n.writeTree_.isEmpty()}function it(n,e){return Uo(k(),n.writeTree_,e)}function Uo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Uo(L(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(L(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,e){return zo(e,n)}function tu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=St(n.visibleWrites,e,t)),n.lastWriteId=s}function nu(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Cs(n.visibleWrites,e,t),n.lastWriteId=s}function su(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function iu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ru(a,s.path)?i=!1:ne(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ou(n),!0;if(s.snap)n.visibleWrites=xr(n.visibleWrites,s.path);else{const a=s.children;Y(a,h=>{n.visibleWrites=xr(n.visibleWrites,L(s.path,h))})}return!0}else return!1}function ru(n,e){if(n.snap)return ne(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ne(L(n.path,t),e))return!0;return!1}function ou(n){n.visibleWrites=Ho(n.allWrites,au,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function au(n){return n.visible}function Ho(n,e,t){let s=ae.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ne(t,o)?(a=Q(t,o),s=St(s,a,r.snap)):ne(o,t)&&(a=Q(o,t),s=St(s,k(),r.snap.getChild(a)));else if(r.children){if(ne(t,o))a=Q(t,o),s=Cs(s,a,r.children);else if(ne(o,t))if(a=Q(o,t),x(a))s=Cs(s,k(),r.children);else{const h=Ze(r.children,I(a));if(h){const l=h.getChild(O(a));s=St(s,k(),l)}}}else throw at("WriteRecord should have .snap or .children")}}return s}function Vo(n,e,t,s,i){if(!s&&!i){const r=Ue(n.visibleWrites,e);if(r!=null)return r;{const o=xe(n.visibleWrites,e);if(Es(o))return t;if(t==null&&!bs(o,k()))return null;{const a=t||w.EMPTY_NODE;return it(o,a)}}}else{const r=xe(n.visibleWrites,e);if(!i&&Es(r))return t;if(!i&&t==null&&!bs(r,k()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(ne(l.path,e)||ne(e,l.path))},a=Ho(n.allWrites,o,e),h=t||w.EMPTY_NODE;return it(a,h)}}}function lu(n,e,t){let s=w.EMPTY_NODE;const i=Ue(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=xe(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const h=it(xe(r,new D(o)),a);s=s.updateImmediateChild(o,h)}),Sr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xe(n.visibleWrites,e);return Sr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cu(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(bs(n.visibleWrites,r))return null;{const o=xe(n.visibleWrites,r);return Es(o)?i.getChild(t):it(o,i.getChild(t))}}function hu(n,e,t,s){const i=L(e,t),r=Ue(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=xe(n.visibleWrites,i);return it(o,s.getNode().getImmediateChild(t))}else return null}function uu(n,e){return Ue(n.visibleWrites,e)}function du(n,e,t,s,i,r,o){let a;const h=xe(n.visibleWrites,e),l=Ue(h,k());if(l!=null)a=l;else if(t!=null)a=it(h,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&f.length<i;)d(_,s)!==0&&f.push(_),_=p.getNext();return f}else return[]}function fu(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function _n(n,e,t,s){return Vo(n.writeTree,n.treePath,e,t,s)}function Vs(n,e){return lu(n.writeTree,n.treePath,e)}function Tr(n,e,t,s){return cu(n.writeTree,n.treePath,e,t,s)}function gn(n,e){return uu(n.writeTree,L(n.treePath,e))}function pu(n,e,t,s,i,r){return du(n.writeTree,n.treePath,e,t,s,i,r)}function Gs(n,e,t){return hu(n.writeTree,n.treePath,e,t)}function Go(n,e){return zo(L(n.treePath,e),n.writeTree)}function zo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Lt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,jt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,nt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Lt(s,e.snapshotNode,i.oldSnap));else throw at("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Yo=new _u;class zs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Re(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:We(this.viewCache_),r=pu(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){return{filter:n}}function yu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vu(n,e,t,s,i){const r=new mu;let o,a;if(t.type===oe.OVERWRITE){const l=t;l.source.fromUser?o=ws(n,e,l.path,l.snap,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!x(l.path),o=yn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===oe.MERGE){const l=t;l.source.fromUser?o=bu(n,e,l.path,l.children,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ns(n,e,l.path,l.children,s,i,a,r))}else if(t.type===oe.ACK_USER_WRITE){const l=t;l.revert?o=Nu(n,e,l.path,s,i,r):o=Eu(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===oe.LISTEN_COMPLETE)o=wu(n,e,t.path,s,r);else throw at("Unknown operation type: "+t.type);const h=r.getChanges();return Cu(e,o,h),{viewCache:o,changes:h}}function Cu(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=mn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push($o(mn(e)))}}function qo(n,e,t,s,i,r){const o=e.eventCache;if(gn(s,t)!=null)return e;{let a,h;if(x(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=We(e),f=l instanceof w?l:w.EMPTY_NODE,d=Vs(s,f);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=_n(s,We(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=I(t);if(l===".priority"){m(Te(t)===1,"Can't have a priority with additional path components");const f=o.getNode();h=e.serverCache.getNode();const d=Tr(s,t,f,h);d!=null?a=n.filter.updatePriority(f,d):a=o.getNode()}else{const f=O(t);let d;if(o.isCompleteForChild(l)){h=e.serverCache.getNode();const p=Tr(s,t,o.getNode(),h);p!=null?d=o.getNode().getImmediateChild(l).updateChild(f,p):d=o.getNode().getImmediateChild(l)}else d=Gs(s,l,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),l,d,f,i,r):a=o.getNode()}}return xt(e,a,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function yn(n,e,t,s,i,r,o,a){const h=e.serverCache;let l;const f=o?n.filter:n.filter.getIndexedFilter();if(x(t))l=f.updateFullNode(h.getNode(),s,null);else if(f.filtersNodes()&&!h.isFiltered()){const _=h.getNode().updateChild(t,s);l=f.updateFullNode(h.getNode(),_,null)}else{const _=I(t);if(!h.isCompleteForPath(t)&&Te(t)>1)return e;const C=O(t),$=h.getNode().getImmediateChild(_).updateChild(C,s);_===".priority"?l=f.updatePriority(h.getNode(),$):l=f.updateChild(h.getNode(),_,$,C,Yo,null)}const d=Bo(e,l,h.isFullyInitialized()||x(t),f.filtersNodes()),p=new zs(i,d,r);return qo(n,d,t,i,p,a)}function ws(n,e,t,s,i,r,o){const a=e.eventCache;let h,l;const f=new zs(i,e,r);if(x(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),h=xt(e,l,!0,n.filter.filtersNodes());else{const d=I(t);if(d===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),h=xt(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=O(t),_=a.getNode().getImmediateChild(d);let C;if(x(p))C=s;else{const T=f.getCompleteChild(d);T!=null?Ms(p)===".priority"&&T.getChild(Po(p)).isEmpty()?C=T:C=T.updateChild(p,s):C=w.EMPTY_NODE}if(_.equals(C))h=e;else{const T=n.filter.updateChild(a.getNode(),d,C,p,f,o);h=xt(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function Rr(n,e){return n.eventCache.isCompleteForChild(e)}function bu(n,e,t,s,i,r,o){let a=e;return s.foreach((h,l)=>{const f=L(t,h);Rr(e,I(f))&&(a=ws(n,a,f,l,i,r,o))}),s.foreach((h,l)=>{const f=L(t,h);Rr(e,I(f))||(a=ws(n,a,f,l,i,r,o))}),a}function kr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ns(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,l;x(t)?l=s:l=new M(null).setTree(t,s);const f=e.serverCache.getNode();return l.children.inorderTraversal((d,p)=>{if(f.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),C=kr(n,_,p);h=yn(n,h,new D(d),C,i,r,o,a)}}),l.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!f.hasChild(d)&&!_){const C=e.serverCache.getNode().getImmediateChild(d),T=kr(n,C,p);h=yn(n,h,new D(d),T,i,r,o,a)}}),h}function Eu(n,e,t,s,i,r,o){if(gn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),h=e.serverCache;if(s.value!=null){if(x(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return yn(n,e,t,h.getNode().getChild(t),i,r,a,o);if(x(t)){let l=new M(null);return h.getNode().forEachChild(Xe,(f,d)=>{l=l.set(new D(f),d)}),Ns(n,e,t,l,i,r,a,o)}else return e}else{let l=new M(null);return s.foreach((f,d)=>{const p=L(t,f);h.isCompleteForPath(p)&&(l=l.set(f,h.getNode().getChild(p)))}),Ns(n,e,t,l,i,r,a,o)}}function wu(n,e,t,s,i){const r=e.serverCache,o=Bo(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return qo(n,o,t,s,Yo,i)}function Nu(n,e,t,s,i,r){let o;if(gn(s,t)!=null)return e;{const a=new zs(s,e,i),h=e.eventCache.getNode();let l;if(x(t)||I(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=_n(s,We(e));else{const d=e.serverCache.getNode();m(d instanceof w,"serverChildren would be complete if leaf node"),f=Vs(s,d)}f=f,l=n.filter.updateFullNode(h,f,r)}else{const f=I(t);let d=Gs(s,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=h.getImmediateChild(f)),d!=null?l=n.filter.updateChild(h,f,d,O(t),a,r):e.eventCache.getNode().hasChild(f)?l=n.filter.updateChild(h,f,w.EMPTY_NODE,O(t),a,r):l=h,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_n(s,We(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||gn(s,k())!=null,xt(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ws(s.getIndex()),r=Hh(s);this.processor_=gu(r);const o=t.serverCache,a=t.eventCache,h=i.updateFullNode(w.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(w.EMPTY_NODE,a.getNode(),null),f=new Re(h,o.isFullyInitialized(),i.filtersNodes()),d=new Re(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xn(d,f),this.eventGenerator_=new Qh(this.query_)}get query(){return this.query_}}function xu(n){return n.viewCache_.serverCache.getNode()}function Su(n){return mn(n.viewCache_)}function Tu(n,e){const t=We(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(I(e)).isEmpty())?t.getChild(e):null}function Ar(n){return n.eventRegistrations_.length===0}function Ru(n,e){n.eventRegistrations_.push(e)}function Dr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Pr(n,e,t,s){e.type===oe.MERGE&&e.source.queryId!==null&&(m(We(n.viewCache_),"We should always have a full cache before handling merges"),m(mn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=vu(n.processor_,i,e,t,s);return yu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ko(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ku(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(nt(r,o))}),t.isFullyInitialized()&&s.push($o(t.getNode())),Ko(n,s,t.getNode(),e)}function Ko(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Jh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class Qo{constructor(){this.views=new Map}}function Au(n){m(!vn,"__referenceConstructor has already been defined"),vn=n}function Du(){return m(vn,"Reference.ts has not been loaded"),vn}function Pu(n){return n.views.size===0}function Ys(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Pr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Pr(o,e,t,s));return r}}function Jo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=_n(t,i?s:null),h=!1;a?h=!0:s instanceof w?(a=Vs(t,s),h=!1):(a=w.EMPTY_NODE,h=!1);const l=xn(new Re(a,h,!1),new Re(s,i,!1));return new Iu(e,l)}return o}function Ou(n,e,t,s,i,r){const o=Jo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ru(o,t),ku(o,t)}function Mu(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ke(n);if(i==="default")for(const[h,l]of n.views.entries())o=o.concat(Dr(l,t,s)),Ar(l)&&(n.views.delete(h),l.query._queryParams.loadsAllData()||r.push(l.query));else{const h=n.views.get(i);h&&(o=o.concat(Dr(h,t,s)),Ar(h)&&(n.views.delete(i),h.query._queryParams.loadsAllData()||r.push(h.query)))}return a&&!ke(n)&&r.push(new(Du())(e._repo,e._path)),{removed:r,events:o}}function Xo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Se(n,e){let t=null;for(const s of n.views.values())t=t||Tu(s,e);return t}function Zo(n,e){if(e._queryParams.loadsAllData())return Tn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ea(n,e){return Zo(n,e)!=null}function ke(n){return Tn(n)!=null}function Tn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;function ju(n){m(!Cn,"__referenceConstructor has already been defined"),Cn=n}function Lu(){return m(Cn,"Reference.ts has not been loaded"),Cn}let Fu=1;class Or{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=fu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ta(n,e,t,s,i){return tu(n.pendingWriteTree_,e,t,s,i),i?ht(n,new Fe(Bs(),e,t)):[]}function Wu(n,e,t,s){nu(n.pendingWriteTree_,e,t,s);const i=M.fromObject(t);return ht(n,new st(Bs(),e,i))}function we(n,e,t=!1){const s=su(n.pendingWriteTree_,e);if(iu(n.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(k(),!0):Y(s.children,o=>{r=r.set(new D(o),!0)}),ht(n,new pn(s.path,r,t))}else return[]}function Gt(n,e,t){return ht(n,new Fe(Us(),e,t))}function $u(n,e,t){const s=M.fromObject(t);return ht(n,new st(Us(),e,s))}function Bu(n,e){return ht(n,new Wt(Us(),e))}function Uu(n,e,t){const s=Ks(n,t);if(s){const i=Qs(s),r=i.path,o=i.queryId,a=Q(r,e),h=new Wt(Hs(o),a);return Js(n,r,h)}else return[]}function bn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ea(o,e))){const h=Mu(o,e,t,s);Pu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=h.removed;if(a=h.events,!i){const f=l.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(p,_)=>ke(_));if(f&&!d){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=Gu(p);for(let C=0;C<_.length;++C){const T=_[C],$=T.query,pe=ra(n,T);n.listenProvider_.startListening(Tt($),$t(n,$),pe.hashFn,pe.onComplete)}}}!d&&l.length>0&&!s&&(f?n.listenProvider_.stopListening(Tt(e),null):l.forEach(p=>{const _=n.queryToTagMap.get(Rn(p));n.listenProvider_.stopListening(Tt(p),_)}))}zu(n,l)}return a}function na(n,e,t,s){const i=Ks(n,s);if(i!=null){const r=Qs(i),o=r.path,a=r.queryId,h=Q(o,e),l=new Fe(Hs(a),h,t);return Js(n,o,l)}else return[]}function Hu(n,e,t,s){const i=Ks(n,s);if(i){const r=Qs(i),o=r.path,a=r.queryId,h=Q(o,e),l=M.fromObject(t),f=new st(Hs(a),h,l);return Js(n,o,f)}else return[]}function Is(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,_)=>{const C=Q(p,i);r=r||Se(_,C),o=o||ke(_)});let a=n.syncPointTree_.get(i);a?(o=o||ke(a),r=r||Se(a,k())):(a=new Qo,n.syncPointTree_=n.syncPointTree_.set(i,a));let h;r!=null?h=!0:(h=!1,r=w.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,C)=>{const T=Se(C,k());T&&(r=r.updateImmediateChild(_,T))}));const l=ea(a,e);if(!l&&!e._queryParams.loadsAllData()){const p=Rn(e);m(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=Yu();n.queryToTagMap.set(p,_),n.tagToQueryMap.set(_,p)}const f=Sn(n.pendingWriteTree_,i);let d=Ou(a,e,t,f,r,h);if(!l&&!o&&!s){const p=Zo(a,e);d=d.concat(qu(n,e,p))}return d}function qs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const h=Q(o,e),l=Se(a,h);if(l)return l});return Vo(i,e,r,t,!0)}function Vu(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,f)=>{const d=Q(l,t);s=s||Se(f,d)});let i=n.syncPointTree_.get(t);i?s=s||Se(i,k()):(i=new Qo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Re(s,!0,!1):null,a=Sn(n.pendingWriteTree_,e._path),h=Jo(i,e,a,r?o.getNode():w.EMPTY_NODE,r);return Su(h)}function ht(n,e){return sa(e,n.syncPointTree_,null,Sn(n.pendingWriteTree_,k()))}function sa(n,e,t,s){if(x(n.path))return ia(n,e,t,s);{const i=e.get(k());t==null&&i!=null&&(t=Se(i,k()));let r=[];const o=I(n.path),a=n.operationForChild(o),h=e.children.get(o);if(h&&a){const l=t?t.getImmediateChild(o):null,f=Go(s,o);r=r.concat(sa(a,h,l,f))}return i&&(r=r.concat(Ys(i,n,s,t))),r}}function ia(n,e,t,s){const i=e.get(k());t==null&&i!=null&&(t=Se(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const h=t?t.getImmediateChild(o):null,l=Go(s,o),f=n.operationForChild(o);f&&(r=r.concat(ia(f,a,h,l)))}),i&&(r=r.concat(Ys(i,n,s,t))),r}function ra(n,e){const t=e.query,s=$t(n,t);return{hashFn:()=>(xu(e)||w.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Uu(n,t._path,s):Bu(n,t._path);{const r=Bc(i,t);return bn(n,t,null,r)}}}}function $t(n,e){const t=Rn(e);return n.queryToTagMap.get(t)}function Rn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ks(n,e){return n.tagToQueryMap.get(e)}function Qs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Js(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Sn(n.pendingWriteTree_,e);return Ys(s,t,i,null)}function Gu(n){return n.fold((e,t,s)=>{if(t&&ke(t))return[Tn(t)];{let i=[];return t&&(i=Xo(t)),Y(s,(r,o)=>{i=i.concat(o)}),i}})}function Tt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lu())(n._repo,n._path):n}function zu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Rn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Yu(){return Fu++}function qu(n,e,t){const s=e._path,i=$t(n,e),r=ra(n,t),o=n.listenProvider_.startListening(Tt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!ke(a.value),"If we're adding a query, it shouldn't be shadowed");else{const h=a.fold((l,f,d)=>{if(!x(l)&&f&&ke(f))return[Tn(f).query];{let p=[];return f&&(p=p.concat(Xo(f).map(_=>_.query))),Y(d,(_,C)=>{p=p.concat(C)}),p}});for(let l=0;l<h.length;++l){const f=h[l];n.listenProvider_.stopListening(Tt(f),$t(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xs(t)}node(){return this.node_}}class Zs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new Zs(this.syncTree_,t)}node(){return qs(this.syncTree_,this.path_)}}const Ku=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ju(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Ju=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},oa=function(n,e,t,s){return ei(e,new Zs(t,n),s)},aa=function(n,e,t){return ei(n,new Xs(e),t)};function ei(n,e,t){const s=n.getPriority().val(),i=Mr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Mr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new V(a,W(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new V(i))),o.forEachChild(F,(a,h)=>{const l=ei(h,e.getImmediateChild(a),t);l!==h&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ni(n,e){let t=e instanceof D?e:new D(e),s=n,i=I(t);for(;i!==null;){const r=Ze(s.node.children,i)||{children:{},childCount:0};s=new ti(i,s,r),t=O(t),i=I(t)}return s}function ut(n){return n.node.value}function la(n,e){n.node.value=e,xs(n)}function ca(n){return n.node.childCount>0}function Xu(n){return ut(n)===void 0&&!ca(n)}function kn(n,e){Y(n.node.children,(t,s)=>{e(new ti(t,n,s))})}function ha(n,e,t,s){t&&!s&&e(n),kn(n,i=>{ha(i,e,!0,s)}),t&&s&&e(n)}function Zu(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function zt(n){return new D(n.parent===null?n.name:zt(n.parent)+"/"+n.name)}function xs(n){n.parent!==null&&ed(n.parent,n.name,n)}function ed(n,e,t){const s=Xu(t),i=de(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,xs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,xs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=/[\[\].#$\/\u0000-\u001F\u007F]/,nd=/[\[\].#$\u0000-\u001F\u007F]/,ss=10*1024*1024,si=function(n){return typeof n=="string"&&n.length!==0&&!td.test(n)},ua=function(n){return typeof n=="string"&&n.length!==0&&!nd.test(n)},sd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ua(n)},da=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Nn(n)||n&&typeof n=="object"&&de(n,".sv")},Ss=function(n,e,t,s){s&&e===void 0||An(et(n,"value"),e,t)},An=function(n,e,t){const s=t instanceof D?new bh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Pe(s));if(typeof e=="function")throw new Error(n+"contains a function "+Pe(s)+" with contents = "+e.toString());if(Nn(e))throw new Error(n+"contains "+e.toString()+" "+Pe(s));if(typeof e=="string"&&e.length>ss/3&&wn(e)>ss)throw new Error(n+"contains a string greater than "+ss+" utf8 bytes "+Pe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Y(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!si(o)))throw new Error(n+" contains an invalid key ("+o+") "+Pe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Eh(s,o),An(n,a,s),wh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Pe(s)+" in addition to actual children.")}},id=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Mt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!si(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ch);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ne(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},fa=function(n,e,t,s){if(s&&e===void 0)return;const i=et(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Y(e,(o,a)=>{const h=new D(o);if(An(i,a,L(t,h)),Ms(h)===".priority"&&!da(a))throw new Error(i+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(h)}),id(i,r)},rd=function(n,e,t){if(!(t&&e===void 0)){if(Nn(e))throw new Error(et(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!da(e))throw new Error(et(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},pa=function(n,e,t,s){if(!(s&&t===void 0)&&!ua(t))throw new Error(et(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},od=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pa(n,e,t,s)},qe=function(n,e){if(I(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ad=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!si(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sd(t))throw new Error(et(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!js(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ma(n,e,t){Dn(n,t),_a(n,s=>js(s,e))}function se(n,e,t){Dn(n,t),_a(n,s=>ne(s,e)||ne(e,s))}function _a(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(cd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function cd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();je&&z("event: "+t.toString()),lt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="repo_interrupt",ud=25;class dd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ld,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fn(),this.transactionQueueTree_=new ti,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fd(n,e,t){if(n.stats_=Ps(n.repoInfo_),n.forceRestClient_||Gc())n.server_=new dn(n.repoInfo_,(s,i,r,o)=>{jr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ge(n.repoInfo_,e,(s,i,r,o)=>{jr(n,s,i,r,o)},s=>{Lr(n,s)},s=>{md(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qc(n.repoInfo_,()=>new Kh(n.stats_,n.server_)),n.infoData_=new Vh,n.infoSyncTree_=new Or({startListening:(s,i,r,o)=>{let a=[];const h=n.infoData_.getNode(s._path);return h.isEmpty()||(a=Gt(n.infoSyncTree_,s._path,h),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ii(n,"connected",!1),n.serverSyncTree_=new Or({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,h)=>{const l=o(a,h);se(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function pd(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Pn(n){return Ku({timestamp:pd(n)})}function jr(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const h=on(t,l=>W(l));o=Hu(n.serverSyncTree_,r,h,i)}else{const h=W(t);o=na(n.serverSyncTree_,r,h,i)}else if(s){const h=on(t,l=>W(l));o=$u(n.serverSyncTree_,r,h)}else{const h=W(t);o=Gt(n.serverSyncTree_,r,h)}let a=r;o.length>0&&(a=rt(n,r)),se(n.eventQueue_,a,o)}function Lr(n,e){ii(n,"connected",e),e===!1&&vd(n)}function md(n,e){Y(e,(t,s)=>{ii(n,t,s)})}function ii(n,e,t){const s=new D("/.info/"+e),i=W(t);n.infoData_.updateSnapshot(s,i);const r=Gt(n.infoSyncTree_,s,i);se(n.eventQueue_,s,r)}function ri(n){return n.nextWriteId_++}function _d(n,e,t){const s=Vu(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());Is(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Gt(n.serverSyncTree_,e._path,r);else{const a=$t(n.serverSyncTree_,e);o=na(n.serverSyncTree_,e._path,r,a)}return se(n.eventQueue_,e._path,o),bn(n.serverSyncTree_,e,t,null,!0),r},i=>(Yt(n,"get for query "+U(e)+" failed: "+i),Promise.reject(new Error(i))))}function gd(n,e,t,s,i){Yt(n,"set",{path:e.toString(),value:t,priority:s});const r=Pn(n),o=W(t,s),a=qs(n.serverSyncTree_,e),h=aa(o,a,r),l=ri(n),f=ta(n.serverSyncTree_,e,h,l,!0);Dn(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(p,_)=>{const C=p==="ok";C||J("set at "+e+" failed: "+p);const T=we(n.serverSyncTree_,l,!C);se(n.eventQueue_,e,T),Ae(n,i,p,_)});const d=ai(n,e);rt(n,d),se(n.eventQueue_,d,[])}function yd(n,e,t,s){Yt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Pn(n),o={};if(Y(t,(a,h)=>{i=!1,o[a]=oa(L(e,a),W(h),n.serverSyncTree_,r)}),i)z("update() called with empty data.  Don't do anything."),Ae(n,s,"ok",void 0);else{const a=ri(n),h=Wu(n.serverSyncTree_,e,o,a);Dn(n.eventQueue_,h),n.server_.merge(e.toString(),t,(l,f)=>{const d=l==="ok";d||J("update at "+e+" failed: "+l);const p=we(n.serverSyncTree_,a,!d),_=p.length>0?rt(n,e):e;se(n.eventQueue_,_,p),Ae(n,s,l,f)}),Y(t,l=>{const f=ai(n,L(e,l));rt(n,f)}),se(n.eventQueue_,e,[])}}function vd(n){Yt(n,"onDisconnectEvents");const e=Pn(n),t=fn();vs(n.onDisconnect_,k(),(i,r)=>{const o=oa(i,r,n.serverSyncTree_,e);ct(t,i,o)});let s=[];vs(t,k(),(i,r)=>{s=s.concat(Gt(n.serverSyncTree_,i,r));const o=ai(n,i);rt(n,o)}),n.onDisconnect_=fn(),se(n.eventQueue_,k(),s)}function Cd(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ys(n.onDisconnect_,e),Ae(n,t,s,i)})}function Fr(n,e,t,s){const i=W(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ct(n.onDisconnect_,e,i),Ae(n,s,r,o)})}function bd(n,e,t,s,i){const r=W(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ct(n.onDisconnect_,e,r),Ae(n,i,o,a)})}function Ed(n,e,t,s){if(ls(t)){z("onDisconnect().update() called with empty data.  Don't do anything."),Ae(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Y(t,(o,a)=>{const h=W(a);ct(n.onDisconnect_,L(e,o),h)}),Ae(n,s,i,r)})}function wd(n,e,t){let s;I(e._path)===".info"?s=Is(n.infoSyncTree_,e,t):s=Is(n.serverSyncTree_,e,t),ma(n.eventQueue_,e._path,s)}function Wr(n,e,t){let s;I(e._path)===".info"?s=bn(n.infoSyncTree_,e,t):s=bn(n.serverSyncTree_,e,t),ma(n.eventQueue_,e._path,s)}function Nd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(hd)}function Yt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function Ae(n,e,t,s){e&&lt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ga(n,e,t){return qs(n.serverSyncTree_,e,t)||w.EMPTY_NODE}function oi(n,e=n.transactionQueueTree_){if(e||On(n,e),ut(e)){const t=va(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Id(n,zt(e),t)}else ca(e)&&kn(e,t=>{oi(n,t)})}function Id(n,e,t){const s=t.map(l=>l.currentWriteId),i=ga(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const f=t[l];m(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Q(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const a=r.val(!0),h=e;n.server_.put(h.toString(),a,l=>{Yt(n,"transaction put response",{path:h.toString(),status:l});let f=[];if(l==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,f=f.concat(we(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();On(n,ni(n.transactionQueueTree_,e)),oi(n,n.transactionQueueTree_),se(n.eventQueue_,e,f);for(let p=0;p<d.length;p++)lt(d[p])}else{if(l==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{J("transaction at "+h.toString()+" failed: "+l);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=l}rt(n,e)}},o)}function rt(n,e){const t=ya(n,e),s=zt(t),i=va(n,t);return xd(n,i,s),s}function xd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const h=e[a],l=Q(t,h.path);let f=!1,d;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)f=!0,d=h.abortReason,i=i.concat(we(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=ud)f=!0,d="maxretry",i=i.concat(we(n.serverSyncTree_,h.currentWriteId,!0));else{const p=ga(n,h.path,o);h.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){An("transaction failed: Data returned ",_,h.path);let C=W(_);typeof _=="object"&&_!=null&&de(_,".priority")||(C=C.updatePriority(p.getPriority()));const $=h.currentWriteId,pe=Pn(n),me=aa(C,p,pe);h.currentOutputSnapshotRaw=C,h.currentOutputSnapshotResolved=me,h.currentWriteId=ri(n),o.splice(o.indexOf($),1),i=i.concat(ta(n.serverSyncTree_,h.path,me,h.currentWriteId,h.applyLocally)),i=i.concat(we(n.serverSyncTree_,$,!0))}else f=!0,d="nodata",i=i.concat(we(n.serverSyncTree_,h.currentWriteId,!0))}se(n.eventQueue_,t,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}On(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)lt(s[a]);oi(n,n.transactionQueueTree_)}function ya(n,e){let t,s=n.transactionQueueTree_;for(t=I(e);t!==null&&ut(s)===void 0;)s=ni(s,t),e=O(e),t=I(e);return s}function va(n,e){const t=[];return Ca(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ca(n,e,t){const s=ut(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);kn(e,i=>{Ca(n,i,t)})}function On(n,e){const t=ut(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,la(e,t.length>0?t:void 0)}kn(e,s=>{On(n,s)})}function ai(n,e){const t=zt(ya(n,e)),s=ni(n.transactionQueueTree_,e);return Zu(s,i=>{is(n,i)}),is(n,s),ha(s,i=>{is(n,i)}),t}function is(n,e){const t=ut(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(we(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?la(e,void 0):t.length=r+1,se(n.eventQueue_,zt(e),i);for(let o=0;o<s.length;o++)lt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Td(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const $r=function(n,e){const t=Rd(n),s=t.namespace;t.domain==="firebase.com"&&ve(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new No(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},Rd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",h=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let f=n.indexOf("/");f===-1&&(f=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(f,d)),f<d&&(i=Sd(n.substring(f,d)));const p=Td(n.substring(Math.min(n.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",h=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:h,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())}}class Ea{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ue;return Cd(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){qe("OnDisconnect.remove",this._path);const e=new ue;return Fr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){qe("OnDisconnect.set",this._path),Ss("OnDisconnect.set",e,this._path,!1);const t=new ue;return Fr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){qe("OnDisconnect.setWithPriority",this._path),Ss("OnDisconnect.setWithPriority",e,this._path,!1),rd("OnDisconnect.setWithPriority",t,!1);const s=new ue;return bd(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){qe("OnDisconnect.update",this._path),fa("OnDisconnect.update",e,this._path,!1);const t=new ue;return Ed(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:Ms(this._path)}get ref(){return new fe(this._repo,this._path)}get _queryIdentifier(){const e=Nr(this._queryParams),t=As(e);return t==="{}"?"default":t}get _queryObject(){return Nr(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof li))return!1;const t=this._repo===e._repo,s=js(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vh(this._path)}}class fe extends li{constructor(e,t){super(e,t,new $s,!1)}get parent(){const e=Po(this._path);return e===null?null:new fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ot{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=En(this.ref,e);return new ot(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ot(i,En(this.ref,s),F)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function R(n,e){return n=$e(n),n._checkNotDeleted("ref"),e!==void 0?En(n._root,e):n._root}function En(n,e){return n=$e(n),I(n._path)===null?od("child","path",e,!1):pa("child","path",e,!1),new fe(n._repo,L(n._path,e))}function Br(n){return n=$e(n),new kd(n._repo,n._path)}function rs(n){return qe("remove",n._path),Oe(n,null)}function Oe(n,e){n=$e(n),qe("set",n._path),Ss("set",e,n._path,!1);const t=new ue;return gd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function he(n,e){fa("update",e,n._path,!1);const t=new ue;return yd(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ze(n){n=$e(n);const e=new wa(()=>{}),t=new Mn(e);return _d(n._repo,n,t).then(s=>new ot(s,new fe(n._repo,n._path),n._queryParams.getIndex()))}class Mn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ba("value",this,new ot(e.snapshotNode,new fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ea(this,e,t):null}matches(e){return e instanceof Mn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ci{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ea(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=En(new fe(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ba(e.type,this,new ot(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ci?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ad(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const h=t,l=(f,d)=>{Wr(n._repo,n,a),h(f,d)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new wa(t,r||void 0),a=e==="value"?new Mn(o):new ci(e,o);return wd(n._repo,n,a),()=>Wr(n._repo,n,a)}function wt(n,e,t,s){return Ad(n,"value",e,t,s)}Au(fe);ju(fe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="FIREBASE_DATABASE_EMULATOR_HOST",Ts={};let Pd=!1;function Od(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=to(r);n.repoInfo_=new No(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Md(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=$r(r,i),a=o.repoInfo,h,l;typeof process<"u"&&process.env&&(l=process.env[Dd]),l?(h=!0,r=`http://${l}?ns=${a.namespace}`,o=$r(r,i),a=o.repoInfo):h=!o.repoInfo.secure;const f=i&&h?new Je(Je.OWNER):new Yc(n.name,n.options,e);ad("Invalid Firebase Database URL",o),x(o.path)||ve("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ld(a,n,f,new zc(n,t));return new Fd(d,n)}function jd(n,e){const t=Ts[e];(!t||t[n.key]!==n)&&ve(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Nd(n),delete t[n.key]}function Ld(n,e,t,s){let i=Ts[e.name];i||(i={},Ts[e.name]=i);let r=i[n.toURLString()];return r&&ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dd(n,Pd,t,s),i[n.toURLString()]=r,r}class Fd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fe(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ve("Cannot call "+e+" on a deleted database.")}}function Wd(n=oo(),e){const t=fc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=nl("database");s&&$d(t,...s)}return t}function $d(n,e,t,s={}){n=$e(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&an(s,r.repoInfo_.emulatorOptions))return;ve("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Je(Je.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:sl(s.mockUserToken,n.app.options.projectId);o=new Je(a)}to(e)&&_l(e),Od(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n){Ac(gc),ln(new At("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Md(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ke(ar,lr,n),Ke(ar,lr,"esm2020")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Bd();const Ur="imposter_pairs",Hr="imposter_pid",os="imposter_gemini_key",Vr=[{id:"dp1",realWord:"Apple",imposterWord:"Pear"},{id:"dp2",realWord:"Beach",imposterWord:"Pool"},{id:"dp3",realWord:"Coffee",imposterWord:"Tea"},{id:"dp4",realWord:"Hospital",imposterWord:"Clinic"},{id:"dp5",realWord:"Piano",imposterWord:"Guitar"},{id:"dp6",realWord:"Mountain",imposterWord:"Hill"},{id:"dp7",realWord:"Sushi",imposterWord:"Onigiri"},{id:"dp8",realWord:"Doctor",imposterWord:"Nurse"}];function Nt(){return Math.random().toString(36).slice(2,11)}function Ud(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function Hd(){let n=sessionStorage.getItem(Hr);return n||(n=Nt(),sessionStorage.setItem(Hr,n)),n}let Rt=null;function Vd(){const n={apiKey:"AIzaSyAl-oljveg6umBEqV7HdkaG6pFM7EgSNPI",authDomain:"guess-the-imposter-5d7ec.firebaseapp.com",databaseURL:"https://guess-the-imposter-5d7ec-default-rtdb.firebaseio.com/",projectId:"guess-the-imposter-5d7ec",storageBucket:"guess-the-imposter-5d7ec.firebasestorage.app",messagingSenderId:"1091095792584",appId:"1:1091095792584:web:9d13beaf49afb9e8e18efd"};if(!n.databaseURL)throw new Error("VITE_FIREBASE_DATABASE_URL is not set in .env");const e=yc().length?oo():ro(n);return Rt=Wd(e),Rt}function zd(){var Qi,Ji;const n=Ha(),[e]=Va(),t=v.useRef(Hd()),[s,i]=v.useState(Rt),[r,o]=v.useState("home"),[a,h]=v.useState(""),[l,f]=v.useState(null),[d,p]=v.useState({}),[_,C]=v.useState(!1),T=v.useRef([]),[$,pe]=v.useState(()=>(e.get("room")||"").toUpperCase()),[me,dt]=v.useState(""),[qt,ft]=v.useState(""),[hi,ui]=v.useState(!1),[Kt,Na]=v.useState(""),[di,Qt]=v.useState(""),[fi,pi]=v.useState(!1),[q,pt]=v.useState(()=>{try{const u=localStorage.getItem(Ur);return u?JSON.parse(u):Vr}catch{return Vr}}),[Jt,jn]=v.useState(""),[Xt,Ln]=v.useState(""),[Zt,mi]=v.useState(()=>localStorage.getItem(os)||""),[_i,gi]=v.useState(!1),[yi,Fn]=v.useState(""),[Wn,Ia]=v.useState(5),[Ce,xa]=v.useState({}),[vi,$n]=v.useState(""),[Ci,bi]=v.useState(30),[Ei,wi]=v.useState(10),[Ni,Ii]=v.useState(1),[xi,Si]=v.useState(3),[,Sa]=v.useState(0),[Ti,Ri]=v.useState(null),ki=v.useRef({}),[Bn,Un]=v.useState(null),[Ta,Hn]=v.useState(!1),[Vn,Ai]=v.useState(!1),[Di,Ra]=v.useState(!1),[ka,Pi]=v.useState([]),[mt,Oi]=v.useState([]),[_t,Mi]=v.useState(!1),[Gn,ji]=v.useState(""),[Li,Fi]=v.useState(0),Wi=v.useRef(null),$i=v.useRef(0),Aa=["😂","😱","🤔","👀","🔥","😤","🫡","💀"],Da=4e3,N=Object.values(d).sort((u,y)=>u.joinedAt-y.joinedAt),ie=(Qi=l==null?void 0:l.playerOrder)!=null&&Qi.length?l.playerOrder.map(u=>d[u]).filter(Boolean):N,K=l?t.current===l.hostId:!1,H=d[t.current],Bi=N.length>0&&N.every(u=>u.hasSeenWord),Ui=N.length>0&&N.every(u=>u.vote!=="");v.useEffect(()=>{localStorage.setItem(Ur,JSON.stringify(q))},[q]),v.useEffect(()=>{if(Rt){i(Rt);return}try{const u=Vd();i(u)}catch(u){console.error("Firebase init failed:",u)}},[]),v.useEffect(()=>{!s||localStorage.getItem(os)||ze(R(s,"config/groqApiKey")).then(u=>{u.exists()&&mi(u.val())}).catch(()=>{})},[s]),v.useEffect(()=>()=>{T.current.forEach(u=>u())},[]),v.useEffect(()=>{if(!s||!_||!a)return;T.current.forEach(g=>g()),T.current=[];const u=wt(R(s,`rooms/${a}/state`),g=>{g.exists()?f(g.val()):(C(!1),f(null),p({}),h(""))}),y=wt(R(s,`rooms/${a}/players`),g=>{p(g.exists()?g.val():{})}),b=wt(R(s,`rooms/${a}/clues`),g=>{xa(g.exists()?g.val():{})}),E=wt(R(s,`rooms/${a}/reactions`),g=>{if(!g.exists()){Pi([]);return}const P=Object.values(g.val());Pi(P.sort((B,ee)=>B.sentAt-ee.sentAt))}),A=wt(R(s,`rooms/${a}/chat`),g=>{if(!g.exists()){Oi([]);return}const P=Object.values(g.val());Oi(P.sort((B,ee)=>B.sentAt-ee.sentAt))});return T.current=[u,y,b,E,A],()=>{u(),y(),b(),E(),A()}},[s,_,a]),v.useEffect(()=>{if(!s||!l||l.status!=="revealing"||!K||!Bi)return;const u=[...N.map(y=>y.id)].sort(()=>Math.random()-.5);he(R(s,`rooms/${a}/state`),{status:"discussing",turnIdx:0,turnEndsAt:Date.now()+l.turnSeconds*1e3,playerOrder:u})},[Bi,l==null?void 0:l.status,K,s,a]),v.useEffect(()=>{!s||!l||l.status!=="voting"||!K||!Ui||he(R(s,`rooms/${a}/state`),{status:"results"})},[Ui,l==null?void 0:l.status,K,s,a]),v.useEffect(()=>{if(!l||l.status!=="discussing")return;const u=setInterval(()=>Sa(y=>y+1),500);return()=>clearInterval(u)},[l==null?void 0:l.status]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!K)return;const{turnIdx:u,turnEndsAt:y,turnSeconds:b,rotationCount:E}=l,A=ie.length*E;if(u>=A)return;const g=Math.max(0,y-Date.now())+150,P=setTimeout(async()=>{if((await ze(R(s,`rooms/${a}/state/turnIdx`))).val()!==u)return;(await ze(R(s,`rooms/${a}/clues/${u}`))).exists()||await Oe(R(s,`rooms/${a}/clues/${u}`),"⏱ (time ran out)");const be=u+1,Ee={[`rooms/${a}/state/turnIdx`]:be};be<A&&(Ee[`rooms/${a}/state/turnEndsAt`]=Date.now()+b*1e3),await he(R(s,"/"),Ee)},g);return()=>clearTimeout(P)},[l==null?void 0:l.turnIdx,l==null?void 0:l.turnEndsAt,l==null?void 0:l.status,K,s,a,N.length]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!K)return;const{gameStartsAt:u,gameDurationMinutes:y,rotationCount:b}=l;if(!u||y<=0)return;const E=N.length*b;if(l.turnIdx>=E)return;const A=u+y*60*1e3,g=Math.max(0,A-Date.now())+200,P=setTimeout(async()=>{((await ze(R(s,`rooms/${a}/state/turnIdx`))).val()??0)>=E||await he(R(s,`rooms/${a}/state`),{turnIdx:E})},g);return()=>clearTimeout(P)},[l==null?void 0:l.gameStartsAt,l==null?void 0:l.status,K,s,a,N.length,l==null?void 0:l.rotationCount]),v.useEffect(()=>{const u=Object.keys(ki.current),y=Object.keys(Ce).find(E=>!u.includes(E));if(ki.current={...Ce},!y)return;Ri(y);const b=setTimeout(()=>Ri(null),2e3);return()=>clearTimeout(b)},[Ce]),v.useEffect(()=>{(l==null?void 0:l.status)!=="revealing"&&(Hn(!1),Ai(!1))},[l==null?void 0:l.status]),v.useEffect(()=>{$n("")},[l==null?void 0:l.turnIdx]),v.useEffect(()=>{var u;_t&&((u=Wi.current)==null||u.scrollIntoView({behavior:"smooth"}))},[mt,_t]),v.useEffect(()=>{_t?(Fi(0),$i.current=Date.now()):Fi(mt.filter(u=>u.sentAt>$i.current&&u.pid!==t.current).length)},[mt,_t]);const Hi=async()=>{if(!s||!Kt.trim()){Qt("Enter your name.");return}if(q.length===0){Qt("No word pairs! Add some words first.");return}pi(!0),Qt("");try{const u=Ud(),y=Date.now(),b={status:"lobby",hostId:t.current,realWord:"",imposterWord:"",imposterPlayerId:"",createdAt:y,turnIdx:0,turnEndsAt:0,turnSeconds:30,gameDurationMinutes:10,rotationCount:1,roundCount:3,currentRound:1,gameStartsAt:0,playerOrder:[]},E={id:t.current,name:Kt.trim(),joinedAt:y,hasSeenWord:!1,vote:"",isHost:!0};await Oe(R(s,`rooms/${u}`),{state:b,players:{[t.current]:E}}),Br(R(s,`rooms/${u}`)).remove(),h(u),C(!0)}catch(u){Qt(u instanceof Error?u.message:"Failed to create room.")}finally{pi(!1)}},Vi=async()=>{if(!s)return;const u=$.trim().toUpperCase();if(!u||!me.trim()){ft("Fill in both fields.");return}ui(!0),ft("");try{const y=await ze(R(s,`rooms/${u}/state`));if(!y.exists()){ft("Room not found. Check the code.");return}if(y.val().status!=="lobby"){ft("Game already started.");return}const E={id:t.current,name:me.trim(),joinedAt:Date.now(),hasSeenWord:!1,vote:"",isHost:!1};await Oe(R(s,`rooms/${u}/players/${t.current}`),E),Br(R(s,`rooms/${u}/players/${t.current}`)).remove(),h(u),C(!0)}catch(y){ft(y instanceof Error?y.message:"Failed to join.")}finally{ui(!1)}},Pa=async()=>{if(!s||!K||N.length<3)return;const u=q[Math.floor(Math.random()*q.length)],y=N[Math.floor(Math.random()*N.length)].id;pt(b=>b.filter(E=>E.id!==u.id)),await he(R(s,"/"),{[`rooms/${a}/state/status`]:"revealing",[`rooms/${a}/state/realWord`]:u.realWord,[`rooms/${a}/state/imposterWord`]:u.imposterWord,[`rooms/${a}/state/imposterPlayerId`]:y,[`rooms/${a}/state/turnSeconds`]:Ci,[`rooms/${a}/state/gameDurationMinutes`]:Ei,[`rooms/${a}/state/rotationCount`]:Ni,[`rooms/${a}/state/roundCount`]:xi,[`rooms/${a}/state/currentRound`]:1,[`rooms/${a}/state/gameStartsAt`]:Date.now(),[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/chat`]:null})},Oa=()=>{s&&he(R(s,`rooms/${a}/players/${t.current}`),{hasSeenWord:!0})},Ma=()=>{!s||!K||he(R(s,`rooms/${a}/state`),{status:"voting"})},ja=u=>{!s||H!=null&&H.vote||he(R(s,`rooms/${a}/players/${t.current}`),{vote:u})},Gi=async()=>{if(!s||!K||!l)return;const u=(l.currentRound||1)+1,y=u>(l.roundCount||3),b={[`rooms/${a}/state/status`]:"lobby",[`rooms/${a}/state/realWord`]:"",[`rooms/${a}/state/imposterWord`]:"",[`rooms/${a}/state/imposterPlayerId`]:"",[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/state/currentRound`]:y?1:u,[`rooms/${a}/clues`]:null,[`rooms/${a}/chat`]:null};N.forEach(E=>{b[`rooms/${a}/players/${E.id}/hasSeenWord`]=!1,b[`rooms/${a}/players/${E.id}/vote`]=""}),await he(R(s,"/"),b)},zi=async()=>{if(!s||!l)return;const u=ie.length*l.rotationCount,y=ie[l.turnIdx%ie.length];if(!y||y.id!==t.current)return;const b=l.turnIdx;if(await Oe(R(s,`rooms/${a}/clues/${b}`),vi.trim()||"(skipped)"),$n(""),(await ze(R(s,`rooms/${a}/state/turnIdx`))).val()!==b)return;const A=b+1,g={[`rooms/${a}/state/turnIdx`]:A};A<u&&(g[`rooms/${a}/state/turnEndsAt`]=Date.now()+l.turnSeconds*1e3),await he(R(s,"/"),g)},La=async u=>{if(!s||!a||!H)return;const y=Nt(),b={id:y,pid:t.current,name:H.name,emoji:u,sentAt:Date.now()};await Oe(R(s,`rooms/${a}/reactions/${y}`),b),setTimeout(()=>rs(R(s,`rooms/${a}/reactions/${y}`)),Da+500)},zn=c.jsx("div",{className:"gi-reaction-bar",children:Aa.map(u=>c.jsx("button",{className:"gi-reaction-btn",onClick:()=>La(u),children:u},u))}),Yn=c.jsx("div",{className:"gi-reaction-overlay","aria-hidden":!0,children:ka.map(u=>c.jsxs("div",{className:"gi-reaction-float",style:{left:`${u.sentAt%1e3/10+5}%`},children:[c.jsx("span",{className:"gi-reaction-emoji",children:u.emoji}),c.jsx("span",{className:"gi-reaction-label",children:u.name})]},u.id))}),Yi=async()=>{if(!s||!a||!H||!Gn.trim())return;const u=Nt(),y={id:u,pid:t.current,name:H.name,text:Gn.trim(),sentAt:Date.now()};await Oe(R(s,`rooms/${a}/chat/${u}`),y),ji("")},gt=c.jsxs("button",{className:"gi-chat-fab",onClick:()=>Mi(u=>!u),"aria-label":"Toggle chat",children:["💬",Li>0&&c.jsx("span",{className:"gi-chat-fab-badge",children:Li})]}),yt=_t?c.jsxs("div",{className:"gi-chat-panel",children:[c.jsxs("div",{className:"gi-chat-header",children:[c.jsx("span",{className:"gi-chat-title",children:"💬 Room Chat"}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Mi(!1),children:"✕"})]}),c.jsxs("div",{className:"gi-chat-messages",children:[mt.length===0&&c.jsx("p",{className:"gi-chat-empty",children:"No messages yet. Say hi! 👋"}),mt.map(u=>c.jsxs("div",{className:`gi-chat-msg${u.pid===t.current?" gi-chat-msg--me":""}`,children:[u.pid!==t.current&&c.jsx("span",{className:"gi-chat-msg-name",children:u.name}),c.jsx("div",{className:"gi-chat-msg-bubble",children:u.text})]},u.id)),c.jsx("div",{ref:Wi})]}),c.jsxs("div",{className:"gi-chat-input-row",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Message…",value:Gn,onChange:u=>ji(u.target.value),onKeyDown:u=>u.key==="Enter"&&Yi(),maxLength:200}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Yi,children:"↑"})]})]}):null,qi=async()=>{!s||!a||(T.current.forEach(u=>u()),T.current=[],K?await rs(R(s,`rooms/${a}`)):await rs(R(s,`rooms/${a}/players/${t.current}`)),C(!1),f(null),p({}),h(""))},He=()=>{!Jt.trim()||!Xt.trim()||(pt(u=>[...u,{id:Nt(),realWord:Jt.trim(),imposterWord:Xt.trim()}]),jn(""),Ln(""))},Fa=async()=>{var u,y,b,E;if(!Zt.trim()){Fn("Enter a Groq API key.");return}gi(!0),Fn("");try{const A=`Generate ${Wn} word pairs for a "Guess the Imposter" party game.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common English words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}
- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`,g=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Zt}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:A}],temperature:.8})});if(!g.ok){const le=await g.json();throw new Error(((u=le==null?void 0:le.error)==null?void 0:u.message)||`HTTP ${g.status}`)}const ee=(((E=(b=(y=(await g.json()).choices)==null?void 0:y[0])==null?void 0:b.message)==null?void 0:E.content)??"").match(/\[[\s\S]*\]/);if(!ee)throw new Error("Unexpected AI response format.");const be=JSON.parse(ee[0]),Ee=le=>le.charAt(0).toUpperCase()+le.slice(1);pt(le=>[...le,...be.map(en=>({id:Nt(),realWord:Ee(en.realWord),imposterWord:Ee(en.imposterWord)}))]),localStorage.setItem(os,Zt)}catch(A){Fn(A instanceof Error?A.message:"Failed to generate.")}finally{gi(!1)}},Wa=()=>{const u={};N.forEach(g=>{g.vote&&(u[g.vote]=(u[g.vote]||0)+1)});const y=Math.max(...Object.values(u),0),b=Object.entries(u).filter(([,g])=>g===y).map(([g])=>g),E=l?d[l.imposterPlayerId]:void 0,A=E?b.includes(E.id):!1;return{tally:u,imposter:E,caught:A}},Ki=`${window.location.origin}${window.location.pathname}?room=${a}`,$a=()=>navigator.clipboard.writeText(Ki),Ba=()=>navigator.clipboard.writeText(a);if(!_&&r==="home")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-menu",children:[c.jsx("img",{src:Ga,className:"imposter-logo",alt:"eGov Logo"}),c.jsx("h1",{className:"imposter-title",children:"Guess the Imposter"}),c.jsx("p",{className:"imposter-subtitle",children:"One player has a different word — can the group find them?"}),c.jsxs("div",{className:"imposter-menu-buttons",children:[c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:()=>o("creating"),children:"🏠 Create Room"}),c.jsx("button",{className:"gi-btn gi-btn--secondary",onClick:()=>{pe((e.get("room")||"").toUpperCase()),o("joining")},children:"🚪 Join Room"}),c.jsxs("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("word-manager"),children:["📝 Manage Words ",c.jsx("span",{className:"gi-badge",children:q.length})]})]}),c.jsx("div",{className:"gi-footer-links",children:c.jsx("button",{className:"gi-back-link",onClick:()=>n("/eGov-Game/main-page"),children:"← Back to Games"})})]})});if(!_&&r==="creating")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-setup-card",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Create Room"})]}),c.jsx("label",{className:"gi-label",children:"Your Name (as host)"}),c.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:Kt,onChange:u=>Na(u.target.value),onKeyDown:u=>u.key==="Enter"&&Hi(),autoFocus:!0}),q.length===0?c.jsxs("div",{className:"gi-warning",children:["No word pairs! ",c.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Add words first →"})]}):c.jsxs("p",{className:"gi-hint",style:{marginTop:"0.25rem"},children:[q.length," word pair",q.length!==1?"s":""," ready."," ",c.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Manage"})]}),di&&c.jsx("p",{className:"gi-error",children:di}),c.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Hi,disabled:fi||!Kt.trim()||q.length===0,children:fi?"Creating…":"Create Room →"})]})]})});if(!_&&r==="joining")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-setup-card",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Join Room"})]}),c.jsx("label",{className:"gi-label",children:"Room Code"}),c.jsx("input",{className:"gi-input gi-input--code",style:{width:"100%",boxSizing:"border-box"},placeholder:"XXXXXX",maxLength:6,value:$,onChange:u=>pe(u.target.value.toUpperCase())}),c.jsx("label",{className:"gi-label",style:{marginTop:"0.75rem"},children:"Your Name"}),c.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:me,onChange:u=>dt(u.target.value),onKeyDown:u=>u.key==="Enter"&&Vi()}),qt&&c.jsx("p",{className:"gi-error",children:qt}),c.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Vi,disabled:hi||!$.trim()||!me.trim(),children:hi?"Joining…":"Join →"})]})]})});if(r==="word-manager")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-word-manager",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Word Pairs"}),c.jsx("span",{className:"gi-badge gi-badge--large",children:q.length})]}),c.jsxs("div",{className:"wm-add-form",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word (most players)",value:Jt,onChange:u=>jn(u.target.value),onKeyDown:u=>u.key==="Enter"&&He()}),c.jsx("span",{className:"wm-vs",children:"⇄"}),c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Xt,onChange:u=>Ln(u.target.value),onKeyDown:u=>u.key==="Enter"&&He()}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:He,children:"Add"})]}),c.jsxs("div",{className:"wm-ai-section",children:[c.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Gemini)"}),c.jsxs("div",{className:"wm-ai-controls",children:[c.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:Zt,onChange:u=>mi(u.target.value)}),c.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:Wn,onChange:u=>Ia(Math.max(1,Math.min(20,Number(u.target.value))))}),c.jsx("button",{className:"gi-btn gi-btn--ai",onClick:Fa,disabled:_i,children:_i?"Generating…":`Generate ${Wn}`})]}),yi&&c.jsx("p",{className:"gi-error",children:yi}),c.jsxs("p",{className:"gi-hint",children:["Get a free key at ",c.jsx("span",{className:"gi-hint-strong",children:"aistudio.google.com"})]})]}),c.jsxs("div",{className:"wm-list",children:[q.length===0&&c.jsx("p",{className:"wm-empty",children:"No pairs yet."}),q.map(u=>c.jsxs("div",{className:"wm-pair-row",children:[c.jsx("span",{className:"wm-real",children:u.realWord}),c.jsx("span",{className:"wm-arrow",children:"⇄"}),c.jsx("span",{className:"wm-imposter",children:u.imposterWord}),c.jsx("button",{className:"wm-delete-btn",onClick:()=>pt(y=>y.filter(b=>b.id!==u.id)),children:"✕"})]},u.id))]})]})});if(!_||!l)return null;if(l.status==="lobby")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-lobby-card",children:[c.jsxs("div",{className:"gi-lobby-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"gi-room-label",children:"Room Code"}),c.jsx("div",{className:"gi-room-code",onClick:Ba,title:"Click to copy",children:a})]}),c.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:qi,children:K?"Close Room":"Leave"})]}),c.jsxs("div",{className:"gi-share-row",children:[c.jsx("span",{className:"gi-share-url",children:Ki}),c.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:$a,children:"Copy Link"})]}),c.jsxs("div",{className:"gi-lobby-players-label",children:["Players ",c.jsx("span",{className:"gi-badge",children:N.length}),N.length<3&&c.jsx("span",{className:"gi-hint",style:{marginLeft:"0.5rem"},children:"Need at least 3"})]}),c.jsxs("div",{className:"gi-player-list",children:[N.map(u=>c.jsxs("div",{className:`gi-player-chip${u.id===t.current?" gi-player-chip--me":""}`,children:[u.isHost&&c.jsx("span",{className:"gi-host-badge",children:"HOST"}),u.name,u.id===t.current&&c.jsx("span",{style:{opacity:.5,fontSize:"0.75rem"},children:" (you)"})]},u.id)),N.length===0&&c.jsx("p",{className:"wm-empty",children:"Waiting for players…"})]}),K?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gi-config-grid",children:[c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"⏱ Secs per turn"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>bi(u=>Math.max(10,u-5)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ci,"s"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>bi(u=>Math.min(120,u+5)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🕐 Game duration"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>wi(u=>Math.max(1,u-1)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ei,"m"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>wi(u=>Math.min(60,u+1)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🔄 Rotations"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>Ii(u=>Math.max(1,u-1)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ni,"×"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Ii(u=>Math.min(5,u+1)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🏆 Rounds"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>Si(u=>Math.max(1,u-1)),children:"−"}),c.jsx("span",{className:"gi-turn-config-value",children:xi}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Si(u=>Math.min(10,u+1)),children:"+"})]})]})]}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",marginTop:"0.5rem"},disabled:N.length<3,onClick:Pa,children:N.length<3?`Need ${3-N.length} more player${3-N.length!==1?"s":""}`:"Start Game →"}),c.jsxs("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.25rem"},onClick:()=>Ra(u=>!u),children:["📝 Words (",q.length,") ",Di?"▲":"▼"]}),Di&&c.jsxs("div",{className:"gi-lobby-words",children:[c.jsxs("div",{className:"wm-add-form",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word",value:Jt,onChange:u=>jn(u.target.value),onKeyDown:u=>u.key==="Enter"&&He()}),c.jsx("span",{className:"wm-vs",children:"⇄"}),c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Xt,onChange:u=>Ln(u.target.value),onKeyDown:u=>u.key==="Enter"&&He()}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:He,children:"Add"})]}),c.jsxs("div",{className:"wm-list",children:[q.length===0&&c.jsx("p",{className:"wm-empty",children:"No pairs yet — add some above!"}),q.map(u=>c.jsxs("div",{className:"wm-pair-row",children:[c.jsx("span",{className:"wm-real",children:u.realWord}),c.jsx("span",{className:"wm-arrow",children:"⇄"}),c.jsx("span",{className:"wm-imposter",children:u.imposterWord}),c.jsx("button",{className:"wm-delete-btn",onClick:()=>pt(y=>y.filter(b=>b.id!==u.id)),children:"✕"})]},u.id))]})]})]}):c.jsx("div",{className:"gi-waiting-banner",children:"⏳ Waiting for host to start the game…"}),gt,yt]})});if(l.status==="revealing"){const u=t.current===l.imposterPlayerId,y=u?l.imposterWord:l.realWord,b=(H==null?void 0:H.hasSeenWord)||!1,E=N.filter(B=>B.hasSeenWord).length,A=l.gameStartsAt?Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3)):l.gameDurationMinutes*60,g=Math.floor(A/60),P=A%60;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-reveal",children:[c.jsxs("div",{className:"gi-game-topbar",children:[c.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),c.jsxs("div",{className:"gi-game-timer",children:["🕐 ",g,":",String(P).padStart(2,"0")]})]}),c.jsx("h2",{className:"gi-phase-title",children:"Your Secret Word"}),c.jsx("p",{className:"gi-phase-subtitle",children:"Private — don't show other screens!"}),c.jsx("div",{className:"reveal-card-wrap",children:c.jsxs("div",{className:`reveal-card${Vn?"":" reveal-card--tap-me"}${Ta?" reveal-card--flipped":""}${b?" reveal-card--visible":""}`,onClick:()=>{Vn?Hn(B=>!B):(Ai(!0),Hn(!0))},children:[c.jsxs("div",{className:"reveal-card__face reveal-card__face--front",children:[c.jsx("div",{className:"reveal-player-num",children:H?H.name[0].toUpperCase():"?"}),c.jsx("div",{className:"reveal-player-name",children:H==null?void 0:H.name}),c.jsx("div",{className:"reveal-tap-badge",children:"👆 Tap to reveal"}),c.jsx("p",{className:"reveal-tap-hint",children:"Your secret word is hidden — tap to see it!"})]}),c.jsxs("div",{className:"reveal-card__face reveal-card__face--back",children:[c.jsx("div",{className:"reveal-word-label",children:"Your word is:"}),c.jsx("div",{className:"reveal-word",children:y}),c.jsx("p",{className:`reveal-role-hint${u?" reveal-role-hint--imposter":""}`,children:u?"🕵️ You are the IMPOSTER — blend in!":"✅ Give clues without saying the word!"}),c.jsxs("p",{className:"reveal-tap-hint",style:{marginTop:"0.5rem"},children:["👆 Tap to ",b?"hide":"close"]})]})]})}),Vn&&!b&&c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",maxWidth:"340px"},onClick:Oa,children:"✅ I've seen my word — Ready!"}),b&&c.jsx("p",{className:"gi-hint",style:{textAlign:"center"},children:"✔️ Confirmed! Waiting for others…"}),c.jsx("div",{className:"gi-seen-players",children:N.map(B=>c.jsxs("div",{className:`gi-seen-chip${B.hasSeenWord?" gi-seen-chip--ready":""}`,children:[c.jsx("span",{className:"gi-seen-chip-avatar",children:B.name[0].toUpperCase()}),c.jsx("span",{className:"gi-seen-chip-name",children:B.name}),B.hasSeenWord?c.jsx("span",{className:"gi-seen-chip-check",children:"✓"}):c.jsx("span",{className:"gi-seen-chip-wait",children:"⋯"})]},B.id))}),c.jsxs("div",{className:"gi-seen-progress",children:[c.jsxs("span",{className:"gi-hint",children:[E," / ",N.length," players ready"]}),c.jsx("div",{className:"gi-progress-bar",children:c.jsx("div",{className:"gi-progress-fill",style:{width:`${E/N.length*100}%`}})})]}),gt,yt]})})}if(l.status==="discussing"){const{turnIdx:u,turnEndsAt:y,turnSeconds:b,rotationCount:E}=l,A=ie.length*E,g=u>=A,P=g?null:ie[u%ie.length],B=(P==null?void 0:P.id)===t.current,ee=g?0:Math.max(0,Math.floor((y-Date.now())/1e3)),be=36,Ee=2*Math.PI*be,le=b>0?ee/b:0,en=Ee*(1-le),Ua=ee<=5&&ee>0;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-discuss",children:[c.jsxs("div",{className:"gi-game-topbar",children:[c.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),l.gameStartsAt>0&&(()=>{const X=Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3));return c.jsxs("div",{className:`gi-game-timer${X<=60?" gi-game-timer--low":""}`,children:["🕐 ",Math.floor(X/60),":",String(X%60).padStart(2,"0")]})})()]}),g?c.jsxs("div",{className:"gi-all-done-banner",children:[c.jsx("div",{className:"gi-all-done-icon",children:"✅"}),c.jsx("div",{className:"gi-all-done-text",children:"All clues in!"}),K?c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",onClick:Ma,children:"Start Voting →"}):c.jsx("p",{className:"gi-hint",children:"Waiting for host to start voting…"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gi-turn-header",children:[c.jsx("div",{className:"gi-turn-player-name",children:B?"🎤 Your turn!":`🎤 ${P==null?void 0:P.name}'s turn`}),c.jsxs("svg",{className:"gi-countdown-svg",width:"88",height:"88",viewBox:"0 0 88 88",children:[c.jsx("circle",{cx:"44",cy:"44",r:be,fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),c.jsx("circle",{cx:"44",cy:"44",r:be,fill:"none",stroke:Ua?"#ef4444":"#6366f1",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:Ee,strokeDashoffset:en,transform:"rotate(-90 44 44)",style:{transition:"stroke-dashoffset 0.3s linear, stroke 0.3s"}}),c.jsx("text",{x:"44",y:"50",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:ee})]})]}),B?c.jsxs("div",{className:"gi-my-turn-input",children:[c.jsx("p",{className:"gi-hint",style:{marginBottom:"0.5rem"},children:"Give a clue related to your word — don't say it directly!"}),c.jsxs("div",{className:"gi-clue-input-row",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Type your clue…",value:vi,onChange:X=>$n(X.target.value),onKeyDown:X=>X.key==="Enter"&&zi(),autoFocus:!0,maxLength:80}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:zi,children:"Submit →"})]})]}):c.jsxs("div",{className:"gi-waiting-banner",style:{marginTop:0},children:["⏳ Waiting for ",P==null?void 0:P.name," to give a clue…"]})]}),Object.keys(Ce).length>0&&c.jsxs("div",{className:"gi-clue-list",children:[c.jsx("div",{className:"gi-clue-list-title",children:"Clues Given"}),N.map(X=>{const ce=Array.from({length:u},(te,Ve)=>Ve).filter(te=>{var Ve;return((Ve=ie[te%ie.length])==null?void 0:Ve.id)===X.id&&Ce[String(te)]!==void 0});if(ce.length===0)return null;const tn=ce.some(te=>Ti===String(te));return c.jsxs("div",{className:`gi-clue-row${tn?" gi-clue-row--new":""}`,children:[c.jsx("span",{className:"gi-clue-player",children:X.name}),c.jsx("div",{className:"gi-clue-chips",children:ce.map(te=>c.jsxs("span",{className:`gi-clue-chip${Ti===String(te)?" gi-clue-chip--new":""}`,children:['"',Ce[String(te)],'"']},te))})]},X.id)})]}),c.jsxs("div",{className:"gi-turn-footer",children:[E>1&&c.jsxs("div",{className:"gi-rotation-indicator",children:[Array.from({length:E},(X,ce)=>c.jsx("span",{className:`gi-rot-dot${g||Math.floor(u/N.length)>ce?" gi-rot-dot--done":Math.floor(u/N.length)===ce?" gi-rot-dot--current":""}`},ce)),c.jsx("span",{className:"gi-rotation-label",children:g?"All rotations done":`Rotation ${Math.floor(u/N.length)+1} / ${E}`})]}),c.jsx("div",{className:"reveal-progress",children:ie.map((X,ce)=>{const tn=u%ie.length,te=!g&&ce===tn,Ve=!te&&(g||ce<tn);return c.jsx("div",{className:`reveal-dot${Ve?" reveal-dot--done":te?" reveal-dot--current":""}`},X.id)})})]}),zn,Yn,gt,yt]})})}if(l.status==="voting"){const u=(H==null?void 0:H.vote)||"",y=N.filter(b=>b.vote!=="").length;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-vote",children:[c.jsx("h2",{className:"gi-phase-title",children:"🗳 Vote"}),c.jsx("p",{className:"gi-phase-subtitle",children:"Who do you think is the imposter?"}),u?c.jsxs("div",{className:"gi-voted-confirmation",children:[c.jsx("div",{className:"gi-voted-icon",children:"✅"}),c.jsxs("div",{className:"gi-voted-text",children:["You voted for ",c.jsx("strong",{children:((Ji=d[u])==null?void 0:Ji.name)??"?"})]})]}):c.jsx("div",{className:"vote-options",children:N.filter(b=>b.id!==t.current).map(b=>c.jsx("button",{className:"vote-option-btn",onClick:()=>ja(b.id),children:b.name},b.id))}),c.jsxs("div",{className:"gi-seen-progress",style:{marginTop:"1rem"},children:[c.jsxs("span",{className:"gi-hint",children:[y," / ",N.length," votes submitted"]}),c.jsx("div",{className:"gi-progress-bar",children:c.jsx("div",{className:"gi-progress-fill",style:{width:`${y/N.length*100}%`}})})]}),zn,Yn,gt,yt]})})}if(l.status==="results"){const{tally:u,imposter:y,caught:b}=Wa();return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-result",children:[c.jsx("div",{className:`result-banner${b?" result-banner--success":" result-banner--fail"}`,children:b?"🎉 Imposter Caught!":"😈 Imposter Wins!"}),c.jsx("div",{className:"result-imposter-section",children:c.jsxs("div",{className:"result-imposter-card",children:[c.jsx("div",{className:"result-label",children:"The Imposter was"}),c.jsx("div",{className:"result-imposter-name",children:(y==null?void 0:y.name)??"?"})]})}),c.jsxs("div",{className:"result-words-row",children:[c.jsxs("div",{className:"result-word-card result-word-card--real",children:[c.jsx("div",{className:"result-word-label",children:"Real Word"}),c.jsx("div",{className:"result-word-value",children:l.realWord})]}),c.jsx("span",{className:"wm-arrow",style:{fontSize:"1.5rem"},children:"⇄"}),c.jsxs("div",{className:"result-word-card result-word-card--imposter",children:[c.jsx("div",{className:"result-word-label",children:"Imposter Word"}),c.jsx("div",{className:"result-word-value",children:l.imposterWord})]})]}),c.jsxs("div",{className:"result-votes",children:[c.jsx("h3",{className:"result-votes-title",children:"Vote Results"}),N.map(E=>{const A=u[E.id]||0,g=N.filter(P=>P.vote===E.id);return c.jsx("div",{className:"vote-tally-row",children:c.jsxs("div",{className:"tally-row-top",children:[c.jsxs("span",{className:`tally-name${E.id===l.imposterPlayerId?" tally-name--imposter":""}`,children:[E.name," ",E.id===l.imposterPlayerId?"🕵️":""]}),c.jsx("div",{className:"tally-bar-bg",children:c.jsx("div",{className:"tally-bar",style:{width:`${A/Math.max(N.length-1,1)*100}%`}})}),c.jsx("span",{className:"tally-count",children:A}),g.length>0&&c.jsxs("button",{className:"tally-voters-btn",onClick:()=>Un(E.id),children:[A," voted"]})]})},E.id)})]}),Bn&&(()=>{const E=d[Bn],A=N.filter(g=>g.vote===Bn);return c.jsx("div",{className:"gi-modal-backdrop",onClick:()=>Un(null),children:c.jsxs("div",{className:"gi-modal",onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"gi-modal-title",children:["Voted for ",E==null?void 0:E.name]}),c.jsx("div",{className:"gi-modal-voter-list",children:A.map(g=>c.jsxs("div",{className:"gi-modal-voter-row",children:[c.jsx("span",{className:"gi-modal-voter-avatar",children:g.name[0].toUpperCase()}),c.jsx("span",{className:"gi-modal-voter-name",children:g.name})]},g.id))}),c.jsx("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.75rem"},onClick:()=>Un(null),children:"Close"})]})})})(),Object.keys(Ce).length>0&&c.jsxs("div",{className:"result-clue-summary",children:[c.jsx("h3",{className:"result-votes-title",children:"💬 Clues Given"}),N.map(E=>{const A=Object.entries(Ce).filter(([g])=>{var P;return((P=N[Number(g)%N.length])==null?void 0:P.id)===E.id}).map(([,g])=>g);return A.length===0?null:c.jsxs("div",{className:"result-clue-player",children:[c.jsxs("span",{className:"result-clue-player-name",children:[E.name,":"]}),c.jsx("div",{className:"result-clue-chips",children:A.map((g,P)=>c.jsxs("span",{className:"result-clue-chip",children:['"',g,'"']},P))})]},E.id)})]}),K?c.jsxs("div",{className:"result-actions",children:[l.currentRound<l.roundCount?c.jsxs("button",{className:"gi-btn gi-btn--primary",onClick:Gi,children:["Next Round (",l.currentRound+1," / ",l.roundCount,") →"]}):c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Gi,children:"Play Again"}),c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:qi,children:"Close Room"})]}):c.jsx("div",{className:"gi-waiting-banner",style:{marginTop:"0.5rem"},children:"⏳ Waiting for host to start next round…"}),zn,Yn,gt,yt]})})}return null}export{zd as default};
