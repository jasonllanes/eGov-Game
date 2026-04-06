import{u as ba,b as wa,r as N,j as h,e as Na}from"./index-48e49cd4.js";const Ia=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw nt(e)},nt=function(n){return new Error("Firebase Database ("+wr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xa=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,f=r>>2,u=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(t[f],t[u],t[p],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new Sa;const p=r<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),u!==64){const g=l<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(n){const e=Nr(n);return gs.encodeByteArray(e,!0)},qt=function(n){return Ir(n).replace(/\./g,"")},Kn=function(n){try{return gs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){return xr(void 0,n)}function xr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ra(t)||(n[t]=xr(n[t],e[t]));return n}function Ra(n){return n!=="__proto__"}/**
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
 */function ka(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Aa=()=>ka().__FIREBASE_DEFAULTS__,Da=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kn(n[1]);return e&&JSON.parse(e)},Sr=()=>{try{return Ia()||Aa()||Da()||Pa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oa=n=>{var e,t;return(t=(e=Sr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ma=n=>{const e=Oa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Tr=()=>{var n;return(n=Sr())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ja(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n},a="";return[qt(JSON.stringify(t)),qt(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(La())}function Fa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kr(){return wr.NODE_ADMIN===!0}function Wa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ba(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="FirebaseError";class Dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$a,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ua(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,s)}}function Ua(n,e){return n.replace(Ha,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ha=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Et(Kn(r[0])||""),t=Et(Kn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Va=function(n){const e=Dr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ga=function(n){const e=Dr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qn(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ri(r)&&Ri(o)){if(!Qt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ri(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const p=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),f=1518500249):(l=r^o^a,f=1859775393):u<60?(l=r&o|a&(r|o),f=2400959708):(l=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+l+c+f+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ke(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},fn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Pr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ka(n){return(await fetch(n,{credentials:"include"})).ok}class bt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ke="[DEFAULT]";/**
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
 */class Qa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ae;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xa(e))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ke){return this.instances.has(e)}getOptions(e=ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ja(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ke){return this.component?this.component.multipleInstances?e:ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ja(n){return n===ke?void 0:n}function Xa(n){return n.instantiationMode==="EAGER"}/**
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
 */class Za{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const el={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},tl=M.INFO,nl={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},sl=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=nl[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Or{constructor(e){this.name=e,this._logLevel=tl,this._logHandler=sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?el[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const il=(n,e)=>e.some(t=>n instanceof t);let ki,Ai;function rl(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ol(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mr=new WeakMap,Jn=new WeakMap,jr=new WeakMap,Ln=new WeakMap,ys=new WeakMap;function al(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ee(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mr.set(t,n)}).catch(()=>{}),ys.set(e,n),e}function ll(n){if(Jn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Jn.set(n,e)}let Xn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ee(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cl(n){Xn=n(Xn)}function hl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Fn(this),e,...t);return jr.set(s,e.sort?e.sort():[e]),Ee(s)}:ol().includes(n)?function(...e){return n.apply(Fn(this),e),Ee(Mr.get(this))}:function(...e){return Ee(n.apply(Fn(this),e))}}function ul(n){return typeof n=="function"?hl(n):(n instanceof IDBTransaction&&ll(n),il(n,rl())?new Proxy(n,Xn):n)}function Ee(n){if(n instanceof IDBRequest)return al(n);if(Ln.has(n))return Ln.get(n);const e=ul(n);return e!==n&&(Ln.set(n,e),ys.set(e,n)),e}const Fn=n=>ys.get(n);function dl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ee(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ee(o.result),c.oldVersion,c.newVersion,Ee(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fl=["get","getKey","getAll","getAllKeys","count"],pl=["put","add","delete","clear"],Wn=new Map;function Di(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wn.get(e))return Wn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=pl.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fl.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Wn.set(e,r),r}cl(n=>({...n,get:(e,t,s)=>Di(e,t)||n.get(e,t,s),has:(e,t)=>!!Di(e,t)||n.has(e,t)}));/**
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
 */class ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_l(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function _l(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zn="@firebase/app",Pi="0.14.10";/**
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
 */const me=new Or("@firebase/app"),gl="@firebase/app-compat",yl="@firebase/analytics-compat",vl="@firebase/analytics",Cl="@firebase/app-check-compat",El="@firebase/app-check",bl="@firebase/auth",wl="@firebase/auth-compat",Nl="@firebase/database",Il="@firebase/data-connect",xl="@firebase/database-compat",Sl="@firebase/functions",Tl="@firebase/functions-compat",Rl="@firebase/installations",kl="@firebase/installations-compat",Al="@firebase/messaging",Dl="@firebase/messaging-compat",Pl="@firebase/performance",Ol="@firebase/performance-compat",Ml="@firebase/remote-config",jl="@firebase/remote-config-compat",Ll="@firebase/storage",Fl="@firebase/storage-compat",Wl="@firebase/firestore",Bl="@firebase/ai",$l="@firebase/firestore-compat",Ul="firebase",Hl="12.11.0";/**
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
 */const es="[DEFAULT]",Vl={[Zn]:"fire-core",[gl]:"fire-core-compat",[vl]:"fire-analytics",[yl]:"fire-analytics-compat",[El]:"fire-app-check",[Cl]:"fire-app-check-compat",[bl]:"fire-auth",[wl]:"fire-auth-compat",[Nl]:"fire-rtdb",[Il]:"fire-data-connect",[xl]:"fire-rtdb-compat",[Sl]:"fire-fn",[Tl]:"fire-fn-compat",[Rl]:"fire-iid",[kl]:"fire-iid-compat",[Al]:"fire-fcm",[Dl]:"fire-fcm-compat",[Pl]:"fire-perf",[Ol]:"fire-perf-compat",[Ml]:"fire-rc",[jl]:"fire-rc-compat",[Ll]:"fire-gcs",[Fl]:"fire-gcs-compat",[Wl]:"fire-fst",[$l]:"fire-fst-compat",[Bl]:"fire-vertex","fire-js":"fire-js",[Ul]:"fire-js-all"};/**
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
 */const wt=new Map,Gl=new Map,ts=new Map;function Oi(n,e){try{n.container.addComponent(e)}catch(t){me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jt(n){const e=n.name;if(ts.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;ts.set(e,n);for(const t of wt.values())Oi(t,n);for(const t of Gl.values())Oi(t,n);return!0}function zl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new Ar("app","Firebase",ql);/**
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
 */class Kl{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
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
 */const Ql=Hl;function Lr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:es,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw be.create("bad-app-name",{appName:String(i)});if(t||(t=Tr()),!t)throw be.create("no-options");const r=wt.get(i);if(r){if(Qt(t,r.options)&&Qt(s,r.config))return r;throw be.create("duplicate-app",{appName:i})}const o=new Za(i);for(const c of ts.values())o.addComponent(c);const a=new Kl(t,s,o);return wt.set(i,a),a}function Fr(n=es){const e=wt.get(n);if(!e&&n===es&&Tr())return Lr();if(!e)throw be.create("no-app",{appName:n});return e}function Jl(){return Array.from(wt.values())}function Ve(n,e,t){let s=Vl[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(o.join(" "));return}Jt(new bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xl="firebase-heartbeat-database",Zl=1,Nt="firebase-heartbeat-store";let Bn=null;function Wr(){return Bn||(Bn=dl(Xl,Zl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nt)}catch(t){console.warn(t)}}}}).catch(n=>{throw be.create("idb-open",{originalErrorMessage:n.message})})),Bn}async function ec(n){try{const t=(await Wr()).transaction(Nt),s=await t.objectStore(Nt).get(Br(n));return await t.done,s}catch(e){if(e instanceof Dt)me.warn(e.message);else{const t=be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(t.message)}}}async function Mi(n,e){try{const s=(await Wr()).transaction(Nt,"readwrite");await s.objectStore(Nt).put(e,Br(n)),await s.done}catch(t){if(t instanceof Dt)me.warn(t.message);else{const s=be.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});me.warn(s.message)}}}function Br(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tc=1024,nc=30;class sc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ji();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>nc){const o=oc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){me.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ji(),{heartbeatsToSend:s,unsentEntries:i}=ic(this._heartbeatsCache.heartbeats),r=qt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return me.warn(t),""}}}function ji(){return new Date().toISOString().substring(0,10)}function ic(n,e=tc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Li(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Li(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class rc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wa()?Ba().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ec(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Li(n){return qt(JSON.stringify({version:2,heartbeats:n})).length}function oc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ac(n){Jt(new bt("platform-logger",e=>new ml(e),"PRIVATE")),Jt(new bt("heartbeat",e=>new sc(e),"PRIVATE")),Ve(Zn,Pi,n),Ve(Zn,Pi,"esm2020"),Ve("fire-js","")}ac("");var lc="firebase",cc="12.11.0";/**
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
 */Ve(lc,cc,"app");const Fi="@firebase/database",Wi="1.1.2";/**
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
 */let $r="";function hc(n){$r=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Et(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uc(e)}}catch{}return new dc},De=Ur("localStorage"),ns=Ur("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Or("@firebase/database"),fc=function(){let n=1;return function(){return n++}}(),Hr=function(n){const e=qa(n),t=new Ya;t.update(e);const s=t.digest();return gs.encodeByteArray(s)},Pt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pt.apply(null,s):typeof s=="object"?e+=$(s):e+=s,e+=" "}return e};let Pe=null,Bi=!0;const pc=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ge.logLevel=M.VERBOSE,Pe=Ge.log.bind(Ge),e&&ns.set("logging_enabled",!0)):typeof n=="function"?Pe=n:(Pe=null,ns.remove("logging_enabled"))},V=function(...n){if(Bi===!0&&(Bi=!1,Pe===null&&ns.get("logging_enabled")===!0&&pc(!0)),Pe){const e=Pt.apply(null,n);Pe(e)}},Ot=function(n){return function(...e){V(n,...e)}},ss=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pt(...n);Ge.error(e)},_e=function(...n){const e=`FIREBASE FATAL ERROR: ${Pt(...n)}`;throw Ge.error(e),new Error(e)},K=function(...n){const e="FIREBASE WARNING: "+Pt(...n);Ge.warn(e)},mc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&K("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_c=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qe="[MIN_NAME]",Oe="[MAX_NAME]",Fe=function(n,e){if(n===e)return 0;if(n===Qe||e===Oe)return-1;if(e===Qe||n===Oe)return 1;{const t=$i(n),s=$i(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gc=function(n,e){return n===e?0:n<e?-1:1},ut=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},vs=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$(e[s]),t+=":",t+=vs(n[e[s]]);return t+="}",t},Vr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Gr=function(n){m(!pn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const f=l.join("");let u="";for(c=0;c<64;c+=8){let p=parseInt(f.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),u=u+p}return u.toLowerCase()},yc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ec=new RegExp("^-?(0*)\\d{1,10}$"),bc=-2147483648,wc=2147483647,$i=function(n){if(Ec.test(n)){const e=Number(n);if(e>=bc&&e<=wc)return e}return null},st=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw K("Exception was thrown by user callback.",t),e},Math.floor(0))}},Nc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_t=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ic{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Yl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){K(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',K(e)}}class ze{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ze.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="5",zr="v",Yr="s",qr="r",Kr="f",Qr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jr="ls",Xr="p",is="ac",Zr="websocket",eo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=De.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&De.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Sc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function no(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Zr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===eo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sc(n)&&(t.ns=n.namespace);const i=[];return G(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.counters_={}}incrementCounter(e,t=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ta(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={},Un={};function Es(n){const e=n.toString();return $n[e]||($n[e]=new Tc),$n[e]}function Rc(n,e){const t=n.toString();return Un[t]||(Un[t]=e()),Un[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&st(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="start",Ac="close",Dc="pLPCommand",Pc="pRTLPCB",so="id",io="pw",ro="ser",Oc="cb",Mc="seg",jc="ts",Lc="d",Fc="dframe",oo=1870,ao=30,Wc=oo-ao,Bc=25e3,$c=3e4;class Ue{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ot(e),this.stats_=Es(t),this.urlFn=c=>(this.appCheckToken&&(c[is]=this.appCheckToken),no(t,eo,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($c)),_c(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bs((...r)=>{const[o,a,c,l,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ui)this.id=a,this.password=c;else if(o===Ac)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ui]="t",s[ro]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Oc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zr]=Cs,this.transportSessionId&&(s[Yr]=this.transportSessionId),this.lastSessionId&&(s[Jr]=this.lastSessionId),this.applicationId&&(s[Xr]=this.applicationId),this.appCheckToken&&(s[is]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qr.test(location.hostname)&&(s[qr]=Kr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ue.forceAllow_=!0}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){return Ue.forceAllow_?!0:!Ue.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yc()&&!vc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ir(t),i=Vr(s,Wc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Fc]="t",s[so]=e,s[io]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fc(),window[Dc+this.uniqueCallbackIdentifier]=e,window[Pc+this.uniqueCallbackIdentifier]=t,this.myIFrame=bs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){V("frame writing exception"),a.stack&&V(a.stack),V(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||V("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[so]=this.myID,e[io]=this.myPW,e[ro]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ao+s.length<=oo;){const o=this.pendingSegs.shift();s=s+"&"+Mc+i+"="+o.seg+"&"+jc+i+"="+o.ts+"&"+Lc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Bc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{V("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=16384,Hc=45e3;let Xt=null;typeof MozWebSocket<"u"?Xt=MozWebSocket:typeof WebSocket<"u"&&(Xt=WebSocket);class ne{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ot(this.connId),this.stats_=Es(t),this.connURL=ne.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[zr]=Cs,typeof location<"u"&&location.hostname&&Qr.test(location.hostname)&&(o[qr]=Kr),t&&(o[Yr]=t),s&&(o[Jr]=s),i&&(o[is]=i),r&&(o[Xr]=r),no(e,Zr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,De.set("previous_websocket_failure",!0);try{let s;kr(),this.mySock=new Xt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xt!==null&&!ne.forceDisallow_}static previouslyFailed(){return De.isInMemoryStorage||De.get("previous_websocket_failure")===!0}markConnectionHealthy(){De.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Et(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Vr(t,Uc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ne.responsesRequiredToBeHealthy=2;ne.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static get ALL_TRANSPORTS(){return[Ue,ne]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ne&&ne.isAvailable();let s=t&&!ne.previouslyFailed();if(e.webSocketOnly&&(t||K("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ne];else{const i=this.transports_=[];for(const r of It.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);It.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}It.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=6e4,Gc=5e3,zc=10*1024,Yc=100*1024,Hn="t",Hi="d",qc="s",Vi="r",Kc="e",Gi="o",zi="a",Yi="n",qi="p",Qc="h";class Jc{constructor(e,t,s,i,r,o,a,c,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ot("c:"+this.id+":"),this.transportManager_=new It(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_t(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hn in e){const t=e[Hn];t===zi?this.upgradeIfSecondaryHealthy_():t===Vi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ut("t",e),s=ut("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ut("t",e),s=ut("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ut(Hn,e);if(Hi in e){const s=e[Hi];if(t===Qc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Yi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qc?this.onConnectionShutdown_(s):t===Vi?this.onReset_(s):t===Kc?ss("Server Error: "+s):t===Gi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ss("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cs!==s&&K("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),_t(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_t(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(De.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends co{static getInstance(){return new Zt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=32,Qi=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new D("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ie(n){return n.pieces_.length-n.pieceNum_}function P(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function ws(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Xc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ho(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function L(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=x(n),s=x(e);if(t===null)return e;if(t===s)return q(P(n),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zc(n,e){const t=xt(n,0),s=xt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Fe(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Ns(n,e){if(Ie(n)!==Ie(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function X(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ie(n)>Ie(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class eh{constructor(e,t){this.errorPrefix_=t,this.parts_=xt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fn(this.parts_[s]);uo(this)}}function th(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fn(e),uo(n)}function nh(n){const e=n.parts_.pop();n.byteLength_-=fn(e),n.parts_.length>0&&(n.byteLength_-=1)}function uo(n){if(n.byteLength_>Qi)throw new Error(n.errorPrefix_+"has a key path longer than "+Qi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ki)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ki+") or object contains a cycle "+Ae(n))}function Ae(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends co{static getInstance(){return new Is}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1e3,sh=60*5*1e3,Ji=30*1e3,ih=1.3,rh=3e4,oh="server_kill",Xi=3;class pe extends lo{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=pe.nextPersistentConnectionId_++,this.log_=Ot("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dt,this.maxReconnectDelay_=sh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!kr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Is.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_($(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ae,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;pe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&le(e,"w")){const s=qe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();K(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ga(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ji)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Va(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ss("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rh&&(this.reconnectDelay_=dt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ih)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=p&&p.token,a=new Jc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{K(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(oh)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&K(u),c())}}}interrupt(e){V("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){V("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qn(this.interruptReasons_)&&(this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>vs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){V("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xi&&(this.reconnectDelay_=Ji,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){V("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$r.replace(/\./g,"-")]=1,Rr()?e["framework.cordova"]=1:Fa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zt.getInstance().currentlyOnline();return Qn(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(Qe,e),i=new T(Qe,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class fo extends mn{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(e){Vt=e}compare(e,t){return Fe(e.name,t.name)}isDefinedOn(e){throw nt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(Oe,Vt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,Vt)}toString(){return".key"}}const Ye=new fo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class H{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??H.RED,this.left=i??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,t,s,i,r){return new H(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Q.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}H.RED=!0;H.BLACK=!1;class ah{copy(e,t,s,i,r){return this}insert(e,t,s){return new H(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,t=Q.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Q(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,H.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,H.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gt(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new ah;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e){return Fe(n.name,e.name)}function xs(n,e){return Fe(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;function ch(n){rs=n}const po=function(n){return typeof n=="number"?"number:"+Gr(n):"string:"+n},mo=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&le(e,".sv"),"Priority must be a string or number.")}else m(n===rs||n.isEmpty(),"priority of unexpected type.");m(n===rs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class U{static set __childrenNodeConstructor(e){Zi=e}static get __childrenNodeConstructor(){return Zi}constructor(e,t=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:x(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=x(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Ie(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+po(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Gr(this.value_):e+=this.value_,this.lazyHash_=Hr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=U.VALUE_TYPE_ORDER.indexOf(t),r=U.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o,go;function hh(n){_o=n}function uh(n){go=n}class dh extends mn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Fe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Oe,new U("[PRIORITY-POST]",go))}makePost(e,t){const s=_o(e);return new T(t,new U("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new dh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=Math.log(2);class ph{constructor(e){const t=r=>parseInt(Math.log(r)/fh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const en=function(n,e,t,s){n.sort(e);const i=function(c,l){const f=l-c;let u,p;if(f===0)return null;if(f===1)return u=n[c],p=t?t(u):u,new H(p,u.node,H.BLACK,null,null);{const _=parseInt(f/2,10)+c,g=i(c,_),R=i(_+1,l);return u=n[_],p=t?t(u):u,new H(p,u.node,H.BLACK,g,R)}},r=function(c){let l=null,f=null,u=n.length;const p=function(g,R){const B=u-g,he=u;u-=g;const ue=i(B+1,he),at=n[B],Wt=t?t(at):at;_(new H(Wt,at.node,R,null,ue))},_=function(g){l?(l.left=g,l=g):(f=g,l=g)};for(let g=0;g<c.count;++g){const R=c.nextBitIsOne(),B=Math.pow(2,c.count-(g+1));R?p(B,H.BLACK):(p(B,H.BLACK),p(B,H.RED))}return f},o=new ph(n.length),a=r(o);return new Q(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;const Be={};class fe{static get Default(){return m(Be&&F,"ChildrenNode.ts has not been loaded"),Vn=Vn||new fe({".priority":Be},{".priority":F}),Vn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Q?t:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=en(s,e.getCompare()):a=Be;const c=e.toString(),l={...this.indexSet_};l[c]=e;const f={...this.indexes_};return f[c]=a,new fe(f,l)}addToIndexes(e,t){const s=Kt(this.indexes_,(i,r)=>{const o=qe(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Be)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(T.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),en(a,o.getCompare())}else return Be;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new T(e.name,a))),c.insert(e,e.node)}});return new fe(s,this.indexSet_)}removeFromIndexes(e,t){const s=Kt(this.indexes_,i=>{if(i===Be)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new fe(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft;class C{static get EMPTY_NODE(){return ft||(ft=new C(new Q(xs),null,fe.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mo(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ft}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ft:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ft:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=x(e);if(s===null)return t;{m(x(e)!==".priority"||Ie(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(P(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+po(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Hr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mt?-1:0}withIndex(e){if(e===Ye||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ye||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ye?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mh extends C{constructor(){super(new Q(xs),C.EMPTY_NODE,fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Mt=new mh;Object.defineProperties(T,{MIN:{value:new T(Qe,C.EMPTY_NODE)},MAX:{value:new T(Oe,Mt)}});fo.__EMPTY_NODE=C.EMPTY_NODE;U.__childrenNodeConstructor=C;ch(Mt);uh(Mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=!0;function W(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new U(t,W(e))}if(!(n instanceof Array)&&_h){const t=[];let s=!1;if(G(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=W(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new T(o,c)))}}),t.length===0)return C.EMPTY_NODE;const r=en(t,lh,o=>o.name,xs);if(s){const o=en(t,F.getCompare());return new C(r,W(e),new fe({".priority":o},{".priority":F}))}else return new C(r,W(e),fe.Default)}else{let t=C.EMPTY_NODE;return G(n,(s,i)=>{if(le(n,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(W(e))}}hh(W);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends mn{constructor(e){super(),this.indexPath_=e,m(!S(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Fe(e.name,t.name):r}makePost(e,t){const s=W(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Mt);return new T(Oe,e)}toString(){return xt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends mn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Fe(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=W(e);return new T(t,s)}toString(){return".value"}}const vh=new yh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return{type:"value",snapshotNode:n}}function Je(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function St(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ch(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(St(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Je(t,s)):o.trackChildChange(Tt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(St(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Tt(i,r,o))}else s.trackChildChange(Je(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.indexedFilter_=new Ss(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rt.getStartPost_(e),this.endPost_=Rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new T(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new T(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new T(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(p,_)=>u(_,p)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new T(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,l,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,c);if(f&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Tt(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(St(t,u));const R=a.updateImmediateChild(t,C.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Je(p.name,p.node)),R.updateImmediateChild(p.name,p.node)):R}}else return s.isEmpty()?e:f&&o(l,c)>=0?(r!=null&&(r.trackChildChange(St(l.name,l.node)),r.trackChildChange(Je(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qe}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new Ts;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bh(n){return n.loadsAllData()?new Ss(n.getIndex()):n.hasLimit()?new Eh(n):new Rt(n)}function er(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===vh?t="$value":n.index_===Ye?t="$key":(m(n.index_ instanceof gh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function tr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends lo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ot("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=tn.getListenId_(e,s),a={};this.listens_[o]=a;const c=er(e._queryParams);this.restRequest_(r+".json",c,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),qe(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,t){const s=tn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=er(e._queryParams),s=e._path.toString(),i=new ae;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+za(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Et(a.responseText)}catch{K("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&K("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return{value:null,children:new Map}}function it(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=x(e);n.children.has(s)||n.children.set(s,nn());const i=n.children.get(s);e=P(e),it(i,e,t)}}function os(n,e){if(S(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(F,(s,i)=>{it(n,new D(s),i)}),os(n,e)}}else if(n.children.size>0){const t=x(e);return e=P(e),n.children.has(t)&&os(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function as(n,e,t){n.value!==null?t(e,n.value):Nh(n,(s,i)=>{const r=new D(e.toString()+"/"+s);as(i,r,t)})}function Nh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&G(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=10*1e3,xh=30*1e3,Sh=5*60*1e3;class Th{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ih(e);const s=nr+(xh-nr)*Math.random();_t(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;G(e,(i,r)=>{r>0&&le(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),_t(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(se||(se={}));function Rs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function As(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=se.ACK_USER_WRITE,this.source=Rs()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new sn(k(),t,this.revert)}}else return m(x(this.path)===e,"operationForChild called for unrelated child."),new sn(P(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.source=e,this.path=t,this.type=se.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new kt(this.source,k()):new kt(this.source,P(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=se.OVERWRITE}operationForChild(e){return S(this.path)?new Me(this.source,k(),this.snap.getImmediateChild(e)):new Me(this.source,P(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=se.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Me(this.source,k(),t.value):new Xe(this.source,k(),t)}else return m(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xe(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ch(o.childName,o.snapshotNode))}),pt(n,i,"child_removed",e,s,t),pt(n,i,"child_added",e,s,t),pt(n,i,"child_moved",r,s,t),pt(n,i,"child_changed",e,s,t),pt(n,i,"value",e,s,t),i}function pt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Dh(n,a,c)),o.forEach(a=>{const c=Ah(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Ah(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Dh(n,e,t){if(e.childName==null||t.childName==null)throw nt("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,e){return{eventCache:n,serverCache:e}}function gt(n,e,t,s){return _n(new xe(e,t,s),n.serverCache)}function vo(n,e,t,s){return _n(n.eventCache,new xe(e,t,s))}function rn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function je(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn;const Ph=()=>(Gn||(Gn=new Q(gc)),Gn);class O{static fromObject(e){let t=new O(null);return G(e,(s,i)=>{t=t.set(new D(s),i)}),t}constructor(e,t=Ph()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(S(e))return null;{const s=x(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(P(e),t);return r!=null?{path:L(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=x(e),s=this.children.get(t);return s!==null?s.subtree(P(e)):new O(null)}}set(e,t){if(S(e))return new O(t,this.children);{const s=x(e),r=(this.children.get(s)||new O(null)).set(P(e),t),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const t=x(e),s=this.children.get(t);if(s){const i=s.remove(P(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=x(e),s=this.children.get(t);return s?s.get(P(e)):null}}setTree(e,t){if(S(e))return t;{const s=x(e),r=(this.children.get(s)||new O(null)).setTree(P(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(S(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(P(e),L(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,s){if(S(e))return this;{this.value&&s(t,this.value);const i=x(e),r=this.children.get(i);return r?r.foreachOnPath_(P(e),L(t,i),s):new O(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.writeTree_=e}static empty(){return new ie(new O(null))}}function yt(n,e,t){if(S(e))return new ie(new O(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=q(i,e);return r=r.updateChild(o,t),new ie(n.writeTree_.set(i,r))}else{const i=new O(t),r=n.writeTree_.setTree(e,i);return new ie(r)}}}function ls(n,e,t){let s=n;return G(t,(i,r)=>{s=yt(s,L(e,i),r)}),s}function sr(n,e){if(S(e))return ie.empty();{const t=n.writeTree_.setTree(e,new O(null));return new ie(t)}}function cs(n,e){return We(n,e)!=null}function We(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function ir(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function we(n,e){if(S(e))return n;{const t=We(n,e);return t!=null?new ie(new O(t)):new ie(n.writeTree_.subtree(e))}}function hs(n){return n.writeTree_.isEmpty()}function Ze(n,e){return Co(k(),n.writeTree_,e)}function Co(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Co(L(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(L(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e){return No(e,n)}function Oh(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=yt(n.visibleWrites,e,t)),n.lastWriteId=s}function Mh(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=ls(n.visibleWrites,e,t),n.lastWriteId=s}function jh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Lh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Fh(a,s.path)?i=!1:X(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Wh(n),!0;if(s.snap)n.visibleWrites=sr(n.visibleWrites,s.path);else{const a=s.children;G(a,c=>{n.visibleWrites=sr(n.visibleWrites,L(s.path,c))})}return!0}else return!1}function Fh(n,e){if(n.snap)return X(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&X(L(n.path,t),e))return!0;return!1}function Wh(n){n.visibleWrites=Eo(n.allWrites,Bh,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Bh(n){return n.visible}function Eo(n,e,t){let s=ie.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)X(t,o)?(a=q(t,o),s=yt(s,a,r.snap)):X(o,t)&&(a=q(o,t),s=yt(s,k(),r.snap.getChild(a)));else if(r.children){if(X(t,o))a=q(t,o),s=ls(s,a,r.children);else if(X(o,t))if(a=q(o,t),S(a))s=ls(s,k(),r.children);else{const c=qe(r.children,x(a));if(c){const l=c.getChild(P(a));s=yt(s,k(),l)}}}else throw nt("WriteRecord should have .snap or .children")}}return s}function bo(n,e,t,s,i){if(!s&&!i){const r=We(n.visibleWrites,e);if(r!=null)return r;{const o=we(n.visibleWrites,e);if(hs(o))return t;if(t==null&&!cs(o,k()))return null;{const a=t||C.EMPTY_NODE;return Ze(o,a)}}}else{const r=we(n.visibleWrites,e);if(!i&&hs(r))return t;if(!i&&t==null&&!cs(r,k()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(X(l.path,e)||X(e,l.path))},a=Eo(n.allWrites,o,e),c=t||C.EMPTY_NODE;return Ze(a,c)}}}function $h(n,e,t){let s=C.EMPTY_NODE;const i=We(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=we(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const c=Ze(we(r,new D(o)),a);s=s.updateImmediateChild(o,c)}),ir(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=we(n.visibleWrites,e);return ir(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Uh(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(cs(n.visibleWrites,r))return null;{const o=we(n.visibleWrites,r);return hs(o)?i.getChild(t):Ze(o,i.getChild(t))}}function Hh(n,e,t,s){const i=L(e,t),r=We(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=we(n.visibleWrites,i);return Ze(o,s.getNode().getImmediateChild(t))}else return null}function Vh(n,e){return We(n.visibleWrites,e)}function Gh(n,e,t,s,i,r,o){let a;const c=we(n.visibleWrites,e),l=We(c,k());if(l!=null)a=l;else if(t!=null)a=Ze(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&f.length<i;)u(_,s)!==0&&f.push(_),_=p.getNext();return f}else return[]}function zh(){return{visibleWrites:ie.empty(),allWrites:[],lastWriteId:-1}}function on(n,e,t,s){return bo(n.writeTree,n.treePath,e,t,s)}function Ds(n,e){return $h(n.writeTree,n.treePath,e)}function rr(n,e,t,s){return Uh(n.writeTree,n.treePath,e,t,s)}function an(n,e){return Vh(n.writeTree,L(n.treePath,e))}function Yh(n,e,t,s,i,r){return Gh(n.writeTree,n.treePath,e,t,s,i,r)}function Ps(n,e,t){return Hh(n.writeTree,n.treePath,e,t)}function wo(n,e){return No(L(n.treePath,e),n.writeTree)}function No(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,St(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Je(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.oldSnap));else throw nt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Io=new Kh;class Os{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ps(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:je(this.viewCache_),r=Yh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){return{filter:n}}function Jh(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Xh(n,e,t,s,i){const r=new qh;let o,a;if(t.type===se.OVERWRITE){const l=t;l.source.fromUser?o=us(n,e,l.path,l.snap,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!S(l.path),o=ln(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===se.MERGE){const l=t;l.source.fromUser?o=eu(n,e,l.path,l.children,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ds(n,e,l.path,l.children,s,i,a,r))}else if(t.type===se.ACK_USER_WRITE){const l=t;l.revert?o=su(n,e,l.path,s,i,r):o=tu(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===se.LISTEN_COMPLETE)o=nu(n,e,t.path,s,r);else throw nt("Unknown operation type: "+t.type);const c=r.getChanges();return Zh(e,o,c),{viewCache:o,changes:c}}function Zh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=rn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(yo(rn(e)))}}function xo(n,e,t,s,i,r){const o=e.eventCache;if(an(s,t)!=null)return e;{let a,c;if(S(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=je(e),f=l instanceof C?l:C.EMPTY_NODE,u=Ds(s,f);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=on(s,je(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=x(t);if(l===".priority"){m(Ie(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const u=rr(s,t,f,c);u!=null?a=n.filter.updatePriority(f,u):a=o.getNode()}else{const f=P(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const p=rr(s,t,o.getNode(),c);p!=null?u=o.getNode().getImmediateChild(l).updateChild(f,p):u=o.getNode().getImmediateChild(l)}else u=Ps(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,f,i,r):a=o.getNode()}}return gt(e,a,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function ln(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const f=o?n.filter:n.filter.getIndexedFilter();if(S(t))l=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,s);l=f.updateFullNode(c.getNode(),_,null)}else{const _=x(t);if(!c.isCompleteForPath(t)&&Ie(t)>1)return e;const g=P(t),B=c.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?l=f.updatePriority(c.getNode(),B):l=f.updateChild(c.getNode(),_,B,g,Io,null)}const u=vo(e,l,c.isFullyInitialized()||S(t),f.filtersNodes()),p=new Os(i,u,r);return xo(n,u,t,i,p,a)}function us(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const f=new Os(i,e,r);if(S(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=gt(e,l,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=gt(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=P(t),_=a.getNode().getImmediateChild(u);let g;if(S(p))g=s;else{const R=f.getCompleteChild(u);R!=null?ws(p)===".priority"&&R.getChild(ho(p)).isEmpty()?g=R:g=R.updateChild(p,s):g=C.EMPTY_NODE}if(_.equals(g))c=e;else{const R=n.filter.updateChild(a.getNode(),u,g,p,f,o);c=gt(e,R,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function or(n,e){return n.eventCache.isCompleteForChild(e)}function eu(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const f=L(t,c);or(e,x(f))&&(a=us(n,a,f,l,i,r,o))}),s.foreach((c,l)=>{const f=L(t,c);or(e,x(f))||(a=us(n,a,f,l,i,r,o))}),a}function ar(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ds(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;S(t)?l=s:l=new O(null).setTree(t,s);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,p)=>{if(f.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),g=ar(n,_,p);c=ln(n,c,new D(u),g,i,r,o,a)}}),l.children.inorderTraversal((u,p)=>{const _=!e.serverCache.isCompleteForChild(u)&&p.value===null;if(!f.hasChild(u)&&!_){const g=e.serverCache.getNode().getImmediateChild(u),R=ar(n,g,p);c=ln(n,c,new D(u),R,i,r,o,a)}}),c}function tu(n,e,t,s,i,r,o){if(an(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(S(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ln(n,e,t,c.getNode().getChild(t),i,r,a,o);if(S(t)){let l=new O(null);return c.getNode().forEachChild(Ye,(f,u)=>{l=l.set(new D(f),u)}),ds(n,e,t,l,i,r,a,o)}else return e}else{let l=new O(null);return s.foreach((f,u)=>{const p=L(t,f);c.isCompleteForPath(p)&&(l=l.set(f,c.getNode().getChild(p)))}),ds(n,e,t,l,i,r,a,o)}}function nu(n,e,t,s,i){const r=e.serverCache,o=vo(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return xo(n,o,t,s,Io,i)}function su(n,e,t,s,i,r){let o;if(an(s,t)!=null)return e;{const a=new Os(s,e,i),c=e.eventCache.getNode();let l;if(S(t)||x(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=on(s,je(e));else{const u=e.serverCache.getNode();m(u instanceof C,"serverChildren would be complete if leaf node"),f=Ds(s,u)}f=f,l=n.filter.updateFullNode(c,f,r)}else{const f=x(t);let u=Ps(s,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=c.getImmediateChild(f)),u!=null?l=n.filter.updateChild(c,f,u,P(t),a,r):e.eventCache.getNode().hasChild(f)?l=n.filter.updateChild(c,f,C.EMPTY_NODE,P(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=on(s,je(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||an(s,k())!=null,gt(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ss(s.getIndex()),r=bh(s);this.processor_=Qh(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),f=new xe(c,o.isFullyInitialized(),i.filtersNodes()),u=new xe(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_n(u,f),this.eventGenerator_=new Rh(this.query_)}get query(){return this.query_}}function ru(n){return n.viewCache_.serverCache.getNode()}function ou(n){return rn(n.viewCache_)}function au(n,e){const t=je(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function lr(n){return n.eventRegistrations_.length===0}function lu(n,e){n.eventRegistrations_.push(e)}function cr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function hr(n,e,t,s){e.type===se.MERGE&&e.source.queryId!==null&&(m(je(n.viewCache_),"We should always have a full cache before handling merges"),m(rn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Xh(n.processor_,i,e,t,s);return Jh(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,So(n,r.changes,r.viewCache.eventCache.getNode(),null)}function cu(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(Je(r,o))}),t.isFullyInitialized()&&s.push(yo(t.getNode())),So(n,s,t.getNode(),e)}function So(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return kh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn;class To{constructor(){this.views=new Map}}function hu(n){m(!cn,"__referenceConstructor has already been defined"),cn=n}function uu(){return m(cn,"Reference.ts has not been loaded"),cn}function du(n){return n.views.size===0}function Ms(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),hr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(hr(o,e,t,s));return r}}function Ro(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=on(t,i?s:null),c=!1;a?c=!0:s instanceof C?(a=Ds(t,s),c=!1):(a=C.EMPTY_NODE,c=!1);const l=_n(new xe(a,c,!1),new xe(s,i,!1));return new iu(e,l)}return o}function fu(n,e,t,s,i,r){const o=Ro(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),lu(o,t),cu(o,t)}function pu(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Se(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(cr(l,t,s)),lr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(cr(c,t,s)),lr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Se(n)&&r.push(new(uu())(e._repo,e._path)),{removed:r,events:o}}function ko(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(const s of n.views.values())t=t||au(s,e);return t}function Ao(n,e){if(e._queryParams.loadsAllData())return yn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Do(n,e){return Ao(n,e)!=null}function Se(n){return yn(n)!=null}function yn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;function mu(n){m(!hn,"__referenceConstructor has already been defined"),hn=n}function _u(){return m(hn,"Reference.ts has not been loaded"),hn}let gu=1;class ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=zh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Po(n,e,t,s,i){return Oh(n.pendingWriteTree_,e,t,s,i),i?rt(n,new Me(Rs(),e,t)):[]}function yu(n,e,t,s){Mh(n.pendingWriteTree_,e,t,s);const i=O.fromObject(t);return rt(n,new Xe(Rs(),e,i))}function Ce(n,e,t=!1){const s=jh(n.pendingWriteTree_,e);if(Lh(n.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(k(),!0):G(s.children,o=>{r=r.set(new D(o),!0)}),rt(n,new sn(s.path,r,t))}else return[]}function jt(n,e,t){return rt(n,new Me(ks(),e,t))}function vu(n,e,t){const s=O.fromObject(t);return rt(n,new Xe(ks(),e,s))}function Cu(n,e){return rt(n,new kt(ks(),e))}function Eu(n,e,t){const s=Ls(n,t);if(s){const i=Fs(s),r=i.path,o=i.queryId,a=q(r,e),c=new kt(As(o),a);return Ws(n,r,c)}else return[]}function un(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Do(o,e))){const c=pu(o,e,t,s);du(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const f=l.findIndex(p=>p._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(p,_)=>Se(_));if(f&&!u){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=Nu(p);for(let g=0;g<_.length;++g){const R=_[g],B=R.query,he=Lo(n,R);n.listenProvider_.startListening(vt(B),At(n,B),he.hashFn,he.onComplete)}}}!u&&l.length>0&&!s&&(f?n.listenProvider_.stopListening(vt(e),null):l.forEach(p=>{const _=n.queryToTagMap.get(vn(p));n.listenProvider_.stopListening(vt(p),_)}))}Iu(n,l)}return a}function Oo(n,e,t,s){const i=Ls(n,s);if(i!=null){const r=Fs(i),o=r.path,a=r.queryId,c=q(o,e),l=new Me(As(a),c,t);return Ws(n,o,l)}else return[]}function bu(n,e,t,s){const i=Ls(n,s);if(i){const r=Fs(i),o=r.path,a=r.queryId,c=q(o,e),l=O.fromObject(t),f=new Xe(As(a),c,l);return Ws(n,o,f)}else return[]}function fs(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,_)=>{const g=q(p,i);r=r||Ne(_,g),o=o||Se(_)});let a=n.syncPointTree_.get(i);a?(o=o||Se(a),r=r||Ne(a,k())):(a=new To,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,g)=>{const R=Ne(g,k());R&&(r=r.updateImmediateChild(_,R))}));const l=Do(a,e);if(!l&&!e._queryParams.loadsAllData()){const p=vn(e);m(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=xu();n.queryToTagMap.set(p,_),n.tagToQueryMap.set(_,p)}const f=gn(n.pendingWriteTree_,i);let u=fu(a,e,t,f,r,c);if(!l&&!o&&!s){const p=Ao(a,e);u=u.concat(Su(n,e,p))}return u}function js(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=q(o,e),l=Ne(a,c);if(l)return l});return bo(i,e,r,t,!0)}function wu(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,f)=>{const u=q(l,t);s=s||Ne(f,u)});let i=n.syncPointTree_.get(t);i?s=s||Ne(i,k()):(i=new To,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new xe(s,!0,!1):null,a=gn(n.pendingWriteTree_,e._path),c=Ro(i,e,a,r?o.getNode():C.EMPTY_NODE,r);return ou(c)}function rt(n,e){return Mo(e,n.syncPointTree_,null,gn(n.pendingWriteTree_,k()))}function Mo(n,e,t,s){if(S(n.path))return jo(n,e,t,s);{const i=e.get(k());t==null&&i!=null&&(t=Ne(i,k()));let r=[];const o=x(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,f=wo(s,o);r=r.concat(Mo(a,c,l,f))}return i&&(r=r.concat(Ms(i,n,s,t))),r}}function jo(n,e,t,s){const i=e.get(k());t==null&&i!=null&&(t=Ne(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=wo(s,o),f=n.operationForChild(o);f&&(r=r.concat(jo(f,a,c,l)))}),i&&(r=r.concat(Ms(i,n,s,t))),r}function Lo(n,e){const t=e.query,s=At(n,t);return{hashFn:()=>(ru(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Eu(n,t._path,s):Cu(n,t._path);{const r=Cc(i,t);return un(n,t,null,r)}}}}function At(n,e){const t=vn(e);return n.queryToTagMap.get(t)}function vn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ls(n,e){return n.tagToQueryMap.get(e)}function Fs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Ws(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=gn(n.pendingWriteTree_,e);return Ms(s,t,i,null)}function Nu(n){return n.fold((e,t,s)=>{if(t&&Se(t))return[yn(t)];{let i=[];return t&&(i=ko(t)),G(s,(r,o)=>{i=i.concat(o)}),i}})}function vt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_u())(n._repo,n._path):n}function Iu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=vn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function xu(){return gu++}function Su(n,e,t){const s=e._path,i=At(n,e),r=Lo(n,t),o=n.listenProvider_.startListening(vt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Se(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,f,u)=>{if(!S(l)&&f&&Se(f))return[yn(f).query];{let p=[];return f&&(p=p.concat(ko(f).map(_=>_.query))),G(u,(_,g)=>{p=p.concat(g)}),p}});for(let l=0;l<c.length;++l){const f=c[l];n.listenProvider_.stopListening(vt(f),At(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bs(t)}node(){return this.node_}}class $s{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new $s(this.syncTree_,t)}node(){return js(this.syncTree_,this.path_)}}const Tu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},dr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ru(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ku(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ru=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},ku=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Fo=function(n,e,t,s){return Us(e,new $s(t,n),s)},Wo=function(n,e,t){return Us(n,new Bs(e),t)};function Us(n,e,t){const s=n.getPriority().val(),i=dr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=dr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new U(a,W(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new U(i))),o.forEachChild(F,(a,c)=>{const l=Us(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Vs(n,e){let t=e instanceof D?e:new D(e),s=n,i=x(t);for(;i!==null;){const r=qe(s.node.children,i)||{children:{},childCount:0};s=new Hs(i,s,r),t=P(t),i=x(t)}return s}function ot(n){return n.node.value}function Bo(n,e){n.node.value=e,ps(n)}function $o(n){return n.node.childCount>0}function Au(n){return ot(n)===void 0&&!$o(n)}function Cn(n,e){G(n.node.children,(t,s)=>{e(new Hs(t,n,s))})}function Uo(n,e,t,s){t&&!s&&e(n),Cn(n,i=>{Uo(i,e,!0,s)}),t&&s&&e(n)}function Du(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Lt(n){return new D(n.parent===null?n.name:Lt(n.parent)+"/"+n.name)}function ps(n){n.parent!==null&&Pu(n.parent,n.name,n)}function Pu(n,e,t){const s=Au(t),i=le(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ps(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ps(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=/[\[\].#$\/\u0000-\u001F\u007F]/,Mu=/[\[\].#$\u0000-\u001F\u007F]/,zn=10*1024*1024,Gs=function(n){return typeof n=="string"&&n.length!==0&&!Ou.test(n)},Ho=function(n){return typeof n=="string"&&n.length!==0&&!Mu.test(n)},ju=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ho(n)},Vo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!pn(n)||n&&typeof n=="object"&&le(n,".sv")},ms=function(n,e,t,s){s&&e===void 0||En(Ke(n,"value"),e,t)},En=function(n,e,t){const s=t instanceof D?new eh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ae(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ae(s)+" with contents = "+e.toString());if(pn(e))throw new Error(n+"contains "+e.toString()+" "+Ae(s));if(typeof e=="string"&&e.length>zn/3&&fn(e)>zn)throw new Error(n+"contains a string greater than "+zn+" utf8 bytes "+Ae(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(G(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gs(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ae(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);th(s,o),En(n,a,s),nh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ae(s)+" in addition to actual children.")}},Lu=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=xt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Gs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Zc);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&X(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Go=function(n,e,t,s){if(s&&e===void 0)return;const i=Ke(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];G(e,(o,a)=>{const c=new D(o);if(En(i,a,L(t,c)),ws(c)===".priority"&&!Vo(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Lu(i,r)},Fu=function(n,e,t){if(!(t&&e===void 0)){if(pn(e))throw new Error(Ke(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Vo(e))throw new Error(Ke(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},zo=function(n,e,t,s){if(!(s&&t===void 0)&&!Ho(t))throw new Error(Ke(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Wu=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zo(n,e,t,s)},He=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Bu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ju(t))throw new Error(Ke(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ns(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Yo(n,e,t){bn(n,t),qo(n,s=>Ns(s,e))}function Z(n,e,t){bn(n,t),qo(n,s=>X(s,e)||X(e,s))}function qo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Uu(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Uu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Pe&&V("event: "+t.toString()),st(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="repo_interrupt",Vu=25;class Gu{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $u,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nn(),this.transactionQueueTree_=new Hs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zu(n,e,t){if(n.stats_=Es(n.repoInfo_),n.forceRestClient_||Nc())n.server_=new tn(n.repoInfo_,(s,i,r,o)=>{fr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>pr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new pe(n.repoInfo_,e,(s,i,r,o)=>{fr(n,s,i,r,o)},s=>{pr(n,s)},s=>{qu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Rc(n.repoInfo_,()=>new Th(n.stats_,n.server_)),n.infoData_=new wh,n.infoSyncTree_=new ur({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=jt(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),zs(n,"connected",!1),n.serverSyncTree_=new ur({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Z(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Yu(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wn(n){return Tu({timestamp:Yu(n)})}function fr(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Kt(t,l=>W(l));o=bu(n.serverSyncTree_,r,c,i)}else{const c=W(t);o=Oo(n.serverSyncTree_,r,c,i)}else if(s){const c=Kt(t,l=>W(l));o=vu(n.serverSyncTree_,r,c)}else{const c=W(t);o=jt(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=et(n,r)),Z(n.eventQueue_,a,o)}function pr(n,e){zs(n,"connected",e),e===!1&&Xu(n)}function qu(n,e){G(e,(t,s)=>{zs(n,t,s)})}function zs(n,e,t){const s=new D("/.info/"+e),i=W(t);n.infoData_.updateSnapshot(s,i);const r=jt(n.infoSyncTree_,s,i);Z(n.eventQueue_,s,r)}function Ys(n){return n.nextWriteId_++}function Ku(n,e,t){const s=wu(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());fs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=jt(n.serverSyncTree_,e._path,r);else{const a=At(n.serverSyncTree_,e);o=Oo(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),un(n.serverSyncTree_,e,t,null,!0),r},i=>(Ft(n,"get for query "+$(e)+" failed: "+i),Promise.reject(new Error(i))))}function Qu(n,e,t,s,i){Ft(n,"set",{path:e.toString(),value:t,priority:s});const r=wn(n),o=W(t,s),a=js(n.serverSyncTree_,e),c=Wo(o,a,r),l=Ys(n),f=Po(n.serverSyncTree_,e,c,l,!0);bn(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(p,_)=>{const g=p==="ok";g||K("set at "+e+" failed: "+p);const R=Ce(n.serverSyncTree_,l,!g);Z(n.eventQueue_,e,R),Te(n,i,p,_)});const u=Ks(n,e);et(n,u),Z(n.eventQueue_,u,[])}function Ju(n,e,t,s){Ft(n,"update",{path:e.toString(),value:t});let i=!0;const r=wn(n),o={};if(G(t,(a,c)=>{i=!1,o[a]=Fo(L(e,a),W(c),n.serverSyncTree_,r)}),i)V("update() called with empty data.  Don't do anything."),Te(n,s,"ok",void 0);else{const a=Ys(n),c=yu(n.serverSyncTree_,e,o,a);bn(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,f)=>{const u=l==="ok";u||K("update at "+e+" failed: "+l);const p=Ce(n.serverSyncTree_,a,!u),_=p.length>0?et(n,e):e;Z(n.eventQueue_,_,p),Te(n,s,l,f)}),G(t,l=>{const f=Ks(n,L(e,l));et(n,f)}),Z(n.eventQueue_,e,[])}}function Xu(n){Ft(n,"onDisconnectEvents");const e=wn(n),t=nn();as(n.onDisconnect_,k(),(i,r)=>{const o=Fo(i,r,n.serverSyncTree_,e);it(t,i,o)});let s=[];as(t,k(),(i,r)=>{s=s.concat(jt(n.serverSyncTree_,i,r));const o=Ks(n,i);et(n,o)}),n.onDisconnect_=nn(),Z(n.eventQueue_,k(),s)}function Zu(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&os(n.onDisconnect_,e),Te(n,t,s,i)})}function mr(n,e,t,s){const i=W(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&it(n.onDisconnect_,e,i),Te(n,s,r,o)})}function ed(n,e,t,s,i){const r=W(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&it(n.onDisconnect_,e,r),Te(n,i,o,a)})}function td(n,e,t,s){if(Qn(t)){V("onDisconnect().update() called with empty data.  Don't do anything."),Te(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&G(t,(o,a)=>{const c=W(a);it(n.onDisconnect_,L(e,o),c)}),Te(n,s,i,r)})}function nd(n,e,t){let s;x(e._path)===".info"?s=fs(n.infoSyncTree_,e,t):s=fs(n.serverSyncTree_,e,t),Yo(n.eventQueue_,e._path,s)}function _r(n,e,t){let s;x(e._path)===".info"?s=un(n.infoSyncTree_,e,t):s=un(n.serverSyncTree_,e,t),Yo(n.eventQueue_,e._path,s)}function sd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Hu)}function Ft(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),V(t,...e)}function Te(n,e,t,s){e&&st(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ko(n,e,t){return js(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function qs(n,e=n.transactionQueueTree_){if(e||Nn(n,e),ot(e)){const t=Jo(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&id(n,Lt(e),t)}else $o(e)&&Cn(e,t=>{qs(n,t)})}function id(n,e,t){const s=t.map(l=>l.currentWriteId),i=Ko(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const f=t[l];m(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=q(e,f.path);r=r.updateChild(u,f.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Ft(n,"transaction put response",{path:c.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let p=0;p<t.length;p++)t[p].status=2,f=f.concat(Ce(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&u.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Nn(n,Vs(n.transactionQueueTree_,e)),qs(n,n.transactionQueueTree_),Z(n.eventQueue_,e,f);for(let p=0;p<u.length;p++)st(u[p])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{K("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}et(n,e)}},o)}function et(n,e){const t=Qo(n,e),s=Lt(t),i=Jo(n,t);return rd(n,i,s),s}function rd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=q(t,c.path);let f=!1,u;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,u=c.abortReason,i=i.concat(Ce(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Vu)f=!0,u="maxretry",i=i.concat(Ce(n.serverSyncTree_,c.currentWriteId,!0));else{const p=Ko(n,c.path,o);c.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){En("transaction failed: Data returned ",_,c.path);let g=W(_);typeof _=="object"&&_!=null&&le(_,".priority")||(g=g.updatePriority(p.getPriority()));const B=c.currentWriteId,he=wn(n),ue=Wo(g,p,he);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=ue,c.currentWriteId=Ys(n),o.splice(o.indexOf(B),1),i=i.concat(Po(n.serverSyncTree_,c.path,ue,c.currentWriteId,c.applyLocally)),i=i.concat(Ce(n.serverSyncTree_,B,!0))}else f=!0,u="nodata",i=i.concat(Ce(n.serverSyncTree_,c.currentWriteId,!0))}Z(n.eventQueue_,t,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Nn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)st(s[a]);qs(n,n.transactionQueueTree_)}function Qo(n,e){let t,s=n.transactionQueueTree_;for(t=x(e);t!==null&&ot(s)===void 0;)s=Vs(s,t),e=P(e),t=x(e);return s}function Jo(n,e){const t=[];return Xo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Xo(n,e,t){const s=ot(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Cn(e,i=>{Xo(n,i,t)})}function Nn(n,e){const t=ot(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Bo(e,t.length>0?t:void 0)}Cn(e,s=>{Nn(n,s)})}function Ks(n,e){const t=Lt(Qo(n,e)),s=Vs(n.transactionQueueTree_,e);return Du(s,i=>{Yn(n,i)}),Yn(n,s),Uo(s,i=>{Yn(n,i)}),t}function Yn(n,e){const t=ot(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ce(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bo(e,void 0):t.length=r+1,Z(n.eventQueue_,Lt(e),i);for(let o=0;o<s.length;o++)st(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ad(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):K(`Invalid query segment '${t}' in query '${n}'`)}return e}const gr=function(n,e){const t=ld(n),s=t.namespace;t.domain==="firebase.com"&&_e(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&_e("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new to(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},ld=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let f=n.indexOf("/");f===-1&&(f=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(f,u)),f<u&&(i=od(n.substring(f,u)));const p=ad(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class ea{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cd{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ae;return Zu(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){He("OnDisconnect.remove",this._path);const e=new ae;return mr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){He("OnDisconnect.set",this._path),ms("OnDisconnect.set",e,this._path,!1);const t=new ae;return mr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){He("OnDisconnect.setWithPriority",this._path),ms("OnDisconnect.setWithPriority",e,this._path,!1),Fu("OnDisconnect.setWithPriority",t,!1);const s=new ae;return ed(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){He("OnDisconnect.update",this._path),Go("OnDisconnect.update",e,this._path,!1);const t=new ae;return td(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Qs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return S(this._path)?null:ws(this._path)}get ref(){return new ce(this._repo,this._path)}get _queryIdentifier(){const e=tr(this._queryParams),t=vs(e);return t==="{}"?"default":t}get _queryObject(){return tr(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof Qs))return!1;const t=this._repo===e._repo,s=Ns(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xc(this._path)}}class ce extends Qs{constructor(e,t){super(e,t,new Ts,!1)}get parent(){const e=ho(this._path);return e===null?null:new ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class tt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=dn(this.ref,e);return new tt(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new tt(i,dn(this.ref,s),F)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function A(n,e){return n=Le(n),n._checkNotDeleted("ref"),e!==void 0?dn(n._root,e):n._root}function dn(n,e){return n=Le(n),x(n._path)===null?Wu("child","path",e,!1):zo("child","path",e,!1),new ce(n._repo,L(n._path,e))}function yr(n){return n=Le(n),new cd(n._repo,n._path)}function qn(n){return He("remove",n._path),$e(n,null)}function $e(n,e){n=Le(n),He("set",n._path),ms("set",e,n._path,!1);const t=new ae;return Qu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function oe(n,e){Go("update",e,n._path,!1);const t=new ae;return Ju(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function mt(n){n=Le(n);const e=new ta(()=>{}),t=new In(e);return Ku(n._repo,n,t).then(s=>new tt(s,new ce(n._repo,n._path),n._queryParams.getIndex()))}class In{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Zo("value",this,new tt(e.snapshotNode,new ce(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ea(this,e,t):null}matches(e){return e instanceof In?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Js{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ea(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=dn(new ce(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Zo(e.type,this,new tt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Js?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hd(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(f,u)=>{_r(n._repo,n,a),c(f,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new ta(t,r||void 0),a=e==="value"?new In(o):new Js(e,o);return nd(n._repo,n,a),()=>_r(n._repo,n,a)}function zt(n,e,t,s){return hd(n,"value",e,t,s)}hu(ce);mu(ce);/**
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
 */const ud="FIREBASE_DATABASE_EMULATOR_HOST",_s={};let dd=!1;function fd(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Pr(r);n.repoInfo_=new to(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function pd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||_e("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=gr(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[ud]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=gr(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const f=i&&c?new ze(ze.OWNER):new xc(n.name,n.options,e);Bu("Invalid Firebase Database URL",o),S(o.path)||_e("Database URL must point to the root of a Firebase Database (not including a child path).");const u=_d(a,n,f,new Ic(n,t));return new gd(u,n)}function md(n,e){const t=_s[e];(!t||t[n.key]!==n)&&_e(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sd(n),delete t[n.key]}function _d(n,e,t,s){let i=_s[e.name];i||(i={},_s[e.name]=i);let r=i[n.toURLString()];return r&&_e("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gu(n,dd,t,s),i[n.toURLString()]=r,r}class gd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ce(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(md(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_e("Cannot call "+e+" on a deleted database.")}}function yd(n=Fr(),e){const t=zl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ma("database");s&&vd(t,...s)}return t}function vd(n,e,t,s={}){n=Le(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Qt(s,r.repoInfo_.emulatorOptions))return;_e("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&_e('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ze(ze.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:ja(s.mockUserToken,n.app.options.projectId);o=new ze(a)}Pr(e)&&Ka(e),fd(r,i,s,o)}/**
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
 */function Cd(n){hc(Ql),Jt(new bt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ve(Fi,Wi,n),Ve(Fi,Wi,"esm2020")}pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Cd();const vr="imposter_pairs",Cr="imposter_pid",Er="imposter_gemini_key",br=[{id:"dp1",realWord:"Apple",imposterWord:"Pear"},{id:"dp2",realWord:"Beach",imposterWord:"Pool"},{id:"dp3",realWord:"Coffee",imposterWord:"Tea"},{id:"dp4",realWord:"Hospital",imposterWord:"Clinic"},{id:"dp5",realWord:"Piano",imposterWord:"Guitar"},{id:"dp6",realWord:"Mountain",imposterWord:"Hill"},{id:"dp7",realWord:"Sushi",imposterWord:"Onigiri"},{id:"dp8",realWord:"Doctor",imposterWord:"Nurse"}];function Yt(){return Math.random().toString(36).slice(2,11)}function Ed(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function bd(){let n=sessionStorage.getItem(Cr);return n||(n=Yt(),sessionStorage.setItem(Cr,n)),n}let Ct=null;function wd(){const n={apiKey:"AIzaSyAl-oljveg6umBEqV7HdkaG6pFM7EgSNPI",authDomain:"guess-the-imposter-5d7ec.firebaseapp.com",databaseURL:"https://guess-the-imposter-5d7ec-default-rtdb.firebaseio.com/",projectId:"guess-the-imposter-5d7ec",storageBucket:"guess-the-imposter-5d7ec.firebasestorage.app",messagingSenderId:"1091095792584",appId:"1:1091095792584:web:9d13beaf49afb9e8e18efd"};if(!n.databaseURL)throw new Error("VITE_FIREBASE_DATABASE_URL is not set in .env");const e=Jl().length?Fr():Lr(n);return Ct=yd(e),Ct}function Id(){var Ti;const n=ba(),[e]=wa(),t=N.useRef(bd()),[s,i]=N.useState(Ct),[r,o]=N.useState("home"),[a,c]=N.useState(""),[l,f]=N.useState(null),[u,p]=N.useState({}),[_,g]=N.useState(!1),R=N.useRef([]),[B,he]=N.useState(()=>(e.get("room")||"").toUpperCase()),[ue,at]=N.useState(""),[Wt,lt]=N.useState(""),[Xs,Zs]=N.useState(!1),[Bt,na]=N.useState(""),[ei,$t]=N.useState(""),[ti,ni]=N.useState(!1),[J,xn]=N.useState(()=>{try{const d=localStorage.getItem(vr);return d?JSON.parse(d):br}catch{return br}}),[Sn,si]=N.useState(""),[Tn,ii]=N.useState(""),[Ut,sa]=N.useState(()=>localStorage.getItem(Er)||""),[ri,oi]=N.useState(!1),[ai,Rn]=N.useState(""),[kn,ia]=N.useState(5),[Re,ra]=N.useState({}),[li,An]=N.useState(""),[ci,hi]=N.useState(30),[ui,di]=N.useState(10),[fi,pi]=N.useState(1),[mi,_i]=N.useState(3),[,oa]=N.useState(0),[aa,gi]=N.useState(null),yi=N.useRef({}),[Dn,Pn]=N.useState(null),[la,vi]=N.useState([]),ca=["😂","😱","🤔","👀","🔥","😤","🫡","💀"],ha=4e3,E=Object.values(u).sort((d,y)=>d.joinedAt-y.joinedAt),z=l?t.current===l.hostId:!1,Y=u[t.current],Ci=E.length>0&&E.every(d=>d.hasSeenWord),Ei=E.length>0&&E.every(d=>d.vote!=="");N.useEffect(()=>{localStorage.setItem(vr,JSON.stringify(J))},[J]),N.useEffect(()=>{if(Ct){i(Ct);return}try{const d=wd();i(d)}catch(d){console.error("Firebase init failed:",d)}},[]),N.useEffect(()=>()=>{R.current.forEach(d=>d())},[]),N.useEffect(()=>{if(!s||!_||!a)return;R.current.forEach(I=>I()),R.current=[];const d=zt(A(s,`rooms/${a}/state`),I=>{I.exists()?f(I.val()):(g(!1),f(null),p({}),c(""))}),y=zt(A(s,`rooms/${a}/players`),I=>{p(I.exists()?I.val():{})}),w=zt(A(s,`rooms/${a}/clues`),I=>{ra(I.exists()?I.val():{})}),v=zt(A(s,`rooms/${a}/reactions`),I=>{if(!I.exists()){vi([]);return}const b=Object.values(I.val());vi(b.sort((j,de)=>j.sentAt-de.sentAt))});return R.current=[d,y,w,v],()=>{d(),y(),w(),v()}},[s,_,a]),N.useEffect(()=>{!s||!l||l.status!=="revealing"||!z||!Ci||oe(A(s,`rooms/${a}/state`),{status:"discussing",turnIdx:0,turnEndsAt:Date.now()+l.turnSeconds*1e3})},[Ci,l==null?void 0:l.status,z,s,a]),N.useEffect(()=>{!s||!l||l.status!=="voting"||!z||!Ei||oe(A(s,`rooms/${a}/state`),{status:"results"})},[Ei,l==null?void 0:l.status,z,s,a]),N.useEffect(()=>{if(!l||l.status!=="discussing")return;const d=setInterval(()=>oa(y=>y+1),500);return()=>clearInterval(d)},[l==null?void 0:l.status]),N.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!z)return;const{turnIdx:d,turnEndsAt:y,turnSeconds:w,rotationCount:v}=l,I=E.length*v;if(d>=I)return;const b=Math.max(0,y-Date.now())+150,j=setTimeout(async()=>{if((await mt(A(s,`rooms/${a}/state/turnIdx`))).val()!==d)return;(await mt(A(s,`rooms/${a}/clues/${d}`))).exists()||await $e(A(s,`rooms/${a}/clues/${d}`),"⏱ (time ran out)");const ye=d+1,ve={[`rooms/${a}/state/turnIdx`]:ye};ye<I&&(ve[`rooms/${a}/state/turnEndsAt`]=Date.now()+w*1e3),await oe(A(s,"/"),ve)},b);return()=>clearTimeout(j)},[l==null?void 0:l.turnIdx,l==null?void 0:l.turnEndsAt,l==null?void 0:l.status,z,s,a,E.length]),N.useEffect(()=>{if(!s||!l||l.status!=="discussing"||!z)return;const{gameStartsAt:d,gameDurationMinutes:y,rotationCount:w}=l;if(!d||y<=0)return;const v=E.length*w;if(l.turnIdx>=v)return;const I=d+y*60*1e3,b=Math.max(0,I-Date.now())+200,j=setTimeout(async()=>{((await mt(A(s,`rooms/${a}/state/turnIdx`))).val()??0)>=v||await oe(A(s,`rooms/${a}/state`),{turnIdx:v})},b);return()=>clearTimeout(j)},[l==null?void 0:l.gameStartsAt,l==null?void 0:l.status,z,s,a,E.length,l==null?void 0:l.rotationCount]),N.useEffect(()=>{const d=Object.keys(yi.current),y=Object.keys(Re).find(v=>!d.includes(v));if(yi.current={...Re},!y)return;gi(y);const w=setTimeout(()=>gi(null),2e3);return()=>clearTimeout(w)},[Re]),N.useEffect(()=>{An("")},[l==null?void 0:l.turnIdx]);const bi=async()=>{if(!s||!Bt.trim()){$t("Enter your name.");return}if(J.length===0){$t("No word pairs! Add some words first.");return}ni(!0),$t("");try{const d=Ed(),y=Date.now(),w={status:"lobby",hostId:t.current,realWord:"",imposterWord:"",imposterPlayerId:"",createdAt:y,turnIdx:0,turnEndsAt:0,turnSeconds:30,gameDurationMinutes:10,rotationCount:1,roundCount:3,currentRound:1,gameStartsAt:0},v={id:t.current,name:Bt.trim(),joinedAt:y,hasSeenWord:!1,vote:"",isHost:!0};await $e(A(s,`rooms/${d}`),{state:w,players:{[t.current]:v}}),yr(A(s,`rooms/${d}`)).remove(),c(d),g(!0)}catch(d){$t(d instanceof Error?d.message:"Failed to create room.")}finally{ni(!1)}},wi=async()=>{if(!s)return;const d=B.trim().toUpperCase();if(!d||!ue.trim()){lt("Fill in both fields.");return}Zs(!0),lt("");try{const y=await mt(A(s,`rooms/${d}/state`));if(!y.exists()){lt("Room not found. Check the code.");return}if(y.val().status!=="lobby"){lt("Game already started.");return}const v={id:t.current,name:ue.trim(),joinedAt:Date.now(),hasSeenWord:!1,vote:"",isHost:!1};await $e(A(s,`rooms/${d}/players/${t.current}`),v),yr(A(s,`rooms/${d}/players/${t.current}`)).remove(),c(d),g(!0)}catch(y){lt(y instanceof Error?y.message:"Failed to join.")}finally{Zs(!1)}},ua=async()=>{if(!s||!z||E.length<3)return;const d=J[Math.floor(Math.random()*J.length)],y=E[Math.floor(Math.random()*E.length)].id;await oe(A(s,`rooms/${a}/state`),{status:"revealing",realWord:d.realWord,imposterWord:d.imposterWord,imposterPlayerId:y,turnSeconds:ci,gameDurationMinutes:ui,rotationCount:fi,roundCount:mi,currentRound:1,gameStartsAt:Date.now(),turnIdx:0,turnEndsAt:0})},da=()=>{s&&oe(A(s,`rooms/${a}/players/${t.current}`),{hasSeenWord:!0})},fa=()=>{!s||!z||oe(A(s,`rooms/${a}/state`),{status:"voting"})},pa=d=>{!s||Y!=null&&Y.vote||oe(A(s,`rooms/${a}/players/${t.current}`),{vote:d})},Ni=async()=>{if(!s||!z||!l)return;const d=(l.currentRound||1)+1,y=d>(l.roundCount||3),w={[`rooms/${a}/state/status`]:"lobby",[`rooms/${a}/state/realWord`]:"",[`rooms/${a}/state/imposterWord`]:"",[`rooms/${a}/state/imposterPlayerId`]:"",[`rooms/${a}/state/turnIdx`]:0,[`rooms/${a}/state/turnEndsAt`]:0,[`rooms/${a}/state/currentRound`]:y?1:d,[`rooms/${a}/clues`]:null};E.forEach(v=>{w[`rooms/${a}/players/${v.id}/hasSeenWord`]=!1,w[`rooms/${a}/players/${v.id}/vote`]=""}),await oe(A(s,"/"),w)},Ii=async()=>{if(!s||!l)return;const d=E.length*l.rotationCount,y=E[l.turnIdx%E.length];if(!y||y.id!==t.current)return;const w=l.turnIdx;if(await $e(A(s,`rooms/${a}/clues/${w}`),li.trim()||"(skipped)"),An(""),(await mt(A(s,`rooms/${a}/state/turnIdx`))).val()!==w)return;const I=w+1,b={[`rooms/${a}/state/turnIdx`]:I};I<d&&(b[`rooms/${a}/state/turnEndsAt`]=Date.now()+l.turnSeconds*1e3),await oe(A(s,"/"),b)},ma=async d=>{if(!s||!a||!Y)return;const y=Yt(),w={id:y,pid:t.current,name:Y.name,emoji:d,sentAt:Date.now()};await $e(A(s,`rooms/${a}/reactions/${y}`),w),setTimeout(()=>qn(A(s,`rooms/${a}/reactions/${y}`)),ha+500)},On=()=>h.jsx("div",{className:"gi-reaction-bar",children:ca.map(d=>h.jsx("button",{className:"gi-reaction-btn",onClick:()=>ma(d),children:d},d))}),Mn=()=>h.jsx("div",{className:"gi-reaction-overlay","aria-hidden":!0,children:la.map(d=>h.jsxs("div",{className:"gi-reaction-float",style:{left:`${d.sentAt%1e3/10+5}%`},children:[h.jsx("span",{className:"gi-reaction-emoji",children:d.emoji}),h.jsx("span",{className:"gi-reaction-label",children:d.name})]},d.id))}),xi=async()=>{!s||!a||(R.current.forEach(d=>d()),R.current=[],z?await qn(A(s,`rooms/${a}`)):await qn(A(s,`rooms/${a}/players/${t.current}`)),g(!1),f(null),p({}),c(""))},jn=()=>{!Sn.trim()||!Tn.trim()||(xn(d=>[...d,{id:Yt(),realWord:Sn.trim(),imposterWord:Tn.trim()}]),si(""),ii(""))},_a=async()=>{var d,y,w,v;if(!Ut.trim()){Rn("Enter a Groq API key.");return}oi(!0),Rn("");try{const I=`Generate ${kn} word pairs for a "Guess the Imposter" party game.
Rules:
- "realWord" is what most players receive
- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)
- Both words must be real, common English words
- They should be close enough that clues overlap but different enough to eventually expose the imposter
- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}
- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}
Return ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`,b=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Ut}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:I}],temperature:.8})});if(!b.ok){const re=await b.json();throw new Error(((d=re==null?void 0:re.error)==null?void 0:d.message)||`HTTP ${b.status}`)}const ge=(((v=(w=(y=(await b.json()).choices)==null?void 0:y[0])==null?void 0:w.message)==null?void 0:v.content)??"").match(/\[[\s\S]*\]/);if(!ge)throw new Error("Unexpected AI response format.");const ye=JSON.parse(ge[0]),ve=re=>re.charAt(0).toUpperCase()+re.slice(1);xn(re=>[...re,...ye.map(Ht=>({id:Yt(),realWord:ve(Ht.realWord),imposterWord:ve(Ht.imposterWord)}))]),localStorage.setItem(Er,Ut)}catch(I){Rn(I instanceof Error?I.message:"Failed to generate.")}finally{oi(!1)}},ga=()=>{const d={};E.forEach(b=>{b.vote&&(d[b.vote]=(d[b.vote]||0)+1)});const y=Math.max(...Object.values(d),0),w=Object.entries(d).filter(([,b])=>b===y).map(([b])=>b),v=l?u[l.imposterPlayerId]:void 0,I=v?w.includes(v.id):!1;return{tally:d,imposter:v,caught:I}},Si=`${window.location.origin}${window.location.pathname}?room=${a}`,ya=()=>navigator.clipboard.writeText(Si),va=()=>navigator.clipboard.writeText(a);if(!_&&r==="home")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-menu",children:[h.jsx("img",{src:Na,className:"imposter-logo",alt:"eGov Logo"}),h.jsx("h1",{className:"imposter-title",children:"Guess the Imposter"}),h.jsx("p",{className:"imposter-subtitle",children:"One player has a different word — can the group find them?"}),h.jsxs("div",{className:"imposter-menu-buttons",children:[h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:()=>o("creating"),children:"🏠 Create Room"}),h.jsx("button",{className:"gi-btn gi-btn--secondary",onClick:()=>{he((e.get("room")||"").toUpperCase()),o("joining")},children:"🚪 Join Room"}),h.jsxs("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("word-manager"),children:["📝 Manage Words ",h.jsx("span",{className:"gi-badge",children:J.length})]})]}),h.jsx("div",{className:"gi-footer-links",children:h.jsx("button",{className:"gi-back-link",onClick:()=>n("/eGov-Game/main-page"),children:"← Back to Games"})})]})});if(!_&&r==="creating")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Create Room"})]}),h.jsx("label",{className:"gi-label",children:"Your Name (as host)"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:Bt,onChange:d=>na(d.target.value),onKeyDown:d=>d.key==="Enter"&&bi(),autoFocus:!0}),J.length===0?h.jsxs("div",{className:"gi-warning",children:["No word pairs! ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Add words first →"})]}):h.jsxs("p",{className:"gi-hint",style:{marginTop:"0.25rem"},children:[J.length," word pair",J.length!==1?"s":""," ready."," ",h.jsx("button",{className:"gi-text-btn",onClick:()=>o("word-manager"),children:"Manage"})]}),ei&&h.jsx("p",{className:"gi-error",children:ei}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:bi,disabled:ti||!Bt.trim()||J.length===0,children:ti?"Creating…":"Create Room →"})]})]})});if(!_&&r==="joining")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-setup-card",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Join Room"})]}),h.jsx("label",{className:"gi-label",children:"Room Code"}),h.jsx("input",{className:"gi-input gi-input--code",style:{width:"100%",boxSizing:"border-box"},placeholder:"XXXXXX",maxLength:6,value:B,onChange:d=>he(d.target.value.toUpperCase())}),h.jsx("label",{className:"gi-label",style:{marginTop:"0.75rem"},children:"Your Name"}),h.jsx("input",{className:"gi-input",style:{width:"100%",boxSizing:"border-box"},placeholder:"Enter your name",value:ue,onChange:d=>at(d.target.value),onKeyDown:d=>d.key==="Enter"&&wi()}),Wt&&h.jsx("p",{className:"gi-error",children:Wt}),h.jsxs("div",{className:"setup-actions",style:{marginTop:"1rem"},children:[h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:()=>o("home"),children:"Cancel"}),h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:wi,disabled:Xs||!B.trim()||!ue.trim(),children:Xs?"Joining…":"Join →"})]})]})});if(r==="word-manager")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-word-manager",children:[h.jsxs("div",{className:"gi-screen-header",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>o("home"),children:"←"}),h.jsx("h2",{children:"Word Pairs"}),h.jsx("span",{className:"gi-badge gi-badge--large",children:J.length})]}),h.jsxs("div",{className:"wm-add-form",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Real word (most players)",value:Sn,onChange:d=>si(d.target.value),onKeyDown:d=>d.key==="Enter"&&jn()}),h.jsx("span",{className:"wm-vs",children:"⇄"}),h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Imposter word",value:Tn,onChange:d=>ii(d.target.value),onKeyDown:d=>d.key==="Enter"&&jn()}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:jn,children:"Add"})]}),h.jsxs("div",{className:"wm-ai-section",children:[h.jsx("div",{className:"wm-ai-label",children:"✨ AI Generate (Gemini)"}),h.jsxs("div",{className:"wm-ai-controls",children:[h.jsx("input",{className:"gi-input gi-input--flex",type:"password",placeholder:"Groq API key",value:Ut,onChange:d=>sa(d.target.value)}),h.jsx("input",{className:"gi-input gi-input--num",type:"number",min:1,max:20,value:kn,onChange:d=>ia(Math.max(1,Math.min(20,Number(d.target.value))))}),h.jsx("button",{className:"gi-btn gi-btn--ai",onClick:_a,disabled:ri,children:ri?"Generating…":`Generate ${kn}`})]}),ai&&h.jsx("p",{className:"gi-error",children:ai}),h.jsxs("p",{className:"gi-hint",children:["Get a free key at ",h.jsx("span",{className:"gi-hint-strong",children:"aistudio.google.com"})]})]}),h.jsxs("div",{className:"wm-list",children:[J.length===0&&h.jsx("p",{className:"wm-empty",children:"No pairs yet."}),J.map(d=>h.jsxs("div",{className:"wm-pair-row",children:[h.jsx("span",{className:"wm-real",children:d.realWord}),h.jsx("span",{className:"wm-arrow",children:"⇄"}),h.jsx("span",{className:"wm-imposter",children:d.imposterWord}),h.jsx("button",{className:"wm-delete-btn",onClick:()=>xn(y=>y.filter(w=>w.id!==d.id)),children:"✕"})]},d.id))]})]})});if(!_||!l)return null;if(l.status==="lobby")return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card gi-lobby-card",children:[h.jsxs("div",{className:"gi-lobby-header",children:[h.jsxs("div",{children:[h.jsx("div",{className:"gi-room-label",children:"Room Code"}),h.jsx("div",{className:"gi-room-code",onClick:va,title:"Click to copy",children:a})]}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:xi,children:z?"Close Room":"Leave"})]}),h.jsxs("div",{className:"gi-share-row",children:[h.jsx("span",{className:"gi-share-url",children:Si}),h.jsx("button",{className:"gi-btn gi-btn--ghost gi-btn--sm",onClick:ya,children:"Copy Link"})]}),h.jsxs("div",{className:"gi-lobby-players-label",children:["Players ",h.jsx("span",{className:"gi-badge",children:E.length}),E.length<3&&h.jsx("span",{className:"gi-hint",style:{marginLeft:"0.5rem"},children:"Need at least 3"})]}),h.jsxs("div",{className:"gi-player-list",children:[E.map(d=>h.jsxs("div",{className:`gi-player-chip${d.id===t.current?" gi-player-chip--me":""}`,children:[d.isHost&&h.jsx("span",{className:"gi-host-badge",children:"HOST"}),d.name,d.id===t.current&&h.jsx("span",{style:{opacity:.5,fontSize:"0.75rem"},children:" (you)"})]},d.id)),E.length===0&&h.jsx("p",{className:"wm-empty",children:"Waiting for players…"})]}),z?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-config-grid",children:[h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"⏱ Secs per turn"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>hi(d=>Math.max(10,d-5)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[ci,"s"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>hi(d=>Math.min(120,d+5)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🕐 Game duration"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>di(d=>Math.max(1,d-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[ui,"m"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>di(d=>Math.min(60,d+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🔄 Rotations"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>pi(d=>Math.max(1,d-1)),children:"−"}),h.jsxs("span",{className:"gi-turn-config-value",children:[fi,"×"]}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>pi(d=>Math.min(5,d+1)),children:"+"})]})]}),h.jsxs("div",{className:"gi-turn-config",children:[h.jsx("span",{className:"gi-turn-config-label",children:"🏆 Rounds"}),h.jsxs("div",{className:"gi-turn-config-controls",children:[h.jsx("button",{className:"gi-icon-btn",onClick:()=>_i(d=>Math.max(1,d-1)),children:"−"}),h.jsx("span",{className:"gi-turn-config-value",children:mi}),h.jsx("button",{className:"gi-icon-btn",onClick:()=>_i(d=>Math.min(10,d+1)),children:"+"})]})]})]}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",style:{width:"100%",marginTop:"0.5rem"},disabled:E.length<3,onClick:ua,children:E.length<3?`Need ${3-E.length} more player${3-E.length!==1?"s":""}`:"Start Game →"})]}):h.jsx("div",{className:"gi-waiting-banner",children:"⏳ Waiting for host to start the game…"})]})});if(l.status==="revealing"){const d=t.current===l.imposterPlayerId,y=d?l.imposterWord:l.realWord,w=(Y==null?void 0:Y.hasSeenWord)||!1,v=E.filter(de=>de.hasSeenWord).length,I=l.gameStartsAt?Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3)):l.gameDurationMinutes*60,b=Math.floor(I/60),j=I%60;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-reveal",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),h.jsxs("div",{className:"gi-game-timer",children:["🕐 ",b,":",String(j).padStart(2,"0")]})]}),h.jsx("h2",{className:"gi-phase-title",children:"Your Secret Word"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Private — don't show other screens!"}),w?h.jsx("div",{className:"reveal-card reveal-card--visible",children:h.jsxs("div",{className:"reveal-card__back",children:[h.jsx("div",{className:"reveal-word-label",children:"Your word is:"}),h.jsx("div",{className:"reveal-word",children:y}),h.jsx("p",{className:`reveal-role-hint${d?" reveal-role-hint--imposter":""}`,children:d?"🕵️ You are the IMPOSTER — blend in!":"✅ Give clues without saying the word!"})]})}):h.jsx("div",{className:"reveal-card reveal-card--tap-me",onClick:da,children:h.jsxs("div",{className:"reveal-card__front",children:[h.jsx("div",{className:"reveal-player-num",children:Y?Y.name[0].toUpperCase():"?"}),h.jsx("div",{className:"reveal-player-name",children:Y==null?void 0:Y.name}),h.jsx("div",{className:"reveal-tap-badge",children:"👆 Tap to reveal"}),h.jsx("p",{className:"reveal-tap-hint",children:"Your secret word is hidden — tap to see it!"})]})}),h.jsxs("div",{className:"gi-seen-progress",children:[h.jsxs("span",{className:"gi-hint",children:[v," / ",E.length," players ready"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${v/E.length*100}%`}})})]})]})})}if(l.status==="discussing"){const{turnIdx:d,turnEndsAt:y,turnSeconds:w,rotationCount:v}=l,I=E.length*v,b=d>=I,j=b?null:E[d%E.length],de=(j==null?void 0:j.id)===t.current,ge=b?0:Math.max(0,Math.floor((y-Date.now())/1e3)),ye=36,ve=2*Math.PI*ye,re=w>0?ge/w:0,Ht=ve*(1-re),Ca=ge<=5&&ge>0;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-discuss",children:[h.jsxs("div",{className:"gi-game-topbar",children:[h.jsxs("div",{className:"gi-round-badge",children:["Round ",l.currentRound," / ",l.roundCount]}),l.gameStartsAt>0&&(()=>{const ee=Math.max(0,Math.floor(l.gameDurationMinutes*60-(Date.now()-l.gameStartsAt)/1e3));return h.jsxs("div",{className:`gi-game-timer${ee<=60?" gi-game-timer--low":""}`,children:["🕐 ",Math.floor(ee/60),":",String(ee%60).padStart(2,"0")]})})()]}),b?h.jsxs("div",{className:"gi-all-done-banner",children:[h.jsx("div",{className:"gi-all-done-icon",children:"✅"}),h.jsx("div",{className:"gi-all-done-text",children:"All clues in!"}),z?h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--lg",onClick:fa,children:"Start Voting →"}):h.jsx("p",{className:"gi-hint",children:"Waiting for host to start voting…"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"gi-turn-header",children:[h.jsx("div",{className:"gi-turn-player-name",children:de?"🎤 Your turn!":`🎤 ${j==null?void 0:j.name}'s turn`}),h.jsxs("svg",{className:"gi-countdown-svg",width:"88",height:"88",viewBox:"0 0 88 88",children:[h.jsx("circle",{cx:"44",cy:"44",r:ye,fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),h.jsx("circle",{cx:"44",cy:"44",r:ye,fill:"none",stroke:Ca?"#ef4444":"#6366f1",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:ve,strokeDashoffset:Ht,transform:"rotate(-90 44 44)",style:{transition:"stroke-dashoffset 0.3s linear, stroke 0.3s"}}),h.jsx("text",{x:"44",y:"50",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:ge})]})]}),de?h.jsxs("div",{className:"gi-my-turn-input",children:[h.jsx("p",{className:"gi-hint",style:{marginBottom:"0.5rem"},children:"Give a clue related to your word — don't say it directly!"}),h.jsxs("div",{className:"gi-clue-input-row",children:[h.jsx("input",{className:"gi-input gi-input--flex",placeholder:"Type your clue…",value:li,onChange:ee=>An(ee.target.value),onKeyDown:ee=>ee.key==="Enter"&&Ii(),autoFocus:!0,maxLength:80}),h.jsx("button",{className:"gi-btn gi-btn--primary gi-btn--sm",onClick:Ii,children:"Submit →"})]})]}):h.jsxs("div",{className:"gi-waiting-banner",style:{marginTop:0},children:["⏳ Waiting for ",j==null?void 0:j.name," to give a clue…"]})]}),Object.keys(Re).length>0&&h.jsxs("div",{className:"gi-clue-list",children:[h.jsx("div",{className:"gi-clue-list-title",children:"Clues Given"}),Array.from({length:d},(ee,te)=>{const ct=Re[String(te)],ht=E[te%E.length];return!ct||!ht?null:h.jsxs("div",{className:`gi-clue-item${aa===String(te)?" gi-clue-item--new":""}`,children:[h.jsx("span",{className:"gi-clue-player",children:ht.name}),h.jsxs("span",{className:"gi-clue-text",children:['"',ct,'"']})]},te)})]}),h.jsxs("div",{className:"gi-turn-footer",children:[v>1&&h.jsxs("div",{className:"gi-rotation-indicator",children:[Array.from({length:v},(ee,te)=>h.jsx("span",{className:`gi-rot-dot${b||Math.floor(d/E.length)>te?" gi-rot-dot--done":Math.floor(d/E.length)===te?" gi-rot-dot--current":""}`},te)),h.jsx("span",{className:"gi-rotation-label",children:b?"All rotations done":`Rotation ${Math.floor(d/E.length)+1} / ${v}`})]}),h.jsx("div",{className:"reveal-progress",children:E.map((ee,te)=>{const ct=d%E.length,ht=!b&&te===ct,Ea=!ht&&(b||te<ct);return h.jsx("div",{className:`reveal-dot${Ea?" reveal-dot--done":ht?" reveal-dot--current":""}`},ee.id)})})]}),h.jsx(On,{}),h.jsx(Mn,{})]})})}if(l.status==="voting"){const d=(Y==null?void 0:Y.vote)||"",y=E.filter(w=>w.vote!=="").length;return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-vote",children:[h.jsx("h2",{className:"gi-phase-title",children:"🗳 Vote"}),h.jsx("p",{className:"gi-phase-subtitle",children:"Who do you think is the imposter?"}),d?h.jsxs("div",{className:"gi-voted-confirmation",children:[h.jsx("div",{className:"gi-voted-icon",children:"✅"}),h.jsxs("div",{className:"gi-voted-text",children:["You voted for ",h.jsx("strong",{children:((Ti=u[d])==null?void 0:Ti.name)??"?"})]})]}):h.jsx("div",{className:"vote-options",children:E.filter(w=>w.id!==t.current).map(w=>h.jsx("button",{className:"vote-option-btn",onClick:()=>pa(w.id),children:w.name},w.id))}),h.jsxs("div",{className:"gi-seen-progress",style:{marginTop:"1rem"},children:[h.jsxs("span",{className:"gi-hint",children:[y," / ",E.length," votes submitted"]}),h.jsx("div",{className:"gi-progress-bar",children:h.jsx("div",{className:"gi-progress-fill",style:{width:`${y/E.length*100}%`}})})]}),h.jsx(On,{}),h.jsx(Mn,{})]})})}if(l.status==="results"){const{tally:d,imposter:y,caught:w}=ga();return h.jsx("div",{className:"imposter-container",children:h.jsxs("div",{className:"imposter-card imposter-result",children:[h.jsx("div",{className:`result-banner${w?" result-banner--success":" result-banner--fail"}`,children:w?"🎉 Imposter Caught!":"😈 Imposter Wins!"}),h.jsx("div",{className:"result-imposter-section",children:h.jsxs("div",{className:"result-imposter-card",children:[h.jsx("div",{className:"result-label",children:"The Imposter was"}),h.jsx("div",{className:"result-imposter-name",children:(y==null?void 0:y.name)??"?"})]})}),h.jsxs("div",{className:"result-words-row",children:[h.jsxs("div",{className:"result-word-card result-word-card--real",children:[h.jsx("div",{className:"result-word-label",children:"Real Word"}),h.jsx("div",{className:"result-word-value",children:l.realWord})]}),h.jsx("span",{className:"wm-arrow",style:{fontSize:"1.5rem"},children:"⇄"}),h.jsxs("div",{className:"result-word-card result-word-card--imposter",children:[h.jsx("div",{className:"result-word-label",children:"Imposter Word"}),h.jsx("div",{className:"result-word-value",children:l.imposterWord})]})]}),h.jsxs("div",{className:"result-votes",children:[h.jsx("h3",{className:"result-votes-title",children:"Vote Results"}),E.map(v=>{const I=d[v.id]||0,b=E.filter(j=>j.vote===v.id);return h.jsx("div",{className:"vote-tally-row",children:h.jsxs("div",{className:"tally-row-top",children:[h.jsxs("span",{className:`tally-name${v.id===l.imposterPlayerId?" tally-name--imposter":""}`,children:[v.name," ",v.id===l.imposterPlayerId?"🕵️":""]}),h.jsx("div",{className:"tally-bar-bg",children:h.jsx("div",{className:"tally-bar",style:{width:`${I/Math.max(E.length-1,1)*100}%`}})}),h.jsx("span",{className:"tally-count",children:I}),b.length>0&&h.jsxs("button",{className:"tally-voters-btn",onClick:()=>Pn(v.id),children:[I," voted"]})]})},v.id)})]}),Dn&&(()=>{const v=u[Dn],I=E.filter(b=>b.vote===Dn);return h.jsx("div",{className:"gi-modal-backdrop",onClick:()=>Pn(null),children:h.jsxs("div",{className:"gi-modal",onClick:b=>b.stopPropagation(),children:[h.jsxs("div",{className:"gi-modal-title",children:["Voted for ",v==null?void 0:v.name]}),h.jsx("div",{className:"gi-modal-voter-list",children:I.map(b=>h.jsxs("div",{className:"gi-modal-voter-row",children:[h.jsx("span",{className:"gi-modal-voter-avatar",children:b.name[0].toUpperCase()}),h.jsx("span",{className:"gi-modal-voter-name",children:b.name})]},b.id))}),h.jsx("button",{className:"gi-btn gi-btn--ghost",style:{width:"100%",marginTop:"0.75rem"},onClick:()=>Pn(null),children:"Close"})]})})})(),Object.keys(Re).length>0&&h.jsxs("div",{className:"result-clue-summary",children:[h.jsx("h3",{className:"result-votes-title",children:"💬 Clues Given"}),E.map(v=>{const I=Object.entries(Re).filter(([b])=>{var j;return((j=E[Number(b)%E.length])==null?void 0:j.id)===v.id}).map(([,b])=>b);return I.length===0?null:h.jsxs("div",{className:"result-clue-player",children:[h.jsxs("span",{className:"result-clue-player-name",children:[v.name,":"]}),h.jsx("div",{className:"result-clue-chips",children:I.map((b,j)=>h.jsxs("span",{className:"result-clue-chip",children:['"',b,'"']},j))})]},v.id)})]}),z?h.jsxs("div",{className:"result-actions",children:[l.currentRound<l.roundCount?h.jsxs("button",{className:"gi-btn gi-btn--primary",onClick:Ni,children:["Next Round (",l.currentRound+1," / ",l.roundCount,") →"]}):h.jsx("button",{className:"gi-btn gi-btn--primary",onClick:Ni,children:"Play Again"}),h.jsx("button",{className:"gi-btn gi-btn--ghost",onClick:xi,children:"Close Room"})]}):h.jsx("div",{className:"gi-waiting-banner",style:{marginTop:"0.5rem"},children:"⏳ Waiting for host to start next round…"}),h.jsx(On,{}),h.jsx(Mn,{})]})})}return null}export{Id as default};
