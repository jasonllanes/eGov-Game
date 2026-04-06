import{u as la,b as ca,r as E,j as h,e as ha}from"./index-a8134a3c.js";const ua=()=>{};/**
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
 */const fr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(n,e){if(!n)throw Ze(e)},Ze=function(n){return new Error("Firebase Database ("+fr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const pr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},da=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(t[d],t[u],t[f],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):da(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new fa;const f=r<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),u!==64){const g=l<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _r=function(n){const e=pr(n);return ls.encodeByteArray(e,!0)},$t=function(n){return _r(n).replace(/\./g,"")},Wn=function(n){try{return ls.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pa(n){return mr(void 0,n)}function mr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!_a(t)||(n[t]=mr(n[t],e[t]));return n}function _a(n){return n!=="__proto__"}/**
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
 */function ma(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ga=()=>ma().__FIREBASE_DEFAULTS__,ya=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},va=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wn(n[1]);return e&&JSON.parse(e)},gr=()=>{try{return ua()||ga()||ya()||va()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ca=n=>{var e,t;return(t=(e=gr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ea=n=>{const e=Ca(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},yr=()=>{var n;return(n=gr())==null?void 0:n.config};/**
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
 */class re{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ba(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[$t(JSON.stringify(t)),$t(JSON.stringify(o)),a].join(".")}/**
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
 */function wa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wa())}function Ia(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cr(){return fr.NODE_ADMIN===!0}function Na(){try{return typeof indexedDB=="object"}catch{return!1}}function Sa(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const xa="FirebaseError";class Tt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=xa,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ta(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,s)}}function Ta(n,e){return n.replace(Ra,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ra=/\{\$([^}]+)}/g;/**
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
 */function gt(n){return JSON.parse(n)}function B(n){return JSON.stringify(n)}/**
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
 */const br=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=gt(Wn(r[0])||""),t=gt(Wn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ka=function(n){const e=br(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Aa=function(n){const e=br(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ge(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bn(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ht(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Vt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(yi(r)&&yi(o)){if(!Vt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function yi(n){return n!==null&&typeof n=="object"}/**
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
 */function Da(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Pa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ze(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Oa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},an=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Oe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function wr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ma(n){return(await fetch(n,{credentials:"include"})).ok}class yt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class La{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new re;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ja(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fa(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fa(n){return n===xe?void 0:n}function ja(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new La(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Ba={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Ua=P.INFO,$a={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Ha=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=$a[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ir{constructor(e){this.name=e,this._logLevel=Ua,this._logHandler=Ha,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ba[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Va=(n,e)=>e.some(t=>n instanceof t);let vi,Ci;function Ga(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function za(){return Ci||(Ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nr=new WeakMap,Un=new WeakMap,Sr=new WeakMap,xn=new WeakMap,cs=new WeakMap;function Ya(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ye(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Nr.set(t,n)}).catch(()=>{}),cs.set(e,n),e}function qa(n){if(Un.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Un.set(n,e)}let $n={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Un.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ka(n){$n=n($n)}function Qa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Tn(this),e,...t);return Sr.set(s,e.sort?e.sort():[e]),ye(s)}:za().includes(n)?function(...e){return n.apply(Tn(this),e),ye(Nr.get(this))}:function(...e){return ye(n.apply(Tn(this),e))}}function Ja(n){return typeof n=="function"?Qa(n):(n instanceof IDBTransaction&&qa(n),Va(n,Ga())?new Proxy(n,$n):n)}function ye(n){if(n instanceof IDBRequest)return Ya(n);if(xn.has(n))return xn.get(n);const e=Ja(n);return e!==n&&(xn.set(n,e),cs.set(e,n)),e}const Tn=n=>cs.get(n);function Xa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ye(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ye(o.result),c.oldVersion,c.newVersion,ye(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Za=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],Rn=new Map;function Ei(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rn.get(e))return Rn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=el.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Za.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Rn.set(e,r),r}Ka(n=>({...n,get:(e,t,s)=>Ei(e,t)||n.get(e,t,s),has:(e,t)=>!!Ei(e,t)||n.has(e,t)}));/**
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
 */class tl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function nl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hn="@firebase/app",bi="0.14.10";/**
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
 */const pe=new Ir("@firebase/app"),sl="@firebase/app-compat",il="@firebase/analytics-compat",rl="@firebase/analytics",ol="@firebase/app-check-compat",al="@firebase/app-check",ll="@firebase/auth",cl="@firebase/auth-compat",hl="@firebase/database",ul="@firebase/data-connect",dl="@firebase/database-compat",fl="@firebase/functions",pl="@firebase/functions-compat",_l="@firebase/installations",ml="@firebase/installations-compat",gl="@firebase/messaging",yl="@firebase/messaging-compat",vl="@firebase/performance",Cl="@firebase/performance-compat",El="@firebase/remote-config",bl="@firebase/remote-config-compat",wl="@firebase/storage",Il="@firebase/storage-compat",Nl="@firebase/firestore",Sl="@firebase/ai",xl="@firebase/firestore-compat",Tl="firebase",Rl="12.11.0";/**
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
 */const Vn="[DEFAULT]",kl={[Hn]:"fire-core",[sl]:"fire-core-compat",[rl]:"fire-analytics",[il]:"fire-analytics-compat",[al]:"fire-app-check",[ol]:"fire-app-check-compat",[ll]:"fire-auth",[cl]:"fire-auth-compat",[hl]:"fire-rtdb",[ul]:"fire-data-connect",[dl]:"fire-rtdb-compat",[fl]:"fire-fn",[pl]:"fire-fn-compat",[_l]:"fire-iid",[ml]:"fire-iid-compat",[gl]:"fire-fcm",[yl]:"fire-fcm-compat",[vl]:"fire-perf",[Cl]:"fire-perf-compat",[El]:"fire-rc",[bl]:"fire-rc-compat",[wl]:"fire-gcs",[Il]:"fire-gcs-compat",[Nl]:"fire-fst",[xl]:"fire-fst-compat",[Sl]:"fire-vertex","fire-js":"fire-js",[Tl]:"fire-js-all"};/**
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
 */const vt=new Map,Al=new Map,Gn=new Map;function wi(n,e){try{n.container.addComponent(e)}catch(t){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(Gn.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Gn.set(e,n);for(const t of vt.values())wi(t,n);for(const t of Al.values())wi(t,n);return!0}function Dl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ol={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new Er("app","Firebase",Ol);/**
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
 */class Ml{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Ll=Rl;function xr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Vn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ve.create("bad-app-name",{appName:String(i)});if(t||(t=yr()),!t)throw ve.create("no-options");const r=vt.get(i);if(r){if(Vt(t,r.options)&&Vt(s,r.config))return r;throw ve.create("duplicate-app",{appName:i})}const o=new Wa(i);for(const c of Gn.values())o.addComponent(c);const a=new Ml(t,s,o);return vt.set(i,a),a}function Tr(n=Vn){const e=vt.get(n);if(!e&&n===Vn&&yr())return xr();if(!e)throw ve.create("no-app",{appName:n});return e}function Fl(){return Array.from(vt.values())}function Ue(n,e,t){let s=kl[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(o.join(" "));return}Gt(new yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jl="firebase-heartbeat-database",Wl=1,Ct="firebase-heartbeat-store";let kn=null;function Rr(){return kn||(kn=Xa(jl,Wl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ct)}catch(t){console.warn(t)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),kn}async function Bl(n){try{const t=(await Rr()).transaction(Ct),s=await t.objectStore(Ct).get(kr(n));return await t.done,s}catch(e){if(e instanceof Tt)pe.warn(e.message);else{const t=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(t.message)}}}async function Ii(n,e){try{const s=(await Rr()).transaction(Ct,"readwrite");await s.objectStore(Ct).put(e,kr(n)),await s.done}catch(t){if(t instanceof Tt)pe.warn(t.message);else{const s=ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pe.warn(s.message)}}}function kr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ul=1024,$l=30;class Hl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ni();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>$l){const o=zl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ni(),{heartbeatsToSend:s,unsentEntries:i}=Vl(this._heartbeatsCache.heartbeats),r=$t(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return pe.warn(t),""}}}function Ni(){return new Date().toISOString().substring(0,10)}function Vl(n,e=Ul){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Si(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Si(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Gl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Na()?Sa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Bl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ii(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Si(n){return $t(JSON.stringify({version:2,heartbeats:n})).length}function zl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Yl(n){Gt(new yt("platform-logger",e=>new tl(e),"PRIVATE")),Gt(new yt("heartbeat",e=>new Hl(e),"PRIVATE")),Ue(Hn,bi,n),Ue(Hn,bi,"esm2020"),Ue("fire-js","")}Yl("");var ql="firebase",Kl="12.11.0";/**
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
 */Ue(ql,Kl,"app");const xi="@firebase/database",Ti="1.1.2";/**
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
 */let Ar="";function Ql(n){Ar=n}/**
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
 */class Jl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:gt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Xl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Dr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jl(e)}}catch{}return new Xl},Re=Dr("localStorage"),zn=Dr("sessionStorage");/**
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
 */const $e=new Ir("@firebase/database"),Zl=function(){let n=1;return function(){return n++}}(),Pr=function(n){const e=Oa(n),t=new Pa;t.update(e);const s=t.digest();return ls.encodeByteArray(s)},Rt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rt.apply(null,s):typeof s=="object"?e+=B(s):e+=s,e+=" "}return e};let ke=null,Ri=!0;const ec=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?($e.logLevel=P.VERBOSE,ke=$e.log.bind($e),e&&zn.set("logging_enabled",!0)):typeof n=="function"?ke=n:(ke=null,zn.remove("logging_enabled"))},V=function(...n){if(Ri===!0&&(Ri=!1,ke===null&&zn.get("logging_enabled")===!0&&ec(!0)),ke){const e=Rt.apply(null,n);ke(e)}},kt=function(n){return function(...e){V(n,...e)}},Yn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rt(...n);$e.error(e)},_e=function(...n){const e=`FIREBASE FATAL ERROR: ${Rt(...n)}`;throw $e.error(e),new Error(e)},Y=function(...n){const e="FIREBASE WARNING: "+Rt(...n);$e.warn(e)},tc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ln=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},nc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ye="[MIN_NAME]",Ae="[MAX_NAME]",Me=function(n,e){if(n===e)return 0;if(n===Ye||e===Ae)return-1;if(e===Ye||n===Ae)return 1;{const t=ki(n),s=ki(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},sc=function(n,e){return n===e?0:n<e?-1:1},at=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},hs=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=B(e[s]),t+=":",t+=hs(n[e[s]]);return t+="}",t},Or=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Mr=function(n){_(!ln(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let f=parseInt(d.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},ic=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const ac=new RegExp("^-?(0*)\\d{1,10}$"),lc=-2147483648,cc=2147483647,ki=function(n){if(ac.test(n)){const e=Number(n);if(e>=lc&&e<=cc)return e}return null},et=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Y("Exception was thrown by user callback.",t),e},Math.floor(0))}},hc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class uc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Pl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Y(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Y(e)}}class He{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}He.OWNER="owner";/**
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
 */const us="5",Lr="v",Fr="s",jr="r",Wr="f",Br=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ur="ls",$r="p",qn="ac",Hr="websocket",Vr="long_polling";/**
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
 */class Gr{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Re.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Re.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function zr(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Hr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Vr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fc(n)&&(t.ns=n.namespace);const i=[];return G(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class pc{constructor(){this.counters_={}}incrementCounter(e,t=1){oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return pa(this.counters_)}}/**
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
 */const An={},Dn={};function ds(n){const e=n.toString();return An[e]||(An[e]=new pc),An[e]}function _c(n,e){const t=n.toString();return Dn[t]||(Dn[t]=e()),Dn[t]}/**
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
 */class mc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&et(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ai="start",gc="close",yc="pLPCommand",vc="pRTLPCB",Yr="id",qr="pw",Kr="ser",Cc="cb",Ec="seg",bc="ts",wc="d",Ic="dframe",Qr=1870,Jr=30,Nc=Qr-Jr,Sc=25e3,xc=3e4;class We{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kt(e),this.stats_=ds(t),this.urlFn=c=>(this.appCheckToken&&(c[qn]=this.appCheckToken),zr(t,Vr,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xc)),nc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fs((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ai)this.id=a,this.password=c;else if(o===gc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ai]="t",s[Kr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Lr]=us,this.transportSessionId&&(s[Fr]=this.transportSessionId),this.lastSessionId&&(s[Ur]=this.lastSessionId),this.applicationId&&(s[$r]=this.applicationId),this.appCheckToken&&(s[qn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Br.test(location.hostname)&&(s[jr]=Wr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){We.forceAllow_=!0}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){return We.forceAllow_?!0:!We.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ic()&&!rc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=_r(t),i=Or(s,Nc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ic]="t",s[Yr]=e,s[qr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zl(),window[yc+this.uniqueCallbackIdentifier]=e,window[vc+this.uniqueCallbackIdentifier]=t,this.myIFrame=fs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){V("frame writing exception"),a.stack&&V(a.stack),V(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||V("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yr]=this.myID,e[qr]=this.myPW,e[Kr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jr+s.length<=Qr;){const o=this.pendingSegs.shift();s=s+"&"+Ec+i+"="+o.seg+"&"+bc+i+"="+o.ts+"&"+wc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Sc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{V("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Tc=16384,Rc=45e3;let zt=null;typeof MozWebSocket<"u"?zt=MozWebSocket:typeof WebSocket<"u"&&(zt=WebSocket);class te{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kt(this.connId),this.stats_=ds(t),this.connURL=te.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Lr]=us,typeof location<"u"&&location.hostname&&Br.test(location.hostname)&&(o[jr]=Wr),t&&(o[Fr]=t),s&&(o[Ur]=s),i&&(o[qn]=i),r&&(o[$r]=r),zr(e,Hr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Re.set("previous_websocket_failure",!0);try{let s;Cr(),this.mySock=new zt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zt!==null&&!te.forceDisallow_}static previouslyFailed(){return Re.isInMemoryStorage||Re.get("previous_websocket_failure")===!0}markConnectionHealthy(){Re.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=gt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Or(t,Tc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2;te.healthyTimeout=3e4;/**
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
 */class Et{static get ALL_TRANSPORTS(){return[We,te]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=te&&te.isAvailable();let s=t&&!te.previouslyFailed();if(e.webSocketOnly&&(t||Y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[te];else{const i=this.transports_=[];for(const r of Et.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Et.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Et.globalTransportInitialized_=!1;/**
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
 */const kc=6e4,Ac=5e3,Dc=10*1024,Pc=100*1024,Pn="t",Di="d",Oc="s",Pi="r",Mc="e",Oi="o",Mi="a",Li="n",Fi="p",Lc="h";class Fc{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kt("c:"+this.id+":"),this.transportManager_=new Et(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=dt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pn in e){const t=e[Pn];t===Mi?this.upgradeIfSecondaryHealthy_():t===Pi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Oi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=at("t",e),s=at("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Li,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=at("t",e),s=at("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=at(Pn,e);if(Di in e){const s=e[Di];if(t===Lc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Li){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Oc?this.onConnectionShutdown_(s):t===Pi?this.onReset_(s):t===Mc?Yn("Server Error: "+s):t===Oi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),us!==s&&Y("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),dt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ac))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Re.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Zr{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Yt extends Zr{static getInstance(){return new Yt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ji=32,Wi=768;class R{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new R("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function be(n){return n.pieces_.length-n.pieceNum_}function A(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new R(n.pieces_,e)}function ps(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function jc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function eo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new R(e,0)}function M(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof R)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new R(t,0)}function w(n){return n.pieceNum_>=n.pieces_.length}function z(n,e){const t=b(n),s=b(e);if(t===null)return e;if(t===s)return z(A(n),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Wc(n,e){const t=bt(n,0),s=bt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Me(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function _s(n,e){if(be(n)!==be(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function X(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(be(n)>be(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Bc{constructor(e,t){this.errorPrefix_=t,this.parts_=bt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=an(this.parts_[s]);to(this)}}function Uc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=an(e),to(n)}function $c(n){const e=n.parts_.pop();n.byteLength_-=an(e),n.parts_.length>0&&(n.byteLength_-=1)}function to(n){if(n.byteLength_>Wi)throw new Error(n.errorPrefix_+"has a key path longer than "+Wi+" bytes ("+n.byteLength_+").");if(n.parts_.length>ji)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ji+") or object contains a cycle "+Te(n))}function Te(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ms extends Zr{static getInstance(){return new ms}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const lt=1e3,Hc=60*5*1e3,Bi=30*1e3,Vc=1.3,Gc=3e4,zc="server_kill",Ui=3;class fe extends Xr{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=fe.nextPersistentConnectionId_++,this.log_=kt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lt,this.maxReconnectDelay_=Hc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Cr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ms.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(B(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new re,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;fe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&oe(e,"w")){const s=Ge(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Y(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Aa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ka(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Yn("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gc&&(this.reconnectDelay_=lt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Fc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Y(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(zc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Y(u),c())}}}interrupt(e){V("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){V("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bn(this.interruptReasons_)&&(this.reconnectDelay_=lt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>hs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new R(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){V("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ui&&(this.reconnectDelay_=Bi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){V("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ui&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ar.replace(/\./g,"-")]=1,vr()?e["framework.cordova"]=1:Ia()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yt.getInstance().currentlyOnline();return Bn(this.interruptReasons_)&&e}}fe.nextPersistentConnectionId_=0;fe.nextConnectionId_=0;/**
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
 */class I{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new I(e,t)}}/**
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
 */class cn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new I(Ye,e),i=new I(Ye,t);return this.compare(s,i)!==0}minPost(){return I.MIN}}/**
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
 */let Wt;class no extends cn{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(e){Wt=e}compare(e,t){return Me(e.name,t.name)}isDefinedOn(e){throw Ze("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(Ae,Wt)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Wt)}toString(){return".key"}}const Ve=new no;/**
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
 */class Bt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class H{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??H.RED,this.left=i??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,t,s,i,r){return new H(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Q.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}H.RED=!0;H.BLACK=!1;class Yc{copy(e,t,s,i,r){return this}insert(e,t,s){return new H(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,t=Q.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Q(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,H.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,H.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new Yc;/**
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
 */function qc(n,e){return Me(n.name,e.name)}function gs(n,e){return Me(n,e)}/**
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
 */let Kn;function Kc(n){Kn=n}const so=function(n){return typeof n=="number"?"number:"+Mr(n):"string:"+n},io=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&oe(e,".sv"),"Priority must be a string or number.")}else _(n===Kn||n.isEmpty(),"priority of unexpected type.");_(n===Kn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $i;class ${static set __childrenNodeConstructor(e){$i=e}static get __childrenNodeConstructor(){return $i}constructor(e,t=$.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),io(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:b(e)===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=b(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+so(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Mr(this.value_):e+=this.value_,this.lazyHash_=Pr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=$.VALUE_TYPE_ORDER.indexOf(t),r=$.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ro,oo;function Qc(n){ro=n}function Jc(n){oo=n}class Xc extends cn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Me(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(Ae,new $("[PRIORITY-POST]",oo))}makePost(e,t){const s=ro(e);return new I(t,new $("[PRIORITY-POST]",s))}toString(){return".priority"}}const L=new Xc;/**
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
 */const Zc=Math.log(2);class eh{constructor(e){const t=r=>parseInt(Math.log(r)/Zc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qt=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,f;if(d===0)return null;if(d===1)return u=n[c],f=t?t(u):u,new H(f,u.node,H.BLACK,null,null);{const m=parseInt(d/2,10)+c,g=i(c,m),x=i(m+1,l);return u=n[m],f=t?t(u):u,new H(f,u.node,H.BLACK,g,x)}},r=function(c){let l=null,d=null,u=n.length;const f=function(g,x){const j=u-g,le=u;u-=g;const ce=i(j+1,le),it=n[j],Mt=t?t(it):it;m(new H(Mt,it.node,x,null,ce))},m=function(g){l?(l.left=g,l=g):(d=g,l=g)};for(let g=0;g<c.count;++g){const x=c.nextBitIsOne(),j=Math.pow(2,c.count-(g+1));x?f(j,H.BLACK):(f(j,H.BLACK),f(j,H.RED))}return d},o=new eh(n.length),a=r(o);return new Q(s||e,a)};/**
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
 */let On;const je={};class de{static get Default(){return _(je&&L,"ChildrenNode.ts has not been loaded"),On=On||new de({".priority":je},{".priority":L}),On}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ge(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Q?t:null}hasIndex(e){return oe(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=qt(s,e.getCompare()):a=je;const c=e.toString(),l={...this.indexSet_};l[c]=e;const d={...this.indexes_};return d[c]=a,new de(d,l)}addToIndexes(e,t){const s=Ht(this.indexes_,(i,r)=>{const o=Ge(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===je)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(I.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),qt(a,o.getCompare())}else return je;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new I(e.name,a))),c.insert(e,e.node)}});return new de(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ht(this.indexes_,i=>{if(i===je)return i;{const r=t.get(e.name);return r?i.remove(new I(e.name,r)):i}});return new de(s,this.indexSet_)}}/**
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
 */let ct;class y{static get EMPTY_NODE(){return ct||(ct=new y(new Q(gs),null,de.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&io(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ct}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ct:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new I(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ct:this.priorityNode_;return new y(i,o,r)}}updateChild(e,t){const s=b(e);if(s===null)return t;{_(b(e)!==".priority"||be(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(A(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(L,(o,a)=>{t[o]=a.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+so(this.getPriority().val())+":"),this.forEachChild(L,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Pr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===At?-1:0}withIndex(e){if(e===Ve||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ve||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(L),i=t.getIterator(L);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ve?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class th extends y{constructor(){super(new Q(gs),y.EMPTY_NODE,de.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const At=new th;Object.defineProperties(I,{MIN:{value:new I(Ye,y.EMPTY_NODE)},MAX:{value:new I(Ae,At)}});no.__EMPTY_NODE=y.EMPTY_NODE;$.__childrenNodeConstructor=y;Kc(At);Jc(At);/**
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
 */const nh=!0;function F(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $(t,F(e))}if(!(n instanceof Array)&&nh){const t=[];let s=!1;if(G(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=F(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new I(o,c)))}}),t.length===0)return y.EMPTY_NODE;const r=qt(t,qc,o=>o.name,gs);if(s){const o=qt(t,L.getCompare());return new y(r,F(e),new de({".priority":o},{".priority":L}))}else return new y(r,F(e),de.Default)}else{let t=y.EMPTY_NODE;return G(n,(s,i)=>{if(oe(n,s)&&s.substring(0,1)!=="."){const r=F(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(F(e))}}Qc(F);/**
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
 */class sh extends cn{constructor(e){super(),this.indexPath_=e,_(!w(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Me(e.name,t.name):r}makePost(e,t){const s=F(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new I(t,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,At);return new I(Ae,e)}toString(){return bt(this.indexPath_,0).join("/")}}/**
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
 */class ih extends cn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Me(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const s=F(e);return new I(t,s)}toString(){return".value"}}const rh=new ih;/**
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
 */function ao(n){return{type:"value",snapshotNode:n}}function qe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function It(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function oh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ys{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(wt(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qe(t,s)):o.trackChildChange(It(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(L,(i,r)=>{t.hasChild(i)||s.trackChildChange(wt(i,r))}),t.isLeafNode()||t.forEachChild(L,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(It(i,r,o))}else s.trackChildChange(qe(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Nt{constructor(e){this.indexedFilter_=new ys(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nt.getStartPost_(e),this.endPost_=Nt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new I(t,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(L,(o,a)=>{r.matches(new I(o,a))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ah{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Nt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new I(t,s))||(s=y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const c=new I(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,l,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,c);if(d&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(It(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(wt(t,u));const x=a.updateImmediateChild(t,y.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(qe(f.name,f.node)),x.updateImmediateChild(f.name,f.node)):x}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(wt(l.name,l.node)),r.trackChildChange(qe(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,y.EMPTY_NODE)):e}}/**
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
 */class vs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ye}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ae}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){const e=new vs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lh(n){return n.loadsAllData()?new ys(n.getIndex()):n.hasLimit()?new ah(n):new Nt(n)}function Hi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===L?t="$priority":n.index_===rh?t="$value":n.index_===Ve?t="$key":(_(n.index_ instanceof sh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=B(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+B(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=B(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==L&&(e.i=n.index_.toString()),e}/**
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
 */class Kt extends Xr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=kt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Kt.getListenId_(e,s),a={};this.listens_[o]=a;const c=Hi(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),Ge(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,t){const s=Kt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Hi(e._queryParams),s=e._path.toString(),i=new re;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Da(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=gt(a.responseText)}catch{Y("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Y("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ch{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Qt(){return{value:null,children:new Map}}function tt(n,e,t){if(w(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=b(e);n.children.has(s)||n.children.set(s,Qt());const i=n.children.get(s);e=A(e),tt(i,e,t)}}function Qn(n,e){if(w(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(L,(s,i)=>{tt(n,new R(s),i)}),Qn(n,e)}}else if(n.children.size>0){const t=b(e);return e=A(e),n.children.has(t)&&Qn(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Jn(n,e,t){n.value!==null?t(e,n.value):hh(n,(s,i)=>{const r=new R(e.toString()+"/"+s);Jn(i,r,t)})}function hh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class uh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&G(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Gi=10*1e3,dh=30*1e3,fh=5*60*1e3;class ph{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uh(e);const s=Gi+(dh-Gi)*Math.random();dt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;G(e,(i,r)=>{r>0&&oe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),dt(this.reportStats_.bind(this),Math.floor(Math.random()*2*fh))}}/**
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
 */var ne;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ne||(ne={}));function Cs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Es(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Jt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ne.ACK_USER_WRITE,this.source=Cs()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new R(e));return new Jt(T(),t,this.revert)}}else return _(b(this.path)===e,"operationForChild called for unrelated child."),new Jt(A(this.path),this.affectedTree,this.revert)}}/**
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
 */class St{constructor(e,t){this.source=e,this.path=t,this.type=ne.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new St(this.source,T()):new St(this.source,A(this.path))}}/**
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
 */class De{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ne.OVERWRITE}operationForChild(e){return w(this.path)?new De(this.source,T(),this.snap.getImmediateChild(e)):new De(this.source,A(this.path),this.snap)}}/**
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
 */class Ke{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ne.MERGE}operationForChild(e){if(w(this.path)){const t=this.children.subtree(new R(e));return t.isEmpty()?null:t.value?new De(this.source,T(),t.value):new Ke(this.source,T(),t)}else return _(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ke(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class we{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _h{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(oh(o.childName,o.snapshotNode))}),ht(n,i,"child_removed",e,s,t),ht(n,i,"child_added",e,s,t),ht(n,i,"child_moved",r,s,t),ht(n,i,"child_changed",e,s,t),ht(n,i,"value",e,s,t),i}function ht(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>yh(n,a,c)),o.forEach(a=>{const c=gh(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function gh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function yh(n,e,t){if(e.childName==null||t.childName==null)throw Ze("Should only compare child_ events.");const s=new I(e.childName,e.snapshotNode),i=new I(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function hn(n,e){return{eventCache:n,serverCache:e}}function ft(n,e,t,s){return hn(new we(e,t,s),n.serverCache)}function lo(n,e,t,s){return hn(n.eventCache,new we(e,t,s))}function Xt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Mn;const vh=()=>(Mn||(Mn=new Q(sc)),Mn);class D{static fromObject(e){let t=new D(null);return G(e,(s,i)=>{t=t.set(new R(s),i)}),t}constructor(e,t=vh()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(w(e))return null;{const s=b(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(A(e),t);return r!=null?{path:M(new R(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const t=b(e),s=this.children.get(t);return s!==null?s.subtree(A(e)):new D(null)}}set(e,t){if(w(e))return new D(t,this.children);{const s=b(e),r=(this.children.get(s)||new D(null)).set(A(e),t),o=this.children.insert(s,r);return new D(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new D(null):new D(null,this.children);{const t=b(e),s=this.children.get(t);if(s){const i=s.remove(A(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new D(null):new D(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const t=b(e),s=this.children.get(t);return s?s.get(A(e)):null}}setTree(e,t){if(w(e))return t;{const s=b(e),r=(this.children.get(s)||new D(null)).setTree(A(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new D(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(M(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(w(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(A(e),M(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,s){if(w(e))return this;{this.value&&s(t,this.value);const i=b(e),r=this.children.get(i);return r?r.foreachOnPath_(A(e),M(t,i),s):new D(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(M(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class se{constructor(e){this.writeTree_=e}static empty(){return new se(new D(null))}}function pt(n,e,t){if(w(e))return new se(new D(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=z(i,e);return r=r.updateChild(o,t),new se(n.writeTree_.set(i,r))}else{const i=new D(t),r=n.writeTree_.setTree(e,i);return new se(r)}}}function Xn(n,e,t){let s=n;return G(t,(i,r)=>{s=pt(s,M(e,i),r)}),s}function zi(n,e){if(w(e))return se.empty();{const t=n.writeTree_.setTree(e,new D(null));return new se(t)}}function Zn(n,e){return Le(n,e)!=null}function Le(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(z(t.path,e)):null}function Yi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(L,(s,i)=>{e.push(new I(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new I(s,i.value))}),e}function Ce(n,e){if(w(e))return n;{const t=Le(n,e);return t!=null?new se(new D(t)):new se(n.writeTree_.subtree(e))}}function es(n){return n.writeTree_.isEmpty()}function Qe(n,e){return co(T(),n.writeTree_,e)}function co(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=co(M(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(M(n,".priority"),s)),t}}/**
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
 */function un(n,e){return po(e,n)}function Ch(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=pt(n.visibleWrites,e,t)),n.lastWriteId=s}function Eh(n,e,t,s){_(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Xn(n.visibleWrites,e,t),n.lastWriteId=s}function bh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ih(a,s.path)?i=!1:X(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Nh(n),!0;if(s.snap)n.visibleWrites=zi(n.visibleWrites,s.path);else{const a=s.children;G(a,c=>{n.visibleWrites=zi(n.visibleWrites,M(s.path,c))})}return!0}else return!1}function Ih(n,e){if(n.snap)return X(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&X(M(n.path,t),e))return!0;return!1}function Nh(n){n.visibleWrites=ho(n.allWrites,Sh,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Sh(n){return n.visible}function ho(n,e,t){let s=se.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)X(t,o)?(a=z(t,o),s=pt(s,a,r.snap)):X(o,t)&&(a=z(o,t),s=pt(s,T(),r.snap.getChild(a)));else if(r.children){if(X(t,o))a=z(t,o),s=Xn(s,a,r.children);else if(X(o,t))if(a=z(o,t),w(a))s=Xn(s,T(),r.children);else{const c=Ge(r.children,b(a));if(c){const l=c.getChild(A(a));s=pt(s,T(),l)}}}else throw Ze("WriteRecord should have .snap or .children")}}return s}function uo(n,e,t,s,i){if(!s&&!i){const r=Le(n.visibleWrites,e);if(r!=null)return r;{const o=Ce(n.visibleWrites,e);if(es(o))return t;if(t==null&&!Zn(o,T()))return null;{const a=t||y.EMPTY_NODE;return Qe(o,a)}}}else{const r=Ce(n.visibleWrites,e);if(!i&&es(r))return t;if(!i&&t==null&&!Zn(r,T()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(X(l.path,e)||X(e,l.path))},a=ho(n.allWrites,o,e),c=t||y.EMPTY_NODE;return Qe(a,c)}}}function xh(n,e,t){let s=y.EMPTY_NODE;const i=Le(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(L,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ce(n.visibleWrites,e);return t.forEachChild(L,(o,a)=>{const c=Qe(Ce(r,new R(o)),a);s=s.updateImmediateChild(o,c)}),Yi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ce(n.visibleWrites,e);return Yi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Th(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,t);if(Zn(n.visibleWrites,r))return null;{const o=Ce(n.visibleWrites,r);return es(o)?i.getChild(t):Qe(o,i.getChild(t))}}function Rh(n,e,t,s){const i=M(e,t),r=Le(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ce(n.visibleWrites,i);return Qe(o,s.getNode().getImmediateChild(t))}else return null}function kh(n,e){return Le(n.visibleWrites,e)}function Ah(n,e,t,s,i,r,o){let a;const c=Ce(n.visibleWrites,e),l=Le(c,T());if(l!=null)a=l;else if(t!=null)a=Qe(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=f.getNext();for(;m&&d.length<i;)u(m,s)!==0&&d.push(m),m=f.getNext();return d}else return[]}function Dh(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function Zt(n,e,t,s){return uo(n.writeTree,n.treePath,e,t,s)}function ws(n,e){return xh(n.writeTree,n.treePath,e)}function qi(n,e,t,s){return Th(n.writeTree,n.treePath,e,t,s)}function en(n,e){return kh(n.writeTree,M(n.treePath,e))}function Ph(n,e,t,s,i,r){return Ah(n.writeTree,n.treePath,e,t,s,i,r)}function Is(n,e,t){return Rh(n.writeTree,n.treePath,e,t)}function fo(n,e){return po(M(n.treePath,e),n.writeTree)}function po(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Oh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,It(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,wt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,qe(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,It(s,e.snapshotNode,i.oldSnap));else throw Ze("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const _o=new Mh;class Ns{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new we(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Is(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pe(this.viewCache_),r=Ph(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Lh(n){return{filter:n}}function Fh(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function jh(n,e,t,s,i){const r=new Oh;let o,a;if(t.type===ne.OVERWRITE){const l=t;l.source.fromUser?o=ts(n,e,l.path,l.snap,s,i,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!w(l.path),o=tn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===ne.MERGE){const l=t;l.source.fromUser?o=Bh(n,e,l.path,l.children,s,i,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ns(n,e,l.path,l.children,s,i,a,r))}else if(t.type===ne.ACK_USER_WRITE){const l=t;l.revert?o=Hh(n,e,l.path,s,i,r):o=Uh(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===ne.LISTEN_COMPLETE)o=$h(n,e,t.path,s,r);else throw Ze("Unknown operation type: "+t.type);const c=r.getChanges();return Wh(e,o,c),{viewCache:o,changes:c}}function Wh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(ao(Xt(e)))}}function mo(n,e,t,s,i,r){const o=e.eventCache;if(en(s,t)!=null)return e;{let a,c;if(w(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Pe(e),d=l instanceof y?l:y.EMPTY_NODE,u=ws(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Zt(s,Pe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=b(t);if(l===".priority"){_(be(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=qi(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=A(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=qi(s,t,o.getNode(),c);f!=null?u=o.getNode().getImmediateChild(l).updateChild(d,f):u=o.getNode().getImmediateChild(l)}else u=Is(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return ft(e,a,o.isFullyInitialized()||w(t),n.filter.filtersNodes())}}function tn(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(w(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),m,null)}else{const m=b(t);if(!c.isCompleteForPath(t)&&be(t)>1)return e;const g=A(t),j=c.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?l=d.updatePriority(c.getNode(),j):l=d.updateChild(c.getNode(),m,j,g,_o,null)}const u=lo(e,l,c.isFullyInitialized()||w(t),d.filtersNodes()),f=new Ns(i,u,r);return mo(n,u,t,i,f,a)}function ts(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new Ns(i,e,r);if(w(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ft(e,l,!0,n.filter.filtersNodes());else{const u=b(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=ft(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=A(t),m=a.getNode().getImmediateChild(u);let g;if(w(f))g=s;else{const x=d.getCompleteChild(u);x!=null?ps(f)===".priority"&&x.getChild(eo(f)).isEmpty()?g=x:g=x.updateChild(f,s):g=y.EMPTY_NODE}if(m.equals(g))c=e;else{const x=n.filter.updateChild(a.getNode(),u,g,f,d,o);c=ft(e,x,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ki(n,e){return n.eventCache.isCompleteForChild(e)}function Bh(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=M(t,c);Ki(e,b(d))&&(a=ts(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=M(t,c);Ki(e,b(d))||(a=ts(n,a,d,l,i,r,o))}),a}function Qi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ns(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;w(t)?l=s:l=new D(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),g=Qi(n,m,f);c=tn(n,c,new R(u),g,i,r,o,a)}}),l.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!m){const g=e.serverCache.getNode().getImmediateChild(u),x=Qi(n,g,f);c=tn(n,c,new R(u),x,i,r,o,a)}}),c}function Uh(n,e,t,s,i,r,o){if(en(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(w(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return tn(n,e,t,c.getNode().getChild(t),i,r,a,o);if(w(t)){let l=new D(null);return c.getNode().forEachChild(Ve,(d,u)=>{l=l.set(new R(d),u)}),ns(n,e,t,l,i,r,a,o)}else return e}else{let l=new D(null);return s.foreach((d,u)=>{const f=M(t,d);c.isCompleteForPath(f)&&(l=l.set(d,c.getNode().getChild(f)))}),ns(n,e,t,l,i,r,a,o)}}function $h(n,e,t,s,i){const r=e.serverCache,o=lo(e,r.getNode(),r.isFullyInitialized()||w(t),r.isFiltered());return mo(n,o,t,s,_o,i)}function Hh(n,e,t,s,i,r){let o;if(en(s,t)!=null)return e;{const a=new Ns(s,e,i),c=e.eventCache.getNode();let l;if(w(t)||b(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zt(s,Pe(e));else{const u=e.serverCache.getNode();_(u instanceof y,"serverChildren would be complete if leaf node"),d=ws(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=b(t);let u=Is(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,A(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,y.EMPTY_NODE,A(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zt(s,Pe(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||en(s,T())!=null,ft(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Vh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ys(s.getIndex()),r=lh(s);this.processor_=Lh(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),d=new we(c,o.isFullyInitialized(),i.filtersNodes()),u=new we(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=hn(u,d),this.eventGenerator_=new _h(this.query_)}get query(){return this.query_}}function Gh(n){return n.viewCache_.serverCache.getNode()}function zh(n){return Xt(n.viewCache_)}function Yh(n,e){const t=Pe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!w(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function Ji(n){return n.eventRegistrations_.length===0}function qh(n,e){n.eventRegistrations_.push(e)}function Xi(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Zi(n,e,t,s){e.type===ne.MERGE&&e.source.queryId!==null&&(_(Pe(n.viewCache_),"We should always have a full cache before handling merges"),_(Xt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=jh(n.processor_,i,e,t,s);return Fh(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,go(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Kh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(L,(r,o)=>{s.push(qe(r,o))}),t.isFullyInitialized()&&s.push(ao(t.getNode())),go(n,s,t.getNode(),e)}function go(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return mh(n.eventGenerator_,e,t,i)}/**
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
 */let nn;class yo{constructor(){this.views=new Map}}function Qh(n){_(!nn,"__referenceConstructor has already been defined"),nn=n}function Jh(){return _(nn,"Reference.ts has not been loaded"),nn}function Xh(n){return n.views.size===0}function Ss(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),Zi(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Zi(o,e,t,s));return r}}function vo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zt(t,i?s:null),c=!1;a?c=!0:s instanceof y?(a=ws(t,s),c=!1):(a=y.EMPTY_NODE,c=!1);const l=hn(new we(a,c,!1),new we(s,i,!1));return new Vh(e,l)}return o}function Zh(n,e,t,s,i,r){const o=vo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),qh(o,t),Kh(o,t)}function eu(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ie(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Xi(l,t,s)),Ji(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Xi(c,t,s)),Ji(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ie(n)&&r.push(new(Jh())(e._repo,e._path)),{removed:r,events:o}}function Co(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ee(n,e){let t=null;for(const s of n.views.values())t=t||Yh(s,e);return t}function Eo(n,e){if(e._queryParams.loadsAllData())return dn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function bo(n,e){return Eo(n,e)!=null}function Ie(n){return dn(n)!=null}function dn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sn;function tu(n){_(!sn,"__referenceConstructor has already been defined"),sn=n}function nu(){return _(sn,"Reference.ts has not been loaded"),sn}let su=1;class er{constructor(e){this.listenProvider_=e,this.syncPointTree_=new D(null),this.pendingWriteTree_=Dh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wo(n,e,t,s,i){return Ch(n.pendingWriteTree_,e,t,s,i),i?nt(n,new De(Cs(),e,t)):[]}function iu(n,e,t,s){Eh(n.pendingWriteTree_,e,t,s);const i=D.fromObject(t);return nt(n,new Ke(Cs(),e,i))}function ge(n,e,t=!1){const s=bh(n.pendingWriteTree_,e);if(wh(n.pendingWriteTree_,e)){let r=new D(null);return s.snap!=null?r=r.set(T(),!0):G(s.children,o=>{r=r.set(new R(o),!0)}),nt(n,new Jt(s.path,r,t))}else return[]}function Dt(n,e,t){return nt(n,new De(Es(),e,t))}function ru(n,e,t){const s=D.fromObject(t);return nt(n,new Ke(Es(),e,s))}function ou(n,e){return nt(n,new St(Es(),e))}function au(n,e,t){const s=Ts(n,t);if(s){const i=Rs(s),r=i.path,o=i.queryId,a=z(r,e),c=new St(bs(o),a);return ks(n,r,c)}else return[]}function rn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bo(o,e))){const c=eu(o,e,t,s);Xh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,m)=>Ie(m));if(d&&!u){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const m=hu(f);for(let g=0;g<m.length;++g){const x=m[g],j=x.query,le=xo(n,x);n.listenProvider_.startListening(_t(j),xt(n,j),le.hashFn,le.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(_t(e),null):l.forEach(f=>{const m=n.queryToTagMap.get(fn(f));n.listenProvider_.stopListening(_t(f),m)}))}uu(n,l)}return a}function Io(n,e,t,s){const i=Ts(n,s);if(i!=null){const r=Rs(i),o=r.path,a=r.queryId,c=z(o,e),l=new De(bs(a),c,t);return ks(n,o,l)}else return[]}function lu(n,e,t,s){const i=Ts(n,s);if(i){const r=Rs(i),o=r.path,a=r.queryId,c=z(o,e),l=D.fromObject(t),d=new Ke(bs(a),c,l);return ks(n,o,d)}else return[]}function ss(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=z(f,i);r=r||Ee(m,g),o=o||Ie(m)});let a=n.syncPointTree_.get(i);a?(o=o||Ie(a),r=r||Ee(a,T())):(a=new yo,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const x=Ee(g,T());x&&(r=r.updateImmediateChild(m,x))}));const l=bo(a,e);if(!l&&!e._queryParams.loadsAllData()){const f=fn(e);_(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=du();n.queryToTagMap.set(f,m),n.tagToQueryMap.set(m,f)}const d=un(n.pendingWriteTree_,i);let u=Zh(a,e,t,d,r,c);if(!l&&!o&&!s){const f=Eo(a,e);u=u.concat(fu(n,e,f))}return u}function xs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=z(o,e),l=Ee(a,c);if(l)return l});return uo(i,e,r,t,!0)}function cu(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=z(l,t);s=s||Ee(d,u)});let i=n.syncPointTree_.get(t);i?s=s||Ee(i,T()):(i=new yo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new we(s,!0,!1):null,a=un(n.pendingWriteTree_,e._path),c=vo(i,e,a,r?o.getNode():y.EMPTY_NODE,r);return zh(c)}function nt(n,e){return No(e,n.syncPointTree_,null,un(n.pendingWriteTree_,T()))}function No(n,e,t,s){if(w(n.path))return So(n,e,t,s);{const i=e.get(T());t==null&&i!=null&&(t=Ee(i,T()));let r=[];const o=b(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=fo(s,o);r=r.concat(No(a,c,l,d))}return i&&(r=r.concat(Ss(i,n,s,t))),r}}function So(n,e,t,s){const i=e.get(T());t==null&&i!=null&&(t=Ee(i,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=fo(s,o),d=n.operationForChild(o);d&&(r=r.concat(So(d,a,c,l)))}),i&&(r=r.concat(Ss(i,n,s,t))),r}function xo(n,e){const t=e.query,s=xt(n,t);return{hashFn:()=>(Gh(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?au(n,t._path,s):ou(n,t._path);{const r=oc(i,t);return rn(n,t,null,r)}}}}function xt(n,e){const t=fn(e);return n.queryToTagMap.get(t)}function fn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ts(n,e){return n.tagToQueryMap.get(e)}function Rs(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new R(n.substr(0,e))}}function ks(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=un(n.pendingWriteTree_,e);return Ss(s,t,i,null)}function hu(n){return n.fold((e,t,s)=>{if(t&&Ie(t))return[dn(t)];{let i=[];return t&&(i=Co(t)),G(s,(r,o)=>{i=i.concat(o)}),i}})}function _t(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nu())(n._repo,n._path):n}function uu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=fn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function du(){return su++}function fu(n,e,t){const s=e._path,i=xt(n,e),r=xo(n,t),o=n.listenProvider_.startListening(_t(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!Ie(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!w(l)&&d&&Ie(d))return[dn(d).query];{let f=[];return d&&(f=f.concat(Co(d).map(m=>m.query))),G(u,(m,g)=>{f=f.concat(g)}),f}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(_t(d),xt(n,d))}}return o}/**
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
 */class As{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new As(t)}node(){return this.node_}}class Ds{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=M(this.path_,e);return new Ds(this.syncTree_,t)}node(){return xs(this.syncTree_,this.path_)}}const pu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},tr=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return _u(n[".sv"],e,t);if(typeof n[".sv"]=="object")return mu(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},_u=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},mu=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},To=function(n,e,t,s){return Ps(e,new Ds(t,n),s)},Ro=function(n,e,t){return Ps(n,new As(e),t)};function Ps(n,e,t){const s=n.getPriority().val(),i=tr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=tr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new $(a,F(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $(i))),o.forEachChild(L,(a,c)=>{const l=Ps(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Os{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ms(n,e){let t=e instanceof R?e:new R(e),s=n,i=b(t);for(;i!==null;){const r=Ge(s.node.children,i)||{children:{},childCount:0};s=new Os(i,s,r),t=A(t),i=b(t)}return s}function st(n){return n.node.value}function ko(n,e){n.node.value=e,is(n)}function Ao(n){return n.node.childCount>0}function gu(n){return st(n)===void 0&&!Ao(n)}function pn(n,e){G(n.node.children,(t,s)=>{e(new Os(t,n,s))})}function Do(n,e,t,s){t&&!s&&e(n),pn(n,i=>{Do(i,e,!0,s)}),t&&s&&e(n)}function yu(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Pt(n){return new R(n.parent===null?n.name:Pt(n.parent)+"/"+n.name)}function is(n){n.parent!==null&&vu(n.parent,n.name,n)}function vu(n,e,t){const s=gu(t),i=oe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,is(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,is(n))}/**
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
 */const Cu=/[\[\].#$\/\u0000-\u001F\u007F]/,Eu=/[\[\].#$\u0000-\u001F\u007F]/,Ln=10*1024*1024,Ls=function(n){return typeof n=="string"&&n.length!==0&&!Cu.test(n)},Po=function(n){return typeof n=="string"&&n.length!==0&&!Eu.test(n)},bu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Po(n)},Oo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ln(n)||n&&typeof n=="object"&&oe(n,".sv")},rs=function(n,e,t,s){s&&e===void 0||_n(ze(n,"value"),e,t)},_n=function(n,e,t){const s=t instanceof R?new Bc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Te(s));if(typeof e=="function")throw new Error(n+"contains a function "+Te(s)+" with contents = "+e.toString());if(ln(e))throw new Error(n+"contains "+e.toString()+" "+Te(s));if(typeof e=="string"&&e.length>Ln/3&&an(e)>Ln)throw new Error(n+"contains a string greater than "+Ln+" utf8 bytes "+Te(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(G(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ls(o)))throw new Error(n+" contains an invalid key ("+o+") "+Te(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uc(s,o),_n(n,a,s),$c(s)}),i&&r)throw new Error(n+' contains ".value" child '+Te(s)+" in addition to actual children.")}},wu=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=bt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ls(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wc);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&X(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Mo=function(n,e,t,s){if(s&&e===void 0)return;const i=ze(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];G(e,(o,a)=>{const c=new R(o);if(_n(i,a,M(t,c)),ps(c)===".priority"&&!Oo(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),wu(i,r)},Iu=function(n,e,t){if(!(t&&e===void 0)){if(ln(e))throw new Error(ze(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Oo(e))throw new Error(ze(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Lo=function(n,e,t,s){if(!(s&&t===void 0)&&!Po(t))throw new Error(ze(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nu=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lo(n,e,t,s)},Be=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Su=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ls(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!bu(t))throw new Error(ze(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!_s(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Fo(n,e,t){mn(n,t),jo(n,s=>_s(s,e))}function Z(n,e,t){mn(n,t),jo(n,s=>X(s,e)||X(e,s))}function jo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Tu(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Tu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ke&&V("event: "+t.toString()),et(s)}}}/**
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
 */const Ru="repo_interrupt",ku=25;class Au{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qt(),this.transactionQueueTree_=new Os,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Du(n,e,t){if(n.stats_=ds(n.repoInfo_),n.forceRestClient_||hc())n.server_=new Kt(n.repoInfo_,(s,i,r,o)=>{nr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>sr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new fe(n.repoInfo_,e,(s,i,r,o)=>{nr(n,s,i,r,o)},s=>{sr(n,s)},s=>{Ou(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=_c(n.repoInfo_,()=>new ph(n.stats_,n.server_)),n.infoData_=new ch,n.infoSyncTree_=new er({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Dt(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fs(n,"connected",!1),n.serverSyncTree_=new er({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Z(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Pu(n){const t=n.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function gn(n){return pu({timestamp:Pu(n)})}function nr(n,e,t,s,i){n.dataUpdateCount++;const r=new R(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Ht(t,l=>F(l));o=lu(n.serverSyncTree_,r,c,i)}else{const c=F(t);o=Io(n.serverSyncTree_,r,c,i)}else if(s){const c=Ht(t,l=>F(l));o=ru(n.serverSyncTree_,r,c)}else{const c=F(t);o=Dt(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Je(n,r)),Z(n.eventQueue_,a,o)}function sr(n,e){Fs(n,"connected",e),e===!1&&ju(n)}function Ou(n,e){G(e,(t,s)=>{Fs(n,t,s)})}function Fs(n,e,t){const s=new R("/.info/"+e),i=F(t);n.infoData_.updateSnapshot(s,i);const r=Dt(n.infoSyncTree_,s,i);Z(n.eventQueue_,s,r)}function js(n){return n.nextWriteId_++}function Mu(n,e,t){const s=cu(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=F(i).withIndex(e._queryParams.getIndex());ss(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Dt(n.serverSyncTree_,e._path,r);else{const a=xt(n.serverSyncTree_,e);o=Io(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),rn(n.serverSyncTree_,e,t,null,!0),r},i=>(Ot(n,"get for query "+B(e)+" failed: "+i),Promise.reject(new Error(i))))}function Lu(n,e,t,s,i){Ot(n,"set",{path:e.toString(),value:t,priority:s});const r=gn(n),o=F(t,s),a=xs(n.serverSyncTree_,e),c=Ro(o,a,r),l=js(n),d=wo(n.serverSyncTree_,e,c,l,!0);mn(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,m)=>{const g=f==="ok";g||Y("set at "+e+" failed: "+f);const x=ge(n.serverSyncTree_,l,!g);Z(n.eventQueue_,e,x),Ne(n,i,f,m)});const u=Bs(n,e);Je(n,u),Z(n.eventQueue_,u,[])}function Fu(n,e,t,s){Ot(n,"update",{path:e.toString(),value:t});let i=!0;const r=gn(n),o={};if(G(t,(a,c)=>{i=!1,o[a]=To(M(e,a),F(c),n.serverSyncTree_,r)}),i)V("update() called with empty data.  Don't do anything."),Ne(n,s,"ok",void 0);else{const a=js(n),c=iu(n.serverSyncTree_,e,o,a);mn(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||Y("update at "+e+" failed: "+l);const f=ge(n.serverSyncTree_,a,!u),m=f.length>0?Je(n,e):e;Z(n.eventQueue_,m,f),Ne(n,s,l,d)}),G(t,l=>{const d=Bs(n,M(e,l));Je(n,d)}),Z(n.eventQueue_,e,[])}}function ju(n){Ot(n,"onDisconnectEvents");const e=gn(n),t=Qt();Jn(n.onDisconnect_,T(),(i,r)=>{const o=To(i,r,n.serverSyncTree_,e);tt(t,i,o)});let s=[];Jn(t,T(),(i,r)=>{s=s.concat(Dt(n.serverSyncTree_,i,r));const o=Bs(n,i);Je(n,o)}),n.onDisconnect_=Qt(),Z(n.eventQueue_,T(),s)}function Wu(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Qn(n.onDisconnect_,e),Ne(n,t,s,i)})}function ir(n,e,t,s){const i=F(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&tt(n.onDisconnect_,e,i),Ne(n,s,r,o)})}function Bu(n,e,t,s,i){const r=F(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&tt(n.onDisconnect_,e,r),Ne(n,i,o,a)})}function Uu(n,e,t,s){if(Bn(t)){V("onDisconnect().update() called with empty data.  Don't do anything."),Ne(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&G(t,(o,a)=>{const c=F(a);tt(n.onDisconnect_,M(e,o),c)}),Ne(n,s,i,r)})}function $u(n,e,t){let s;b(e._path)===".info"?s=ss(n.infoSyncTree_,e,t):s=ss(n.serverSyncTree_,e,t),Fo(n.eventQueue_,e._path,s)}function rr(n,e,t){let s;b(e._path)===".info"?s=rn(n.infoSyncTree_,e,t):s=rn(n.serverSyncTree_,e,t),Fo(n.eventQueue_,e._path,s)}function Hu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ru)}function Ot(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),V(t,...e)}function Ne(n,e,t,s){e&&et(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wo(n,e,t){return xs(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function Ws(n,e=n.transactionQueueTree_){if(e||yn(n,e),st(e)){const t=Uo(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Vu(n,Pt(e),t)}else Ao(e)&&pn(e,t=>{Ws(n,t)})}function Vu(n,e,t){const s=t.map(l=>l.currentWriteId),i=Wo(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];_(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=z(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Ot(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(ge(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();yn(n,Ms(n.transactionQueueTree_,e)),Ws(n,n.transactionQueueTree_),Z(n.eventQueue_,e,d);for(let f=0;f<u.length;f++)et(u[f])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Y("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Je(n,e)}},o)}function Je(n,e){const t=Bo(n,e),s=Pt(t),i=Uo(n,t);return Gu(n,i,s),s}function Gu(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=z(t,c.path);let d=!1,u;if(_(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(ge(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ku)d=!0,u="maxretry",i=i.concat(ge(n.serverSyncTree_,c.currentWriteId,!0));else{const f=Wo(n,c.path,o);c.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){_n("transaction failed: Data returned ",m,c.path);let g=F(m);typeof m=="object"&&m!=null&&oe(m,".priority")||(g=g.updatePriority(f.getPriority()));const j=c.currentWriteId,le=gn(n),ce=Ro(g,f,le);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=ce,c.currentWriteId=js(n),o.splice(o.indexOf(j),1),i=i.concat(wo(n.serverSyncTree_,c.path,ce,c.currentWriteId,c.applyLocally)),i=i.concat(ge(n.serverSyncTree_,j,!0))}else d=!0,u="nodata",i=i.concat(ge(n.serverSyncTree_,c.currentWriteId,!0))}Z(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}yn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)et(s[a]);Ws(n,n.transactionQueueTree_)}function Bo(n,e){let t,s=n.transactionQueueTree_;for(t=b(e);t!==null&&st(s)===void 0;)s=Ms(s,t),e=A(e),t=b(e);return s}function Uo(n,e){const t=[];return $o(n,e,t),t.sort((s,i)=>s.order-i.order),t}function $o(n,e,t){const s=st(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);pn(e,i=>{$o(n,i,t)})}function yn(n,e){const t=st(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ko(e,t.length>0?t:void 0)}pn(e,s=>{yn(n,s)})}function Bs(n,e){const t=Pt(Bo(n,e)),s=Ms(n.transactionQueueTree_,e);return yu(s,i=>{Fn(n,i)}),Fn(n,s),Do(s,i=>{Fn(n,i)}),t}function Fn(n,e){const t=st(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ge(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ko(e,void 0):t.length=r+1,Z(n.eventQueue_,Pt(e),i);for(let o=0;o<s.length;o++)et(s[o])}}/**
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
 */function zu(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Yu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Y(`Invalid query segment '${t}' in query '${n}'`)}return e}const or=function(n,e){const t=qu(n),s=t.namespace;t.domain==="firebase.com"&&_e(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&_e("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||tc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Gr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new R(t.pathString)}},qu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=zu(n.substring(d,u)));const f=Yu(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Ho{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class Vo{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Go{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ku{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new re;return Wu(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Be("OnDisconnect.remove",this._path);const e=new re;return ir(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Be("OnDisconnect.set",this._path),rs("OnDisconnect.set",e,this._path,!1);const t=new re;return ir(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Be("OnDisconnect.setWithPriority",this._path),rs("OnDisconnect.setWithPriority",e,this._path,!1),Iu("OnDisconnect.setWithPriority",t,!1);const s=new re;return Bu(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Be("OnDisconnect.update",this._path),Mo("OnDisconnect.update",e,this._path,!1);const t=new re;return Uu(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Us{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return w(this._path)?null:ps(this._path)}get ref(){return new ae(this._repo,this._path)}get _queryIdentifier(){const e=Vi(this._queryParams),t=hs(e);return t==="{}"?"default":t}get _queryObject(){return Vi(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Us))return!1;const t=this._repo===e._repo,s=_s(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jc(this._path)}}class ae extends Us{constructor(e,t){super(e,t,new vs,!1)}get parent(){const e=eo(this._path);return e===null?null:new ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xe{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new R(e),s=on(this.ref,e);return new Xe(this._node.getChild(t),s,L)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xe(i,on(this.ref,s),L)))}hasChild(e){const t=new R(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function O(n,e){return n=Oe(n),n._checkNotDeleted("ref"),e!==void 0?on(n._root,e):n._root}function on(n,e){return n=Oe(n),b(n._path)===null?Nu("child","path",e,!1):Lo("child","path",e,!1),new ae(n._repo,M(n._path,e))}function ar(n){return n=Oe(n),new Ku(n._repo,n._path)}function lr(n){return Be("remove",n._path),ut(n,null)}function ut(n,e){n=Oe(n),Be("set",n._path),rs("set",e,n._path,!1);const t=new re;return Lu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ue(n,e){Mo("update",e,n._path,!1);const t=new re;return Fu(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ut(n){n=Oe(n);const e=new Go(()=>{}),t=new vn(e);return Mu(n._repo,n,t).then(s=>new Xe(s,new ae(n._repo,n._path),n._queryParams.getIndex()))}class vn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ho("value",this,new Xe(e.snapshotNode,new ae(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vo(this,e,t):null}matches(e){return e instanceof vn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class $s{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vo(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const s=on(new ae(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ho(e.type,this,new Xe(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof $s?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Qu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{rr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Go(t,r||void 0),a=e==="value"?new vn(o):new $s(e,o);return $u(n._repo,n,a),()=>rr(n._repo,n,a)}function jn(n,e,t,s){return Qu(n,"value",e,t,s)}Qh(ae);tu(ae);/**
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
 */const Ju="FIREBASE_DATABASE_EMULATOR_HOST",os={};let Xu=!1;function Zu(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=wr(r);n.repoInfo_=new Gr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function ed(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||_e("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=or(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Ju]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=or(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const d=i&&c?new He(He.OWNER):new dc(n.name,n.options,e);Su("Invalid Firebase Database URL",o),w(o.path)||_e("Database URL must point to the root of a Firebase Database (not including a child path).");const u=nd(a,n,d,new uc(n,t));return new sd(u,n)}function td(n,e){const t=os[e];(!t||t[n.key]!==n)&&_e(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Hu(n),delete t[n.key]}function nd(n,e,t,s){let i=os[e.name];i||(i={},os[e.name]=i);let r=i[n.toURLString()];return r&&_e("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Au(n,Xu,t,s),i[n.toURLString()]=r,r}class sd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Du(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ae(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(td(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_e("Cannot call "+e+" on a deleted database.")}}function id(n=Tr(),e){const t=Dl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ea("database");s&&rd(t,...s)}return t}function rd(n,e,t,s={}){n=Oe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Vt(s,r.repoInfo_.emulatorOptions))return;_e("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&_e('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new He(He.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:ba(s.mockUserToken,n.app.options.projectId);o=new He(a)}wr(e)&&Ma(e),Zu(r,i,s,o)}/**
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
 */function od(n){Ql(Ll),Gt(new yt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ed(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ue(xi,Ti,n),Ue(xi,Ti,"esm2020")}fe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};fe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};od();const cr="imposter_pairs",hr="imposter_pid",ur="imposter_gemini_key",dr=[{id:"dp1",realWord:"Apple",imposterWord:"Pear"},{id:"dp2",realWord:"Beach",imposterWord:"Pool"},{id:"dp3",realWord:"Coffee",imposterWord:"Tea"},{id:"dp4",realWord:"Hospital",imposterWord:"Clinic"},{id:"dp5",realWord:"Piano",imposterWord:"Guitar"},{id:"dp6",realWord:"Mountain",imposterWord:"Hill"},{id:"dp7",realWord:"Sushi",imposterWord:"Onigiri"},{id:"dp8",realWord:"Doctor",imposterWord:"Nurse"}];function as(){return Math.random().toString(36).slice(2,11)}function ad(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function ld(){let n=sessionStorage.getItem(hr);return n||(n=as(),sessionStorage.setItem(hr,n)),n}let mt=null;function cd(){const n={apiKey:"AIzaSyAl-oljveg6umBEqV7HdkaG6pFM7EgSNPI",authDomain:"guess-the-imposter-5d7ec.firebaseapp.com",databaseURL:"https://guess-the-imposter-5d7ec-default-rtdb.firebaseio.com/",projectId:"guess-the-imposter-5d7ec",storageBucket:"guess-the-imposter-5d7ec.firebasestorage.app",messagingSenderId:"1091095792584",appId:"1:1091095792584:web:9d13beaf49afb9e8e18efd"};if(!n.databaseURL)throw new Error("VITE_FIREBASE_DATABASE_URL is not set in .env");const e=Fl().length?Tr():xr(n);return mt=id(e),mt}function ud(){var gi;const n=la(),[e]=ca(),t=E.useRef(ld()),[s,i]=E.useState(mt),[r,o]=E.useState("home"),[a,c]=E.useState(""),[l,d]=E.useState(null),[u,f]=E.useState({}),[m,g]=E.useState(!1),x=E.useRef([]),[j,le]=E.useState(()=>(e.get("room")||"").toUpperCase()),[ce,it]=E.useState(""),[Mt,rt]=E.useState(""),[Hs,Vs]=E.useState(!1),[Lt,zo]=E.useState(""),[Gs,Ft]=E.useState(""),[zs,Ys]=E.useState(!1),[J,Cn]=E.useState(()=>{try{const p=localStorage.getItem(cr);return p?JSON.parse(p):dr}catch{return dr}}),[En,qs]=E.useState(""),[bn,Ks]=E.useState(""),[jt,Yo]=E.useState(()=>localStorage.getItem(ur)||""),[Qs,Js]=E.useState(!1),[Xs,wn]=E.useState(""),[In,qo]=E.useState(5),[Se,Ko]=E.useState({}),[Zs,Nn]=E.useState(""),[ei,ti]=E.useState(30),[ni,si]=E.useState(10),[ii,ri]=E.useState(1),[oi,ai]=E.useState(3),[,Qo]=E.useState(0),[Jo,li]=E.useState(null),ci=E.useRef({}),S=Object.values(u).sort((p,v)=>p.joinedAt-v.joinedAt),q=l?t.current===l.hostId:!1,K=u[t.current],hi=S.length>0&&S.every(p=>p.hasSeenWord),ui=S.length>0&&S.every(p=>p.vote!=="");E.useEffect(()=>{localStorage.setItem(cr,JSON.stringify(J))},[J]),E.useEffect(()=>{if(mt){i(mt);return}try{const p=cd();i(p)}catch(p){console.error("Firebase init failed:",p)}},[]),E.useEffect(()=>()=>{x.current.forEach(p=>p())},[]),E.useEffect(()=>{if(!s||!m||!a)return;x.current.forEach(C=>C()),x.current=[];const p=jn(O(s,`rooms/${a}/state`),C=>{C.exists()?d(C.val()):(g(!1),d(null),f({}),c(""))}),v=jn(O(s,`rooms/${a}/players`),C=>{f(C.exists()?C.val():{})}),N=jn(O(s,`rooms/${a}/clues`),C=>{Ko(C.exists()?C.val():{})});return x.current=[p,v,N],()=>{p(),v(),N()}},[s,m,a]),E.useEffect(()=>{!s||!l||l.status!=="revealing"||!q||!hi||ue(O(s,`rooms/${a}/state`),{status:"discussing",turnIdx:0,turnEndsAt:Date.now()+l.turnSeconds*1e3})},[hi,l==null?void 0:l.status,q,s,a]),E.useEffect(()=>{!s||!l||l.status!=="voting"||!q||!ui||ue(O(s,`rooms/${a}/state`),{status:"results"})},[ui,l==null?void 0:l.status,q,s,a]),E.useEffect(()=>{if(!l||l.status!=="discussing")return;const p=setInterval(()=>Qo(v=>v+1),500);return()=>clearInterval(p)},[l==null?void 0:l.status]),E.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!q)return;const{turnIdx:p,turnEndsAt:v,turnSeconds:N}=l;if(p>=S.length)return;const C=Math.max(0,v-Date.now())+150,k=setTimeout(async()=>{var Fe;if((await Ut(O(s,`rooms/${a}/state/turnIdx`))).val()!==p)return;const ee=(Fe=S[p])==null?void 0:Fe.id;ee&&((await Ut(O(s,`rooms/${a}/clues/${ee}`))).exists()||await ut(O(s,`rooms/${a}/clues/${ee}`),"⏱ (time ran out)"));const he=p+1,me={[`rooms/${a}/state/turnIdx`]:he};he<S.length&&(me[`rooms/${a}/state/turnEndsAt`]=Date.now()+N*1e3),await ue(O(s,"/"),me)},C);return()=>clearTimeout(k)},[l==null?void 0:l.turnIdx,l==null?void 0:l.turnEndsAt,l==null?void 0:l.status,q,s,a,S.length]),E.useEffect(()=>{const p=Object.keys(ci.current),v=Object.keys(Se).find(C=>!p.includes(C));if(ci.current={...Se},!v)return;li(v);const N=setTimeout(()=>li(null),2e3);return()=>clearTimeout(N)},[Se]),E.useEffect(()=>{Nn("")},[l==null?void 0:l.turnIdx]);const di=async()=>{if(!s||!Lt.trim()){Ft("Enter your name.");return}if(J.length===0){Ft("No word pairs! Add some words first.");return}Ys(!0),Ft("");try{const p=ad(),v=Date.now(),N={status:"lobby",hostId:t.current,realWord:"",imposterWord:"",imposterPlayerId:"",createdAt:v,turnIdx:0,turnEndsAt:0,turnSeconds:30,gameDurationMinutes:10,rotationCount:1,roundCount:3,currentRound:1,gameStartsAt:0},C={id:t.current,name:Lt.trim(),joinedAt:v,hasSeenWord:!1,vote:"",isHost:!0};await ut(O(s,`rooms/${p}`),{state:N,players:{[t.current]:C}}),ar(O(s,`rooms/${p}`)).remove(),c(p),g(!0)}catch(p){Ft(p instanceof Error?p.message:"Failed to create room.")}finally{Ys(!1)}},fi=async()=>{if(!s)return;const p=j.trim().toUpperCase();if(!p||!ce.trim()){rt("Fill in both fields.");return}Vs(!0),rt("");try{const v=await Ut(O(s,`rooms/${p}/state`));if(!v.exists()){rt("Room not found. Check the code.");return}if(v.val().status!=="lobby"){rt("Game already started.");return}const C={id:t.current,name:ce.trim(),joinedAt:Date.now(),hasSeenWord:!1,vote:"",isHost:!1};await ut(O(s,`rooms/${p}/players/${t.current}`),C),ar(O(s,`rooms/${p}/players/${t.current}`)).remove(),c(p),g(!0)}catch(v){rt(v instanceof Error?v.message:"Failed to join.")}finally{Vs(!1)}},Xo=async()=>{if(!s||!q||S.length<3)return;const p=J[Math.floor(Math.random()*J.length)],v=S[Math.floor(Math.random()*S.length)].id;await ue(O(s,`rooms/${a}/state`),{status:"revealing",realWord:p.realWord,imposterWord:p.imposterWord,imposterPlayerId:v,turnSeconds:ei,gameDurationMinutes:ni,rotationCount:ii,roundCount:oi,currentRound:1,gameStartsAt:Date.now(),turnIdx:0,turnEndsAt:0})},Zo=()=>{s&&ue(O(s,`rooms/${a}/players/${t.current}`),{hasSeenWord:!0})},ea=()=>{!s||!q||ue(O(s,`rooms/${a}/state`),{status:"voting"})},ta=p=>{!s||K!=null&&K.vote||ue(O(s,`rooms/${a}/players/${t.current}`),{vote:p})},na=async()=>{if(!s||!q||!l)return;const p=(l.currentRound||1)+1,v=p>(l.roundCount||3),N={[`rooms/${a}/state/status`]:"lobby",[`rooms/${a}/state/realWord`]:"",[`rooms/${a}/state/imposterWord`]:"",[`rooms/${a}/state/imposterPlayerId`]:"",[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/state/currentRound`]:v?1:p,[`rooms/${a}/clues`]:null};S.forEach(C=>{N[`rooms/${a}/players/${C.id}/hasSeenWord`]=!1,N[`rooms/${a}/players/${C.id}/vote`]=""}),await ue(O(s,"/"),N)},pi=async()=>{if(!s||!l)return;const p=S[l.turnIdx];if(!p||p.id!==t.current)return;const v=l.turnIdx;if(await ut(O(s,`rooms/${a}/clues/${t.current}`),Zs.trim()||"(skipped)"),Nn(""),(await Ut(O(s,`rooms/${a}/state/turnIdx`))).val()!==v)return;const C=v+1,k={[`rooms/${a}/state/turnIdx`]:C};C<S.length&&(k[`rooms/${a}/state/turnEndsAt`]=Date.now()+l.turnSeconds*1e3),await ue(O(s,"/"),k)},_i=async()=>{!s||!a||(x.current.forEach(p=>p()),x.current=[],q?await lr(O(s,`rooms/${a}`)):await lr(O(s,`rooms/${a}/players/${t.current}`)),g(!1),d(null),f({}),c(""))},Sn=()=>{!En.trim()||!bn.trim()||(Cn(p=>[...p,{id:as(),realWord:En.trim(),imposterWord:bn.trim()}]),qs(""),Ks(""))},sa=async()=>{var p,v,N,C;if(!jt.trim()){wn("Enter a Groq API key.");return}Js(!0),wn("");try{const k=`Generate ${In} word pairs for a "Guess the Imposter" party game.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common English words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}
- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`,U=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${jt}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:k}],temperature:.8})});if(!U.ok){const ie=await U.json();throw new Error(((p=ie==null?void 0:ie.error)==null?void 0:p.message)||`HTTP ${U.status}`)}const me=(((C=(N=(v=(await U.json()).choices)==null?void 0:v[0])==null?void 0:N.message)==null?void 0:C.content)??"").match(/\[[\s\S]*\]/);if(!me)throw new Error("Unexpected AI response format.");const Fe=JSON.parse(me[0]),ot=ie=>ie.charAt(0).toUpperCase()+ie.slice(1);Cn(ie=>[...ie,...Fe.map(W=>({id:as(),realWord:ot(W.realWord),imposterWord:ot(W.imposterWord)}))]),localStorage.setItem(ur,jt)}catch(k){wn(k instanceof Error?k.message:"Failed to generate.")}finally{Js(!1)}},ia=()=>{const p={};S.forEach(U=>{U.vote&&(p[U.vote]=(p[U.vote]||0)+1)});const v=Math.max(...Object.values(p),0),N=Object.entries(p).filter(([,U])=>U===v).map(([U])=>U),C=l?u[l.imposterPlayerId]:void 0,k=C?N.includes(C.id):!1;return{tally:p,imposter:C,caught:k}},mi=`${window.location.origin}${window.location.pathname}?room=${a}`,ra=()=>navigator.clipboard.writeText(mi),oa=()=>navigator.clipboard.writeText(a);if(!m&&r==="home")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-menu",children:[h.jsx("img",{src:ha,className:"imposter-logo",alt:"eGov Logo"}),h.jsx("h1",{className:"imposter-title",children:"Guess the Imposter"}),h.jsx("p",{className:"imposter-subtitle",children:"One player has a different word — can the group find them?"}),h.jsxs("div",{className:"imposter-menu-buttons",children:[h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:()=>o("creating"),children:"🏠 Create Room"}),h.jsx("button",{className:"gi-btn gi-btn--secondary",onClick:()=>{le((e.get("room")||"").toUpperCase()),o("joining")},children:"🚪 Join Room"}),h.jsxs("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("word-manager"),children:["📝 Manage Words ",h.jsx("span",{className:"gi-badge",children:J.length})]})]}),h.jsx("div",{className:"gi-footer-links",children:h.jsx("button",{className:"gi-back-link",onClick:()=>n("/eGov-Game/main-page"),children:"← Back to Games"})})]})});if(!m&&r==="creating")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Create Room"})]}),h.jsx("label",{className:"gi-label",children:"Your Name (as host)"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:Lt,onChange:p=>zo(p.target.value),onKeyDown:p=>p.key==="Enter"&&di(),autoFocus:!0}),J.length===0?h.jsxs("div",{className:"gi-warning",children:["No word pairs! ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Add words first →"})]}):h.jsxs("p",{className:"gi-hint",style:{marginTop:"0.25rem"},children:[J.length," word pair",J.length!==1?"s":""," ready."," ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Manage"})]}),Gs&&h.jsx("p",{className:"gi-error",children:Gs}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:di,disabled:zs||!Lt.trim()||J.length===0,children:zs?"Creating…":"Create Room →"})]})]})});if(!m&&r==="joining")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Join Room"})]}),h.jsx("label",{className:"gi-label",children:"Room Code"}),h.jsx("input",{className:"gi-input gi-input--code",style:{width:"100%",boxSizing:"border-box"},placeholder:"XXXXXX",maxLength:6,value:j,onChange:p=>le(p.target.value.toUpperCase())}),h.jsx("label",{className:"gi-label",style:{marginTop:"0.75rem"},children:"Your Name"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:ce,onChange:p=>it(p.target.value),onKeyDown:p=>p.key==="Enter"&&fi()}),Mt&&h.jsx("p",{className:"gi-error",children:Mt}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:fi,disabled:Hs||!j.trim()||!ce.trim(),children:Hs?"Joining…":"Join →"})]})]})});if(r==="word-manager")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-word-manager",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Word Pairs"}),h.jsx("span",{className:"gi-badge gi-badge--large",children:J.length})]}),h.jsxs("div",{className:"wm-add-form",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word (most players)",value:En,onChange:p=>qs(p.target.value),onKeyDown:p=>p.key==="Enter"&&Sn()}),h.jsx("span",{className:"wm-vs",children:"⇄"}),h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:bn,onChange:p=>Ks(p.target.value),onKeyDown:p=>p.key==="Enter"&&Sn()}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Sn,children:"Add"})]}),h.jsxs("div",{className:"wm-ai-section",children:[h.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Gemini)"}),h.jsxs("div",{className:"wm-ai-controls",children:[h.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:jt,onChange:p=>Yo(p.target.value)}),h.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:In,onChange:p=>qo(Math.max(1,Math.min(20,Number(p.target.value))))}),h.jsx("button",{className:"gi-btn gi-btn--ai",onClick:sa,disabled:Qs,children:Qs?"Generating…":`Generate ${In}`})]}),Xs&&h.jsx("p",{className:"gi-error",children:Xs}),h.jsxs("p",{className:"gi-hint",children:["Get a free key at ",h.jsx("span",{className:"gi-hint-strong",children:"aistudio.google.com"})]})]}),h.jsxs("div",{className:"wm-list",children:[J.length===0&&h.jsx("p",{className:"wm-empty",children:"No pairs yet."}),J.map(p=>h.jsxs("div",{className:"wm-pair-row",children:[h.jsx("span",{className:"wm-real",children:p.realWord}),h.jsx("span",{className:"wm-arrow",children:"⇄"}),h.jsx("span",{className:"wm-imposter",children:p.imposterWord}),h.jsx("button",{className:"wm-delete-btn",onClick:()=>Cn(v=>v.filter(N=>N.id!==p.id)),children:"✕"})]},p.id))]})]})});if(!m||!l)return null;if(l.status==="lobby")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-lobby-card",children:[h.jsxs("div",{className:"gi-lobby-header",children:[h.jsxs("div",{children:[h.jsx("div",{className:"gi-room-label",children:"Room Code"}),h.jsx("div",{className:"gi-room-code",onClick:oa,title:"Click to copy",children:a})]}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:_i,children:q?"Close Room":"Leave"})]}),h.jsxs("div",{className:"gi-share-row",children:[h.jsx("span",{className:"gi-share-url",children:mi}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:ra,children:"Copy Link"})]}),h.jsxs("div",{className:"gi-lobby-players-label",children:["Players ",h.jsx("span",{className:"gi-badge",children:S.length}),S.length<3&&h.jsx("span",{className:"gi-hint",style:{marginLeft:"0.5rem"},children:"Need at least 3"})]}),h.jsxs("div",{className:"gi-player-list",children:[S.map(p=>h.jsxs("div",{className:`gi-player-chip${p.id===t.current?" gi-player-chip--me":""}`,children:[p.isHost&&h.jsx("span",{className:"gi-host-badge",children:"HOST"}),p.name,p.id===t.current&&h.jsx("span",{style:{opacity:.5,fontSize:"0.75rem"},children:" (you)"})]},p.id)),S.length===0&&h.jsx("p",{className:"wm-empty",children:"Waiting for players…"})]}),q?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-config-grid",children:[h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"⏱ Secs per turn"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>ti(p=>Math.max(10,p-5)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[ei,"s"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>ti(p=>Math.min(120,p+5)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🕐 Game duration"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>si(p=>Math.max(1,p-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[ni,"m"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>si(p=>Math.min(60,p+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🔄 Rotations"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>ri(p=>Math.max(1,p-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[ii,"×"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>ri(p=>Math.min(5,p+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🏆 Rounds"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>ai(p=>Math.max(1,p-1)),children:"−"}),h.jsx("span",{className:"gi-turn-config-value",children:oi}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>ai(p=>Math.min(10,p+1)),children:"+"})]})]})]}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",marginTop:"0.5rem"},disabled:S.length<3,onClick:Xo,children:S.length<3?`Need ${3-S.length} more player${3-S.length!==1?"s":""}`:"Start Game →"})]}):h.jsx("div",{className:"gi-waiting-banner",children:"⏳ Waiting for host to start the game…"})]})});if(l.status==="revealing"){const p=t.current===l.imposterPlayerId,v=p?l.imposterWord:l.realWord,N=(K==null?void 0:K.hasSeenWord)||!1,C=S.filter(he=>he.hasSeenWord).length,k=l.gameStartsAt?Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3)):l.gameDurationMinutes*60,U=Math.floor(k/60),ee=k%60;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-reveal",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),h.jsxs("div",{className:"gi-game-timer",children:["🕐 ",U,":",String(ee).padStart(2,"0")]})]}),h.jsx("h2",{className:"gi-phase-title",children:"Your Secret Word"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Private — don't show other screens!"}),N?h.jsx("div",{className:"reveal-card reveal-card--visible",children:h.jsxs("div",{className:"reveal-card__back",children:[h.jsx("div",{className:"reveal-word-label",children:"Your word is:"}),h.jsx("div",{className:"reveal-word",children:v}),h.jsx("p",{className:`reveal-role-hint${p?" reveal-role-hint--imposter":""}`,children:p?"🕵️ You are the IMPOSTER — blend in!":"✅ Give clues without saying the word!"})]})}):h.jsx("div",{className:"reveal-card reveal-card--tap-me",onClick:Zo,children:h.jsxs("div",{className:"reveal-card__front",children:[h.jsx("div",{className:"reveal-player-num",children:K?K.name[0].toUpperCase():"?"}),h.jsx("div",{className:"reveal-player-name",children:K==null?void 0:K.name}),h.jsx("div",{className:"reveal-tap-badge",children:"👆 Tap to reveal"}),h.jsx("p",{className:"reveal-tap-hint",children:"Your secret word is hidden — tap to see it!"})]})}),h.jsxs("div",{className:"gi-seen-progress",children:[h.jsxs("span",{className:"gi-hint",children:[C," / ",S.length," players ready"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${C/S.length*100}%`}})})]})]})})}if(l.status==="discussing"){const{turnIdx:p,turnEndsAt:v,turnSeconds:N}=l,C=p>=S.length,k=C?null:S[p],U=(k==null?void 0:k.id)===t.current,ee=C?0:Math.max(0,Math.floor((v-Date.now())/1e3)),he=36,me=2*Math.PI*he,Fe=N>0?ee/N:0,ot=me*(1-Fe),ie=ee<=5&&ee>0;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-discuss",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),l.gameStartsAt>0&&(()=>{const W=Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3));return h.jsxs("div",{className:`gi-game-timer${W<=60?" gi-game-timer--low":""}`,children:["🕐 ",Math.floor(W/60),":",String(W%60).padStart(2,"0")]})})()]}),C?h.jsxs("div",{className:"gi-all-done-banner",children:[h.jsx("div",{className:"gi-all-done-icon",children:"✅"}),h.jsx("div",{className:"gi-all-done-text",children:"All clues in!"}),q?h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",onClick:ea,children:"Start Voting →"}):h.jsx("p",{className:"gi-hint",children:"Waiting for host to start voting…"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-turn-header",children:[h.jsx("div",{className:"gi-turn-player-name",children:U?"🎤 Your turn!":`🎤 ${k==null?void 0:k.name}'s turn`}),h.jsxs("svg",{className:"gi-countdown-svg",width:"88",height:"88",viewBox:"0 0 88 88",children:[h.jsx("circle",{cx:"44",cy:"44",r:he,fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),h.jsx("circle",{cx:"44",cy:"44",r:he,fill:"none",stroke:ie?"#ef4444":"#6366f1",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:me,strokeDashoffset:ot,transform:"rotate(-90 44 44)",style:{transition:"stroke-dashoffset 0.3s linear, stroke 0.3s"}}),h.jsx("text",{x:"44",y:"50",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:ee})]})]}),U?h.jsxs("div",{className:"gi-my-turn-input",children:[h.jsx("p",{className:"gi-hint",style:{marginBottom:"0.5rem"},children:"Give a clue related to your word — don't say it directly!"}),h.jsxs("div",{className:"gi-clue-input-row",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Type your clue…",value:Zs,onChange:W=>Nn(W.target.value),onKeyDown:W=>W.key==="Enter"&&pi(),autoFocus:!0,maxLength:80}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:pi,children:"Submit →"})]})]}):h.jsxs("div",{className:"gi-waiting-banner",style:{marginTop:0},children:["⏳ Waiting for ",k==null?void 0:k.name," to give a clue…"]})]}),Object.keys(Se).length>0&&h.jsxs("div",{className:"gi-clue-list",children:[h.jsx("div",{className:"gi-clue-list-title",children:"Clues Given"}),S.filter(W=>Se[W.id]!==void 0).map(W=>h.jsxs("div",{className:`gi-clue-item${Jo===W.id?" gi-clue-item--new":""}`,children:[h.jsx("span",{className:"gi-clue-player",children:W.name}),h.jsxs("span",{className:"gi-clue-text",children:['"',Se[W.id],'"']})]},W.id))]}),h.jsx("div",{className:"reveal-progress",children:S.map((W,aa)=>h.jsx("div",{className:`reveal-dot${Se[W.id]!==void 0?" reveal-dot--done":aa===p?" reveal-dot--current":""}`},W.id))})]})})}if(l.status==="voting"){const p=(K==null?void 0:K.vote)||"",v=S.filter(N=>N.vote!=="").length;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-vote",children:[h.jsx("h2",{className:"gi-phase-title",children:"🗳 Vote"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Who do you think is the imposter?"}),p?h.jsxs("div",{className:"gi-voted-confirmation",children:[h.jsx("div",{className:"gi-voted-icon",children:"✅"}),h.jsxs("div",{className:"gi-voted-text",children:["You voted for ",h.jsx("strong",{children:((gi=u[p])==null?void 0:gi.name)??"?"})]})]}):h.jsx("div",{className:"vote-options",children:S.filter(N=>N.id!==t.current).map(N=>h.jsx("button",{className:"vote-option-btn",onClick:()=>ta(N.id),children:N.name},N.id))}),h.jsxs("div",{className:"gi-seen-progress",style:{marginTop:"1rem"},children:[h.jsxs("span",{className:"gi-hint",children:[v," / ",S.length," votes submitted"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${v/S.length*100}%`}})})]})]})})}if(l.status==="results"){const{tally:p,imposter:v,caught:N}=ia();return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-result",children:[h.jsx("div",{className:`result-banner${N?" result-banner--success":" result-banner--fail"}`,children:N?"🎉 Imposter Caught!":"😈 Imposter Wins!"}),h.jsx("div",{className:"result-imposter-section",children:h.jsxs("div",{className:"result-imposter-card",children:[h.jsx("div",{className:"result-label",children:"The Imposter was"}),h.jsx("div",{className:"result-imposter-name",children:(v==null?void 0:v.name)??"?"})]})}),h.jsxs("div",{className:"result-words-row",children:[h.jsxs("div",{className:"result-word-card result-word-card--real",children:[h.jsx("div",{className:"result-word-label",children:"Real Word"}),h.jsx("div",{className:"result-word-value",children:l.realWord})]}),h.jsx("span",{className:"wm-arrow",style:{fontSize:"1.5rem"},children:"⇄"}),h.jsxs("div",{className:"result-word-card result-word-card--imposter",children:[h.jsx("div",{className:"result-word-label",children:"Imposter Word"}),h.jsx("div",{className:"result-word-value",children:l.imposterWord})]})]}),h.jsxs("div",{className:"result-votes",children:[h.jsx("h3",{className:"result-votes-title",children:"Vote Results"}),S.map(C=>{const k=p[C.id]||0;return h.jsxs("div",{className:"vote-tally-row",children:[h.jsxs("span",{className:`tally-name${C.id===l.imposterPlayerId?" tally-name--imposter":""}`,children:[C.name," ",C.id===l.imposterPlayerId?"🕵️":""]}),h.jsx("div",{className:"tally-bar-bg",children:h.jsx("div",{className:"tally-bar",style:{width:`${k/Math.max(S.length-1,1)*100}%`}})}),h.jsx("span",{className:"tally-count",children:k})]},C.id)})]}),q?h.jsxs("div",{className:"result-actions",children:[h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:na,children:"Play Again"}),h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:_i,children:"Close Room"})]}):h.jsx("div",{className:"gi-waiting-banner",style:{marginTop:"0.5rem"},children:"⏳ Waiting for host to start next round…"})]})})}return null}export{ud as default};
