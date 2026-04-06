import{u as Wa,b as $a,r as v,j as h,e as Ba}from"./index-c8388bda.js";const Ua=()=>{};/**
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
 */const Br={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw it(e)},it=function(n){return new Error("Firebase Database ("+Br.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ur=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ha=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Is={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,f=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(t[f],t[d],t[p],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ur(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ha(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw new Va;const p=r<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),d!==64){const y=l<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Va extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hr=function(n){const e=Ur(n);return Is.encodeByteArray(e,!0)},Zt=function(n){return Hr(n).replace(/\./g,"")},ss=function(n){try{return Is.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ga(n){return Vr(void 0,n)}function Vr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!za(t)||(n[t]=Vr(n[t],e[t]));return n}function za(n){return n!=="__proto__"}/**
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
 */function Ya(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qa=()=>Ya().__FIREBASE_DEFAULTS__,Ka=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ss(n[1]);return e&&JSON.parse(e)},Gr=()=>{try{return Ua()||qa()||Ka()||Qa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ja=n=>{var e,t;return(t=(e=Gr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Xa=n=>{const e=Ja(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},zr=()=>{var n;return(n=Gr())==null?void 0:n.config};/**
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
 */function Za(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[Zt(JSON.stringify(t)),Zt(JSON.stringify(o)),a].join(".")}/**
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
 */function el(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(el())}function tl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qr(){return Br.NODE_ADMIN===!0}function nl(){try{return typeof indexedDB=="object"}catch{return!1}}function sl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const il="FirebaseError";class Ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=il,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,s)}}function rl(n,e){return n.replace(ol,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ol=/\{\$([^}]+)}/g;/**
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
 */function St(n){return JSON.parse(n)}function U(n){return JSON.stringify(n)}/**
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
 */const Qr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=St(ss(r[0])||""),t=St(ss(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},al=function(n){const e=Qr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ll=function(n){const e=Qr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ue(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function is(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function en(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Yi(r)&&Yi(o)){if(!tn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Yi(n){return n!==null&&typeof n=="object"}/**
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
 */function cl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class hl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,f;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),f=1518500249):(l=r^o^a,f=1859775393):d<60?(l=r&o|a&(r|o),f=2400959708):(l=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+l+c+f+s[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Je(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ul=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},yn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Jr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dl(n){return(await fetch(n,{credentials:"include"})).ok}class Tt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class fl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new he;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ml(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pl(n){return n===Ae?void 0:n}function ml(n){return n.instantiationMode==="EAGER"}/**
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
 */class _l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const gl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},yl=j.INFO,vl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Cl=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=vl[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xr{constructor(e){this.name=e,this._logLevel=yl,this._logHandler=Cl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const El=(n,e)=>e.some(t=>n instanceof t);let qi,Ki;function bl(){return qi||(qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wl(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,rs=new WeakMap,eo=new WeakMap,Gn=new WeakMap,xs=new WeakMap;function Nl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(we(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,n)}).catch(()=>{}),xs.set(e,n),e}function Il(n){if(rs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});rs.set(n,e)}let os={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||eo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xl(n){os=n(os)}function Sl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(zn(this),e,...t);return eo.set(s,e.sort?e.sort():[e]),we(s)}:wl().includes(n)?function(...e){return n.apply(zn(this),e),we(Zr.get(this))}:function(...e){return we(n.apply(zn(this),e))}}function Tl(n){return typeof n=="function"?Sl(n):(n instanceof IDBTransaction&&Il(n),El(n,bl())?new Proxy(n,os):n)}function we(n){if(n instanceof IDBRequest)return Nl(n);if(Gn.has(n))return Gn.get(n);const e=Tl(n);return e!==n&&(Gn.set(n,e),xs.set(e,n)),e}const zn=n=>xs.get(n);function Rl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=we(o);return s&&o.addEventListener("upgradeneeded",c=>{s(we(o.result),c.oldVersion,c.newVersion,we(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const kl=["get","getKey","getAll","getAllKeys","count"],Al=["put","add","delete","clear"],Yn=new Map;function Qi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yn.get(e))return Yn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Al.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kl.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Yn.set(e,r),r}xl(n=>({...n,get:(e,t,s)=>Qi(e,t)||n.get(e,t,s),has:(e,t)=>!!Qi(e,t)||n.has(e,t)}));/**
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
 */class Dl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Pl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const as="@firebase/app",Ji="0.14.10";/**
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
 */const ge=new Xr("@firebase/app"),Ol="@firebase/app-compat",Ml="@firebase/analytics-compat",jl="@firebase/analytics",Ll="@firebase/app-check-compat",Fl="@firebase/app-check",Wl="@firebase/auth",$l="@firebase/auth-compat",Bl="@firebase/database",Ul="@firebase/data-connect",Hl="@firebase/database-compat",Vl="@firebase/functions",Gl="@firebase/functions-compat",zl="@firebase/installations",Yl="@firebase/installations-compat",ql="@firebase/messaging",Kl="@firebase/messaging-compat",Ql="@firebase/performance",Jl="@firebase/performance-compat",Xl="@firebase/remote-config",Zl="@firebase/remote-config-compat",ec="@firebase/storage",tc="@firebase/storage-compat",nc="@firebase/firestore",sc="@firebase/ai",ic="@firebase/firestore-compat",rc="firebase",oc="12.11.0";/**
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
 */const ls="[DEFAULT]",ac={[as]:"fire-core",[Ol]:"fire-core-compat",[jl]:"fire-analytics",[Ml]:"fire-analytics-compat",[Fl]:"fire-app-check",[Ll]:"fire-app-check-compat",[Wl]:"fire-auth",[$l]:"fire-auth-compat",[Bl]:"fire-rtdb",[Ul]:"fire-data-connect",[Hl]:"fire-rtdb-compat",[Vl]:"fire-fn",[Gl]:"fire-fn-compat",[zl]:"fire-iid",[Yl]:"fire-iid-compat",[ql]:"fire-fcm",[Kl]:"fire-fcm-compat",[Ql]:"fire-perf",[Jl]:"fire-perf-compat",[Xl]:"fire-rc",[Zl]:"fire-rc-compat",[ec]:"fire-gcs",[tc]:"fire-gcs-compat",[nc]:"fire-fst",[ic]:"fire-fst-compat",[sc]:"fire-vertex","fire-js":"fire-js",[rc]:"fire-js-all"};/**
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
 */const Rt=new Map,lc=new Map,cs=new Map;function Xi(n,e){try{n.container.addComponent(e)}catch(t){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){const e=n.name;if(cs.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;cs.set(e,n);for(const t of Rt.values())Xi(t,n);for(const t of lc.values())Xi(t,n);return!0}function cc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hc(n){return n==null?!1:n.settings!==void 0}/**
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
 */const uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ne=new Kr("app","Firebase",uc);/**
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
 */class dc{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}/**
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
 */const fc=oc;function to(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ls,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ne.create("bad-app-name",{appName:String(i)});if(t||(t=zr()),!t)throw Ne.create("no-options");const r=Rt.get(i);if(r){if(tn(t,r.options)&&tn(s,r.config))return r;throw Ne.create("duplicate-app",{appName:i})}const o=new _l(i);for(const c of cs.values())o.addComponent(c);const a=new dc(t,s,o);return Rt.set(i,a),a}function no(n=ls){const e=Rt.get(n);if(!e&&n===ls&&zr())return to();if(!e)throw Ne.create("no-app",{appName:n});return e}function pc(){return Array.from(Rt.values())}function ze(n,e,t){let s=ac[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(o.join(" "));return}nn(new Tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mc="firebase-heartbeat-database",_c=1,kt="firebase-heartbeat-store";let qn=null;function so(){return qn||(qn=Rl(mc,_c,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ne.create("idb-open",{originalErrorMessage:n.message})})),qn}async function gc(n){try{const t=(await so()).transaction(kt),s=await t.objectStore(kt).get(io(n));return await t.done,s}catch(e){if(e instanceof Ft)ge.warn(e.message);else{const t=Ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(t.message)}}}async function Zi(n,e){try{const s=(await so()).transaction(kt,"readwrite");await s.objectStore(kt).put(e,io(n)),await s.done}catch(t){if(t instanceof Ft)ge.warn(t.message);else{const s=Ne.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ge.warn(s.message)}}}function io(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yc=1024,vc=30;class Cc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=er();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>vc){const o=wc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ge.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=er(),{heartbeatsToSend:s,unsentEntries:i}=Ec(this._heartbeatsCache.heartbeats),r=Zt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ge.warn(t),""}}}function er(){return new Date().toISOString().substring(0,10)}function Ec(n,e=yc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),tr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),tr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class bc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nl()?sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tr(n){return Zt(JSON.stringify({version:2,heartbeats:n})).length}function wc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Nc(n){nn(new Tt("platform-logger",e=>new Dl(e),"PRIVATE")),nn(new Tt("heartbeat",e=>new Cc(e),"PRIVATE")),ze(as,Ji,n),ze(as,Ji,"esm2020"),ze("fire-js","")}Nc("");var Ic="firebase",xc="12.11.0";/**
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
 */ze(Ic,xc,"app");const nr="@firebase/database",sr="1.1.2";/**
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
 */let ro="";function Sc(n){ro=n}/**
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
 */class Tc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:St(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Rc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const oo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tc(e)}}catch{}return new Rc},Oe=oo("localStorage"),hs=oo("sessionStorage");/**
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
 */const Ye=new Xr("@firebase/database"),kc=function(){let n=1;return function(){return n++}}(),ao=function(n){const e=ul(n),t=new hl;t.update(e);const s=t.digest();return Is.encodeByteArray(s)},Wt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Wt.apply(null,s):typeof s=="object"?e+=U(s):e+=s,e+=" "}return e};let Me=null,ir=!0;const Ac=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ye.logLevel=j.VERBOSE,Me=Ye.log.bind(Ye),e&&hs.set("logging_enabled",!0)):typeof n=="function"?Me=n:(Me=null,hs.remove("logging_enabled"))},z=function(...n){if(ir===!0&&(ir=!1,Me===null&&hs.get("logging_enabled")===!0&&Ac(!0)),Me){const e=Wt.apply(null,n);Me(e)}},$t=function(n){return function(...e){z(n,...e)}},us=function(...n){const e="FIREBASE INTERNAL ERROR: "+Wt(...n);Ye.error(e)},ye=function(...n){const e=`FIREBASE FATAL ERROR: ${Wt(...n)}`;throw Ye.error(e),new Error(e)},Q=function(...n){const e="FIREBASE WARNING: "+Wt(...n);Ye.warn(e)},Dc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Pc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Xe="[MIN_NAME]",je="[MAX_NAME]",$e=function(n,e){if(n===e)return 0;if(n===Xe||e===je)return-1;if(e===Xe||n===je)return 1;{const t=rr(n),s=rr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Oc=function(n,e){return n===e?0:n<e?-1:1},mt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+U(e))},Ss=function(n){if(typeof n!="object"||n===null)return U(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=U(e[s]),t+=":",t+=Ss(n[e[s]]);return t+="}",t},lo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Y(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const co=function(n){m(!vn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const f=l.join("");let d="";for(c=0;c<64;c+=8){let p=parseInt(f.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},Mc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Lc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Fc=new RegExp("^-?(0*)\\d{1,10}$"),Wc=-2147483648,$c=2147483647,rr=function(n){if(Fc.test(n)){const e=Number(n);if(e>=Wc&&e<=$c)return e}return null},rt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Q("Exception was thrown by user callback.",t),e},Math.floor(0))}},Bc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Uc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,hc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class qe{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qe.OWNER="owner";/**
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
 */const Ts="5",ho="v",uo="s",fo="r",po="f",mo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_o="ls",go="p",ds="ac",yo="websocket",vo="long_polling";/**
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
 */class Co{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Vc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Eo(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===yo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===vo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vc(n)&&(t.ns=n.namespace);const i=[];return Y(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Gc{constructor(){this.counters_={}}incrementCounter(e,t=1){ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ga(this.counters_)}}/**
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
 */const Kn={},Qn={};function Rs(n){const e=n.toString();return Kn[e]||(Kn[e]=new Gc),Kn[e]}function zc(n,e){const t=n.toString();return Qn[t]||(Qn[t]=e()),Qn[t]}/**
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
 */class Yc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&rt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const or="start",qc="close",Kc="pLPCommand",Qc="pRTLPCB",bo="id",wo="pw",No="ser",Jc="cb",Xc="seg",Zc="ts",eh="d",th="dframe",Io=1870,xo=30,nh=Io-xo,sh=25e3,ih=3e4;class Ve{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$t(e),this.stats_=Rs(t),this.urlFn=c=>(this.appCheckToken&&(c[ds]=this.appCheckToken),Eo(t,vo,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ih)),Pc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ks((...r)=>{const[o,a,c,l,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===or)this.id=a,this.password=c;else if(o===qc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[or]="t",s[No]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ho]=Ts,this.transportSessionId&&(s[uo]=this.transportSessionId),this.lastSessionId&&(s[_o]=this.lastSessionId),this.applicationId&&(s[go]=this.applicationId),this.appCheckToken&&(s[ds]=this.appCheckToken),typeof location<"u"&&location.hostname&&mo.test(location.hostname)&&(s[fo]=po);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ve.forceAllow_=!0}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){return Ve.forceAllow_?!0:!Ve.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Mc()&&!jc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hr(t),i=lo(s,nh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[th]="t",s[bo]=e,s[wo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ks{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kc(),window[Kc+this.uniqueCallbackIdentifier]=e,window[Qc+this.uniqueCallbackIdentifier]=t,this.myIFrame=ks.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bo]=this.myID,e[wo]=this.myPW,e[No]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xo+s.length<=Io;){const o=this.pendingSegs.shift();s=s+"&"+Xc+i+"="+o.seg+"&"+Zc+i+"="+o.ts+"&"+eh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rh=16384,oh=45e3;let sn=null;typeof MozWebSocket<"u"?sn=MozWebSocket:typeof WebSocket<"u"&&(sn=WebSocket);class ie{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$t(this.connId),this.stats_=Rs(t),this.connURL=ie.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ho]=Ts,typeof location<"u"&&location.hostname&&mo.test(location.hostname)&&(o[fo]=po),t&&(o[uo]=t),s&&(o[_o]=s),i&&(o[ds]=i),r&&(o[go]=r),Eo(e,yo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oe.set("previous_websocket_failure",!0);try{let s;qr(),this.mySock=new sn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&sn!==null&&!ie.forceDisallow_}static previouslyFailed(){return Oe.isInMemoryStorage||Oe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=St(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=lo(t,rh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2;ie.healthyTimeout=3e4;/**
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
 */class At{static get ALL_TRANSPORTS(){return[Ve,ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ie&&ie.isAvailable();let s=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ie];else{const i=this.transports_=[];for(const r of At.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);At.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}At.globalTransportInitialized_=!1;/**
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
 */const ah=6e4,lh=5e3,ch=10*1024,hh=100*1024,Jn="t",ar="d",uh="s",lr="r",dh="e",cr="o",hr="a",ur="n",dr="p",fh="h";class ph{constructor(e,t,s,i,r,o,a,c,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$t("c:"+this.id+":"),this.transportManager_=new At(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ch?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jn in e){const t=e[Jn];t===hr?this.upgradeIfSecondaryHealthy_():t===lr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===cr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mt("t",e),s=mt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ur,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mt("t",e),s=mt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mt(Jn,e);if(ar in e){const s=e[ar];if(t===fh){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ur){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===uh?this.onConnectionShutdown_(s):t===lr?this.onReset_(s):t===dh?us("Server Error: "+s):t===cr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):us("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ts!==s&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),bt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ah))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class So{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class To{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class rn extends To{static getInstance(){return new rn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fr=32,pr=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function R(){return new D("")}function I(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Se(n){return n.pieces_.length-n.pieceNum_}function O(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function As(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ro(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function L(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=I(n),s=I(e);if(t===null)return e;if(t===s)return K(O(n),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _h(n,e){const t=Dt(n,0),s=Dt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=$e(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Ds(n,e){if(Se(n)!==Se(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ne(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Se(n)>Se(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class gh{constructor(e,t){this.errorPrefix_=t,this.parts_=Dt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yn(this.parts_[s]);ko(this)}}function yh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=yn(e),ko(n)}function vh(n){const e=n.parts_.pop();n.byteLength_-=yn(e),n.parts_.length>0&&(n.byteLength_-=1)}function ko(n){if(n.byteLength_>pr)throw new Error(n.errorPrefix_+"has a key path longer than "+pr+" bytes ("+n.byteLength_+").");if(n.parts_.length>fr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fr+") or object contains a cycle "+De(n))}function De(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ps extends To{static getInstance(){return new Ps}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _t=1e3,Ch=60*5*1e3,mr=30*1e3,Eh=1.3,bh=3e4,wh="server_kill",_r=3;class _e extends So{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=_e.nextPersistentConnectionId_++,this.log_=$t("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_t,this.maxReconnectDelay_=Ch,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!qr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ps.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(U(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new he,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;_e.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ue(e,"w")){const s=Qe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ll(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=al(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):us("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bh&&(this.reconnectDelay_=_t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Eh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new ph(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{Q(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(wh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Q(d),c())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],is(this.interruptReasons_)&&(this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ss(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_r&&(this.reconnectDelay_=mr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_r&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ro.replace(/\./g,"-")]=1,Yr()?e["framework.cordova"]=1:tl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rn.getInstance().currentlyOnline();return is(this.interruptReasons_)&&e}}_e.nextPersistentConnectionId_=0;_e.nextConnectionId_=0;/**
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
 */class Cn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(Xe,e),i=new S(Xe,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
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
 */let Jt;class Ao extends Cn{static get __EMPTY_NODE(){return Jt}static set __EMPTY_NODE(e){Jt=e}compare(e,t){return $e(e.name,t.name)}isDefinedOn(e){throw it("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(je,Jt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Jt)}toString(){return".key"}}const Ke=new Ao;/**
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
 */class Xt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??G.RED,this.left=i??X.EMPTY_NODE,this.right=r??X.EMPTY_NODE}copy(e,t,s,i,r){return new G(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return X.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Nh{copy(e,t,s,i,r){return this}insert(e,t,s){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,t=X.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new X(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xt(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new Nh;/**
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
 */function Ih(n,e){return $e(n.name,e.name)}function Os(n,e){return $e(n,e)}/**
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
 */let fs;function xh(n){fs=n}const Do=function(n){return typeof n=="number"?"number:"+co(n):"string:"+n},Po=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ue(e,".sv"),"Priority must be a string or number.")}else m(n===fs||n.isEmpty(),"priority of unexpected type.");m(n===fs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gr;class V{static set __childrenNodeConstructor(e){gr=e}static get __childrenNodeConstructor(){return gr}constructor(e,t=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Po(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:I(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=I(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Se(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Do(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=co(this.value_):e+=this.value_,this.lazyHash_=ao(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=V.VALUE_TYPE_ORDER.indexOf(t),r=V.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Oo,Mo;function Sh(n){Oo=n}function Th(n){Mo=n}class Rh extends Cn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?$e(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(je,new V("[PRIORITY-POST]",Mo))}makePost(e,t){const s=Oo(e);return new S(t,new V("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new Rh;/**
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
 */const kh=Math.log(2);class Ah{constructor(e){const t=r=>parseInt(Math.log(r)/kh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const on=function(n,e,t,s){n.sort(e);const i=function(c,l){const f=l-c;let d,p;if(f===0)return null;if(f===1)return d=n[c],p=t?t(d):d,new G(p,d.node,G.BLACK,null,null);{const _=parseInt(f/2,10)+c,y=i(c,_),T=i(_+1,l);return d=n[_],p=t?t(d):d,new G(p,d.node,G.BLACK,y,T)}},r=function(c){let l=null,f=null,d=n.length;const p=function(y,T){const $=d-y,fe=d;d-=y;const pe=i($+1,fe),ct=n[$],Gt=t?t(ct):ct;_(new G(Gt,ct.node,T,null,pe))},_=function(y){l?(l.left=y,l=y):(f=y,l=y)};for(let y=0;y<c.count;++y){const T=c.nextBitIsOne(),$=Math.pow(2,c.count-(y+1));T?p($,G.BLACK):(p($,G.BLACK),p($,G.RED))}return f},o=new Ah(n.length),a=r(o);return new X(s||e,a)};/**
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
 */let Xn;const He={};class me{static get Default(){return m(He&&F,"ChildrenNode.ts has not been loaded"),Xn=Xn||new me({".priority":He},{".priority":F}),Xn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null}hasIndex(e){return ue(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=on(s,e.getCompare()):a=He;const c=e.toString(),l={...this.indexSet_};l[c]=e;const f={...this.indexes_};return f[c]=a,new me(f,l)}addToIndexes(e,t){const s=en(this.indexes_,(i,r)=>{const o=Qe(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===He)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(S.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),on(a,o.getCompare())}else return He;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new S(e.name,a))),c.insert(e,e.node)}});return new me(s,this.indexSet_)}removeFromIndexes(e,t){const s=en(this.indexes_,i=>{if(i===He)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new me(s,this.indexSet_)}}/**
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
 */let gt;class w{static get EMPTY_NODE(){return gt||(gt=new w(new X(Os),null,me.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Po(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gt}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?gt:t}}getChild(e){const t=I(e);return t===null?this:this.getImmediateChild(t).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?gt:this.priorityNode_;return new w(i,o,r)}}updateChild(e,t){const s=I(e);if(s===null)return t;{m(I(e)!==".priority"||Se(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(O(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&w.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Do(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ao(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bt?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dh extends w{constructor(){super(new X(Os),w.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const Bt=new Dh;Object.defineProperties(S,{MIN:{value:new S(Xe,w.EMPTY_NODE)},MAX:{value:new S(je,Bt)}});Ao.__EMPTY_NODE=w.EMPTY_NODE;V.__childrenNodeConstructor=w;xh(Bt);Th(Bt);/**
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
 */const Ph=!0;function W(n,e=null){if(n===null)return w.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new V(t,W(e))}if(!(n instanceof Array)&&Ph){const t=[];let s=!1;if(Y(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=W(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new S(o,c)))}}),t.length===0)return w.EMPTY_NODE;const r=on(t,Ih,o=>o.name,Os);if(s){const o=on(t,F.getCompare());return new w(r,W(e),new me({".priority":o},{".priority":F}))}else return new w(r,W(e),me.Default)}else{let t=w.EMPTY_NODE;return Y(n,(s,i)=>{if(ue(n,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(W(e))}}Sh(W);/**
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
 */class Oh extends Cn{constructor(e){super(),this.indexPath_=e,m(!x(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?$e(e.name,t.name):r}makePost(e,t){const s=W(e),i=w.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,Bt);return new S(je,e)}toString(){return Dt(this.indexPath_,0).join("/")}}/**
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
 */class Mh extends Cn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?$e(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=W(e);return new S(t,s)}toString(){return".value"}}const jh=new Mh;/**
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
 */function jo(n){return{type:"value",snapshotNode:n}}function Ze(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Pt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ot(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ms{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Pt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ze(t,s)):o.trackChildChange(Ot(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(Pt(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ot(i,r,o))}else s.trackChildChange(Ze(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Mt{constructor(e){this.indexedFilter_=new Ms(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mt.getStartPost_(e),this.endPost_=Mt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=w.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(w.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Fh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=w.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,_)=>d(_,p)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new S(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,l,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,c);if(f&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ot(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Pt(t,d));const T=a.updateImmediateChild(t,w.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Ze(p.name,p.node)),T.updateImmediateChild(p.name,p.node)):T}}else return s.isEmpty()?e:f&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Pt(l.name,l.node)),r.trackChildChange(Ze(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,w.EMPTY_NODE)):e}}/**
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
 */class js{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xe}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new js;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wh(n){return n.loadsAllData()?new Ms(n.getIndex()):n.hasLimit()?new Fh(n):new Mt(n)}function yr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===jh?t="$value":n.index_===Ke?t="$key":(m(n.index_ instanceof Oh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=U(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=U(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+U(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=U(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+U(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function vr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
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
 */class an extends So{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$t("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=an.getListenId_(e,s),a={};this.listens_[o]=a;const c=yr(e._queryParams);this.restRequest_(r+".json",c,(l,f)=>{let d=f;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,s),Qe(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,t){const s=an.getListenId_(e,t);delete this.listens_[s]}get(e){const t=yr(e._queryParams),s=e._path.toString(),i=new he;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cl(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=St(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class $h{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ln(){return{value:null,children:new Map}}function ot(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=I(e);n.children.has(s)||n.children.set(s,ln());const i=n.children.get(s);e=O(e),ot(i,e,t)}}function ps(n,e){if(x(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(F,(s,i)=>{ot(n,new D(s),i)}),ps(n,e)}}else if(n.children.size>0){const t=I(e);return e=O(e),n.children.has(t)&&ps(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function ms(n,e,t){n.value!==null?t(e,n.value):Bh(n,(s,i)=>{const r=new D(e.toString()+"/"+s);ms(i,r,t)})}function Bh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Uh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Y(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Cr=10*1e3,Hh=30*1e3,Vh=5*60*1e3;class Gh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Uh(e);const s=Cr+(Hh-Cr)*Math.random();bt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Y(e,(i,r)=>{r>0&&ue(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),bt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vh))}}/**
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
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function Ls(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ws(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class cn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=re.ACK_USER_WRITE,this.source=Ls()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new cn(R(),t,this.revert)}}else return m(I(this.path)===e,"operationForChild called for unrelated child."),new cn(O(this.path),this.affectedTree,this.revert)}}/**
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
 */class jt{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new jt(this.source,R()):new jt(this.source,O(this.path))}}/**
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
 */class Le{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=re.OVERWRITE}operationForChild(e){return x(this.path)?new Le(this.source,R(),this.snap.getImmediateChild(e)):new Le(this.source,O(this.path),this.snap)}}/**
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
 */class et{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=re.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Le(this.source,R(),t.value):new et(this.source,R(),t)}else return m(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new et(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Te{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=I(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Lh(o.childName,o.snapshotNode))}),yt(n,i,"child_removed",e,s,t),yt(n,i,"child_added",e,s,t),yt(n,i,"child_moved",r,s,t),yt(n,i,"child_changed",e,s,t),yt(n,i,"value",e,s,t),i}function yt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Kh(n,a,c)),o.forEach(a=>{const c=qh(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function qh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Kh(n,e,t){if(e.childName==null||t.childName==null)throw it("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function En(n,e){return{eventCache:n,serverCache:e}}function wt(n,e,t,s){return En(new Te(e,t,s),n.serverCache)}function Lo(n,e,t,s){return En(n.eventCache,new Te(e,t,s))}function hn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Fe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Zn;const Qh=()=>(Zn||(Zn=new X(Oc)),Zn);class M{static fromObject(e){let t=new M(null);return Y(e,(s,i)=>{t=t.set(new D(s),i)}),t}constructor(e,t=Qh()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:R(),value:this.value};if(x(e))return null;{const s=I(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(O(e),t);return r!=null?{path:L(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=I(e),s=this.children.get(t);return s!==null?s.subtree(O(e)):new M(null)}}set(e,t){if(x(e))return new M(t,this.children);{const s=I(e),r=(this.children.get(s)||new M(null)).set(O(e),t),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=I(e),s=this.children.get(t);if(s){const i=s.remove(O(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=I(e),s=this.children.get(t);return s?s.get(O(e)):null}}setTree(e,t){if(x(e))return t;{const s=I(e),r=(this.children.get(s)||new M(null)).setTree(O(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,R(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(O(e),L(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,R(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=I(e),r=this.children.get(i);return r?r.foreachOnPath_(O(e),L(t,i),s):new M(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new M(null))}}function Nt(n,e,t){if(x(e))return new oe(new M(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=K(i,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(i,r))}else{const i=new M(t),r=n.writeTree_.setTree(e,i);return new oe(r)}}}function _s(n,e,t){let s=n;return Y(t,(i,r)=>{s=Nt(s,L(e,i),r)}),s}function Er(n,e){if(x(e))return oe.empty();{const t=n.writeTree_.setTree(e,new M(null));return new oe(t)}}function gs(n,e){return Be(n,e)!=null}function Be(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function br(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function Ie(n,e){if(x(e))return n;{const t=Be(n,e);return t!=null?new oe(new M(t)):new oe(n.writeTree_.subtree(e))}}function ys(n){return n.writeTree_.isEmpty()}function tt(n,e){return Fo(R(),n.writeTree_,e)}function Fo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Fo(L(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(L(n,".priority"),s)),t}}/**
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
 */function bn(n,e){return Uo(e,n)}function Jh(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Nt(n.visibleWrites,e,t)),n.lastWriteId=s}function Xh(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=_s(n.visibleWrites,e,t),n.lastWriteId=s}function Zh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function eu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tu(a,s.path)?i=!1:ne(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nu(n),!0;if(s.snap)n.visibleWrites=Er(n.visibleWrites,s.path);else{const a=s.children;Y(a,c=>{n.visibleWrites=Er(n.visibleWrites,L(s.path,c))})}return!0}else return!1}function tu(n,e){if(n.snap)return ne(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ne(L(n.path,t),e))return!0;return!1}function nu(n){n.visibleWrites=Wo(n.allWrites,su,R()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function su(n){return n.visible}function Wo(n,e,t){let s=oe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ne(t,o)?(a=K(t,o),s=Nt(s,a,r.snap)):ne(o,t)&&(a=K(o,t),s=Nt(s,R(),r.snap.getChild(a)));else if(r.children){if(ne(t,o))a=K(t,o),s=_s(s,a,r.children);else if(ne(o,t))if(a=K(o,t),x(a))s=_s(s,R(),r.children);else{const c=Qe(r.children,I(a));if(c){const l=c.getChild(O(a));s=Nt(s,R(),l)}}}else throw it("WriteRecord should have .snap or .children")}}return s}function $o(n,e,t,s,i){if(!s&&!i){const r=Be(n.visibleWrites,e);if(r!=null)return r;{const o=Ie(n.visibleWrites,e);if(ys(o))return t;if(t==null&&!gs(o,R()))return null;{const a=t||w.EMPTY_NODE;return tt(o,a)}}}else{const r=Ie(n.visibleWrites,e);if(!i&&ys(r))return t;if(!i&&t==null&&!gs(r,R()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(ne(l.path,e)||ne(e,l.path))},a=Wo(n.allWrites,o,e),c=t||w.EMPTY_NODE;return tt(a,c)}}}function iu(n,e,t){let s=w.EMPTY_NODE;const i=Be(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ie(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const c=tt(Ie(r,new D(o)),a);s=s.updateImmediateChild(o,c)}),br(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ie(n.visibleWrites,e);return br(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ru(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(gs(n.visibleWrites,r))return null;{const o=Ie(n.visibleWrites,r);return ys(o)?i.getChild(t):tt(o,i.getChild(t))}}function ou(n,e,t,s){const i=L(e,t),r=Be(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ie(n.visibleWrites,i);return tt(o,s.getNode().getImmediateChild(t))}else return null}function au(n,e){return Be(n.visibleWrites,e)}function lu(n,e,t,s,i,r,o){let a;const c=Ie(n.visibleWrites,e),l=Be(c,R());if(l!=null)a=l;else if(t!=null)a=tt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&f.length<i;)d(_,s)!==0&&f.push(_),_=p.getNext();return f}else return[]}function cu(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function un(n,e,t,s){return $o(n.writeTree,n.treePath,e,t,s)}function $s(n,e){return iu(n.writeTree,n.treePath,e)}function wr(n,e,t,s){return ru(n.writeTree,n.treePath,e,t,s)}function dn(n,e){return au(n.writeTree,L(n.treePath,e))}function hu(n,e,t,s,i,r){return lu(n.writeTree,n.treePath,e,t,s,i,r)}function Bs(n,e,t){return ou(n.writeTree,n.treePath,e,t)}function Bo(n,e){return Uo(L(n.treePath,e),n.writeTree)}function Uo(n,e){return{treePath:n,writeTree:e}}/**
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
 */class uu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ot(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Pt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ze(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ot(s,e.snapshotNode,i.oldSnap));else throw it("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class du{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ho=new du;class Us{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Te(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fe(this.viewCache_),r=hu(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function fu(n){return{filter:n}}function pu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mu(n,e,t,s,i){const r=new uu;let o,a;if(t.type===re.OVERWRITE){const l=t;l.source.fromUser?o=vs(n,e,l.path,l.snap,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!x(l.path),o=fn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===re.MERGE){const l=t;l.source.fromUser?o=gu(n,e,l.path,l.children,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Cs(n,e,l.path,l.children,s,i,a,r))}else if(t.type===re.ACK_USER_WRITE){const l=t;l.revert?o=Cu(n,e,l.path,s,i,r):o=yu(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===re.LISTEN_COMPLETE)o=vu(n,e,t.path,s,r);else throw it("Unknown operation type: "+t.type);const c=r.getChanges();return _u(e,o,c),{viewCache:o,changes:c}}function _u(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(jo(hn(e)))}}function Vo(n,e,t,s,i,r){const o=e.eventCache;if(dn(s,t)!=null)return e;{let a,c;if(x(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Fe(e),f=l instanceof w?l:w.EMPTY_NODE,d=$s(s,f);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=un(s,Fe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=I(t);if(l===".priority"){m(Se(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const d=wr(s,t,f,c);d!=null?a=n.filter.updatePriority(f,d):a=o.getNode()}else{const f=O(t);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=wr(s,t,o.getNode(),c);p!=null?d=o.getNode().getImmediateChild(l).updateChild(f,p):d=o.getNode().getImmediateChild(l)}else d=Bs(s,l,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),l,d,f,i,r):a=o.getNode()}}return wt(e,a,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function fn(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const f=o?n.filter:n.filter.getIndexedFilter();if(x(t))l=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,s);l=f.updateFullNode(c.getNode(),_,null)}else{const _=I(t);if(!c.isCompleteForPath(t)&&Se(t)>1)return e;const y=O(t),$=c.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?l=f.updatePriority(c.getNode(),$):l=f.updateChild(c.getNode(),_,$,y,Ho,null)}const d=Lo(e,l,c.isFullyInitialized()||x(t),f.filtersNodes()),p=new Us(i,d,r);return Vo(n,d,t,i,p,a)}function vs(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const f=new Us(i,e,r);if(x(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=wt(e,l,!0,n.filter.filtersNodes());else{const d=I(t);if(d===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=wt(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=O(t),_=a.getNode().getImmediateChild(d);let y;if(x(p))y=s;else{const T=f.getCompleteChild(d);T!=null?As(p)===".priority"&&T.getChild(Ro(p)).isEmpty()?y=T:y=T.updateChild(p,s):y=w.EMPTY_NODE}if(_.equals(y))c=e;else{const T=n.filter.updateChild(a.getNode(),d,y,p,f,o);c=wt(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Nr(n,e){return n.eventCache.isCompleteForChild(e)}function gu(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const f=L(t,c);Nr(e,I(f))&&(a=vs(n,a,f,l,i,r,o))}),s.foreach((c,l)=>{const f=L(t,c);Nr(e,I(f))||(a=vs(n,a,f,l,i,r,o))}),a}function Ir(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Cs(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;x(t)?l=s:l=new M(null).setTree(t,s);const f=e.serverCache.getNode();return l.children.inorderTraversal((d,p)=>{if(f.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=Ir(n,_,p);c=fn(n,c,new D(d),y,i,r,o,a)}}),l.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!f.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),T=Ir(n,y,p);c=fn(n,c,new D(d),T,i,r,o,a)}}),c}function yu(n,e,t,s,i,r,o){if(dn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(x(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return fn(n,e,t,c.getNode().getChild(t),i,r,a,o);if(x(t)){let l=new M(null);return c.getNode().forEachChild(Ke,(f,d)=>{l=l.set(new D(f),d)}),Cs(n,e,t,l,i,r,a,o)}else return e}else{let l=new M(null);return s.foreach((f,d)=>{const p=L(t,f);c.isCompleteForPath(p)&&(l=l.set(f,c.getNode().getChild(p)))}),Cs(n,e,t,l,i,r,a,o)}}function vu(n,e,t,s,i){const r=e.serverCache,o=Lo(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Vo(n,o,t,s,Ho,i)}function Cu(n,e,t,s,i,r){let o;if(dn(s,t)!=null)return e;{const a=new Us(s,e,i),c=e.eventCache.getNode();let l;if(x(t)||I(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=un(s,Fe(e));else{const d=e.serverCache.getNode();m(d instanceof w,"serverChildren would be complete if leaf node"),f=$s(s,d)}f=f,l=n.filter.updateFullNode(c,f,r)}else{const f=I(t);let d=Bs(s,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),d!=null?l=n.filter.updateChild(c,f,d,O(t),a,r):e.eventCache.getNode().hasChild(f)?l=n.filter.updateChild(c,f,w.EMPTY_NODE,O(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=un(s,Fe(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||dn(s,R())!=null,wt(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Eu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ms(s.getIndex()),r=Wh(s);this.processor_=fu(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(w.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(w.EMPTY_NODE,a.getNode(),null),f=new Te(c,o.isFullyInitialized(),i.filtersNodes()),d=new Te(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=En(d,f),this.eventGenerator_=new zh(this.query_)}get query(){return this.query_}}function bu(n){return n.viewCache_.serverCache.getNode()}function wu(n){return hn(n.viewCache_)}function Nu(n,e){const t=Fe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(I(e)).isEmpty())?t.getChild(e):null}function xr(n){return n.eventRegistrations_.length===0}function Iu(n,e){n.eventRegistrations_.push(e)}function Sr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Tr(n,e,t,s){e.type===re.MERGE&&e.source.queryId!==null&&(m(Fe(n.viewCache_),"We should always have a full cache before handling merges"),m(hn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mu(n.processor_,i,e,t,s);return pu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Go(n,r.changes,r.viewCache.eventCache.getNode(),null)}function xu(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(Ze(r,o))}),t.isFullyInitialized()&&s.push(jo(t.getNode())),Go(n,s,t.getNode(),e)}function Go(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Yh(n.eventGenerator_,e,t,i)}/**
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
 */let pn;class zo{constructor(){this.views=new Map}}function Su(n){m(!pn,"__referenceConstructor has already been defined"),pn=n}function Tu(){return m(pn,"Reference.ts has not been loaded"),pn}function Ru(n){return n.views.size===0}function Hs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Tr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Tr(o,e,t,s));return r}}function Yo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=un(t,i?s:null),c=!1;a?c=!0:s instanceof w?(a=$s(t,s),c=!1):(a=w.EMPTY_NODE,c=!1);const l=En(new Te(a,c,!1),new Te(s,i,!1));return new Eu(e,l)}return o}function ku(n,e,t,s,i,r){const o=Yo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Iu(o,t),xu(o,t)}function Au(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Re(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Sr(l,t,s)),xr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Sr(c,t,s)),xr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Re(n)&&r.push(new(Tu())(e._repo,e._path)),{removed:r,events:o}}function qo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xe(n,e){let t=null;for(const s of n.views.values())t=t||Nu(s,e);return t}function Ko(n,e){if(e._queryParams.loadsAllData())return wn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Qo(n,e){return Ko(n,e)!=null}function Re(n){return wn(n)!=null}function wn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let mn;function Du(n){m(!mn,"__referenceConstructor has already been defined"),mn=n}function Pu(){return m(mn,"Reference.ts has not been loaded"),mn}let Ou=1;class Rr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=cu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jo(n,e,t,s,i){return Jh(n.pendingWriteTree_,e,t,s,i),i?at(n,new Le(Ls(),e,t)):[]}function Mu(n,e,t,s){Xh(n.pendingWriteTree_,e,t,s);const i=M.fromObject(t);return at(n,new et(Ls(),e,i))}function be(n,e,t=!1){const s=Zh(n.pendingWriteTree_,e);if(eu(n.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(R(),!0):Y(s.children,o=>{r=r.set(new D(o),!0)}),at(n,new cn(s.path,r,t))}else return[]}function Ut(n,e,t){return at(n,new Le(Fs(),e,t))}function ju(n,e,t){const s=M.fromObject(t);return at(n,new et(Fs(),e,s))}function Lu(n,e){return at(n,new jt(Fs(),e))}function Fu(n,e,t){const s=Gs(n,t);if(s){const i=zs(s),r=i.path,o=i.queryId,a=K(r,e),c=new jt(Ws(o),a);return Ys(n,r,c)}else return[]}function _n(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Qo(o,e))){const c=Au(o,e,t,s);Ru(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const f=l.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(p,_)=>Re(_));if(f&&!d){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=Bu(p);for(let y=0;y<_.length;++y){const T=_[y],$=T.query,fe=ta(n,T);n.listenProvider_.startListening(It($),Lt(n,$),fe.hashFn,fe.onComplete)}}}!d&&l.length>0&&!s&&(f?n.listenProvider_.stopListening(It(e),null):l.forEach(p=>{const _=n.queryToTagMap.get(Nn(p));n.listenProvider_.stopListening(It(p),_)}))}Uu(n,l)}return a}function Xo(n,e,t,s){const i=Gs(n,s);if(i!=null){const r=zs(i),o=r.path,a=r.queryId,c=K(o,e),l=new Le(Ws(a),c,t);return Ys(n,o,l)}else return[]}function Wu(n,e,t,s){const i=Gs(n,s);if(i){const r=zs(i),o=r.path,a=r.queryId,c=K(o,e),l=M.fromObject(t),f=new et(Ws(a),c,l);return Ys(n,o,f)}else return[]}function Es(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,_)=>{const y=K(p,i);r=r||xe(_,y),o=o||Re(_)});let a=n.syncPointTree_.get(i);a?(o=o||Re(a),r=r||xe(a,R())):(a=new zo,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=w.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,y)=>{const T=xe(y,R());T&&(r=r.updateImmediateChild(_,T))}));const l=Qo(a,e);if(!l&&!e._queryParams.loadsAllData()){const p=Nn(e);m(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=Hu();n.queryToTagMap.set(p,_),n.tagToQueryMap.set(_,p)}const f=bn(n.pendingWriteTree_,i);let d=ku(a,e,t,f,r,c);if(!l&&!o&&!s){const p=Ko(a,e);d=d.concat(Vu(n,e,p))}return d}function Vs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=K(o,e),l=xe(a,c);if(l)return l});return $o(i,e,r,t,!0)}function $u(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,f)=>{const d=K(l,t);s=s||xe(f,d)});let i=n.syncPointTree_.get(t);i?s=s||xe(i,R()):(i=new zo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Te(s,!0,!1):null,a=bn(n.pendingWriteTree_,e._path),c=Yo(i,e,a,r?o.getNode():w.EMPTY_NODE,r);return wu(c)}function at(n,e){return Zo(e,n.syncPointTree_,null,bn(n.pendingWriteTree_,R()))}function Zo(n,e,t,s){if(x(n.path))return ea(n,e,t,s);{const i=e.get(R());t==null&&i!=null&&(t=xe(i,R()));let r=[];const o=I(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,f=Bo(s,o);r=r.concat(Zo(a,c,l,f))}return i&&(r=r.concat(Hs(i,n,s,t))),r}}function ea(n,e,t,s){const i=e.get(R());t==null&&i!=null&&(t=xe(i,R()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Bo(s,o),f=n.operationForChild(o);f&&(r=r.concat(ea(f,a,c,l)))}),i&&(r=r.concat(Hs(i,n,s,t))),r}function ta(n,e){const t=e.query,s=Lt(n,t);return{hashFn:()=>(bu(e)||w.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Fu(n,t._path,s):Lu(n,t._path);{const r=Lc(i,t);return _n(n,t,null,r)}}}}function Lt(n,e){const t=Nn(e);return n.queryToTagMap.get(t)}function Nn(n){return n._path.toString()+"$"+n._queryIdentifier}function Gs(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Ys(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=bn(n.pendingWriteTree_,e);return Hs(s,t,i,null)}function Bu(n){return n.fold((e,t,s)=>{if(t&&Re(t))return[wn(t)];{let i=[];return t&&(i=qo(t)),Y(s,(r,o)=>{i=i.concat(o)}),i}})}function It(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Pu())(n._repo,n._path):n}function Uu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Nn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Hu(){return Ou++}function Vu(n,e,t){const s=e._path,i=Lt(n,e),r=ta(n,t),o=n.listenProvider_.startListening(It(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Re(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,f,d)=>{if(!x(l)&&f&&Re(f))return[wn(f).query];{let p=[];return f&&(p=p.concat(qo(f).map(_=>_.query))),Y(d,(_,y)=>{p=p.concat(y)}),p}});for(let l=0;l<c.length;++l){const f=c[l];n.listenProvider_.stopListening(It(f),Lt(n,f))}}return o}/**
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
 */class qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qs(t)}node(){return this.node_}}class Ks{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new Ks(this.syncTree_,t)}node(){return Vs(this.syncTree_,this.path_)}}const Gu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},kr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yu(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Yu=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},na=function(n,e,t,s){return Qs(e,new Ks(t,n),s)},sa=function(n,e,t){return Qs(n,new qs(e),t)};function Qs(n,e,t){const s=n.getPriority().val(),i=kr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=kr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new V(a,W(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new V(i))),o.forEachChild(F,(a,c)=>{const l=Qs(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Js{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xs(n,e){let t=e instanceof D?e:new D(e),s=n,i=I(t);for(;i!==null;){const r=Qe(s.node.children,i)||{children:{},childCount:0};s=new Js(i,s,r),t=O(t),i=I(t)}return s}function lt(n){return n.node.value}function ia(n,e){n.node.value=e,bs(n)}function ra(n){return n.node.childCount>0}function qu(n){return lt(n)===void 0&&!ra(n)}function In(n,e){Y(n.node.children,(t,s)=>{e(new Js(t,n,s))})}function oa(n,e,t,s){t&&!s&&e(n),In(n,i=>{oa(i,e,!0,s)}),t&&s&&e(n)}function Ku(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ht(n){return new D(n.parent===null?n.name:Ht(n.parent)+"/"+n.name)}function bs(n){n.parent!==null&&Qu(n.parent,n.name,n)}function Qu(n,e,t){const s=qu(t),i=ue(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,bs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,bs(n))}/**
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
 */const Ju=/[\[\].#$\/\u0000-\u001F\u007F]/,Xu=/[\[\].#$\u0000-\u001F\u007F]/,es=10*1024*1024,Zs=function(n){return typeof n=="string"&&n.length!==0&&!Ju.test(n)},aa=function(n){return typeof n=="string"&&n.length!==0&&!Xu.test(n)},Zu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aa(n)},la=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!vn(n)||n&&typeof n=="object"&&ue(n,".sv")},ws=function(n,e,t,s){s&&e===void 0||xn(Je(n,"value"),e,t)},xn=function(n,e,t){const s=t instanceof D?new gh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+De(s));if(typeof e=="function")throw new Error(n+"contains a function "+De(s)+" with contents = "+e.toString());if(vn(e))throw new Error(n+"contains "+e.toString()+" "+De(s));if(typeof e=="string"&&e.length>es/3&&yn(e)>es)throw new Error(n+"contains a string greater than "+es+" utf8 bytes "+De(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Y(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zs(o)))throw new Error(n+" contains an invalid key ("+o+") "+De(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yh(s,o),xn(n,a,s),vh(s)}),i&&r)throw new Error(n+' contains ".value" child '+De(s)+" in addition to actual children.")}},ed=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Dt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Zs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_h);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ne(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ca=function(n,e,t,s){if(s&&e===void 0)return;const i=Je(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Y(e,(o,a)=>{const c=new D(o);if(xn(i,a,L(t,c)),As(c)===".priority"&&!la(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),ed(i,r)},td=function(n,e,t){if(!(t&&e===void 0)){if(vn(e))throw new Error(Je(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!la(e))throw new Error(Je(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ha=function(n,e,t,s){if(!(s&&t===void 0)&&!aa(t))throw new Error(Je(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ha(n,e,t,s)},Ge=function(n,e){if(I(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},sd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zu(t))throw new Error(Je(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class id{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ds(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ua(n,e,t){Sn(n,t),da(n,s=>Ds(s,e))}function se(n,e,t){Sn(n,t),da(n,s=>ne(s,e)||ne(e,s))}function da(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(rd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Me&&z("event: "+t.toString()),rt(s)}}}/**
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
 */const od="repo_interrupt",ad=25;class ld{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new id,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ln(),this.transactionQueueTree_=new Js,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cd(n,e,t){if(n.stats_=Rs(n.repoInfo_),n.forceRestClient_||Bc())n.server_=new an(n.repoInfo_,(s,i,r,o)=>{Ar(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Dr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new _e(n.repoInfo_,e,(s,i,r,o)=>{Ar(n,s,i,r,o)},s=>{Dr(n,s)},s=>{ud(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=zc(n.repoInfo_,()=>new Gh(n.stats_,n.server_)),n.infoData_=new $h,n.infoSyncTree_=new Rr({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Ut(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ei(n,"connected",!1),n.serverSyncTree_=new Rr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);se(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function hd(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Tn(n){return Gu({timestamp:hd(n)})}function Ar(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=en(t,l=>W(l));o=Wu(n.serverSyncTree_,r,c,i)}else{const c=W(t);o=Xo(n.serverSyncTree_,r,c,i)}else if(s){const c=en(t,l=>W(l));o=ju(n.serverSyncTree_,r,c)}else{const c=W(t);o=Ut(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=nt(n,r)),se(n.eventQueue_,a,o)}function Dr(n,e){ei(n,"connected",e),e===!1&&md(n)}function ud(n,e){Y(e,(t,s)=>{ei(n,t,s)})}function ei(n,e,t){const s=new D("/.info/"+e),i=W(t);n.infoData_.updateSnapshot(s,i);const r=Ut(n.infoSyncTree_,s,i);se(n.eventQueue_,s,r)}function ti(n){return n.nextWriteId_++}function dd(n,e,t){const s=$u(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());Es(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ut(n.serverSyncTree_,e._path,r);else{const a=Lt(n.serverSyncTree_,e);o=Xo(n.serverSyncTree_,e._path,r,a)}return se(n.eventQueue_,e._path,o),_n(n.serverSyncTree_,e,t,null,!0),r},i=>(Vt(n,"get for query "+U(e)+" failed: "+i),Promise.reject(new Error(i))))}function fd(n,e,t,s,i){Vt(n,"set",{path:e.toString(),value:t,priority:s});const r=Tn(n),o=W(t,s),a=Vs(n.serverSyncTree_,e),c=sa(o,a,r),l=ti(n),f=Jo(n.serverSyncTree_,e,c,l,!0);Sn(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(p,_)=>{const y=p==="ok";y||Q("set at "+e+" failed: "+p);const T=be(n.serverSyncTree_,l,!y);se(n.eventQueue_,e,T),ke(n,i,p,_)});const d=si(n,e);nt(n,d),se(n.eventQueue_,d,[])}function pd(n,e,t,s){Vt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Tn(n),o={};if(Y(t,(a,c)=>{i=!1,o[a]=na(L(e,a),W(c),n.serverSyncTree_,r)}),i)z("update() called with empty data.  Don't do anything."),ke(n,s,"ok",void 0);else{const a=ti(n),c=Mu(n.serverSyncTree_,e,o,a);Sn(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,f)=>{const d=l==="ok";d||Q("update at "+e+" failed: "+l);const p=be(n.serverSyncTree_,a,!d),_=p.length>0?nt(n,e):e;se(n.eventQueue_,_,p),ke(n,s,l,f)}),Y(t,l=>{const f=si(n,L(e,l));nt(n,f)}),se(n.eventQueue_,e,[])}}function md(n){Vt(n,"onDisconnectEvents");const e=Tn(n),t=ln();ms(n.onDisconnect_,R(),(i,r)=>{const o=na(i,r,n.serverSyncTree_,e);ot(t,i,o)});let s=[];ms(t,R(),(i,r)=>{s=s.concat(Ut(n.serverSyncTree_,i,r));const o=si(n,i);nt(n,o)}),n.onDisconnect_=ln(),se(n.eventQueue_,R(),s)}function _d(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ps(n.onDisconnect_,e),ke(n,t,s,i)})}function Pr(n,e,t,s){const i=W(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ot(n.onDisconnect_,e,i),ke(n,s,r,o)})}function gd(n,e,t,s,i){const r=W(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ot(n.onDisconnect_,e,r),ke(n,i,o,a)})}function yd(n,e,t,s){if(is(t)){z("onDisconnect().update() called with empty data.  Don't do anything."),ke(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Y(t,(o,a)=>{const c=W(a);ot(n.onDisconnect_,L(e,o),c)}),ke(n,s,i,r)})}function vd(n,e,t){let s;I(e._path)===".info"?s=Es(n.infoSyncTree_,e,t):s=Es(n.serverSyncTree_,e,t),ua(n.eventQueue_,e._path,s)}function Or(n,e,t){let s;I(e._path)===".info"?s=_n(n.infoSyncTree_,e,t):s=_n(n.serverSyncTree_,e,t),ua(n.eventQueue_,e._path,s)}function Cd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(od)}function Vt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function ke(n,e,t,s){e&&rt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fa(n,e,t){return Vs(n.serverSyncTree_,e,t)||w.EMPTY_NODE}function ni(n,e=n.transactionQueueTree_){if(e||Rn(n,e),lt(e)){const t=ma(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Ed(n,Ht(e),t)}else ra(e)&&In(e,t=>{ni(n,t)})}function Ed(n,e,t){const s=t.map(l=>l.currentWriteId),i=fa(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const f=t[l];m(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=K(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Vt(n,"transaction put response",{path:c.toString(),status:l});let f=[];if(l==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,f=f.concat(be(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Rn(n,Xs(n.transactionQueueTree_,e)),ni(n,n.transactionQueueTree_),se(n.eventQueue_,e,f);for(let p=0;p<d.length;p++)rt(d[p])}else{if(l==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Q("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=l}nt(n,e)}},o)}function nt(n,e){const t=pa(n,e),s=Ht(t),i=ma(n,t);return bd(n,i,s),s}function bd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=K(t,c.path);let f=!1,d;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,d=c.abortReason,i=i.concat(be(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ad)f=!0,d="maxretry",i=i.concat(be(n.serverSyncTree_,c.currentWriteId,!0));else{const p=fa(n,c.path,o);c.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){xn("transaction failed: Data returned ",_,c.path);let y=W(_);typeof _=="object"&&_!=null&&ue(_,".priority")||(y=y.updatePriority(p.getPriority()));const $=c.currentWriteId,fe=Tn(n),pe=sa(y,p,fe);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=pe,c.currentWriteId=ti(n),o.splice(o.indexOf($),1),i=i.concat(Jo(n.serverSyncTree_,c.path,pe,c.currentWriteId,c.applyLocally)),i=i.concat(be(n.serverSyncTree_,$,!0))}else f=!0,d="nodata",i=i.concat(be(n.serverSyncTree_,c.currentWriteId,!0))}se(n.eventQueue_,t,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Rn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)rt(s[a]);ni(n,n.transactionQueueTree_)}function pa(n,e){let t,s=n.transactionQueueTree_;for(t=I(e);t!==null&&lt(s)===void 0;)s=Xs(s,t),e=O(e),t=I(e);return s}function ma(n,e){const t=[];return _a(n,e,t),t.sort((s,i)=>s.order-i.order),t}function _a(n,e,t){const s=lt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);In(e,i=>{_a(n,i,t)})}function Rn(n,e){const t=lt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ia(e,t.length>0?t:void 0)}In(e,s=>{Rn(n,s)})}function si(n,e){const t=Ht(pa(n,e)),s=Xs(n.transactionQueueTree_,e);return Ku(s,i=>{ts(n,i)}),ts(n,s),oa(s,i=>{ts(n,i)}),t}function ts(n,e){const t=lt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(be(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ia(e,void 0):t.length=r+1,se(n.eventQueue_,Ht(e),i);for(let o=0;o<s.length;o++)rt(s[o])}}/**
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
 */function wd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Q(`Invalid query segment '${t}' in query '${n}'`)}return e}const Mr=function(n,e){const t=Id(n),s=t.namespace;t.domain==="firebase.com"&&ye(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ye("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Dc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Co(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},Id=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let f=n.indexOf("/");f===-1&&(f=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(f,d)),f<d&&(i=wd(n.substring(f,d)));const p=Nd(n.substring(Math.min(n.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),t=e.substring(y+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ga{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())}}class ya{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class va{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xd{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new he;return _d(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ge("OnDisconnect.remove",this._path);const e=new he;return Pr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ge("OnDisconnect.set",this._path),ws("OnDisconnect.set",e,this._path,!1);const t=new he;return Pr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ge("OnDisconnect.setWithPriority",this._path),ws("OnDisconnect.setWithPriority",e,this._path,!1),td("OnDisconnect.setWithPriority",t,!1);const s=new he;return gd(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ge("OnDisconnect.update",this._path),ca("OnDisconnect.update",e,this._path,!1);const t=new he;return yd(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class ii{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:As(this._path)}get ref(){return new de(this._repo,this._path)}get _queryIdentifier(){const e=vr(this._queryParams),t=Ss(e);return t==="{}"?"default":t}get _queryObject(){return vr(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof ii))return!1;const t=this._repo===e._repo,s=Ds(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mh(this._path)}}class de extends ii{constructor(e,t){super(e,t,new js,!1)}get parent(){const e=Ro(this._path);return e===null?null:new de(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class st{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=gn(this.ref,e);return new st(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new st(i,gn(this.ref,s),F)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function A(n,e){return n=We(n),n._checkNotDeleted("ref"),e!==void 0?gn(n._root,e):n._root}function gn(n,e){return n=We(n),I(n._path)===null?nd("child","path",e,!1):ha("child","path",e,!1),new de(n._repo,L(n._path,e))}function jr(n){return n=We(n),new xd(n._repo,n._path)}function ns(n){return Ge("remove",n._path),Pe(n,null)}function Pe(n,e){n=We(n),Ge("set",n._path),ws("set",e,n._path,!1);const t=new he;return fd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ce(n,e){ca("update",e,n._path,!1);const t=new he;return pd(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function vt(n){n=We(n);const e=new va(()=>{}),t=new kn(e);return dd(n._repo,n,t).then(s=>new st(s,new de(n._repo,n._path),n._queryParams.getIndex()))}class kn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ga("value",this,new st(e.snapshotNode,new de(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ya(this,e,t):null}matches(e){return e instanceof kn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ri{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ya(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=gn(new de(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ga(e.type,this,new st(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ri?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Sd(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(f,d)=>{Or(n._repo,n,a),c(f,d)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new va(t,r||void 0),a=e==="value"?new kn(o):new ri(e,o);return vd(n._repo,n,a),()=>Or(n._repo,n,a)}function Ct(n,e,t,s){return Sd(n,"value",e,t,s)}Su(de);Du(de);/**
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
 */const Td="FIREBASE_DATABASE_EMULATOR_HOST",Ns={};let Rd=!1;function kd(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Jr(r);n.repoInfo_=new Co(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Ad(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ye("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Mr(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Td]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Mr(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const f=i&&c?new qe(qe.OWNER):new Hc(n.name,n.options,e);sd("Invalid Firebase Database URL",o),x(o.path)||ye("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Pd(a,n,f,new Uc(n,t));return new Od(d,n)}function Dd(n,e){const t=Ns[e];(!t||t[n.key]!==n)&&ye(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cd(n),delete t[n.key]}function Pd(n,e,t,s){let i=Ns[e.name];i||(i={},Ns[e.name]=i);let r=i[n.toURLString()];return r&&ye("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ld(n,Rd,t,s),i[n.toURLString()]=r,r}class Od{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new de(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ye("Cannot call "+e+" on a deleted database.")}}function Md(n=no(),e){const t=cc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Xa("database");s&&jd(t,...s)}return t}function jd(n,e,t,s={}){n=We(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&tn(s,r.repoInfo_.emulatorOptions))return;ye("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ye('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new qe(qe.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Za(s.mockUserToken,n.app.options.projectId);o=new qe(a)}Jr(e)&&dl(e),kd(r,i,s,o)}/**
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
 */function Ld(n){Sc(fc),nn(new Tt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ad(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ze(nr,sr,n),ze(nr,sr,"esm2020")}_e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};_e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ld();const Lr="imposter_pairs",Fr="imposter_pid",Wr="imposter_gemini_key",$r=[{id:"dp1",realWord:"Apple",imposterWord:"Pear"},{id:"dp2",realWord:"Beach",imposterWord:"Pool"},{id:"dp3",realWord:"Coffee",imposterWord:"Tea"},{id:"dp4",realWord:"Hospital",imposterWord:"Clinic"},{id:"dp5",realWord:"Piano",imposterWord:"Guitar"},{id:"dp6",realWord:"Mountain",imposterWord:"Hill"},{id:"dp7",realWord:"Sushi",imposterWord:"Onigiri"},{id:"dp8",realWord:"Doctor",imposterWord:"Nurse"}];function Et(){return Math.random().toString(36).slice(2,11)}function Fd(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function Wd(){let n=sessionStorage.getItem(Fr);return n||(n=Et(),sessionStorage.setItem(Fr,n)),n}let xt=null;function $d(){const n={apiKey:"AIzaSyAl-oljveg6umBEqV7HdkaG6pFM7EgSNPI",authDomain:"guess-the-imposter-5d7ec.firebaseapp.com",databaseURL:"https://guess-the-imposter-5d7ec-default-rtdb.firebaseio.com/",projectId:"guess-the-imposter-5d7ec",storageBucket:"guess-the-imposter-5d7ec.firebasestorage.app",messagingSenderId:"1091095792584",appId:"1:1091095792584:web:9d13beaf49afb9e8e18efd"};if(!n.databaseURL)throw new Error("VITE_FIREBASE_DATABASE_URL is not set in .env");const e=pc().length?no():to(n);return xt=Md(e),xt}function Ud(){var zi;const n=Wa(),[e]=$a(),t=v.useRef(Wd()),[s,i]=v.useState(xt),[r,o]=v.useState("home"),[a,c]=v.useState(""),[l,f]=v.useState(null),[d,p]=v.useState({}),[_,y]=v.useState(!1),T=v.useRef([]),[$,fe]=v.useState(()=>(e.get("room")||"").toUpperCase()),[pe,ct]=v.useState(""),[Gt,ht]=v.useState(""),[oi,ai]=v.useState(!1),[zt,Ca]=v.useState(""),[li,Yt]=v.useState(""),[ci,hi]=v.useState(!1),[Z,An]=v.useState(()=>{try{const u=localStorage.getItem(Lr);return u?JSON.parse(u):$r}catch{return $r}}),[Dn,ui]=v.useState(""),[Pn,di]=v.useState(""),[qt,Ea]=v.useState(()=>localStorage.getItem(Wr)||""),[fi,pi]=v.useState(!1),[mi,On]=v.useState(""),[Mn,ba]=v.useState(5),[ve,wa]=v.useState({}),[_i,jn]=v.useState(""),[gi,yi]=v.useState(30),[vi,Ci]=v.useState(10),[Ei,bi]=v.useState(1),[wi,Ni]=v.useState(3),[,Na]=v.useState(0),[Ii,xi]=v.useState(null),Si=v.useRef({}),[Ln,Fn]=v.useState(null),[Ia,Wn]=v.useState(!1),[$n,Ti]=v.useState(!1),[xa,Ri]=v.useState([]),[ut,ki]=v.useState([]),[dt,Ai]=v.useState(!1),[Bn,Di]=v.useState(""),[Pi,Oi]=v.useState(0),Mi=v.useRef(null),ji=v.useRef(0),Sa=["😂","😱","🤔","👀","🔥","😤","🫡","💀"],Ta=4e3,E=Object.values(d).sort((u,C)=>u.joinedAt-C.joinedAt),q=l?t.current===l.hostId:!1,H=d[t.current],Li=E.length>0&&E.every(u=>u.hasSeenWord),Fi=E.length>0&&E.every(u=>u.vote!=="");v.useEffect(()=>{localStorage.setItem(Lr,JSON.stringify(Z))},[Z]),v.useEffect(()=>{if(xt){i(xt);return}try{const u=$d();i(u)}catch(u){console.error("Firebase init failed:",u)}},[]),v.useEffect(()=>()=>{T.current.forEach(u=>u())},[]),v.useEffect(()=>{if(!s||!_||!a)return;T.current.forEach(g=>g()),T.current=[];const u=Ct(A(s,`rooms/${a}/state`),g=>{g.exists()?f(g.val()):(y(!1),f(null),p({}),c(""))}),C=Ct(A(s,`rooms/${a}/players`),g=>{p(g.exists()?g.val():{})}),N=Ct(A(s,`rooms/${a}/clues`),g=>{wa(g.exists()?g.val():{})}),b=Ct(A(s,`rooms/${a}/reactions`),g=>{if(!g.exists()){Ri([]);return}const P=Object.values(g.val());Ri(P.sort((B,ee)=>B.sentAt-ee.sentAt))}),k=Ct(A(s,`rooms/${a}/chat`),g=>{if(!g.exists()){ki([]);return}const P=Object.values(g.val());ki(P.sort((B,ee)=>B.sentAt-ee.sentAt))});return T.current=[u,C,N,b,k],()=>{u(),C(),N(),b(),k()}},[s,_,a]),v.useEffect(()=>{!s||!l||l.status!=="revealing"||!q||!Li||ce(A(s,`rooms/${a}/state`),{status:"discussing",turnIdx:0,turnEndsAt:Date.now()+l.turnSeconds*1e3})},[Li,l==null?void 0:l.status,q,s,a]),v.useEffect(()=>{!s||!l||l.status!=="voting"||!q||!Fi||ce(A(s,`rooms/${a}/state`),{status:"results"})},[Fi,l==null?void 0:l.status,q,s,a]),v.useEffect(()=>{if(!l||l.status!=="discussing")return;const u=setInterval(()=>Na(C=>C+1),500);return()=>clearInterval(u)},[l==null?void 0:l.status]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!q)return;const{turnIdx:u,turnEndsAt:C,turnSeconds:N,rotationCount:b}=l,k=E.length*b;if(u>=k)return;const g=Math.max(0,C-Date.now())+150,P=setTimeout(async()=>{if((await vt(A(s,`rooms/${a}/state/turnIdx`))).val()!==u)return;(await vt(A(s,`rooms/${a}/clues/${u}`))).exists()||await Pe(A(s,`rooms/${a}/clues/${u}`),"⏱ (time ran out)");const Ce=u+1,Ee={[`rooms/${a}/state/turnIdx`]:Ce};Ce<k&&(Ee[`rooms/${a}/state/turnEndsAt`]=Date.now()+N*1e3),await ce(A(s,"/"),Ee)},g);return()=>clearTimeout(P)},[l==null?void 0:l.turnIdx,l==null?void 0:l.turnEndsAt,l==null?void 0:l.status,q,s,a,E.length]),v.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!q)return;const{gameStartsAt:u,gameDurationMinutes:C,rotationCount:N}=l;if(!u||C<=0)return;const b=E.length*N;if(l.turnIdx>=b)return;const k=u+C*60*1e3,g=Math.max(0,k-Date.now())+200,P=setTimeout(async()=>{((await vt(A(s,`rooms/${a}/state/turnIdx`))).val()??0)>=b||await ce(A(s,`rooms/${a}/state`),{turnIdx:b})},g);return()=>clearTimeout(P)},[l==null?void 0:l.gameStartsAt,l==null?void 0:l.status,q,s,a,E.length,l==null?void 0:l.rotationCount]),v.useEffect(()=>{const u=Object.keys(Si.current),C=Object.keys(ve).find(b=>!u.includes(b));if(Si.current={...ve},!C)return;xi(C);const N=setTimeout(()=>xi(null),2e3);return()=>clearTimeout(N)},[ve]),v.useEffect(()=>{(l==null?void 0:l.status)!=="revealing"&&(Wn(!1),Ti(!1))},[l==null?void 0:l.status]),v.useEffect(()=>{jn("")},[l==null?void 0:l.turnIdx]),v.useEffect(()=>{var u;dt&&((u=Mi.current)==null||u.scrollIntoView({behavior:"smooth"}))},[ut,dt]),v.useEffect(()=>{dt?(Oi(0),ji.current=Date.now()):Oi(ut.filter(u=>u.sentAt>ji.current&&u.pid!==t.current).length)},[ut,dt]);const Wi=async()=>{if(!s||!zt.trim()){Yt("Enter your name.");return}if(Z.length===0){Yt("No word pairs! Add some words first.");return}hi(!0),Yt("");try{const u=Fd(),C=Date.now(),N={status:"lobby",hostId:t.current,realWord:"",imposterWord:"",imposterPlayerId:"",createdAt:C,turnIdx:0,turnEndsAt:0,turnSeconds:30,gameDurationMinutes:10,rotationCount:1,roundCount:3,currentRound:1,gameStartsAt:0},b={id:t.current,name:zt.trim(),joinedAt:C,hasSeenWord:!1,vote:"",isHost:!0};await Pe(A(s,`rooms/${u}`),{state:N,players:{[t.current]:b}}),jr(A(s,`rooms/${u}`)).remove(),c(u),y(!0)}catch(u){Yt(u instanceof Error?u.message:"Failed to create room.")}finally{hi(!1)}},$i=async()=>{if(!s)return;const u=$.trim().toUpperCase();if(!u||!pe.trim()){ht("Fill in both fields.");return}ai(!0),ht("");try{const C=await vt(A(s,`rooms/${u}/state`));if(!C.exists()){ht("Room not found. Check the code.");return}if(C.val().status!=="lobby"){ht("Game already started.");return}const b={id:t.current,name:pe.trim(),joinedAt:Date.now(),hasSeenWord:!1,vote:"",isHost:!1};await Pe(A(s,`rooms/${u}/players/${t.current}`),b),jr(A(s,`rooms/${u}/players/${t.current}`)).remove(),c(u),y(!0)}catch(C){ht(C instanceof Error?C.message:"Failed to join.")}finally{ai(!1)}},Ra=async()=>{if(!s||!q||E.length<3)return;const u=Z[Math.floor(Math.random()*Z.length)],C=E[Math.floor(Math.random()*E.length)].id;await ce(A(s,"/"),{[`rooms/${a}/state/status`]:"revealing",[`rooms/${a}/state/realWord`]:u.realWord,[`rooms/${a}/state/imposterWord`]:u.imposterWord,[`rooms/${a}/state/imposterPlayerId`]:C,[`rooms/${a}/state/turnSeconds`]:gi,[`rooms/${a}/state/gameDurationMinutes`]:vi,[`rooms/${a}/state/rotationCount`]:Ei,[`rooms/${a}/state/roundCount`]:wi,[`rooms/${a}/state/currentRound`]:1,[`rooms/${a}/state/gameStartsAt`]:Date.now(),[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/chat`]:null})},ka=()=>{s&&ce(A(s,`rooms/${a}/players/${t.current}`),{hasSeenWord:!0})},Aa=()=>{!s||!q||ce(A(s,`rooms/${a}/state`),{status:"voting"})},Da=u=>{!s||H!=null&&H.vote||ce(A(s,`rooms/${a}/players/${t.current}`),{vote:u})},Bi=async()=>{if(!s||!q||!l)return;const u=(l.currentRound||1)+1,C=u>(l.roundCount||3),N={[`rooms/${a}/state/status`]:"lobby",[`rooms/${a}/state/realWord`]:"",[`rooms/${a}/state/imposterWord`]:"",[`rooms/${a}/state/imposterPlayerId`]:"",[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/state/currentRound`]:C?1:u,[`rooms/${a}/clues`]:null,[`rooms/${a}/chat`]:null};E.forEach(b=>{N[`rooms/${a}/players/${b.id}/hasSeenWord`]=!1,N[`rooms/${a}/players/${b.id}/vote`]=""}),await ce(A(s,"/"),N)},Ui=async()=>{if(!s||!l)return;const u=E.length*l.rotationCount,C=E[l.turnIdx%E.length];if(!C||C.id!==t.current)return;const N=l.turnIdx;if(await Pe(A(s,`rooms/${a}/clues/${N}`),_i.trim()||"(skipped)"),jn(""),(await vt(A(s,`rooms/${a}/state/turnIdx`))).val()!==N)return;const k=N+1,g={[`rooms/${a}/state/turnIdx`]:k};k<u&&(g[`rooms/${a}/state/turnEndsAt`]=Date.now()+l.turnSeconds*1e3),await ce(A(s,"/"),g)},Pa=async u=>{if(!s||!a||!H)return;const C=Et(),N={id:C,pid:t.current,name:H.name,emoji:u,sentAt:Date.now()};await Pe(A(s,`rooms/${a}/reactions/${C}`),N),setTimeout(()=>ns(A(s,`rooms/${a}/reactions/${C}`)),Ta+500)},Un=h.jsx("div",{className:"gi-reaction-bar",children:Sa.map(u=>h.jsx("button",{className:"gi-reaction-btn",onClick:()=>Pa(u),children:u},u))}),Hn=h.jsx("div",{className:"gi-reaction-overlay","aria-hidden":!0,children:xa.map(u=>h.jsxs("div",{className:"gi-reaction-float",style:{left:`${u.sentAt%1e3/10+5}%`},children:[h.jsx("span",{className:"gi-reaction-emoji",children:u.emoji}),h.jsx("span",{className:"gi-reaction-label",children:u.name})]},u.id))}),Hi=async()=>{if(!s||!a||!H||!Bn.trim())return;const u=Et(),C={id:u,pid:t.current,name:H.name,text:Bn.trim(),sentAt:Date.now()};await Pe(A(s,`rooms/${a}/chat/${u}`),C),Di("")},ft=h.jsxs("button",{className:"gi-chat-fab",onClick:()=>Ai(u=>!u),"aria-label":"Toggle chat",children:["💬",Pi>0&&h.jsx("span",{className:"gi-chat-fab-badge",children:Pi})]}),pt=dt?h.jsxs("div",{className:"gi-chat-panel",children:[h.jsxs("div",{className:"gi-chat-header",children:[h.jsx("span",{className:"gi-chat-title",children:"💬 Room Chat"}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>Ai(!1),children:"✕"})]}),h.jsxs("div",{className:"gi-chat-messages",children:[ut.length===0&&h.jsx("p",{className:"gi-chat-empty",children:"No messages yet. Say hi! 👋"}),ut.map(u=>h.jsxs("div",{className:`gi-chat-msg${u.pid===t.current?" gi-chat-msg--me":""}`,children:[u.pid!==t.current&&h.jsx("span",{className:"gi-chat-msg-name",children:u.name}),h.jsx("div",{className:"gi-chat-msg-bubble",children:u.text})]},u.id)),h.jsx("div",{ref:Mi})]}),h.jsxs("div",{className:"gi-chat-input-row",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Message…",value:Bn,onChange:u=>Di(u.target.value),onKeyDown:u=>u.key==="Enter"&&Hi(),maxLength:200}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Hi,children:"↑"})]})]}):null,Vi=async()=>{!s||!a||(T.current.forEach(u=>u()),T.current=[],q?await ns(A(s,`rooms/${a}`)):await ns(A(s,`rooms/${a}/players/${t.current}`)),y(!1),f(null),p({}),c(""))},Vn=()=>{!Dn.trim()||!Pn.trim()||(An(u=>[...u,{id:Et(),realWord:Dn.trim(),imposterWord:Pn.trim()}]),ui(""),di(""))},Oa=async()=>{var u,C,N,b;if(!qt.trim()){On("Enter a Groq API key.");return}pi(!0),On("");try{const k=`Generate ${Mn} word pairs for a "Guess the Imposter" party game.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common English words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}
- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`,g=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${qt}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:k}],temperature:.8})});if(!g.ok){const ae=await g.json();throw new Error(((u=ae==null?void 0:ae.error)==null?void 0:u.message)||`HTTP ${g.status}`)}const ee=(((b=(N=(C=(await g.json()).choices)==null?void 0:C[0])==null?void 0:N.message)==null?void 0:b.content)??"").match(/\[[\s\S]*\]/);if(!ee)throw new Error("Unexpected AI response format.");const Ce=JSON.parse(ee[0]),Ee=ae=>ae.charAt(0).toUpperCase()+ae.slice(1);An(ae=>[...ae,...Ce.map(Kt=>({id:Et(),realWord:Ee(Kt.realWord),imposterWord:Ee(Kt.imposterWord)}))]),localStorage.setItem(Wr,qt)}catch(k){On(k instanceof Error?k.message:"Failed to generate.")}finally{pi(!1)}},Ma=()=>{const u={};E.forEach(g=>{g.vote&&(u[g.vote]=(u[g.vote]||0)+1)});const C=Math.max(...Object.values(u),0),N=Object.entries(u).filter(([,g])=>g===C).map(([g])=>g),b=l?d[l.imposterPlayerId]:void 0,k=b?N.includes(b.id):!1;return{tally:u,imposter:b,caught:k}},Gi=`${window.location.origin}${window.location.pathname}?room=${a}`,ja=()=>navigator.clipboard.writeText(Gi),La=()=>navigator.clipboard.writeText(a);if(!_&&r==="home")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-menu",children:[h.jsx("img",{src:Ba,className:"imposter-logo",alt:"eGov Logo"}),h.jsx("h1",{className:"imposter-title",children:"Guess the Imposter"}),h.jsx("p",{className:"imposter-subtitle",children:"One player has a different word — can the group find them?"}),h.jsxs("div",{className:"imposter-menu-buttons",children:[h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:()=>o("creating"),children:"🏠 Create Room"}),h.jsx("button",{className:"gi-btn gi-btn--secondary",onClick:()=>{fe((e.get("room")||"").toUpperCase()),o("joining")},children:"🚪 Join Room"}),h.jsxs("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("word-manager"),children:["📝 Manage Words ",h.jsx("span",{className:"gi-badge",children:Z.length})]})]}),h.jsx("div",{className:"gi-footer-links",children:h.jsx("button",{className:"gi-back-link",onClick:()=>n("/eGov-Game/main-page"),children:"← Back to Games"})})]})});if(!_&&r==="creating")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Create Room"})]}),h.jsx("label",{className:"gi-label",children:"Your Name (as host)"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:zt,onChange:u=>Ca(u.target.value),onKeyDown:u=>u.key==="Enter"&&Wi(),autoFocus:!0}),Z.length===0?h.jsxs("div",{className:"gi-warning",children:["No word pairs! ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Add words first →"})]}):h.jsxs("p",{className:"gi-hint",style:{marginTop:"0.25rem"},children:[Z.length," word pair",Z.length!==1?"s":""," ready."," ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Manage"})]}),li&&h.jsx("p",{className:"gi-error",children:li}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Wi,disabled:ci||!zt.trim()||Z.length===0,children:ci?"Creating…":"Create Room →"})]})]})});if(!_&&r==="joining")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Join Room"})]}),h.jsx("label",{className:"gi-label",children:"Room Code"}),h.jsx("input",{className:"gi-input gi-input--code",style:{width:"100%",boxSizing:"border-box"},placeholder:"XXXXXX",maxLength:6,value:$,onChange:u=>fe(u.target.value.toUpperCase())}),h.jsx("label",{className:"gi-label",style:{marginTop:"0.75rem"},children:"Your Name"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:pe,onChange:u=>ct(u.target.value),onKeyDown:u=>u.key==="Enter"&&$i()}),Gt&&h.jsx("p",{className:"gi-error",children:Gt}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:$i,disabled:oi||!$.trim()||!pe.trim(),children:oi?"Joining…":"Join →"})]})]})});if(r==="word-manager")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-word-manager",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Word Pairs"}),h.jsx("span",{className:"gi-badge gi-badge--large",children:Z.length})]}),h.jsxs("div",{className:"wm-add-form",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word (most players)",value:Dn,onChange:u=>ui(u.target.value),onKeyDown:u=>u.key==="Enter"&&Vn()}),h.jsx("span",{className:"wm-vs",children:"⇄"}),h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Pn,onChange:u=>di(u.target.value),onKeyDown:u=>u.key==="Enter"&&Vn()}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Vn,children:"Add"})]}),h.jsxs("div",{className:"wm-ai-section",children:[h.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Gemini)"}),h.jsxs("div",{className:"wm-ai-controls",children:[h.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:qt,onChange:u=>Ea(u.target.value)}),h.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:Mn,onChange:u=>ba(Math.max(1,Math.min(20,Number(u.target.value))))}),h.jsx("button",{className:"gi-btn gi-btn--ai",onClick:Oa,disabled:fi,children:fi?"Generating…":`Generate ${Mn}`})]}),mi&&h.jsx("p",{className:"gi-error",children:mi}),h.jsxs("p",{className:"gi-hint",children:["Get a free key at ",h.jsx("span",{className:"gi-hint-strong",children:"aistudio.google.com"})]})]}),h.jsxs("div",{className:"wm-list",children:[Z.length===0&&h.jsx("p",{className:"wm-empty",children:"No pairs yet."}),Z.map(u=>h.jsxs("div",{className:"wm-pair-row",children:[h.jsx("span",{className:"wm-real",children:u.realWord}),h.jsx("span",{className:"wm-arrow",children:"⇄"}),h.jsx("span",{className:"wm-imposter",children:u.imposterWord}),h.jsx("button",{className:"wm-delete-btn",onClick:()=>An(C=>C.filter(N=>N.id!==u.id)),children:"✕"})]},u.id))]})]})});if(!_||!l)return null;if(l.status==="lobby")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-lobby-card",children:[h.jsxs("div",{className:"gi-lobby-header",children:[h.jsxs("div",{children:[h.jsx("div",{className:"gi-room-label",children:"Room Code"}),h.jsx("div",{className:"gi-room-code",onClick:La,title:"Click to copy",children:a})]}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:Vi,children:q?"Close Room":"Leave"})]}),h.jsxs("div",{className:"gi-share-row",children:[h.jsx("span",{className:"gi-share-url",children:Gi}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:ja,children:"Copy Link"})]}),h.jsxs("div",{className:"gi-lobby-players-label",children:["Players ",h.jsx("span",{className:"gi-badge",children:E.length}),E.length<3&&h.jsx("span",{className:"gi-hint",style:{marginLeft:"0.5rem"},children:"Need at least 3"})]}),h.jsxs("div",{className:"gi-player-list",children:[E.map(u=>h.jsxs("div",{className:`gi-player-chip${u.id===t.current?" gi-player-chip--me":""}`,children:[u.isHost&&h.jsx("span",{className:"gi-host-badge",children:"HOST"}),u.name,u.id===t.current&&h.jsx("span",{style:{opacity:.5,fontSize:"0.75rem"},children:" (you)"})]},u.id)),E.length===0&&h.jsx("p",{className:"wm-empty",children:"Waiting for players…"})]}),q?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-config-grid",children:[h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"⏱ Secs per turn"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>yi(u=>Math.max(10,u-5)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[gi,"s"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>yi(u=>Math.min(120,u+5)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🕐 Game duration"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>Ci(u=>Math.max(1,u-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[vi,"m"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>Ci(u=>Math.min(60,u+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🔄 Rotations"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>bi(u=>Math.max(1,u-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[Ei,"×"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>bi(u=>Math.min(5,u+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🏆 Rounds"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>Ni(u=>Math.max(1,u-1)),children:"−"}),h.jsx("span",{className:"gi-turn-config-value",children:wi}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>Ni(u=>Math.min(10,u+1)),children:"+"})]})]})]}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",marginTop:"0.5rem"},disabled:E.length<3,onClick:Ra,children:E.length<3?`Need ${3-E.length} more player${3-E.length!==1?"s":""}`:"Start Game →"})]}):h.jsx("div",{className:"gi-waiting-banner",children:"⏳ Waiting for host to start the game…"}),ft,pt]})});if(l.status==="revealing"){const u=t.current===l.imposterPlayerId,C=u?l.imposterWord:l.realWord,N=(H==null?void 0:H.hasSeenWord)||!1,b=E.filter(B=>B.hasSeenWord).length,k=l.gameStartsAt?Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3)):l.gameDurationMinutes*60,g=Math.floor(k/60),P=k%60;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-reveal",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),h.jsxs("div",{className:"gi-game-timer",children:["🕐 ",g,":",String(P).padStart(2,"0")]})]}),h.jsx("h2",{className:"gi-phase-title",children:"Your Secret Word"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Private — don't show other screens!"}),h.jsx("div",{className:"reveal-card-wrap",children:h.jsxs("div",{className:`reveal-card${$n?"":" reveal-card--tap-me"}${Ia?" reveal-card--flipped":""}${N?" reveal-card--visible":""}`,onClick:()=>{$n?Wn(B=>!B):(Ti(!0),Wn(!0))},children:[h.jsxs("div",{className:"reveal-card__face reveal-card__face--front",children:[h.jsx("div",{className:"reveal-player-num",children:H?H.name[0].toUpperCase():"?"}),h.jsx("div",{className:"reveal-player-name",children:H==null?void 0:H.name}),h.jsx("div",{className:"reveal-tap-badge",children:"👆 Tap to reveal"}),h.jsx("p",{className:"reveal-tap-hint",children:"Your secret word is hidden — tap to see it!"})]}),h.jsxs("div",{className:"reveal-card__face reveal-card__face--back",children:[h.jsx("div",{className:"reveal-word-label",children:"Your word is:"}),h.jsx("div",{className:"reveal-word",children:C}),h.jsx("p",{className:`reveal-role-hint${u?" reveal-role-hint--imposter":""}`,children:u?"🕵️ You are the IMPOSTER — blend in!":"✅ Give clues without saying the word!"}),h.jsxs("p",{className:"reveal-tap-hint",style:{marginTop:"0.5rem"},children:["👆 Tap to ",N?"hide":"close"]})]})]})}),$n&&!N&&h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",maxWidth:"340px"},onClick:ka,children:"✅ I've seen my word — Ready!"}),N&&h.jsx("p",{className:"gi-hint",style:{textAlign:"center"},children:"✔️ Confirmed! Waiting for others…"}),h.jsx("div",{className:"gi-seen-players",children:E.map(B=>h.jsxs("div",{className:`gi-seen-chip${B.hasSeenWord?" gi-seen-chip--ready":""}`,children:[h.jsx("span",{className:"gi-seen-chip-avatar",children:B.name[0].toUpperCase()}),h.jsx("span",{className:"gi-seen-chip-name",children:B.name}),B.hasSeenWord?h.jsx("span",{className:"gi-seen-chip-check",children:"✓"}):h.jsx("span",{className:"gi-seen-chip-wait",children:"⋯"})]},B.id))}),h.jsxs("div",{className:"gi-seen-progress",children:[h.jsxs("span",{className:"gi-hint",children:[b," / ",E.length," players ready"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${b/E.length*100}%`}})})]}),ft,pt]})})}if(l.status==="discussing"){const{turnIdx:u,turnEndsAt:C,turnSeconds:N,rotationCount:b}=l,k=E.length*b,g=u>=k,P=g?null:E[u%E.length],B=(P==null?void 0:P.id)===t.current,ee=g?0:Math.max(0,Math.floor((C-Date.now())/1e3)),Ce=36,Ee=2*Math.PI*Ce,ae=N>0?ee/N:0,Kt=Ee*(1-ae),Fa=ee<=5&&ee>0;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-discuss",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),l.gameStartsAt>0&&(()=>{const J=Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3));return h.jsxs("div",{className:`gi-game-timer${J<=60?" gi-game-timer--low":""}`,children:["🕐 ",Math.floor(J/60),":",String(J%60).padStart(2,"0")]})})()]}),g?h.jsxs("div",{className:"gi-all-done-banner",children:[h.jsx("div",{className:"gi-all-done-icon",children:"✅"}),h.jsx("div",{className:"gi-all-done-text",children:"All clues in!"}),q?h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",onClick:Aa,children:"Start Voting →"}):h.jsx("p",{className:"gi-hint",children:"Waiting for host to start voting…"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-turn-header",children:[h.jsx("div",{className:"gi-turn-player-name",children:B?"🎤 Your turn!":`🎤 ${P==null?void 0:P.name}'s turn`}),h.jsxs("svg",{className:"gi-countdown-svg",width:"88",height:"88",viewBox:"0 0 88 88",children:[h.jsx("circle",{cx:"44",cy:"44",r:Ce,fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),h.jsx("circle",{cx:"44",cy:"44",r:Ce,fill:"none",stroke:Fa?"#ef4444":"#6366f1",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:Ee,strokeDashoffset:Kt,transform:"rotate(-90 44 44)",style:{transition:"stroke-dashoffset 0.3s linear, stroke 0.3s"}}),h.jsx("text",{x:"44",y:"50",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:ee})]})]}),B?h.jsxs("div",{className:"gi-my-turn-input",children:[h.jsx("p",{className:"gi-hint",style:{marginBottom:"0.5rem"},children:"Give a clue related to your word — don't say it directly!"}),h.jsxs("div",{className:"gi-clue-input-row",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Type your clue…",value:_i,onChange:J=>jn(J.target.value),onKeyDown:J=>J.key==="Enter"&&Ui(),autoFocus:!0,maxLength:80}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Ui,children:"Submit →"})]})]}):h.jsxs("div",{className:"gi-waiting-banner",style:{marginTop:0},children:["⏳ Waiting for ",P==null?void 0:P.name," to give a clue…"]})]}),Object.keys(ve).length>0&&h.jsxs("div",{className:"gi-clue-list",children:[h.jsx("div",{className:"gi-clue-list-title",children:"Clues Given"}),E.map(J=>{const le=Array.from({length:u},(te,Ue)=>Ue).filter(te=>{var Ue;return((Ue=E[te%E.length])==null?void 0:Ue.id)===J.id&&ve[String(te)]!==void 0});if(le.length===0)return null;const Qt=le.some(te=>Ii===String(te));return h.jsxs("div",{className:`gi-clue-row${Qt?" gi-clue-row--new":""}`,children:[h.jsx("span",{className:"gi-clue-player",children:J.name}),h.jsx("div",{className:"gi-clue-chips",children:le.map(te=>h.jsxs("span",{className:`gi-clue-chip${Ii===String(te)?" gi-clue-chip--new":""}`,children:['"',ve[String(te)],'"']},te))})]},J.id)})]}),h.jsxs("div",{className:"gi-turn-footer",children:[b>1&&h.jsxs("div",{className:"gi-rotation-indicator",children:[Array.from({length:b},(J,le)=>h.jsx("span",{className:`gi-rot-dot${g||Math.floor(u/E.length)>le?" gi-rot-dot--done":Math.floor(u/E.length)===le?" gi-rot-dot--current":""}`},le)),h.jsx("span",{className:"gi-rotation-label",children:g?"All rotations done":`Rotation ${Math.floor(u/E.length)+1} / ${b}`})]}),h.jsx("div",{className:"reveal-progress",children:E.map((J,le)=>{const Qt=u%E.length,te=!g&&le===Qt,Ue=!te&&(g||le<Qt);return h.jsx("div",{className:`reveal-dot${Ue?" reveal-dot--done":te?" reveal-dot--current":""}`},J.id)})})]}),Un,Hn,ft,pt]})})}if(l.status==="voting"){const u=(H==null?void 0:H.vote)||"",C=E.filter(N=>N.vote!=="").length;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-vote",children:[h.jsx("h2",{className:"gi-phase-title",children:"🗳 Vote"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Who do you think is the imposter?"}),u?h.jsxs("div",{className:"gi-voted-confirmation",children:[h.jsx("div",{className:"gi-voted-icon",children:"✅"}),h.jsxs("div",{className:"gi-voted-text",children:["You voted for ",h.jsx("strong",{children:((zi=d[u])==null?void 0:zi.name)??"?"})]})]}):h.jsx("div",{className:"vote-options",children:E.filter(N=>N.id!==t.current).map(N=>h.jsx("button",{className:"vote-option-btn",onClick:()=>Da(N.id),children:N.name},N.id))}),h.jsxs("div",{className:"gi-seen-progress",style:{marginTop:"1rem"},children:[h.jsxs("span",{className:"gi-hint",children:[C," / ",E.length," votes submitted"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${C/E.length*100}%`}})})]}),Un,Hn,ft,pt]})})}if(l.status==="results"){const{tally:u,imposter:C,caught:N}=Ma();return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-result",children:[h.jsx("div",{className:`result-banner${N?" result-banner--success":" result-banner--fail"}`,children:N?"🎉 Imposter Caught!":"😈 Imposter Wins!"}),h.jsx("div",{className:"result-imposter-section",children:h.jsxs("div",{className:"result-imposter-card",children:[h.jsx("div",{className:"result-label",children:"The Imposter was"}),h.jsx("div",{className:"result-imposter-name",children:(C==null?void 0:C.name)??"?"})]})}),h.jsxs("div",{className:"result-words-row",children:[h.jsxs("div",{className:"result-word-card result-word-card--real",children:[h.jsx("div",{className:"result-word-label",children:"Real Word"}),h.jsx("div",{className:"result-word-value",children:l.realWord})]}),h.jsx("span",{className:"wm-arrow",style:{fontSize:"1.5rem"},children:"⇄"}),h.jsxs("div",{className:"result-word-card result-word-card--imposter",children:[h.jsx("div",{className:"result-word-label",children:"Imposter Word"}),h.jsx("div",{className:"result-word-value",children:l.imposterWord})]})]}),h.jsxs("div",{className:"result-votes",children:[h.jsx("h3",{className:"result-votes-title",children:"Vote Results"}),E.map(b=>{const k=u[b.id]||0,g=E.filter(P=>P.vote===b.id);return h.jsx("div",{className:"vote-tally-row",children:h.jsxs("div",{className:"tally-row-top",children:[h.jsxs("span",{className:`tally-name${b.id===l.imposterPlayerId?" tally-name--imposter":""}`,children:[b.name," ",b.id===l.imposterPlayerId?"🕵️":""]}),h.jsx("div",{className:"tally-bar-bg",children:h.jsx("div",{className:"tally-bar",style:{width:`${k/Math.max(E.length-1,1)*100}%`}})}),h.jsx("span",{className:"tally-count",children:k}),g.length>0&&h.jsxs("button",{className:"tally-voters-btn",onClick:()=>Fn(b.id),children:[k," voted"]})]})},b.id)})]}),Ln&&(()=>{const b=d[Ln],k=E.filter(g=>g.vote===Ln);return h.jsx("div",{className:"gi-modal-backdrop",onClick:()=>Fn(null),children:h.jsxs("div",{className:"gi-modal",onClick:g=>g.stopPropagation(),children:[h.jsxs("div",{className:"gi-modal-title",children:["Voted for ",b==null?void 0:b.name]}),h.jsx("div",{className:"gi-modal-voter-list",children:k.map(g=>h.jsxs("div",{className:"gi-modal-voter-row",children:[h.jsx("span",{className:"gi-modal-voter-avatar",children:g.name[0].toUpperCase()}),h.jsx("span",{className:"gi-modal-voter-name",children:g.name})]},g.id))}),h.jsx("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.75rem"},onClick:()=>Fn(null),children:"Close"})]})})})(),Object.keys(ve).length>0&&h.jsxs("div",{className:"result-clue-summary",children:[h.jsx("h3",{className:"result-votes-title",children:"💬 Clues Given"}),E.map(b=>{const k=Object.entries(ve).filter(([g])=>{var P;return((P=E[Number(g)%E.length])==null?void 0:P.id)===b.id}).map(([,g])=>g);return k.length===0?null:h.jsxs("div",{className:"result-clue-player",children:[h.jsxs("span",{className:"result-clue-player-name",children:[b.name,":"]}),h.jsx("div",{className:"result-clue-chips",children:k.map((g,P)=>h.jsxs("span",{className:"result-clue-chip",children:['"',g,'"']},P))})]},b.id)})]}),q?h.jsxs("div",{className:"result-actions",children:[l.currentRound<l.roundCount?h.jsxs("button",{className:"gi-btn gi-btn--primary",onClick:Bi,children:["Next Round (",l.currentRound+1," / ",l.roundCount,") →"]}):h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Bi,children:"Play Again"}),h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:Vi,children:"Close Room"})]}):h.jsx("div",{className:"gi-waiting-banner",style:{marginTop:"0.5rem"},children:"⏳ Waiting for host to start next round…"}),Un,Hn,ft,pt]})})}return null}export{Ud as default};
