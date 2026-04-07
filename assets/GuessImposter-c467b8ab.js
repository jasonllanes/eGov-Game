import{u as Ga,b as za,r as v,j as c,e as qa}from"./index-203e2495.js";const Ya=()=>{};/**
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
 */const Qr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw at(e)},at=function(n){return new Error("Firebase Database ("+Qr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Jr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ka=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Os={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,h=i+2<n.length,l=h?n[i+2]:0,f=r>>2,u=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;h||(g=64,o||(p=64)),s.push(t[f],t[u],t[p],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ka(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new Qa;const p=r<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),u!==64){const C=l<<6&192|u;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xr=function(n){const e=Jr(n);return Os.encodeByteArray(e,!0)},ln=function(n){return Xr(n).replace(/\./g,"")},us=function(n){try{return Os.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ja(n){return Zr(void 0,n)}function Zr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Xa(t)||(n[t]=Zr(n[t],e[t]));return n}function Xa(n){return n!=="__proto__"}/**
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
 */function Za(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const el=()=>Za().__FIREBASE_DEFAULTS__,tl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&us(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return Ya()||el()||tl()||nl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sl=n=>{var e,t;return(t=(e=eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},il=n=>{const e=sl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},to=()=>{var n;return(n=eo())==null?void 0:n.config};/**
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
 */class he{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function rl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[ln(JSON.stringify(t)),ln(JSON.stringify(o)),a].join(".")}/**
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
 */function ol(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function no(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ol())}function al(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function so(){return Qr.NODE_ADMIN===!0}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function cl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const hl="FirebaseError";class Ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hl,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,a,s)}}function dl(n,e){return n.replace(ul,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ul=/\{\$([^}]+)}/g;/**
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
 */function kt(n){return JSON.parse(n)}function H(n){return JSON.stringify(n)}/**
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
 */const ro=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=kt(us(r[0])||""),t=kt(us(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},fl=function(n){const e=ro(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pl=function(n){const e=ro(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function de(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ze(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function hn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(sr(r)&&sr(o)){if(!hn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function sr(n){return n!==null&&typeof n=="object"}/**
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
 */function ml(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class gl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const p=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],h=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),f=1518500249):(l=r^o^a,f=1859775393):u<60?(l=r&o|a&(r|o),f=2400959708):(l=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+l+h+f+s[u]&4294967295;h=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function et(n,e){return`${n} failed: ${e} argument `}/**
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
 */const _l=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},In=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Fe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function oo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yl(n){return(await fetch(n,{credentials:"include"})).ok}class Dt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class vl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new he;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bl(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cl(n){return n===Ae?void 0:n}function bl(n){return n.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const El={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Nl=L.INFO,xl={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Il=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=xl[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ao{constructor(e){this.name=e,this._logLevel=Nl,this._logHandler=Il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?El[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const Sl=(n,e)=>e.some(t=>n instanceof t);let ir,rr;function Tl(){return ir||(ir=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rl(){return rr||(rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,ps=new WeakMap,co=new WeakMap,Zn=new WeakMap,Ms=new WeakMap;function Al(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(be(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lo.set(t,n)}).catch(()=>{}),Ms.set(e,n),e}function kl(n){if(ps.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ps.set(n,e)}let ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ps.get(n);if(e==="objectStoreNames")return n.objectStoreNames||co.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Dl(n){ms=n(ms)}function Pl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(es(this),e,...t);return co.set(s,e.sort?e.sort():[e]),be(s)}:Rl().includes(n)?function(...e){return n.apply(es(this),e),be(lo.get(this))}:function(...e){return be(n.apply(es(this),e))}}function Ol(n){return typeof n=="function"?Pl(n):(n instanceof IDBTransaction&&kl(n),Sl(n,Tl())?new Proxy(n,ms):n)}function be(n){if(n instanceof IDBRequest)return Al(n);if(Zn.has(n))return Zn.get(n);const e=Ol(n);return e!==n&&(Zn.set(n,e),Ms.set(e,n)),e}const es=n=>Ms.get(n);function Ml(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=be(o);return s&&o.addEventListener("upgradeneeded",h=>{s(be(o.result),h.oldVersion,h.newVersion,be(o.transaction),h)}),t&&o.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),a.then(h=>{r&&h.addEventListener("close",()=>r()),i&&h.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jl=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],ts=new Map;function or(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ts.get(e))return ts.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ll.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jl.includes(t)))return;const r=async function(o,...a){const h=this.transaction(o,i?"readwrite":"readonly");let l=h.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&h.done]))[0]};return ts.set(e,r),r}Dl(n=>({...n,get:(e,t,s)=>or(e,t)||n.get(e,t,s),has:(e,t)=>!!or(e,t)||n.has(e,t)}));/**
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
 */class Fl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Wl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",ar="0.14.10";/**
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
 */const _e=new ao("@firebase/app"),$l="@firebase/app-compat",Bl="@firebase/analytics-compat",Ul="@firebase/analytics",Hl="@firebase/app-check-compat",Vl="@firebase/app-check",Gl="@firebase/auth",zl="@firebase/auth-compat",ql="@firebase/database",Yl="@firebase/data-connect",Kl="@firebase/database-compat",Ql="@firebase/functions",Jl="@firebase/functions-compat",Xl="@firebase/installations",Zl="@firebase/installations-compat",ec="@firebase/messaging",tc="@firebase/messaging-compat",nc="@firebase/performance",sc="@firebase/performance-compat",ic="@firebase/remote-config",rc="@firebase/remote-config-compat",oc="@firebase/storage",ac="@firebase/storage-compat",lc="@firebase/firestore",cc="@firebase/ai",hc="@firebase/firestore-compat",dc="firebase",uc="12.11.0";/**
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
 */const _s="[DEFAULT]",fc={[gs]:"fire-core",[$l]:"fire-core-compat",[Ul]:"fire-analytics",[Bl]:"fire-analytics-compat",[Vl]:"fire-app-check",[Hl]:"fire-app-check-compat",[Gl]:"fire-auth",[zl]:"fire-auth-compat",[ql]:"fire-rtdb",[Yl]:"fire-data-connect",[Kl]:"fire-rtdb-compat",[Ql]:"fire-fn",[Jl]:"fire-fn-compat",[Xl]:"fire-iid",[Zl]:"fire-iid-compat",[ec]:"fire-fcm",[tc]:"fire-fcm-compat",[nc]:"fire-perf",[sc]:"fire-perf-compat",[ic]:"fire-rc",[rc]:"fire-rc-compat",[oc]:"fire-gcs",[ac]:"fire-gcs-compat",[lc]:"fire-fst",[hc]:"fire-fst-compat",[cc]:"fire-vertex","fire-js":"fire-js",[dc]:"fire-js-all"};/**
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
 */const Pt=new Map,pc=new Map,ys=new Map;function lr(n,e){try{n.container.addComponent(e)}catch(t){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(ys.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,n);for(const t of Pt.values())lr(t,n);for(const t of pc.values())lr(t,n);return!0}function mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gc(n){return n==null?!1:n.settings!==void 0}/**
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
 */const _c={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new io("app","Firebase",_c);/**
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
 */class yc{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const vc=uc;function ho(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:_s,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw we.create("bad-app-name",{appName:String(i)});if(t||(t=to()),!t)throw we.create("no-options");const r=Pt.get(i);if(r){if(hn(t,r.options)&&hn(s,r.config))return r;throw we.create("duplicate-app",{appName:i})}const o=new wl(i);for(const h of ys.values())o.addComponent(h);const a=new yc(t,s,o);return Pt.set(i,a),a}function uo(n=_s){const e=Pt.get(n);if(!e&&n===_s&&to())return ho();if(!e)throw we.create("no-app",{appName:n});return e}function Cc(){return Array.from(Pt.values())}function Ke(n,e,t){let s=fc[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(o.join(" "));return}dn(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bc="firebase-heartbeat-database",wc=1,Ot="firebase-heartbeat-store";let ns=null;function fo(){return ns||(ns=Ml(bc,wc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ot)}catch(t){console.warn(t)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),ns}async function Ec(n){try{const t=(await fo()).transaction(Ot),s=await t.objectStore(Ot).get(po(n));return await t.done,s}catch(e){if(e instanceof Ut)_e.warn(e.message);else{const t=we.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(t.message)}}}async function cr(n,e){try{const s=(await fo()).transaction(Ot,"readwrite");await s.objectStore(Ot).put(e,po(n)),await s.done}catch(t){if(t instanceof Ut)_e.warn(t.message);else{const s=we.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_e.warn(s.message)}}}function po(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Nc=1024,xc=30;class Ic{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>xc){const o=Rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_e.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hr(),{heartbeatsToSend:s,unsentEntries:i}=Sc(this._heartbeatsCache.heartbeats),r=ln(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return _e.warn(t),""}}}function hr(){return new Date().toISOString().substring(0,10)}function Sc(n,e=Nc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?cl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ec(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dr(n){return ln(JSON.stringify({version:2,heartbeats:n})).length}function Rc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Ac(n){dn(new Dt("platform-logger",e=>new Fl(e),"PRIVATE")),dn(new Dt("heartbeat",e=>new Ic(e),"PRIVATE")),Ke(gs,ar,n),Ke(gs,ar,"esm2020"),Ke("fire-js","")}Ac("");var kc="firebase",Dc="12.11.0";/**
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
 */Ke(kc,Dc,"app");const ur="@firebase/database",fr="1.1.2";/**
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
 */let mo="";function Pc(n){mo=n}/**
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
 */class Oc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:kt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Mc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const go=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Oc(e)}}catch{}return new Mc},Pe=go("localStorage"),vs=go("sessionStorage");/**
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
 */const Qe=new ao("@firebase/database"),jc=function(){let n=1;return function(){return n++}}(),_o=function(n){const e=_l(n),t=new gl;t.update(e);const s=t.digest();return Os.encodeByteArray(s)},Ht=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ht.apply(null,s):typeof s=="object"?e+=H(s):e+=s,e+=" "}return e};let Oe=null,pr=!0;const Lc=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Qe.logLevel=L.VERBOSE,Oe=Qe.log.bind(Qe),e&&vs.set("logging_enabled",!0)):typeof n=="function"?Oe=n:(Oe=null,vs.remove("logging_enabled"))},q=function(...n){if(pr===!0&&(pr=!1,Oe===null&&vs.get("logging_enabled")===!0&&Lc(!0)),Oe){const e=Ht.apply(null,n);Oe(e)}},Vt=function(n){return function(...e){q(n,...e)}},Cs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ht(...n);Qe.error(e)},ye=function(...n){const e=`FIREBASE FATAL ERROR: ${Ht(...n)}`;throw Qe.error(e),new Error(e)},X=function(...n){const e="FIREBASE WARNING: "+Ht(...n);Qe.warn(e)},Fc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Wc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tt="[MIN_NAME]",Me="[MAX_NAME]",We=function(n,e){if(n===e)return 0;if(n===tt||e===Me)return-1;if(e===tt||n===Me)return 1;{const t=mr(n),s=mr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},$c=function(n,e){return n===e?0:n<e?-1:1},Ct=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+H(e))},js=function(n){if(typeof n!="object"||n===null)return H(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=H(e[s]),t+=":",t+=js(n[e[s]]);return t+="}",t},yo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Y(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const vo=function(n){m(!Sn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,h;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(h=t;h;h-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(h=e;h;h-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const f=l.join("");let u="";for(h=0;h<64;h+=8){let p=parseInt(f.substr(h,8),2).toString(16);p.length===1&&(p="0"+p),u=u+p}return u.toLowerCase()},Bc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Uc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Vc=new RegExp("^-?(0*)\\d{1,10}$"),Gc=-2147483648,zc=2147483647,mr=function(n){if(Vc.test(n)){const e=Number(n);if(e>=Gc&&e<=zc)return e}return null},lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw X("Exception was thrown by user callback.",t),e},Math.floor(0))}},qc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},It=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Yc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,gc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Kc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class Je{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Je.OWNER="owner";/**
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
 */const Ls="5",Co="v",bo="s",wo="r",Eo="f",No=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xo="ls",Io="p",bs="ac",So="websocket",To="long_polling";/**
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
 */class Ro{constructor(e,t,s,i,r=!1,o="",a=!1,h=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=h,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ao(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===So)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===To)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qc(n)&&(t.ns=n.namespace);const i=[];return Y(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Jc{constructor(){this.counters_={}}incrementCounter(e,t=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ja(this.counters_)}}/**
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
 */const ss={},is={};function Fs(n){const e=n.toString();return ss[e]||(ss[e]=new Jc),ss[e]}function Xc(n,e){const t=n.toString();return is[t]||(is[t]=e()),is[t]}/**
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
 */class Zc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&lt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gr="start",eh="close",th="pLPCommand",nh="pRTLPCB",ko="id",Do="pw",Po="ser",sh="cb",ih="seg",rh="ts",oh="d",ah="dframe",Oo=1870,Mo=30,lh=Oo-Mo,ch=25e3,hh=3e4;class qe{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vt(e),this.stats_=Fs(t),this.urlFn=h=>(this.appCheckToken&&(h[bs]=this.appCheckToken),Ao(t,To,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Zc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hh)),Wc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ws((...r)=>{const[o,a,h,l,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gr)this.id=a,this.password=h;else if(o===eh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[gr]="t",s[Po]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Co]=Ls,this.transportSessionId&&(s[bo]=this.transportSessionId),this.lastSessionId&&(s[xo]=this.lastSessionId),this.applicationId&&(s[Io]=this.applicationId),this.appCheckToken&&(s[bs]=this.appCheckToken),typeof location<"u"&&location.hostname&&No.test(location.hostname)&&(s[wo]=Eo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qe.forceAllow_=!0}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){return qe.forceAllow_?!0:!qe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bc()&&!Uc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Xr(t),i=yo(s,lh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ah]="t",s[ko]=e,s[Do]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=H(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ws{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jc(),window[th+this.uniqueCallbackIdentifier]=e,window[nh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ws.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){q("frame writing exception"),a.stack&&q(a.stack),q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ko]=this.myID,e[Do]=this.myPW,e[Po]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mo+s.length<=Oo;){const o=this.pendingSegs.shift();s=s+"&"+ih+i+"="+o.seg+"&"+rh+i+"="+o.ts+"&"+oh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ch)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const dh=16384,uh=45e3;let un=null;typeof MozWebSocket<"u"?un=MozWebSocket:typeof WebSocket<"u"&&(un=WebSocket);class oe{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vt(this.connId),this.stats_=Fs(t),this.connURL=oe.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Co]=Ls,typeof location<"u"&&location.hostname&&No.test(location.hostname)&&(o[wo]=Eo),t&&(o[bo]=t),s&&(o[xo]=s),i&&(o[bs]=i),r&&(o[Io]=r),Ao(e,So,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pe.set("previous_websocket_failure",!0);try{let s;so(),this.mySock=new un(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&un!==null&&!oe.forceDisallow_}static previouslyFailed(){return Pe.isInMemoryStorage||Pe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=kt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=yo(t,dh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oe.responsesRequiredToBeHealthy=2;oe.healthyTimeout=3e4;/**
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
 */class Mt{static get ALL_TRANSPORTS(){return[qe,oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=oe&&oe.isAvailable();let s=t&&!oe.previouslyFailed();if(e.webSocketOnly&&(t||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oe];else{const i=this.transports_=[];for(const r of Mt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mt.globalTransportInitialized_=!1;/**
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
 */const fh=6e4,ph=5e3,mh=10*1024,gh=100*1024,rs="t",_r="d",_h="s",yr="r",yh="e",vr="o",Cr="a",br="n",wr="p",vh="h";class Ch{constructor(e,t,s,i,r,o,a,h,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=h,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vt("c:"+this.id+":"),this.transportManager_=new Mt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=It(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rs in e){const t=e[rs];t===Cr?this.upgradeIfSecondaryHealthy_():t===yr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ct("t",e),s=Ct("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:br,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ct("t",e),s=Ct("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ct(rs,e);if(_r in e){const s=e[_r];if(t===vh){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===br){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_h?this.onConnectionShutdown_(s):t===yr?this.onReset_(s):t===yh?Cs("Server Error: "+s):t===vr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ls!==s&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),It(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):It(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ph))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Lo{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fn extends Lo{static getInstance(){return new fn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!no()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Er=32,Nr=768;class P{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new P("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xe(n){return n.pieces_.length-n.pieceNum_}function O(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new P(n.pieces_,e)}function $s(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function jt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Fo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new P(e,0)}function F(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof P)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new P(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function J(n,e){const t=x(n),s=x(e);if(t===null)return e;if(t===s)return J(O(n),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wh(n,e){const t=jt(n,0),s=jt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=We(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Bs(n,e){if(xe(n)!==xe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function se(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xe(n)>xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Eh{constructor(e,t){this.errorPrefix_=t,this.parts_=jt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=In(this.parts_[s]);Wo(this)}}function Nh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=In(e),Wo(n)}function xh(n){const e=n.parts_.pop();n.byteLength_-=In(e),n.parts_.length>0&&(n.byteLength_-=1)}function Wo(n){if(n.byteLength_>Nr)throw new Error(n.errorPrefix_+"has a key path longer than "+Nr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Er)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Er+") or object contains a cycle "+ke(n))}function ke(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Us extends Lo{static getInstance(){return new Us}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bt=1e3,Ih=60*5*1e3,xr=30*1e3,Sh=1.3,Th=3e4,Rh="server_kill",Ir=3;class ge extends jo{constructor(e,t,s,i,r,o,a,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=h,this.id=ge.nextPersistentConnectionId_++,this.log_=Vt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bt,this.maxReconnectDelay_=Ih,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!so())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Us.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(H(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new he,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const h=a.d,l=a.s;ge.warnOnListenWarnings_(h,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&de(e,"w")){const s=Ze(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Cs("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Th&&(this.reconnectDelay_=bt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,s())},l=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:h,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=p&&p.token,a=new Ch(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{X(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rh)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&X(u),h())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fs(this.interruptReasons_)&&(this.reconnectDelay_=bt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>js(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new P(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ir&&(this.reconnectDelay_=xr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ir&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mo.replace(/\./g,"-")]=1,no()?e["framework.cordova"]=1:al()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fn.getInstance().currentlyOnline();return fs(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class Tn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(tt,e),i=new S(tt,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
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
 */let on;class $o extends Tn{static get __EMPTY_NODE(){return on}static set __EMPTY_NODE(e){on=e}compare(e,t){return We(e.name,t.name)}isDefinedOn(e){throw at("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Me,on)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,on)}toString(){return".key"}}const Xe=new $o;/**
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
 */class an{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??z.RED,this.left=i??ee.EMPTY_NODE,this.right=r??ee.EMPTY_NODE}copy(e,t,s,i,r){return new z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class Ah{copy(e,t,s,i,r){return this}insert(e,t,s){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ee{constructor(e,t=ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new an(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new an(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new an(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new an(this.root_,null,this.comparator_,!0,e)}}ee.EMPTY_NODE=new Ah;/**
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
 */function kh(n,e){return We(n.name,e.name)}function Hs(n,e){return We(n,e)}/**
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
 */let ws;function Dh(n){ws=n}const Bo=function(n){return typeof n=="number"?"number:"+vo(n):"string:"+n},Uo=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else m(n===ws||n.isEmpty(),"priority of unexpected type.");m(n===ws||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sr;class G{static set __childrenNodeConstructor(e){Sr=e}static get __childrenNodeConstructor(){return Sr}constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:x(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=x(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=vo(this.value_):e+=this.value_,this.lazyHash_=_o(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ho,Vo;function Ph(n){Ho=n}function Oh(n){Vo=n}class Mh extends Tn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?We(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Me,new G("[PRIORITY-POST]",Vo))}makePost(e,t){const s=Ho(e);return new S(t,new G("[PRIORITY-POST]",s))}toString(){return".priority"}}const W=new Mh;/**
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
 */const jh=Math.log(2);class Lh{constructor(e){const t=r=>parseInt(Math.log(r)/jh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(n,e,t,s){n.sort(e);const i=function(h,l){const f=l-h;let u,p;if(f===0)return null;if(f===1)return u=n[h],p=t?t(u):u,new z(p,u.node,z.BLACK,null,null);{const g=parseInt(f/2,10)+h,C=i(h,g),T=i(g+1,l);return u=n[g],p=t?t(u):u,new z(p,u.node,z.BLACK,C,T)}},r=function(h){let l=null,f=null,u=n.length;const p=function(C,T){const U=u-C,fe=u;u-=C;const pe=i(U+1,fe),ut=n[U],Kt=t?t(ut):ut;g(new z(Kt,ut.node,T,null,pe))},g=function(C){l?(l.left=C,l=C):(f=C,l=C)};for(let C=0;C<h.count;++C){const T=h.nextBitIsOne(),U=Math.pow(2,h.count-(C+1));T?p(U,z.BLACK):(p(U,z.BLACK),p(U,z.RED))}return f},o=new Lh(n.length),a=r(o);return new ee(s||e,a)};/**
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
 */let os;const Ge={};class me{static get Default(){return m(Ge&&W,"ChildrenNode.ts has not been loaded"),os=os||new me({".priority":Ge},{".priority":W}),os}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ze(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ee?t:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Xe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pn(s,e.getCompare()):a=Ge;const h=e.toString(),l={...this.indexSet_};l[h]=e;const f={...this.indexes_};return f[h]=a,new me(f,l)}addToIndexes(e,t){const s=cn(this.indexes_,(i,r)=>{const o=Ze(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Ge)if(o.isDefinedOn(e.node)){const a=[],h=t.getIterator(S.Wrap);let l=h.getNext();for(;l;)l.name!==e.name&&a.push(l),l=h.getNext();return a.push(e),pn(a,o.getCompare())}else return Ge;else{const a=t.get(e.name);let h=i;return a&&(h=h.remove(new S(e.name,a))),h.insert(e,e.node)}});return new me(s,this.indexSet_)}removeFromIndexes(e,t){const s=cn(this.indexes_,i=>{if(i===Ge)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new me(s,this.indexSet_)}}/**
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
 */let wt;class E{static get EMPTY_NODE(){return wt||(wt=new E(new ee(Hs),null,me.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Uo(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wt}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wt:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?wt:this.priorityNode_;return new E(i,o,r)}}updateChild(e,t){const s=x(e);if(s===null)return t;{m(x(e)!==".priority"||xe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(O(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(W,(o,a)=>{t[o]=a.val(e),s++,r&&E.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bo(this.getPriority().val())+":"),this.forEachChild(W,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":_o(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gt?-1:0}withIndex(e){if(e===Xe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(W),i=t.getIterator(W);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xe?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Fh extends E{constructor(){super(new ee(Hs),E.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const Gt=new Fh;Object.defineProperties(S,{MIN:{value:new S(tt,E.EMPTY_NODE)},MAX:{value:new S(Me,Gt)}});$o.__EMPTY_NODE=E.EMPTY_NODE;G.__childrenNodeConstructor=E;Dh(Gt);Oh(Gt);/**
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
 */const Wh=!0;function B(n,e=null){if(n===null)return E.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,B(e))}if(!(n instanceof Array)&&Wh){const t=[];let s=!1;if(Y(n,(o,a)=>{if(o.substring(0,1)!=="."){const h=B(a);h.isEmpty()||(s=s||!h.getPriority().isEmpty(),t.push(new S(o,h)))}}),t.length===0)return E.EMPTY_NODE;const r=pn(t,kh,o=>o.name,Hs);if(s){const o=pn(t,W.getCompare());return new E(r,B(e),new me({".priority":o},{".priority":W}))}else return new E(r,B(e),me.Default)}else{let t=E.EMPTY_NODE;return Y(n,(s,i)=>{if(de(n,s)&&s.substring(0,1)!=="."){const r=B(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(B(e))}}Ph(B);/**
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
 */class $h extends Tn{constructor(e){super(),this.indexPath_=e,m(!I(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?We(e.name,t.name):r}makePost(e,t){const s=B(e),i=E.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,Gt);return new S(Me,e)}toString(){return jt(this.indexPath_,0).join("/")}}/**
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
 */class Bh extends Tn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?We(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=B(e);return new S(t,s)}toString(){return".value"}}const Uh=new Bh;/**
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
 */function Go(n){return{type:"value",snapshotNode:n}}function nt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Lt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ft(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Hh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Vs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Lt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(nt(t,s)):o.trackChildChange(Ft(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(W,(i,r)=>{t.hasChild(i)||s.trackChildChange(Lt(i,r))}),t.isLeafNode()||t.forEachChild(W,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ft(i,r,o))}else s.trackChildChange(nt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Wt{constructor(e){this.indexedFilter_=new Vs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wt.getStartPost_(e),this.endPost_=Wt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=E.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(E.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Vh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Wt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=E.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=E.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(E.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(p,g)=>u(g,p)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const h=new S(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(h);if(a.hasChild(t)){const u=a.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,l,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,h);if(f&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Ft(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Lt(t,u));const T=a.updateImmediateChild(t,E.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(nt(p.name,p.node)),T.updateImmediateChild(p.name,p.node)):T}}else return s.isEmpty()?e:f&&o(l,h)>=0?(r!=null&&(r.trackChildChange(Lt(l.name,l.node)),r.trackChildChange(nt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,E.EMPTY_NODE)):e}}/**
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
 */class Gs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Me}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new Gs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gh(n){return n.loadsAllData()?new Vs(n.getIndex()):n.hasLimit()?new Vh(n):new Wt(n)}function Tr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===Uh?t="$value":n.index_===Xe?t="$key":(m(n.index_ instanceof $h,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=H(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=H(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+H(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=H(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+H(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Rr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
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
 */class mn extends jo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mn.getListenId_(e,s),a={};this.listens_[o]=a;const h=Tr(e._queryParams);this.restRequest_(r+".json",h,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),Ze(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,t){const s=mn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Tr(e._queryParams),s=e._path.toString(),i=new he;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ml(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let h=null;if(a.status>=200&&a.status<300){try{h=kt(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,h)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class zh{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gn(){return{value:null,children:new Map}}function ct(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=x(e);n.children.has(s)||n.children.set(s,gn());const i=n.children.get(s);e=O(e),ct(i,e,t)}}function Es(n,e){if(I(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(W,(s,i)=>{ct(n,new P(s),i)}),Es(n,e)}}else if(n.children.size>0){const t=x(e);return e=O(e),n.children.has(t)&&Es(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ns(n,e,t){n.value!==null?t(e,n.value):qh(n,(s,i)=>{const r=new P(e.toString()+"/"+s);Ns(i,r,t)})}function qh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Yh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Y(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ar=10*1e3,Kh=30*1e3,Qh=5*60*1e3;class Jh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yh(e);const s=Ar+(Kh-Ar)*Math.random();It(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Y(e,(i,r)=>{r>0&&de(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),It(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qh))}}/**
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
 */var ae;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ae||(ae={}));function zs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ys(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class _n{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ae.ACK_USER_WRITE,this.source=zs()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new P(e));return new _n(k(),t,this.revert)}}else return m(x(this.path)===e,"operationForChild called for unrelated child."),new _n(O(this.path),this.affectedTree,this.revert)}}/**
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
 */class $t{constructor(e,t){this.source=e,this.path=t,this.type=ae.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new $t(this.source,k()):new $t(this.source,O(this.path))}}/**
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
 */class je{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ae.OVERWRITE}operationForChild(e){return I(this.path)?new je(this.source,k(),this.snap.getImmediateChild(e)):new je(this.source,O(this.path),this.snap)}}/**
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
 */class st{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ae.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new P(e));return t.isEmpty()?null:t.value?new je(this.source,k(),t.value):new st(this.source,k(),t)}else return m(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new st(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ie{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Xh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Zh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Hh(o.childName,o.snapshotNode))}),Et(n,i,"child_removed",e,s,t),Et(n,i,"child_added",e,s,t),Et(n,i,"child_moved",r,s,t),Et(n,i,"child_changed",e,s,t),Et(n,i,"value",e,s,t),i}function Et(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,h)=>td(n,a,h)),o.forEach(a=>{const h=ed(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(h,n.query_))})})}function ed(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function td(n,e,t){if(e.childName==null||t.childName==null)throw at("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Rn(n,e){return{eventCache:n,serverCache:e}}function St(n,e,t,s){return Rn(new Ie(e,t,s),n.serverCache)}function zo(n,e,t,s){return Rn(n.eventCache,new Ie(e,t,s))}function yn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Le(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let as;const nd=()=>(as||(as=new ee($c)),as);class j{static fromObject(e){let t=new j(null);return Y(e,(s,i)=>{t=t.set(new P(s),i)}),t}constructor(e,t=nd()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(I(e))return null;{const s=x(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(O(e),t);return r!=null?{path:F(new P(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=x(e),s=this.children.get(t);return s!==null?s.subtree(O(e)):new j(null)}}set(e,t){if(I(e))return new j(t,this.children);{const s=x(e),r=(this.children.get(s)||new j(null)).set(O(e),t),o=this.children.insert(s,r);return new j(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=x(e),s=this.children.get(t);if(s){const i=s.remove(O(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=x(e),s=this.children.get(t);return s?s.get(O(e)):null}}setTree(e,t){if(I(e))return t;{const s=x(e),r=(this.children.get(s)||new j(null)).setTree(O(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new j(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(F(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(O(e),F(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=x(e),r=this.children.get(i);return r?r.foreachOnPath_(O(e),F(t,i),s):new j(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(F(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class le{constructor(e){this.writeTree_=e}static empty(){return new le(new j(null))}}function Tt(n,e,t){if(I(e))return new le(new j(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=J(i,e);return r=r.updateChild(o,t),new le(n.writeTree_.set(i,r))}else{const i=new j(t),r=n.writeTree_.setTree(e,i);return new le(r)}}}function xs(n,e,t){let s=n;return Y(t,(i,r)=>{s=Tt(s,F(e,i),r)}),s}function kr(n,e){if(I(e))return le.empty();{const t=n.writeTree_.setTree(e,new j(null));return new le(t)}}function Is(n,e){return $e(n,e)!=null}function $e(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(J(t.path,e)):null}function Dr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function Ee(n,e){if(I(e))return n;{const t=$e(n,e);return t!=null?new le(new j(t)):new le(n.writeTree_.subtree(e))}}function Ss(n){return n.writeTree_.isEmpty()}function it(n,e){return qo(k(),n.writeTree_,e)}function qo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=qo(F(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(F(n,".priority"),s)),t}}/**
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
 */function An(n,e){return Jo(e,n)}function sd(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Tt(n.visibleWrites,e,t)),n.lastWriteId=s}function id(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=xs(n.visibleWrites,e,t),n.lastWriteId=s}function rd(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function od(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ad(a,s.path)?i=!1:se(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ld(n),!0;if(s.snap)n.visibleWrites=kr(n.visibleWrites,s.path);else{const a=s.children;Y(a,h=>{n.visibleWrites=kr(n.visibleWrites,F(s.path,h))})}return!0}else return!1}function ad(n,e){if(n.snap)return se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&se(F(n.path,t),e))return!0;return!1}function ld(n){n.visibleWrites=Yo(n.allWrites,cd,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cd(n){return n.visible}function Yo(n,e,t){let s=le.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)se(t,o)?(a=J(t,o),s=Tt(s,a,r.snap)):se(o,t)&&(a=J(o,t),s=Tt(s,k(),r.snap.getChild(a)));else if(r.children){if(se(t,o))a=J(t,o),s=xs(s,a,r.children);else if(se(o,t))if(a=J(o,t),I(a))s=xs(s,k(),r.children);else{const h=Ze(r.children,x(a));if(h){const l=h.getChild(O(a));s=Tt(s,k(),l)}}}else throw at("WriteRecord should have .snap or .children")}}return s}function Ko(n,e,t,s,i){if(!s&&!i){const r=$e(n.visibleWrites,e);if(r!=null)return r;{const o=Ee(n.visibleWrites,e);if(Ss(o))return t;if(t==null&&!Is(o,k()))return null;{const a=t||E.EMPTY_NODE;return it(o,a)}}}else{const r=Ee(n.visibleWrites,e);if(!i&&Ss(r))return t;if(!i&&t==null&&!Is(r,k()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(se(l.path,e)||se(e,l.path))},a=Yo(n.allWrites,o,e),h=t||E.EMPTY_NODE;return it(a,h)}}}function hd(n,e,t){let s=E.EMPTY_NODE;const i=$e(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(W,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ee(n.visibleWrites,e);return t.forEachChild(W,(o,a)=>{const h=it(Ee(r,new P(o)),a);s=s.updateImmediateChild(o,h)}),Dr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ee(n.visibleWrites,e);return Dr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dd(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,t);if(Is(n.visibleWrites,r))return null;{const o=Ee(n.visibleWrites,r);return Ss(o)?i.getChild(t):it(o,i.getChild(t))}}function ud(n,e,t,s){const i=F(e,t),r=$e(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ee(n.visibleWrites,i);return it(o,s.getNode().getImmediateChild(t))}else return null}function fd(n,e){return $e(n.visibleWrites,e)}function pd(n,e,t,s,i,r,o){let a;const h=Ee(n.visibleWrites,e),l=$e(h,k());if(l!=null)a=l;else if(t!=null)a=it(h,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=p.getNext();for(;g&&f.length<i;)u(g,s)!==0&&f.push(g),g=p.getNext();return f}else return[]}function md(){return{visibleWrites:le.empty(),allWrites:[],lastWriteId:-1}}function vn(n,e,t,s){return Ko(n.writeTree,n.treePath,e,t,s)}function Ks(n,e){return hd(n.writeTree,n.treePath,e)}function Pr(n,e,t,s){return dd(n.writeTree,n.treePath,e,t,s)}function Cn(n,e){return fd(n.writeTree,F(n.treePath,e))}function gd(n,e,t,s,i,r){return pd(n.writeTree,n.treePath,e,t,s,i,r)}function Qs(n,e,t){return ud(n.writeTree,n.treePath,e,t)}function Qo(n,e){return Jo(F(n.treePath,e),n.writeTree)}function Jo(n,e){return{treePath:n,writeTree:e}}/**
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
 */class _d{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ft(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Lt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,nt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ft(s,e.snapshotNode,i.oldSnap));else throw at("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Xo=new yd;class Js{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ie(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Le(this.viewCache_),r=gd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function vd(n){return{filter:n}}function Cd(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function bd(n,e,t,s,i){const r=new _d;let o,a;if(t.type===ae.OVERWRITE){const l=t;l.source.fromUser?o=Ts(n,e,l.path,l.snap,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!I(l.path),o=bn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===ae.MERGE){const l=t;l.source.fromUser?o=Ed(n,e,l.path,l.children,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Rs(n,e,l.path,l.children,s,i,a,r))}else if(t.type===ae.ACK_USER_WRITE){const l=t;l.revert?o=Id(n,e,l.path,s,i,r):o=Nd(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===ae.LISTEN_COMPLETE)o=xd(n,e,t.path,s,r);else throw at("Unknown operation type: "+t.type);const h=r.getChanges();return wd(e,o,h),{viewCache:o,changes:h}}function wd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=yn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Go(yn(e)))}}function Zo(n,e,t,s,i,r){const o=e.eventCache;if(Cn(s,t)!=null)return e;{let a,h;if(I(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Le(e),f=l instanceof E?l:E.EMPTY_NODE,u=Ks(s,f);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=vn(s,Le(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=x(t);if(l===".priority"){m(xe(t)===1,"Can't have a priority with additional path components");const f=o.getNode();h=e.serverCache.getNode();const u=Pr(s,t,f,h);u!=null?a=n.filter.updatePriority(f,u):a=o.getNode()}else{const f=O(t);let u;if(o.isCompleteForChild(l)){h=e.serverCache.getNode();const p=Pr(s,t,o.getNode(),h);p!=null?u=o.getNode().getImmediateChild(l).updateChild(f,p):u=o.getNode().getImmediateChild(l)}else u=Qs(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,f,i,r):a=o.getNode()}}return St(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function bn(n,e,t,s,i,r,o,a){const h=e.serverCache;let l;const f=o?n.filter:n.filter.getIndexedFilter();if(I(t))l=f.updateFullNode(h.getNode(),s,null);else if(f.filtersNodes()&&!h.isFiltered()){const g=h.getNode().updateChild(t,s);l=f.updateFullNode(h.getNode(),g,null)}else{const g=x(t);if(!h.isCompleteForPath(t)&&xe(t)>1)return e;const C=O(t),U=h.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?l=f.updatePriority(h.getNode(),U):l=f.updateChild(h.getNode(),g,U,C,Xo,null)}const u=zo(e,l,h.isFullyInitialized()||I(t),f.filtersNodes()),p=new Js(i,u,r);return Zo(n,u,t,i,p,a)}function Ts(n,e,t,s,i,r,o){const a=e.eventCache;let h,l;const f=new Js(i,e,r);if(I(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),h=St(e,l,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),h=St(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=O(t),g=a.getNode().getImmediateChild(u);let C;if(I(p))C=s;else{const T=f.getCompleteChild(u);T!=null?$s(p)===".priority"&&T.getChild(Fo(p)).isEmpty()?C=T:C=T.updateChild(p,s):C=E.EMPTY_NODE}if(g.equals(C))h=e;else{const T=n.filter.updateChild(a.getNode(),u,C,p,f,o);h=St(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function Or(n,e){return n.eventCache.isCompleteForChild(e)}function Ed(n,e,t,s,i,r,o){let a=e;return s.foreach((h,l)=>{const f=F(t,h);Or(e,x(f))&&(a=Ts(n,a,f,l,i,r,o))}),s.foreach((h,l)=>{const f=F(t,h);Or(e,x(f))||(a=Ts(n,a,f,l,i,r,o))}),a}function Mr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Rs(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,l;I(t)?l=s:l=new j(null).setTree(t,s);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,p)=>{if(f.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),C=Mr(n,g,p);h=bn(n,h,new P(u),C,i,r,o,a)}}),l.children.inorderTraversal((u,p)=>{const g=!e.serverCache.isCompleteForChild(u)&&p.value===null;if(!f.hasChild(u)&&!g){const C=e.serverCache.getNode().getImmediateChild(u),T=Mr(n,C,p);h=bn(n,h,new P(u),T,i,r,o,a)}}),h}function Nd(n,e,t,s,i,r,o){if(Cn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),h=e.serverCache;if(s.value!=null){if(I(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return bn(n,e,t,h.getNode().getChild(t),i,r,a,o);if(I(t)){let l=new j(null);return h.getNode().forEachChild(Xe,(f,u)=>{l=l.set(new P(f),u)}),Rs(n,e,t,l,i,r,a,o)}else return e}else{let l=new j(null);return s.foreach((f,u)=>{const p=F(t,f);h.isCompleteForPath(p)&&(l=l.set(f,h.getNode().getChild(p)))}),Rs(n,e,t,l,i,r,a,o)}}function xd(n,e,t,s,i){const r=e.serverCache,o=zo(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return Zo(n,o,t,s,Xo,i)}function Id(n,e,t,s,i,r){let o;if(Cn(s,t)!=null)return e;{const a=new Js(s,e,i),h=e.eventCache.getNode();let l;if(I(t)||x(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=vn(s,Le(e));else{const u=e.serverCache.getNode();m(u instanceof E,"serverChildren would be complete if leaf node"),f=Ks(s,u)}f=f,l=n.filter.updateFullNode(h,f,r)}else{const f=x(t);let u=Qs(s,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=h.getImmediateChild(f)),u!=null?l=n.filter.updateChild(h,f,u,O(t),a,r):e.eventCache.getNode().hasChild(f)?l=n.filter.updateChild(h,f,E.EMPTY_NODE,O(t),a,r):l=h,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vn(s,Le(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Cn(s,k())!=null,St(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Sd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vs(s.getIndex()),r=Gh(s);this.processor_=vd(r);const o=t.serverCache,a=t.eventCache,h=i.updateFullNode(E.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(E.EMPTY_NODE,a.getNode(),null),f=new Ie(h,o.isFullyInitialized(),i.filtersNodes()),u=new Ie(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Rn(u,f),this.eventGenerator_=new Xh(this.query_)}get query(){return this.query_}}function Td(n){return n.viewCache_.serverCache.getNode()}function Rd(n){return yn(n.viewCache_)}function Ad(n,e){const t=Le(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function jr(n){return n.eventRegistrations_.length===0}function kd(n,e){n.eventRegistrations_.push(e)}function Lr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Fr(n,e,t,s){e.type===ae.MERGE&&e.source.queryId!==null&&(m(Le(n.viewCache_),"We should always have a full cache before handling merges"),m(yn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=bd(n.processor_,i,e,t,s);return Cd(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ea(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Dd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{s.push(nt(r,o))}),t.isFullyInitialized()&&s.push(Go(t.getNode())),ea(n,s,t.getNode(),e)}function ea(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Zh(n.eventGenerator_,e,t,i)}/**
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
 */let wn;class ta{constructor(){this.views=new Map}}function Pd(n){m(!wn,"__referenceConstructor has already been defined"),wn=n}function Od(){return m(wn,"Reference.ts has not been loaded"),wn}function Md(n){return n.views.size===0}function Xs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Fr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Fr(o,e,t,s));return r}}function na(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=vn(t,i?s:null),h=!1;a?h=!0:s instanceof E?(a=Ks(t,s),h=!1):(a=E.EMPTY_NODE,h=!1);const l=Rn(new Ie(a,h,!1),new Ie(s,i,!1));return new Sd(e,l)}return o}function jd(n,e,t,s,i,r){const o=na(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),kd(o,t),Dd(o,t)}function Ld(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Se(n);if(i==="default")for(const[h,l]of n.views.entries())o=o.concat(Lr(l,t,s)),jr(l)&&(n.views.delete(h),l.query._queryParams.loadsAllData()||r.push(l.query));else{const h=n.views.get(i);h&&(o=o.concat(Lr(h,t,s)),jr(h)&&(n.views.delete(i),h.query._queryParams.loadsAllData()||r.push(h.query)))}return a&&!Se(n)&&r.push(new(Od())(e._repo,e._path)),{removed:r,events:o}}function sa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(const s of n.views.values())t=t||Ad(s,e);return t}function ia(n,e){if(e._queryParams.loadsAllData())return kn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ra(n,e){return ia(n,e)!=null}function Se(n){return kn(n)!=null}function kn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let En;function Fd(n){m(!En,"__referenceConstructor has already been defined"),En=n}function Wd(){return m(En,"Reference.ts has not been loaded"),En}let $d=1;class Wr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=md(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oa(n,e,t,s,i){return sd(n.pendingWriteTree_,e,t,s,i),i?ht(n,new je(zs(),e,t)):[]}function Bd(n,e,t,s){id(n.pendingWriteTree_,e,t,s);const i=j.fromObject(t);return ht(n,new st(zs(),e,i))}function Ce(n,e,t=!1){const s=rd(n.pendingWriteTree_,e);if(od(n.pendingWriteTree_,e)){let r=new j(null);return s.snap!=null?r=r.set(k(),!0):Y(s.children,o=>{r=r.set(new P(o),!0)}),ht(n,new _n(s.path,r,t))}else return[]}function zt(n,e,t){return ht(n,new je(qs(),e,t))}function Ud(n,e,t){const s=j.fromObject(t);return ht(n,new st(qs(),e,s))}function Hd(n,e){return ht(n,new $t(qs(),e))}function Vd(n,e,t){const s=ei(n,t);if(s){const i=ti(s),r=i.path,o=i.queryId,a=J(r,e),h=new $t(Ys(o),a);return ni(n,r,h)}else return[]}function Nn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ra(o,e))){const h=Ld(o,e,t,s);Md(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=h.removed;if(a=h.events,!i){const f=l.findIndex(p=>p._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(p,g)=>Se(g));if(f&&!u){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const g=qd(p);for(let C=0;C<g.length;++C){const T=g[C],U=T.query,fe=ha(n,T);n.listenProvider_.startListening(Rt(U),Bt(n,U),fe.hashFn,fe.onComplete)}}}!u&&l.length>0&&!s&&(f?n.listenProvider_.stopListening(Rt(e),null):l.forEach(p=>{const g=n.queryToTagMap.get(Dn(p));n.listenProvider_.stopListening(Rt(p),g)}))}Yd(n,l)}return a}function aa(n,e,t,s){const i=ei(n,s);if(i!=null){const r=ti(i),o=r.path,a=r.queryId,h=J(o,e),l=new je(Ys(a),h,t);return ni(n,o,l)}else return[]}function Gd(n,e,t,s){const i=ei(n,s);if(i){const r=ti(i),o=r.path,a=r.queryId,h=J(o,e),l=j.fromObject(t),f=new st(Ys(a),h,l);return ni(n,o,f)}else return[]}function As(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,g)=>{const C=J(p,i);r=r||Ne(g,C),o=o||Se(g)});let a=n.syncPointTree_.get(i);a?(o=o||Se(a),r=r||Ne(a,k())):(a=new ta,n.syncPointTree_=n.syncPointTree_.set(i,a));let h;r!=null?h=!0:(h=!1,r=E.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((g,C)=>{const T=Ne(C,k());T&&(r=r.updateImmediateChild(g,T))}));const l=ra(a,e);if(!l&&!e._queryParams.loadsAllData()){const p=Dn(e);m(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=Kd();n.queryToTagMap.set(p,g),n.tagToQueryMap.set(g,p)}const f=An(n.pendingWriteTree_,i);let u=jd(a,e,t,f,r,h);if(!l&&!o&&!s){const p=ia(a,e);u=u.concat(Qd(n,e,p))}return u}function Zs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const h=J(o,e),l=Ne(a,h);if(l)return l});return Ko(i,e,r,t,!0)}function zd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,f)=>{const u=J(l,t);s=s||Ne(f,u)});let i=n.syncPointTree_.get(t);i?s=s||Ne(i,k()):(i=new ta,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ie(s,!0,!1):null,a=An(n.pendingWriteTree_,e._path),h=na(i,e,a,r?o.getNode():E.EMPTY_NODE,r);return Rd(h)}function ht(n,e){return la(e,n.syncPointTree_,null,An(n.pendingWriteTree_,k()))}function la(n,e,t,s){if(I(n.path))return ca(n,e,t,s);{const i=e.get(k());t==null&&i!=null&&(t=Ne(i,k()));let r=[];const o=x(n.path),a=n.operationForChild(o),h=e.children.get(o);if(h&&a){const l=t?t.getImmediateChild(o):null,f=Qo(s,o);r=r.concat(la(a,h,l,f))}return i&&(r=r.concat(Xs(i,n,s,t))),r}}function ca(n,e,t,s){const i=e.get(k());t==null&&i!=null&&(t=Ne(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const h=t?t.getImmediateChild(o):null,l=Qo(s,o),f=n.operationForChild(o);f&&(r=r.concat(ca(f,a,h,l)))}),i&&(r=r.concat(Xs(i,n,s,t))),r}function ha(n,e){const t=e.query,s=Bt(n,t);return{hashFn:()=>(Td(e)||E.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vd(n,t._path,s):Hd(n,t._path);{const r=Hc(i,t);return Nn(n,t,null,r)}}}}function Bt(n,e){const t=Dn(e);return n.queryToTagMap.get(t)}function Dn(n){return n._path.toString()+"$"+n._queryIdentifier}function ei(n,e){return n.tagToQueryMap.get(e)}function ti(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new P(n.substr(0,e))}}function ni(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=An(n.pendingWriteTree_,e);return Xs(s,t,i,null)}function qd(n){return n.fold((e,t,s)=>{if(t&&Se(t))return[kn(t)];{let i=[];return t&&(i=sa(t)),Y(s,(r,o)=>{i=i.concat(o)}),i}})}function Rt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Wd())(n._repo,n._path):n}function Yd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Dn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Kd(){return $d++}function Qd(n,e,t){const s=e._path,i=Bt(n,e),r=ha(n,t),o=n.listenProvider_.startListening(Rt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Se(a.value),"If we're adding a query, it shouldn't be shadowed");else{const h=a.fold((l,f,u)=>{if(!I(l)&&f&&Se(f))return[kn(f).query];{let p=[];return f&&(p=p.concat(sa(f).map(g=>g.query))),Y(u,(g,C)=>{p=p.concat(C)}),p}});for(let l=0;l<h.length;++l){const f=h[l];n.listenProvider_.stopListening(Rt(f),Bt(n,f))}}return o}/**
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
 */class si{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new si(t)}node(){return this.node_}}class ii{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=F(this.path_,e);return new ii(this.syncTree_,t)}node(){return Zs(this.syncTree_,this.path_)}}const Jd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},$r=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Xd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Zd(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Xd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Zd=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},da=function(n,e,t,s){return ri(e,new ii(t,n),s)},ua=function(n,e,t){return ri(n,new si(e),t)};function ri(n,e,t){const s=n.getPriority().val(),i=$r(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=$r(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new G(a,B(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new G(i))),o.forEachChild(W,(a,h)=>{const l=ri(h,e.getImmediateChild(a),t);l!==h&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class oi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ai(n,e){let t=e instanceof P?e:new P(e),s=n,i=x(t);for(;i!==null;){const r=Ze(s.node.children,i)||{children:{},childCount:0};s=new oi(i,s,r),t=O(t),i=x(t)}return s}function dt(n){return n.node.value}function fa(n,e){n.node.value=e,ks(n)}function pa(n){return n.node.childCount>0}function eu(n){return dt(n)===void 0&&!pa(n)}function Pn(n,e){Y(n.node.children,(t,s)=>{e(new oi(t,n,s))})}function ma(n,e,t,s){t&&!s&&e(n),Pn(n,i=>{ma(i,e,!0,s)}),t&&s&&e(n)}function tu(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qt(n){return new P(n.parent===null?n.name:qt(n.parent)+"/"+n.name)}function ks(n){n.parent!==null&&nu(n.parent,n.name,n)}function nu(n,e,t){const s=eu(t),i=de(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ks(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ks(n))}/**
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
 */const su=/[\[\].#$\/\u0000-\u001F\u007F]/,iu=/[\[\].#$\u0000-\u001F\u007F]/,ls=10*1024*1024,li=function(n){return typeof n=="string"&&n.length!==0&&!su.test(n)},ga=function(n){return typeof n=="string"&&n.length!==0&&!iu.test(n)},ru=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ga(n)},_a=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Sn(n)||n&&typeof n=="object"&&de(n,".sv")},Ds=function(n,e,t,s){s&&e===void 0||On(et(n,"value"),e,t)},On=function(n,e,t){const s=t instanceof P?new Eh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ke(s));if(typeof e=="function")throw new Error(n+"contains a function "+ke(s)+" with contents = "+e.toString());if(Sn(e))throw new Error(n+"contains "+e.toString()+" "+ke(s));if(typeof e=="string"&&e.length>ls/3&&In(e)>ls)throw new Error(n+"contains a string greater than "+ls+" utf8 bytes "+ke(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Y(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!li(o)))throw new Error(n+" contains an invalid key ("+o+") "+ke(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nh(s,o),On(n,a,s),xh(s)}),i&&r)throw new Error(n+' contains ".value" child '+ke(s)+" in addition to actual children.")}},ou=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=jt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!li(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wh);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&se(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ya=function(n,e,t,s){if(s&&e===void 0)return;const i=et(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Y(e,(o,a)=>{const h=new P(o);if(On(i,a,F(t,h)),$s(h)===".priority"&&!_a(a))throw new Error(i+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(h)}),ou(i,r)},au=function(n,e,t){if(!(t&&e===void 0)){if(Sn(e))throw new Error(et(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!_a(e))throw new Error(et(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},va=function(n,e,t,s){if(!(s&&t===void 0)&&!ga(t))throw new Error(et(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lu=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),va(n,e,t,s)},Ye=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},cu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!li(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ru(t))throw new Error(et(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Bs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ca(n,e,t){Mn(n,t),ba(n,s=>Bs(s,e))}function ie(n,e,t){Mn(n,t),ba(n,s=>se(s,e)||se(e,s))}function ba(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(du(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function du(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Oe&&q("event: "+t.toString()),lt(s)}}}/**
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
 */const uu="repo_interrupt",fu=25;class pu{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gn(),this.transactionQueueTree_=new oi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mu(n,e,t){if(n.stats_=Fs(n.repoInfo_),n.forceRestClient_||qc())n.server_=new mn(n.repoInfo_,(s,i,r,o)=>{Br(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ur(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ge(n.repoInfo_,e,(s,i,r,o)=>{Br(n,s,i,r,o)},s=>{Ur(n,s)},s=>{_u(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Xc(n.repoInfo_,()=>new Jh(n.stats_,n.server_)),n.infoData_=new zh,n.infoSyncTree_=new Wr({startListening:(s,i,r,o)=>{let a=[];const h=n.infoData_.getNode(s._path);return h.isEmpty()||(a=zt(n.infoSyncTree_,s._path,h),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ci(n,"connected",!1),n.serverSyncTree_=new Wr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,h)=>{const l=o(a,h);ie(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function gu(n){const t=n.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jn(n){return Jd({timestamp:gu(n)})}function Br(n,e,t,s,i){n.dataUpdateCount++;const r=new P(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const h=cn(t,l=>B(l));o=Gd(n.serverSyncTree_,r,h,i)}else{const h=B(t);o=aa(n.serverSyncTree_,r,h,i)}else if(s){const h=cn(t,l=>B(l));o=Ud(n.serverSyncTree_,r,h)}else{const h=B(t);o=zt(n.serverSyncTree_,r,h)}let a=r;o.length>0&&(a=rt(n,r)),ie(n.eventQueue_,a,o)}function Ur(n,e){ci(n,"connected",e),e===!1&&bu(n)}function _u(n,e){Y(e,(t,s)=>{ci(n,t,s)})}function ci(n,e,t){const s=new P("/.info/"+e),i=B(t);n.infoData_.updateSnapshot(s,i);const r=zt(n.infoSyncTree_,s,i);ie(n.eventQueue_,s,r)}function hi(n){return n.nextWriteId_++}function yu(n,e,t){const s=zd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=B(i).withIndex(e._queryParams.getIndex());As(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=zt(n.serverSyncTree_,e._path,r);else{const a=Bt(n.serverSyncTree_,e);o=aa(n.serverSyncTree_,e._path,r,a)}return ie(n.eventQueue_,e._path,o),Nn(n.serverSyncTree_,e,t,null,!0),r},i=>(Yt(n,"get for query "+H(e)+" failed: "+i),Promise.reject(new Error(i))))}function vu(n,e,t,s,i){Yt(n,"set",{path:e.toString(),value:t,priority:s});const r=jn(n),o=B(t,s),a=Zs(n.serverSyncTree_,e),h=ua(o,a,r),l=hi(n),f=oa(n.serverSyncTree_,e,h,l,!0);Mn(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(p,g)=>{const C=p==="ok";C||X("set at "+e+" failed: "+p);const T=Ce(n.serverSyncTree_,l,!C);ie(n.eventQueue_,e,T),Te(n,i,p,g)});const u=ui(n,e);rt(n,u),ie(n.eventQueue_,u,[])}function Cu(n,e,t,s){Yt(n,"update",{path:e.toString(),value:t});let i=!0;const r=jn(n),o={};if(Y(t,(a,h)=>{i=!1,o[a]=da(F(e,a),B(h),n.serverSyncTree_,r)}),i)q("update() called with empty data.  Don't do anything."),Te(n,s,"ok",void 0);else{const a=hi(n),h=Bd(n.serverSyncTree_,e,o,a);Mn(n.eventQueue_,h),n.server_.merge(e.toString(),t,(l,f)=>{const u=l==="ok";u||X("update at "+e+" failed: "+l);const p=Ce(n.serverSyncTree_,a,!u),g=p.length>0?rt(n,e):e;ie(n.eventQueue_,g,p),Te(n,s,l,f)}),Y(t,l=>{const f=ui(n,F(e,l));rt(n,f)}),ie(n.eventQueue_,e,[])}}function bu(n){Yt(n,"onDisconnectEvents");const e=jn(n),t=gn();Ns(n.onDisconnect_,k(),(i,r)=>{const o=da(i,r,n.serverSyncTree_,e);ct(t,i,o)});let s=[];Ns(t,k(),(i,r)=>{s=s.concat(zt(n.serverSyncTree_,i,r));const o=ui(n,i);rt(n,o)}),n.onDisconnect_=gn(),ie(n.eventQueue_,k(),s)}function wu(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Es(n.onDisconnect_,e),Te(n,t,s,i)})}function Hr(n,e,t,s){const i=B(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ct(n.onDisconnect_,e,i),Te(n,s,r,o)})}function Eu(n,e,t,s,i){const r=B(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ct(n.onDisconnect_,e,r),Te(n,i,o,a)})}function Nu(n,e,t,s){if(fs(t)){q("onDisconnect().update() called with empty data.  Don't do anything."),Te(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Y(t,(o,a)=>{const h=B(a);ct(n.onDisconnect_,F(e,o),h)}),Te(n,s,i,r)})}function xu(n,e,t){let s;x(e._path)===".info"?s=As(n.infoSyncTree_,e,t):s=As(n.serverSyncTree_,e,t),Ca(n.eventQueue_,e._path,s)}function Vr(n,e,t){let s;x(e._path)===".info"?s=Nn(n.infoSyncTree_,e,t):s=Nn(n.serverSyncTree_,e,t),Ca(n.eventQueue_,e._path,s)}function Iu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(uu)}function Yt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),q(t,...e)}function Te(n,e,t,s){e&&lt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function wa(n,e,t){return Zs(n.serverSyncTree_,e,t)||E.EMPTY_NODE}function di(n,e=n.transactionQueueTree_){if(e||Ln(n,e),dt(e)){const t=Na(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Su(n,qt(e),t)}else pa(e)&&Pn(e,t=>{di(n,t)})}function Su(n,e,t){const s=t.map(l=>l.currentWriteId),i=wa(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const f=t[l];m(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=J(e,f.path);r=r.updateChild(u,f.currentOutputSnapshotRaw)}const a=r.val(!0),h=e;n.server_.put(h.toString(),a,l=>{Yt(n,"transaction put response",{path:h.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let p=0;p<t.length;p++)t[p].status=2,f=f.concat(Ce(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&u.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Ln(n,ai(n.transactionQueueTree_,e)),di(n,n.transactionQueueTree_),ie(n.eventQueue_,e,f);for(let p=0;p<u.length;p++)lt(u[p])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{X("transaction at "+h.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}rt(n,e)}},o)}function rt(n,e){const t=Ea(n,e),s=qt(t),i=Na(n,t);return Tu(n,i,s),s}function Tu(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const h=e[a],l=J(t,h.path);let f=!1,u;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)f=!0,u=h.abortReason,i=i.concat(Ce(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=fu)f=!0,u="maxretry",i=i.concat(Ce(n.serverSyncTree_,h.currentWriteId,!0));else{const p=wa(n,h.path,o);h.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){On("transaction failed: Data returned ",g,h.path);let C=B(g);typeof g=="object"&&g!=null&&de(g,".priority")||(C=C.updatePriority(p.getPriority()));const U=h.currentWriteId,fe=jn(n),pe=ua(C,p,fe);h.currentOutputSnapshotRaw=C,h.currentOutputSnapshotResolved=pe,h.currentWriteId=hi(n),o.splice(o.indexOf(U),1),i=i.concat(oa(n.serverSyncTree_,h.path,pe,h.currentWriteId,h.applyLocally)),i=i.concat(Ce(n.serverSyncTree_,U,!0))}else f=!0,u="nodata",i=i.concat(Ce(n.serverSyncTree_,h.currentWriteId,!0))}ie(n.eventQueue_,t,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Ln(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)lt(s[a]);di(n,n.transactionQueueTree_)}function Ea(n,e){let t,s=n.transactionQueueTree_;for(t=x(e);t!==null&&dt(s)===void 0;)s=ai(s,t),e=O(e),t=x(e);return s}function Na(n,e){const t=[];return xa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function xa(n,e,t){const s=dt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Pn(e,i=>{xa(n,i,t)})}function Ln(n,e){const t=dt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,fa(e,t.length>0?t:void 0)}Pn(e,s=>{Ln(n,s)})}function ui(n,e){const t=qt(Ea(n,e)),s=ai(n.transactionQueueTree_,e);return tu(s,i=>{cs(n,i)}),cs(n,s),ma(s,i=>{cs(n,i)}),t}function cs(n,e){const t=dt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ce(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fa(e,void 0):t.length=r+1,ie(n.eventQueue_,qt(e),i);for(let o=0;o<s.length;o++)lt(s[o])}}/**
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
 */function Ru(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Au(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):X(`Invalid query segment '${t}' in query '${n}'`)}return e}const Gr=function(n,e){const t=ku(n),s=t.namespace;t.domain==="firebase.com"&&ye(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ye("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Fc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ro(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new P(t.pathString)}},ku=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",h=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let f=n.indexOf("/");f===-1&&(f=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(f,u)),f<u&&(i=Ru(n.substring(f,u)));const p=Au(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",h=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:h,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Ia{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class Sa{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ta{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Du{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new he;return wu(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ye("OnDisconnect.remove",this._path);const e=new he;return Hr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ye("OnDisconnect.set",this._path),Ds("OnDisconnect.set",e,this._path,!1);const t=new he;return Hr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ye("OnDisconnect.setWithPriority",this._path),Ds("OnDisconnect.setWithPriority",e,this._path,!1),au("OnDisconnect.setWithPriority",t,!1);const s=new he;return Eu(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ye("OnDisconnect.update",this._path),ya("OnDisconnect.update",e,this._path,!1);const t=new he;return Nu(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class fi{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:$s(this._path)}get ref(){return new ue(this._repo,this._path)}get _queryIdentifier(){const e=Rr(this._queryParams),t=js(e);return t==="{}"?"default":t}get _queryObject(){return Rr(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof fi))return!1;const t=this._repo===e._repo,s=Bs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bh(this._path)}}class ue extends fi{constructor(e,t){super(e,t,new Gs,!1)}get parent(){const e=Fo(this._path);return e===null?null:new ue(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ot{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new P(e),s=xn(this.ref,e);return new ot(this._node.getChild(t),s,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ot(i,xn(this.ref,s),W)))}hasChild(e){const t=new P(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function A(n,e){return n=Fe(n),n._checkNotDeleted("ref"),e!==void 0?xn(n._root,e):n._root}function xn(n,e){return n=Fe(n),x(n._path)===null?lu("child","path",e,!1):va("child","path",e,!1),new ue(n._repo,F(n._path,e))}function zr(n){return n=Fe(n),new Du(n._repo,n._path)}function hs(n){return Ye("remove",n._path),De(n,null)}function De(n,e){n=Fe(n),Ye("set",n._path),Ds("set",e,n._path,!1);const t=new he;return vu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ce(n,e){ya("update",e,n._path,!1);const t=new he;return Cu(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ze(n){n=Fe(n);const e=new Ta(()=>{}),t=new Fn(e);return yu(n._repo,n,t).then(s=>new ot(s,new ue(n._repo,n._path),n._queryParams.getIndex()))}class Fn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ia("value",this,new ot(e.snapshotNode,new ue(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sa(this,e,t):null}matches(e){return e instanceof Fn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class pi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sa(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=xn(new ue(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ia(e.type,this,new ot(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof pi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Pu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const h=t,l=(f,u)=>{Vr(n._repo,n,a),h(f,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Ta(t,r||void 0),a=e==="value"?new Fn(o):new pi(e,o);return xu(n._repo,n,a),()=>Vr(n._repo,n,a)}function Nt(n,e,t,s){return Pu(n,"value",e,t,s)}Pd(ue);Fd(ue);/**
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
 */const Ou="FIREBASE_DATABASE_EMULATOR_HOST",Ps={};let Mu=!1;function ju(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=oo(r);n.repoInfo_=new Ro(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Lu(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ye("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Gr(r,i),a=o.repoInfo,h,l;typeof process<"u"&&process.env&&(l=process.env[Ou]),l?(h=!0,r=`http://${l}?ns=${a.namespace}`,o=Gr(r,i),a=o.repoInfo):h=!o.repoInfo.secure;const f=i&&h?new Je(Je.OWNER):new Kc(n.name,n.options,e);cu("Invalid Firebase Database URL",o),I(o.path)||ye("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Wu(a,n,f,new Yc(n,t));return new $u(u,n)}function Fu(n,e){const t=Ps[e];(!t||t[n.key]!==n)&&ye(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Iu(n),delete t[n.key]}function Wu(n,e,t,s){let i=Ps[e.name];i||(i={},Ps[e.name]=i);let r=i[n.toURLString()];return r&&ye("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pu(n,Mu,t,s),i[n.toURLString()]=r,r}class $u{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ue(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ye("Cannot call "+e+" on a deleted database.")}}function Bu(n=uo(),e){const t=mc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=il("database");s&&Uu(t,...s)}return t}function Uu(n,e,t,s={}){n=Fe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&hn(s,r.repoInfo_.emulatorOptions))return;ye("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ye('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Je(Je.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:rl(s.mockUserToken,n.app.options.projectId);o=new Je(a)}oo(e)&&yl(e),ju(r,i,s,o)}/**
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
 */function Hu(n){Pc(vc),dn(new Dt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Lu(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ke(ur,fr,n),Ke(ur,fr,"esm2020")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Hu();const qr="imposter_pairs",Yr="imposter_pid",ds="imposter_groq_key",Kr=[{id:"dp1",realWord:"Apple",imposterWord:"Pear"},{id:"dp2",realWord:"Beach",imposterWord:"Pool"},{id:"dp3",realWord:"Coffee",imposterWord:"Tea"},{id:"dp4",realWord:"Hospital",imposterWord:"Clinic"},{id:"dp5",realWord:"Piano",imposterWord:"Guitar"},{id:"dp6",realWord:"Mountain",imposterWord:"Hill"},{id:"dp7",realWord:"Sushi",imposterWord:"Onigiri"},{id:"dp8",realWord:"Doctor",imposterWord:"Nurse"}];function xt(){return Math.random().toString(36).slice(2,11)}function Vu(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function Gu(){let n=sessionStorage.getItem(Yr);return n||(n=xt(),sessionStorage.setItem(Yr,n)),n}let At=null;function zu(){const n={apiKey:"AIzaSyAl-oljveg6umBEqV7HdkaG6pFM7EgSNPI",authDomain:"guess-the-imposter-5d7ec.firebaseapp.com",databaseURL:"https://guess-the-imposter-5d7ec-default-rtdb.firebaseio.com/",projectId:"guess-the-imposter-5d7ec",storageBucket:"guess-the-imposter-5d7ec.firebasestorage.app",messagingSenderId:"1091095792584",appId:"1:1091095792584:web:9d13beaf49afb9e8e18efd"};if(!n.databaseURL)throw new Error("VITE_FIREBASE_DATABASE_URL is not set in .env");const e=Cc().length?uo():ho(n);return At=Bu(e),At}function Yu(){var tr,nr;const n=Ga(),[e]=za(),t=v.useRef(Gu()),[s,i]=v.useState(At),[r,o]=v.useState("home"),[a,h]=v.useState(""),[l,f]=v.useState(null),[u,p]=v.useState({}),[g,C]=v.useState(!1),T=v.useRef([]),[U,fe]=v.useState(()=>(e.get("room")||"").toUpperCase()),[pe,ut]=v.useState(""),[Kt,ft]=v.useState(""),[mi,gi]=v.useState(!1),[Qt,Ra]=v.useState(""),[_i,Jt]=v.useState(""),[yi,vi]=v.useState(!1),[K,pt]=v.useState(()=>{try{const d=localStorage.getItem(qr);return d?JSON.parse(d):Kr}catch{return Kr}}),[Xt,Wn]=v.useState(""),[Zt,$n]=v.useState(""),[mt,Bn]=v.useState(()=>localStorage.getItem(ds)||""),[en,Ci]=v.useState(!1),[tn,Un]=v.useState(""),[Be,bi]=v.useState(5),[Hn,wi]=v.useState("english"),[ve,Aa]=v.useState({}),[Ei,Vn]=v.useState(""),[Ni,xi]=v.useState(30),[Ii,Si]=v.useState(10),[Ti,Ri]=v.useState(1),[Ai,ki]=v.useState(3),[,ka]=v.useState(0),[Di,Pi]=v.useState(null),Oi=v.useRef({}),[Gn,zn]=v.useState(null),[Da,qn]=v.useState(!1),[Yn,Mi]=v.useState(!1),[ji,Pa]=v.useState(!1),[Oa,Li]=v.useState([]),[gt,Fi]=v.useState([]),[_t,Wi]=v.useState(!1),[Kn,$i]=v.useState(""),[Bi,Ui]=v.useState(0),Hi=v.useRef(null),Vi=v.useRef(0),Ma=["😂","😱","🤔","👀","🔥","😤","🫡","💀"],ja=4e3,N=Object.values(u).sort((d,y)=>d.joinedAt-y.joinedAt),re=(tr=l==null?void 0:l.playerOrder)!=null&&tr.length?l.playerOrder.map(d=>u[d]).filter(Boolean):N,Q=l?t.current===l.hostId:!1,V=u[t.current],Gi=N.length>0&&N.every(d=>d.hasSeenWord),zi=N.length>0&&N.every(d=>d.vote!=="");v.useEffect(()=>{localStorage.setItem(qr,JSON.stringify(K))},[K]),v.useEffect(()=>{if(At){i(At);return}try{const d=zu();i(d)}catch(d){console.error("Firebase init failed:",d)}},[]),v.useEffect(()=>{!s||localStorage.getItem(ds)||ze(A(s,"config/groqApiKey")).then(d=>{d.exists()&&Bn(d.val())}).catch(()=>{})},[s]),v.useEffect(()=>()=>{T.current.forEach(d=>d())},[]),v.useEffect(()=>{if(!s||!g||!a)return;T.current.forEach(_=>_()),T.current=[];const d=Nt(A(s,`rooms/${a}/state`),_=>{_.exists()?f(_.val()):(C(!1),f(null),p({}),h(""))}),y=Nt(A(s,`rooms/${a}/players`),_=>{p(_.exists()?_.val():{})}),b=Nt(A(s,`rooms/${a}/clues`),_=>{Aa(_.exists()?_.val():{})}),w=Nt(A(s,`rooms/${a}/reactions`),_=>{if(!_.exists()){Li([]);return}const D=Object.values(_.val());Li(D.sort(($,Z)=>$.sentAt-Z.sentAt))}),R=Nt(A(s,`rooms/${a}/chat`),_=>{if(!_.exists()){Fi([]);return}const D=Object.values(_.val());Fi(D.sort(($,Z)=>$.sentAt-Z.sentAt))});return T.current=[d,y,b,w,R],()=>{d(),y(),b(),w(),R()}},[s,g,a]),v.useEffect(()=>{if(!s||!l||l.status!=="revealing"||!Q||!Gi)return;const d=[...N.map(y=>y.id)].sort(()=>Math.random()-.5);ce(A(s,`rooms/${a}/state`),{status:"discussing",turnIdx:0,turnEndsAt:Date.now()+l.turnSeconds*1e3,playerOrder:d})},[Gi,l==null?void 0:l.status,Q,s,a]),v.useEffect(()=>{!s||!l||l.status!=="voting"||!Q||!zi||ce(A(s,`rooms/${a}/state`),{status:"results"})},[zi,l==null?void 0:l.status,Q,s,a]),v.useEffect(()=>{if(!l||l.status!=="discussing")return;const d=setInterval(()=>ka(y=>y+1),500);return()=>clearInterval(d)},[l==null?void 0:l.status]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!Q)return;const{turnIdx:d,turnEndsAt:y,turnSeconds:b,rotationCount:w}=l,R=re.length*w;if(d>=R)return;const _=Math.max(0,y-Date.now())+150,D=setTimeout(async()=>{if((await ze(A(s,`rooms/${a}/state/turnIdx`))).val()!==d)return;(await ze(A(s,`rooms/${a}/clues/${d}`))).exists()||await De(A(s,`rooms/${a}/clues/${d}`),"⏱ (time ran out)");const Re=d+1,He={[`rooms/${a}/state/turnIdx`]:Re};Re<R&&(He[`rooms/${a}/state/turnEndsAt`]=Date.now()+b*1e3),await ce(A(s,"/"),He)},_);return()=>clearTimeout(D)},[l==null?void 0:l.turnIdx,l==null?void 0:l.turnEndsAt,l==null?void 0:l.status,Q,s,a,N.length]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!Q)return;const{gameStartsAt:d,gameDurationMinutes:y,rotationCount:b}=l;if(!d||y<=0)return;const w=N.length*b;if(l.turnIdx>=w)return;const R=d+y*60*1e3,_=Math.max(0,R-Date.now())+200,D=setTimeout(async()=>{((await ze(A(s,`rooms/${a}/state/turnIdx`))).val()??0)>=w||await ce(A(s,`rooms/${a}/state`),{turnIdx:w})},_);return()=>clearTimeout(D)},[l==null?void 0:l.gameStartsAt,l==null?void 0:l.status,Q,s,a,N.length,l==null?void 0:l.rotationCount]),v.useEffect(()=>{const d=Object.keys(Oi.current),y=Object.keys(ve).find(w=>!d.includes(w));if(Oi.current={...ve},!y)return;Pi(y);const b=setTimeout(()=>Pi(null),2e3);return()=>clearTimeout(b)},[ve]),v.useEffect(()=>{(l==null?void 0:l.status)!=="revealing"&&(qn(!1),Mi(!1))},[l==null?void 0:l.status]),v.useEffect(()=>{Vn("")},[l==null?void 0:l.turnIdx]),v.useEffect(()=>{var d;_t&&((d=Hi.current)==null||d.scrollIntoView({behavior:"smooth"}))},[gt,_t]),v.useEffect(()=>{_t?(Ui(0),Vi.current=Date.now()):Ui(gt.filter(d=>d.sentAt>Vi.current&&d.pid!==t.current).length)},[gt,_t]);const qi=async()=>{if(!s||!Qt.trim()){Jt("Enter your name.");return}if(K.length===0){Jt("No word pairs! Add some words first.");return}vi(!0),Jt("");try{const d=Vu(),y=Date.now(),b={status:"lobby",hostId:t.current,realWord:"",imposterWord:"",imposterPlayerId:"",createdAt:y,turnIdx:0,turnEndsAt:0,turnSeconds:30,gameDurationMinutes:10,rotationCount:1,roundCount:3,currentRound:1,gameStartsAt:0,playerOrder:[]},w={id:t.current,name:Qt.trim(),joinedAt:y,hasSeenWord:!1,vote:"",isHost:!0};await De(A(s,`rooms/${d}`),{state:b,players:{[t.current]:w}}),zr(A(s,`rooms/${d}`)).remove(),h(d),C(!0)}catch(d){Jt(d instanceof Error?d.message:"Failed to create room.")}finally{vi(!1)}},Yi=async()=>{if(!s)return;const d=U.trim().toUpperCase();if(!d||!pe.trim()){ft("Fill in both fields.");return}gi(!0),ft("");try{const y=await ze(A(s,`rooms/${d}/state`));if(!y.exists()){ft("Room not found. Check the code.");return}if(y.val().status!=="lobby"){ft("Game already started.");return}const w={id:t.current,name:pe.trim(),joinedAt:Date.now(),hasSeenWord:!1,vote:"",isHost:!1};await De(A(s,`rooms/${d}/players/${t.current}`),w),zr(A(s,`rooms/${d}/players/${t.current}`)).remove(),h(d),C(!0)}catch(y){ft(y instanceof Error?y.message:"Failed to join.")}finally{gi(!1)}},La=async()=>{if(!s||!Q||N.length<3)return;const d=K[Math.floor(Math.random()*K.length)],y=N[Math.floor(Math.random()*N.length)].id;pt(b=>b.filter(w=>w.id!==d.id)),await ce(A(s,"/"),{[`rooms/${a}/state/status`]:"revealing",[`rooms/${a}/state/realWord`]:d.realWord,[`rooms/${a}/state/imposterWord`]:d.imposterWord,[`rooms/${a}/state/imposterPlayerId`]:y,[`rooms/${a}/state/turnSeconds`]:Ni,[`rooms/${a}/state/gameDurationMinutes`]:Ii,[`rooms/${a}/state/rotationCount`]:Ti,[`rooms/${a}/state/roundCount`]:Ai,[`rooms/${a}/state/currentRound`]:1,[`rooms/${a}/state/gameStartsAt`]:Date.now(),[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/chat`]:null})},Fa=()=>{s&&ce(A(s,`rooms/${a}/players/${t.current}`),{hasSeenWord:!0})},Wa=()=>{!s||!Q||ce(A(s,`rooms/${a}/state`),{status:"voting"})},$a=d=>{!s||V!=null&&V.vote||ce(A(s,`rooms/${a}/players/${t.current}`),{vote:d})},Ki=async()=>{if(!s||!Q||!l)return;const d=(l.currentRound||1)+1,y=d>(l.roundCount||3),b={[`rooms/${a}/state/status`]:"lobby",[`rooms/${a}/state/realWord`]:"",[`rooms/${a}/state/imposterWord`]:"",[`rooms/${a}/state/imposterPlayerId`]:"",[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/state/currentRound`]:y?1:d,[`rooms/${a}/clues`]:null,[`rooms/${a}/chat`]:null};N.forEach(w=>{b[`rooms/${a}/players/${w.id}/hasSeenWord`]=!1,b[`rooms/${a}/players/${w.id}/vote`]=""}),await ce(A(s,"/"),b)},Qi=async()=>{if(!s||!l)return;const d=re.length*l.rotationCount,y=re[l.turnIdx%re.length];if(!y||y.id!==t.current)return;const b=l.turnIdx;if(await De(A(s,`rooms/${a}/clues/${b}`),Ei.trim()||"(skipped)"),Vn(""),(await ze(A(s,`rooms/${a}/state/turnIdx`))).val()!==b)return;const R=b+1,_={[`rooms/${a}/state/turnIdx`]:R};R<d&&(_[`rooms/${a}/state/turnEndsAt`]=Date.now()+l.turnSeconds*1e3),await ce(A(s,"/"),_)},Ba=async d=>{if(!s||!a||!V)return;const y=xt(),b={id:y,pid:t.current,name:V.name,emoji:d,sentAt:Date.now()};await De(A(s,`rooms/${a}/reactions/${y}`),b),setTimeout(()=>hs(A(s,`rooms/${a}/reactions/${y}`)),ja+500)},Qn=c.jsx("div",{className:"gi-reaction-bar",children:Ma.map(d=>c.jsx("button",{className:"gi-reaction-btn",onClick:()=>Ba(d),children:d},d))}),Jn=c.jsx("div",{className:"gi-reaction-overlay","aria-hidden":!0,children:Oa.map(d=>c.jsxs("div",{className:"gi-reaction-float",style:{left:`${d.sentAt%1e3/10+5}%`},children:[c.jsx("span",{className:"gi-reaction-emoji",children:d.emoji}),c.jsx("span",{className:"gi-reaction-label",children:d.name})]},d.id))}),Ji=async()=>{if(!s||!a||!V||!Kn.trim())return;const d=xt(),y={id:d,pid:t.current,name:V.name,text:Kn.trim(),sentAt:Date.now()};await De(A(s,`rooms/${a}/chat/${d}`),y),$i("")},yt=c.jsxs("button",{className:"gi-chat-fab",onClick:()=>Wi(d=>!d),"aria-label":"Toggle chat",children:["💬",Bi>0&&c.jsx("span",{className:"gi-chat-fab-badge",children:Bi})]}),vt=_t?c.jsxs("div",{className:"gi-chat-panel",children:[c.jsxs("div",{className:"gi-chat-header",children:[c.jsx("span",{className:"gi-chat-title",children:"💬 Room Chat"}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Wi(!1),children:"✕"})]}),c.jsxs("div",{className:"gi-chat-messages",children:[gt.length===0&&c.jsx("p",{className:"gi-chat-empty",children:"No messages yet. Say hi! 👋"}),gt.map(d=>c.jsxs("div",{className:`gi-chat-msg${d.pid===t.current?" gi-chat-msg--me":""}`,children:[d.pid!==t.current&&c.jsx("span",{className:"gi-chat-msg-name",children:d.name}),c.jsx("div",{className:"gi-chat-msg-bubble",children:d.text})]},d.id)),c.jsx("div",{ref:Hi})]}),c.jsxs("div",{className:"gi-chat-input-row",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Message…",value:Kn,onChange:d=>$i(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ji(),maxLength:200}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Ji,children:"↑"})]})]}):null,Xi=async()=>{!s||!a||(T.current.forEach(d=>d()),T.current=[],Q?await hs(A(s,`rooms/${a}`)):await hs(A(s,`rooms/${a}/players/${t.current}`)),C(!1),f(null),p({}),h(""))},Ue=()=>{!Xt.trim()||!Zt.trim()||(pt(d=>[...d,{id:xt(),realWord:Xt.trim(),imposterWord:Zt.trim()}]),Wn(""),$n(""))},Zi=async()=>{var d,y,b,w;if(!mt.trim()){Un("Enter a Groq API key.");return}Ci(!0),Un("");try{const R=new Set;K.forEach(M=>{R.add(M.realWord.toLowerCase()),R.add(M.imposterWord.toLowerCase())});const _=Array.from(R).join(", "),D=R.size>0?`
- IMPORTANT: Do NOT use any of these words that already exist: ${_}
- Generate completely NEW and DIFFERENT word pairs`:"";let $="";Hn==="bisaya"?$=`Generate ${Be} word pairs for a "Guess the Imposter" party game in BISAYA/CEBUANO language.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common BISAYA/CEBUANO words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"dagat", imposterWord:"suba"}, {realWord:"iro", imposterWord:"iring"}, {realWord:"buwan", imposterWord:"adlaw"}, {realWord:"lutaw", imposterWord:"tubig"}
- Bad examples (do NOT do this): {realWord:"katre", imposterWord:"katre"}, similar spelling variations${D}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`:$=`Generate ${Be} word pairs for a "Guess the Imposter" party game.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common English words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}
- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}${D}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`;const Z=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${mt}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:$}],temperature:.9})});if(!Z.ok){const M=await Z.json();throw new Error(((d=M==null?void 0:M.error)==null?void 0:d.message)||`HTTP ${Z.status}`)}const nn=(((w=(b=(y=(await Z.json()).choices)==null?void 0:y[0])==null?void 0:b.message)==null?void 0:w.content)??"").match(/\[[\s\S]*\]/);if(!nn)throw new Error("Unexpected AI response format.");const Xn=JSON.parse(nn[0]),sn=M=>M.charAt(0).toUpperCase()+M.slice(1);pt(M=>[...M,...Xn.map(te=>({id:xt(),realWord:sn(te.realWord),imposterWord:sn(te.imposterWord)}))]),localStorage.setItem(ds,mt)}catch(R){Un(R instanceof Error?R.message:"Failed to generate.")}finally{Ci(!1)}},Ua=()=>{const d={};N.forEach(_=>{_.vote&&(d[_.vote]=(d[_.vote]||0)+1)});const y=Math.max(...Object.values(d),0),b=Object.entries(d).filter(([,_])=>_===y).map(([_])=>_),w=l?u[l.imposterPlayerId]:void 0,R=w?b.includes(w.id):!1;return{tally:d,imposter:w,caught:R}},er=`${window.location.origin}${window.location.pathname}?room=${a}`,Ha=()=>navigator.clipboard.writeText(er),Va=()=>navigator.clipboard.writeText(a);if(!g&&r==="home")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-menu",children:[c.jsx("img",{src:qa,className:"imposter-logo",alt:"eGov Logo"}),c.jsx("h1",{className:"imposter-title",children:"Guess the Imposter"}),c.jsx("p",{className:"imposter-subtitle",children:"One player has a different word — can the group find them?"}),c.jsxs("div",{className:"imposter-menu-buttons",children:[c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:()=>o("creating"),children:"🏠 Create Room"}),c.jsx("button",{className:"gi-btn gi-btn--secondary",onClick:()=>{fe((e.get("room")||"").toUpperCase()),o("joining")},children:"🚪 Join Room"}),c.jsxs("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("word-manager"),children:["📝 Manage Words ",c.jsx("span",{className:"gi-badge",children:K.length})]})]}),c.jsx("div",{className:"gi-footer-links",children:c.jsx("button",{className:"gi-back-link",onClick:()=>n("/eGov-Game/main-page"),children:"← Back to Games"})})]})});if(!g&&r==="creating")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-setup-card",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Create Room"})]}),c.jsx("label",{className:"gi-label",children:"Your Name (as host)"}),c.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:Qt,onChange:d=>Ra(d.target.value),onKeyDown:d=>d.key==="Enter"&&qi(),autoFocus:!0}),K.length===0?c.jsxs("div",{className:"gi-warning",children:["No word pairs! ",c.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Add words first →"})]}):c.jsxs("p",{className:"gi-hint",style:{marginTop:"0.25rem"},children:[K.length," word pair",K.length!==1?"s":""," ready."," ",c.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Manage"})]}),_i&&c.jsx("p",{className:"gi-error",children:_i}),c.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:qi,disabled:yi||!Qt.trim()||K.length===0,children:yi?"Creating…":"Create Room →"})]})]})});if(!g&&r==="joining")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-setup-card",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Join Room"})]}),c.jsx("label",{className:"gi-label",children:"Room Code"}),c.jsx("input",{className:"gi-input gi-input--code",style:{width:"100%",boxSizing:"border-box"},placeholder:"XXXXXX",maxLength:6,value:U,onChange:d=>fe(d.target.value.toUpperCase())}),c.jsx("label",{className:"gi-label",style:{marginTop:"0.75rem"},children:"Your Name"}),c.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:pe,onChange:d=>ut(d.target.value),onKeyDown:d=>d.key==="Enter"&&Yi()}),Kt&&c.jsx("p",{className:"gi-error",children:Kt}),c.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Yi,disabled:mi||!U.trim()||!pe.trim(),children:mi?"Joining…":"Join →"})]})]})});if(r==="word-manager")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-word-manager",children:[c.jsxs("div",{className:"gi-screen-header",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),c.jsx("h2",{children:"Word Pairs"}),c.jsx("span",{className:"gi-badge gi-badge--large",children:K.length})]}),c.jsxs("div",{className:"wm-add-form",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word (most players)",value:Xt,onChange:d=>Wn(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ue()}),c.jsx("span",{className:"wm-vs",children:"⇄"}),c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Zt,onChange:d=>$n(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ue()}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Ue,children:"Add"})]}),c.jsxs("div",{className:"wm-ai-section",children:[c.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Groq)"}),c.jsxs("div",{className:"wm-ai-controls",children:[c.jsxs("select",{className:"gi-input",value:Hn,onChange:d=>wi(d.target.value),style:{width:"auto"},children:[c.jsx("option",{value:"english",children:"English"}),c.jsx("option",{value:"bisaya",children:"Bisaya"})]}),c.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:mt,onChange:d=>Bn(d.target.value)}),c.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:Be,onChange:d=>bi(Math.max(1,Math.min(20,Number(d.target.value))))}),c.jsx("button",{className:"gi-btn gi-btn--ai",onClick:Zi,disabled:en,children:en?"Generating…":`Generate ${Be}`})]}),tn&&c.jsx("p",{className:"gi-error",children:tn}),c.jsxs("p",{className:"gi-hint",children:["Get a free key at ",c.jsx("span",{className:"gi-hint-strong",children:"console.groq.com"})]})]}),c.jsxs("div",{className:"wm-list",children:[K.length===0&&c.jsx("p",{className:"wm-empty",children:"No pairs yet."}),K.map(d=>c.jsxs("div",{className:"wm-pair-row",children:[c.jsx("span",{className:"wm-real",children:d.realWord}),c.jsx("span",{className:"wm-arrow",children:"⇄"}),c.jsx("span",{className:"wm-imposter",children:d.imposterWord}),c.jsx("button",{className:"wm-delete-btn",onClick:()=>pt(y=>y.filter(b=>b.id!==d.id)),children:"✕"})]},d.id))]})]})});if(!g||!l)return null;if(l.status==="lobby")return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card gi-lobby-card",children:[c.jsxs("div",{className:"gi-lobby-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"gi-room-label",children:"Room Code"}),c.jsx("div",{className:"gi-room-code",onClick:Va,title:"Click to copy",children:a})]}),c.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:Xi,children:Q?"Close Room":"Leave"})]}),c.jsxs("div",{className:"gi-share-row",children:[c.jsx("span",{className:"gi-share-url",children:er}),c.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:Ha,children:"Copy Link"})]}),c.jsxs("div",{className:"gi-lobby-players-label",children:["Players ",c.jsx("span",{className:"gi-badge",children:N.length}),N.length<3&&c.jsx("span",{className:"gi-hint",style:{marginLeft:"0.5rem"},children:"Need at least 3"})]}),c.jsxs("div",{className:"gi-player-list",children:[N.map(d=>c.jsxs("div",{className:`gi-player-chip${d.id===t.current?" gi-player-chip--me":""}`,children:[d.isHost&&c.jsx("span",{className:"gi-host-badge",children:"HOST"}),d.name,d.id===t.current&&c.jsx("span",{style:{opacity:.5,fontSize:"0.75rem"},children:" (you)"})]},d.id)),N.length===0&&c.jsx("p",{className:"wm-empty",children:"Waiting for players…"})]}),Q?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gi-config-grid",children:[c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"⏱ Secs per turn"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>xi(d=>Math.max(10,d-5)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ni,"s"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>xi(d=>Math.min(120,d+5)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🕐 Game duration"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>Si(d=>Math.max(1,d-1)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ii,"m"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Si(d=>Math.min(60,d+1)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🔄 Rotations"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>Ri(d=>Math.max(1,d-1)),children:"−"}),c.jsxs("span",{className:"gi-turn-config-value",children:[Ti,"×"]}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>Ri(d=>Math.min(5,d+1)),children:"+"})]})]}),c.jsxs("div",{className:"gi-turn-config",children:[c.jsx("span",{className:"gi-turn-config-label",children:"🏆 Rounds"}),c.jsxs("div",{className:"gi-turn-config-controls",children:[c.jsx("button",{className:"gi-icon-btn",onClick:()=>ki(d=>Math.max(1,d-1)),children:"−"}),c.jsx("span",{className:"gi-turn-config-value",children:Ai}),c.jsx("button",{className:"gi-icon-btn",onClick:()=>ki(d=>Math.min(10,d+1)),children:"+"})]})]})]}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",marginTop:"0.5rem"},disabled:N.length<3,onClick:La,children:N.length<3?`Need ${3-N.length} more player${3-N.length!==1?"s":""}`:"Start Game →"}),c.jsxs("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.25rem"},onClick:()=>Pa(d=>!d),children:["📝 Words (",K.length,") ",ji?"▲":"▼"]}),ji&&c.jsxs("div",{className:"gi-lobby-words",children:[c.jsxs("div",{className:"wm-add-form",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word",value:Xt,onChange:d=>Wn(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ue()}),c.jsx("span",{className:"wm-vs",children:"⇄"}),c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Zt,onChange:d=>$n(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ue()}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Ue,children:"Add"})]}),c.jsxs("div",{className:"wm-ai-section",children:[c.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Groq)"}),c.jsxs("div",{className:"wm-ai-controls",children:[c.jsxs("select",{className:"gi-input",value:Hn,onChange:d=>wi(d.target.value),style:{width:"auto"},children:[c.jsx("option",{value:"english",children:"English"}),c.jsx("option",{value:"bisaya",children:"Bisaya"})]}),c.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:mt,onChange:d=>Bn(d.target.value)}),c.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:Be,onChange:d=>bi(Math.max(1,Math.min(20,Number(d.target.value))))}),c.jsx("button",{className:"gi-btn gi-btn--ai",onClick:Zi,disabled:en,children:en?"Generating…":`Generate ${Be}`})]}),tn&&c.jsx("p",{className:"gi-error",children:tn}),c.jsxs("p",{className:"gi-hint",children:["Get a free key at ",c.jsx("span",{className:"gi-hint-strong",children:"console.groq.com"})]})]}),c.jsxs("div",{className:"wm-list",children:[K.length===0&&c.jsx("p",{className:"wm-empty",children:"No pairs yet — add some above!"}),K.map(d=>c.jsxs("div",{className:"wm-pair-row",children:[c.jsx("span",{className:"wm-real",children:d.realWord}),c.jsx("span",{className:"wm-arrow",children:"⇄"}),c.jsx("span",{className:"wm-imposter",children:d.imposterWord}),c.jsx("button",{className:"wm-delete-btn",onClick:()=>pt(y=>y.filter(b=>b.id!==d.id)),children:"✕"})]},d.id))]})]})]}):c.jsx("div",{className:"gi-waiting-banner",children:"⏳ Waiting for host to start the game…"}),yt,vt]})});if(l.status==="revealing"){const d=t.current===l.imposterPlayerId,y=d?l.imposterWord:l.realWord,b=(V==null?void 0:V.hasSeenWord)||!1,w=N.filter($=>$.hasSeenWord).length,R=l.gameStartsAt?Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3)):l.gameDurationMinutes*60,_=Math.floor(R/60),D=R%60;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-reveal",children:[c.jsxs("div",{className:"gi-game-topbar",children:[c.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),c.jsxs("div",{className:"gi-game-timer",children:["🕐 ",_,":",String(D).padStart(2,"0")]})]}),c.jsx("h2",{className:"gi-phase-title",children:"Your Secret Word"}),c.jsx("p",{className:"gi-phase-subtitle",children:"Private — don't show other screens!"}),c.jsx("div",{className:"reveal-card-wrap",children:c.jsxs("div",{className:`reveal-card${Yn?"":" reveal-card--tap-me"}${Da?" reveal-card--flipped":""}${b?" reveal-card--visible":""}`,onClick:()=>{Yn?qn($=>!$):(Mi(!0),qn(!0))},children:[c.jsxs("div",{className:"reveal-card__face reveal-card__face--front",children:[c.jsx("div",{className:"reveal-player-num",children:V?V.name[0].toUpperCase():"?"}),c.jsx("div",{className:"reveal-player-name",children:V==null?void 0:V.name}),c.jsx("div",{className:"reveal-tap-badge",children:"👆 Tap to reveal"}),c.jsx("p",{className:"reveal-tap-hint",children:"Your secret word is hidden — tap to see it!"})]}),c.jsxs("div",{className:"reveal-card__face reveal-card__face--back",children:[c.jsx("div",{className:"reveal-word-label",children:"Your word is:"}),c.jsx("div",{className:"reveal-word",children:y}),c.jsx("p",{className:`reveal-role-hint${d?" reveal-role-hint--imposter":""}`,children:d?"🕵️ You are the IMPOSTER — blend in!":"✅ Give clues without saying the word!"}),c.jsxs("p",{className:"reveal-tap-hint",style:{marginTop:"0.5rem"},children:["👆 Tap to ",b?"hide":"close"]})]})]})}),Yn&&!b&&c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",maxWidth:"340px"},onClick:Fa,children:"✅ I've seen my word — Ready!"}),b&&c.jsx("p",{className:"gi-hint",style:{textAlign:"center"},children:"✔️ Confirmed! Waiting for others…"}),c.jsx("div",{className:"gi-seen-players",children:N.map($=>c.jsxs("div",{className:`gi-seen-chip${$.hasSeenWord?" gi-seen-chip--ready":""}`,children:[c.jsx("span",{className:"gi-seen-chip-avatar",children:$.name[0].toUpperCase()}),c.jsx("span",{className:"gi-seen-chip-name",children:$.name}),$.hasSeenWord?c.jsx("span",{className:"gi-seen-chip-check",children:"✓"}):c.jsx("span",{className:"gi-seen-chip-wait",children:"⋯"})]},$.id))}),c.jsxs("div",{className:"gi-seen-progress",children:[c.jsxs("span",{className:"gi-hint",children:[w," / ",N.length," players ready"]}),c.jsx("div",{className:"gi-progress-bar",children:c.jsx("div",{className:"gi-progress-fill",style:{width:`${w/N.length*100}%`}})})]}),yt,vt]})})}if(l.status==="discussing"){const{turnIdx:d,turnEndsAt:y,turnSeconds:b,rotationCount:w}=l,R=re.length*w,_=d>=R,D=_?null:re[d%re.length],$=(D==null?void 0:D.id)===t.current,Z=_?0:Math.max(0,Math.floor((y-Date.now())/1e3)),Re=36,He=2*Math.PI*Re,nn=b>0?Z/b:0,Xn=He*(1-nn),sn=Z<=5&&Z>0;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-discuss",children:[c.jsxs("div",{className:"gi-game-topbar",children:[c.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),l.gameStartsAt>0&&(()=>{const M=Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3));return c.jsxs("div",{className:`gi-game-timer${M<=60?" gi-game-timer--low":""}`,children:["🕐 ",Math.floor(M/60),":",String(M%60).padStart(2,"0")]})})()]}),_?c.jsxs("div",{className:"gi-all-done-banner",children:[c.jsx("div",{className:"gi-all-done-icon",children:"✅"}),c.jsx("div",{className:"gi-all-done-text",children:"All clues in!"}),Q?c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",onClick:Wa,children:"Start Voting →"}):c.jsx("p",{className:"gi-hint",children:"Waiting for host to start voting…"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gi-turn-header",children:[c.jsx("div",{className:"gi-turn-player-name",children:$?"🎤 Your turn!":`🎤 ${D==null?void 0:D.name}'s turn`}),c.jsxs("svg",{className:"gi-countdown-svg",width:"88",height:"88",viewBox:"0 0 88 88",children:[c.jsx("circle",{cx:"44",cy:"44",r:Re,fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),c.jsx("circle",{cx:"44",cy:"44",r:Re,fill:"none",stroke:sn?"#ef4444":"#6366f1",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:He,strokeDashoffset:Xn,transform:"rotate(-90 44 44)",style:{transition:"stroke-dashoffset 0.3s linear, stroke 0.3s"}}),c.jsx("text",{x:"44",y:"50",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:Z})]})]}),$?c.jsxs("div",{className:"gi-my-turn-input",children:[c.jsx("p",{className:"gi-hint",style:{marginBottom:"0.5rem"},children:"Give a clue related to your word — don't say it directly!"}),c.jsxs("div",{className:"gi-clue-input-row",children:[c.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Type your clue…",value:Ei,onChange:M=>Vn(M.target.value),onKeyDown:M=>M.key==="Enter"&&Qi(),autoFocus:!0,maxLength:80}),c.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Qi,children:"Submit →"})]})]}):c.jsxs("div",{className:"gi-waiting-banner",style:{marginTop:0},children:["⏳ Waiting for ",D==null?void 0:D.name," to give a clue…"]})]}),Object.keys(ve).length>0&&c.jsxs("div",{className:"gi-clue-list",children:[c.jsx("div",{className:"gi-clue-list-title",children:"Clues Given"}),N.map(M=>{const te=Array.from({length:d},(ne,Ve)=>Ve).filter(ne=>{var Ve;return((Ve=re[ne%re.length])==null?void 0:Ve.id)===M.id&&ve[String(ne)]!==void 0});if(te.length===0)return null;const rn=te.some(ne=>Di===String(ne));return c.jsxs("div",{className:`gi-clue-row${rn?" gi-clue-row--new":""}`,children:[c.jsx("span",{className:"gi-clue-player",children:M.name}),c.jsx("div",{className:"gi-clue-chips",children:te.map(ne=>c.jsxs("span",{className:`gi-clue-chip${Di===String(ne)?" gi-clue-chip--new":""}`,children:['"',ve[String(ne)],'"']},ne))})]},M.id)})]}),c.jsxs("div",{className:"gi-turn-footer",children:[w>1&&c.jsxs("div",{className:"gi-rotation-indicator",children:[Array.from({length:w},(M,te)=>c.jsx("span",{className:`gi-rot-dot${_||Math.floor(d/N.length)>te?" gi-rot-dot--done":Math.floor(d/N.length)===te?" gi-rot-dot--current":""}`},te)),c.jsx("span",{className:"gi-rotation-label",children:_?"All rotations done":`Rotation ${Math.floor(d/N.length)+1} / ${w}`})]}),c.jsx("div",{className:"reveal-progress",children:re.map((M,te)=>{const rn=d%re.length,ne=!_&&te===rn,Ve=!ne&&(_||te<rn);return c.jsx("div",{className:`reveal-dot${Ve?" reveal-dot--done":ne?" reveal-dot--current":""}`},M.id)})})]}),Qn,Jn,yt,vt]})})}if(l.status==="voting"){const d=(V==null?void 0:V.vote)||"",y=N.filter(b=>b.vote!=="").length;return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-vote",children:[c.jsx("h2",{className:"gi-phase-title",children:"🗳 Vote"}),c.jsx("p",{className:"gi-phase-subtitle",children:"Who do you think is the imposter?"}),d?c.jsxs("div",{className:"gi-voted-confirmation",children:[c.jsx("div",{className:"gi-voted-icon",children:"✅"}),c.jsxs("div",{className:"gi-voted-text",children:["You voted for ",c.jsx("strong",{children:((nr=u[d])==null?void 0:nr.name)??"?"})]})]}):c.jsx("div",{className:"vote-options",children:N.filter(b=>b.id!==t.current).map(b=>c.jsx("button",{className:"vote-option-btn",onClick:()=>$a(b.id),children:b.name},b.id))}),c.jsxs("div",{className:"gi-seen-progress",style:{marginTop:"1rem"},children:[c.jsxs("span",{className:"gi-hint",children:[y," / ",N.length," votes submitted"]}),c.jsx("div",{className:"gi-progress-bar",children:c.jsx("div",{className:"gi-progress-fill",style:{width:`${y/N.length*100}%`}})})]}),Qn,Jn,yt,vt]})})}if(l.status==="results"){const{tally:d,imposter:y,caught:b}=Ua();return c.jsx("div",{className:"imposter-container",children:c.jsxs("div",{className:"imposter-card imposter-result",children:[c.jsx("div",{className:`result-banner${b?" result-banner--success":" result-banner--fail"}`,children:b?"🎉 Imposter Caught!":"😈 Imposter Wins!"}),c.jsx("div",{className:"result-imposter-section",children:c.jsxs("div",{className:"result-imposter-card",children:[c.jsx("div",{className:"result-label",children:"The Imposter was"}),c.jsx("div",{className:"result-imposter-name",children:(y==null?void 0:y.name)??"?"})]})}),c.jsxs("div",{className:"result-words-row",children:[c.jsxs("div",{className:"result-word-card result-word-card--real",children:[c.jsx("div",{className:"result-word-label",children:"Real Word"}),c.jsx("div",{className:"result-word-value",children:l.realWord})]}),c.jsx("span",{className:"wm-arrow",style:{fontSize:"1.5rem"},children:"⇄"}),c.jsxs("div",{className:"result-word-card result-word-card--imposter",children:[c.jsx("div",{className:"result-word-label",children:"Imposter Word"}),c.jsx("div",{className:"result-word-value",children:l.imposterWord})]})]}),c.jsxs("div",{className:"result-votes",children:[c.jsx("h3",{className:"result-votes-title",children:"Vote Results"}),N.map(w=>{const R=d[w.id]||0,_=N.filter(D=>D.vote===w.id);return c.jsx("div",{className:"vote-tally-row",children:c.jsxs("div",{className:"tally-row-top",children:[c.jsxs("span",{className:`tally-name${w.id===l.imposterPlayerId?" tally-name--imposter":""}`,children:[w.name," ",w.id===l.imposterPlayerId?"🕵️":""]}),c.jsx("div",{className:"tally-bar-bg",children:c.jsx("div",{className:"tally-bar",style:{width:`${R/Math.max(N.length-1,1)*100}%`}})}),c.jsx("span",{className:"tally-count",children:R}),_.length>0&&c.jsxs("button",{className:"tally-voters-btn",onClick:()=>zn(w.id),children:[R," voted"]})]})},w.id)})]}),Gn&&(()=>{const w=u[Gn],R=N.filter(_=>_.vote===Gn);return c.jsx("div",{className:"gi-modal-backdrop",onClick:()=>zn(null),children:c.jsxs("div",{className:"gi-modal",onClick:_=>_.stopPropagation(),children:[c.jsxs("div",{className:"gi-modal-title",children:["Voted for ",w==null?void 0:w.name]}),c.jsx("div",{className:"gi-modal-voter-list",children:R.map(_=>c.jsxs("div",{className:"gi-modal-voter-row",children:[c.jsx("span",{className:"gi-modal-voter-avatar",children:_.name[0].toUpperCase()}),c.jsx("span",{className:"gi-modal-voter-name",children:_.name})]},_.id))}),c.jsx("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.75rem"},onClick:()=>zn(null),children:"Close"})]})})})(),Object.keys(ve).length>0&&c.jsxs("div",{className:"result-clue-summary",children:[c.jsx("h3",{className:"result-votes-title",children:"💬 Clues Given"}),N.map(w=>{const R=Object.entries(ve).filter(([_])=>{var D;return((D=N[Number(_)%N.length])==null?void 0:D.id)===w.id}).map(([,_])=>_);return R.length===0?null:c.jsxs("div",{className:"result-clue-player",children:[c.jsxs("span",{className:"result-clue-player-name",children:[w.name,":"]}),c.jsx("div",{className:"result-clue-chips",children:R.map((_,D)=>c.jsxs("span",{className:"result-clue-chip",children:['"',_,'"']},D))})]},w.id)})]}),Q?c.jsxs("div",{className:"result-actions",children:[l.currentRound<l.roundCount?c.jsxs("button",{className:"gi-btn gi-btn--primary",onClick:Ki,children:["Next Round (",l.currentRound+1," / ",l.roundCount,") →"]}):c.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Ki,children:"Play Again"}),c.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:Xi,children:"Close Room"})]}):c.jsx("div",{className:"gi-waiting-banner",style:{marginTop:"0.5rem"},children:"⏳ Waiting for host to start next round…"}),Qn,Jn,yt,vt]})})}return null}export{Yu as default};
