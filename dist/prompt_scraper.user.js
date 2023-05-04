// ==UserScript==
// @name        Prompt Scraper - civitai.com
// @namespace   Violentmonkey Scripts
// @match       https://civitai.com/*
// @run-at      document-end
//
// @version     1.0
// @author      Watanabe, Shunsuke
// @description 2023/4/28 16:00:07
// ==/UserScript==
//

(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
// import html2canvas from "html2canvas";
const $a5923d2edfc72bc5$export$fd4d27a26b4854f3 = `
 display: flex;
 justify-content: center;
 align-items: center;
 color: white;
 background-color: #228be6;
 height: 36px;
 border-radius: 4px;
 font-weight: bold;
 font-size: small;
 cursor: pointer;
 word-break: keep-all;
`;
const $a5923d2edfc72bc5$export$dbe9a8011f5e5b2d = `
 display: flex;
 justify-content: center;
 align-items: center;
 color: white;
 background-color: grey;
 disable: true;
 height: 36px;
 border-radius: 4px;
 font-weight: bold;
 font-size: small;
 cursor: none;
 word-break: keep-all;
`;


var $7bca1b586ae97c45$exports = {};
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ (function(global, factory) {
    $7bca1b586ae97c45$exports = factory();
})($7bca1b586ae97c45$exports, function() {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for(var s, i = 1, n = arguments.length; i < n; i++){
                s = arguments[i];
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) {
            for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }
    var Bounds = /** @class */ function() {
        function Bounds(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
        }
        Bounds.prototype.add = function(x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
        };
        Bounds.fromClientRect = function(context, clientRect) {
            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
        };
        Bounds.fromDOMRectList = function(context, domRectList) {
            var domRect = Array.from(domRectList).find(function(rect) {
                return rect.width !== 0;
            });
            return domRect ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds.EMPTY;
        };
        Bounds.EMPTY = new Bounds(0, 0, 0, 0);
        return Bounds;
    }();
    var parseBounds = function(context, node) {
        return Bounds.fromClientRect(context, node.getBoundingClientRect());
    };
    var parseDocumentSize = function(document1) {
        var body = document1.body;
        var documentElement = document1.documentElement;
        if (!body || !documentElement) throw new Error("Unable to get document size");
        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
        return new Bounds(0, 0, width, height);
    };
    /*
     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var toCodePoints$1 = function(str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while(i < length){
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                else {
                    codePoints.push(value);
                    i--;
                }
            } else codePoints.push(value);
        }
        return codePoints;
    };
    var fromCodePoint$1 = function() {
        var codePoints = [];
        for(var _i = 0; _i < arguments.length; _i++)codePoints[_i] = arguments[_i];
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, codePoints);
        var length = codePoints.length;
        if (!length) return "";
        var codeUnits = [];
        var index = -1;
        var result = "";
        while(++index < length){
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) codeUnits.push(codePoint);
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$2 = 0; i$2 < chars$2.length; i$2++)lookup$2[chars$2.charCodeAt(i$2)] = i$2;
    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++)lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    var decode$1 = function(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for(i = 0; i < len; i += 4){
            encoded1 = lookup$1$1[base64.charCodeAt(i)];
            encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
    };
    var polyUint16Array$1 = function(buffer) {
        var length = buffer.length;
        var bytes = [];
        for(var i = 0; i < length; i += 2)bytes.push(buffer[i + 1] << 8 | buffer[i]);
        return bytes;
    };
    var polyUint32Array$1 = function(buffer) {
        var length = buffer.length;
        var bytes = [];
        for(var i = 0; i < length; i += 4)bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
        return bytes;
    };
    /** Shift size for getting the index-2 table offset. */ var UTRIE2_SHIFT_2$1 = 5;
    /** Shift size for getting the index-1 table offset. */ var UTRIE2_SHIFT_1$1 = 11;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */ var UTRIE2_INDEX_SHIFT$1 = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */ var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */ var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
    /** Number of entries in a data block. 32=0x20 */ var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
    /** Mask for getting the lower bits for the in-data-block offset. */ var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
    /** Count the lengths of both BMP pieces. 2080=0x820 */ var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */ var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 32; /* U+0800 is the first code point after 2-byte UTF-8 */ 
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */ var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */ var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
    /** Number of entries in an index-2 block. 64=0x40 */ var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
    /** Mask for getting the lower bits for the in-index-2-block offset. */ var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
    var slice16$1 = function(view, start, end) {
        if (view.slice) return view.slice(start, end);
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32$1 = function(view, start, end) {
        if (view.slice) return view.slice(start, end);
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64$1 = function(base64, _byteLength) {
        var buffer = decode$1(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie$1 = /** @class */ function() {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */ Trie.prototype.get = function(codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 0xd800 >> UTRIE2_SHIFT_2$1)];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) return this.data[this.highValueIndex];
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }();
    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$3 = 0; i$3 < chars$3.length; i$3++)lookup$3[chars$3.charCodeAt(i$3)] = i$3;
    var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
    var LETTER_NUMBER_MODIFIER = 50;
    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR$1 = 2; //  Cause a line break (after), except between CR and LF
    var LF$1 = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
    var ea_OP = [
        0x2329,
        0xff08
    ];
    var BREAK_MANDATORY = "!";
    var BREAK_NOT_ALLOWED$1 = "\xd7";
    var BREAK_ALLOWED$1 = "\xf7";
    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
    var ALPHABETICS = [
        AL,
        HL
    ];
    var HARD_LINE_BREAKS = [
        BK,
        CR$1,
        LF$1,
        NL
    ];
    var SPACE$1 = [
        SP,
        ZW
    ];
    var PREFIX_POSTFIX = [
        PR,
        PO
    ];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
    var KOREAN_SYLLABLE_BLOCK = [
        JL,
        JV,
        JT,
        H2,
        H3
    ];
    var HYPHEN = [
        HY,
        BA
    ];
    var codePointsToCharacterClasses = function(codePoints, lineBreak) {
        if (lineBreak === void 0) lineBreak = "strict";
        var types = [];
        var indices = [];
        var categories = [];
        codePoints.forEach(function(codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            } else categories.push(false);
            if ([
                "normal",
                "auto",
                "loose"
            ].indexOf(lineBreak) !== -1) // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            {
                if ([
                    0x2010,
                    0x2013,
                    0x301c,
                    0x30a0
                ].indexOf(codePoint) !== -1) {
                    indices.push(index);
                    return types.push(CB);
                }
            }
            if (classType === CM || classType === ZWJ$1) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indices.push(index);
                    return types.push(AL);
                }
                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indices.push(indices[index - 1]);
                    return types.push(prev);
                }
                indices.push(index);
                return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) return types.push(lineBreak === "strict" ? NS : ID);
            if (classType === SA) return types.push(AL);
            if (classType === AI) return types.push(AL);
            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) return types.push(ID);
                else return types.push(AL);
            }
            types.push(classType);
        });
        return [
            indices,
            types,
            categories
        ];
    };
    var isAdjacentWithSpaceIgnored = function(a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while(i <= classTypes.length){
                i++;
                var next = classTypes[i];
                if (next === b) return true;
                if (next !== SP) break;
            }
        }
        if (current === SP) {
            var i = currentIndex;
            while(i > 0){
                i--;
                var prev = classTypes[i];
                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while(n <= classTypes.length){
                        n++;
                        var next = classTypes[n];
                        if (next === b) return true;
                        if (next !== SP) break;
                    }
                }
                if (prev !== SP) break;
            }
        }
        return false;
    };
    var previousNonSpaceClassType = function(currentIndex, classTypes) {
        var i = currentIndex;
        while(i >= 0){
            var type = classTypes[i];
            if (type === SP) i--;
            else return type;
        }
        return 0;
    };
    var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) return BREAK_NOT_ALLOWED$1;
        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) return BREAK_NOT_ALLOWED$1;
        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];
        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];
        if (current === CR$1 && next === LF$1) return BREAK_NOT_ALLOWED$1;
        if (HARD_LINE_BREAKS.indexOf(current) !== -1) return BREAK_MANDATORY;
        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB7 Do not break before spaces or zero width space.
        if (SPACE$1.indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) return BREAK_ALLOWED$1;
        // LB8a Do not break after a zero width joiner.
        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) return BREAK_NOT_ALLOWED$1;
        // zwj emojis
        if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) return BREAK_NOT_ALLOWED$1;
        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) return BREAK_NOT_ALLOWED$1;
        // LB12 Do not break after NBSP and related characters.
        if (current === GL) return BREAK_NOT_ALLOWED$1;
        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([
            SP,
            BA,
            HY
        ].indexOf(current) === -1 && next === GL) return BREAK_NOT_ALLOWED$1;
        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([
            CL,
            CP,
            EX,
            IS,
            SY
        ].indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) return BREAK_NOT_ALLOWED$1;
        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) return BREAK_NOT_ALLOWED$1;
        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([
            CL,
            CP
        ], NS, currentIndex, classTypes)) return BREAK_NOT_ALLOWED$1;
        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) return BREAK_NOT_ALLOWED$1;
        // LB18 Break after spaces.
        if (current === SP) return BREAK_ALLOWED$1;
        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) return BREAK_NOT_ALLOWED$1;
        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) return BREAK_ALLOWED$1;
        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([
            BA,
            HY,
            NS
        ].indexOf(next) !== -1 || current === BB) return BREAK_NOT_ALLOWED$1;
        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) return BREAK_NOT_ALLOWED$1;
        // LB22 Do not break before ellipsis.
        if (next === IN) return BREAK_NOT_ALLOWED$1;
        // LB23 Do not break between digits and letters.
        if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) return BREAK_NOT_ALLOWED$1;
        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if (current === PR && [
            ID,
            EB,
            EM
        ].indexOf(next) !== -1 || [
            ID,
            EB,
            EM
        ].indexOf(current) !== -1 && next === PO) return BREAK_NOT_ALLOWED$1;
        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (// (PR | PO) × ( OP | HY )? NU
        [
            PR,
            PO
        ].indexOf(current) !== -1 && (next === NU || [
            OP,
            HY
        ].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
        [
            OP,
            HY
        ].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
        current === NU && [
            NU,
            SY,
            IS
        ].indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([
            NU,
            SY,
            IS,
            CL,
            CP
        ].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while(prevIndex >= 0){
                var type = classTypes[prevIndex];
                if (type === NU) return BREAK_NOT_ALLOWED$1;
                else if ([
                    SY,
                    IS
                ].indexOf(type) !== -1) prevIndex--;
                else break;
            }
        }
        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([
            PR,
            PO
        ].indexOf(next) !== -1) {
            var prevIndex = [
                CL,
                CP
            ].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while(prevIndex >= 0){
                var type = classTypes[prevIndex];
                if (type === NU) return BREAK_NOT_ALLOWED$1;
                else if ([
                    SY,
                    IS
                ].indexOf(type) !== -1) prevIndex--;
                else break;
            }
        }
        // LB26 Do not break a Korean syllable.
        if (JL === current && [
            JL,
            JV,
            H2,
            H3
        ].indexOf(next) !== -1 || [
            JV,
            H2
        ].indexOf(current) !== -1 && [
            JV,
            JT
        ].indexOf(next) !== -1 || [
            JT,
            H3
        ].indexOf(current) !== -1 && next === JT) return BREAK_NOT_ALLOWED$1;
        // LB27 Treat a Korean Syllable Block the same as ID.
        if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [
            IN,
            PO
        ].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) return BREAK_NOT_ALLOWED$1;
        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED$1;
        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) return BREAK_NOT_ALLOWED$1;
        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI$1 && next === RI$1) {
            var i = indicies[currentIndex];
            var count = 1;
            while(i > 0){
                i--;
                if (classTypes[i] === RI$1) count++;
                else break;
            }
            if (count % 2 !== 0) return BREAK_NOT_ALLOWED$1;
        }
        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) return BREAK_NOT_ALLOWED$1;
        return BREAK_ALLOWED$1;
    };
    var cssFormattedClasses = function(codePoints, options) {
        if (!options) options = {
            lineBreak: "normal",
            wordBreak: "normal"
        };
        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
        if (options.wordBreak === "break-all" || options.wordBreak === "break-word") classTypes = classTypes.map(function(type) {
            return [
                NU,
                AL,
                SA
            ].indexOf(type) !== -1 ? ID : type;
        });
        var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i) {
            return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        }) : undefined;
        return [
            indicies,
            classTypes,
            forbiddenBreakpoints
        ];
    };
    var Break = /** @class */ function() {
        function Break(codePoints, lineBreak, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }
        Break.prototype.slice = function() {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
        };
        return Break;
    }();
    var LineBreaker = function(str, options) {
        var codePoints = toCodePoints$1(str);
        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;
        return {
            next: function() {
                if (nextIndex >= length) return {
                    done: true,
                    value: null
                };
                var lineBreak = BREAK_NOT_ALLOWED$1;
                while(nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1);
                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return {
                        value: value,
                        done: false
                    };
                }
                return {
                    done: true,
                    value: null
                };
            }
        };
    };
    // https://www.w3.org/TR/css-syntax-3
    var FLAG_UNRESTRICTED = 1;
    var FLAG_ID = 2;
    var FLAG_INTEGER = 4;
    var FLAG_NUMBER = 8;
    var LINE_FEED = 0x000a;
    var SOLIDUS = 0x002f;
    var REVERSE_SOLIDUS = 0x005c;
    var CHARACTER_TABULATION = 0x0009;
    var SPACE = 0x0020;
    var QUOTATION_MARK = 0x0022;
    var EQUALS_SIGN = 0x003d;
    var NUMBER_SIGN = 0x0023;
    var DOLLAR_SIGN = 0x0024;
    var PERCENTAGE_SIGN = 0x0025;
    var APOSTROPHE = 0x0027;
    var LEFT_PARENTHESIS = 0x0028;
    var RIGHT_PARENTHESIS = 0x0029;
    var LOW_LINE = 0x005f;
    var HYPHEN_MINUS = 0x002d;
    var EXCLAMATION_MARK = 0x0021;
    var LESS_THAN_SIGN = 0x003c;
    var GREATER_THAN_SIGN = 0x003e;
    var COMMERCIAL_AT = 0x0040;
    var LEFT_SQUARE_BRACKET = 0x005b;
    var RIGHT_SQUARE_BRACKET = 0x005d;
    var CIRCUMFLEX_ACCENT = 0x003d;
    var LEFT_CURLY_BRACKET = 0x007b;
    var QUESTION_MARK = 0x003f;
    var RIGHT_CURLY_BRACKET = 0x007d;
    var VERTICAL_LINE = 0x007c;
    var TILDE = 0x007e;
    var CONTROL = 0x0080;
    var REPLACEMENT_CHARACTER = 0xfffd;
    var ASTERISK = 0x002a;
    var PLUS_SIGN = 0x002b;
    var COMMA = 0x002c;
    var COLON = 0x003a;
    var SEMICOLON = 0x003b;
    var FULL_STOP = 0x002e;
    var NULL = 0x0000;
    var BACKSPACE = 0x0008;
    var LINE_TABULATION = 0x000b;
    var SHIFT_OUT = 0x000e;
    var INFORMATION_SEPARATOR_ONE = 0x001f;
    var DELETE = 0x007f;
    var EOF = -1;
    var ZERO = 0x0030;
    var a = 0x0061;
    var e = 0x0065;
    var f = 0x0066;
    var u = 0x0075;
    var z = 0x007a;
    var A = 0x0041;
    var E = 0x0045;
    var F = 0x0046;
    var U = 0x0055;
    var Z = 0x005a;
    var isDigit = function(codePoint) {
        return codePoint >= ZERO && codePoint <= 0x0039;
    };
    var isSurrogateCodePoint = function(codePoint) {
        return codePoint >= 0xd800 && codePoint <= 0xdfff;
    };
    var isHex = function(codePoint) {
        return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
    };
    var isLowerCaseLetter = function(codePoint) {
        return codePoint >= a && codePoint <= z;
    };
    var isUpperCaseLetter = function(codePoint) {
        return codePoint >= A && codePoint <= Z;
    };
    var isLetter = function(codePoint) {
        return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
    };
    var isNonASCIICodePoint = function(codePoint) {
        return codePoint >= CONTROL;
    };
    var isWhiteSpace = function(codePoint) {
        return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
    };
    var isNameStartCodePoint = function(codePoint) {
        return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
    };
    var isNameCodePoint = function(codePoint) {
        return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
    };
    var isNonPrintableCodePoint = function(codePoint) {
        return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
    };
    var isValidEscape = function(c1, c2) {
        if (c1 !== REVERSE_SOLIDUS) return false;
        return c2 !== LINE_FEED;
    };
    var isIdentifierStart = function(c1, c2, c3) {
        if (c1 === HYPHEN_MINUS) return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
        else if (isNameStartCodePoint(c1)) return true;
        else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) return true;
        return false;
    };
    var isNumberStart = function(c1, c2, c3) {
        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) return true;
            return c2 === FULL_STOP && isDigit(c3);
        }
        if (c1 === FULL_STOP) return isDigit(c2);
        return isDigit(c1);
    };
    var stringToNumber = function(codePoints) {
        var c = 0;
        var sign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) sign = -1;
            c++;
        }
        var integers = [];
        while(isDigit(codePoints[c]))integers.push(codePoints[c++]);
        var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
        if (codePoints[c] === FULL_STOP) c++;
        var fraction = [];
        while(isDigit(codePoints[c]))fraction.push(codePoints[c++]);
        var fracd = fraction.length;
        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
        if (codePoints[c] === E || codePoints[c] === e) c++;
        var expsign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) expsign = -1;
            c++;
        }
        var exponent = [];
        while(isDigit(codePoints[c]))exponent.push(codePoints[c++]);
        var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
        return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
    };
    var LEFT_PARENTHESIS_TOKEN = {
        type: 2 /* LEFT_PARENTHESIS_TOKEN */ 
    };
    var RIGHT_PARENTHESIS_TOKEN = {
        type: 3 /* RIGHT_PARENTHESIS_TOKEN */ 
    };
    var COMMA_TOKEN = {
        type: 4 /* COMMA_TOKEN */ 
    };
    var SUFFIX_MATCH_TOKEN = {
        type: 13 /* SUFFIX_MATCH_TOKEN */ 
    };
    var PREFIX_MATCH_TOKEN = {
        type: 8 /* PREFIX_MATCH_TOKEN */ 
    };
    var COLUMN_TOKEN = {
        type: 21 /* COLUMN_TOKEN */ 
    };
    var DASH_MATCH_TOKEN = {
        type: 9 /* DASH_MATCH_TOKEN */ 
    };
    var INCLUDE_MATCH_TOKEN = {
        type: 10 /* INCLUDE_MATCH_TOKEN */ 
    };
    var LEFT_CURLY_BRACKET_TOKEN = {
        type: 11 /* LEFT_CURLY_BRACKET_TOKEN */ 
    };
    var RIGHT_CURLY_BRACKET_TOKEN = {
        type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */ 
    };
    var SUBSTRING_MATCH_TOKEN = {
        type: 14 /* SUBSTRING_MATCH_TOKEN */ 
    };
    var BAD_URL_TOKEN = {
        type: 23 /* BAD_URL_TOKEN */ 
    };
    var BAD_STRING_TOKEN = {
        type: 1 /* BAD_STRING_TOKEN */ 
    };
    var CDO_TOKEN = {
        type: 25 /* CDO_TOKEN */ 
    };
    var CDC_TOKEN = {
        type: 24 /* CDC_TOKEN */ 
    };
    var COLON_TOKEN = {
        type: 26 /* COLON_TOKEN */ 
    };
    var SEMICOLON_TOKEN = {
        type: 27 /* SEMICOLON_TOKEN */ 
    };
    var LEFT_SQUARE_BRACKET_TOKEN = {
        type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */ 
    };
    var RIGHT_SQUARE_BRACKET_TOKEN = {
        type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */ 
    };
    var WHITESPACE_TOKEN = {
        type: 31 /* WHITESPACE_TOKEN */ 
    };
    var EOF_TOKEN = {
        type: 32 /* EOF_TOKEN */ 
    };
    var Tokenizer = /** @class */ function() {
        function Tokenizer() {
            this._value = [];
        }
        Tokenizer.prototype.write = function(chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
        };
        Tokenizer.prototype.read = function() {
            var tokens = [];
            var token = this.consumeToken();
            while(token !== EOF_TOKEN){
                tokens.push(token);
                token = this.consumeToken();
            }
            return tokens;
        };
        Tokenizer.prototype.consumeToken = function() {
            var codePoint = this.consumeCodePoint();
            switch(codePoint){
                case QUOTATION_MARK:
                    return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                    var c1 = this.peekCodePoint(0);
                    var c2 = this.peekCodePoint(1);
                    var c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                        var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                        var value = this.consumeName();
                        return {
                            type: 5 /* HASH_TOKEN */ ,
                            value: value,
                            flags: flags
                        };
                    }
                    break;
                case DOLLAR_SIGN:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUFFIX_MATCH_TOKEN;
                    }
                    break;
                case APOSTROPHE:
                    return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                    return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                    return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUBSTRING_MATCH_TOKEN;
                    }
                    break;
                case PLUS_SIGN:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case COMMA:
                    return COMMA_TOKEN;
                case HYPHEN_MINUS:
                    var e1 = codePoint;
                    var e2 = this.peekCodePoint(0);
                    var e3 = this.peekCodePoint(1);
                    if (isNumberStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    if (isIdentifierStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDC_TOKEN;
                    }
                    break;
                case FULL_STOP:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case SOLIDUS:
                    if (this.peekCodePoint(0) === ASTERISK) {
                        this.consumeCodePoint();
                        while(true){
                            var c = this.consumeCodePoint();
                            if (c === ASTERISK) {
                                c = this.consumeCodePoint();
                                if (c === SOLIDUS) return this.consumeToken();
                            }
                            if (c === EOF) return this.consumeToken();
                        }
                    }
                    break;
                case COLON:
                    return COLON_TOKEN;
                case SEMICOLON:
                    return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                    if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDO_TOKEN;
                    }
                    break;
                case COMMERCIAL_AT:
                    var a1 = this.peekCodePoint(0);
                    var a2 = this.peekCodePoint(1);
                    var a3 = this.peekCodePoint(2);
                    if (isIdentifierStart(a1, a2, a3)) {
                        var value = this.consumeName();
                        return {
                            type: 7 /* AT_KEYWORD_TOKEN */ ,
                            value: value
                        };
                    }
                    break;
                case LEFT_SQUARE_BRACKET:
                    return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    break;
                case RIGHT_SQUARE_BRACKET:
                    return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return PREFIX_MATCH_TOKEN;
                    }
                    break;
                case LEFT_CURLY_BRACKET:
                    return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                    return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                    var u1 = this.peekCodePoint(0);
                    var u2 = this.peekCodePoint(1);
                    if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                        this.consumeCodePoint();
                        this.consumeUnicodeRangeToken();
                    }
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return DASH_MATCH_TOKEN;
                    }
                    if (this.peekCodePoint(0) === VERTICAL_LINE) {
                        this.consumeCodePoint();
                        return COLUMN_TOKEN;
                    }
                    break;
                case TILDE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return INCLUDE_MATCH_TOKEN;
                    }
                    break;
                case EOF:
                    return EOF_TOKEN;
            }
            if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
            }
            if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
            }
            return {
                type: 6 /* DELIM_TOKEN */ ,
                value: fromCodePoint$1(codePoint)
            };
        };
        Tokenizer.prototype.consumeCodePoint = function() {
            var value = this._value.shift();
            return typeof value === "undefined" ? -1 : value;
        };
        Tokenizer.prototype.reconsumeCodePoint = function(codePoint) {
            this._value.unshift(codePoint);
        };
        Tokenizer.prototype.peekCodePoint = function(delta) {
            if (delta >= this._value.length) return -1;
            return this._value[delta];
        };
        Tokenizer.prototype.consumeUnicodeRangeToken = function() {
            var digits = [];
            var codePoint = this.consumeCodePoint();
            while(isHex(codePoint) && digits.length < 6){
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
            }
            var questionMarks = false;
            while(codePoint === QUESTION_MARK && digits.length < 6){
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
            }
            if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                    return digit === QUESTION_MARK ? ZERO : digit;
                })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                    return digit === QUESTION_MARK ? F : digit;
                })), 16);
                return {
                    type: 30 /* UNICODE_RANGE_TOKEN */ ,
                    start: start_1,
                    end: end
                };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while(isHex(codePoint) && endDigits.length < 6){
                    endDigits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return {
                    type: 30 /* UNICODE_RANGE_TOKEN */ ,
                    start: start,
                    end: end
                };
            } else return {
                type: 30 /* UNICODE_RANGE_TOKEN */ ,
                start: start,
                end: start
            };
        };
        Tokenizer.prototype.consumeIdentLikeToken = function() {
            var value = this.consumeName();
            if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
            } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return {
                    type: 19 /* FUNCTION_TOKEN */ ,
                    value: value
                };
            }
            return {
                type: 20 /* IDENT_TOKEN */ ,
                value: value
            };
        };
        Tokenizer.prototype.consumeUrlToken = function() {
            var value = [];
            this.consumeWhiteSpace();
            if (this.peekCodePoint(0) === EOF) return {
                type: 22 /* URL_TOKEN */ ,
                value: ""
            };
            var next = this.peekCodePoint(0);
            if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0 /* STRING_TOKEN */ ) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return {
                            type: 22 /* URL_TOKEN */ ,
                            value: stringToken.value
                        };
                    }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            while(true){
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) return {
                    type: 22 /* URL_TOKEN */ ,
                    value: fromCodePoint$1.apply(void 0, value)
                };
                else if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return {
                            type: 22 /* URL_TOKEN */ ,
                            value: fromCodePoint$1.apply(void 0, value)
                        };
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                } else if (codePoint === REVERSE_SOLIDUS) {
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) value.push(this.consumeEscapedCodePoint());
                    else {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    }
                } else value.push(codePoint);
            }
        };
        Tokenizer.prototype.consumeWhiteSpace = function() {
            while(isWhiteSpace(this.peekCodePoint(0)))this.consumeCodePoint();
        };
        Tokenizer.prototype.consumeBadUrlRemnants = function() {
            while(true){
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) return;
                if (isValidEscape(codePoint, this.peekCodePoint(0))) this.consumeEscapedCodePoint();
            }
        };
        Tokenizer.prototype.consumeStringSlice = function(count) {
            var SLICE_STACK_SIZE = 50000;
            var value = "";
            while(count > 0){
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
            }
            this._value.shift();
            return value;
        };
        Tokenizer.prototype.consumeStringToken = function(endingCodePoint) {
            var value = "";
            var i = 0;
            do {
                var codePoint = this._value[i];
                if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                    value += this.consumeStringSlice(i);
                    return {
                        type: 0 /* STRING_TOKEN */ ,
                        value: value
                    };
                }
                if (codePoint === LINE_FEED) {
                    this._value.splice(0, i);
                    return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                    var next = this._value[i + 1];
                    if (next !== EOF && next !== undefined) {
                        if (next === LINE_FEED) {
                            value += this.consumeStringSlice(i);
                            i = -1;
                            this._value.shift();
                        } else if (isValidEscape(codePoint, next)) {
                            value += this.consumeStringSlice(i);
                            value += fromCodePoint$1(this.consumeEscapedCodePoint());
                            i = -1;
                        }
                    }
                }
                i++;
            }while (true);
        };
        Tokenizer.prototype.consumeNumber = function() {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) repr.push(this.consumeCodePoint());
            while(isDigit(this.peekCodePoint(0)))repr.push(this.consumeCodePoint());
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while(isDigit(this.peekCodePoint(0)))repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while(isDigit(this.peekCodePoint(0)))repr.push(this.consumeCodePoint());
            }
            return [
                stringToNumber(repr),
                type
            ];
        };
        Tokenizer.prototype.consumeNumericToken = function() {
            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return {
                    type: 15 /* DIMENSION_TOKEN */ ,
                    number: number,
                    flags: flags,
                    unit: unit
                };
            }
            if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return {
                    type: 16 /* PERCENTAGE_TOKEN */ ,
                    number: number,
                    flags: flags
                };
            }
            return {
                type: 17 /* NUMBER_TOKEN */ ,
                number: number,
                flags: flags
            };
        };
        Tokenizer.prototype.consumeEscapedCodePoint = function() {
            var codePoint = this.consumeCodePoint();
            if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while(isHex(this.peekCodePoint(0)) && hex.length < 6)hex += fromCodePoint$1(this.consumeCodePoint());
                if (isWhiteSpace(this.peekCodePoint(0))) this.consumeCodePoint();
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) return REPLACEMENT_CHARACTER;
                return hexCodePoint;
            }
            if (codePoint === EOF) return REPLACEMENT_CHARACTER;
            return codePoint;
        };
        Tokenizer.prototype.consumeName = function() {
            var result = "";
            while(true){
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) result += fromCodePoint$1(codePoint);
                else if (isValidEscape(codePoint, this.peekCodePoint(0))) result += fromCodePoint$1(this.consumeEscapedCodePoint());
                else {
                    this.reconsumeCodePoint(codePoint);
                    return result;
                }
            }
        };
        return Tokenizer;
    }();
    var Parser = /** @class */ function() {
        function Parser(tokens) {
            this._tokens = tokens;
        }
        Parser.create = function(value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser(tokenizer.read());
        };
        Parser.parseValue = function(value) {
            return Parser.create(value).parseComponentValue();
        };
        Parser.parseValues = function(value) {
            return Parser.create(value).parseComponentValues();
        };
        Parser.prototype.parseComponentValue = function() {
            var token = this.consumeToken();
            while(token.type === 31 /* WHITESPACE_TOKEN */ )token = this.consumeToken();
            if (token.type === 32 /* EOF_TOKEN */ ) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(token);
            var value = this.consumeComponentValue();
            do token = this.consumeToken();
            while (token.type === 31 /* WHITESPACE_TOKEN */ );
            if (token.type === 32 /* EOF_TOKEN */ ) return value;
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
        };
        Parser.prototype.parseComponentValues = function() {
            var values = [];
            while(true){
                var value = this.consumeComponentValue();
                if (value.type === 32 /* EOF_TOKEN */ ) return values;
                values.push(value);
                values.push();
            }
        };
        Parser.prototype.consumeComponentValue = function() {
            var token = this.consumeToken();
            switch(token.type){
                case 11 /* LEFT_CURLY_BRACKET_TOKEN */ :
                case 28 /* LEFT_SQUARE_BRACKET_TOKEN */ :
                case 2 /* LEFT_PARENTHESIS_TOKEN */ :
                    return this.consumeSimpleBlock(token.type);
                case 19 /* FUNCTION_TOKEN */ :
                    return this.consumeFunction(token);
            }
            return token;
        };
        Parser.prototype.consumeSimpleBlock = function(type) {
            var block = {
                type: type,
                values: []
            };
            var token = this.consumeToken();
            while(true){
                if (token.type === 32 /* EOF_TOKEN */  || isEndingTokenFor(token, type)) return block;
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
            }
        };
        Parser.prototype.consumeFunction = function(functionToken) {
            var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18 /* FUNCTION */ 
            };
            while(true){
                var token = this.consumeToken();
                if (token.type === 32 /* EOF_TOKEN */  || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */ ) return cssFunction;
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
            }
        };
        Parser.prototype.consumeToken = function() {
            var token = this._tokens.shift();
            return typeof token === "undefined" ? EOF_TOKEN : token;
        };
        Parser.prototype.reconsumeToken = function(token) {
            this._tokens.unshift(token);
        };
        return Parser;
    }();
    var isDimensionToken = function(token) {
        return token.type === 15 /* DIMENSION_TOKEN */ ;
    };
    var isNumberToken = function(token) {
        return token.type === 17 /* NUMBER_TOKEN */ ;
    };
    var isIdentToken = function(token) {
        return token.type === 20 /* IDENT_TOKEN */ ;
    };
    var isStringToken = function(token) {
        return token.type === 0 /* STRING_TOKEN */ ;
    };
    var isIdentWithValue = function(token, value) {
        return isIdentToken(token) && token.value === value;
    };
    var nonWhiteSpace = function(token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */ ;
    };
    var nonFunctionArgSeparator = function(token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */  && token.type !== 4 /* COMMA_TOKEN */ ;
    };
    var parseFunctionArgs = function(tokens) {
        var args = [];
        var arg = [];
        tokens.forEach(function(token) {
            if (token.type === 4 /* COMMA_TOKEN */ ) {
                if (arg.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
                args.push(arg);
                arg = [];
                return;
            }
            if (token.type !== 31 /* WHITESPACE_TOKEN */ ) arg.push(token);
        });
        if (arg.length) args.push(arg);
        return args;
    };
    var isEndingTokenFor = function(token, type) {
        if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */  && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */ ) return true;
        if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */  && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */ ) return true;
        return type === 2 /* LEFT_PARENTHESIS_TOKEN */  && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */ ;
    };
    var isLength = function(token) {
        return token.type === 17 /* NUMBER_TOKEN */  || token.type === 15 /* DIMENSION_TOKEN */ ;
    };
    var isLengthPercentage = function(token) {
        return token.type === 16 /* PERCENTAGE_TOKEN */  || isLength(token);
    };
    var parseLengthPercentageTuple = function(tokens) {
        return tokens.length > 1 ? [
            tokens[0],
            tokens[1]
        ] : [
            tokens[0]
        ];
    };
    var ZERO_LENGTH = {
        type: 17 /* NUMBER_TOKEN */ ,
        number: 0,
        flags: FLAG_INTEGER
    };
    var FIFTY_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */ ,
        number: 50,
        flags: FLAG_INTEGER
    };
    var HUNDRED_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */ ,
        number: 100,
        flags: FLAG_INTEGER
    };
    var getAbsoluteValueForTuple = function(tuple, width, height) {
        var x = tuple[0], y = tuple[1];
        return [
            getAbsoluteValue(x, width),
            getAbsoluteValue(typeof y !== "undefined" ? y : x, height)
        ];
    };
    var getAbsoluteValue = function(token, parent) {
        if (token.type === 16 /* PERCENTAGE_TOKEN */ ) return token.number / 100 * parent;
        if (isDimensionToken(token)) switch(token.unit){
            case "rem":
            case "em":
                return 16 * token.number; // TODO use correct font-size
            case "px":
            default:
                return token.number;
        }
        return token.number;
    };
    var DEG = "deg";
    var GRAD = "grad";
    var RAD = "rad";
    var TURN = "turn";
    var angle = {
        name: "angle",
        parse: function(_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */ ) switch(value.unit){
                case DEG:
                    return Math.PI * value.number / 180;
                case GRAD:
                    return Math.PI / 200 * value.number;
                case RAD:
                    return value.number;
                case TURN:
                    return Math.PI * 2 * value.number;
            }
            throw new Error("Unsupported angle type");
        }
    };
    var isAngle = function(value) {
        if (value.type === 15 /* DIMENSION_TOKEN */ ) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) return true;
        }
        return false;
    };
    var parseNamedSide = function(tokens) {
        var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
            return ident.value;
        }).join(" ");
        switch(sideOrCorner){
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
                return [
                    ZERO_LENGTH,
                    ZERO_LENGTH
                ];
            case "to top":
            case "bottom":
                return deg(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
                return [
                    ZERO_LENGTH,
                    HUNDRED_PERCENT
                ];
            case "to right":
            case "left":
                return deg(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
                return [
                    HUNDRED_PERCENT,
                    HUNDRED_PERCENT
                ];
            case "to bottom":
            case "top":
                return deg(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
                return [
                    HUNDRED_PERCENT,
                    ZERO_LENGTH
                ];
            case "to left":
            case "right":
                return deg(270);
        }
        return 0;
    };
    var deg = function(deg) {
        return Math.PI * deg / 180;
    };
    var color$1 = {
        name: "color",
        parse: function(context, value) {
            if (value.type === 18 /* FUNCTION */ ) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                if (typeof colorFunction === "undefined") throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
                return colorFunction(context, value.values);
            }
            if (value.type === 5 /* HASH_TOKEN */ ) {
                if (value.value.length === 3) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                }
                if (value.value.length === 4) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    var a = value.value.substring(3, 4);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                }
                if (value.value.length === 6) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                }
                if (value.value.length === 8) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    var a = value.value.substring(6, 8);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                }
            }
            if (value.type === 20 /* IDENT_TOKEN */ ) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (typeof namedColor !== "undefined") return namedColor;
            }
            return COLORS.TRANSPARENT;
        }
    };
    var isTransparent = function(color) {
        return (0xff & color) === 0;
    };
    var asString = function(color) {
        var alpha = 0xff & color;
        var blue = 0xff & color >> 8;
        var green = 0xff & color >> 16;
        var red = 0xff & color >> 24;
        return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
    };
    var pack = function(r, g, b, a) {
        return (r << 24 | g << 16 | b << 8 | Math.round(a * 255) << 0) >>> 0;
    };
    var getTokenColorValue = function(token, i) {
        if (token.type === 17 /* NUMBER_TOKEN */ ) return token.number;
        if (token.type === 16 /* PERCENTAGE_TOKEN */ ) {
            var max = i === 3 ? 1 : 255;
            return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
        }
        return 0;
    };
    var rgb = function(_context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
        }
        if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            return pack(r, g, b, a);
        }
        return 0;
    };
    function hue2rgb(t1, t2, hue) {
        if (hue < 0) hue += 1;
        if (hue >= 1) hue -= 1;
        if (hue < 1 / 6) return (t2 - t1) * hue * 6 + t1;
        else if (hue < 0.5) return t2;
        else if (hue < 2 / 3) return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
        else return t1;
    }
    var hsl = function(context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
        var h = (hue.type === 17 /* NUMBER_TOKEN */  ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
        var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
        var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
        var a = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
        if (s === 0) return pack(l * 255, l * 255, l * 255, 1);
        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var t1 = l * 2 - t2;
        var r = hue2rgb(t1, t2, h + 1 / 3);
        var g = hue2rgb(t1, t2, h);
        var b = hue2rgb(t1, t2, h - 1 / 3);
        return pack(r * 255, g * 255, b * 255, a);
    };
    var SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        rgb: rgb,
        rgba: rgb
    };
    var parseColor = function(context, value) {
        return color$1.parse(context, Parser.create(value).parseComponentValue());
    };
    var COLORS = {
        ALICEBLUE: 0xf0f8ffff,
        ANTIQUEWHITE: 0xfaebd7ff,
        AQUA: 0x00ffffff,
        AQUAMARINE: 0x7fffd4ff,
        AZURE: 0xf0ffffff,
        BEIGE: 0xf5f5dcff,
        BISQUE: 0xffe4c4ff,
        BLACK: 0x000000ff,
        BLANCHEDALMOND: 0xffebcdff,
        BLUE: 0x0000ffff,
        BLUEVIOLET: 0x8a2be2ff,
        BROWN: 0xa52a2aff,
        BURLYWOOD: 0xdeb887ff,
        CADETBLUE: 0x5f9ea0ff,
        CHARTREUSE: 0x7fff00ff,
        CHOCOLATE: 0xd2691eff,
        CORAL: 0xff7f50ff,
        CORNFLOWERBLUE: 0x6495edff,
        CORNSILK: 0xfff8dcff,
        CRIMSON: 0xdc143cff,
        CYAN: 0x00ffffff,
        DARKBLUE: 0x00008bff,
        DARKCYAN: 0x008b8bff,
        DARKGOLDENROD: 0xb886bbff,
        DARKGRAY: 0xa9a9a9ff,
        DARKGREEN: 0x006400ff,
        DARKGREY: 0xa9a9a9ff,
        DARKKHAKI: 0xbdb76bff,
        DARKMAGENTA: 0x8b008bff,
        DARKOLIVEGREEN: 0x556b2fff,
        DARKORANGE: 0xff8c00ff,
        DARKORCHID: 0x9932ccff,
        DARKRED: 0x8b0000ff,
        DARKSALMON: 0xe9967aff,
        DARKSEAGREEN: 0x8fbc8fff,
        DARKSLATEBLUE: 0x483d8bff,
        DARKSLATEGRAY: 0x2f4f4fff,
        DARKSLATEGREY: 0x2f4f4fff,
        DARKTURQUOISE: 0x00ced1ff,
        DARKVIOLET: 0x9400d3ff,
        DEEPPINK: 0xff1493ff,
        DEEPSKYBLUE: 0x00bfffff,
        DIMGRAY: 0x696969ff,
        DIMGREY: 0x696969ff,
        DODGERBLUE: 0x1e90ffff,
        FIREBRICK: 0xb22222ff,
        FLORALWHITE: 0xfffaf0ff,
        FORESTGREEN: 0x228b22ff,
        FUCHSIA: 0xff00ffff,
        GAINSBORO: 0xdcdcdcff,
        GHOSTWHITE: 0xf8f8ffff,
        GOLD: 0xffd700ff,
        GOLDENROD: 0xdaa520ff,
        GRAY: 0x808080ff,
        GREEN: 0x008000ff,
        GREENYELLOW: 0xadff2fff,
        GREY: 0x808080ff,
        HONEYDEW: 0xf0fff0ff,
        HOTPINK: 0xff69b4ff,
        INDIANRED: 0xcd5c5cff,
        INDIGO: 0x4b0082ff,
        IVORY: 0xfffff0ff,
        KHAKI: 0xf0e68cff,
        LAVENDER: 0xe6e6faff,
        LAVENDERBLUSH: 0xfff0f5ff,
        LAWNGREEN: 0x7cfc00ff,
        LEMONCHIFFON: 0xfffacdff,
        LIGHTBLUE: 0xadd8e6ff,
        LIGHTCORAL: 0xf08080ff,
        LIGHTCYAN: 0xe0ffffff,
        LIGHTGOLDENRODYELLOW: 0xfafad2ff,
        LIGHTGRAY: 0xd3d3d3ff,
        LIGHTGREEN: 0x90ee90ff,
        LIGHTGREY: 0xd3d3d3ff,
        LIGHTPINK: 0xffb6c1ff,
        LIGHTSALMON: 0xffa07aff,
        LIGHTSEAGREEN: 0x20b2aaff,
        LIGHTSKYBLUE: 0x87cefaff,
        LIGHTSLATEGRAY: 0x778899ff,
        LIGHTSLATEGREY: 0x778899ff,
        LIGHTSTEELBLUE: 0xb0c4deff,
        LIGHTYELLOW: 0xffffe0ff,
        LIME: 0x00ff00ff,
        LIMEGREEN: 0x32cd32ff,
        LINEN: 0xfaf0e6ff,
        MAGENTA: 0xff00ffff,
        MAROON: 0x800000ff,
        MEDIUMAQUAMARINE: 0x66cdaaff,
        MEDIUMBLUE: 0x0000cdff,
        MEDIUMORCHID: 0xba55d3ff,
        MEDIUMPURPLE: 0x9370dbff,
        MEDIUMSEAGREEN: 0x3cb371ff,
        MEDIUMSLATEBLUE: 0x7b68eeff,
        MEDIUMSPRINGGREEN: 0x00fa9aff,
        MEDIUMTURQUOISE: 0x48d1ccff,
        MEDIUMVIOLETRED: 0xc71585ff,
        MIDNIGHTBLUE: 0x191970ff,
        MINTCREAM: 0xf5fffaff,
        MISTYROSE: 0xffe4e1ff,
        MOCCASIN: 0xffe4b5ff,
        NAVAJOWHITE: 0xffdeadff,
        NAVY: 0x000080ff,
        OLDLACE: 0xfdf5e6ff,
        OLIVE: 0x808000ff,
        OLIVEDRAB: 0x6b8e23ff,
        ORANGE: 0xffa500ff,
        ORANGERED: 0xff4500ff,
        ORCHID: 0xda70d6ff,
        PALEGOLDENROD: 0xeee8aaff,
        PALEGREEN: 0x98fb98ff,
        PALETURQUOISE: 0xafeeeeff,
        PALEVIOLETRED: 0xdb7093ff,
        PAPAYAWHIP: 0xffefd5ff,
        PEACHPUFF: 0xffdab9ff,
        PERU: 0xcd853fff,
        PINK: 0xffc0cbff,
        PLUM: 0xdda0ddff,
        POWDERBLUE: 0xb0e0e6ff,
        PURPLE: 0x800080ff,
        REBECCAPURPLE: 0x663399ff,
        RED: 0xff0000ff,
        ROSYBROWN: 0xbc8f8fff,
        ROYALBLUE: 0x4169e1ff,
        SADDLEBROWN: 0x8b4513ff,
        SALMON: 0xfa8072ff,
        SANDYBROWN: 0xf4a460ff,
        SEAGREEN: 0x2e8b57ff,
        SEASHELL: 0xfff5eeff,
        SIENNA: 0xa0522dff,
        SILVER: 0xc0c0c0ff,
        SKYBLUE: 0x87ceebff,
        SLATEBLUE: 0x6a5acdff,
        SLATEGRAY: 0x708090ff,
        SLATEGREY: 0x708090ff,
        SNOW: 0xfffafaff,
        SPRINGGREEN: 0x00ff7fff,
        STEELBLUE: 0x4682b4ff,
        TAN: 0xd2b48cff,
        TEAL: 0x008080ff,
        THISTLE: 0xd8bfd8ff,
        TOMATO: 0xff6347ff,
        TRANSPARENT: 0x00000000,
        TURQUOISE: 0x40e0d0ff,
        VIOLET: 0xee82eeff,
        WHEAT: 0xf5deb3ff,
        WHITE: 0xffffffff,
        WHITESMOKE: 0xf5f5f5ff,
        YELLOW: 0xffff00ff,
        YELLOWGREEN: 0x9acd32ff
    };
    var backgroundClip = {
        name: "background-clip",
        initialValue: "border-box",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return tokens.map(function(token) {
                if (isIdentToken(token)) switch(token.value){
                    case "padding-box":
                        return 1 /* PADDING_BOX */ ;
                    case "content-box":
                        return 2 /* CONTENT_BOX */ ;
                }
                return 0 /* BORDER_BOX */ ;
            });
        }
    };
    var backgroundColor = {
        name: "background-color",
        initialValue: "transparent",
        prefix: false,
        type: 3 /* TYPE_VALUE */ ,
        format: "color"
    };
    var parseColorStop = function(context, args) {
        var color = color$1.parse(context, args[0]);
        var stop = args[1];
        return stop && isLengthPercentage(stop) ? {
            color: color,
            stop: stop
        } : {
            color: color,
            stop: null
        };
    };
    var processColorStops = function(stops, lineLength) {
        var first = stops[0];
        var last = stops[stops.length - 1];
        if (first.stop === null) first.stop = ZERO_LENGTH;
        if (last.stop === null) last.stop = HUNDRED_PERCENT;
        var processStops = [];
        var previous = 0;
        for(var i = 0; i < stops.length; i++){
            var stop_1 = stops[i].stop;
            if (stop_1 !== null) {
                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                if (absoluteValue > previous) processStops.push(absoluteValue);
                else processStops.push(previous);
                previous = absoluteValue;
            } else processStops.push(null);
        }
        var gapBegin = null;
        for(var i = 0; i < processStops.length; i++){
            var stop_2 = processStops[i];
            if (stop_2 === null) {
                if (gapBegin === null) gapBegin = i;
            } else if (gapBegin !== null) {
                var gapLength = i - gapBegin;
                var beforeGap = processStops[gapBegin - 1];
                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                for(var g = 1; g <= gapLength; g++)processStops[gapBegin + g - 1] = gapValue * g;
                gapBegin = null;
            }
        }
        return stops.map(function(_a, i) {
            var color = _a.color;
            return {
                color: color,
                stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
            };
        });
    };
    var getAngleFromCorner = function(corner, width, height) {
        var centerX = width / 2;
        var centerY = height / 2;
        var x = getAbsoluteValue(corner[0], width) - centerX;
        var y = centerY - getAbsoluteValue(corner[1], height);
        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    };
    var calculateGradientDirection = function(angle, width, height) {
        var radian = typeof angle === "number" ? angle : getAngleFromCorner(angle, width, height);
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var halfWidth = width / 2;
        var halfHeight = height / 2;
        var halfLineLength = lineLength / 2;
        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
        return [
            lineLength,
            halfWidth - xDiff,
            halfWidth + xDiff,
            halfHeight - yDiff,
            halfHeight + yDiff
        ];
    };
    var distance = function(a, b) {
        return Math.sqrt(a * a + b * b);
    };
    var findCorner = function(width, height, x, y, closest) {
        var corners = [
            [
                0,
                0
            ],
            [
                0,
                height
            ],
            [
                width,
                0
            ],
            [
                width,
                height
            ]
        ];
        return corners.reduce(function(stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) return {
                optimumCorner: corner,
                optimumDistance: d
            };
            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };
    var calculateRadius = function(gradient, x, y, width, height) {
        var rx = 0;
        var ry = 0;
        switch(gradient.size){
            case 0 /* CLOSEST_SIDE */ :
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (gradient.shape === 0 /* CIRCLE */ ) rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                else if (gradient.shape === 1 /* ELLIPSE */ ) {
                    rx = Math.min(Math.abs(x), Math.abs(x - width));
                    ry = Math.min(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 2 /* CLOSEST_CORNER */ :
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */ ) rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                else if (gradient.shape === 1 /* ELLIPSE */ ) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                    var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
            case 1 /* FARTHEST_SIDE */ :
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (gradient.shape === 0 /* CIRCLE */ ) rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                else if (gradient.shape === 1 /* ELLIPSE */ ) {
                    rx = Math.max(Math.abs(x), Math.abs(x - width));
                    ry = Math.max(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 3 /* FARTHEST_CORNER */ :
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */ ) rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                else if (gradient.shape === 1 /* ELLIPSE */ ) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                    var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
        }
        if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
        }
        return [
            rx,
            ry
        ];
    };
    var linearGradient = function(context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function(arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */  && firstToken.value === "to") {
                    angle$1 = parseNamedSide(arg);
                    return;
                } else if (isAngle(firstToken)) {
                    angle$1 = angle.parse(context, firstToken);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return {
            angle: angle$1,
            stops: stops,
            type: 1 /* LINEAR_GRADIENT */ 
        };
    };
    var prefixLinearGradient = function(context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function(arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */  && [
                    "top",
                    "left",
                    "right",
                    "bottom"
                ].indexOf(firstToken.value) !== -1) {
                    angle$1 = parseNamedSide(arg);
                    return;
                } else if (isAngle(firstToken)) {
                    angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return {
            angle: angle$1,
            stops: stops,
            type: 1 /* LINEAR_GRADIENT */ 
        };
    };
    var webkitGradient = function(context, tokens) {
        var angle = deg(180);
        var stops = [];
        var type = 1 /* LINEAR_GRADIENT */ ;
        var shape = 0 /* CIRCLE */ ;
        var size = 3 /* FARTHEST_CORNER */ ;
        var position = [];
        parseFunctionArgs(tokens).forEach(function(arg, i) {
            var firstToken = arg[0];
            if (i === 0) {
                if (isIdentToken(firstToken) && firstToken.value === "linear") {
                    type = 1 /* LINEAR_GRADIENT */ ;
                    return;
                } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
                    type = 2 /* RADIAL_GRADIENT */ ;
                    return;
                }
            }
            if (firstToken.type === 18 /* FUNCTION */ ) {
                if (firstToken.name === "from") {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({
                        stop: ZERO_LENGTH,
                        color: color
                    });
                } else if (firstToken.name === "to") {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({
                        stop: HUNDRED_PERCENT,
                        color: color
                    });
                } else if (firstToken.name === "color-stop") {
                    var values = firstToken.values.filter(nonFunctionArgSeparator);
                    if (values.length === 2) {
                        var color = color$1.parse(context, values[1]);
                        var stop_1 = values[0];
                        if (isNumberToken(stop_1)) stops.push({
                            stop: {
                                type: 16 /* PERCENTAGE_TOKEN */ ,
                                number: stop_1.number * 100,
                                flags: stop_1.flags
                            },
                            color: color
                        });
                    }
                }
            }
        });
        return type === 1 /* LINEAR_GRADIENT */  ? {
            angle: (angle + deg(180)) % deg(360),
            stops: stops,
            type: type
        } : {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: type
        };
    };
    var CLOSEST_SIDE = "closest-side";
    var FARTHEST_SIDE = "farthest-side";
    var CLOSEST_CORNER = "closest-corner";
    var FARTHEST_CORNER = "farthest-corner";
    var CIRCLE = "circle";
    var ELLIPSE = "ellipse";
    var COVER = "cover";
    var CONTAIN = "contain";
    var radialGradient = function(context, tokens) {
        var shape = 0 /* CIRCLE */ ;
        var size = 3 /* FARTHEST_CORNER */ ;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function(arg, i) {
            var isColorStop = true;
            if (i === 0) {
                var isAtPosition_1 = false;
                isColorStop = arg.reduce(function(acc, token) {
                    if (isAtPosition_1) {
                        if (isIdentToken(token)) switch(token.value){
                            case "center":
                                position.push(FIFTY_PERCENT);
                                return acc;
                            case "top":
                            case "left":
                                position.push(ZERO_LENGTH);
                                return acc;
                            case "right":
                            case "bottom":
                                position.push(HUNDRED_PERCENT);
                                return acc;
                        }
                        else if (isLengthPercentage(token) || isLength(token)) position.push(token);
                    } else if (isIdentToken(token)) switch(token.value){
                        case CIRCLE:
                            shape = 0 /* CIRCLE */ ;
                            return false;
                        case ELLIPSE:
                            shape = 1 /* ELLIPSE */ ;
                            return false;
                        case "at":
                            isAtPosition_1 = true;
                            return false;
                        case CLOSEST_SIDE:
                            size = 0 /* CLOSEST_SIDE */ ;
                            return false;
                        case COVER:
                        case FARTHEST_SIDE:
                            size = 1 /* FARTHEST_SIDE */ ;
                            return false;
                        case CONTAIN:
                        case CLOSEST_CORNER:
                            size = 2 /* CLOSEST_CORNER */ ;
                            return false;
                        case FARTHEST_CORNER:
                            size = 3 /* FARTHEST_CORNER */ ;
                            return false;
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) size = [];
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: 2 /* RADIAL_GRADIENT */ 
        };
    };
    var prefixRadialGradient = function(context, tokens) {
        var shape = 0 /* CIRCLE */ ;
        var size = 3 /* FARTHEST_CORNER */ ;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function(arg, i) {
            var isColorStop = true;
            if (i === 0) isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) switch(token.value){
                    case "center":
                        position.push(FIFTY_PERCENT);
                        return false;
                    case "top":
                    case "left":
                        position.push(ZERO_LENGTH);
                        return false;
                    case "right":
                    case "bottom":
                        position.push(HUNDRED_PERCENT);
                        return false;
                }
                else if (isLengthPercentage(token) || isLength(token)) {
                    position.push(token);
                    return false;
                }
                return acc;
            }, isColorStop);
            else if (i === 1) isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) switch(token.value){
                    case CIRCLE:
                        shape = 0 /* CIRCLE */ ;
                        return false;
                    case ELLIPSE:
                        shape = 1 /* ELLIPSE */ ;
                        return false;
                    case CONTAIN:
                    case CLOSEST_SIDE:
                        size = 0 /* CLOSEST_SIDE */ ;
                        return false;
                    case FARTHEST_SIDE:
                        size = 1 /* FARTHEST_SIDE */ ;
                        return false;
                    case CLOSEST_CORNER:
                        size = 2 /* CLOSEST_CORNER */ ;
                        return false;
                    case COVER:
                    case FARTHEST_CORNER:
                        size = 3 /* FARTHEST_CORNER */ ;
                        return false;
                }
                else if (isLength(token) || isLengthPercentage(token)) {
                    if (!Array.isArray(size)) size = [];
                    size.push(token);
                    return false;
                }
                return acc;
            }, isColorStop);
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: 2 /* RADIAL_GRADIENT */ 
        };
    };
    var isLinearGradient = function(background) {
        return background.type === 1 /* LINEAR_GRADIENT */ ;
    };
    var isRadialGradient = function(background) {
        return background.type === 2 /* RADIAL_GRADIENT */ ;
    };
    var image = {
        name: "image",
        parse: function(context, value) {
            if (value.type === 22 /* URL_TOKEN */ ) {
                var image_1 = {
                    url: value.value,
                    type: 0 /* URL */ 
                };
                context.cache.addImage(value.value);
                return image_1;
            }
            if (value.type === 18 /* FUNCTION */ ) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                if (typeof imageFunction === "undefined") throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
                return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
        }
    };
    function isSupportedImage(value) {
        return !(value.type === 20 /* IDENT_TOKEN */  && value.value === "none") && (value.type !== 18 /* FUNCTION */  || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
    }
    var SUPPORTED_IMAGE_FUNCTIONS = {
        "linear-gradient": linearGradient,
        "-moz-linear-gradient": prefixLinearGradient,
        "-ms-linear-gradient": prefixLinearGradient,
        "-o-linear-gradient": prefixLinearGradient,
        "-webkit-linear-gradient": prefixLinearGradient,
        "radial-gradient": radialGradient,
        "-moz-radial-gradient": prefixRadialGradient,
        "-ms-radial-gradient": prefixRadialGradient,
        "-o-radial-gradient": prefixRadialGradient,
        "-webkit-radial-gradient": prefixRadialGradient,
        "-webkit-gradient": webkitGradient
    };
    var backgroundImage = {
        name: "background-image",
        initialValue: "none",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(context, tokens) {
            if (tokens.length === 0) return [];
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */  && first.value === "none") return [];
            return tokens.filter(function(value) {
                return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function(value) {
                return image.parse(context, value);
            });
        }
    };
    var backgroundOrigin = {
        name: "background-origin",
        initialValue: "border-box",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return tokens.map(function(token) {
                if (isIdentToken(token)) switch(token.value){
                    case "padding-box":
                        return 1 /* PADDING_BOX */ ;
                    case "content-box":
                        return 2 /* CONTENT_BOX */ ;
                }
                return 0 /* BORDER_BOX */ ;
            });
        }
    };
    var backgroundPosition = {
        name: "background-position",
        initialValue: "0% 0%",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
                return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
        }
    };
    var backgroundRepeat = {
        name: "background-repeat",
        initialValue: "repeat",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
                return values.filter(isIdentToken).map(function(token) {
                    return token.value;
                }).join(" ");
            }).map(parseBackgroundRepeat);
        }
    };
    var parseBackgroundRepeat = function(value) {
        switch(value){
            case "no-repeat":
                return 1 /* NO_REPEAT */ ;
            case "repeat-x":
            case "repeat no-repeat":
                return 2 /* REPEAT_X */ ;
            case "repeat-y":
            case "no-repeat repeat":
                return 3 /* REPEAT_Y */ ;
            case "repeat":
            default:
                return 0 /* REPEAT */ ;
        }
    };
    var BACKGROUND_SIZE;
    (function(BACKGROUND_SIZE) {
        BACKGROUND_SIZE["AUTO"] = "auto";
        BACKGROUND_SIZE["CONTAIN"] = "contain";
        BACKGROUND_SIZE["COVER"] = "cover";
    })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
    var backgroundSize = {
        name: "background-size",
        initialValue: "0",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
                return values.filter(isBackgroundSizeInfoToken);
            });
        }
    };
    var isBackgroundSizeInfoToken = function(value) {
        return isIdentToken(value) || isLengthPercentage(value);
    };
    var borderColorForSide = function(side) {
        return {
            name: "border-" + side + "-color",
            initialValue: "transparent",
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: "color"
        };
    };
    var borderTopColor = borderColorForSide("top");
    var borderRightColor = borderColorForSide("right");
    var borderBottomColor = borderColorForSide("bottom");
    var borderLeftColor = borderColorForSide("left");
    var borderRadiusForSide = function(side) {
        return {
            name: "border-radius-" + side,
            initialValue: "0 0",
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function(_context, tokens) {
                return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
        };
    };
    var borderTopLeftRadius = borderRadiusForSide("top-left");
    var borderTopRightRadius = borderRadiusForSide("top-right");
    var borderBottomRightRadius = borderRadiusForSide("bottom-right");
    var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
    var borderStyleForSide = function(side) {
        return {
            name: "border-" + side + "-style",
            initialValue: "solid",
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function(_context, style) {
                switch(style){
                    case "none":
                        return 0 /* NONE */ ;
                    case "dashed":
                        return 2 /* DASHED */ ;
                    case "dotted":
                        return 3 /* DOTTED */ ;
                    case "double":
                        return 4 /* DOUBLE */ ;
                }
                return 1 /* SOLID */ ;
            }
        };
    };
    var borderTopStyle = borderStyleForSide("top");
    var borderRightStyle = borderStyleForSide("right");
    var borderBottomStyle = borderStyleForSide("bottom");
    var borderLeftStyle = borderStyleForSide("left");
    var borderWidthForSide = function(side) {
        return {
            name: "border-" + side + "-width",
            initialValue: "0",
            type: 0 /* VALUE */ ,
            prefix: false,
            parse: function(_context, token) {
                if (isDimensionToken(token)) return token.number;
                return 0;
            }
        };
    };
    var borderTopWidth = borderWidthForSide("top");
    var borderRightWidth = borderWidthForSide("right");
    var borderBottomWidth = borderWidthForSide("bottom");
    var borderLeftWidth = borderWidthForSide("left");
    var color = {
        name: "color",
        initialValue: "transparent",
        prefix: false,
        type: 3 /* TYPE_VALUE */ ,
        format: "color"
    };
    var direction = {
        name: "direction",
        initialValue: "ltr",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, direction) {
            switch(direction){
                case "rtl":
                    return 1 /* RTL */ ;
                case "ltr":
                default:
                    return 0 /* LTR */ ;
            }
        }
    };
    var display = {
        name: "display",
        initialValue: "inline-block",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function(bit, token) {
                return bit | parseDisplayValue(token.value);
            }, 0 /* NONE */ );
        }
    };
    var parseDisplayValue = function(display) {
        switch(display){
            case "block":
            case "-webkit-box":
                return 2 /* BLOCK */ ;
            case "inline":
                return 4 /* INLINE */ ;
            case "run-in":
                return 8 /* RUN_IN */ ;
            case "flow":
                return 16 /* FLOW */ ;
            case "flow-root":
                return 32 /* FLOW_ROOT */ ;
            case "table":
                return 64 /* TABLE */ ;
            case "flex":
            case "-webkit-flex":
                return 128 /* FLEX */ ;
            case "grid":
            case "-ms-grid":
                return 256 /* GRID */ ;
            case "ruby":
                return 512 /* RUBY */ ;
            case "subgrid":
                return 1024 /* SUBGRID */ ;
            case "list-item":
                return 2048 /* LIST_ITEM */ ;
            case "table-row-group":
                return 4096 /* TABLE_ROW_GROUP */ ;
            case "table-header-group":
                return 8192 /* TABLE_HEADER_GROUP */ ;
            case "table-footer-group":
                return 16384 /* TABLE_FOOTER_GROUP */ ;
            case "table-row":
                return 32768 /* TABLE_ROW */ ;
            case "table-cell":
                return 65536 /* TABLE_CELL */ ;
            case "table-column-group":
                return 131072 /* TABLE_COLUMN_GROUP */ ;
            case "table-column":
                return 262144 /* TABLE_COLUMN */ ;
            case "table-caption":
                return 524288 /* TABLE_CAPTION */ ;
            case "ruby-base":
                return 1048576 /* RUBY_BASE */ ;
            case "ruby-text":
                return 2097152 /* RUBY_TEXT */ ;
            case "ruby-base-container":
                return 4194304 /* RUBY_BASE_CONTAINER */ ;
            case "ruby-text-container":
                return 8388608 /* RUBY_TEXT_CONTAINER */ ;
            case "contents":
                return 16777216 /* CONTENTS */ ;
            case "inline-block":
                return 33554432 /* INLINE_BLOCK */ ;
            case "inline-list-item":
                return 67108864 /* INLINE_LIST_ITEM */ ;
            case "inline-table":
                return 134217728 /* INLINE_TABLE */ ;
            case "inline-flex":
                return 268435456 /* INLINE_FLEX */ ;
            case "inline-grid":
                return 536870912 /* INLINE_GRID */ ;
        }
        return 0 /* NONE */ ;
    };
    var float = {
        name: "float",
        initialValue: "none",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, float) {
            switch(float){
                case "left":
                    return 1 /* LEFT */ ;
                case "right":
                    return 2 /* RIGHT */ ;
                case "inline-start":
                    return 3 /* INLINE_START */ ;
                case "inline-end":
                    return 4 /* INLINE_END */ ;
            }
            return 0 /* NONE */ ;
        }
    };
    var letterSpacing = {
        name: "letter-spacing",
        initialValue: "0",
        prefix: false,
        type: 0 /* VALUE */ ,
        parse: function(_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */  && token.value === "normal") return 0;
            if (token.type === 17 /* NUMBER_TOKEN */ ) return token.number;
            if (token.type === 15 /* DIMENSION_TOKEN */ ) return token.number;
            return 0;
        }
    };
    var LINE_BREAK;
    (function(LINE_BREAK) {
        LINE_BREAK["NORMAL"] = "normal";
        LINE_BREAK["STRICT"] = "strict";
    })(LINE_BREAK || (LINE_BREAK = {}));
    var lineBreak = {
        name: "line-break",
        initialValue: "normal",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, lineBreak) {
            switch(lineBreak){
                case "strict":
                    return LINE_BREAK.STRICT;
                case "normal":
                default:
                    return LINE_BREAK.NORMAL;
            }
        }
    };
    var lineHeight = {
        name: "line-height",
        initialValue: "normal",
        prefix: false,
        type: 4 /* TOKEN_VALUE */ 
    };
    var computeLineHeight = function(token, fontSize) {
        if (isIdentToken(token) && token.value === "normal") return 1.2 * fontSize;
        else if (token.type === 17 /* NUMBER_TOKEN */ ) return fontSize * token.number;
        else if (isLengthPercentage(token)) return getAbsoluteValue(token, fontSize);
        return fontSize;
    };
    var listStyleImage = {
        name: "list-style-image",
        initialValue: "none",
        type: 0 /* VALUE */ ,
        prefix: false,
        parse: function(context, token) {
            if (token.type === 20 /* IDENT_TOKEN */  && token.value === "none") return null;
            return image.parse(context, token);
        }
    };
    var listStylePosition = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, position) {
            switch(position){
                case "inside":
                    return 0 /* INSIDE */ ;
                case "outside":
                default:
                    return 1 /* OUTSIDE */ ;
            }
        }
    };
    var listStyleType = {
        name: "list-style-type",
        initialValue: "none",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, type) {
            switch(type){
                case "disc":
                    return 0 /* DISC */ ;
                case "circle":
                    return 1 /* CIRCLE */ ;
                case "square":
                    return 2 /* SQUARE */ ;
                case "decimal":
                    return 3 /* DECIMAL */ ;
                case "cjk-decimal":
                    return 4 /* CJK_DECIMAL */ ;
                case "decimal-leading-zero":
                    return 5 /* DECIMAL_LEADING_ZERO */ ;
                case "lower-roman":
                    return 6 /* LOWER_ROMAN */ ;
                case "upper-roman":
                    return 7 /* UPPER_ROMAN */ ;
                case "lower-greek":
                    return 8 /* LOWER_GREEK */ ;
                case "lower-alpha":
                    return 9 /* LOWER_ALPHA */ ;
                case "upper-alpha":
                    return 10 /* UPPER_ALPHA */ ;
                case "arabic-indic":
                    return 11 /* ARABIC_INDIC */ ;
                case "armenian":
                    return 12 /* ARMENIAN */ ;
                case "bengali":
                    return 13 /* BENGALI */ ;
                case "cambodian":
                    return 14 /* CAMBODIAN */ ;
                case "cjk-earthly-branch":
                    return 15 /* CJK_EARTHLY_BRANCH */ ;
                case "cjk-heavenly-stem":
                    return 16 /* CJK_HEAVENLY_STEM */ ;
                case "cjk-ideographic":
                    return 17 /* CJK_IDEOGRAPHIC */ ;
                case "devanagari":
                    return 18 /* DEVANAGARI */ ;
                case "ethiopic-numeric":
                    return 19 /* ETHIOPIC_NUMERIC */ ;
                case "georgian":
                    return 20 /* GEORGIAN */ ;
                case "gujarati":
                    return 21 /* GUJARATI */ ;
                case "gurmukhi":
                    return 22 /* GURMUKHI */ ;
                case "hebrew":
                    return 22 /* HEBREW */ ;
                case "hiragana":
                    return 23 /* HIRAGANA */ ;
                case "hiragana-iroha":
                    return 24 /* HIRAGANA_IROHA */ ;
                case "japanese-formal":
                    return 25 /* JAPANESE_FORMAL */ ;
                case "japanese-informal":
                    return 26 /* JAPANESE_INFORMAL */ ;
                case "kannada":
                    return 27 /* KANNADA */ ;
                case "katakana":
                    return 28 /* KATAKANA */ ;
                case "katakana-iroha":
                    return 29 /* KATAKANA_IROHA */ ;
                case "khmer":
                    return 30 /* KHMER */ ;
                case "korean-hangul-formal":
                    return 31 /* KOREAN_HANGUL_FORMAL */ ;
                case "korean-hanja-formal":
                    return 32 /* KOREAN_HANJA_FORMAL */ ;
                case "korean-hanja-informal":
                    return 33 /* KOREAN_HANJA_INFORMAL */ ;
                case "lao":
                    return 34 /* LAO */ ;
                case "lower-armenian":
                    return 35 /* LOWER_ARMENIAN */ ;
                case "malayalam":
                    return 36 /* MALAYALAM */ ;
                case "mongolian":
                    return 37 /* MONGOLIAN */ ;
                case "myanmar":
                    return 38 /* MYANMAR */ ;
                case "oriya":
                    return 39 /* ORIYA */ ;
                case "persian":
                    return 40 /* PERSIAN */ ;
                case "simp-chinese-formal":
                    return 41 /* SIMP_CHINESE_FORMAL */ ;
                case "simp-chinese-informal":
                    return 42 /* SIMP_CHINESE_INFORMAL */ ;
                case "tamil":
                    return 43 /* TAMIL */ ;
                case "telugu":
                    return 44 /* TELUGU */ ;
                case "thai":
                    return 45 /* THAI */ ;
                case "tibetan":
                    return 46 /* TIBETAN */ ;
                case "trad-chinese-formal":
                    return 47 /* TRAD_CHINESE_FORMAL */ ;
                case "trad-chinese-informal":
                    return 48 /* TRAD_CHINESE_INFORMAL */ ;
                case "upper-armenian":
                    return 49 /* UPPER_ARMENIAN */ ;
                case "disclosure-open":
                    return 50 /* DISCLOSURE_OPEN */ ;
                case "disclosure-closed":
                    return 51 /* DISCLOSURE_CLOSED */ ;
                case "none":
                default:
                    return -1 /* NONE */ ;
            }
        }
    };
    var marginForSide = function(side) {
        return {
            name: "margin-" + side,
            initialValue: "0",
            prefix: false,
            type: 4 /* TOKEN_VALUE */ 
        };
    };
    var marginTop = marginForSide("top");
    var marginRight = marginForSide("right");
    var marginBottom = marginForSide("bottom");
    var marginLeft = marginForSide("left");
    var overflow = {
        name: "overflow",
        initialValue: "visible",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(overflow) {
                switch(overflow.value){
                    case "hidden":
                        return 1 /* HIDDEN */ ;
                    case "scroll":
                        return 2 /* SCROLL */ ;
                    case "clip":
                        return 3 /* CLIP */ ;
                    case "auto":
                        return 4 /* AUTO */ ;
                    case "visible":
                    default:
                        return 0 /* VISIBLE */ ;
                }
            });
        }
    };
    var overflowWrap = {
        name: "overflow-wrap",
        initialValue: "normal",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, overflow) {
            switch(overflow){
                case "break-word":
                    return "break-word" /* BREAK_WORD */ ;
                case "normal":
                default:
                    return "normal" /* NORMAL */ ;
            }
        }
    };
    var paddingForSide = function(side) {
        return {
            name: "padding-" + side,
            initialValue: "0",
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: "length-percentage"
        };
    };
    var paddingTop = paddingForSide("top");
    var paddingRight = paddingForSide("right");
    var paddingBottom = paddingForSide("bottom");
    var paddingLeft = paddingForSide("left");
    var textAlign = {
        name: "text-align",
        initialValue: "left",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, textAlign) {
            switch(textAlign){
                case "right":
                    return 2 /* RIGHT */ ;
                case "center":
                case "justify":
                    return 1 /* CENTER */ ;
                case "left":
                default:
                    return 0 /* LEFT */ ;
            }
        }
    };
    var position = {
        name: "position",
        initialValue: "static",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, position) {
            switch(position){
                case "relative":
                    return 1 /* RELATIVE */ ;
                case "absolute":
                    return 2 /* ABSOLUTE */ ;
                case "fixed":
                    return 3 /* FIXED */ ;
                case "sticky":
                    return 4 /* STICKY */ ;
            }
            return 0 /* STATIC */ ;
        }
    };
    var textShadow = {
        name: "text-shadow",
        initialValue: "none",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) return [];
            return parseFunctionArgs(tokens).map(function(values) {
                var shadow = {
                    color: COLORS.TRANSPARENT,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH
                };
                var c = 0;
                for(var i = 0; i < values.length; i++){
                    var token = values[i];
                    if (isLength(token)) {
                        if (c === 0) shadow.offsetX = token;
                        else if (c === 1) shadow.offsetY = token;
                        else shadow.blur = token;
                        c++;
                    } else shadow.color = color$1.parse(context, token);
                }
                return shadow;
            });
        }
    };
    var textTransform = {
        name: "text-transform",
        initialValue: "none",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, textTransform) {
            switch(textTransform){
                case "uppercase":
                    return 2 /* UPPERCASE */ ;
                case "lowercase":
                    return 1 /* LOWERCASE */ ;
                case "capitalize":
                    return 3 /* CAPITALIZE */ ;
            }
            return 0 /* NONE */ ;
        }
    };
    var transform$1 = {
        name: "transform",
        initialValue: "none",
        prefix: true,
        type: 0 /* VALUE */ ,
        parse: function(_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */  && token.value === "none") return null;
            if (token.type === 18 /* FUNCTION */ ) {
                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (typeof transformFunction === "undefined") throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
                return transformFunction(token.values);
            }
            return null;
        }
    };
    var matrix = function(args) {
        var values = args.filter(function(arg) {
            return arg.type === 17 /* NUMBER_TOKEN */ ;
        }).map(function(arg) {
            return arg.number;
        });
        return values.length === 6 ? values : null;
    };
    // doesn't support 3D transforms at the moment
    var matrix3d = function(args) {
        var values = args.filter(function(arg) {
            return arg.type === 17 /* NUMBER_TOKEN */ ;
        }).map(function(arg) {
            return arg.number;
        });
        var a1 = values[0], b1 = values[1];
        values[2];
        values[3];
        var a2 = values[4], b2 = values[5];
        values[6];
        values[7];
        values[8];
        values[9];
        values[10];
        values[11];
        var a4 = values[12], b4 = values[13];
        values[14];
        values[15];
        return values.length === 16 ? [
            a1,
            b1,
            a2,
            b2,
            a4,
            b4
        ] : null;
    };
    var SUPPORTED_TRANSFORM_FUNCTIONS = {
        matrix: matrix,
        matrix3d: matrix3d
    };
    var DEFAULT_VALUE = {
        type: 16 /* PERCENTAGE_TOKEN */ ,
        number: 50,
        flags: FLAG_INTEGER
    };
    var DEFAULT = [
        DEFAULT_VALUE,
        DEFAULT_VALUE
    ];
    var transformOrigin = {
        name: "transform-origin",
        initialValue: "50% 50%",
        prefix: true,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) return DEFAULT;
            return [
                origins[0],
                origins[1]
            ];
        }
    };
    var visibility = {
        name: "visible",
        initialValue: "none",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, visibility) {
            switch(visibility){
                case "hidden":
                    return 1 /* HIDDEN */ ;
                case "collapse":
                    return 2 /* COLLAPSE */ ;
                case "visible":
                default:
                    return 0 /* VISIBLE */ ;
            }
        }
    };
    var WORD_BREAK;
    (function(WORD_BREAK) {
        WORD_BREAK["NORMAL"] = "normal";
        WORD_BREAK["BREAK_ALL"] = "break-all";
        WORD_BREAK["KEEP_ALL"] = "keep-all";
    })(WORD_BREAK || (WORD_BREAK = {}));
    var wordBreak = {
        name: "word-break",
        initialValue: "normal",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, wordBreak) {
            switch(wordBreak){
                case "break-all":
                    return WORD_BREAK.BREAK_ALL;
                case "keep-all":
                    return WORD_BREAK.KEEP_ALL;
                case "normal":
                default:
                    return WORD_BREAK.NORMAL;
            }
        }
    };
    var zIndex = {
        name: "z-index",
        initialValue: "auto",
        prefix: false,
        type: 0 /* VALUE */ ,
        parse: function(_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ ) return {
                auto: true,
                order: 0
            };
            if (isNumberToken(token)) return {
                auto: false,
                order: token.number
            };
            throw new Error("Invalid z-index number parsed");
        }
    };
    var time = {
        name: "time",
        parse: function(_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */ ) switch(value.unit.toLowerCase()){
                case "s":
                    return 1000 * value.number;
                case "ms":
                    return value.number;
            }
            throw new Error("Unsupported time type");
        }
    };
    var opacity = {
        name: "opacity",
        initialValue: "1",
        type: 0 /* VALUE */ ,
        prefix: false,
        parse: function(_context, token) {
            if (isNumberToken(token)) return token.number;
            return 1;
        }
    };
    var textDecorationColor = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: false,
        type: 3 /* TYPE_VALUE */ ,
        format: "color"
    };
    var textDecorationLine = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
                switch(token.value){
                    case "underline":
                        return 1 /* UNDERLINE */ ;
                    case "overline":
                        return 2 /* OVERLINE */ ;
                    case "line-through":
                        return 3 /* LINE_THROUGH */ ;
                    case "none":
                        return 4 /* BLINK */ ;
                }
                return 0 /* NONE */ ;
            }).filter(function(line) {
                return line !== 0 /* NONE */ ;
            });
        }
    };
    var fontFamily = {
        name: "font-family",
        initialValue: "",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function(token) {
                switch(token.type){
                    case 20 /* IDENT_TOKEN */ :
                    case 0 /* STRING_TOKEN */ :
                        accumulator.push(token.value);
                        break;
                    case 17 /* NUMBER_TOKEN */ :
                        accumulator.push(token.number.toString());
                        break;
                    case 4 /* COMMA_TOKEN */ :
                        results.push(accumulator.join(" "));
                        accumulator.length = 0;
                        break;
                }
            });
            if (accumulator.length) results.push(accumulator.join(" "));
            return results.map(function(result) {
                return result.indexOf(" ") === -1 ? result : "'" + result + "'";
            });
        }
    };
    var fontSize = {
        name: "font-size",
        initialValue: "0",
        prefix: false,
        type: 3 /* TYPE_VALUE */ ,
        format: "length"
    };
    var fontWeight = {
        name: "font-weight",
        initialValue: "normal",
        type: 0 /* VALUE */ ,
        prefix: false,
        parse: function(_context, token) {
            if (isNumberToken(token)) return token.number;
            if (isIdentToken(token)) switch(token.value){
                case "bold":
                    return 700;
                case "normal":
                default:
                    return 400;
            }
            return 400;
        }
    };
    var fontVariant = {
        name: "font-variant",
        initialValue: "none",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
                return token.value;
            });
        }
    };
    var fontStyle = {
        name: "font-style",
        initialValue: "normal",
        prefix: false,
        type: 2 /* IDENT_VALUE */ ,
        parse: function(_context, overflow) {
            switch(overflow){
                case "oblique":
                    return "oblique" /* OBLIQUE */ ;
                case "italic":
                    return "italic" /* ITALIC */ ;
                case "normal":
                default:
                    return "normal" /* NORMAL */ ;
            }
        }
    };
    var contains = function(bit, value) {
        return (bit & value) !== 0;
    };
    var content = {
        name: "content",
        initialValue: "none",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(_context, tokens) {
            if (tokens.length === 0) return [];
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */  && first.value === "none") return [];
            return tokens;
        }
    };
    var counterIncrement = {
        name: "counter-increment",
        initialValue: "none",
        prefix: true,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            if (tokens.length === 0) return null;
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */  && first.value === "none") return null;
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for(var i = 0; i < filtered.length; i++){
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (counter.type === 20 /* IDENT_TOKEN */ ) {
                    var increment = next && isNumberToken(next) ? next.number : 1;
                    increments.push({
                        counter: counter.value,
                        increment: increment
                    });
                }
            }
            return increments;
        }
    };
    var counterReset = {
        name: "counter-reset",
        initialValue: "none",
        prefix: true,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            if (tokens.length === 0) return [];
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for(var i = 0; i < filtered.length; i++){
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (isIdentToken(counter) && counter.value !== "none") {
                    var reset = next && isNumberToken(next) ? next.number : 0;
                    resets.push({
                        counter: counter.value,
                        reset: reset
                    });
                }
            }
            return resets;
        }
    };
    var duration = {
        name: "duration",
        initialValue: "0s",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(context, tokens) {
            return tokens.filter(isDimensionToken).map(function(token) {
                return time.parse(context, token);
            });
        }
    };
    var quotes = {
        name: "quotes",
        initialValue: "none",
        prefix: true,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            if (tokens.length === 0) return null;
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */  && first.value === "none") return null;
            var quotes = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) return null;
            for(var i = 0; i < filtered.length; i += 2){
                var open_1 = filtered[i].value;
                var close_1 = filtered[i + 1].value;
                quotes.push({
                    open: open_1,
                    close: close_1
                });
            }
            return quotes;
        }
    };
    var getQuote = function(quotes, depth, open) {
        if (!quotes) return "";
        var quote = quotes[Math.min(depth, quotes.length - 1)];
        if (!quote) return "";
        return open ? quote.open : quote.close;
    };
    var boxShadow = {
        name: "box-shadow",
        initialValue: "none",
        type: 1 /* LIST */ ,
        prefix: false,
        parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) return [];
            return parseFunctionArgs(tokens).map(function(values) {
                var shadow = {
                    color: 0x000000ff,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH,
                    spread: ZERO_LENGTH,
                    inset: false
                };
                var c = 0;
                for(var i = 0; i < values.length; i++){
                    var token = values[i];
                    if (isIdentWithValue(token, "inset")) shadow.inset = true;
                    else if (isLength(token)) {
                        if (c === 0) shadow.offsetX = token;
                        else if (c === 1) shadow.offsetY = token;
                        else if (c === 2) shadow.blur = token;
                        else shadow.spread = token;
                        c++;
                    } else shadow.color = color$1.parse(context, token);
                }
                return shadow;
            });
        }
    };
    var paintOrder = {
        name: "paint-order",
        initialValue: "normal",
        prefix: false,
        type: 1 /* LIST */ ,
        parse: function(_context, tokens) {
            var DEFAULT_VALUE = [
                0 /* FILL */ ,
                1 /* STROKE */ ,
                2 /* MARKERS */ 
            ];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function(token) {
                switch(token.value){
                    case "stroke":
                        layers.push(1 /* STROKE */ );
                        break;
                    case "fill":
                        layers.push(0 /* FILL */ );
                        break;
                    case "markers":
                        layers.push(2 /* MARKERS */ );
                        break;
                }
            });
            DEFAULT_VALUE.forEach(function(value) {
                if (layers.indexOf(value) === -1) layers.push(value);
            });
            return layers;
        }
    };
    var webkitTextStrokeColor = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: false,
        type: 3 /* TYPE_VALUE */ ,
        format: "color"
    };
    var webkitTextStrokeWidth = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0 /* VALUE */ ,
        prefix: false,
        parse: function(_context, token) {
            if (isDimensionToken(token)) return token.number;
            return 0;
        }
    };
    var CSSParsedDeclaration = /** @class */ function() {
        function CSSParsedDeclaration(context, declaration) {
            var _a, _b;
            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this.float = parse(context, float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
        }
        CSSParsedDeclaration.prototype.isVisible = function() {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */ ;
        };
        CSSParsedDeclaration.prototype.isTransparent = function() {
            return isTransparent(this.backgroundColor);
        };
        CSSParsedDeclaration.prototype.isTransformed = function() {
            return this.transform !== null;
        };
        CSSParsedDeclaration.prototype.isPositioned = function() {
            return this.position !== 0 /* STATIC */ ;
        };
        CSSParsedDeclaration.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto;
        };
        CSSParsedDeclaration.prototype.isFloating = function() {
            return this.float !== 0 /* NONE */ ;
        };
        CSSParsedDeclaration.prototype.isInlineLevel = function() {
            return contains(this.display, 4 /* INLINE */ ) || contains(this.display, 33554432 /* INLINE_BLOCK */ ) || contains(this.display, 268435456 /* INLINE_FLEX */ ) || contains(this.display, 536870912 /* INLINE_GRID */ ) || contains(this.display, 67108864 /* INLINE_LIST_ITEM */ ) || contains(this.display, 134217728 /* INLINE_TABLE */ );
        };
        return CSSParsedDeclaration;
    }();
    var CSSParsedPseudoDeclaration = /** @class */ function() {
        function CSSParsedPseudoDeclaration(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
        }
        return CSSParsedPseudoDeclaration;
    }();
    var CSSParsedCounterDeclaration = /** @class */ function() {
        function CSSParsedCounterDeclaration(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
        }
        return CSSParsedCounterDeclaration;
    }();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parse = function(context, descriptor, style) {
        var tokenizer = new Tokenizer();
        var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
        tokenizer.write(value);
        var parser = new Parser(tokenizer.read());
        switch(descriptor.type){
            case 2 /* IDENT_VALUE */ :
                var token = parser.parseComponentValue();
                return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0 /* VALUE */ :
                return descriptor.parse(context, parser.parseComponentValue());
            case 1 /* LIST */ :
                return descriptor.parse(context, parser.parseComponentValues());
            case 4 /* TOKEN_VALUE */ :
                return parser.parseComponentValue();
            case 3 /* TYPE_VALUE */ :
                switch(descriptor.format){
                    case "angle":
                        return angle.parse(context, parser.parseComponentValue());
                    case "color":
                        return color$1.parse(context, parser.parseComponentValue());
                    case "image":
                        return image.parse(context, parser.parseComponentValue());
                    case "length":
                        var length_1 = parser.parseComponentValue();
                        return isLength(length_1) ? length_1 : ZERO_LENGTH;
                    case "length-percentage":
                        var value_1 = parser.parseComponentValue();
                        return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                    case "time":
                        return time.parse(context, parser.parseComponentValue());
                }
                break;
        }
    };
    var elementDebuggerAttribute = "data-html2canvas-debug";
    var getElementDebugType = function(element) {
        var attribute = element.getAttribute(elementDebuggerAttribute);
        switch(attribute){
            case "all":
                return 1 /* ALL */ ;
            case "clone":
                return 2 /* CLONE */ ;
            case "parse":
                return 3 /* PARSE */ ;
            case "render":
                return 4 /* RENDER */ ;
            default:
                return 0 /* NONE */ ;
        }
    };
    var isDebugging = function(element, type) {
        var elementType = getElementDebugType(element);
        return elementType === 1 /* ALL */  || type === elementType;
    };
    var ElementContainer = /** @class */ function() {
        function ElementContainer(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;
            if (isDebugging(element, 3 /* PARSE */ )) debugger;
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function(duration) {
                    return duration > 0;
                })) element.style.animationDuration = "0s";
                if (this.styles.transform !== null) // getBoundingClientRect takes transforms into account
                element.style.transform = "none";
            }
            this.bounds = parseBounds(this.context, element);
            if (isDebugging(element, 4 /* RENDER */ )) this.flags |= 16 /* DEBUG_RENDER */ ;
        }
        return ElementContainer;
    }();
    /*
     * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$1 = 0; i$1 < chars$1.length; i$1++)lookup$1[chars$1.charCodeAt(i$1)] = i$1;
    var decode = function(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for(i = 0; i < len; i += 4){
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
    };
    var polyUint16Array = function(buffer) {
        var length = buffer.length;
        var bytes = [];
        for(var i = 0; i < length; i += 2)bytes.push(buffer[i + 1] << 8 | buffer[i]);
        return bytes;
    };
    var polyUint32Array = function(buffer) {
        var length = buffer.length;
        var bytes = [];
        for(var i = 0; i < length; i += 4)bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
        return bytes;
    };
    /** Shift size for getting the index-2 table offset. */ var UTRIE2_SHIFT_2 = 5;
    /** Shift size for getting the index-1 table offset. */ var UTRIE2_SHIFT_1 = 11;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */ var UTRIE2_INDEX_SHIFT = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */ var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */ var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
    /** Number of entries in a data block. 32=0x20 */ var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */ var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */ var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */ var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32; /* U+0800 is the first code point after 2-byte UTF-8 */ 
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */ var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */ var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
    /** Number of entries in an index-2 block. 64=0x40 */ var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */ var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
    var slice16 = function(view, start, end) {
        if (view.slice) return view.slice(start, end);
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32 = function(view, start, end) {
        if (view.slice) return view.slice(start, end);
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64 = function(base64, _byteLength) {
        var buffer = decode(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie = /** @class */ function() {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */ Trie.prototype.get = function(codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) return this.data[this.highValueIndex];
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }();
    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */ var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
    var Prepend = 1;
    var CR = 2;
    var LF = 3;
    var Control = 4;
    var Extend = 5;
    var SpacingMark = 7;
    var L = 8;
    var V = 9;
    var T = 10;
    var LV = 11;
    var LVT = 12;
    var ZWJ = 13;
    var Extended_Pictographic = 14;
    var RI = 15;
    var toCodePoints = function(str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while(i < length){
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                else {
                    codePoints.push(value);
                    i--;
                }
            } else codePoints.push(value);
        }
        return codePoints;
    };
    var fromCodePoint = function() {
        var codePoints = [];
        for(var _i = 0; _i < arguments.length; _i++)codePoints[_i] = arguments[_i];
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, codePoints);
        var length = codePoints.length;
        if (!length) return "";
        var codeUnits = [];
        var index = -1;
        var result = "";
        while(++index < length){
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) codeUnits.push(codePoint);
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var UnicodeTrie = createTrieFromBase64(base64);
    var BREAK_NOT_ALLOWED = "\xd7";
    var BREAK_ALLOWED = "\xf7";
    var codePointToClass = function(codePoint) {
        return UnicodeTrie.get(codePoint);
    };
    var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
        var prevIndex = index - 2;
        var prev = classTypes[prevIndex];
        var current = classTypes[index - 1];
        var next = classTypes[index];
        // GB3 Do not break between a CR and LF
        if (current === CR && next === LF) return BREAK_NOT_ALLOWED;
        // GB4 Otherwise, break before and after controls.
        if (current === CR || current === LF || current === Control) return BREAK_ALLOWED;
        // GB5
        if (next === CR || next === LF || next === Control) return BREAK_ALLOWED;
        // Do not break Hangul syllable sequences.
        // GB6
        if (current === L && [
            L,
            V,
            LV,
            LVT
        ].indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
        // GB7
        if ((current === LV || current === V) && (next === V || next === T)) return BREAK_NOT_ALLOWED;
        // GB8
        if ((current === LVT || current === T) && next === T) return BREAK_NOT_ALLOWED;
        // GB9 Do not break before extending characters or ZWJ.
        if (next === ZWJ || next === Extend) return BREAK_NOT_ALLOWED;
        // Do not break before SpacingMarks, or after Prepend characters.
        // GB9a
        if (next === SpacingMark) return BREAK_NOT_ALLOWED;
        // GB9a
        if (current === Prepend) return BREAK_NOT_ALLOWED;
        // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
        if (current === ZWJ && next === Extended_Pictographic) {
            while(prev === Extend)prev = classTypes[--prevIndex];
            if (prev === Extended_Pictographic) return BREAK_NOT_ALLOWED;
        }
        // GB12 Do not break within emoji flag sequences.
        // That is, do not break between regional indicator (RI) symbols
        // if there is an odd number of RI characters before the break point.
        if (current === RI && next === RI) {
            var countRI = 0;
            while(prev === RI){
                countRI++;
                prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) return BREAK_NOT_ALLOWED;
        }
        return BREAK_ALLOWED;
    };
    var GraphemeBreaker = function(str) {
        var codePoints = toCodePoints(str);
        var length = codePoints.length;
        var index = 0;
        var lastEnd = 0;
        var classTypes = codePoints.map(codePointToClass);
        return {
            next: function() {
                if (index >= length) return {
                    done: true,
                    value: null
                };
                var graphemeBreak = BREAK_NOT_ALLOWED;
                while(index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED);
                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                    lastEnd = index;
                    return {
                        value: value,
                        done: false
                    };
                }
                return {
                    done: true,
                    value: null
                };
            }
        };
    };
    var splitGraphemes = function(str) {
        var breaker = GraphemeBreaker(str);
        var graphemes = [];
        var bk;
        while(!(bk = breaker.next()).done)if (bk.value) graphemes.push(bk.value.slice());
        return graphemes;
    };
    var testRangeBounds = function(document1) {
        var TEST_HEIGHT = 123;
        if (document1.createRange) {
            var range = document1.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document1.createElement("boundtest");
                testElement.style.height = TEST_HEIGHT + "px";
                testElement.style.display = "block";
                document1.body.appendChild(testElement);
                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document1.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) return true;
            }
        }
        return false;
    };
    var testIOSLineBreak = function(document1) {
        var testElement = document1.createElement("boundtest");
        testElement.style.width = "50px";
        testElement.style.display = "block";
        testElement.style.fontSize = "12px";
        testElement.style.letterSpacing = "0px";
        testElement.style.wordSpacing = "0px";
        document1.body.appendChild(testElement);
        var range = document1.createRange();
        testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
        var node = testElement.firstChild;
        var textList = toCodePoints$1(node.data).map(function(i) {
            return fromCodePoint$1(i);
        });
        var offset = 0;
        var prev = {};
        // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
        var supports = textList.every(function(text, i) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i === 0) return true;
            return boundAhead;
        });
        document1.body.removeChild(testElement);
        return supports;
    };
    var testCORS = function() {
        return typeof new Image().crossOrigin !== "undefined";
    };
    var testResponseType = function() {
        return typeof new XMLHttpRequest().responseType === "string";
    };
    var testSVG = function(document1) {
        var img = new Image();
        var canvas = document1.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (!ctx) return false;
        img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        } catch (e) {
            return false;
        }
        return true;
    };
    var isGreenPixel = function(data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };
    var testForeignObject = function(document1) {
        var canvas = document1.createElement("canvas");
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext("2d");
        if (!ctx) return Promise.reject(false);
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fillRect(0, 0, size, size);
        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = createForeignObjectSVG(size, size, 0, 0, img);
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, size, size);
        return loadSerializedSVG$1(svg).then(function(img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, size, size);
            var node = document1.createElement("div");
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
        }).then(function(img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        }).catch(function() {
            return false;
        });
    };
    var createForeignObjectSVG = function(width, height, x, y, node) {
        var xmlns = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(xmlns, "svg");
        var foreignObject = document.createElementNS(xmlns, "foreignObject");
        svg.setAttributeNS(null, "width", width.toString());
        svg.setAttributeNS(null, "height", height.toString());
        foreignObject.setAttributeNS(null, "width", "100%");
        foreignObject.setAttributeNS(null, "height", "100%");
        foreignObject.setAttributeNS(null, "x", x.toString());
        foreignObject.setAttributeNS(null, "y", y.toString());
        foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svg;
    };
    var loadSerializedSVG$1 = function(svg) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                return resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var FEATURES = {
        get SUPPORT_RANGE_BOUNDS () {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", {
                value: value
            });
            return value;
        },
        get SUPPORT_WORD_BREAKING () {
            var value1 = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", {
                value: value1
            });
            return value1;
        },
        get SUPPORT_SVG_DRAWING () {
            var value2 = testSVG(document);
            Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", {
                value: value2
            });
            return value2;
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING () {
            var value3 = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                value: value3
            });
            return value3;
        },
        get SUPPORT_CORS_IMAGES () {
            var value4 = testCORS();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", {
                value: value4
            });
            return value4;
        },
        get SUPPORT_RESPONSE_TYPE () {
            var value5 = testResponseType();
            Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", {
                value: value5
            });
            return value5;
        },
        get SUPPORT_CORS_XHR () {
            var value6 = "withCredentials" in new XMLHttpRequest();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", {
                value: value6
            });
            return value6;
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION () {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var value7 = !!(typeof Intl !== "undefined" && Intl.Segmenter);
            Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                value: value7
            });
            return value7;
        }
    };
    var TextBounds = /** @class */ function() {
        function TextBounds(text, bounds) {
            this.text = text;
            this.bounds = bounds;
        }
        return TextBounds;
    }();
    var parseTextBounds = function(context, value, styles, node) {
        var textList = breakText(value, styles);
        var textBounds = [];
        var offset = 0;
        textList.forEach(function(text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
                if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(node, offset, text.length).getClientRects();
                    if (clientRects.length > 1) {
                        var subSegments = segmentGraphemes(text);
                        var subOffset_1 = 0;
                        subSegments.forEach(function(subSegment) {
                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                            subOffset_1 += subSegment.length;
                        });
                    } else textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                } else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                    node = replacementNode;
                }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) node = node.splitText(text.length);
            offset += text.length;
        });
        return textBounds;
    };
    var getWrapperBounds = function(context, node) {
        var ownerDocument = node.ownerDocument;
        if (ownerDocument) {
            var wrapper = ownerDocument.createElement("html2canvaswrapper");
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
                parentNode.replaceChild(wrapper, node);
                var bounds = parseBounds(context, wrapper);
                if (wrapper.firstChild) parentNode.replaceChild(wrapper.firstChild, wrapper);
                return bounds;
            }
        }
        return Bounds.EMPTY;
    };
    var createRange = function(node, offset, length) {
        var ownerDocument = node.ownerDocument;
        if (!ownerDocument) throw new Error("Node has no owner document");
        var range = ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return range;
    };
    var segmentGraphemes = function(value) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularity: "grapheme"
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function(segment) {
                return segment.segment;
            });
        }
        return splitGraphemes(value);
    };
    var segmentWords = function(value, styles) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularity: "word"
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function(segment) {
                return segment.segment;
            });
        }
        return breakWords(value, styles);
    };
    var breakText = function(value, styles) {
        return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
    };
    // https://drafts.csswg.org/css-text/#word-separator
    var wordSeparators = [
        0x0020,
        0x00a0,
        0x1361,
        0x10100,
        0x10101,
        0x1039,
        0x1091
    ];
    var breakWords = function(str, styles) {
        var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */  ? "break-word" : styles.wordBreak
        });
        var words = [];
        var bk;
        var _loop_1 = function() {
            if (bk.value) {
                var value = bk.value.slice();
                var codePoints = toCodePoints$1(value);
                var word_1 = "";
                codePoints.forEach(function(codePoint) {
                    if (wordSeparators.indexOf(codePoint) === -1) word_1 += fromCodePoint$1(codePoint);
                    else {
                        if (word_1.length) words.push(word_1);
                        words.push(fromCodePoint$1(codePoint));
                        word_1 = "";
                    }
                });
                if (word_1.length) words.push(word_1);
            }
        };
        while(!(bk = breaker.next()).done)_loop_1();
        return words;
    };
    var TextContainer = /** @class */ function() {
        function TextContainer(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
        }
        return TextContainer;
    }();
    var transform = function(text, transform) {
        switch(transform){
            case 1 /* LOWERCASE */ :
                return text.toLowerCase();
            case 3 /* CAPITALIZE */ :
                return text.replace(CAPITALIZE, capitalize);
            case 2 /* UPPERCASE */ :
                return text.toUpperCase();
            default:
                return text;
        }
    };
    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
    var capitalize = function(m, p1, p2) {
        if (m.length > 0) return p1 + p2.toUpperCase();
        return m;
    };
    var ImageElementContainer = /** @class */ function(_super) {
        __extends(ImageElementContainer, _super);
        function ImageElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            return _this;
        }
        return ImageElementContainer;
    }(ElementContainer);
    var CanvasElementContainer = /** @class */ function(_super) {
        __extends(CanvasElementContainer, _super);
        function CanvasElementContainer(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;
            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
        }
        return CanvasElementContainer;
    }(ElementContainer);
    var SVGElementContainer = /** @class */ function(_super) {
        __extends(SVGElementContainer, _super);
        function SVGElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute("width", bounds.width + "px");
            img.setAttribute("height", bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            return _this;
        }
        return SVGElementContainer;
    }(ElementContainer);
    var LIElementContainer = /** @class */ function(_super) {
        __extends(LIElementContainer, _super);
        function LIElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return LIElementContainer;
    }(ElementContainer);
    var OLElementContainer = /** @class */ function(_super) {
        __extends(OLElementContainer, _super);
        function OLElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.start = element.start;
            _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
            return _this;
        }
        return OLElementContainer;
    }(ElementContainer);
    var CHECKBOX_BORDER_RADIUS = [
        {
            type: 15 /* DIMENSION_TOKEN */ ,
            flags: 0,
            unit: "px",
            number: 3
        }
    ];
    var RADIO_BORDER_RADIUS = [
        {
            type: 16 /* PERCENTAGE_TOKEN */ ,
            flags: 0,
            number: 50
        }
    ];
    var reformatInputBounds = function(bounds) {
        if (bounds.width > bounds.height) return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
        else if (bounds.width < bounds.height) return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
        return bounds;
    };
    var getInputValue = function(node) {
        var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("•") : node.value;
        return value.length === 0 ? node.placeholder || "" : value;
    };
    var CHECKBOX = "checkbox";
    var RADIO = "radio";
    var PASSWORD = "password";
    var INPUT_COLOR = 0x2a2a2aff;
    var InputElementContainer = /** @class */ function(_super) {
        __extends(InputElementContainer, _super);
        function InputElementContainer(context, input) {
            var _this = _super.call(this, context, input) || this;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 0xdededeff;
                _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 0xa5a5a5ff;
                _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
                _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1 /* SOLID */ ;
                _this.styles.backgroundClip = [
                    0 /* BORDER_BOX */ 
                ];
                _this.styles.backgroundOrigin = [
                    0 /* BORDER_BOX */ 
                ];
                _this.bounds = reformatInputBounds(_this.bounds);
            }
            switch(_this.type){
                case CHECKBOX:
                    _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                    break;
                case RADIO:
                    _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                    break;
            }
            return _this;
        }
        return InputElementContainer;
    }(ElementContainer);
    var SelectElementContainer = /** @class */ function(_super) {
        __extends(SelectElementContainer, _super);
        function SelectElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || "" : "";
            return _this;
        }
        return SelectElementContainer;
    }(ElementContainer);
    var TextareaElementContainer = /** @class */ function(_super) {
        __extends(TextareaElementContainer, _super);
        function TextareaElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return TextareaElementContainer;
    }(ElementContainer);
    var IFrameElementContainer = /** @class */ function(_super) {
        __extends(IFrameElementContainer, _super);
        function IFrameElementContainer(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;
            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            try {
                if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                    _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                    // http://www.w3.org/TR/css3-background/#special-backgrounds
                    var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                    var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                    _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
                }
            } catch (e) {}
            return _this;
        }
        return IFrameElementContainer;
    }(ElementContainer);
    var LIST_OWNERS = [
        "OL",
        "UL",
        "MENU"
    ];
    var parseNodeTree = function(context, node, parent, root) {
        for(var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode){
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes) childNode.assignedNodes().forEach(function(childNode) {
                    return parseNodeTree(context, childNode, parent, root);
                });
                else {
                    var container = createContainer(context, childNode);
                    if (container.styles.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */ ;
                        else if (createsStackingContext(container.styles)) container.flags |= 2 /* CREATES_STACKING_CONTEXT */ ;
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) container.flags |= 8 /* IS_LIST_OWNER */ ;
                        parent.elements.push(container);
                        childNode.slot;
                        if (childNode.shadowRoot) parseNodeTree(context, childNode.shadowRoot, container, root);
                        else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) parseNodeTree(context, childNode, container, root);
                    }
                }
            }
        }
    };
    var createContainer = function(context, element) {
        if (isImageElement(element)) return new ImageElementContainer(context, element);
        if (isCanvasElement(element)) return new CanvasElementContainer(context, element);
        if (isSVGElement(element)) return new SVGElementContainer(context, element);
        if (isLIElement(element)) return new LIElementContainer(context, element);
        if (isOLElement(element)) return new OLElementContainer(context, element);
        if (isInputElement(element)) return new InputElementContainer(context, element);
        if (isSelectElement(element)) return new SelectElementContainer(context, element);
        if (isTextareaElement(element)) return new TextareaElementContainer(context, element);
        if (isIFrameElement(element)) return new IFrameElementContainer(context, element);
        return new ElementContainer(context, element);
    };
    var parseTree = function(context, element) {
        var container = createContainer(context, element);
        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */ ;
        parseNodeTree(context, element, container, container);
        return container;
    };
    var createsRealStackingContext = function(node, container, root) {
        return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
    };
    var createsStackingContext = function(styles) {
        return styles.isPositioned() || styles.isFloating();
    };
    var isTextNode = function(node) {
        return node.nodeType === Node.TEXT_NODE;
    };
    var isElementNode = function(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    };
    var isHTMLElementNode = function(node) {
        return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
    };
    var isSVGElementNode = function(element) {
        return typeof element.className === "object";
    };
    var isLIElement = function(node) {
        return node.tagName === "LI";
    };
    var isOLElement = function(node) {
        return node.tagName === "OL";
    };
    var isInputElement = function(node) {
        return node.tagName === "INPUT";
    };
    var isHTMLElement = function(node) {
        return node.tagName === "HTML";
    };
    var isSVGElement = function(node) {
        return node.tagName === "svg";
    };
    var isBodyElement = function(node) {
        return node.tagName === "BODY";
    };
    var isCanvasElement = function(node) {
        return node.tagName === "CANVAS";
    };
    var isVideoElement = function(node) {
        return node.tagName === "VIDEO";
    };
    var isImageElement = function(node) {
        return node.tagName === "IMG";
    };
    var isIFrameElement = function(node) {
        return node.tagName === "IFRAME";
    };
    var isStyleElement = function(node) {
        return node.tagName === "STYLE";
    };
    var isScriptElement = function(node) {
        return node.tagName === "SCRIPT";
    };
    var isTextareaElement = function(node) {
        return node.tagName === "TEXTAREA";
    };
    var isSelectElement = function(node) {
        return node.tagName === "SELECT";
    };
    var isSlotElement = function(node) {
        return node.tagName === "SLOT";
    };
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var isCustomElement = function(node) {
        return node.tagName.indexOf("-") > 0;
    };
    var CounterState = /** @class */ function() {
        function CounterState() {
            this.counters = {};
        }
        CounterState.prototype.getCounterValue = function(name) {
            var counter = this.counters[name];
            if (counter && counter.length) return counter[counter.length - 1];
            return 1;
        };
        CounterState.prototype.getCounterValues = function(name) {
            var counter = this.counters[name];
            return counter ? counter : [];
        };
        CounterState.prototype.pop = function(counters) {
            var _this = this;
            counters.forEach(function(counter) {
                return _this.counters[counter].pop();
            });
        };
        CounterState.prototype.parse = function(style) {
            var _this = this;
            var counterIncrement = style.counterIncrement;
            var counterReset = style.counterReset;
            var canReset = true;
            if (counterIncrement !== null) counterIncrement.forEach(function(entry) {
                var counter = _this.counters[entry.counter];
                if (counter && entry.increment !== 0) {
                    canReset = false;
                    if (!counter.length) counter.push(1);
                    counter[Math.max(0, counter.length - 1)] += entry.increment;
                }
            });
            var counterNames = [];
            if (canReset) counterReset.forEach(function(entry) {
                var counter = _this.counters[entry.counter];
                counterNames.push(entry.counter);
                if (!counter) counter = _this.counters[entry.counter] = [];
                counter.push(entry.reset);
            });
            return counterNames;
        };
        return CounterState;
    }();
    var ROMAN_UPPER = {
        integers: [
            1000,
            900,
            500,
            400,
            100,
            90,
            50,
            40,
            10,
            9,
            5,
            4,
            1
        ],
        values: [
            "M",
            "CM",
            "D",
            "CD",
            "C",
            "XC",
            "L",
            "XL",
            "X",
            "IX",
            "V",
            "IV",
            "I"
        ]
    };
    var ARMENIAN = {
        integers: [
            9000,
            8000,
            7000,
            6000,
            5000,
            4000,
            3000,
            2000,
            1000,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
        ],
        values: [
            "Ք",
            "Փ",
            "Ւ",
            "Ց",
            "Ր",
            "Տ",
            "Վ",
            "Ս",
            "Ռ",
            "Ջ",
            "Պ",
            "Չ",
            "Ո",
            "Շ",
            "Ն",
            "Յ",
            "Մ",
            "Ճ",
            "Ղ",
            "Ձ",
            "Հ",
            "Կ",
            "Ծ",
            "Խ",
            "Լ",
            "Ի",
            "Ժ",
            "Թ",
            "Ը",
            "Է",
            "Զ",
            "Ե",
            "Դ",
            "Գ",
            "Բ",
            "Ա"
        ]
    };
    var HEBREW = {
        integers: [
            10000,
            9000,
            8000,
            7000,
            6000,
            5000,
            4000,
            3000,
            2000,
            1000,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
        ],
        values: [
            "י׳",
            "ט׳",
            "ח׳",
            "ז׳",
            "ו׳",
            "ה׳",
            "ד׳",
            "ג׳",
            "ב׳",
            "א׳",
            "ת",
            "ש",
            "ר",
            "ק",
            "צ",
            "פ",
            "ע",
            "ס",
            "נ",
            "מ",
            "ל",
            "כ",
            "יט",
            "יח",
            "יז",
            "טז",
            "טו",
            "י",
            "ט",
            "ח",
            "ז",
            "ו",
            "ה",
            "ד",
            "ג",
            "ב",
            "א"
        ]
    };
    var GEORGIAN = {
        integers: [
            10000,
            9000,
            8000,
            7000,
            6000,
            5000,
            4000,
            3000,
            2000,
            1000,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
        ],
        values: [
            "ჵ",
            "ჰ",
            "ჯ",
            "ჴ",
            "ხ",
            "ჭ",
            "წ",
            "ძ",
            "ც",
            "ჩ",
            "შ",
            "ყ",
            "ღ",
            "ქ",
            "ფ",
            "ჳ",
            "ტ",
            "ს",
            "რ",
            "ჟ",
            "პ",
            "ო",
            "ჲ",
            "ნ",
            "მ",
            "ლ",
            "კ",
            "ი",
            "თ",
            "ჱ",
            "ზ",
            "ვ",
            "ე",
            "დ",
            "გ",
            "ბ",
            "ა"
        ]
    };
    var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) return createCounterText(value, fallback, suffix.length > 0);
        return symbols.integers.reduce(function(string, integer, index) {
            while(value >= integer){
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, "") + suffix;
    };
    var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
        var string = "";
        do {
            if (!isNumeric) value--;
            string = resolver(value) + string;
            value /= codePointRangeLength;
        }while (value * codePointRangeLength >= codePointRangeLength);
        return string;
    };
    var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
        return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
        }) + suffix);
    };
    var createCounterStyleFromSymbols = function(value, symbols, suffix) {
        if (suffix === void 0) suffix = ". ";
        var codePointRangeLength = symbols.length;
        return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
        }) + suffix;
    };
    var CJK_ZEROS = 1;
    var CJK_TEN_COEFFICIENTS = 2;
    var CJK_TEN_HIGH_COEFFICIENTS = 4;
    var CJK_HUNDRED_COEFFICIENTS = 8;
    var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) return createCounterText(value, 4 /* CJK_DECIMAL */ , suffix.length > 0);
        var tmp = Math.abs(value);
        var string = suffix;
        if (tmp === 0) return numbers[0] + string;
        for(var digit = 0; tmp > 0 && digit <= 4; digit++){
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") string = numbers[coefficient] + string;
            else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
            else if (coefficient === 1 && digit > 0) string = multipliers[digit - 1] + string;
            tmp = Math.floor(tmp / 10);
        }
        return (value < 0 ? negativeSign : "") + string;
    };
    var CHINESE_INFORMAL_MULTIPLIERS = "十百千萬";
    var CHINESE_FORMAL_MULTIPLIERS = "拾佰仟萬";
    var JAPANESE_NEGATIVE = "マイナス";
    var KOREAN_NEGATIVE = "마이너스";
    var createCounterText = function(value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? ". " : "";
        var cjkSuffix = appendSuffix ? "、" : "";
        var koreanSuffix = appendSuffix ? ", " : "";
        var spaceSuffix = appendSuffix ? " " : "";
        switch(type){
            case 0 /* DISC */ :
                return "•" + spaceSuffix;
            case 1 /* CIRCLE */ :
                return "◦" + spaceSuffix;
            case 2 /* SQUARE */ :
                return "◾" + spaceSuffix;
            case 5 /* DECIMAL_LEADING_ZERO */ :
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? "0" + string : string;
            case 4 /* CJK_DECIMAL */ :
                return createCounterStyleFromSymbols(value, "〇一二三四五六七八九", cjkSuffix);
            case 6 /* LOWER_ROMAN */ :
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */ , defaultSuffix).toLowerCase();
            case 7 /* UPPER_ROMAN */ :
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */ , defaultSuffix);
            case 8 /* LOWER_GREEK */ :
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9 /* LOWER_ALPHA */ :
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10 /* UPPER_ALPHA */ :
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11 /* ARABIC_INDIC */ :
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12 /* ARMENIAN */ :
            case 49 /* UPPER_ARMENIAN */ :
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */ , defaultSuffix);
            case 35 /* LOWER_ARMENIAN */ :
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */ , defaultSuffix).toLowerCase();
            case 13 /* BENGALI */ :
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14 /* CAMBODIAN */ :
            case 30 /* KHMER */ :
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15 /* CJK_EARTHLY_BRANCH */ :
                return createCounterStyleFromSymbols(value, "子丑寅卯辰巳午未申酉戌亥", cjkSuffix);
            case 16 /* CJK_HEAVENLY_STEM */ :
                return createCounterStyleFromSymbols(value, "甲乙丙丁戊己庚辛壬癸", cjkSuffix);
            case 17 /* CJK_IDEOGRAPHIC */ :
            case 48 /* TRAD_CHINESE_INFORMAL */ :
                return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47 /* TRAD_CHINESE_FORMAL */ :
                return createCJKCounter(value, "零壹貳參肆伍陸柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42 /* SIMP_CHINESE_INFORMAL */ :
                return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41 /* SIMP_CHINESE_FORMAL */ :
                return createCJKCounter(value, "零壹贰叁肆伍陆柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26 /* JAPANESE_INFORMAL */ :
                return createCJKCounter(value, "〇一二三四五六七八九", "十百千万", JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25 /* JAPANESE_FORMAL */ :
                return createCJKCounter(value, "零壱弐参四伍六七八九", "拾百千万", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31 /* KOREAN_HANGUL_FORMAL */ :
                return createCJKCounter(value, "영일이삼사오육칠팔구", "십백천만", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33 /* KOREAN_HANJA_INFORMAL */ :
                return createCJKCounter(value, "零一二三四五六七八九", "十百千萬", KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32 /* KOREAN_HANJA_FORMAL */ :
                return createCJKCounter(value, "零壹貳參四五六七八九", "拾百千", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18 /* DEVANAGARI */ :
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case 20 /* GEORGIAN */ :
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */ , defaultSuffix);
            case 21 /* GUJARATI */ :
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case 22 /* GURMUKHI */ :
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case 22 /* HEBREW */ :
                return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */ , defaultSuffix);
            case 23 /* HIRAGANA */ :
                return createCounterStyleFromSymbols(value, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
            case 24 /* HIRAGANA_IROHA */ :
                return createCounterStyleFromSymbols(value, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
            case 27 /* KANNADA */ :
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case 28 /* KATAKANA */ :
                return createCounterStyleFromSymbols(value, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", cjkSuffix);
            case 29 /* KATAKANA_IROHA */ :
                return createCounterStyleFromSymbols(value, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", cjkSuffix);
            case 34 /* LAO */ :
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case 37 /* MONGOLIAN */ :
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case 38 /* MYANMAR */ :
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case 39 /* ORIYA */ :
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case 40 /* PERSIAN */ :
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case 43 /* TAMIL */ :
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case 44 /* TELUGU */ :
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case 45 /* THAI */ :
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case 46 /* TIBETAN */ :
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case 3 /* DECIMAL */ :
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };
    var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
    var DocumentCloner = /** @class */ function() {
        function DocumentCloner(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!element.ownerDocument) throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
        }
        DocumentCloner.prototype.toIFrame = function(ownerDocument, windowSize) {
            var _this = this;
            var iframe = createIFrameContainer(ownerDocument, windowSize);
            if (!iframe.contentWindow) return Promise.reject("Unable to find iframe window");
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */ var iframeLoad = iframeLoader(iframe).then(function() {
                return __awaiter(_this, void 0, void 0, function() {
                    var onclone, referenceElement;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                this.scrolledElements.forEach(restoreNodeScroll);
                                if (cloneWindow) {
                                    cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                        this.context.logger.warn("Unable to restore scroll position for cloned document");
                                        this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                    }
                                }
                                onclone = this.options.onclone;
                                referenceElement = this.clonedReferenceElement;
                                if (typeof referenceElement === "undefined") return [
                                    2 /*return*/ ,
                                    Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")
                                ];
                                if (!(documentClone.fonts && documentClone.fonts.ready)) return [
                                    3 /*break*/ ,
                                    2
                                ];
                                return [
                                    4 /*yield*/ ,
                                    documentClone.fonts.ready
                                ];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [
                                    3 /*break*/ ,
                                    4
                                ];
                                return [
                                    4 /*yield*/ ,
                                    imagesReady(documentClone)
                                ];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                if (typeof onclone === "function") return [
                                    2 /*return*/ ,
                                    Promise.resolve().then(function() {
                                        return onclone(documentClone, referenceElement);
                                    }).then(function() {
                                        return iframe;
                                    })
                                ];
                                return [
                                    2 /*return*/ ,
                                    iframe
                                ];
                        }
                    });
                });
            });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            // Chrome scrolls the parent document for some reason after the write to the cloned window???
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
        };
        DocumentCloner.prototype.createElementClone = function(node) {
            if (isDebugging(node, 2 /* CLONE */ )) debugger;
            if (isCanvasElement(node)) return this.createCanvasClone(node);
            if (isVideoElement(node)) return this.createVideoClone(node);
            if (isStyleElement(node)) return this.createStyleClone(node);
            var clone = node.cloneNode(false);
            if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                    clone.src = node.currentSrc;
                    clone.srcset = "";
                }
                if (clone.loading === "lazy") clone.loading = "eager";
            }
            if (isCustomElement(clone)) return this.createCustomElementClone(clone);
            return clone;
        };
        DocumentCloner.prototype.createCustomElementClone = function(node) {
            var clone = document.createElement("html2canvascustomelement");
            copyCSSStyles(node.style, clone);
            return clone;
        };
        DocumentCloner.prototype.createStyleClone = function(node) {
            try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function(css, rule) {
                        if (rule && typeof rule.cssText === "string") return css + rule.cssText;
                        return css;
                    }, "");
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }
            } catch (e) {
                // accessing node.sheet.cssRules throws a DOMException
                this.context.logger.error("Unable to access cssRules property", e);
                if (e.name !== "SecurityError") throw e;
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.createCanvasClone = function(canvas) {
            var _a;
            if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement("img");
                try {
                    img.src = canvas.toDataURL();
                    return img;
                } catch (e) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
            }
            var clonedCanvas = canvas.cloneNode(false);
            try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext("2d");
                var clonedCtx = clonedCanvas.getContext("2d");
                if (clonedCtx) {
                    if (!this.options.allowTaint && ctx) clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    else {
                        var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
                        if (gl) {
                            var attribs = gl.getContextAttributes();
                            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
                        }
                        clonedCtx.drawImage(canvas, 0, 0);
                    }
                }
                return clonedCanvas;
            } catch (e) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }
            return clonedCanvas;
        };
        DocumentCloner.prototype.createVideoClone = function(video) {
            var canvas = video.ownerDocument.createElement("canvas");
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = canvas.getContext("2d");
            try {
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (!this.options.allowTaint) ctx.getImageData(0, 0, canvas.width, canvas.height);
                }
                return canvas;
            } catch (e) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
            }
            var blankCanvas = video.ownerDocument.createElement("canvas");
            blankCanvas.width = video.offsetWidth;
            blankCanvas.height = video.offsetHeight;
            return blankCanvas;
        };
        DocumentCloner.prototype.appendChildNode = function(clone, child, copyStyles) {
            if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) clone.appendChild(this.cloneNode(child, copyStyles));
            }
        };
        DocumentCloner.prototype.cloneChildNodes = function(node, clone, copyStyles) {
            var _this = this;
            for(var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling)if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
                var assignedNodes = child.assignedNodes();
                if (assignedNodes.length) assignedNodes.forEach(function(assignedNode) {
                    return _this.appendChildNode(clone, assignedNode, copyStyles);
                });
            } else this.appendChildNode(clone, child, copyStyles);
        };
        DocumentCloner.prototype.cloneNode = function(node, copyStyles) {
            if (isTextNode(node)) return document.createTextNode(node.data);
            if (!node.ownerDocument) return node.cloneNode(false);
            var window1 = node.ownerDocument.defaultView;
            if (window1 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = "none";
                var style = window1.getComputedStyle(node);
                var styleBefore = window1.getComputedStyle(node, ":before");
                var styleAfter = window1.getComputedStyle(node, ":after");
                if (this.referenceElement === node && isHTMLElementNode(clone)) this.clonedReferenceElement = clone;
                if (isBodyElement(clone)) createPseudoHideStyles(clone);
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) copyStyles = true;
                if (!isVideoElement(node)) this.cloneChildNodes(node, clone, copyStyles);
                if (before) clone.insertBefore(before, clone.firstChild);
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) clone.appendChild(after);
                this.counters.pop(counters);
                if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) copyCSSStyles(style, clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) this.scrolledElements.push([
                    clone,
                    node.scrollLeft,
                    node.scrollTop
                ]);
                if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) clone.value = node.value;
                return clone;
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
            var _this = this;
            if (!style) return;
            var value = style.content;
            var document1 = clone.ownerDocument;
            if (!document1 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") return;
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document1.createElement("html2canvaspseudoelement");
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function(token) {
                if (token.type === 0 /* STRING_TOKEN */ ) anonymousReplacedElement.appendChild(document1.createTextNode(token.value));
                else if (token.type === 22 /* URL_TOKEN */ ) {
                    var img = document1.createElement("img");
                    img.src = token.value;
                    img.style.opacity = "1";
                    anonymousReplacedElement.appendChild(img);
                } else if (token.type === 18 /* FUNCTION */ ) {
                    if (token.name === "attr") {
                        var attr = token.values.filter(isIdentToken);
                        if (attr.length) anonymousReplacedElement.appendChild(document1.createTextNode(node.getAttribute(attr[0].value) || ""));
                    } else if (token.name === "counter") {
                        var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                        if (counter && isIdentToken(counter)) {
                            var counterState = _this.counters.getCounterValue(counter.value);
                            var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3 /* DECIMAL */ ;
                            anonymousReplacedElement.appendChild(document1.createTextNode(createCounterText(counterState, counterType, false)));
                        }
                    } else if (token.name === "counters") {
                        var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                        if (counter && isIdentToken(counter)) {
                            var counterStates = _this.counters.getCounterValues(counter.value);
                            var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3 /* DECIMAL */ ;
                            var separator = delim && delim.type === 0 /* STRING_TOKEN */  ? delim.value : "";
                            var text = counterStates.map(function(value) {
                                return createCounterText(value, counterType_1, false);
                            }).join(separator);
                            anonymousReplacedElement.appendChild(document1.createTextNode(text));
                        }
                    }
                } else if (token.type === 20 /* IDENT_TOKEN */ ) switch(token.value){
                    case "open-quote":
                        anonymousReplacedElement.appendChild(document1.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                        break;
                    case "close-quote":
                        anonymousReplacedElement.appendChild(document1.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                        break;
                    default:
                        // safari doesn't parse string tokens correctly because of lack of quotes
                        anonymousReplacedElement.appendChild(document1.createTextNode(token.value));
                }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clone)) clone.className.baseValue += newClassName;
            else clone.className += newClassName;
            return anonymousReplacedElement;
        };
        DocumentCloner.destroy = function(container) {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
            }
            return false;
        };
        return DocumentCloner;
    }();
    var PseudoElementType;
    (function(PseudoElementType) {
        PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
        PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
    })(PseudoElementType || (PseudoElementType = {}));
    var createIFrameContainer = function(ownerDocument, bounds) {
        var cloneIframeContainer = ownerDocument.createElement("iframe");
        cloneIframeContainer.className = "html2canvas-container";
        cloneIframeContainer.style.visibility = "hidden";
        cloneIframeContainer.style.position = "fixed";
        cloneIframeContainer.style.left = "-10000px";
        cloneIframeContainer.style.top = "0px";
        cloneIframeContainer.style.border = "0";
        cloneIframeContainer.width = bounds.width.toString();
        cloneIframeContainer.height = bounds.height.toString();
        cloneIframeContainer.scrolling = "no"; // ios won't scroll without it
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
        ownerDocument.body.appendChild(cloneIframeContainer);
        return cloneIframeContainer;
    };
    var imageReady = function(img) {
        return new Promise(function(resolve) {
            if (img.complete) {
                resolve();
                return;
            }
            if (!img.src) {
                resolve();
                return;
            }
            img.onload = resolve;
            img.onerror = resolve;
        });
    };
    var imagesReady = function(document1) {
        return Promise.all([].slice.call(document1.images, 0).map(imageReady));
    };
    var iframeLoader = function(iframe) {
        return new Promise(function(resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) return reject("No window assigned for iframe");
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function() {
                cloneWindow.onload = iframe.onload = null;
                var interval = setInterval(function() {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                        clearInterval(interval);
                        resolve(iframe);
                    }
                }, 50);
            };
        });
    };
    var ignoredStyleProperties = [
        "all",
        "d",
        "content" // Safari shows pseudoelements if content is set
    ];
    var copyCSSStyles = function(style, target) {
        // Edge does not provide value for cssText
        for(var i = style.length - 1; i >= 0; i--){
            var property = style.item(i);
            if (ignoredStyleProperties.indexOf(property) === -1) target.style.setProperty(property, style.getPropertyValue(property));
        }
        return target;
    };
    var serializeDoctype = function(doctype) {
        var str = "";
        if (doctype) {
            str += "<!DOCTYPE ";
            if (doctype.name) str += doctype.name;
            if (doctype.internalSubset) str += doctype.internalSubset;
            if (doctype.publicId) str += '"' + doctype.publicId + '"';
            if (doctype.systemId) str += '"' + doctype.systemId + '"';
            str += ">";
        }
        return str;
    };
    var restoreOwnerScroll = function(ownerDocument, x, y) {
        if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) ownerDocument.defaultView.scrollTo(x, y);
    };
    var restoreNodeScroll = function(_a) {
        var element = _a[0], x = _a[1], y = _a[2];
        element.scrollLeft = x;
        element.scrollTop = y;
    };
    var PSEUDO_BEFORE = ":before";
    var PSEUDO_AFTER = ":after";
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
    var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
    var createPseudoHideStyles = function(body) {
        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };
    var createStyles = function(body, styles) {
        var document1 = body.ownerDocument;
        if (document1) {
            var style = document1.createElement("style");
            style.textContent = styles;
            body.appendChild(style);
        }
    };
    var CacheStorage = /** @class */ function() {
        function CacheStorage() {}
        CacheStorage.getOrigin = function(url) {
            var link = CacheStorage._link;
            if (!link) return "about:blank";
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        };
        CacheStorage.isSameOrigin = function(src) {
            return CacheStorage.getOrigin(src) === CacheStorage._origin;
        };
        CacheStorage.setContext = function(window1) {
            CacheStorage._link = window1.document.createElement("a");
            CacheStorage._origin = CacheStorage.getOrigin(window1.location.href);
        };
        CacheStorage._origin = "about:blank";
        return CacheStorage;
    }();
    var Cache = /** @class */ function() {
        function Cache(context, _options) {
            this.context = context;
            this._options = _options;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._cache = {};
        }
        Cache.prototype.addImage = function(src) {
            var result = Promise.resolve();
            if (this.has(src)) return result;
            if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function() {
                // prevent unhandled rejection
                });
                return result;
            }
            return result;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cache.prototype.match = function(src) {
            return this._cache[src];
        };
        Cache.prototype.loadImage = function(key) {
            return __awaiter(this, void 0, void 0, function() {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            isSameOrigin = CacheStorage.isSameOrigin(key);
                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                            useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                            if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) return [
                                2 /*return*/ 
                            ];
                            src = key;
                            if (!useProxy) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                this.proxy(src)
                            ];
                        case 1:
                            src = _a.sent();
                            _a.label = 2;
                        case 2:
                            this.context.logger.debug("Added image " + key.substring(0, 256));
                            return [
                                4 /*yield*/ ,
                                new Promise(function(resolve, reject) {
                                    var img = new Image();
                                    img.onload = function() {
                                        return resolve(img);
                                    };
                                    img.onerror = reject;
                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                    if (isInlineBase64Image(src) || useCORS) img.crossOrigin = "anonymous";
                                    img.src = src;
                                    if (img.complete === true) // Inline XML images may fail to parse, throwing an Error later on
                                    setTimeout(function() {
                                        return resolve(img);
                                    }, 500);
                                    if (_this._options.imageTimeout > 0) setTimeout(function() {
                                        return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                                    }, _this._options.imageTimeout);
                                })
                            ];
                        case 3:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Cache.prototype.has = function(key) {
            return typeof this._cache[key] !== "undefined";
        };
        Cache.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache));
        };
        Cache.prototype.proxy = function(src) {
            var _this = this;
            var proxy = this._options.proxy;
            if (!proxy) throw new Error("No proxy defined");
            var key = src.substring(0, 256);
            return new Promise(function(resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        if (responseType === "text") resolve(xhr.response);
                        else {
                            var reader_1 = new FileReader();
                            reader_1.addEventListener("load", function() {
                                return resolve(reader_1.result);
                            }, false);
                            reader_1.addEventListener("error", function(e) {
                                return reject(e);
                            }, false);
                            reader_1.readAsDataURL(xhr.response);
                        }
                    } else reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
                xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== "text" && xhr instanceof XMLHttpRequest) xhr.responseType = responseType;
                if (_this._options.imageTimeout) {
                    var timeout_1 = _this._options.imageTimeout;
                    xhr.timeout = timeout_1;
                    xhr.ontimeout = function() {
                        return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                    };
                }
                xhr.send();
            });
        };
        return Cache;
    }();
    var INLINE_SVG = /^data:image\/svg\+xml/i;
    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
    var INLINE_IMG = /^data:image\/.*/i;
    var isRenderable = function(src) {
        return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
    };
    var isInlineImage = function(src) {
        return INLINE_IMG.test(src);
    };
    var isInlineBase64Image = function(src) {
        return INLINE_BASE64.test(src);
    };
    var isBlobImage = function(src) {
        return src.substr(0, 4) === "blob";
    };
    var isSVG = function(src) {
        return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
    };
    var Vector = /** @class */ function() {
        function Vector(x, y) {
            this.type = 0 /* VECTOR */ ;
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function(deltaX, deltaY) {
            return new Vector(this.x + deltaX, this.y + deltaY);
        };
        return Vector;
    }();
    var lerp = function(a, b, t) {
        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };
    var BezierCurve = /** @class */ function() {
        function BezierCurve(start, startControl, endControl, end) {
            this.type = 1 /* BEZIER_CURVE */ ;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }
        BezierCurve.prototype.subdivide = function(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        };
        BezierCurve.prototype.add = function(deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
        };
        BezierCurve.prototype.reverse = function() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        };
        return BezierCurve;
    }();
    var isBezierCurve = function(path) {
        return path.type === 1 /* BEZIER_CURVE */ ;
    };
    var BoundCurves = /** @class */ function() {
        function BoundCurves(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }
            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth = styles.borderTopWidth;
            var borderRightWidth = styles.borderRightWidth;
            var borderBottomWidth = styles.borderBottomWidth;
            var borderLeftWidth = styles.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3, tlh - borderLeftWidth * 2 / 3, tlv - borderTopWidth * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
            this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth * 2 / 3, trh - borderRightWidth * 2 / 3, trv - borderTopWidth * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
            this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth * 2 / 3, brv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
            this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth * 2 / 3, blv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
            this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
            this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
            this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
            this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
            this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
            this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
            this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
            this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
            this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
        }
        return BoundCurves;
    }();
    var CORNER;
    (function(CORNER) {
        CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
        CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(CORNER || (CORNER = {}));
    var getCurvePoints = function(x, y, r1, r2, position) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var ox = r1 * kappa; // control point offset horizontal
        var oy = r2 * kappa; // control point offset vertical
        var xm = x + r1; // x-middle
        var ym = y + r2; // y-middle
        switch(position){
            case CORNER.TOP_LEFT:
                return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
                return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
                return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
                return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
        }
    };
    var calculateBorderBoxPath = function(curves) {
        return [
            curves.topLeftBorderBox,
            curves.topRightBorderBox,
            curves.bottomRightBorderBox,
            curves.bottomLeftBorderBox
        ];
    };
    var calculateContentBoxPath = function(curves) {
        return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
        ];
    };
    var calculatePaddingBoxPath = function(curves) {
        return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
        ];
    };
    var TransformEffect = /** @class */ function() {
        function TransformEffect(offsetX, offsetY, matrix) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix;
            this.type = 0 /* TRANSFORM */ ;
            this.target = 6 /* CONTENT */ ;
        }
        return TransformEffect;
    }();
    var ClipEffect = /** @class */ function() {
        function ClipEffect(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1 /* CLIP */ ;
        }
        return ClipEffect;
    }();
    var OpacityEffect = /** @class */ function() {
        function OpacityEffect(opacity) {
            this.opacity = opacity;
            this.type = 2 /* OPACITY */ ;
            this.target = 6 /* CONTENT */ ;
        }
        return OpacityEffect;
    }();
    var isTransformEffect = function(effect) {
        return effect.type === 0 /* TRANSFORM */ ;
    };
    var isClipEffect = function(effect) {
        return effect.type === 1 /* CLIP */ ;
    };
    var isOpacityEffect = function(effect) {
        return effect.type === 2 /* OPACITY */ ;
    };
    var equalPath = function(a, b) {
        if (a.length === b.length) return a.some(function(v, i) {
            return v === b[i];
        });
        return false;
    };
    var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
        return path.map(function(point, index) {
            switch(index){
                case 0:
                    return point.add(deltaX, deltaY);
                case 1:
                    return point.add(deltaX + deltaW, deltaY);
                case 2:
                    return point.add(deltaX + deltaW, deltaY + deltaH);
                case 3:
                    return point.add(deltaX, deltaY + deltaH);
            }
            return point;
        });
    };
    var StackingContext = /** @class */ function() {
        function StackingContext(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
        }
        return StackingContext;
    }();
    var ElementPaint = /** @class */ function() {
        function ElementPaint(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);
            if (this.container.styles.opacity < 1) this.effects.push(new OpacityEffect(this.container.styles.opacity));
            if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }
            if (this.container.styles.overflowX !== 0 /* VISIBLE */ ) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox)) this.effects.push(new ClipEffect(borderBox, 6 /* CONTENT */ ));
                else {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ ));
                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */ ));
                }
            }
        }
        ElementPaint.prototype.getEffects = function(target) {
            var inFlow = [
                2 /* ABSOLUTE */ ,
                3 /* FIXED */ 
            ].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);
            while(parent){
                var croplessEffects = parent.effects.filter(function(effect) {
                    return !isClipEffect(effect);
                });
                if (inFlow || parent.container.styles.position !== 0 /* STATIC */  || !parent.parent) {
                    effects.unshift.apply(effects, croplessEffects);
                    inFlow = [
                        2 /* ABSOLUTE */ ,
                        3 /* FIXED */ 
                    ].indexOf(parent.container.styles.position) === -1;
                    if (parent.container.styles.overflowX !== 0 /* VISIBLE */ ) {
                        var borderBox = calculateBorderBoxPath(parent.curves);
                        var paddingBox = calculatePaddingBoxPath(parent.curves);
                        if (!equalPath(borderBox, paddingBox)) effects.unshift(new ClipEffect(paddingBox, 6 /* CONTENT */ ));
                    }
                } else effects.unshift.apply(effects, croplessEffects);
                parent = parent.parent;
            }
            return effects.filter(function(effect) {
                return contains(effect.target, target);
            });
        };
        return ElementPaint;
    }();
    var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
        parent.container.elements.forEach(function(child) {
            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */ );
            var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */ );
            var paintContainer = new ElementPaint(child, parent);
            if (contains(child.styles.display, 2048 /* LIST_ITEM */ )) listItems.push(paintContainer);
            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */ ) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext) {
                var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                var stack = new StackingContext(paintContainer);
                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                    var order_1 = child.styles.zIndex.order;
                    if (order_1 < 0) {
                        var index_1 = 0;
                        parentStack.negativeZIndex.some(function(current, i) {
                            if (order_1 > current.element.container.styles.zIndex.order) {
                                index_1 = i;
                                return false;
                            } else if (index_1 > 0) return true;
                            return false;
                        });
                        parentStack.negativeZIndex.splice(index_1, 0, stack);
                    } else if (order_1 > 0) {
                        var index_2 = 0;
                        parentStack.positiveZIndex.some(function(current, i) {
                            if (order_1 >= current.element.container.styles.zIndex.order) {
                                index_2 = i + 1;
                                return false;
                            } else if (index_2 > 0) return true;
                            return false;
                        });
                        parentStack.positiveZIndex.splice(index_2, 0, stack);
                    } else parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                } else if (child.styles.isFloating()) parentStack.nonPositionedFloats.push(stack);
                else parentStack.nonPositionedInlineLevel.push(stack);
                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
                if (child.styles.isInlineLevel()) stackingContext.inlineLevel.push(paintContainer);
                else stackingContext.nonInlineLevel.push(paintContainer);
                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8 /* IS_LIST_OWNER */ )) processListItems(child, listOwnerItems);
        });
    };
    var processListItems = function(owner, elements) {
        var numbering = owner instanceof OLElementContainer ? owner.start : 1;
        var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
        for(var i = 0; i < elements.length; i++){
            var item = elements[i];
            if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) numbering = item.container.value;
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
        }
    };
    var parseStackingContexts = function(container) {
        var paintContainer = new ElementPaint(container, null);
        var root = new StackingContext(paintContainer);
        var listItems = [];
        parseStackTree(paintContainer, root, root, listItems);
        processListItems(paintContainer.container, listItems);
        return root;
    };
    var parsePathForBorder = function(curves, borderSide) {
        switch(borderSide){
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderDoubleOuter = function(curves, borderSide) {
        switch(borderSide){
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
        }
    };
    var parsePathForBorderDoubleInner = function(curves, borderSide) {
        switch(borderSide){
            case 0:
                return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderStroke = function(curves, borderSide) {
        switch(borderSide){
            case 0:
                return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
                return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
                return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
                return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
        }
    };
    var createStrokePathFromCurves = function(outer1, outer2) {
        var path = [];
        if (isBezierCurve(outer1)) path.push(outer1.subdivide(0.5, false));
        else path.push(outer1);
        if (isBezierCurve(outer2)) path.push(outer2.subdivide(0.5, true));
        else path.push(outer2);
        return path;
    };
    var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
        var path = [];
        if (isBezierCurve(outer1)) path.push(outer1.subdivide(0.5, false));
        else path.push(outer1);
        if (isBezierCurve(outer2)) path.push(outer2.subdivide(0.5, true));
        else path.push(outer2);
        if (isBezierCurve(inner2)) path.push(inner2.subdivide(0.5, true).reverse());
        else path.push(inner2);
        if (isBezierCurve(inner1)) path.push(inner1.subdivide(0.5, false).reverse());
        else path.push(inner1);
        return path;
    };
    var paddingBox = function(element) {
        var bounds = element.bounds;
        var styles = element.styles;
        return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
    };
    var contentBox = function(element) {
        var styles = element.styles;
        var bounds = element.bounds;
        var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
        var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
        var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
        var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
        return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
    };
    var calculateBackgroundPositioningArea = function(backgroundOrigin, element) {
        if (backgroundOrigin === 0 /* BORDER_BOX */ ) return element.bounds;
        if (backgroundOrigin === 2 /* CONTENT_BOX */ ) return contentBox(element);
        return paddingBox(element);
    };
    var calculateBackgroundPaintingArea = function(backgroundClip, element) {
        if (backgroundClip === 0 /* BORDER_BOX */ ) return element.bounds;
        if (backgroundClip === 2 /* CONTENT_BOX */ ) return contentBox(element);
        return paddingBox(element);
    };
    var calculateBackgroundRendering = function(container, index, intrinsicSize) {
        var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
        var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
        var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
        var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
        return [
            path,
            offsetX,
            offsetY,
            sizeWidth,
            sizeHeight
        ];
    };
    var isAuto = function(token) {
        return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
    };
    var hasIntrinsicValue = function(value) {
        return typeof value === "number";
    };
    var calculateBackgroundSize = function(size, _a, bounds) {
        var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
        var first = size[0], second = size[1];
        if (!first) return [
            0,
            0
        ];
        if (isLengthPercentage(first) && second && isLengthPercentage(second)) return [
            getAbsoluteValue(first, bounds.width),
            getAbsoluteValue(second, bounds.height)
        ];
        var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
                var targetRatio = bounds.width / bounds.height;
                return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [
                    bounds.width,
                    bounds.width / intrinsicProportion
                ] : [
                    bounds.height * intrinsicProportion,
                    bounds.height
                ];
            }
            return [
                bounds.width,
                bounds.height
            ];
        }
        var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
        var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
        // If the background-size is auto or auto auto:
        if (isAuto(first) && (!second || isAuto(second))) {
            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
            if (hasIntrinsicWidth && hasIntrinsicHeight) return [
                intrinsicWidth,
                intrinsicHeight
            ];
            // If the image has no intrinsic dimensions and has no intrinsic proportions,
            // it's rendered at the size of the background positioning area.
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) return [
                bounds.width,
                bounds.height
            ];
            // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
            // The other dimension is computed using the specified dimension and the intrinsic proportions.
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
                var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
                return [
                    width_1,
                    height_1
                ];
            }
            // If the image has only one intrinsic dimension but has no intrinsic proportions,
            // it's rendered using the specified dimension and the other dimension of the background positioning area.
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [
                width_2,
                height_2
            ];
        }
        // If the image has intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
        if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) width_3 = getAbsoluteValue(first, bounds.width);
            else if (isLengthPercentage(second)) height_3 = getAbsoluteValue(second, bounds.height);
            if (isAuto(first)) width_3 = height_3 * intrinsicProportion;
            else if (!second || isAuto(second)) height_3 = width_3 / intrinsicProportion;
            return [
                width_3,
                height_3
            ];
        }
        // If the image has no intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
        // if there is one. If there is no such intrinsic dimension,
        // it becomes the corresponding dimension of the background positioning area.
        var width = null;
        var height = null;
        if (isLengthPercentage(first)) width = getAbsoluteValue(first, bounds.width);
        else if (second && isLengthPercentage(second)) height = getAbsoluteValue(second, bounds.height);
        if (width !== null && (!second || isAuto(second))) height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
        if (height !== null && isAuto(first)) width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
        if (width !== null && height !== null) return [
            width,
            height
        ];
        throw new Error("Unable to calculate background-size for element");
    };
    var getBackgroundValueForIndex = function(values, index) {
        var value = values[index];
        if (typeof value === "undefined") return values[0];
        return value;
    };
    var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
        var x = _a[0], y = _a[1];
        var width = _b[0], height = _b[1];
        switch(repeat){
            case 2 /* REPEAT_X */ :
                return [
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                ];
            case 3 /* REPEAT_Y */ :
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                ];
            case 1 /* NO_REPEAT */ :
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                ];
            default:
                return [
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                ];
        }
    };
    var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    var SAMPLE_TEXT = "Hidden Text";
    var FontMetrics = /** @class */ function() {
        function FontMetrics(document1) {
            this._data = {};
            this._document = document1;
        }
        FontMetrics.prototype.parseMetrics = function(fontFamily, fontSize) {
            var container = this._document.createElement("div");
            var img = this._document.createElement("img");
            var span = this._document.createElement("span");
            var body = this._document.body;
            container.style.visibility = "hidden";
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            container.style.margin = "0";
            container.style.padding = "0";
            container.style.whiteSpace = "nowrap";
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = "0";
            img.style.padding = "0";
            img.style.verticalAlign = "baseline";
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            span.style.margin = "0";
            span.style.padding = "0";
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = "normal";
            img.style.verticalAlign = "super";
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return {
                baseline: baseline,
                middle: middle
            };
        };
        FontMetrics.prototype.getMetrics = function(fontFamily, fontSize) {
            var key = fontFamily + " " + fontSize;
            if (typeof this._data[key] === "undefined") this._data[key] = this.parseMetrics(fontFamily, fontSize);
            return this._data[key];
        };
        return FontMetrics;
    }();
    var Renderer = /** @class */ function() {
        function Renderer(context, options) {
            this.context = context;
            this.options = options;
        }
        return Renderer;
    }();
    var MASK_OFFSET = 10000;
    var CanvasRenderer = /** @class */ function(_super) {
        __extends(CanvasRenderer, _super);
        function CanvasRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
            _this.ctx = _this.canvas.getContext("2d");
            if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(document);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.ctx.textBaseline = "bottom";
            _this._activeEffects = [];
            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
            return _this;
        }
        CanvasRenderer.prototype.applyEffects = function(effects) {
            var _this = this;
            while(this._activeEffects.length)this.popEffect();
            effects.forEach(function(effect) {
                return _this.applyEffect(effect);
            });
        };
        CanvasRenderer.prototype.applyEffect = function(effect) {
            this.ctx.save();
            if (isOpacityEffect(effect)) this.ctx.globalAlpha = effect.opacity;
            if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
            }
            this._activeEffects.push(effect);
        };
        CanvasRenderer.prototype.popEffect = function() {
            this._activeEffects.pop();
            this.ctx.restore();
        };
        CanvasRenderer.prototype.renderStack = function(stack) {
            return __awaiter(this, void 0, void 0, function() {
                var styles;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            styles = stack.element.container.styles;
                            if (!styles.isVisible()) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderStackContent(stack)
                            ];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNode = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */ )) debugger;
                            if (!paint.container.styles.isVisible()) return [
                                3 /*break*/ ,
                                3
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderNodeBackgroundAndBorders(paint)
                            ];
                        case 1:
                            _a.sent();
                            return [
                                4 /*yield*/ ,
                                this.renderNodeContent(paint)
                            ];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderTextWithLetterSpacing = function(text, letterSpacing, baseline) {
            var _this = this;
            if (letterSpacing === 0) this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function(left, letter) {
                    _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                    return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
            }
        };
        CanvasRenderer.prototype.createFontStyle = function(styles) {
            var fontVariant = styles.fontVariant.filter(function(variant) {
                return variant === "normal" || variant === "small-caps";
            }).join("");
            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(", ");
            var fontSize = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
            return [
                [
                    styles.fontStyle,
                    fontVariant,
                    styles.fontWeight,
                    fontSize,
                    fontFamily
                ].join(" "),
                fontFamily,
                fontSize
            ];
        };
        CanvasRenderer.prototype.renderTextNode = function(text, styles) {
            return __awaiter(this, void 0, void 0, function() {
                var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
                var _this = this;
                return __generator(this, function(_c) {
                    _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                    this.ctx.font = font;
                    this.ctx.direction = styles.direction === 1 /* RTL */  ? "rtl" : "ltr";
                    this.ctx.textAlign = "left";
                    this.ctx.textBaseline = "alphabetic";
                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                    paintOrder = styles.paintOrder;
                    text.textBounds.forEach(function(text) {
                        paintOrder.forEach(function(paintOrderLayer) {
                            switch(paintOrderLayer){
                                case 0 /* FILL */ :
                                    _this.ctx.fillStyle = asString(styles.color);
                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                    var textShadows = styles.textShadow;
                                    if (textShadows.length && text.text.trim().length) {
                                        textShadows.slice(0).reverse().forEach(function(textShadow) {
                                            _this.ctx.shadowColor = asString(textShadow.color);
                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                            _this.ctx.shadowBlur = textShadow.blur.number;
                                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                        });
                                        _this.ctx.shadowColor = "";
                                        _this.ctx.shadowOffsetX = 0;
                                        _this.ctx.shadowOffsetY = 0;
                                        _this.ctx.shadowBlur = 0;
                                    }
                                    if (styles.textDecorationLine.length) {
                                        _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                        styles.textDecorationLine.forEach(function(textDecorationLine) {
                                            switch(textDecorationLine){
                                                case 1 /* UNDERLINE */ :
                                                    // Draws a line at the baseline of the font
                                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                    // need to take that into account both in position and size
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                    break;
                                                case 2 /* OVERLINE */ :
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                    break;
                                                case 3 /* LINE_THROUGH */ :
                                                    // TODO try and find exact position for line-through
                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                    break;
                                            }
                                        });
                                    }
                                    break;
                                case 1 /* STROKE */ :
                                    if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                        _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                                        _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                    }
                                    _this.ctx.strokeStyle = "";
                                    _this.ctx.lineWidth = 0;
                                    _this.ctx.lineJoin = "miter";
                                    break;
                            }
                        });
                    });
                    return [
                        2 /*return*/ 
                    ];
                });
            });
        };
        CanvasRenderer.prototype.renderReplacedElement = function(container, curves, image) {
            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
            }
        };
        CanvasRenderer.prototype.renderNodeContent = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
                var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
                return __generator(this, function(_c) {
                    switch(_c.label){
                        case 0:
                            this.applyEffects(paint.getEffects(4 /* CONTENT */ ));
                            container = paint.container;
                            curves = paint.curves;
                            styles = container.styles;
                            _i = 0, _a = container.textNodes;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [
                                3 /*break*/ ,
                                4
                            ];
                            child = _a[_i];
                            return [
                                4 /*yield*/ ,
                                this.renderTextNode(child, styles)
                            ];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [
                                3 /*break*/ ,
                                1
                            ];
                        case 4:
                            if (!(container instanceof ImageElementContainer)) return [
                                3 /*break*/ ,
                                8
                            ];
                            _c.label = 5;
                        case 5:
                            _c.trys.push([
                                5,
                                7,
                                ,
                                8
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.context.cache.match(container.src)
                            ];
                        case 6:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [
                                3 /*break*/ ,
                                8
                            ];
                        case 7:
                            _c.sent();
                            this.context.logger.error("Error loading image " + container.src);
                            return [
                                3 /*break*/ ,
                                8
                            ];
                        case 8:
                            if (container instanceof CanvasElementContainer) this.renderReplacedElement(container, curves, container.canvas);
                            if (!(container instanceof SVGElementContainer)) return [
                                3 /*break*/ ,
                                12
                            ];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([
                                9,
                                11,
                                ,
                                12
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.context.cache.match(container.svg)
                            ];
                        case 10:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [
                                3 /*break*/ ,
                                12
                            ];
                        case 11:
                            _c.sent();
                            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                            return [
                                3 /*break*/ ,
                                12
                            ];
                        case 12:
                            if (!(container instanceof IFrameElementContainer && container.tree)) return [
                                3 /*break*/ ,
                                14
                            ];
                            iframeRenderer = new CanvasRenderer(this.context, {
                                scale: this.options.scale,
                                backgroundColor: container.backgroundColor,
                                x: 0,
                                y: 0,
                                width: container.width,
                                height: container.height
                            });
                            return [
                                4 /*yield*/ ,
                                iframeRenderer.render(container.tree)
                            ];
                        case 13:
                            canvas = _c.sent();
                            if (container.width && container.height) this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                            _c.label = 14;
                        case 14:
                            if (container instanceof InputElementContainer) {
                                size = Math.min(container.bounds.width, container.bounds.height);
                                if (container.type === CHECKBOX) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.path([
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                        ]);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                } else if (container.type === RADIO) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.ctx.beginPath();
                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                            }
                            if (isTextInputElement(container) && container.value.length) {
                                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = "alphabetic";
                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                bounds = contentBox(container);
                                x = 0;
                                switch(container.styles.textAlign){
                                    case 1 /* CENTER */ :
                                        x += bounds.width / 2;
                                        break;
                                    case 2 /* RIGHT */ :
                                        x += bounds.width;
                                        break;
                                }
                                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                this.ctx.save();
                                this.path([
                                    new Vector(bounds.left, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                    new Vector(bounds.left, bounds.top + bounds.height)
                                ]);
                                this.ctx.clip();
                                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                                this.ctx.restore();
                                this.ctx.textBaseline = "alphabetic";
                                this.ctx.textAlign = "left";
                            }
                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */ )) return [
                                3 /*break*/ ,
                                20
                            ];
                            if (!(container.styles.listStyleImage !== null)) return [
                                3 /*break*/ ,
                                19
                            ];
                            img = container.styles.listStyleImage;
                            if (!(img.type === 0 /* URL */ )) return [
                                3 /*break*/ ,
                                18
                            ];
                            image = void 0;
                            url = img.url;
                            _c.label = 15;
                        case 15:
                            _c.trys.push([
                                15,
                                17,
                                ,
                                18
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.context.cache.match(url)
                            ];
                        case 16:
                            image = _c.sent();
                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                            return [
                                3 /*break*/ ,
                                18
                            ];
                        case 17:
                            _c.sent();
                            this.context.logger.error("Error loading list-style-image " + url);
                            return [
                                3 /*break*/ ,
                                18
                            ];
                        case 18:
                            return [
                                3 /*break*/ ,
                                20
                            ];
                        case 19:
                            if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */ ) {
                                fontFamily = this.createFontStyle(styles)[0];
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = "middle";
                                this.ctx.textAlign = "right";
                                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                this.ctx.textBaseline = "bottom";
                                this.ctx.textAlign = "left";
                            }
                            _c.label = 20;
                        case 20:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderStackContent = function(stack) {
            return __awaiter(this, void 0, void 0, function() {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function(_p) {
                    switch(_p.label){
                        case 0:
                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */ )) debugger;
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            return [
                                4 /*yield*/ ,
                                this.renderNodeBackgroundAndBorders(stack.element)
                            ];
                        case 1:
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            _p.sent();
                            _i = 0, _a = stack.negativeZIndex;
                            _p.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [
                                3 /*break*/ ,
                                5
                            ];
                            child = _a[_i];
                            return [
                                4 /*yield*/ ,
                                this.renderStack(child)
                            ];
                        case 3:
                            _p.sent();
                            _p.label = 4;
                        case 4:
                            _i++;
                            return [
                                3 /*break*/ ,
                                2
                            ];
                        case 5:
                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                            return [
                                4 /*yield*/ ,
                                this.renderNodeContent(stack.element)
                            ];
                        case 6:
                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                            _p.sent();
                            _b = 0, _c = stack.nonInlineLevel;
                            _p.label = 7;
                        case 7:
                            if (!(_b < _c.length)) return [
                                3 /*break*/ ,
                                10
                            ];
                            child = _c[_b];
                            return [
                                4 /*yield*/ ,
                                this.renderNode(child)
                            ];
                        case 8:
                            _p.sent();
                            _p.label = 9;
                        case 9:
                            _b++;
                            return [
                                3 /*break*/ ,
                                7
                            ];
                        case 10:
                            _d = 0, _e = stack.nonPositionedFloats;
                            _p.label = 11;
                        case 11:
                            if (!(_d < _e.length)) return [
                                3 /*break*/ ,
                                14
                            ];
                            child = _e[_d];
                            return [
                                4 /*yield*/ ,
                                this.renderStack(child)
                            ];
                        case 12:
                            _p.sent();
                            _p.label = 13;
                        case 13:
                            _d++;
                            return [
                                3 /*break*/ ,
                                11
                            ];
                        case 14:
                            _f = 0, _g = stack.nonPositionedInlineLevel;
                            _p.label = 15;
                        case 15:
                            if (!(_f < _g.length)) return [
                                3 /*break*/ ,
                                18
                            ];
                            child = _g[_f];
                            return [
                                4 /*yield*/ ,
                                this.renderStack(child)
                            ];
                        case 16:
                            _p.sent();
                            _p.label = 17;
                        case 17:
                            _f++;
                            return [
                                3 /*break*/ ,
                                15
                            ];
                        case 18:
                            _h = 0, _j = stack.inlineLevel;
                            _p.label = 19;
                        case 19:
                            if (!(_h < _j.length)) return [
                                3 /*break*/ ,
                                22
                            ];
                            child = _j[_h];
                            return [
                                4 /*yield*/ ,
                                this.renderNode(child)
                            ];
                        case 20:
                            _p.sent();
                            _p.label = 21;
                        case 21:
                            _h++;
                            return [
                                3 /*break*/ ,
                                19
                            ];
                        case 22:
                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                            _p.label = 23;
                        case 23:
                            if (!(_k < _l.length)) return [
                                3 /*break*/ ,
                                26
                            ];
                            child = _l[_k];
                            return [
                                4 /*yield*/ ,
                                this.renderStack(child)
                            ];
                        case 24:
                            _p.sent();
                            _p.label = 25;
                        case 25:
                            _k++;
                            return [
                                3 /*break*/ ,
                                23
                            ];
                        case 26:
                            _m = 0, _o = stack.positiveZIndex;
                            _p.label = 27;
                        case 27:
                            if (!(_m < _o.length)) return [
                                3 /*break*/ ,
                                30
                            ];
                            child = _o[_m];
                            return [
                                4 /*yield*/ ,
                                this.renderStack(child)
                            ];
                        case 28:
                            _p.sent();
                            _p.label = 29;
                        case 29:
                            _m++;
                            return [
                                3 /*break*/ ,
                                27
                            ];
                        case 30:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.mask = function(paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.path = function(paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.formatPath = function(paths) {
            var _this = this;
            paths.forEach(function(point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) _this.ctx.moveTo(start.x, start.y);
                else _this.ctx.lineTo(start.x, start.y);
                if (isBezierCurve(point)) _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
            });
        };
        CanvasRenderer.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        };
        CanvasRenderer.prototype.resizeImage = function(image, width, height) {
            var _a;
            if (image.width === width && image.height === height) return image;
            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement("canvas");
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            return canvas;
        };
        CanvasRenderer.prototype.renderBackgroundImage = function(container) {
            return __awaiter(this, void 0, void 0, function() {
                var index, _loop_1, this_1, _i, _a, backgroundImage;
                return __generator(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            index = container.styles.backgroundImage.length - 1;
                            _loop_1 = function(backgroundImage) {
                                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                return __generator(this, function(_h) {
                                    switch(_h.label){
                                        case 0:
                                            if (!(backgroundImage.type === 0 /* URL */ )) return [
                                                3 /*break*/ ,
                                                5
                                            ];
                                            image = void 0;
                                            url = backgroundImage.url;
                                            _h.label = 1;
                                        case 1:
                                            _h.trys.push([
                                                1,
                                                3,
                                                ,
                                                4
                                            ]);
                                            return [
                                                4 /*yield*/ ,
                                                this_1.context.cache.match(url)
                                            ];
                                        case 2:
                                            image = _h.sent();
                                            return [
                                                3 /*break*/ ,
                                                4
                                            ];
                                        case 3:
                                            _h.sent();
                                            this_1.context.logger.error("Error loading background-image " + url);
                                            return [
                                                3 /*break*/ ,
                                                4
                                            ];
                                        case 4:
                                            if (image) {
                                                _c = calculateBackgroundRendering(container, index, [
                                                    image.width,
                                                    image.height,
                                                    image.width / image.height
                                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), "repeat");
                                                this_1.renderRepeat(path, pattern, x, y);
                                            }
                                            return [
                                                3 /*break*/ ,
                                                6
                                            ];
                                        case 5:
                                            if (isLinearGradient(backgroundImage)) {
                                                _d = calculateBackgroundRendering(container, index, [
                                                    null,
                                                    null,
                                                    null
                                                ]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                                _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                canvas = document.createElement("canvas");
                                                canvas.width = width;
                                                canvas.height = height;
                                                ctx = canvas.getContext("2d");
                                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                processColorStops(backgroundImage.stops, lineLength).forEach(function(colorStop) {
                                                    return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                ctx.fillStyle = gradient_1;
                                                ctx.fillRect(0, 0, width, height);
                                                if (width > 0 && height > 0) {
                                                    pattern = this_1.ctx.createPattern(canvas, "repeat");
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                            } else if (isRadialGradient(backgroundImage)) {
                                                _f = calculateBackgroundRendering(container, index, [
                                                    null,
                                                    null,
                                                    null
                                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                                position = backgroundImage.position.length === 0 ? [
                                                    FIFTY_PERCENT
                                                ] : backgroundImage.position;
                                                x = getAbsoluteValue(position[0], width);
                                                y = getAbsoluteValue(position[position.length - 1], height);
                                                _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                                if (rx > 0 && ry > 0) {
                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function(colorStop) {
                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    this_1.path(path);
                                                    this_1.ctx.fillStyle = radialGradient_1;
                                                    if (rx !== ry) {
                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
                                                        f = ry / rx;
                                                        invF = 1 / f;
                                                        this_1.ctx.save();
                                                        this_1.ctx.translate(midX, midY);
                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                        this_1.ctx.translate(-midX, -midY);
                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                        this_1.ctx.restore();
                                                    } else this_1.ctx.fill();
                                                }
                                            }
                                            _h.label = 6;
                                        case 6:
                                            index--;
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [
                                3 /*break*/ ,
                                4
                            ];
                            backgroundImage = _a[_i];
                            return [
                                5 /*yield**/ ,
                                _loop_1(backgroundImage)
                            ];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [
                                3 /*break*/ ,
                                1
                            ];
                        case 4:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderSolidBorder = function(color, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    this.path(parsePathForBorder(curvePoints, side));
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    return [
                        2 /*return*/ 
                    ];
                });
            });
        };
        CanvasRenderer.prototype.renderDoubleBorder = function(color, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function() {
                var outerPaths, innerPaths;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!(width < 3)) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderSolidBorder(color, side, curvePoints)
                            ];
                        case 1:
                            _a.sent();
                            return [
                                2 /*return*/ 
                            ];
                        case 2:
                            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                            this.path(outerPaths);
                            this.ctx.fillStyle = asString(color);
                            this.ctx.fill();
                            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                            this.path(innerPaths);
                            this.ctx.fill();
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */ ));
                            styles = paint.container.styles;
                            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                            borders = [
                                {
                                    style: styles.borderTopStyle,
                                    color: styles.borderTopColor,
                                    width: styles.borderTopWidth
                                },
                                {
                                    style: styles.borderRightStyle,
                                    color: styles.borderRightColor,
                                    width: styles.borderRightWidth
                                },
                                {
                                    style: styles.borderBottomStyle,
                                    color: styles.borderBottomColor,
                                    width: styles.borderBottomWidth
                                },
                                {
                                    style: styles.borderLeftStyle,
                                    color: styles.borderLeftColor,
                                    width: styles.borderLeftWidth
                                }
                            ];
                            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                            if (!(hasBackground || styles.boxShadow.length)) return [
                                3 /*break*/ ,
                                2
                            ];
                            this.ctx.save();
                            this.path(backgroundPaintingArea);
                            this.ctx.clip();
                            if (!isTransparent(styles.backgroundColor)) {
                                this.ctx.fillStyle = asString(styles.backgroundColor);
                                this.ctx.fill();
                            }
                            return [
                                4 /*yield*/ ,
                                this.renderBackgroundImage(paint.container)
                            ];
                        case 1:
                            _a.sent();
                            this.ctx.restore();
                            styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                                _this.ctx.save();
                                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                if (shadow.inset) {
                                    _this.path(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.mask(shadowPaintingArea);
                                } else {
                                    _this.mask(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.path(shadowPaintingArea);
                                }
                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                _this.ctx.shadowColor = asString(shadow.color);
                                _this.ctx.shadowBlur = shadow.blur.number;
                                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                                _this.ctx.fill();
                                _this.ctx.restore();
                            });
                            _a.label = 2;
                        case 2:
                            side = 0;
                            _i = 0, borders_1 = borders;
                            _a.label = 3;
                        case 3:
                            if (!(_i < borders_1.length)) return [
                                3 /*break*/ ,
                                13
                            ];
                            border = borders_1[_i];
                            if (!(border.style !== 0 /* NONE */  && !isTransparent(border.color) && border.width > 0)) return [
                                3 /*break*/ ,
                                11
                            ];
                            if (!(border.style === 2 /* DASHED */ )) return [
                                3 /*break*/ ,
                                5
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */ )
                            ];
                        case 4:
                            _a.sent();
                            return [
                                3 /*break*/ ,
                                11
                            ];
                        case 5:
                            if (!(border.style === 3 /* DOTTED */ )) return [
                                3 /*break*/ ,
                                7
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */ )
                            ];
                        case 6:
                            _a.sent();
                            return [
                                3 /*break*/ ,
                                11
                            ];
                        case 7:
                            if (!(border.style === 4 /* DOUBLE */ )) return [
                                3 /*break*/ ,
                                9
                            ];
                            return [
                                4 /*yield*/ ,
                                this.renderDoubleBorder(border.color, border.width, side, paint.curves)
                            ];
                        case 8:
                            _a.sent();
                            return [
                                3 /*break*/ ,
                                11
                            ];
                        case 9:
                            return [
                                4 /*yield*/ ,
                                this.renderSolidBorder(border.color, side, paint.curves)
                            ];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            side++;
                            _a.label = 12;
                        case 12:
                            _i++;
                            return [
                                3 /*break*/ ,
                                3
                            ];
                        case 13:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderDashedDottedBorder = function(color, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function() {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function(_a) {
                    this.ctx.save();
                    strokePaths = parsePathForBorderStroke(curvePoints, side);
                    boxPaths = parsePathForBorder(curvePoints, side);
                    if (style === 2 /* DASHED */ ) {
                        this.path(boxPaths);
                        this.ctx.clip();
                    }
                    if (isBezierCurve(boxPaths[0])) {
                        startX = boxPaths[0].start.x;
                        startY = boxPaths[0].start.y;
                    } else {
                        startX = boxPaths[0].x;
                        startY = boxPaths[0].y;
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        endX = boxPaths[1].end.x;
                        endY = boxPaths[1].end.y;
                    } else {
                        endX = boxPaths[1].x;
                        endY = boxPaths[1].y;
                    }
                    if (side === 0 || side === 2) length = Math.abs(startX - endX);
                    else length = Math.abs(startY - endY);
                    this.ctx.beginPath();
                    if (style === 3 /* DOTTED */ ) this.formatPath(strokePaths);
                    else this.formatPath(boxPaths.slice(0, 2));
                    dashLength = width < 3 ? width * 3 : width * 2;
                    spaceLength = width < 3 ? width * 2 : width;
                    if (style === 3 /* DOTTED */ ) {
                        dashLength = width;
                        spaceLength = width;
                    }
                    useLineDash = true;
                    if (length <= dashLength * 2) useLineDash = false;
                    else if (length <= dashLength * 2 + spaceLength) {
                        multiplier = length / (2 * dashLength + spaceLength);
                        dashLength *= multiplier;
                        spaceLength *= multiplier;
                    } else {
                        numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                        minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                        maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                        spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                    }
                    if (useLineDash) {
                        if (style === 3 /* DOTTED */ ) this.ctx.setLineDash([
                            0,
                            dashLength + spaceLength
                        ]);
                        else this.ctx.setLineDash([
                            dashLength,
                            spaceLength
                        ]);
                    }
                    if (style === 3 /* DOTTED */ ) {
                        this.ctx.lineCap = "round";
                        this.ctx.lineWidth = width;
                    } else this.ctx.lineWidth = width * 2 + 1.1;
                    this.ctx.strokeStyle = asString(color);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    // dashed round edge gap
                    if (style === 2 /* DASHED */ ) {
                        if (isBezierCurve(boxPaths[0])) {
                            path1 = boxPaths[3];
                            path2 = boxPaths[0];
                            this.ctx.beginPath();
                            this.formatPath([
                                new Vector(path1.end.x, path1.end.y),
                                new Vector(path2.start.x, path2.start.y)
                            ]);
                            this.ctx.stroke();
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            path1 = boxPaths[1];
                            path2 = boxPaths[2];
                            this.ctx.beginPath();
                            this.formatPath([
                                new Vector(path1.end.x, path1.end.y),
                                new Vector(path2.start.x, path2.start.y)
                            ]);
                            this.ctx.stroke();
                        }
                    }
                    this.ctx.restore();
                    return [
                        2 /*return*/ 
                    ];
                });
            });
        };
        CanvasRenderer.prototype.render = function(element) {
            return __awaiter(this, void 0, void 0, function() {
                var stack;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                            }
                            stack = parseStackingContexts(element);
                            return [
                                4 /*yield*/ ,
                                this.renderStack(stack)
                            ];
                        case 1:
                            _a.sent();
                            this.applyEffects([]);
                            return [
                                2 /*return*/ ,
                                this.canvas
                            ];
                    }
                });
            });
        };
        return CanvasRenderer;
    }(Renderer);
    var isTextInputElement = function(container) {
        if (container instanceof TextareaElementContainer) return true;
        else if (container instanceof SelectElementContainer) return true;
        else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) return true;
        return false;
    };
    var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
        switch(clip){
            case 0 /* BORDER_BOX */ :
                return calculateBorderBoxPath(curves);
            case 2 /* CONTENT_BOX */ :
                return calculateContentBoxPath(curves);
            case 1 /* PADDING_BOX */ :
            default:
                return calculatePaddingBoxPath(curves);
        }
    };
    var canvasTextAlign = function(textAlign) {
        switch(textAlign){
            case 1 /* CENTER */ :
                return "center";
            case 2 /* RIGHT */ :
                return "right";
            case 0 /* LEFT */ :
            default:
                return "left";
        }
    };
    // see https://github.com/niklasvh/html2canvas/pull/2645
    var iOSBrokenFonts = [
        "-apple-system",
        "system-ui"
    ];
    var fixIOSSystemFonts = function(fontFamilies) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily) {
            return iOSBrokenFonts.indexOf(fontFamily) === -1;
        }) : fontFamilies;
    };
    var ForeignObjectRenderer = /** @class */ function(_super) {
        __extends(ForeignObjectRenderer, _super);
        function ForeignObjectRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
            _this.ctx = _this.canvas.getContext("2d");
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            return _this;
        }
        ForeignObjectRenderer.prototype.render = function(element) {
            return __awaiter(this, void 0, void 0, function() {
                var svg, img;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                            return [
                                4 /*yield*/ ,
                                loadSerializedSVG(svg)
                            ];
                        case 1:
                            img = _a.sent();
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                            }
                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                            return [
                                2 /*return*/ ,
                                this.canvas
                            ];
                    }
                });
            });
        };
        return ForeignObjectRenderer;
    }(Renderer);
    var loadSerializedSVG = function(svg) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var Logger = /** @class */ function() {
        function Logger(_a) {
            var id = _a.id, enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.debug = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== "undefined" && window.console && typeof console.debug === "function") // eslint-disable-next-line no-console
                console.debug.apply(console, __spreadArray([
                    this.id,
                    this.getTime() + "ms"
                ], args));
                else this.info.apply(this, args);
            }
        };
        Logger.prototype.getTime = function() {
            return Date.now() - this.start;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.info = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (this.enabled) // eslint-disable-next-line no-console
            {
                if (typeof window !== "undefined" && window.console && typeof console.info === "function") // eslint-disable-next-line no-console
                console.info.apply(console, __spreadArray([
                    this.id,
                    this.getTime() + "ms"
                ], args));
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.warn = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== "undefined" && window.console && typeof console.warn === "function") // eslint-disable-next-line no-console
                console.warn.apply(console, __spreadArray([
                    this.id,
                    this.getTime() + "ms"
                ], args));
                else this.info.apply(this, args);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.error = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== "undefined" && window.console && typeof console.error === "function") // eslint-disable-next-line no-console
                console.error.apply(console, __spreadArray([
                    this.id,
                    this.getTime() + "ms"
                ], args));
                else this.info.apply(this, args);
            }
        };
        Logger.instances = {};
        return Logger;
    }();
    var Context = /** @class */ function() {
        function Context(options, windowBounds) {
            var _a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({
                id: this.instanceName,
                enabled: options.logging
            });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
        }
        Context.instanceCount = 1;
        return Context;
    }();
    var html2canvas = function(element, options) {
        if (options === void 0) options = {};
        return renderElement(element, options);
    };
    if (typeof window !== "undefined") CacheStorage.setContext(window);
    var renderElement = function(element, opts) {
        return __awaiter(void 0, void 0, void 0, function() {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function(_u) {
                switch(_u.label){
                    case 0:
                        if (!element || typeof element !== "object") return [
                            2 /*return*/ ,
                            Promise.reject("Invalid element provided as first argument")
                        ];
                        ownerDocument = element.ownerDocument;
                        if (!ownerDocument) throw new Error("Element is not attached to a Document");
                        defaultView = ownerDocument.defaultView;
                        if (!defaultView) throw new Error("Document is not attached to a Window");
                        resourceOptions = {
                            allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                            imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                            proxy: opts.proxy,
                            useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                        };
                        contextOptions = __assign({
                            logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true,
                            cache: opts.cache
                        }, resourceOptions);
                        windowOptions = {
                            windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                            windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                            scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                            scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                        };
                        windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                        context = new Context(contextOptions, windowBounds);
                        foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                        cloneOptions = {
                            allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                            onclone: opts.onclone,
                            ignoreElements: opts.ignoreElements,
                            inlineImages: foreignObjectRendering,
                            copyStyles: foreignObjectRendering
                        };
                        context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                        documentCloner = new DocumentCloner(context, element, cloneOptions);
                        clonedElement = documentCloner.clonedReferenceElement;
                        if (!clonedElement) return [
                            2 /*return*/ ,
                            Promise.reject("Unable to find element in cloned iframe")
                        ];
                        return [
                            4 /*yield*/ ,
                            documentCloner.toIFrame(ownerDocument, windowBounds)
                        ];
                    case 1:
                        container = _u.sent();
                        _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                        backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                        renderOptions = {
                            canvas: opts.canvas,
                            backgroundColor: backgroundColor,
                            scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                            x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                            y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                            width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                            height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                        };
                        if (!foreignObjectRendering) return [
                            3 /*break*/ ,
                            3
                        ];
                        context.logger.debug("Document cloned, using foreign object rendering");
                        renderer = new ForeignObjectRenderer(context, renderOptions);
                        return [
                            4 /*yield*/ ,
                            renderer.render(clonedElement)
                        ];
                    case 2:
                        canvas = _u.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                        context.logger.debug("Starting DOM parsing");
                        root = parseTree(context, clonedElement);
                        if (backgroundColor === root.styles.backgroundColor) root.styles.backgroundColor = COLORS.TRANSPARENT;
                        context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                        renderer = new CanvasRenderer(context, renderOptions);
                        return [
                            4 /*yield*/ ,
                            renderer.render(root)
                        ];
                    case 4:
                        canvas = _u.sent();
                        _u.label = 5;
                    case 5:
                        if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                            if (!DocumentCloner.destroy(container)) context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                        }
                        context.logger.debug("Finished rendering");
                        return [
                            2 /*return*/ ,
                            canvas
                        ];
                }
            });
        });
    };
    var parseBackgroundColor = function(context, element, backgroundColorOverride) {
        var ownerDocument = element.ownerDocument;
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
        var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
        var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 0xffffffff;
        return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
    };
    return html2canvas;
});


var $39e7bd012fbaed99$exports = {};
$39e7bd012fbaed99$exports = JSON.parse('{"name":"civitai_prompt_scraper","browserslist":"> 5%, last 1 versions, not dead","version":"1.0.0","description":"","source":"src/prompt_scraper.user.ts","browser ":"dist/prompt_scraper.user.js","targets":{"default":{"context":"browser","sourceMap":false,"includeNodeModules":true}},"scripts":{"type-check":"tsc --noEmit","lint":"eslint","format":"prettier --write .","watch":"parcel watch","build":"parcel build; zip -v -j ./dist/prompt_scraper.zip ./dist/prompt_scraper.user.js","clean":"rm ./dist/*","test":"echo \\"Error: no test specified\\" && exit 1"},"author":"Watanabe, Shunsuke","license":"MIT","devDependencies":{"@damoclark/parcel-optimizer-userscript":"^0.0.2","@parcel/packager-ts":"^2.8.3","@parcel/transformer-typescript-types":"^2.8.3","@tsconfig/recommended":"^1.0.2","@types/file-saver":"^2.0.5","@types/lodash":"^4.14.191","@typescript-eslint/eslint-plugin":"^5.52.0","@typescript-eslint/parser":"^5.52.0","@violentmonkey/types":"^0.1.5","eslint":"^8.34.0","eslint-config-standard-with-typescript":"^34.0.0","eslint-plugin-import":"^2.27.5","eslint-plugin-n":"^15.6.1","eslint-plugin-promise":"^6.1.1","parcel":"^2.8.3","prettier":"^2.8.4","typescript":"^4.9.5"},"dependencies":{"@violentmonkey/url":"^0.1.0","@zip.js/zip.js":"^2.6.63","file-saver":"^2.0.5","html2canvas":"^1.4.1","lodash":"^4.17.21","wazip":"^0.1.0"}}');


const $0fccda82d33153ac$export$bef1f36f5486a6a3 = (...xs)=>{
    console.log(`${(0, (/*@__PURE__*/$parcel$interopDefault($39e7bd012fbaed99$exports))).name}:`, ...xs);
};
const $0fccda82d33153ac$var$getLocale = ()=>{
    return window.navigator.language;
};
const $0fccda82d33153ac$export$d397f86d22f413e8 = ()=>{
    const locale = $0fccda82d33153ac$var$getLocale();
    switch(locale){
        case "ja":
            return "画像＆JSONダウンロード";
        case "zh-TW":
            return "下載圖像和JSON";
        case "zh-CN":
            return "下载图像和JSON";
        default:
            return "Download images with JSON";
    }
};
const $0fccda82d33153ac$export$ccac0588af5e2fe6 = ()=>{
    const locale = $0fccda82d33153ac$var$getLocale();
    switch(locale){
        case "ja":
            return "ダウンロード中";
        case "zh-TW":
            return "下載中";
        case "zh-CN":
            return "下载中";
        default:
            return "downloading";
    }
};
const $0fccda82d33153ac$export$4d9f09007b08c03d = ()=>{
    const locale = $0fccda82d33153ac$var$getLocale();
    switch(locale){
        case "ja":
            return "完了";
        case "zh-TW":
        case "zh-CN":
            return "完成";
        default:
            return "done";
    }
};
const $0fccda82d33153ac$export$e772c8ff12451969 = (ms = 1000)=>new Promise((resolve)=>setTimeout(()=>resolve(true), ms));
const $0fccda82d33153ac$export$1a1c301579a08d1e = async (selector, retryLimit = 10)=>{
    if (retryLimit < 1) return null;
    const element = document.querySelector(selector);
    if (!element) {
        await $0fccda82d33153ac$export$e772c8ff12451969();
        return await $0fccda82d33153ac$export$1a1c301579a08d1e(selector, retryLimit - 1);
    } else return element;
};
const $0fccda82d33153ac$export$b56cc0ee0a85f41e = (url, width, name)=>`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${url}/width=${width},optimized=true/${name ?? ""}`;
const $0fccda82d33153ac$export$ce1398d1c23018fa = ()=>{
    const nextData = document.querySelector("#__NEXT_DATA__") || {
        innerText: ""
    };
    const data = JSON.parse(nextData.innerText);
    return data;
};
const $0fccda82d33153ac$export$741c241189eb771c = async ()=>{
    const main = await $0fccda82d33153ac$export$1a1c301579a08d1e("main");
    if (!main) return;
    main.style.letterSpacing = "0.1rem";
    document.querySelectorAll("canvas").forEach((x)=>x.remove());
    const canvas = await (0, (/*@__PURE__*/$parcel$interopDefault($7bca1b586ae97c45$exports)))(main, {
        allowTaint: true
    });
    const div = document.createElement("div");
    div.setAttribute("style", "border: 1px solid red;");
    div.appendChild(canvas);
    document.body.appendChild(div);
    main.style.letterSpacing = "inherit";
};


var $b9a27db92abc3f0f$exports = {};
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else b();
})($b9a27db92abc3f0f$exports, function() {
    "use strict";
    function b(a, b) {
        return "undefined" == typeof b ? b = {
            autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([
            "\uFEFF",
            a
        ], {
            type: a.type
        }) : a;
    }
    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error("could not download file");
        }, d.send();
    }
    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send();
        } catch (a) {}
        return 200 <= b.status && 299 >= b.status;
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof $parcel$global && $parcel$global.global === $parcel$global ? $parcel$global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
            i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function() {
            e(j);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
        else if (d(f)) c(f, g, h);
        else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function() {
                e(i);
            });
        }
    } : function(b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader;
            k.onloadend = function() {
                var a = k.result;
                a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
        } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                l.revokeObjectURL(m);
            }, 4E4);
        }
    });
    f.saveAs = g.saveAs = g, $b9a27db92abc3f0f$exports = g;
});


/// <reference types="./index.d.ts" />
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ // deno-lint-ignore-file no-this-alias prefer-const
// Global
const $39b8545e666ec171$var$MAX_BITS = 15;
const $39b8545e666ec171$var$D_CODES = 30;
const $39b8545e666ec171$var$BL_CODES = 19;
const $39b8545e666ec171$var$LENGTH_CODES = 29;
const $39b8545e666ec171$var$LITERALS = 256;
const $39b8545e666ec171$var$L_CODES = $39b8545e666ec171$var$LITERALS + 1 + $39b8545e666ec171$var$LENGTH_CODES;
const $39b8545e666ec171$var$HEAP_SIZE = 2 * $39b8545e666ec171$var$L_CODES + 1;
const $39b8545e666ec171$var$END_BLOCK = 256;
// Bit length codes must not exceed MAX_BL_BITS bits
const $39b8545e666ec171$var$MAX_BL_BITS = 7;
// repeat previous bit length 3-6 times (2 bits of repeat count)
const $39b8545e666ec171$var$REP_3_6 = 16;
// repeat a zero length 3-10 times (3 bits of repeat count)
const $39b8545e666ec171$var$REPZ_3_10 = 17;
// repeat a zero length 11-138 times (7 bits of repeat count)
const $39b8545e666ec171$var$REPZ_11_138 = 18;
// The lengths of the bit length codes are sent in order of decreasing
// probability, to avoid transmitting the lengths for unused bit
// length codes.
const $39b8545e666ec171$var$Buf_size = 16;
// JZlib version : "1.0.2"
const $39b8545e666ec171$var$Z_DEFAULT_COMPRESSION = -1;
// compression strategy
const $39b8545e666ec171$var$Z_FILTERED = 1;
const $39b8545e666ec171$var$Z_HUFFMAN_ONLY = 2;
const $39b8545e666ec171$var$Z_DEFAULT_STRATEGY = 0;
const $39b8545e666ec171$var$Z_NO_FLUSH = 0;
const $39b8545e666ec171$var$Z_PARTIAL_FLUSH = 1;
const $39b8545e666ec171$var$Z_FULL_FLUSH = 3;
const $39b8545e666ec171$var$Z_FINISH = 4;
const $39b8545e666ec171$var$Z_OK = 0;
const $39b8545e666ec171$var$Z_STREAM_END = 1;
const $39b8545e666ec171$var$Z_NEED_DICT = 2;
const $39b8545e666ec171$var$Z_STREAM_ERROR = -2;
const $39b8545e666ec171$var$Z_DATA_ERROR = -3;
const $39b8545e666ec171$var$Z_BUF_ERROR = -5;
// Tree
function $39b8545e666ec171$var$extractArray(array) {
    return $39b8545e666ec171$var$flatArray(array.map(([length, value])=>new Array(length).fill(value, 0, length)));
}
function $39b8545e666ec171$var$flatArray(array) {
    return array.reduce((a, b)=>a.concat(Array.isArray(b) ? $39b8545e666ec171$var$flatArray(b) : b), []);
}
// see definition of array dist_code below
const $39b8545e666ec171$var$_dist_code = [
    0,
    1,
    2,
    3
].concat(...$39b8545e666ec171$var$extractArray([
    [
        2,
        4
    ],
    [
        2,
        5
    ],
    [
        4,
        6
    ],
    [
        4,
        7
    ],
    [
        8,
        8
    ],
    [
        8,
        9
    ],
    [
        16,
        10
    ],
    [
        16,
        11
    ],
    [
        32,
        12
    ],
    [
        32,
        13
    ],
    [
        64,
        14
    ],
    [
        64,
        15
    ],
    [
        2,
        0
    ],
    [
        1,
        16
    ],
    [
        1,
        17
    ],
    [
        2,
        18
    ],
    [
        2,
        19
    ],
    [
        4,
        20
    ],
    [
        4,
        21
    ],
    [
        8,
        22
    ],
    [
        8,
        23
    ],
    [
        16,
        24
    ],
    [
        16,
        25
    ],
    [
        32,
        26
    ],
    [
        32,
        27
    ],
    [
        64,
        28
    ],
    [
        64,
        29
    ]
]));
function $39b8545e666ec171$var$Tree() {
    const that = this;
    // dyn_tree; // the dynamic tree
    // max_code; // largest code with non zero frequency
    // stat_desc; // the corresponding static tree
    // Compute the optimal bit lengths for a tree and update the total bit
    // length
    // for the current block.
    // IN assertion: the fields freq and dad are set, heap[heap_max] and
    // above are the tree nodes sorted by increasing frequency.
    // OUT assertions: the field len is set to the optimal bit length, the
    // array bl_count contains the frequencies for each bit length.
    // The length opt_len is updated; static_len is also updated if stree is
    // not null.
    function gen_bitlen(s) {
        const tree = that.dyn_tree;
        const stree = that.stat_desc.static_tree;
        const extra = that.stat_desc.extra_bits;
        const base = that.stat_desc.extra_base;
        const max_length = that.stat_desc.max_length;
        let h; // heap index
        let n, m; // iterate over the tree elements
        let bits; // bit length
        let xbits; // extra bits
        let f; // frequency
        let overflow = 0; // number of elements with bit length too large
        for(bits = 0; bits <= $39b8545e666ec171$var$MAX_BITS; bits++)s.bl_count[bits] = 0;
        // In a first pass, compute the optimal bit lengths (which may
        // overflow in the case of the bit length tree).
        tree[s.heap[s.heap_max] * 2 + 1] = 0; // root of the heap
        for(h = s.heap_max + 1; h < $39b8545e666ec171$var$HEAP_SIZE; h++){
            n = s.heap[h];
            bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
            if (bits > max_length) {
                bits = max_length;
                overflow++;
            }
            tree[n * 2 + 1] = bits;
            // We overwrite tree[n*2+1] which is no longer needed
            if (n > that.max_code) continue; // not a leaf node
            s.bl_count[bits]++;
            xbits = 0;
            if (n >= base) xbits = extra[n - base];
            f = tree[n * 2];
            s.opt_len += f * (bits + xbits);
            if (stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
        if (overflow === 0) return;
        // This happens for example on obj2 and pic of the Calgary corpus
        // Find the first bit length which could increase:
        do {
            bits = max_length - 1;
            while(s.bl_count[bits] === 0)bits--;
            s.bl_count[bits]--; // move one leaf down the tree
            s.bl_count[bits + 1] += 2; // move one overflow item as its brother
            s.bl_count[max_length]--;
            // The brother of the overflow item also moves one step up,
            // but this does not affect bl_count[max_length]
            overflow -= 2;
        }while (overflow > 0);
        for(bits = max_length; bits !== 0; bits--){
            n = s.bl_count[bits];
            while(n !== 0){
                m = s.heap[--h];
                if (m > that.max_code) continue;
                if (tree[m * 2 + 1] != bits) {
                    s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
                    tree[m * 2 + 1] = bits;
                }
                n--;
            }
        }
    }
    // Reverse the first len bits of a code, using straightforward code (a
    // faster
    // method would use a table)
    // IN assertion: 1 <= len <= 15
    function bi_reverse(code, len // its bit length
    ) {
        let res = 0;
        do {
            res |= code & 1;
            code >>>= 1;
            res <<= 1;
        }while (--len > 0);
        return res >>> 1;
    }
    // Generate the codes for a given tree and bit counts (which need not be
    // optimal).
    // IN assertion: the array bl_count contains the bit length statistics for
    // the given tree and the field len is set for all tree elements.
    // OUT assertion: the field code is set for all tree elements of non
    // zero code length.
    function gen_codes(tree, max_code, bl_count // number of codes at each bit length
    ) {
        const next_code = []; // next code value for each
        // bit length
        let code = 0; // running code value
        let bits; // bit index
        let n; // code index
        let len;
        // The distribution counts are first used to generate the code values
        // without bit reversal.
        for(bits = 1; bits <= $39b8545e666ec171$var$MAX_BITS; bits++)next_code[bits] = code = code + bl_count[bits - 1] << 1;
        // Check that the bit counts in bl_count are consistent. The last code
        // must be all ones.
        // Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        // "inconsistent bit counts");
        // Tracev((stderr,"gen_codes: max_code %d ", max_code));
        for(n = 0; n <= max_code; n++){
            len = tree[n * 2 + 1];
            if (len === 0) continue;
            // Now reverse the bits
            tree[n * 2] = bi_reverse(next_code[len]++, len);
        }
    }
    // Construct one Huffman tree and assigns the code bit strings and lengths.
    // Update the total bit length for the current block.
    // IN assertion: the field freq is set for all tree elements.
    // OUT assertions: the fields len and code are set to the optimal bit length
    // and corresponding code. The length opt_len is updated; static_len is
    // also updated if stree is not null. The field max_code is set.
    that.build_tree = function(s) {
        const tree = that.dyn_tree;
        const stree = that.stat_desc.static_tree;
        const elems = that.stat_desc.elems;
        let n, m; // iterate over heap elements
        let max_code = -1; // largest code with non zero frequency
        let node; // new node being created
        // Construct the initial heap, with least frequent element in
        // heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
        // heap[0] is not used.
        s.heap_len = 0;
        s.heap_max = $39b8545e666ec171$var$HEAP_SIZE;
        for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
        } else tree[n * 2 + 1] = 0;
        // The pkzip format requires that at least one distance code exists,
        // and that at least one bit should be sent even if there is only one
        // possible code. So to avoid special checks later on we force at least
        // two codes of non zero frequency.
        while(s.heap_len < 2){
            node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
            tree[node * 2] = 1;
            s.depth[node] = 0;
            s.opt_len--;
            if (stree) s.static_len -= stree[node * 2 + 1];
        // node is 0 or 1 so it does not have extra bits
        }
        that.max_code = max_code;
        // The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
        // establish sub-heaps of increasing lengths:
        for(n = Math.floor(s.heap_len / 2); n >= 1; n--)s.pqdownheap(tree, n);
        // Construct the Huffman tree by repeatedly combining the least two
        // frequent nodes.
        node = elems; // next internal node of the tree
        do {
            // n = node of least frequency
            n = s.heap[1];
            s.heap[1] = s.heap[s.heap_len--];
            s.pqdownheap(tree, 1);
            m = s.heap[1]; // m = node of next least frequency
            s.heap[--s.heap_max] = n; // keep the nodes sorted by frequency
            s.heap[--s.heap_max] = m;
            // Create a new node father of n and m
            tree[node * 2] = tree[n * 2] + tree[m * 2];
            s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
            tree[n * 2 + 1] = tree[m * 2 + 1] = node;
            // and insert the new node in the heap
            s.heap[1] = node++;
            s.pqdownheap(tree, 1);
        }while (s.heap_len >= 2);
        s.heap[--s.heap_max] = s.heap[1];
        // At this point, the fields freq and dad are set. We can now
        // generate the bit lengths.
        gen_bitlen(s);
        // The field len is now set, we can generate the bit codes
        gen_codes(tree, that.max_code, s.bl_count);
    };
}
$39b8545e666ec171$var$Tree._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
].concat(...$39b8545e666ec171$var$extractArray([
    [
        2,
        8
    ],
    [
        2,
        9
    ],
    [
        2,
        10
    ],
    [
        2,
        11
    ],
    [
        4,
        12
    ],
    [
        4,
        13
    ],
    [
        4,
        14
    ],
    [
        4,
        15
    ],
    [
        8,
        16
    ],
    [
        8,
        17
    ],
    [
        8,
        18
    ],
    [
        8,
        19
    ],
    [
        16,
        20
    ],
    [
        16,
        21
    ],
    [
        16,
        22
    ],
    [
        16,
        23
    ],
    [
        32,
        24
    ],
    [
        32,
        25
    ],
    [
        32,
        26
    ],
    [
        31,
        27
    ],
    [
        1,
        28
    ]
]));
$39b8545e666ec171$var$Tree.base_length = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    40,
    48,
    56,
    64,
    80,
    96,
    112,
    128,
    160,
    192,
    224,
    0
];
$39b8545e666ec171$var$Tree.base_dist = [
    0,
    1,
    2,
    3,
    4,
    6,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    768,
    1024,
    1536,
    2048,
    3072,
    4096,
    6144,
    8192,
    12288,
    16384,
    24576
];
// Mapping from a distance to a distance code. dist is the distance - 1 and
// must not have side effects. _dist_code[256] and _dist_code[257] are never
// used.
$39b8545e666ec171$var$Tree.d_code = function(dist) {
    return dist < 256 ? $39b8545e666ec171$var$_dist_code[dist] : $39b8545e666ec171$var$_dist_code[256 + (dist >>> 7)];
};
// extra bits for each length code
$39b8545e666ec171$var$Tree.extra_lbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
];
// extra bits for each distance code
$39b8545e666ec171$var$Tree.extra_dbits = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
// extra bits for each bit length code
$39b8545e666ec171$var$Tree.extra_blbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
];
$39b8545e666ec171$var$Tree.bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
// StaticTree
function $39b8545e666ec171$var$StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
    const that = this;
    that.static_tree = static_tree;
    that.extra_bits = extra_bits;
    that.extra_base = extra_base;
    that.elems = elems;
    that.max_length = max_length;
}
const $39b8545e666ec171$var$static_ltree2_first_part = [
    12,
    140,
    76,
    204,
    44,
    172,
    108,
    236,
    28,
    156,
    92,
    220,
    60,
    188,
    124,
    252,
    2,
    130,
    66,
    194,
    34,
    162,
    98,
    226,
    18,
    146,
    82,
    210,
    50,
    178,
    114,
    242,
    10,
    138,
    74,
    202,
    42,
    170,
    106,
    234,
    26,
    154,
    90,
    218,
    58,
    186,
    122,
    250,
    6,
    134,
    70,
    198,
    38,
    166,
    102,
    230,
    22,
    150,
    86,
    214,
    54,
    182,
    118,
    246,
    14,
    142,
    78,
    206,
    46,
    174,
    110,
    238,
    30,
    158,
    94,
    222,
    62,
    190,
    126,
    254,
    1,
    129,
    65,
    193,
    33,
    161,
    97,
    225,
    17,
    145,
    81,
    209,
    49,
    177,
    113,
    241,
    9,
    137,
    73,
    201,
    41,
    169,
    105,
    233,
    25,
    153,
    89,
    217,
    57,
    185,
    121,
    249,
    5,
    133,
    69,
    197,
    37,
    165,
    101,
    229,
    21,
    149,
    85,
    213,
    53,
    181,
    117,
    245,
    13,
    141,
    77,
    205,
    45,
    173,
    109,
    237,
    29,
    157,
    93,
    221,
    61,
    189,
    125,
    253,
    19,
    275,
    147,
    403,
    83,
    339,
    211,
    467,
    51,
    307,
    179,
    435,
    115,
    371,
    243,
    499,
    11,
    267,
    139,
    395,
    75,
    331,
    203,
    459,
    43,
    299,
    171,
    427,
    107,
    363,
    235,
    491,
    27,
    283,
    155,
    411,
    91,
    347,
    219,
    475,
    59,
    315,
    187,
    443,
    123,
    379,
    251,
    507,
    7,
    263,
    135,
    391,
    71,
    327,
    199,
    455,
    39,
    295,
    167,
    423,
    103,
    359,
    231,
    487,
    23,
    279,
    151,
    407,
    87,
    343,
    215,
    471,
    55,
    311,
    183,
    439,
    119,
    375,
    247,
    503,
    15,
    271,
    143,
    399,
    79,
    335,
    207,
    463,
    47,
    303,
    175,
    431,
    111,
    367,
    239,
    495,
    31,
    287,
    159,
    415,
    95,
    351,
    223,
    479,
    63,
    319,
    191,
    447,
    127,
    383,
    255,
    511,
    0,
    64,
    32,
    96,
    16,
    80,
    48,
    112,
    8,
    72,
    40,
    104,
    24,
    88,
    56,
    120,
    4,
    68,
    36,
    100,
    20,
    84,
    52,
    116,
    3,
    131,
    67,
    195,
    35,
    163,
    99,
    227
];
const $39b8545e666ec171$var$static_ltree2_second_part = $39b8545e666ec171$var$extractArray([
    [
        144,
        8
    ],
    [
        112,
        9
    ],
    [
        24,
        7
    ],
    [
        8,
        8
    ]
]);
$39b8545e666ec171$var$StaticTree.static_ltree = $39b8545e666ec171$var$flatArray($39b8545e666ec171$var$static_ltree2_first_part.map((value, index)=>[
        value,
        $39b8545e666ec171$var$static_ltree2_second_part[index]
    ]));
const $39b8545e666ec171$var$static_dtree_first_part = [
    0,
    16,
    8,
    24,
    4,
    20,
    12,
    28,
    2,
    18,
    10,
    26,
    6,
    22,
    14,
    30,
    1,
    17,
    9,
    25,
    5,
    21,
    13,
    29,
    3,
    19,
    11,
    27,
    7,
    23
];
const $39b8545e666ec171$var$static_dtree_second_part = $39b8545e666ec171$var$extractArray([
    [
        30,
        5
    ]
]);
$39b8545e666ec171$var$StaticTree.static_dtree = $39b8545e666ec171$var$flatArray($39b8545e666ec171$var$static_dtree_first_part.map((value, index)=>[
        value,
        $39b8545e666ec171$var$static_dtree_second_part[index]
    ]));
$39b8545e666ec171$var$StaticTree.static_l_desc = new $39b8545e666ec171$var$StaticTree($39b8545e666ec171$var$StaticTree.static_ltree, $39b8545e666ec171$var$Tree.extra_lbits, $39b8545e666ec171$var$LITERALS + 1, $39b8545e666ec171$var$L_CODES, $39b8545e666ec171$var$MAX_BITS);
$39b8545e666ec171$var$StaticTree.static_d_desc = new $39b8545e666ec171$var$StaticTree($39b8545e666ec171$var$StaticTree.static_dtree, $39b8545e666ec171$var$Tree.extra_dbits, 0, $39b8545e666ec171$var$D_CODES, $39b8545e666ec171$var$MAX_BITS);
$39b8545e666ec171$var$StaticTree.static_bl_desc = new $39b8545e666ec171$var$StaticTree(null, $39b8545e666ec171$var$Tree.extra_blbits, 0, $39b8545e666ec171$var$BL_CODES, $39b8545e666ec171$var$MAX_BL_BITS);
// Deflate
const $39b8545e666ec171$var$MAX_MEM_LEVEL = 9;
const $39b8545e666ec171$var$DEF_MEM_LEVEL = 8;
function $39b8545e666ec171$var$Config(good_length, max_lazy, nice_length, max_chain, func) {
    const that = this;
    that.good_length = good_length;
    that.max_lazy = max_lazy;
    that.nice_length = nice_length;
    that.max_chain = max_chain;
    that.func = func;
}
const $39b8545e666ec171$var$STORED = 0;
const $39b8545e666ec171$var$FAST = 1;
const $39b8545e666ec171$var$SLOW = 2;
const $39b8545e666ec171$var$config_table = [
    new $39b8545e666ec171$var$Config(0, 0, 0, 0, $39b8545e666ec171$var$STORED),
    new $39b8545e666ec171$var$Config(4, 4, 8, 4, $39b8545e666ec171$var$FAST),
    new $39b8545e666ec171$var$Config(4, 5, 16, 8, $39b8545e666ec171$var$FAST),
    new $39b8545e666ec171$var$Config(4, 6, 32, 32, $39b8545e666ec171$var$FAST),
    new $39b8545e666ec171$var$Config(4, 4, 16, 16, $39b8545e666ec171$var$SLOW),
    new $39b8545e666ec171$var$Config(8, 16, 32, 32, $39b8545e666ec171$var$SLOW),
    new $39b8545e666ec171$var$Config(8, 16, 128, 128, $39b8545e666ec171$var$SLOW),
    new $39b8545e666ec171$var$Config(8, 32, 128, 256, $39b8545e666ec171$var$SLOW),
    new $39b8545e666ec171$var$Config(32, 128, 258, 1024, $39b8545e666ec171$var$SLOW),
    new $39b8545e666ec171$var$Config(32, 258, 258, 4096, $39b8545e666ec171$var$SLOW)
];
const $39b8545e666ec171$var$z_errmsg = [
    "need dictionary",
    // 2
    "stream end",
    "",
    "",
    "stream error",
    "data error",
    "",
    "buffer error",
    "",
    ""
];
// block not completed, need more input or more output
const $39b8545e666ec171$var$NeedMore = 0;
// block flush performed
const $39b8545e666ec171$var$BlockDone = 1;
// finish started, need only more output at next deflate
const $39b8545e666ec171$var$FinishStarted = 2;
// finish done, accept no more input or output
const $39b8545e666ec171$var$FinishDone = 3;
// preset dictionary flag in zlib header
const $39b8545e666ec171$var$PRESET_DICT = 0x20;
const $39b8545e666ec171$var$INIT_STATE = 42;
const $39b8545e666ec171$var$BUSY_STATE = 113;
const $39b8545e666ec171$var$FINISH_STATE = 666;
// The deflate compression method
const $39b8545e666ec171$var$Z_DEFLATED = 8;
const $39b8545e666ec171$var$STORED_BLOCK = 0;
const $39b8545e666ec171$var$STATIC_TREES = 1;
const $39b8545e666ec171$var$DYN_TREES = 2;
const $39b8545e666ec171$var$MIN_MATCH = 3;
const $39b8545e666ec171$var$MAX_MATCH = 258;
const $39b8545e666ec171$var$MIN_LOOKAHEAD = $39b8545e666ec171$var$MAX_MATCH + $39b8545e666ec171$var$MIN_MATCH + 1;
function $39b8545e666ec171$var$smaller(tree, n, m, depth) {
    const tn2 = tree[n * 2];
    const tm2 = tree[m * 2];
    return tn2 < tm2 || tn2 == tm2 && depth[n] <= depth[m];
}
function $39b8545e666ec171$var$Deflate() {
    const that = this;
    let strm; // pointer back to this zlib stream
    let status; // as the name implies
    // pending_buf; // output still pending
    let pending_buf_size; // size of pending_buf
    // pending_out; // next pending byte to output to the stream
    // pending; // nb of bytes in the pending buffer
    // dist_buf; // buffer for distances
    // lc_buf; // buffer for literals or lengths
    // To simplify the code, dist_buf and lc_buf have the same number of elements.
    // To use different lengths, an extra flag array would be necessary.
    let last_flush; // value of flush param for previous deflate call
    let w_size; // LZ77 win size (32K by default)
    let w_bits; // log2(w_size) (8..16)
    let w_mask; // w_size - 1
    let win;
    // Sliding win. Input bytes are read into the second half of the win,
    // and move to the first half later to keep a dictionary of at least wSize
    // bytes. With this organization, matches are limited to a distance of
    // wSize-MAX_MATCH bytes, but this ensures that IO is always
    // performed with a length multiple of the block size. Also, it limits
    // the win size to 64K, which is quite useful on MSDOS.
    // To do: use the user input buffer as sliding win.
    let window_size;
    // Actual size of win: 2*wSize, except when the user input buffer
    // is directly used as sliding win.
    let prev;
    // Link to older string with same hash index. To limit the size of this
    // array to 64K, this link is maintained only for the last 32K strings.
    // An index in this array is thus a win index modulo 32K.
    let head; // Heads of the hash chains or NIL.
    let ins_h; // hash index of string to be inserted
    let hash_size; // number of elements in hash table
    let hash_bits; // log2(hash_size)
    let hash_mask; // hash_size-1
    // Number of bits by which ins_h must be shifted at each input
    // step. It must be such that after MIN_MATCH steps, the oldest
    // byte no longer takes part in the hash key, that is:
    // hash_shift * MIN_MATCH >= hash_bits
    let hash_shift;
    // Window position at the beginning of the current output block. Gets
    // negative when the win is moved backwards.
    let block_start;
    let match_length; // length of best match
    let prev_match; // previous match
    let match_available; // set if previous match exists
    let strstart; // start of string to insert
    let match_start; // start of matching string
    let lookahead; // number of valid bytes ahead in win
    // Length of the best match at previous step. Matches not greater than this
    // are discarded. This is used in the lazy match evaluation.
    let prev_length;
    // To speed up deflation, hash chains are never searched beyond this
    // length. A higher limit improves compression ratio but degrades the speed.
    let max_chain_length;
    // Attempt to find a better match only when the current match is strictly
    // smaller than this value. This mechanism is used only for compression
    // levels >= 4.
    let max_lazy_match;
    // Insert new strings in the hash table only if the match length is not
    // greater than this length. This saves time but degrades compression.
    // max_insert_length is used only for compression levels <= 3.
    let level; // compression level (1..9)
    let strategy; // favor or force Huffman coding
    // Use a faster search when the previous match is longer than this
    let good_match;
    // Stop searching when current match exceeds this
    let nice_match;
    let dyn_ltree; // literal and length tree
    let dyn_dtree; // distance tree
    let bl_tree; // Huffman tree for bit lengths
    const l_desc = new $39b8545e666ec171$var$Tree(); // desc for literal tree
    const d_desc = new $39b8545e666ec171$var$Tree(); // desc for distance tree
    const bl_desc = new $39b8545e666ec171$var$Tree(); // desc for bit length tree
    // that.heap_len; // number of elements in the heap
    // that.heap_max; // element of largest frequency
    // The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
    // The same heap array is used to build all trees.
    // Depth of each subtree used as tie breaker for trees of equal frequency
    that.depth = [];
    // Size of match buffer for literals/lengths. There are 4 reasons for
    // limiting lit_bufsize to 64K:
    // - frequencies can be kept in 16 bit counters
    // - if compression is not successful for the first block, all input
    // data is still in the win so we can still emit a stored block even
    // when input comes from standard input. (This can also be done for
    // all blocks if lit_bufsize is not greater than 32K.)
    // - if compression is not successful for a file smaller than 64K, we can
    // even emit a stored file instead of a stored block (saving 5 bytes).
    // This is applicable only for zip (not gzip or zlib).
    // - creating new Huffman trees less frequently may not provide fast
    // adaptation to changes in the input data statistics. (Take for
    // example a binary file with poorly compressible code followed by
    // a highly compressible string table.) Smaller buffer sizes give
    // fast adaptation but have of course the overhead of transmitting
    // trees more frequently.
    // - I can't count above 4
    let lit_bufsize;
    let last_lit; // running index in dist_buf and lc_buf
    // that.opt_len; // bit length of current block with optimal trees
    // that.static_len; // bit length of current block with static trees
    let matches; // number of string matches in current block
    let last_eob_len; // bit length of EOB code for last block
    // Output buffer. bits are inserted starting at the bottom (least
    // significant bits).
    let bi_buf;
    // Number of valid bits in bi_buf. All bits above the last valid bit
    // are always zero.
    let bi_valid;
    // number of codes at each bit length for an optimal tree
    that.bl_count = [];
    // heap used to build the Huffman trees
    that.heap = [];
    dyn_ltree = [];
    dyn_dtree = [];
    bl_tree = [];
    function lm_init() {
        window_size = 2 * w_size;
        head[hash_size - 1] = 0;
        for(let i = 0; i < hash_size - 1; i++)head[i] = 0;
        // Set the default configuration parameters:
        max_lazy_match = $39b8545e666ec171$var$config_table[level].max_lazy;
        good_match = $39b8545e666ec171$var$config_table[level].good_length;
        nice_match = $39b8545e666ec171$var$config_table[level].nice_length;
        max_chain_length = $39b8545e666ec171$var$config_table[level].max_chain;
        strstart = 0;
        block_start = 0;
        lookahead = 0;
        match_length = prev_length = $39b8545e666ec171$var$MIN_MATCH - 1;
        match_available = 0;
        ins_h = 0;
    }
    function init_block() {
        let i;
        // Initialize the trees.
        for(i = 0; i < $39b8545e666ec171$var$L_CODES; i++)dyn_ltree[i * 2] = 0;
        for(i = 0; i < $39b8545e666ec171$var$D_CODES; i++)dyn_dtree[i * 2] = 0;
        for(i = 0; i < $39b8545e666ec171$var$BL_CODES; i++)bl_tree[i * 2] = 0;
        dyn_ltree[$39b8545e666ec171$var$END_BLOCK * 2] = 1;
        that.opt_len = that.static_len = 0;
        last_lit = matches = 0;
    }
    // Initialize the tree data structures for a new zlib stream.
    function tr_init() {
        l_desc.dyn_tree = dyn_ltree;
        l_desc.stat_desc = $39b8545e666ec171$var$StaticTree.static_l_desc;
        d_desc.dyn_tree = dyn_dtree;
        d_desc.stat_desc = $39b8545e666ec171$var$StaticTree.static_d_desc;
        bl_desc.dyn_tree = bl_tree;
        bl_desc.stat_desc = $39b8545e666ec171$var$StaticTree.static_bl_desc;
        bi_buf = 0;
        bi_valid = 0;
        last_eob_len = 8; // enough lookahead for inflate
        // Initialize the first block of the first file:
        init_block();
    }
    // Restore the heap property by moving down the tree starting at node k,
    // exchanging a node with the smallest of its two sons if necessary,
    // stopping
    // when the heap property is re-established (each father smaller than its
    // two sons).
    that.pqdownheap = function(tree, k // node to move down
    ) {
        const heap = that.heap;
        const v = heap[k];
        let j = k << 1; // left son of k
        while(j <= that.heap_len){
            // Set j to the smallest of the two sons:
            if (j < that.heap_len && $39b8545e666ec171$var$smaller(tree, heap[j + 1], heap[j], that.depth)) j++;
            // Exit if v is smaller than both sons
            if ($39b8545e666ec171$var$smaller(tree, v, heap[j], that.depth)) break;
            // Exchange v with the smallest son
            heap[k] = heap[j];
            k = j;
            // And continue down the tree, setting j to the left son of k
            j <<= 1;
        }
        heap[k] = v;
    };
    // Scan a literal or distance tree to determine the frequencies of the codes
    // in the bit length tree.
    function scan_tree(tree, max_code // and its largest code of non zero frequency
    ) {
        let prevlen = -1; // last emitted length
        let curlen; // length of current code
        let nextlen = tree[1]; // length of next code
        let count = 0; // repeat count of the current code
        let max_count = 7; // max repeat count
        let min_count = 4; // min repeat count
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        }
        tree[(max_code + 1) * 2 + 1] = 0xffff; // guard
        for(let n = 0; n <= max_code; n++){
            curlen = nextlen;
            nextlen = tree[(n + 1) * 2 + 1];
            if (++count < max_count && curlen == nextlen) continue;
            else if (count < min_count) bl_tree[curlen * 2] += count;
            else if (curlen !== 0) {
                if (curlen != prevlen) bl_tree[curlen * 2]++;
                bl_tree[$39b8545e666ec171$var$REP_3_6 * 2]++;
            } else if (count <= 10) bl_tree[$39b8545e666ec171$var$REPZ_3_10 * 2]++;
            else bl_tree[$39b8545e666ec171$var$REPZ_11_138 * 2]++;
            count = 0;
            prevlen = curlen;
            if (nextlen === 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    }
    // Construct the Huffman tree for the bit lengths and return the index in
    // bl_order of the last bit length code to send.
    function build_bl_tree() {
        let max_blindex; // index of last bit length code of non zero freq
        // Determine the bit length frequencies for literal and distance trees
        scan_tree(dyn_ltree, l_desc.max_code);
        scan_tree(dyn_dtree, d_desc.max_code);
        // Build the bit length tree:
        bl_desc.build_tree(that);
        // opt_len now includes the length of the tree representations, except
        // the lengths of the bit lengths codes and the 5+5+4 bits for the
        // counts.
        // Determine the number of bit length codes to send. The pkzip format
        // requires that at least 4 bit length codes be sent. (appnote.txt says
        // 3 but the actual value used is 4.)
        for(max_blindex = $39b8545e666ec171$var$BL_CODES - 1; max_blindex >= 3; max_blindex--){
            if (bl_tree[$39b8545e666ec171$var$Tree.bl_order[max_blindex] * 2 + 1] !== 0) break;
        }
        // Update opt_len to include the bit length tree and counts
        that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        return max_blindex;
    }
    // Output a byte on the stream.
    // IN assertion: there is enough room in pending_buf.
    function put_byte(p) {
        that.pending_buf[that.pending++] = p;
    }
    function put_short(w) {
        put_byte(w & 0xff);
        put_byte(w >>> 8 & 0xff);
    }
    function putShortMSB(b) {
        put_byte(b >> 8 & 0xff);
        put_byte(b & 255);
    }
    function send_bits(value, length) {
        let val;
        const len = length;
        if (bi_valid > $39b8545e666ec171$var$Buf_size - len) {
            val = value;
            // bi_buf |= (val << bi_valid);
            bi_buf |= val << bi_valid & 0xffff;
            put_short(bi_buf);
            bi_buf = val >>> $39b8545e666ec171$var$Buf_size - bi_valid;
            bi_valid += len - $39b8545e666ec171$var$Buf_size;
        } else {
            // bi_buf |= (value) << bi_valid;
            bi_buf |= value << bi_valid & 0xffff;
            bi_valid += len;
        }
    }
    function send_code(c, tree) {
        const c2 = c * 2;
        send_bits(tree[c2] & 0xffff, tree[c2 + 1] & 0xffff);
    }
    // Send a literal or distance tree in compressed form, using the codes in
    // bl_tree.
    function send_tree(tree, max_code // and its largest code of non zero frequency
    ) {
        let n; // iterates over all tree elements
        let prevlen = -1; // last emitted length
        let curlen; // length of current code
        let nextlen = tree[1]; // length of next code
        let count = 0; // repeat count of the current code
        let max_count = 7; // max repeat count
        let min_count = 4; // min repeat count
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        }
        for(n = 0; n <= max_code; n++){
            curlen = nextlen;
            nextlen = tree[(n + 1) * 2 + 1];
            if (++count < max_count && curlen == nextlen) continue;
            else if (count < min_count) do send_code(curlen, bl_tree);
            while (--count !== 0);
            else if (curlen !== 0) {
                if (curlen != prevlen) {
                    send_code(curlen, bl_tree);
                    count--;
                }
                send_code($39b8545e666ec171$var$REP_3_6, bl_tree);
                send_bits(count - 3, 2);
            } else if (count <= 10) {
                send_code($39b8545e666ec171$var$REPZ_3_10, bl_tree);
                send_bits(count - 3, 3);
            } else {
                send_code($39b8545e666ec171$var$REPZ_11_138, bl_tree);
                send_bits(count - 11, 7);
            }
            count = 0;
            prevlen = curlen;
            if (nextlen === 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    }
    // Send the header for a block using dynamic Huffman trees: the counts, the
    // lengths of the bit length codes, the literal tree and the distance tree.
    // IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
    function send_all_trees(lcodes, dcodes, blcodes) {
        let rank; // index in bl_order
        send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
        send_bits(dcodes - 1, 5);
        send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
        for(rank = 0; rank < blcodes; rank++)send_bits(bl_tree[$39b8545e666ec171$var$Tree.bl_order[rank] * 2 + 1], 3);
        send_tree(dyn_ltree, lcodes - 1); // literal tree
        send_tree(dyn_dtree, dcodes - 1); // distance tree
    }
    // Flush the bit buffer, keeping at most 7 bits in it.
    function bi_flush() {
        if (bi_valid == 16) {
            put_short(bi_buf);
            bi_buf = 0;
            bi_valid = 0;
        } else if (bi_valid >= 8) {
            put_byte(bi_buf & 0xff);
            bi_buf >>>= 8;
            bi_valid -= 8;
        }
    }
    // Send one empty static block to give enough lookahead for inflate.
    // This takes 10 bits, of which 7 may remain in the bit buffer.
    // The current inflate code requires 9 bits of lookahead. If the
    // last two codes for the previous block (real code plus EOB) were coded
    // on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode
    // the last real code. In this case we send two empty static blocks instead
    // of one. (There are no problems if the previous block is stored or fixed.)
    // To simplify the code, we assume the worst case of last real code encoded
    // on one bit only.
    function _tr_align() {
        send_bits($39b8545e666ec171$var$STATIC_TREES << 1, 3);
        send_code($39b8545e666ec171$var$END_BLOCK, $39b8545e666ec171$var$StaticTree.static_ltree);
        bi_flush();
        // Of the 10 bits for the empty block, we have already sent
        // (10 - bi_valid) bits. The lookahead for the last real code (before
        // the EOB of the previous block) was thus at least one plus the length
        // of the EOB plus what we have just sent of the empty static block.
        if (1 + last_eob_len + 10 - bi_valid < 9) {
            send_bits($39b8545e666ec171$var$STATIC_TREES << 1, 3);
            send_code($39b8545e666ec171$var$END_BLOCK, $39b8545e666ec171$var$StaticTree.static_ltree);
            bi_flush();
        }
        last_eob_len = 7;
    }
    // Save the match info and tally the frequency counts. Return true if
    // the current block must be flushed.
    function _tr_tally(dist, lc // match length-MIN_MATCH or unmatched char (if dist==0)
    ) {
        let out_length, in_length, dcode;
        that.dist_buf[last_lit] = dist;
        that.lc_buf[last_lit] = lc & 0xff;
        last_lit++;
        if (dist === 0) // lc is the unmatched char
        dyn_ltree[lc * 2]++;
        else {
            matches++;
            // Here, lc is the match length - MIN_MATCH
            dist--; // dist = match distance - 1
            dyn_ltree[($39b8545e666ec171$var$Tree._length_code[lc] + $39b8545e666ec171$var$LITERALS + 1) * 2]++;
            dyn_dtree[$39b8545e666ec171$var$Tree.d_code(dist) * 2]++;
        }
        if ((last_lit & 0x1fff) === 0 && level > 2) {
            // Compute an upper bound for the compressed length
            out_length = last_lit * 8;
            in_length = strstart - block_start;
            for(dcode = 0; dcode < $39b8545e666ec171$var$D_CODES; dcode++)out_length += dyn_dtree[dcode * 2] * (5 + $39b8545e666ec171$var$Tree.extra_dbits[dcode]);
            out_length >>>= 3;
            if (matches < Math.floor(last_lit / 2) && out_length < Math.floor(in_length / 2)) return true;
        }
        return last_lit == lit_bufsize - 1;
    // We avoid equality with lit_bufsize because of wraparound at 64K
    // on 16 bit machines and because stored blocks are restricted to
    // 64K-1 bytes.
    }
    // Send the block data compressed using the given Huffman trees
    function compress_block(ltree, dtree) {
        let dist; // distance of matched string
        let lc; // match length or unmatched char (if dist === 0)
        let lx = 0; // running index in dist_buf and lc_buf
        let code; // the code to send
        let extra; // number of extra bits to send
        if (last_lit !== 0) do {
            dist = that.dist_buf[lx];
            lc = that.lc_buf[lx];
            lx++;
            if (dist === 0) send_code(lc, ltree); // send a literal byte
            else {
                // Here, lc is the match length - MIN_MATCH
                code = $39b8545e666ec171$var$Tree._length_code[lc];
                send_code(code + $39b8545e666ec171$var$LITERALS + 1, ltree); // send the length
                // code
                extra = $39b8545e666ec171$var$Tree.extra_lbits[code];
                if (extra !== 0) {
                    lc -= $39b8545e666ec171$var$Tree.base_length[code];
                    send_bits(lc, extra); // send the extra length bits
                }
                dist--; // dist is now the match distance - 1
                code = $39b8545e666ec171$var$Tree.d_code(dist);
                send_code(code, dtree); // send the distance code
                extra = $39b8545e666ec171$var$Tree.extra_dbits[code];
                if (extra !== 0) {
                    dist -= $39b8545e666ec171$var$Tree.base_dist[code];
                    send_bits(dist, extra); // send the extra distance bits
                }
            } // literal or match pair ?
        }while (lx < last_lit);
        send_code($39b8545e666ec171$var$END_BLOCK, ltree);
        last_eob_len = ltree[$39b8545e666ec171$var$END_BLOCK * 2 + 1];
    }
    // Flush the bit buffer and align the output on a byte boundary
    function bi_windup() {
        if (bi_valid > 8) put_short(bi_buf);
        else if (bi_valid > 0) put_byte(bi_buf & 0xff);
        bi_buf = 0;
        bi_valid = 0;
    }
    // Copy a stored block, storing first the length and its
    // one's complement if requested.
    function copy_block(buf, len, header // true if block header must be written
    ) {
        bi_windup(); // align on byte boundary
        last_eob_len = 8; // enough lookahead for inflate
        if (header) {
            put_short(len);
            put_short(~len);
        }
        that.pending_buf.set(win.subarray(buf, buf + len), that.pending);
        that.pending += len;
    }
    // Send a stored block
    function _tr_stored_block(buf, stored_len, eof // true if this is the last block for a file
    ) {
        send_bits(($39b8545e666ec171$var$STORED_BLOCK << 1) + (eof ? 1 : 0), 3); // send block type
        copy_block(buf, stored_len, true); // with header
    }
    // Determine the best encoding for the current block: dynamic trees, static
    // trees or store, and output the encoded block to the zip file.
    function _tr_flush_block(buf, stored_len, eof // true if this is the last block for a file
    ) {
        let opt_lenb, static_lenb; // opt_len and static_len in bytes
        let max_blindex = 0; // index of last bit length code of non zero freq
        // Build the Huffman trees unless a stored block is forced
        if (level > 0) {
            // Construct the literal and distance trees
            l_desc.build_tree(that);
            d_desc.build_tree(that);
            // At this point, opt_len and static_len are the total bit lengths
            // of
            // the compressed block data, excluding the tree representations.
            // Build the bit length tree for the above two trees, and get the
            // index
            // in bl_order of the last bit length code to send.
            max_blindex = build_bl_tree();
            // Determine the best encoding. Compute first the block length in
            // bytes
            opt_lenb = that.opt_len + 3 + 7 >>> 3;
            static_lenb = that.static_len + 3 + 7 >>> 3;
            if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
        } else opt_lenb = static_lenb = stored_len + 5; // force a stored block
        if (stored_len + 4 <= opt_lenb && buf != -1) // 4: two words for the lengths
        // The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
        // Otherwise we can't have processed more than WSIZE input bytes
        // since
        // the last block flush, because compression would have been
        // successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
        // transform a block into a stored block.
        _tr_stored_block(buf, stored_len, eof);
        else if (static_lenb == opt_lenb) {
            send_bits(($39b8545e666ec171$var$STATIC_TREES << 1) + (eof ? 1 : 0), 3);
            compress_block($39b8545e666ec171$var$StaticTree.static_ltree, $39b8545e666ec171$var$StaticTree.static_dtree);
        } else {
            send_bits(($39b8545e666ec171$var$DYN_TREES << 1) + (eof ? 1 : 0), 3);
            send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
            compress_block(dyn_ltree, dyn_dtree);
        }
        // The above check is made mod 2^32, for files larger than 512 MB
        // and uLong implemented on 32 bits.
        init_block();
        if (eof) bi_windup();
    }
    function flush_block_only(eof) {
        _tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
        block_start = strstart;
        strm.flush_pending();
    }
    // Fill the win when the lookahead becomes insufficient.
    // Updates strstart and lookahead.
    //
    // IN assertion: lookahead < MIN_LOOKAHEAD
    // OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
    // At least one byte has been read, or avail_in === 0; reads are
    // performed for at least two bytes (required for the zip translate_eol
    // option -- not supported here).
    function fill_window() {
        let n, m;
        let p;
        let more; // Amount of free space at the end of the win.
        do {
            more = window_size - lookahead - strstart;
            // Deal with !@#$% 64K limit:
            if (more === 0 && strstart === 0 && lookahead === 0) more = w_size;
            else if (more == -1) // Very unlikely, but possible on 16 bit machine if strstart ==
            // 0
            // and lookahead == 1 (input done one byte at time)
            more--;
            else if (strstart >= w_size + w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) {
                win.set(win.subarray(w_size, w_size + w_size), 0);
                match_start -= w_size;
                strstart -= w_size; // we now have strstart >= MAX_DIST
                block_start -= w_size;
                // Slide the hash table (could be avoided with 32 bit values
                // at the expense of memory usage). We slide even when level ==
                // 0
                // to keep the hash table consistent if we switch back to level
                // > 0
                // later. (Using level 0 permanently is not an optimal usage of
                // zlib, so we don't care about this pathological case.)
                n = hash_size;
                p = n;
                do {
                    m = head[--p] & 0xffff;
                    head[p] = m >= w_size ? m - w_size : 0;
                }while (--n !== 0);
                n = w_size;
                p = n;
                do {
                    m = prev[--p] & 0xffff;
                    prev[p] = m >= w_size ? m - w_size : 0;
                // If n is not on any hash chain, prev[n] is garbage but
                // its value will never be used.
                }while (--n !== 0);
                more += w_size;
            }
            if (strm.avail_in === 0) return;
            // If there was no sliding:
            // strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
            // more == window_size - lookahead - strstart
            // => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
            // => more >= window_size - 2*WSIZE + 2
            // In the BIG_MEM or MMAP case (not yet supported),
            // window_size == input_size + MIN_LOOKAHEAD &&
            // strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
            // Otherwise, window_size == 2*WSIZE so more >= 2.
            // If there was sliding, more >= WSIZE. So in all cases, more >= 2.
            n = strm.read_buf(win, strstart + lookahead, more);
            lookahead += n;
            // Initialize the hash value now that we have some input:
            if (lookahead >= $39b8545e666ec171$var$MIN_MATCH) {
                ins_h = win[strstart] & 0xff;
                ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 0xff) & hash_mask;
            }
        // If the whole input has less than MIN_MATCH bytes, ins_h is
        // garbage,
        // but this is not important since only literal bytes will be
        // emitted.
        }while (lookahead < $39b8545e666ec171$var$MIN_LOOKAHEAD && strm.avail_in !== 0);
    }
    // Copy without compression as much as possible from the input stream,
    // return
    // the current block state.
    // This function does not insert new strings in the dictionary since
    // uncompressible data is probably not useful. This function is used
    // only for the level=0 compression option.
    // NOTE: this function should be optimized to avoid extra copying from
    // win to pending_buf.
    function deflate_stored(flush) {
        // Stored blocks are limited to 0xffff bytes, pending_buf is limited
        // to pending_buf_size, and each stored block has a 5 byte header:
        let max_block_size = 0xffff;
        let max_start;
        if (max_block_size > pending_buf_size - 5) max_block_size = pending_buf_size - 5;
        // Copy as much as possible from input to output:
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Fill the win as much as possible:
            if (lookahead <= 1) {
                fill_window();
                if (lookahead === 0 && flush == $39b8545e666ec171$var$Z_NO_FLUSH) return $39b8545e666ec171$var$NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            strstart += lookahead;
            lookahead = 0;
            // Emit a stored block if pending_buf will be full:
            max_start = block_start + max_block_size;
            if (strstart === 0 || strstart >= max_start) {
                // strstart === 0 is possible when wraparound on 16-bit machine
                lookahead = strstart - max_start;
                strstart = max_start;
                flush_block_only(false);
                if (strm.avail_out === 0) return $39b8545e666ec171$var$NeedMore;
            }
            // Flush if we may have to slide, otherwise block_start may become
            // negative and the data will be gone:
            if (strstart - block_start >= w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) {
                flush_block_only(false);
                if (strm.avail_out === 0) return $39b8545e666ec171$var$NeedMore;
            }
        }
        flush_block_only(flush == $39b8545e666ec171$var$Z_FINISH);
        if (strm.avail_out === 0) return flush == $39b8545e666ec171$var$Z_FINISH ? $39b8545e666ec171$var$FinishStarted : $39b8545e666ec171$var$NeedMore;
        return flush == $39b8545e666ec171$var$Z_FINISH ? $39b8545e666ec171$var$FinishDone : $39b8545e666ec171$var$BlockDone;
    }
    function longest_match(cur_match) {
        let chain_length = max_chain_length; // max hash chain length
        let scan = strstart; // current string
        let match; // matched string
        let len; // length of current match
        let best_len = prev_length; // best match length so far
        const limit = strstart > w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD ? strstart - (w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) : 0;
        let _nice_match = nice_match;
        // Stop when cur_match becomes <= limit. To simplify the code,
        // we prevent matches with the string of win index 0.
        const wmask = w_mask;
        const strend = strstart + $39b8545e666ec171$var$MAX_MATCH;
        let scan_end1 = win[scan + best_len - 1];
        let scan_end = win[scan + best_len];
        // The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of
        // 16.
        // It is easy to get rid of this optimization if necessary.
        // Do not waste too much time if we already have a good match:
        if (prev_length >= good_match) chain_length >>= 2;
        // Do not look for matches beyond the end of the input. This is
        // necessary
        // to make deflate deterministic.
        if (_nice_match > lookahead) _nice_match = lookahead;
        do {
            match = cur_match;
            // Skip to next match if the match length cannot increase
            // or if the match length is less than 2:
            if (win[match + best_len] != scan_end || win[match + best_len - 1] != scan_end1 || win[match] != win[scan] || win[++match] != win[scan + 1]) continue;
            // The check at best_len-1 can be removed because it will be made
            // again later. (This heuristic is not always a win.)
            // It is not necessary to compare scan[2] and match[2] since they
            // are always equal when the other bytes match, given that
            // the hash keys are equal and that HASH_BITS >= 8.
            scan += 2;
            match++;
            // We check for insufficient lookahead only every 8th comparison;
            // the 256th check will be made at strstart+258.
            // eslint-disable-next-line no-empty
            do ;
            while (win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && scan < strend);
            len = $39b8545e666ec171$var$MAX_MATCH - (strend - scan);
            scan = strend - $39b8545e666ec171$var$MAX_MATCH;
            if (len > best_len) {
                match_start = cur_match;
                best_len = len;
                if (len >= _nice_match) break;
                scan_end1 = win[scan + best_len - 1];
                scan_end = win[scan + best_len];
            }
        }while ((cur_match = prev[cur_match & wmask] & 0xffff) > limit && --chain_length !== 0);
        if (best_len <= lookahead) return best_len;
        return lookahead;
    }
    // Compress as much as possible from the input stream, return the current
    // block state.
    // This function does not perform lazy evaluation of matches and inserts
    // new strings in the dictionary only for unmatched strings or for short
    // matches. It is used only for the fast compression options.
    function deflate_fast(flush) {
        // short hash_head = 0; // head of the hash chain
        let hash_head = 0; // head of the hash chain
        let bflush; // set if current block must be flushed
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Make sure that we always have enough lookahead, except
            // at the end of the input file. We need MAX_MATCH bytes
            // for the next match, plus MIN_MATCH bytes to insert the
            // string following the next match.
            if (lookahead < $39b8545e666ec171$var$MIN_LOOKAHEAD) {
                fill_window();
                if (lookahead < $39b8545e666ec171$var$MIN_LOOKAHEAD && flush == $39b8545e666ec171$var$Z_NO_FLUSH) return $39b8545e666ec171$var$NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            // Insert the string win[strstart .. strstart+2] in the
            // dictionary, and set hash_head to the head of the hash chain:
            if (lookahead >= $39b8545e666ec171$var$MIN_MATCH) {
                ins_h = (ins_h << hash_shift ^ win[strstart + ($39b8545e666ec171$var$MIN_MATCH - 1)] & 0xff) & hash_mask;
                // prev[strstart&w_mask]=hash_head=head[ins_h];
                hash_head = head[ins_h] & 0xffff;
                prev[strstart & w_mask] = head[ins_h];
                head[ins_h] = strstart;
            }
            // Find the longest match, discarding those <= prev_length.
            // At this point we have always match_length < MIN_MATCH
            if (hash_head !== 0 && (strstart - hash_head & 0xffff) <= w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) // To simplify the code, we prevent matches with the string
            // of win index 0 (in particular we have to avoid a match
            // of the string with itself at the start of the input file).
            {
                if (strategy != $39b8545e666ec171$var$Z_HUFFMAN_ONLY) match_length = longest_match(hash_head);
            }
            if (match_length >= $39b8545e666ec171$var$MIN_MATCH) {
                // check_match(strstart, match_start, match_length);
                bflush = _tr_tally(strstart - match_start, match_length - $39b8545e666ec171$var$MIN_MATCH);
                lookahead -= match_length;
                // Insert new strings in the hash table only if the match length
                // is not too large. This saves time but degrades compression.
                if (match_length <= max_lazy_match && lookahead >= $39b8545e666ec171$var$MIN_MATCH) {
                    match_length--; // string at strstart already in hash table
                    do {
                        strstart++;
                        ins_h = (ins_h << hash_shift ^ win[strstart + ($39b8545e666ec171$var$MIN_MATCH - 1)] & 0xff) & hash_mask;
                        // prev[strstart&w_mask]=hash_head=head[ins_h];
                        hash_head = head[ins_h] & 0xffff;
                        prev[strstart & w_mask] = head[ins_h];
                        head[ins_h] = strstart;
                    // strstart never exceeds WSIZE-MAX_MATCH, so there are
                    // always MIN_MATCH bytes ahead.
                    }while (--match_length !== 0);
                    strstart++;
                } else {
                    strstart += match_length;
                    match_length = 0;
                    ins_h = win[strstart] & 0xff;
                    ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 0xff) & hash_mask;
                // If lookahead < MIN_MATCH, ins_h is garbage, but it does
                // not
                // matter since it will be recomputed at next deflate call.
                }
            } else {
                // No match, output a literal byte
                bflush = _tr_tally(0, win[strstart] & 0xff);
                lookahead--;
                strstart++;
            }
            if (bflush) {
                flush_block_only(false);
                if (strm.avail_out === 0) return $39b8545e666ec171$var$NeedMore;
            }
        }
        flush_block_only(flush == $39b8545e666ec171$var$Z_FINISH);
        if (strm.avail_out === 0) {
            if (flush == $39b8545e666ec171$var$Z_FINISH) return $39b8545e666ec171$var$FinishStarted;
            else return $39b8545e666ec171$var$NeedMore;
        }
        return flush == $39b8545e666ec171$var$Z_FINISH ? $39b8545e666ec171$var$FinishDone : $39b8545e666ec171$var$BlockDone;
    }
    // Same as above, but achieves better compression. We use a lazy
    // evaluation for matches: a match is finally adopted only if there is
    // no better match at the next win position.
    function deflate_slow(flush) {
        // short hash_head = 0; // head of hash chain
        let hash_head = 0; // head of hash chain
        let bflush; // set if current block must be flushed
        let max_insert;
        // Process the input block.
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Make sure that we always have enough lookahead, except
            // at the end of the input file. We need MAX_MATCH bytes
            // for the next match, plus MIN_MATCH bytes to insert the
            // string following the next match.
            if (lookahead < $39b8545e666ec171$var$MIN_LOOKAHEAD) {
                fill_window();
                if (lookahead < $39b8545e666ec171$var$MIN_LOOKAHEAD && flush == $39b8545e666ec171$var$Z_NO_FLUSH) return $39b8545e666ec171$var$NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            // Insert the string win[strstart .. strstart+2] in the
            // dictionary, and set hash_head to the head of the hash chain:
            if (lookahead >= $39b8545e666ec171$var$MIN_MATCH) {
                ins_h = (ins_h << hash_shift ^ win[strstart + ($39b8545e666ec171$var$MIN_MATCH - 1)] & 0xff) & hash_mask;
                // prev[strstart&w_mask]=hash_head=head[ins_h];
                hash_head = head[ins_h] & 0xffff;
                prev[strstart & w_mask] = head[ins_h];
                head[ins_h] = strstart;
            }
            // Find the longest match, discarding those <= prev_length.
            prev_length = match_length;
            prev_match = match_start;
            match_length = $39b8545e666ec171$var$MIN_MATCH - 1;
            if (hash_head !== 0 && prev_length < max_lazy_match && (strstart - hash_head & 0xffff) <= w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) {
                // To simplify the code, we prevent matches with the string
                // of win index 0 (in particular we have to avoid a match
                // of the string with itself at the start of the input file).
                if (strategy != $39b8545e666ec171$var$Z_HUFFMAN_ONLY) match_length = longest_match(hash_head);
                // longest_match() sets match_start
                if (match_length <= 5 && (strategy == $39b8545e666ec171$var$Z_FILTERED || match_length == $39b8545e666ec171$var$MIN_MATCH && strstart - match_start > 4096)) // If prev_match is also MIN_MATCH, match_start is garbage
                // but we will ignore the current match anyway.
                match_length = $39b8545e666ec171$var$MIN_MATCH - 1;
            }
            // If there was a match at the previous step and the current
            // match is not better, output the previous match:
            if (prev_length >= $39b8545e666ec171$var$MIN_MATCH && match_length <= prev_length) {
                max_insert = strstart + lookahead - $39b8545e666ec171$var$MIN_MATCH;
                // Do not insert strings in hash table beyond this.
                // check_match(strstart-1, prev_match, prev_length);
                bflush = _tr_tally(strstart - 1 - prev_match, prev_length - $39b8545e666ec171$var$MIN_MATCH);
                // Insert in hash table all strings up to the end of the match.
                // strstart-1 and strstart are already inserted. If there is not
                // enough lookahead, the last two strings are not inserted in
                // the hash table.
                lookahead -= prev_length - 1;
                prev_length -= 2;
                do if (++strstart <= max_insert) {
                    ins_h = (ins_h << hash_shift ^ win[strstart + ($39b8545e666ec171$var$MIN_MATCH - 1)] & 0xff) & hash_mask;
                    // prev[strstart&w_mask]=hash_head=head[ins_h];
                    hash_head = head[ins_h] & 0xffff;
                    prev[strstart & w_mask] = head[ins_h];
                    head[ins_h] = strstart;
                }
                while (--prev_length !== 0);
                match_available = 0;
                match_length = $39b8545e666ec171$var$MIN_MATCH - 1;
                strstart++;
                if (bflush) {
                    flush_block_only(false);
                    if (strm.avail_out === 0) return $39b8545e666ec171$var$NeedMore;
                }
            } else if (match_available !== 0) {
                // If there was no match at the previous position, output a
                // single literal. If there was a match but the current match
                // is longer, truncate the previous match to a single literal.
                bflush = _tr_tally(0, win[strstart - 1] & 0xff);
                if (bflush) flush_block_only(false);
                strstart++;
                lookahead--;
                if (strm.avail_out === 0) return $39b8545e666ec171$var$NeedMore;
            } else {
                // There is no previous match to compare with, wait for
                // the next step to decide.
                match_available = 1;
                strstart++;
                lookahead--;
            }
        }
        if (match_available !== 0) {
            bflush = _tr_tally(0, win[strstart - 1] & 0xff);
            match_available = 0;
        }
        flush_block_only(flush == $39b8545e666ec171$var$Z_FINISH);
        if (strm.avail_out === 0) {
            if (flush == $39b8545e666ec171$var$Z_FINISH) return $39b8545e666ec171$var$FinishStarted;
            else return $39b8545e666ec171$var$NeedMore;
        }
        return flush == $39b8545e666ec171$var$Z_FINISH ? $39b8545e666ec171$var$FinishDone : $39b8545e666ec171$var$BlockDone;
    }
    function deflateReset(strm) {
        strm.total_in = strm.total_out = 0;
        strm.msg = null; //
        that.pending = 0;
        that.pending_out = 0;
        status = $39b8545e666ec171$var$BUSY_STATE;
        last_flush = $39b8545e666ec171$var$Z_NO_FLUSH;
        tr_init();
        lm_init();
        return $39b8545e666ec171$var$Z_OK;
    }
    that.deflateInit = function(strm, _level, bits, _method, memLevel, _strategy) {
        if (!_method) _method = $39b8545e666ec171$var$Z_DEFLATED;
        if (!memLevel) memLevel = $39b8545e666ec171$var$DEF_MEM_LEVEL;
        if (!_strategy) _strategy = $39b8545e666ec171$var$Z_DEFAULT_STRATEGY;
        // byte[] my_version=ZLIB_VERSION;
        //
        // if (!version || version[0] != my_version[0]
        // || stream_size != sizeof(z_stream)) {
        // return Z_VERSION_ERROR;
        // }
        strm.msg = null;
        if (_level == $39b8545e666ec171$var$Z_DEFAULT_COMPRESSION) _level = 6;
        if (memLevel < 1 || memLevel > $39b8545e666ec171$var$MAX_MEM_LEVEL || _method != $39b8545e666ec171$var$Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0 || _strategy > $39b8545e666ec171$var$Z_HUFFMAN_ONLY) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        strm.dstate = that;
        w_bits = bits;
        w_size = 1 << w_bits;
        w_mask = w_size - 1;
        hash_bits = memLevel + 7;
        hash_size = 1 << hash_bits;
        hash_mask = hash_size - 1;
        hash_shift = Math.floor((hash_bits + $39b8545e666ec171$var$MIN_MATCH - 1) / $39b8545e666ec171$var$MIN_MATCH);
        win = new Uint8Array(w_size * 2);
        prev = [];
        head = [];
        lit_bufsize = 1 << memLevel + 6; // 16K elements by default
        that.pending_buf = new Uint8Array(lit_bufsize * 4);
        pending_buf_size = lit_bufsize * 4;
        that.dist_buf = new Uint16Array(lit_bufsize);
        that.lc_buf = new Uint8Array(lit_bufsize);
        level = _level;
        strategy = _strategy;
        return deflateReset(strm);
    };
    that.deflateEnd = function() {
        if (status != $39b8545e666ec171$var$INIT_STATE && status != $39b8545e666ec171$var$BUSY_STATE && status != $39b8545e666ec171$var$FINISH_STATE) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        // Deallocate in reverse order of allocations:
        that.lc_buf = null;
        that.dist_buf = null;
        that.pending_buf = null;
        head = null;
        prev = null;
        win = null;
        // free
        that.dstate = null;
        return status == $39b8545e666ec171$var$BUSY_STATE ? $39b8545e666ec171$var$Z_DATA_ERROR : $39b8545e666ec171$var$Z_OK;
    };
    that.deflateParams = function(strm, _level, _strategy) {
        let err = $39b8545e666ec171$var$Z_OK;
        if (_level == $39b8545e666ec171$var$Z_DEFAULT_COMPRESSION) _level = 6;
        if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > $39b8545e666ec171$var$Z_HUFFMAN_ONLY) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        if ($39b8545e666ec171$var$config_table[level].func != $39b8545e666ec171$var$config_table[_level].func && strm.total_in !== 0) // Flush the last buffer:
        err = strm.deflate($39b8545e666ec171$var$Z_PARTIAL_FLUSH);
        if (level != _level) {
            level = _level;
            max_lazy_match = $39b8545e666ec171$var$config_table[level].max_lazy;
            good_match = $39b8545e666ec171$var$config_table[level].good_length;
            nice_match = $39b8545e666ec171$var$config_table[level].nice_length;
            max_chain_length = $39b8545e666ec171$var$config_table[level].max_chain;
        }
        strategy = _strategy;
        return err;
    };
    that.deflateSetDictionary = function(_strm, dictionary, dictLength) {
        let length = dictLength;
        let n, index = 0;
        if (!dictionary || status != $39b8545e666ec171$var$INIT_STATE) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        if (length < $39b8545e666ec171$var$MIN_MATCH) return $39b8545e666ec171$var$Z_OK;
        if (length > w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD) {
            length = w_size - $39b8545e666ec171$var$MIN_LOOKAHEAD;
            index = dictLength - length; // use the tail of the dictionary
        }
        win.set(dictionary.subarray(index, index + length), 0);
        strstart = length;
        block_start = length;
        // Insert all strings in the hash table (except for the last two bytes).
        // s->lookahead stays null, so s->ins_h will be recomputed at the next
        // call of fill_window.
        ins_h = win[0] & 0xff;
        ins_h = (ins_h << hash_shift ^ win[1] & 0xff) & hash_mask;
        for(n = 0; n <= length - $39b8545e666ec171$var$MIN_MATCH; n++){
            ins_h = (ins_h << hash_shift ^ win[n + ($39b8545e666ec171$var$MIN_MATCH - 1)] & 0xff) & hash_mask;
            prev[n & w_mask] = head[ins_h];
            head[ins_h] = n;
        }
        return $39b8545e666ec171$var$Z_OK;
    };
    that.deflate = function(_strm, flush) {
        let i, header, level_flags, old_flush, bstate;
        if (flush > $39b8545e666ec171$var$Z_FINISH || flush < 0) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        if (!_strm.next_out || !_strm.next_in && _strm.avail_in !== 0 || status == $39b8545e666ec171$var$FINISH_STATE && flush != $39b8545e666ec171$var$Z_FINISH) {
            _strm.msg = $39b8545e666ec171$var$z_errmsg[$39b8545e666ec171$var$Z_NEED_DICT - $39b8545e666ec171$var$Z_STREAM_ERROR];
            return $39b8545e666ec171$var$Z_STREAM_ERROR;
        }
        if (_strm.avail_out === 0) {
            _strm.msg = $39b8545e666ec171$var$z_errmsg[$39b8545e666ec171$var$Z_NEED_DICT - $39b8545e666ec171$var$Z_BUF_ERROR];
            return $39b8545e666ec171$var$Z_BUF_ERROR;
        }
        strm = _strm; // just in case
        old_flush = last_flush;
        last_flush = flush;
        // Write the zlib header
        if (status == $39b8545e666ec171$var$INIT_STATE) {
            header = $39b8545e666ec171$var$Z_DEFLATED + (w_bits - 8 << 4) << 8;
            level_flags = (level - 1 & 0xff) >> 1;
            if (level_flags > 3) level_flags = 3;
            header |= level_flags << 6;
            if (strstart !== 0) header |= $39b8545e666ec171$var$PRESET_DICT;
            header += 31 - header % 31;
            status = $39b8545e666ec171$var$BUSY_STATE;
            putShortMSB(header);
        }
        // Flush as much pending output as possible
        if (that.pending !== 0) {
            strm.flush_pending();
            if (strm.avail_out === 0) {
                // console.log(" avail_out==0");
                // Since avail_out is 0, deflate will be called again with
                // more output space, but possibly with both pending and
                // avail_in equal to zero. There won't be anything to do,
                // but this is not an error situation so make sure we
                // return OK instead of BUF_ERROR at next call of deflate:
                last_flush = -1;
                return $39b8545e666ec171$var$Z_OK;
            }
        // Make sure there is something to do and avoid duplicate
        // consecutive
        // flushes. For repeated and useless calls with Z_FINISH, we keep
        // returning Z_STREAM_END instead of Z_BUFF_ERROR.
        } else if (strm.avail_in === 0 && flush <= old_flush && flush != $39b8545e666ec171$var$Z_FINISH) {
            strm.msg = $39b8545e666ec171$var$z_errmsg[$39b8545e666ec171$var$Z_NEED_DICT - $39b8545e666ec171$var$Z_BUF_ERROR];
            return $39b8545e666ec171$var$Z_BUF_ERROR;
        }
        // User must not provide more input after the first FINISH:
        if (status == $39b8545e666ec171$var$FINISH_STATE && strm.avail_in !== 0) {
            _strm.msg = $39b8545e666ec171$var$z_errmsg[$39b8545e666ec171$var$Z_NEED_DICT - $39b8545e666ec171$var$Z_BUF_ERROR];
            return $39b8545e666ec171$var$Z_BUF_ERROR;
        }
        // Start a new block or continue the current one.
        if (strm.avail_in !== 0 || lookahead !== 0 || flush != $39b8545e666ec171$var$Z_NO_FLUSH && status != $39b8545e666ec171$var$FINISH_STATE) {
            bstate = -1;
            switch($39b8545e666ec171$var$config_table[level].func){
                case $39b8545e666ec171$var$STORED:
                    bstate = deflate_stored(flush);
                    break;
                case $39b8545e666ec171$var$FAST:
                    bstate = deflate_fast(flush);
                    break;
                case $39b8545e666ec171$var$SLOW:
                    bstate = deflate_slow(flush);
                    break;
                default:
            }
            if (bstate == $39b8545e666ec171$var$FinishStarted || bstate == $39b8545e666ec171$var$FinishDone) status = $39b8545e666ec171$var$FINISH_STATE;
            if (bstate == $39b8545e666ec171$var$NeedMore || bstate == $39b8545e666ec171$var$FinishStarted) {
                if (strm.avail_out === 0) last_flush = -1; // avoid BUF_ERROR next call, see above
                return $39b8545e666ec171$var$Z_OK;
            // If flush != Z_NO_FLUSH && avail_out === 0, the next call
            // of deflate should use the same flush parameter to make sure
            // that the flush is complete. So we don't have to output an
            // empty block here, this will be done at next call. This also
            // ensures that for a very small output buffer, we emit at most
            // one empty block.
            }
            if (bstate == $39b8545e666ec171$var$BlockDone) {
                if (flush == $39b8545e666ec171$var$Z_PARTIAL_FLUSH) _tr_align();
                else {
                    _tr_stored_block(0, 0, false);
                    // For a full flush, this empty block will be recognized
                    // as a special marker by inflate_sync().
                    if (flush == $39b8545e666ec171$var$Z_FULL_FLUSH) // state.head[s.hash_size-1]=0;
                    for(i = 0; i < hash_size /*-1*/ ; i++)// forget history
                    head[i] = 0;
                }
                strm.flush_pending();
                if (strm.avail_out === 0) {
                    last_flush = -1; // avoid BUF_ERROR at next call, see above
                    return $39b8545e666ec171$var$Z_OK;
                }
            }
        }
        if (flush != $39b8545e666ec171$var$Z_FINISH) return $39b8545e666ec171$var$Z_OK;
        return $39b8545e666ec171$var$Z_STREAM_END;
    };
}
// ZStream
function $39b8545e666ec171$var$ZStream() {
    const that = this;
    that.next_in_index = 0;
    that.next_out_index = 0;
    // that.next_in; // next input byte
    that.avail_in = 0; // number of bytes available at next_in
    that.total_in = 0; // total nb of input bytes read so far
    // that.next_out; // next output byte should be put there
    that.avail_out = 0; // remaining free space at next_out
    that.total_out = 0; // total nb of bytes output so far
// that.msg;
// that.dstate;
}
$39b8545e666ec171$var$ZStream.prototype = {
    deflateInit (level, bits) {
        const that = this;
        that.dstate = new $39b8545e666ec171$var$Deflate();
        if (!bits) bits = $39b8545e666ec171$var$MAX_BITS;
        return that.dstate.deflateInit(that, level, bits);
    },
    deflate (flush) {
        const that = this;
        if (!that.dstate) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        return that.dstate.deflate(that, flush);
    },
    deflateEnd () {
        const that = this;
        if (!that.dstate) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        const ret = that.dstate.deflateEnd();
        that.dstate = null;
        return ret;
    },
    deflateParams (level, strategy) {
        const that = this;
        if (!that.dstate) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        return that.dstate.deflateParams(that, level, strategy);
    },
    deflateSetDictionary (dictionary, dictLength) {
        const that = this;
        if (!that.dstate) return $39b8545e666ec171$var$Z_STREAM_ERROR;
        return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
    },
    // Read a new buffer from the current input stream, update the
    // total number of bytes read. All deflate() input goes through
    // this function so some applications may wish to modify it to avoid
    // allocating a large strm->next_in buffer and copying from it.
    // (See also flush_pending()).
    read_buf (buf, start, size) {
        const that = this;
        let len = that.avail_in;
        if (len > size) len = size;
        if (len === 0) return 0;
        that.avail_in -= len;
        buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
        that.next_in_index += len;
        that.total_in += len;
        return len;
    },
    // Flush as much pending output as possible. All deflate() output goes
    // through this function so some applications may wish to modify it
    // to avoid allocating a large strm->next_out buffer and copying into it.
    // (See also read_buf()).
    flush_pending () {
        const that = this;
        let len = that.dstate.pending;
        if (len > that.avail_out) len = that.avail_out;
        if (len === 0) return;
        // if (that.dstate.pending_buf.length <= that.dstate.pending_out || that.next_out.length <= that.next_out_index
        // || that.dstate.pending_buf.length < (that.dstate.pending_out + len) || that.next_out.length < (that.next_out_index +
        // len)) {
        // console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +
        // that.next_out_index + ", " + len);
        // console.log("avail_out=" + that.avail_out);
        // }
        that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);
        that.next_out_index += len;
        that.dstate.pending_out += len;
        that.total_out += len;
        that.avail_out -= len;
        that.dstate.pending -= len;
        if (that.dstate.pending === 0) that.dstate.pending_out = 0;
    }
};
// Deflate
function $39b8545e666ec171$export$ae157b6234afe138(options) {
    const that = this;
    const z = new $39b8545e666ec171$var$ZStream();
    const bufsize = $39b8545e666ec171$var$getMaximumCompressedSize(options && options.chunkSize ? options.chunkSize : 65536);
    const flush = $39b8545e666ec171$var$Z_NO_FLUSH;
    const buf = new Uint8Array(bufsize);
    let level = options ? options.level : $39b8545e666ec171$var$Z_DEFAULT_COMPRESSION;
    if (typeof level == "undefined") level = $39b8545e666ec171$var$Z_DEFAULT_COMPRESSION;
    z.deflateInit(level);
    z.next_out = buf;
    that.append = function(data, onprogress) {
        let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
        const buffers = [];
        if (!data.length) return;
        z.next_in_index = 0;
        z.next_in = data;
        z.avail_in = data.length;
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            err = z.deflate(flush);
            if (err != $39b8545e666ec171$var$Z_OK) throw new Error("deflating: " + z.msg);
            if (z.next_out_index) {
                if (z.next_out_index == bufsize) buffers.push(new Uint8Array(buf));
                else buffers.push(buf.slice(0, z.next_out_index));
            }
            bufferSize += z.next_out_index;
            if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
                onprogress(z.next_in_index);
                lastIndex = z.next_in_index;
            }
        }while (z.avail_in > 0 || z.avail_out === 0);
        if (buffers.length > 1) {
            array = new Uint8Array(bufferSize);
            buffers.forEach(function(chunk) {
                array.set(chunk, bufferIndex);
                bufferIndex += chunk.length;
            });
        } else array = buffers[0] || new Uint8Array();
        return array;
    };
    that.flush = function() {
        let err, array, bufferIndex = 0, bufferSize = 0;
        const buffers = [];
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            err = z.deflate($39b8545e666ec171$var$Z_FINISH);
            if (err != $39b8545e666ec171$var$Z_STREAM_END && err != $39b8545e666ec171$var$Z_OK) throw new Error("deflating: " + z.msg);
            if (bufsize - z.avail_out > 0) buffers.push(buf.slice(0, z.next_out_index));
            bufferSize += z.next_out_index;
        }while (z.avail_in > 0 || z.avail_out === 0);
        z.deflateEnd();
        array = new Uint8Array(bufferSize);
        buffers.forEach(function(chunk) {
            array.set(chunk, bufferIndex);
            bufferIndex += chunk.length;
        });
        return array;
    };
}
function $39b8545e666ec171$var$getMaximumCompressedSize(uncompressedSize) {
    return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ // deno-lint-ignore-file no-this-alias prefer-const
// Global
const $5d6fb71db276993f$var$MAX_BITS = 15;
const $5d6fb71db276993f$var$Z_OK = 0;
const $5d6fb71db276993f$var$Z_STREAM_END = 1;
const $5d6fb71db276993f$var$Z_NEED_DICT = 2;
const $5d6fb71db276993f$var$Z_STREAM_ERROR = -2;
const $5d6fb71db276993f$var$Z_DATA_ERROR = -3;
const $5d6fb71db276993f$var$Z_MEM_ERROR = -4;
const $5d6fb71db276993f$var$Z_BUF_ERROR = -5;
const $5d6fb71db276993f$var$inflate_mask = [
    0x00000000,
    0x00000001,
    0x00000003,
    0x00000007,
    0x0000000f,
    0x0000001f,
    0x0000003f,
    0x0000007f,
    0x000000ff,
    0x000001ff,
    0x000003ff,
    0x000007ff,
    0x00000fff,
    0x00001fff,
    0x00003fff,
    0x00007fff,
    0x0000ffff
];
const $5d6fb71db276993f$var$MANY = 1440;
// JZlib version : "1.0.2"
const $5d6fb71db276993f$var$Z_NO_FLUSH = 0;
const $5d6fb71db276993f$var$Z_FINISH = 4;
// InfTree
const $5d6fb71db276993f$var$fixed_bl = 9;
const $5d6fb71db276993f$var$fixed_bd = 5;
const $5d6fb71db276993f$var$fixed_tl = [
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    192,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    160,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    224,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    144,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    208,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    176,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    240,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    200,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    168,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    232,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    152,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    216,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    184,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    248,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    196,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    164,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    228,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    148,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    212,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    180,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    244,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    204,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    172,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    236,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    156,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    220,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    188,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    252,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    194,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    162,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    226,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    146,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    210,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    178,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    242,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    202,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    170,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    234,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    154,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    218,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    186,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    250,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    198,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    166,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    230,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    150,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    214,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    182,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    246,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    206,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    174,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    238,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    158,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    222,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    190,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    254,
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    193,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    161,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    225,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    145,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    209,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    177,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    241,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    201,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    169,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    233,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    153,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    217,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    185,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    249,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    197,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    165,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    229,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    149,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    213,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    181,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    245,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    205,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    173,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    237,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    157,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    221,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    189,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    253,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    195,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    163,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    227,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    147,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    211,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    179,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    243,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    203,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    171,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    235,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    155,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    219,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    187,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    251,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    199,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    167,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    231,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    151,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    215,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    183,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    247,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    207,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    175,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    239,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    159,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    223,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    191,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    255
];
const $5d6fb71db276993f$var$fixed_td = [
    80,
    5,
    1,
    87,
    5,
    257,
    83,
    5,
    17,
    91,
    5,
    4097,
    81,
    5,
    5,
    89,
    5,
    1025,
    85,
    5,
    65,
    93,
    5,
    16385,
    80,
    5,
    3,
    88,
    5,
    513,
    84,
    5,
    33,
    92,
    5,
    8193,
    82,
    5,
    9,
    90,
    5,
    2049,
    86,
    5,
    129,
    192,
    5,
    24577,
    80,
    5,
    2,
    87,
    5,
    385,
    83,
    5,
    25,
    91,
    5,
    6145,
    81,
    5,
    7,
    89,
    5,
    1537,
    85,
    5,
    97,
    93,
    5,
    24577,
    80,
    5,
    4,
    88,
    5,
    769,
    84,
    5,
    49,
    92,
    5,
    12289,
    82,
    5,
    13,
    90,
    5,
    3073,
    86,
    5,
    193,
    192,
    5,
    24577
];
// Tables for deflate from PKZIP's appnote.txt.
const $5d6fb71db276993f$var$cplens = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
];
// see note #13 above about 258
const $5d6fb71db276993f$var$cplext = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    112,
    112 // 112==invalid
];
const $5d6fb71db276993f$var$cpdist = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577
];
const $5d6fb71db276993f$var$cpdext = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
// If BMAX needs to be larger than 16, then h and x[] should be uLong.
const $5d6fb71db276993f$var$BMAX = 15; // maximum bit length of any code
function $5d6fb71db276993f$var$InfTree() {
    const that = this;
    let hn; // hufts used in space
    let v; // work area for huft_build
    let c; // bit length count table
    let r; // table entry for structure assignment
    let u; // table stack
    let x; // bit offsets, then code stack
    function huft_build(b, // BMAX)
    bindex, n, s, d, e, t, m, hp, hn, v // working area: values in order of bit length
    ) {
        // Given a list of code lengths and a maximum table size, make a set of
        // tables to decode that set of codes. Return Z_OK on success,
        // Z_BUF_ERROR
        // if the given code set is incomplete (the tables are still built in
        // this
        // case), Z_DATA_ERROR if the input is invalid (an over-subscribed set
        // of
        // lengths), or Z_MEM_ERROR if not enough memory.
        let a; // counter for codes of length k
        let f; // i repeats in table every f entries
        let g; // maximum code length
        let h; // table level
        let i; // counter, current code
        let j; // counter
        let k; // number of bits in current code
        let l; // bits per table (returned in m)
        let mask; // (1 << w) - 1, to avoid cc -O bug on HP
        let p; // pointer into c[], b[], or v[]
        let q; // points to current table
        let w; // bits before this table == (l * h)
        let xp; // pointer into x
        let y; // number of dummy codes added
        let z; // number of entries in current table
        // Generate counts for each bit length
        p = 0;
        i = n;
        do {
            c[b[bindex + p]]++;
            p++;
            i--; // assume all entries <= BMAX
        }while (i !== 0);
        if (c[0] == n) {
            t[0] = -1;
            m[0] = 0;
            return $5d6fb71db276993f$var$Z_OK;
        }
        // Find minimum and maximum length, bound *m by those
        l = m[0];
        for(j = 1; j <= $5d6fb71db276993f$var$BMAX; j++)if (c[j] !== 0) break;
        k = j; // minimum code length
        if (l < j) l = j;
        for(i = $5d6fb71db276993f$var$BMAX; i !== 0; i--){
            if (c[i] !== 0) break;
        }
        g = i; // maximum code length
        if (l > i) l = i;
        m[0] = l;
        // Adjust last length count to fill out codes, if needed
        for(y = 1 << j; j < i; j++, y <<= 1){
            if ((y -= c[j]) < 0) return $5d6fb71db276993f$var$Z_DATA_ERROR;
        }
        if ((y -= c[i]) < 0) return $5d6fb71db276993f$var$Z_DATA_ERROR;
        c[i] += y;
        // Generate starting offsets into the value table for each length
        x[1] = j = 0;
        p = 1;
        xp = 2;
        while(--i !== 0){
            x[xp] = j += c[p];
            xp++;
            p++;
        }
        // Make a table of values in order of bit lengths
        i = 0;
        p = 0;
        do {
            if ((j = b[bindex + p]) !== 0) v[x[j]++] = i;
            p++;
        }while (++i < n);
        n = x[g]; // set n to length of v
        // Generate the Huffman codes and for each, make the table entries
        x[0] = i = 0; // first Huffman code is zero
        p = 0; // grab values in bit order
        h = -1; // no tables yet--level -1
        w = -l; // bits decoded == (l * h)
        u[0] = 0; // just to keep compilers happy
        q = 0; // ditto
        z = 0; // ditto
        // go through the bit lengths (k already is bits in shortest code)
        for(; k <= g; k++){
            a = c[k];
            while(a-- !== 0){
                // here i is the Huffman code of length k bits for value *p
                // make tables up to required level
                while(k > w + l){
                    h++;
                    w += l; // previous table always l bits
                    // compute minimum size table less than or equal to l bits
                    z = g - w;
                    z = z > l ? l : z; // table size upper limit
                    if ((f = 1 << (j = k - w)) > a + 1) {
                        // too few codes for
                        // k-w bit table
                        f -= a + 1; // deduct codes from patterns left
                        xp = k;
                        if (j < z) while(++j < z){
                            if ((f <<= 1) <= c[++xp]) break; // enough codes to use up j bits
                            f -= c[xp]; // else deduct codes from patterns
                        }
                    }
                    z = 1 << j; // table entries for j-bit table
                    // allocate new table
                    if (hn[0] + z > $5d6fb71db276993f$var$MANY) return $5d6fb71db276993f$var$Z_DATA_ERROR; // overflow of MANY
                    u[h] = q = /* hp+ */ hn[0]; // DEBUG
                    hn[0] += z;
                    // connect to last table, if there is one
                    if (h !== 0) {
                        x[h] = i; // save pattern for backing up
                        r[0] = /* (byte) */ j; // bits in this table
                        r[1] = /* (byte) */ l; // bits to dump before this table
                        j = i >>> w - l;
                        r[2] = /* (int) */ q - u[h - 1] - j; // offset to this table
                        hp.set(r, (u[h - 1] + j) * 3);
                    // to
                    // last
                    // table
                    } else t[0] = q; // first table is returned result
                }
                // set up table entry in r
                r[1] = /* (byte) */ k - w;
                if (p >= n) r[0] = 192; // out of values--invalid code
                else if (v[p] < s) {
                    r[0] = /* (byte) */ v[p] < 256 ? 0 : 96; // 256 is
                    // end-of-block
                    r[2] = v[p++]; // simple code is just the value
                } else {
                    r[0] = /* (byte) */ e[v[p] - s] + 16 + 64; // non-simple--look
                    // up in lists
                    r[2] = d[v[p++] - s];
                }
                // fill code-like entries with r
                f = 1 << k - w;
                for(j = i >>> w; j < z; j += f)hp.set(r, (q + j) * 3);
                // backwards increment the k-bit code i
                for(j = 1 << k - 1; (i & j) !== 0; j >>>= 1)i ^= j;
                i ^= j;
                // backup over finished tables
                mask = (1 << w) - 1; // needed on HP, cc -O bug
                while((i & mask) != x[h]){
                    h--; // don't need to update q
                    w -= l;
                    mask = (1 << w) - 1;
                }
            }
        }
        // Return Z_BUF_ERROR if we were given an incomplete table
        return y !== 0 && g != 1 ? $5d6fb71db276993f$var$Z_BUF_ERROR : $5d6fb71db276993f$var$Z_OK;
    }
    function initWorkArea(vsize) {
        let i;
        if (!hn) {
            hn = []; // []; //new Array(1);
            v = []; // new Array(vsize);
            c = new Int32Array($5d6fb71db276993f$var$BMAX + 1); // new Array(BMAX + 1);
            r = []; // new Array(3);
            u = new Int32Array($5d6fb71db276993f$var$BMAX); // new Array(BMAX);
            x = new Int32Array($5d6fb71db276993f$var$BMAX + 1); // new Array(BMAX + 1);
        }
        if (v.length < vsize) v = []; // new Array(vsize);
        for(i = 0; i < vsize; i++)v[i] = 0;
        for(i = 0; i < $5d6fb71db276993f$var$BMAX + 1; i++)c[i] = 0;
        for(i = 0; i < 3; i++)r[i] = 0;
        // for(int i=0; i<BMAX; i++){u[i]=0;}
        u.set(c.subarray(0, $5d6fb71db276993f$var$BMAX), 0);
        // for(int i=0; i<BMAX+1; i++){x[i]=0;}
        x.set(c.subarray(0, $5d6fb71db276993f$var$BMAX + 1), 0);
    }
    that.inflate_trees_bits = function(c, bb, tb, hp, z // for messages
    ) {
        let result;
        initWorkArea(19);
        hn[0] = 0;
        result = huft_build(c, 0, 19, 19, null, null, tb, bb, hp, hn, v);
        if (result == $5d6fb71db276993f$var$Z_DATA_ERROR) z.msg = "oversubscribed dynamic bit lengths tree";
        else if (result == $5d6fb71db276993f$var$Z_BUF_ERROR || bb[0] === 0) {
            z.msg = "incomplete dynamic bit lengths tree";
            result = $5d6fb71db276993f$var$Z_DATA_ERROR;
        }
        return result;
    };
    that.inflate_trees_dynamic = function(nl, nd, c, bl, bd, tl, td, hp, z // for messages
    ) {
        let result;
        // build literal/length tree
        initWorkArea(288);
        hn[0] = 0;
        result = huft_build(c, 0, nl, 257, $5d6fb71db276993f$var$cplens, $5d6fb71db276993f$var$cplext, tl, bl, hp, hn, v);
        if (result != $5d6fb71db276993f$var$Z_OK || bl[0] === 0) {
            if (result == $5d6fb71db276993f$var$Z_DATA_ERROR) z.msg = "oversubscribed literal/length tree";
            else if (result != $5d6fb71db276993f$var$Z_MEM_ERROR) {
                z.msg = "incomplete literal/length tree";
                result = $5d6fb71db276993f$var$Z_DATA_ERROR;
            }
            return result;
        }
        // build distance tree
        initWorkArea(288);
        result = huft_build(c, nl, nd, 0, $5d6fb71db276993f$var$cpdist, $5d6fb71db276993f$var$cpdext, td, bd, hp, hn, v);
        if (result != $5d6fb71db276993f$var$Z_OK || bd[0] === 0 && nl > 257) {
            if (result == $5d6fb71db276993f$var$Z_DATA_ERROR) z.msg = "oversubscribed distance tree";
            else if (result == $5d6fb71db276993f$var$Z_BUF_ERROR) {
                z.msg = "incomplete distance tree";
                result = $5d6fb71db276993f$var$Z_DATA_ERROR;
            } else if (result != $5d6fb71db276993f$var$Z_MEM_ERROR) {
                z.msg = "empty distance tree with lengths";
                result = $5d6fb71db276993f$var$Z_DATA_ERROR;
            }
            return result;
        }
        return $5d6fb71db276993f$var$Z_OK;
    };
}
$5d6fb71db276993f$var$InfTree.inflate_trees_fixed = function(bl, bd, tl, td // distance tree result
) {
    bl[0] = $5d6fb71db276993f$var$fixed_bl;
    bd[0] = $5d6fb71db276993f$var$fixed_bd;
    tl[0] = $5d6fb71db276993f$var$fixed_tl;
    td[0] = $5d6fb71db276993f$var$fixed_td;
    return $5d6fb71db276993f$var$Z_OK;
};
// InfCodes
// waiting for "i:"=input,
// "o:"=output,
// "x:"=nothing
const $5d6fb71db276993f$var$START = 0; // x: set up for LEN
const $5d6fb71db276993f$var$LEN = 1; // i: get length/literal/eob next
const $5d6fb71db276993f$var$LENEXT = 2; // i: getting length extra (have base)
const $5d6fb71db276993f$var$DIST = 3; // i: get distance next
const $5d6fb71db276993f$var$DISTEXT = 4; // i: getting distance extra
const $5d6fb71db276993f$var$COPY = 5; // o: copying bytes in win, waiting
// for space
const $5d6fb71db276993f$var$LIT = 6; // o: got literal, waiting for output
// space
const $5d6fb71db276993f$var$WASH = 7; // o: got eob, possibly still output
// waiting
const $5d6fb71db276993f$var$END = 8; // x: got eob and all data flushed
const $5d6fb71db276993f$var$BADCODE = 9; // x: got error
function $5d6fb71db276993f$var$InfCodes() {
    const that = this;
    let mode; // current inflate_codes mode
    // mode dependent information
    let len = 0;
    let tree; // pointer into tree
    let tree_index = 0;
    let need = 0; // bits needed
    let lit = 0;
    // if EXT or COPY, where and how much
    let get = 0; // bits to get for extra
    let dist = 0; // distance back to copy from
    let lbits = 0; // ltree bits decoded per branch
    let dbits = 0; // dtree bits decoder per branch
    let ltree; // literal/length/eob tree
    let ltree_index = 0; // literal/length/eob tree
    let dtree; // distance tree
    let dtree_index = 0; // distance tree
    // Called with number of bytes left to write in win at least 258
    // (the maximum string length) and number of input bytes available
    // at least ten. The ten bytes are six bytes for the longest length/
    // distance pair plus four bytes for overloading the bit buffer.
    function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
        let t; // temporary pointer
        let tp; // temporary pointer
        let tp_index; // temporary pointer
        let e; // extra bits or operation
        let b; // bit buffer
        let k; // bits in bit buffer
        let p; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let ml; // mask for literal/length tree
        let md; // mask for distance tree
        let c; // bytes to copy
        let d; // distance back to copy from
        let r; // copy source pointer
        let tp_index_t_3; // (tp_index+t)*3
        // load input, output, bit values
        p = z.next_in_index;
        n = z.avail_in;
        b = s.bitb;
        k = s.bitk;
        q = s.write;
        m = q < s.read ? s.read - q - 1 : s.end - q;
        // initialize masks
        ml = $5d6fb71db276993f$var$inflate_mask[bl];
        md = $5d6fb71db276993f$var$inflate_mask[bd];
        // do until not enough input or output space for fast loop
        do {
            // get literal/length code
            while(k < 20){
                n--;
                b |= (z.read_byte(p++) & 0xff) << k;
                k += 8;
            }
            t = b & ml;
            tp = tl;
            tp_index = tl_index;
            tp_index_t_3 = (tp_index + t) * 3;
            if ((e = tp[tp_index_t_3]) === 0) {
                b >>= tp[tp_index_t_3 + 1];
                k -= tp[tp_index_t_3 + 1];
                s.win[q++] = /* (byte) */ tp[tp_index_t_3 + 2];
                m--;
                continue;
            }
            do {
                b >>= tp[tp_index_t_3 + 1];
                k -= tp[tp_index_t_3 + 1];
                if ((e & 16) !== 0) {
                    e &= 15;
                    c = tp[tp_index_t_3 + 2] + /* (int) */ (b & $5d6fb71db276993f$var$inflate_mask[e]);
                    b >>= e;
                    k -= e;
                    // decode distance base of block to copy
                    while(k < 15){
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    t = b & md;
                    tp = td;
                    tp_index = td_index;
                    tp_index_t_3 = (tp_index + t) * 3;
                    e = tp[tp_index_t_3];
                    do {
                        b >>= tp[tp_index_t_3 + 1];
                        k -= tp[tp_index_t_3 + 1];
                        if ((e & 16) !== 0) {
                            // get extra bits to add to distance base
                            e &= 15;
                            while(k < e){
                                n--;
                                b |= (z.read_byte(p++) & 0xff) << k;
                                k += 8;
                            }
                            d = tp[tp_index_t_3 + 2] + (b & $5d6fb71db276993f$var$inflate_mask[e]);
                            b >>= e;
                            k -= e;
                            // do the copy
                            m -= c;
                            if (q >= d) {
                                // just copy
                                r = q - d;
                                if (q - r > 0 && 2 > q - r) {
                                    s.win[q++] = s.win[r++]; // minimum
                                    // count is
                                    // three,
                                    s.win[q++] = s.win[r++]; // so unroll
                                    // loop a
                                    // little
                                    c -= 2;
                                } else {
                                    s.win.set(s.win.subarray(r, r + 2), q);
                                    q += 2;
                                    r += 2;
                                    c -= 2;
                                }
                            } else {
                                r = q - d;
                                do r += s.end; // force pointer in win
                                while (r < 0); // covers invalid distances
                                e = s.end - r;
                                if (c > e) {
                                    c -= e; // wrapped copy
                                    if (q - r > 0 && e > q - r) do s.win[q++] = s.win[r++];
                                    while (--e !== 0);
                                    else {
                                        s.win.set(s.win.subarray(r, r + e), q);
                                        q += e;
                                        r += e;
                                        e = 0;
                                    }
                                    r = 0; // copy rest from start of win
                                }
                            }
                            // copy all or what's left
                            if (q - r > 0 && c > q - r) do s.win[q++] = s.win[r++];
                            while (--c !== 0);
                            else {
                                s.win.set(s.win.subarray(r, r + c), q);
                                q += c;
                                r += c;
                                c = 0;
                            }
                            break;
                        } else if ((e & 64) === 0) {
                            t += tp[tp_index_t_3 + 2];
                            t += b & $5d6fb71db276993f$var$inflate_mask[e];
                            tp_index_t_3 = (tp_index + t) * 3;
                            e = tp[tp_index_t_3];
                        } else {
                            z.msg = "invalid distance code";
                            c = z.avail_in - n;
                            c = k >> 3 < c ? k >> 3 : c;
                            n += c;
                            p -= c;
                            k -= c << 3;
                            s.bitb = b;
                            s.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            s.write = q;
                            return $5d6fb71db276993f$var$Z_DATA_ERROR;
                        }
                    // eslint-disable-next-line no-constant-condition
                    }while (true);
                    break;
                }
                if ((e & 64) === 0) {
                    t += tp[tp_index_t_3 + 2];
                    t += b & $5d6fb71db276993f$var$inflate_mask[e];
                    tp_index_t_3 = (tp_index + t) * 3;
                    if ((e = tp[tp_index_t_3]) === 0) {
                        b >>= tp[tp_index_t_3 + 1];
                        k -= tp[tp_index_t_3 + 1];
                        s.win[q++] = /* (byte) */ tp[tp_index_t_3 + 2];
                        m--;
                        break;
                    }
                } else if ((e & 32) !== 0) {
                    c = z.avail_in - n;
                    c = k >> 3 < c ? k >> 3 : c;
                    n += c;
                    p -= c;
                    k -= c << 3;
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return $5d6fb71db276993f$var$Z_STREAM_END;
                } else {
                    z.msg = "invalid literal/length code";
                    c = z.avail_in - n;
                    c = k >> 3 < c ? k >> 3 : c;
                    n += c;
                    p -= c;
                    k -= c << 3;
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return $5d6fb71db276993f$var$Z_DATA_ERROR;
                }
            // eslint-disable-next-line no-constant-condition
            }while (true);
        }while (m >= 258 && n >= 10);
        // not enough input or output--restore pointers and return
        c = z.avail_in - n;
        c = k >> 3 < c ? k >> 3 : c;
        n += c;
        p -= c;
        k -= c << 3;
        s.bitb = b;
        s.bitk = k;
        z.avail_in = n;
        z.total_in += p - z.next_in_index;
        z.next_in_index = p;
        s.write = q;
        return $5d6fb71db276993f$var$Z_OK;
    }
    that.init = function(bl, bd, tl, tl_index, td, td_index) {
        mode = $5d6fb71db276993f$var$START;
        lbits = /* (byte) */ bl;
        dbits = /* (byte) */ bd;
        ltree = tl;
        ltree_index = tl_index;
        dtree = td;
        dtree_index = td_index;
        tree = null;
    };
    that.proc = function(s, z, r) {
        let j; // temporary storage
        let tindex; // temporary pointer
        let e; // extra bits or operation
        let b = 0; // bit buffer
        let k = 0; // bits in bit buffer
        let p = 0; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let f; // pointer to copy strings from
        // copy input/output information to locals (UPDATE macro restores)
        p = z.next_in_index;
        n = z.avail_in;
        b = s.bitb;
        k = s.bitk;
        q = s.write;
        m = q < s.read ? s.read - q - 1 : s.end - q;
        // process input and output based on current state
        // eslint-disable-next-line no-constant-condition
        while(true)switch(mode){
            // waiting for "i:"=input, "o:"=output, "x:"=nothing
            case $5d6fb71db276993f$var$START:
                if (m >= 258 && n >= 10) {
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);
                    p = z.next_in_index;
                    n = z.avail_in;
                    b = s.bitb;
                    k = s.bitk;
                    q = s.write;
                    m = q < s.read ? s.read - q - 1 : s.end - q;
                    if (r != $5d6fb71db276993f$var$Z_OK) {
                        mode = r == $5d6fb71db276993f$var$Z_STREAM_END ? $5d6fb71db276993f$var$WASH : $5d6fb71db276993f$var$BADCODE;
                        break;
                    }
                }
                need = lbits;
                tree = ltree;
                tree_index = ltree_index;
                mode = $5d6fb71db276993f$var$LEN;
            /* falls through */ case $5d6fb71db276993f$var$LEN:
                j = need;
                while(k < j){
                    if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                tindex = (tree_index + (b & $5d6fb71db276993f$var$inflate_mask[j])) * 3;
                b >>>= tree[tindex + 1];
                k -= tree[tindex + 1];
                e = tree[tindex];
                if (e === 0) {
                    lit = tree[tindex + 2];
                    mode = $5d6fb71db276993f$var$LIT;
                    break;
                }
                if ((e & 16) !== 0) {
                    get = e & 15;
                    len = tree[tindex + 2];
                    mode = $5d6fb71db276993f$var$LENEXT;
                    break;
                }
                if ((e & 64) === 0) {
                    need = e;
                    tree_index = tindex / 3 + tree[tindex + 2];
                    break;
                }
                if ((e & 32) !== 0) {
                    mode = $5d6fb71db276993f$var$WASH;
                    break;
                }
                mode = $5d6fb71db276993f$var$BADCODE; // invalid code
                z.msg = "invalid literal/length code";
                r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case $5d6fb71db276993f$var$LENEXT:
                j = get;
                while(k < j){
                    if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                len += b & $5d6fb71db276993f$var$inflate_mask[j];
                b >>= j;
                k -= j;
                need = dbits;
                tree = dtree;
                tree_index = dtree_index;
                mode = $5d6fb71db276993f$var$DIST;
            /* falls through */ case $5d6fb71db276993f$var$DIST:
                j = need;
                while(k < j){
                    if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                tindex = (tree_index + (b & $5d6fb71db276993f$var$inflate_mask[j])) * 3;
                b >>= tree[tindex + 1];
                k -= tree[tindex + 1];
                e = tree[tindex];
                if ((e & 16) !== 0) {
                    get = e & 15;
                    dist = tree[tindex + 2];
                    mode = $5d6fb71db276993f$var$DISTEXT;
                    break;
                }
                if ((e & 64) === 0) {
                    need = e;
                    tree_index = tindex / 3 + tree[tindex + 2];
                    break;
                }
                mode = $5d6fb71db276993f$var$BADCODE; // invalid code
                z.msg = "invalid distance code";
                r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case $5d6fb71db276993f$var$DISTEXT:
                j = get;
                while(k < j){
                    if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                dist += b & $5d6fb71db276993f$var$inflate_mask[j];
                b >>= j;
                k -= j;
                mode = $5d6fb71db276993f$var$COPY;
            /* falls through */ case $5d6fb71db276993f$var$COPY:
                f = q - dist;
                while(f < 0)f += s.end; // of "if" handles invalid distances
                while(len !== 0){
                    if (m === 0) {
                        if (q == s.end && s.read !== 0) {
                            q = 0;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                        }
                        if (m === 0) {
                            s.write = q;
                            r = s.inflate_flush(z, r);
                            q = s.write;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                            if (q == s.end && s.read !== 0) {
                                q = 0;
                                m = q < s.read ? s.read - q - 1 : s.end - q;
                            }
                            if (m === 0) {
                                s.bitb = b;
                                s.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                s.write = q;
                                return s.inflate_flush(z, r);
                            }
                        }
                    }
                    s.win[q++] = s.win[f++];
                    m--;
                    if (f == s.end) f = 0;
                    len--;
                }
                mode = $5d6fb71db276993f$var$START;
                break;
            case $5d6fb71db276993f$var$LIT:
                if (m === 0) {
                    if (q == s.end && s.read !== 0) {
                        q = 0;
                        m = q < s.read ? s.read - q - 1 : s.end - q;
                    }
                    if (m === 0) {
                        s.write = q;
                        r = s.inflate_flush(z, r);
                        q = s.write;
                        m = q < s.read ? s.read - q - 1 : s.end - q;
                        if (q == s.end && s.read !== 0) {
                            q = 0;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                        }
                        if (m === 0) {
                            s.bitb = b;
                            s.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            s.write = q;
                            return s.inflate_flush(z, r);
                        }
                    }
                }
                r = $5d6fb71db276993f$var$Z_OK;
                s.win[q++] = /* (byte) */ lit;
                m--;
                mode = $5d6fb71db276993f$var$START;
                break;
            case $5d6fb71db276993f$var$WASH:
                if (k > 7) {
                    k -= 8;
                    n++;
                    p--; // can always return one
                }
                s.write = q;
                r = s.inflate_flush(z, r);
                q = s.write;
                m = q < s.read ? s.read - q - 1 : s.end - q;
                if (s.read != s.write) {
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return s.inflate_flush(z, r);
                }
                mode = $5d6fb71db276993f$var$END;
            /* falls through */ case $5d6fb71db276993f$var$END:
                r = $5d6fb71db276993f$var$Z_STREAM_END;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case $5d6fb71db276993f$var$BADCODE:
                r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            default:
                r = $5d6fb71db276993f$var$Z_STREAM_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
        }
    };
    that.free = function() {
    // ZFREE(z, c);
    };
}
// InfBlocks
// Table for deflate from PKZIP's appnote.txt.
const $5d6fb71db276993f$var$border = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
const $5d6fb71db276993f$var$TYPE = 0; // get type bits (3, including end bit)
const $5d6fb71db276993f$var$LENS = 1; // get lengths for stored
const $5d6fb71db276993f$var$STORED = 2; // processing stored block
const $5d6fb71db276993f$var$TABLE = 3; // get table lengths
const $5d6fb71db276993f$var$BTREE = 4; // get bit lengths tree for a dynamic
// block
const $5d6fb71db276993f$var$DTREE = 5; // get length, distance trees for a
// dynamic block
const $5d6fb71db276993f$var$CODES = 6; // processing fixed or dynamic block
const $5d6fb71db276993f$var$DRY = 7; // output remaining win bytes
const $5d6fb71db276993f$var$DONELOCKS = 8; // finished last block, done
const $5d6fb71db276993f$var$BADBLOCKS = 9; // ot a data error--stuck here
function $5d6fb71db276993f$var$InfBlocks(z, w) {
    const that = this;
    let mode = $5d6fb71db276993f$var$TYPE; // current inflate_block mode
    let left = 0; // if STORED, bytes left to copy
    let table = 0; // table lengths (14 bits)
    let index = 0; // index into blens (or border)
    let blens; // bit lengths of codes
    const bb = [
        0
    ]; // bit length tree depth
    const tb = [
        0
    ]; // bit length decoding tree
    const codes = new $5d6fb71db276993f$var$InfCodes(); // if CODES, current state
    let last = 0; // true if this block is the last block
    let hufts = new Int32Array($5d6fb71db276993f$var$MANY * 3); // single malloc for tree space
    const check = 0; // check on output
    const inftree = new $5d6fb71db276993f$var$InfTree();
    that.bitk = 0; // bits in bit buffer
    that.bitb = 0; // bit buffer
    that.win = new Uint8Array(w); // sliding win
    that.end = w; // one byte after sliding win
    that.read = 0; // win read pointer
    that.write = 0; // win write pointer
    that.reset = function(z, c) {
        if (c) c[0] = check;
        // if (mode == BTREE || mode == DTREE) {
        // }
        if (mode == $5d6fb71db276993f$var$CODES) codes.free(z);
        mode = $5d6fb71db276993f$var$TYPE;
        that.bitk = 0;
        that.bitb = 0;
        that.read = that.write = 0;
    };
    that.reset(z, null);
    // copy as much as possible from the sliding win to the output area
    that.inflate_flush = function(z, r) {
        let n;
        let p;
        let q;
        // local copies of source and destination pointers
        p = z.next_out_index;
        q = that.read;
        // compute number of bytes to copy as far as end of win
        n = /* (int) */ (q <= that.write ? that.write : that.end) - q;
        if (n > z.avail_out) n = z.avail_out;
        if (n !== 0 && r == $5d6fb71db276993f$var$Z_BUF_ERROR) r = $5d6fb71db276993f$var$Z_OK;
        // update counters
        z.avail_out -= n;
        z.total_out += n;
        // copy as far as end of win
        z.next_out.set(that.win.subarray(q, q + n), p);
        p += n;
        q += n;
        // see if more to copy at beginning of win
        if (q == that.end) {
            // wrap pointers
            q = 0;
            if (that.write == that.end) that.write = 0;
            // compute bytes to copy
            n = that.write - q;
            if (n > z.avail_out) n = z.avail_out;
            if (n !== 0 && r == $5d6fb71db276993f$var$Z_BUF_ERROR) r = $5d6fb71db276993f$var$Z_OK;
            // update counters
            z.avail_out -= n;
            z.total_out += n;
            // copy
            z.next_out.set(that.win.subarray(q, q + n), p);
            p += n;
            q += n;
        }
        // update pointers
        z.next_out_index = p;
        that.read = q;
        // done
        return r;
    };
    that.proc = function(z, r) {
        let t; // temporary storage
        let b; // bit buffer
        let k; // bits in bit buffer
        let p; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let i;
        // copy input/output information to locals (UPDATE macro restores)
        // {
        p = z.next_in_index;
        n = z.avail_in;
        b = that.bitb;
        k = that.bitk;
        // }
        // {
        q = that.write;
        m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
        // }
        // process input based on current state
        // DEBUG dtree
        // eslint-disable-next-line no-constant-condition
        while(true){
            let bl, bd, tl, td, bl_, bd_, tl_, td_;
            switch(mode){
                case $5d6fb71db276993f$var$TYPE:
                    while(k < 3){
                        if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    t = /* (int) */ b & 7;
                    last = t & 1;
                    switch(t >>> 1){
                        case 0:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            t = k & 7; // go to byte boundary
                            // {
                            b >>>= t;
                            k -= t;
                            // }
                            mode = $5d6fb71db276993f$var$LENS; // get length of stored block
                            break;
                        case 1:
                            // {
                            bl = []; // new Array(1);
                            bd = []; // new Array(1);
                            tl = [
                                []
                            ]; // new Array(1);
                            td = [
                                []
                            ]; // new Array(1);
                            $5d6fb71db276993f$var$InfTree.inflate_trees_fixed(bl, bd, tl, td);
                            codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
                            // }
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = $5d6fb71db276993f$var$CODES;
                            break;
                        case 2:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = $5d6fb71db276993f$var$TABLE;
                            break;
                        case 3:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = $5d6fb71db276993f$var$BADBLOCKS;
                            z.msg = "invalid block type";
                            r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                    }
                    break;
                case $5d6fb71db276993f$var$LENS:
                    while(k < 32){
                        if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    if ((~b >>> 16 & 0xffff) != (b & 0xffff)) {
                        mode = $5d6fb71db276993f$var$BADBLOCKS;
                        z.msg = "invalid stored block lengths";
                        r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    left = b & 0xffff;
                    b = k = 0; // dump bits
                    mode = left !== 0 ? $5d6fb71db276993f$var$STORED : last !== 0 ? $5d6fb71db276993f$var$DRY : $5d6fb71db276993f$var$TYPE;
                    break;
                case $5d6fb71db276993f$var$STORED:
                    if (n === 0) {
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    if (m === 0) {
                        if (q == that.end && that.read !== 0) {
                            q = 0;
                            m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                        }
                        if (m === 0) {
                            that.write = q;
                            r = that.inflate_flush(z, r);
                            q = that.write;
                            m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                            if (q == that.end && that.read !== 0) {
                                q = 0;
                                m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                            }
                            if (m === 0) {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                        }
                    }
                    r = $5d6fb71db276993f$var$Z_OK;
                    t = left;
                    if (t > n) t = n;
                    if (t > m) t = m;
                    that.win.set(z.read_buf(p, t), q);
                    p += t;
                    n -= t;
                    q += t;
                    m -= t;
                    if ((left -= t) !== 0) break;
                    mode = last !== 0 ? $5d6fb71db276993f$var$DRY : $5d6fb71db276993f$var$TYPE;
                    break;
                case $5d6fb71db276993f$var$TABLE:
                    while(k < 14){
                        if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    table = t = b & 0x3fff;
                    if ((t & 0x1f) > 29 || (t >> 5 & 0x1f) > 29) {
                        mode = $5d6fb71db276993f$var$BADBLOCKS;
                        z.msg = "too many length or distance symbols";
                        r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    t = 258 + (t & 0x1f) + (t >> 5 & 0x1f);
                    if (!blens || blens.length < t) blens = []; // new Array(t);
                    else for(i = 0; i < t; i++)blens[i] = 0;
                    // {
                    b >>>= 14;
                    k -= 14;
                    // }
                    index = 0;
                    mode = $5d6fb71db276993f$var$BTREE;
                /* falls through */ case $5d6fb71db276993f$var$BTREE:
                    while(index < 4 + (table >>> 10)){
                        while(k < 3){
                            if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                            else {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            n--;
                            b |= (z.read_byte(p++) & 0xff) << k;
                            k += 8;
                        }
                        blens[$5d6fb71db276993f$var$border[index++]] = b & 7;
                        // {
                        b >>>= 3;
                        k -= 3;
                    // }
                    }
                    while(index < 19)blens[$5d6fb71db276993f$var$border[index++]] = 0;
                    bb[0] = 7;
                    t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z);
                    if (t != $5d6fb71db276993f$var$Z_OK) {
                        r = t;
                        if (r == $5d6fb71db276993f$var$Z_DATA_ERROR) {
                            blens = null;
                            mode = $5d6fb71db276993f$var$BADBLOCKS;
                        }
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    index = 0;
                    mode = $5d6fb71db276993f$var$DTREE;
                /* falls through */ case $5d6fb71db276993f$var$DTREE:
                    // eslint-disable-next-line no-constant-condition
                    while(true){
                        t = table;
                        if (index >= 258 + (t & 0x1f) + (t >> 5 & 0x1f)) break;
                        let j, c;
                        t = bb[0];
                        while(k < t){
                            if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                            else {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            n--;
                            b |= (z.read_byte(p++) & 0xff) << k;
                            k += 8;
                        }
                        // if (tb[0] == -1) {
                        // System.err.println("null...");
                        // }
                        t = hufts[(tb[0] + (b & $5d6fb71db276993f$var$inflate_mask[t])) * 3 + 1];
                        c = hufts[(tb[0] + (b & $5d6fb71db276993f$var$inflate_mask[t])) * 3 + 2];
                        if (c < 16) {
                            b >>>= t;
                            k -= t;
                            blens[index++] = c;
                        } else {
                            i = c == 18 ? 7 : c - 14;
                            j = c == 18 ? 11 : 3;
                            while(k < t + i){
                                if (n !== 0) r = $5d6fb71db276993f$var$Z_OK;
                                else {
                                    that.bitb = b;
                                    that.bitk = k;
                                    z.avail_in = n;
                                    z.total_in += p - z.next_in_index;
                                    z.next_in_index = p;
                                    that.write = q;
                                    return that.inflate_flush(z, r);
                                }
                                n--;
                                b |= (z.read_byte(p++) & 0xff) << k;
                                k += 8;
                            }
                            b >>>= t;
                            k -= t;
                            j += b & $5d6fb71db276993f$var$inflate_mask[i];
                            b >>>= i;
                            k -= i;
                            i = index;
                            t = table;
                            if (i + j > 258 + (t & 0x1f) + (t >> 5 & 0x1f) || c == 16 && i < 1) {
                                blens = null;
                                mode = $5d6fb71db276993f$var$BADBLOCKS;
                                z.msg = "invalid bit length repeat";
                                r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            c = c == 16 ? blens[i - 1] : 0;
                            do blens[i++] = c;
                            while (--j !== 0);
                            index = i;
                        }
                    }
                    tb[0] = -1;
                    // {
                    bl_ = []; // new Array(1);
                    bd_ = []; // new Array(1);
                    tl_ = []; // new Array(1);
                    td_ = []; // new Array(1);
                    bl_[0] = 9; // must be <= 9 for lookahead assumptions
                    bd_[0] = 6; // must be <= 9 for lookahead assumptions
                    t = table;
                    t = inftree.inflate_trees_dynamic(257 + (t & 0x1f), 1 + (t >> 5 & 0x1f), blens, bl_, bd_, tl_, td_, hufts, z);
                    if (t != $5d6fb71db276993f$var$Z_OK) {
                        if (t == $5d6fb71db276993f$var$Z_DATA_ERROR) {
                            blens = null;
                            mode = $5d6fb71db276993f$var$BADBLOCKS;
                        }
                        r = t;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
                    // }
                    mode = $5d6fb71db276993f$var$CODES;
                /* falls through */ case $5d6fb71db276993f$var$CODES:
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    if ((r = codes.proc(that, z, r)) != $5d6fb71db276993f$var$Z_STREAM_END) return that.inflate_flush(z, r);
                    r = $5d6fb71db276993f$var$Z_OK;
                    codes.free(z);
                    p = z.next_in_index;
                    n = z.avail_in;
                    b = that.bitb;
                    k = that.bitk;
                    q = that.write;
                    m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                    if (last === 0) {
                        mode = $5d6fb71db276993f$var$TYPE;
                        break;
                    }
                    mode = $5d6fb71db276993f$var$DRY;
                /* falls through */ case $5d6fb71db276993f$var$DRY:
                    that.write = q;
                    r = that.inflate_flush(z, r);
                    q = that.write;
                    m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                    if (that.read != that.write) {
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    mode = $5d6fb71db276993f$var$DONELOCKS;
                /* falls through */ case $5d6fb71db276993f$var$DONELOCKS:
                    r = $5d6fb71db276993f$var$Z_STREAM_END;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
                case $5d6fb71db276993f$var$BADBLOCKS:
                    r = $5d6fb71db276993f$var$Z_DATA_ERROR;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
                default:
                    r = $5d6fb71db276993f$var$Z_STREAM_ERROR;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
            }
        }
    };
    that.free = function(z) {
        that.reset(z, null);
        that.win = null;
        hufts = null;
    // ZFREE(z, s);
    };
    that.set_dictionary = function(d, start, n) {
        that.win.set(d.subarray(start, start + n), 0);
        that.read = that.write = n;
    };
    // Returns true if inflate is currently at the end of a block generated
    // by Z_SYNC_FLUSH or Z_FULL_FLUSH.
    that.sync_point = function() {
        return mode == $5d6fb71db276993f$var$LENS ? 1 : 0;
    };
}
// Inflate
// preset dictionary flag in zlib header
const $5d6fb71db276993f$var$PRESET_DICT = 0x20;
const $5d6fb71db276993f$var$Z_DEFLATED = 8;
const $5d6fb71db276993f$var$METHOD = 0; // waiting for method byte
const $5d6fb71db276993f$var$FLAG = 1; // waiting for flag byte
const $5d6fb71db276993f$var$DICT4 = 2; // four dictionary check bytes to go
const $5d6fb71db276993f$var$DICT3 = 3; // three dictionary check bytes to go
const $5d6fb71db276993f$var$DICT2 = 4; // two dictionary check bytes to go
const $5d6fb71db276993f$var$DICT1 = 5; // one dictionary check byte to go
const $5d6fb71db276993f$var$DICT0 = 6; // waiting for inflateSetDictionary
const $5d6fb71db276993f$var$BLOCKS = 7; // decompressing blocks
const $5d6fb71db276993f$var$DONE = 12; // finished check, done
const $5d6fb71db276993f$var$BAD = 13; // got an error--stay here
const $5d6fb71db276993f$var$mark = [
    0,
    0,
    0xff,
    0xff
];
function $5d6fb71db276993f$var$Inflate() {
    const that = this;
    that.mode = 0; // current inflate mode
    // mode dependent information
    that.method = 0; // if FLAGS, method byte
    // if CHECK, check values to compare
    that.was = [
        0
    ]; // new Array(1); // computed check value
    that.need = 0; // stream check value
    // if BAD, inflateSync's marker bytes count
    that.marker = 0;
    // mode independent information
    that.wbits = 0; // log2(win size) (8..15, defaults to 15)
    // this.blocks; // current inflate_blocks state
    function inflateReset(z) {
        if (!z || !z.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        z.total_in = z.total_out = 0;
        z.msg = null;
        z.istate.mode = $5d6fb71db276993f$var$BLOCKS;
        z.istate.blocks.reset(z, null);
        return $5d6fb71db276993f$var$Z_OK;
    }
    that.inflateEnd = function(z) {
        if (that.blocks) that.blocks.free(z);
        that.blocks = null;
        // ZFREE(z, z->state);
        return $5d6fb71db276993f$var$Z_OK;
    };
    that.inflateInit = function(z, w) {
        z.msg = null;
        that.blocks = null;
        // set win size
        if (w < 8 || w > 15) {
            that.inflateEnd(z);
            return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        }
        that.wbits = w;
        z.istate.blocks = new $5d6fb71db276993f$var$InfBlocks(z, 1 << w);
        // reset state
        inflateReset(z);
        return $5d6fb71db276993f$var$Z_OK;
    };
    that.inflate = function(z, f) {
        let r;
        let b;
        if (!z || !z.istate || !z.next_in) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        const istate = z.istate;
        f = f == $5d6fb71db276993f$var$Z_FINISH ? $5d6fb71db276993f$var$Z_BUF_ERROR : $5d6fb71db276993f$var$Z_OK;
        r = $5d6fb71db276993f$var$Z_BUF_ERROR;
        // eslint-disable-next-line no-constant-condition
        while(true)switch(istate.mode){
            case $5d6fb71db276993f$var$METHOD:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                if (((istate.method = z.read_byte(z.next_in_index++)) & 0xf) != $5d6fb71db276993f$var$Z_DEFLATED) {
                    istate.mode = $5d6fb71db276993f$var$BAD;
                    z.msg = "unknown compression method";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                if ((istate.method >> 4) + 8 > istate.wbits) {
                    istate.mode = $5d6fb71db276993f$var$BAD;
                    z.msg = "invalid win size";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                istate.mode = $5d6fb71db276993f$var$FLAG;
            /* falls through */ case $5d6fb71db276993f$var$FLAG:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                b = z.read_byte(z.next_in_index++) & 0xff;
                if (((istate.method << 8) + b) % 31 !== 0) {
                    istate.mode = $5d6fb71db276993f$var$BAD;
                    z.msg = "incorrect header check";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                if ((b & $5d6fb71db276993f$var$PRESET_DICT) === 0) {
                    istate.mode = $5d6fb71db276993f$var$BLOCKS;
                    break;
                }
                istate.mode = $5d6fb71db276993f$var$DICT4;
            /* falls through */ case $5d6fb71db276993f$var$DICT4:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need = (z.read_byte(z.next_in_index++) & 0xff) << 24 & 0xff000000;
                istate.mode = $5d6fb71db276993f$var$DICT3;
            /* falls through */ case $5d6fb71db276993f$var$DICT3:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += (z.read_byte(z.next_in_index++) & 0xff) << 16 & 0xff0000;
                istate.mode = $5d6fb71db276993f$var$DICT2;
            /* falls through */ case $5d6fb71db276993f$var$DICT2:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += (z.read_byte(z.next_in_index++) & 0xff) << 8 & 0xff00;
                istate.mode = $5d6fb71db276993f$var$DICT1;
            /* falls through */ case $5d6fb71db276993f$var$DICT1:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += z.read_byte(z.next_in_index++) & 0xff;
                istate.mode = $5d6fb71db276993f$var$DICT0;
                return $5d6fb71db276993f$var$Z_NEED_DICT;
            case $5d6fb71db276993f$var$DICT0:
                istate.mode = $5d6fb71db276993f$var$BAD;
                z.msg = "need dictionary";
                istate.marker = 0; // can try inflateSync
                return $5d6fb71db276993f$var$Z_STREAM_ERROR;
            case $5d6fb71db276993f$var$BLOCKS:
                r = istate.blocks.proc(z, r);
                if (r == $5d6fb71db276993f$var$Z_DATA_ERROR) {
                    istate.mode = $5d6fb71db276993f$var$BAD;
                    istate.marker = 0; // can try inflateSync
                    break;
                }
                if (r == $5d6fb71db276993f$var$Z_OK) r = f;
                if (r != $5d6fb71db276993f$var$Z_STREAM_END) return r;
                r = f;
                istate.blocks.reset(z, istate.was);
                istate.mode = $5d6fb71db276993f$var$DONE;
            /* falls through */ case $5d6fb71db276993f$var$DONE:
                z.avail_in = 0;
                return $5d6fb71db276993f$var$Z_STREAM_END;
            case $5d6fb71db276993f$var$BAD:
                return $5d6fb71db276993f$var$Z_DATA_ERROR;
            default:
                return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        }
    };
    that.inflateSetDictionary = function(z, dictionary, dictLength) {
        let index = 0, length = dictLength;
        if (!z || !z.istate || z.istate.mode != $5d6fb71db276993f$var$DICT0) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        const istate = z.istate;
        if (length >= 1 << istate.wbits) {
            length = (1 << istate.wbits) - 1;
            index = dictLength - length;
        }
        istate.blocks.set_dictionary(dictionary, index, length);
        istate.mode = $5d6fb71db276993f$var$BLOCKS;
        return $5d6fb71db276993f$var$Z_OK;
    };
    that.inflateSync = function(z) {
        let n; // number of bytes to look at
        let p; // pointer to bytes
        let m; // number of marker bytes found in a row
        let r, w; // temporaries to save total_in and total_out
        // set up
        if (!z || !z.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        const istate = z.istate;
        if (istate.mode != $5d6fb71db276993f$var$BAD) {
            istate.mode = $5d6fb71db276993f$var$BAD;
            istate.marker = 0;
        }
        if ((n = z.avail_in) === 0) return $5d6fb71db276993f$var$Z_BUF_ERROR;
        p = z.next_in_index;
        m = istate.marker;
        // search
        while(n !== 0 && m < 4){
            if (z.read_byte(p) == $5d6fb71db276993f$var$mark[m]) m++;
            else if (z.read_byte(p) !== 0) m = 0;
            else m = 4 - m;
            p++;
            n--;
        }
        // restore
        z.total_in += p - z.next_in_index;
        z.next_in_index = p;
        z.avail_in = n;
        istate.marker = m;
        // return no joy or set up to restart on a new block
        if (m != 4) return $5d6fb71db276993f$var$Z_DATA_ERROR;
        r = z.total_in;
        w = z.total_out;
        inflateReset(z);
        z.total_in = r;
        z.total_out = w;
        istate.mode = $5d6fb71db276993f$var$BLOCKS;
        return $5d6fb71db276993f$var$Z_OK;
    };
    // Returns true if inflate is currently at the end of a block generated
    // by Z_SYNC_FLUSH or Z_FULL_FLUSH. This function is used by one PPP
    // implementation to provide an additional safety check. PPP uses
    // Z_SYNC_FLUSH
    // but removes the length bytes of the resulting empty stored block. When
    // decompressing, PPP checks that at the end of input packet, inflate is
    // waiting for these length bytes.
    that.inflateSyncPoint = function(z) {
        if (!z || !z.istate || !z.istate.blocks) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        return z.istate.blocks.sync_point();
    };
}
// ZStream
function $5d6fb71db276993f$var$ZStream() {}
$5d6fb71db276993f$var$ZStream.prototype = {
    inflateInit (bits) {
        const that = this;
        that.istate = new $5d6fb71db276993f$var$Inflate();
        if (!bits) bits = $5d6fb71db276993f$var$MAX_BITS;
        return that.istate.inflateInit(that, bits);
    },
    inflate (f) {
        const that = this;
        if (!that.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        return that.istate.inflate(that, f);
    },
    inflateEnd () {
        const that = this;
        if (!that.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        const ret = that.istate.inflateEnd(that);
        that.istate = null;
        return ret;
    },
    inflateSync () {
        const that = this;
        if (!that.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        return that.istate.inflateSync(that);
    },
    inflateSetDictionary (dictionary, dictLength) {
        const that = this;
        if (!that.istate) return $5d6fb71db276993f$var$Z_STREAM_ERROR;
        return that.istate.inflateSetDictionary(that, dictionary, dictLength);
    },
    read_byte (start) {
        const that = this;
        return that.next_in[start];
    },
    read_buf (start, size) {
        const that = this;
        return that.next_in.subarray(start, start + size);
    }
};
// Inflater
function $5d6fb71db276993f$export$d1de70a877d6e43c(options) {
    const that = this;
    const z = new $5d6fb71db276993f$var$ZStream();
    const bufsize = options && options.chunkSize ? Math.floor(options.chunkSize * 2) : 131072;
    const flush = $5d6fb71db276993f$var$Z_NO_FLUSH;
    const buf = new Uint8Array(bufsize);
    let nomoreinput = false;
    z.inflateInit();
    z.next_out = buf;
    that.append = function(data, onprogress) {
        const buffers = [];
        let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
        if (data.length === 0) return;
        z.next_in_index = 0;
        z.next_in = data;
        z.avail_in = data.length;
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            if (z.avail_in === 0 && !nomoreinput) {
                z.next_in_index = 0;
                nomoreinput = true;
            }
            err = z.inflate(flush);
            if (nomoreinput && err === $5d6fb71db276993f$var$Z_BUF_ERROR) {
                if (z.avail_in !== 0) throw new Error("inflating: bad input");
            } else if (err !== $5d6fb71db276993f$var$Z_OK && err !== $5d6fb71db276993f$var$Z_STREAM_END) throw new Error("inflating: " + z.msg);
            if ((nomoreinput || err === $5d6fb71db276993f$var$Z_STREAM_END) && z.avail_in === data.length) throw new Error("inflating: bad input");
            if (z.next_out_index) {
                if (z.next_out_index === bufsize) buffers.push(new Uint8Array(buf));
                else buffers.push(buf.slice(0, z.next_out_index));
            }
            bufferSize += z.next_out_index;
            if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
                onprogress(z.next_in_index);
                lastIndex = z.next_in_index;
            }
        }while (z.avail_in > 0 || z.avail_out === 0);
        if (buffers.length > 1) {
            array = new Uint8Array(bufferSize);
            buffers.forEach(function(chunk) {
                array.set(chunk, bufferIndex);
                bufferIndex += chunk.length;
            });
        } else array = buffers[0] || new Uint8Array();
        return array;
    };
    that.flush = function() {
        z.inflateEnd();
    };
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global navigator, CompressionStream, DecompressionStream */ /*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ const $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a = 0xffffffff;
const $cb6f24583fb9d4f7$export$4164cee1a26178fd = 0xffff;
const $cb6f24583fb9d4f7$export$2cf0a12381b29e07 = 0x08;
const $cb6f24583fb9d4f7$export$6135a805f19e5577 = 0x00;
const $cb6f24583fb9d4f7$export$367f2443b409227a = 0x63;
const $cb6f24583fb9d4f7$export$2b2cf5904cb82788 = 0x04034b50;
const $cb6f24583fb9d4f7$export$40fbd2cd06477e1d = 0x08074b50;
const $cb6f24583fb9d4f7$export$fb8fb01339553b17 = $cb6f24583fb9d4f7$export$40fbd2cd06477e1d;
const $cb6f24583fb9d4f7$export$a72d49bf27f9bcd = 0x02014b50;
const $cb6f24583fb9d4f7$export$13a06f7e64cf6a1 = 0x06054b50;
const $cb6f24583fb9d4f7$export$8414b1953f7f48c6 = 0x06064b50;
const $cb6f24583fb9d4f7$export$5078166106cbcc66 = 0x07064b50;
const $cb6f24583fb9d4f7$export$6383d4b2e2323b68 = 22;
const $cb6f24583fb9d4f7$export$c545bb91a1b43732 = 20;
const $cb6f24583fb9d4f7$export$9eb09cdd39f04a62 = 56;
const $cb6f24583fb9d4f7$export$4edccc0d25441f8c = $cb6f24583fb9d4f7$export$6383d4b2e2323b68 + $cb6f24583fb9d4f7$export$c545bb91a1b43732 + $cb6f24583fb9d4f7$export$9eb09cdd39f04a62;
const $cb6f24583fb9d4f7$export$3da9e4d76b1bf88 = 0x0001;
const $cb6f24583fb9d4f7$export$714aa3fe052f4e13 = 0x9901;
const $cb6f24583fb9d4f7$export$93e014de2b9c33c8 = 0x000a;
const $cb6f24583fb9d4f7$export$109a97d45e55cdec = 0x0001;
const $cb6f24583fb9d4f7$export$6cfe9e8823acaac3 = 0x5455;
const $cb6f24583fb9d4f7$export$b48bdd5195f1a53a = 0x7075;
const $cb6f24583fb9d4f7$export$b49699c0acb50fe1 = 0x6375;
const $cb6f24583fb9d4f7$export$7db0c075c39cb343 = 0x01;
const $cb6f24583fb9d4f7$export$ac9ca09a23eb90ff = 0x06;
const $cb6f24583fb9d4f7$export$3ec1d940e3bc0a58 = 0x0008;
const $cb6f24583fb9d4f7$export$fb6e9f896320db55 = 0x0800;
const $cb6f24583fb9d4f7$export$2d169f352844a92f = 0x10;
const $cb6f24583fb9d4f7$export$e0f048be47b3707 = 0x14;
const $cb6f24583fb9d4f7$export$c695aaa0200b0023 = 0x2D;
const $cb6f24583fb9d4f7$export$476ad4f47ce8ae93 = 0x33;
const $cb6f24583fb9d4f7$export$4a765df57d89fe04 = "/";
const $cb6f24583fb9d4f7$export$c4acb27cbfd4cf71 = new Date(2107, 11, 31);
const $cb6f24583fb9d4f7$export$c21855736e7fcd29 = new Date(1980, 0, 1);
const $cb6f24583fb9d4f7$export$a43287864529b8fd = undefined;
const $cb6f24583fb9d4f7$export$817d840279c95122 = "undefined";
const $cb6f24583fb9d4f7$export$31a3bc04c4494acf = "function";


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ class $6f708c38de8b8035$export$7c33862539992df6 {
    constructor(Codec){
        return class extends TransformStream {
            constructor(_format, options){
                const codec = new Codec(options);
                super({
                    transform (chunk, controller) {
                        controller.enqueue(codec.append(chunk));
                    },
                    flush (controller) {
                        const chunk = codec.flush();
                        if (chunk) controller.enqueue(chunk);
                    }
                });
            }
        };
    }
}


const $efd91934aae95642$var$MINIMUM_CHUNK_SIZE = 64;
let $efd91934aae95642$var$maxWorkers = 2;
try {
    if (typeof navigator != (0, $cb6f24583fb9d4f7$export$817d840279c95122) && navigator.hardwareConcurrency) $efd91934aae95642$var$maxWorkers = navigator.hardwareConcurrency;
} catch (_error) {
// ignored
}
const $efd91934aae95642$var$DEFAULT_CONFIGURATION = {
    chunkSize: 524288,
    maxWorkers: $efd91934aae95642$var$maxWorkers,
    terminateWorkerTimeout: 5000,
    useWebWorkers: true,
    useCompressionStream: true,
    workerScripts: (0, $cb6f24583fb9d4f7$export$a43287864529b8fd),
    CompressionStreamNative: typeof CompressionStream != (0, $cb6f24583fb9d4f7$export$817d840279c95122) && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != (0, $cb6f24583fb9d4f7$export$817d840279c95122) && DecompressionStream
};
const $efd91934aae95642$var$config = Object.assign({}, $efd91934aae95642$var$DEFAULT_CONFIGURATION);
function $efd91934aae95642$export$3de01744a82b21a4() {
    return $efd91934aae95642$var$config;
}
function $efd91934aae95642$export$f0bad416b890a4ec(config) {
    return Math.max(config.chunkSize, $efd91934aae95642$var$MINIMUM_CHUNK_SIZE);
}
function $efd91934aae95642$export$8d21e34596265fa2(configuration) {
    const { baseURL: baseURL , chunkSize: chunkSize , maxWorkers: maxWorkers , terminateWorkerTimeout: terminateWorkerTimeout , useCompressionStream: useCompressionStream , useWebWorkers: useWebWorkers , Deflate: Deflate , Inflate: Inflate , CompressionStream: CompressionStream1 , DecompressionStream: DecompressionStream1 , workerScripts: workerScripts  } = configuration;
    $efd91934aae95642$var$setIfDefined("baseURL", baseURL);
    $efd91934aae95642$var$setIfDefined("chunkSize", chunkSize);
    $efd91934aae95642$var$setIfDefined("maxWorkers", maxWorkers);
    $efd91934aae95642$var$setIfDefined("terminateWorkerTimeout", terminateWorkerTimeout);
    $efd91934aae95642$var$setIfDefined("useCompressionStream", useCompressionStream);
    $efd91934aae95642$var$setIfDefined("useWebWorkers", useWebWorkers);
    if (Deflate) $efd91934aae95642$var$config.CompressionStream = new (0, $6f708c38de8b8035$export$7c33862539992df6)(Deflate);
    if (Inflate) $efd91934aae95642$var$config.DecompressionStream = new (0, $6f708c38de8b8035$export$7c33862539992df6)(Inflate);
    $efd91934aae95642$var$setIfDefined("CompressionStream", CompressionStream1);
    $efd91934aae95642$var$setIfDefined("DecompressionStream", DecompressionStream1);
    if (workerScripts !== (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) {
        const { deflate: deflate , inflate: inflate  } = workerScripts;
        if (deflate || inflate) {
            if (!$efd91934aae95642$var$config.workerScripts) $efd91934aae95642$var$config.workerScripts = {};
        }
        if (deflate) {
            if (!Array.isArray(deflate)) throw new Error("workerScripts.deflate must be an array");
            $efd91934aae95642$var$config.workerScripts.deflate = deflate;
        }
        if (inflate) {
            if (!Array.isArray(inflate)) throw new Error("workerScripts.inflate must be an array");
            $efd91934aae95642$var$config.workerScripts.inflate = inflate;
        }
    }
}
function $efd91934aae95642$var$setIfDefined(propertyName, propertyValue) {
    if (propertyValue !== (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) $efd91934aae95642$var$config[propertyName] = propertyValue;
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // deno-lint-ignore-file no-prototype-builtins
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ const $47d50919f633f0fd$export$53cb456310d1907e = {};
function $47d50919f633f0fd$export$200548c990602f61() {
    return "application/octet-stream";
}


const $4768aac94458fdf2$var$table = {
    "application": {
        "andrew-inset": "ez",
        "annodex": "anx",
        "atom+xml": "atom",
        "atomcat+xml": "atomcat",
        "atomserv+xml": "atomsrv",
        "bbolin": "lin",
        "cap": [
            "cap",
            "pcap"
        ],
        "cu-seeme": "cu",
        "davmount+xml": "davmount",
        "dsptype": "tsp",
        "ecmascript": [
            "es",
            "ecma"
        ],
        "futuresplash": "spl",
        "hta": "hta",
        "java-archive": "jar",
        "java-serialized-object": "ser",
        "java-vm": "class",
        "javascript": "js",
        "m3g": "m3g",
        "mac-binhex40": "hqx",
        "mathematica": [
            "nb",
            "ma",
            "mb"
        ],
        "msaccess": "mdb",
        "msword": [
            "doc",
            "dot"
        ],
        "mxf": "mxf",
        "oda": "oda",
        "ogg": "ogx",
        "pdf": "pdf",
        "pgp-keys": "key",
        "pgp-signature": [
            "asc",
            "sig"
        ],
        "pics-rules": "prf",
        "postscript": [
            "ps",
            "ai",
            "eps",
            "epsi",
            "epsf",
            "eps2",
            "eps3"
        ],
        "rar": "rar",
        "rdf+xml": "rdf",
        "rss+xml": "rss",
        "rtf": "rtf",
        "smil": [
            "smi",
            "smil"
        ],
        "xhtml+xml": [
            "xhtml",
            "xht"
        ],
        "xml": [
            "xml",
            "xsl",
            "xsd"
        ],
        "xspf+xml": "xspf",
        "zip": "zip",
        "vnd.android.package-archive": "apk",
        "vnd.cinderella": "cdy",
        "vnd.google-earth.kml+xml": "kml",
        "vnd.google-earth.kmz": "kmz",
        "vnd.mozilla.xul+xml": "xul",
        "vnd.ms-excel": [
            "xls",
            "xlb",
            "xlt",
            "xlm",
            "xla",
            "xlc",
            "xlw"
        ],
        "vnd.ms-pki.seccat": "cat",
        "vnd.ms-pki.stl": "stl",
        "vnd.ms-powerpoint": [
            "ppt",
            "pps",
            "pot"
        ],
        "vnd.oasis.opendocument.chart": "odc",
        "vnd.oasis.opendocument.database": "odb",
        "vnd.oasis.opendocument.formula": "odf",
        "vnd.oasis.opendocument.graphics": "odg",
        "vnd.oasis.opendocument.graphics-template": "otg",
        "vnd.oasis.opendocument.image": "odi",
        "vnd.oasis.opendocument.presentation": "odp",
        "vnd.oasis.opendocument.presentation-template": "otp",
        "vnd.oasis.opendocument.spreadsheet": "ods",
        "vnd.oasis.opendocument.spreadsheet-template": "ots",
        "vnd.oasis.opendocument.text": "odt",
        "vnd.oasis.opendocument.text-master": "odm",
        "vnd.oasis.opendocument.text-template": "ott",
        "vnd.oasis.opendocument.text-web": "oth",
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
        "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
        "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
        "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
        "vnd.openxmlformats-officedocument.presentationml.template": "potx",
        "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
        "vnd.smaf": "mmf",
        "vnd.stardivision.calc": "sdc",
        "vnd.stardivision.chart": "sds",
        "vnd.stardivision.draw": "sda",
        "vnd.stardivision.impress": "sdd",
        "vnd.stardivision.math": [
            "sdf",
            "smf"
        ],
        "vnd.stardivision.writer": [
            "sdw",
            "vor"
        ],
        "vnd.stardivision.writer-global": "sgl",
        "vnd.sun.xml.calc": "sxc",
        "vnd.sun.xml.calc.template": "stc",
        "vnd.sun.xml.draw": "sxd",
        "vnd.sun.xml.draw.template": "std",
        "vnd.sun.xml.impress": "sxi",
        "vnd.sun.xml.impress.template": "sti",
        "vnd.sun.xml.math": "sxm",
        "vnd.sun.xml.writer": "sxw",
        "vnd.sun.xml.writer.global": "sxg",
        "vnd.sun.xml.writer.template": "stw",
        "vnd.symbian.install": [
            "sis",
            "sisx"
        ],
        "vnd.visio": [
            "vsd",
            "vst",
            "vss",
            "vsw"
        ],
        "vnd.wap.wbxml": "wbxml",
        "vnd.wap.wmlc": "wmlc",
        "vnd.wap.wmlscriptc": "wmlsc",
        "vnd.wordperfect": "wpd",
        "vnd.wordperfect5.1": "wp5",
        "x-123": "wk",
        "x-7z-compressed": "7z",
        "x-abiword": "abw",
        "x-apple-diskimage": "dmg",
        "x-bcpio": "bcpio",
        "x-bittorrent": "torrent",
        "x-cbr": [
            "cbr",
            "cba",
            "cbt",
            "cb7"
        ],
        "x-cbz": "cbz",
        "x-cdf": [
            "cdf",
            "cda"
        ],
        "x-cdlink": "vcd",
        "x-chess-pgn": "pgn",
        "x-cpio": "cpio",
        "x-csh": "csh",
        "x-debian-package": [
            "deb",
            "udeb"
        ],
        "x-director": [
            "dcr",
            "dir",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ],
        "x-dms": "dms",
        "x-doom": "wad",
        "x-dvi": "dvi",
        "x-httpd-eruby": "rhtml",
        "x-font": "pcf.Z",
        "x-freemind": "mm",
        "x-gnumeric": "gnumeric",
        "x-go-sgf": "sgf",
        "x-graphing-calculator": "gcf",
        "x-gtar": [
            "gtar",
            "taz"
        ],
        "x-hdf": "hdf",
        "x-httpd-php": [
            "phtml",
            "pht",
            "php"
        ],
        "x-httpd-php-source": "phps",
        "x-httpd-php3": "php3",
        "x-httpd-php3-preprocessed": "php3p",
        "x-httpd-php4": "php4",
        "x-httpd-php5": "php5",
        "x-ica": "ica",
        "x-info": "info",
        "x-internet-signup": [
            "ins",
            "isp"
        ],
        "x-iphone": "iii",
        "x-iso9660-image": "iso",
        "x-java-jnlp-file": "jnlp",
        "x-jmol": "jmz",
        "x-killustrator": "kil",
        "x-koan": [
            "skp",
            "skd",
            "skt",
            "skm"
        ],
        "x-kpresenter": [
            "kpr",
            "kpt"
        ],
        "x-kword": [
            "kwd",
            "kwt"
        ],
        "x-latex": "latex",
        "x-lha": "lha",
        "x-lyx": "lyx",
        "x-lzh": "lzh",
        "x-lzx": "lzx",
        "x-maker": [
            "frm",
            "maker",
            "frame",
            "fm",
            "fb",
            "book",
            "fbdoc"
        ],
        "x-ms-wmd": "wmd",
        "x-ms-wmz": "wmz",
        "x-msdos-program": [
            "com",
            "exe",
            "bat",
            "dll"
        ],
        "x-msi": "msi",
        "x-netcdf": [
            "nc",
            "cdf"
        ],
        "x-ns-proxy-autoconfig": [
            "pac",
            "dat"
        ],
        "x-nwc": "nwc",
        "x-object": "o",
        "x-oz-application": "oza",
        "x-pkcs7-certreqresp": "p7r",
        "x-python-code": [
            "pyc",
            "pyo"
        ],
        "x-qgis": [
            "qgs",
            "shp",
            "shx"
        ],
        "x-quicktimeplayer": "qtl",
        "x-redhat-package-manager": "rpm",
        "x-ruby": "rb",
        "x-sh": "sh",
        "x-shar": "shar",
        "x-shockwave-flash": [
            "swf",
            "swfl"
        ],
        "x-silverlight": "scr",
        "x-stuffit": "sit",
        "x-sv4cpio": "sv4cpio",
        "x-sv4crc": "sv4crc",
        "x-tar": "tar",
        "x-tcl": "tcl",
        "x-tex-gf": "gf",
        "x-tex-pk": "pk",
        "x-texinfo": [
            "texinfo",
            "texi"
        ],
        "x-trash": [
            "~",
            "%",
            "bak",
            "old",
            "sik"
        ],
        "x-troff": [
            "t",
            "tr",
            "roff"
        ],
        "x-troff-man": "man",
        "x-troff-me": "me",
        "x-troff-ms": "ms",
        "x-ustar": "ustar",
        "x-wais-source": "src",
        "x-wingz": "wz",
        "x-x509-ca-cert": [
            "crt",
            "der",
            "cer"
        ],
        "x-xcf": "xcf",
        "x-xfig": "fig",
        "x-xpinstall": "xpi",
        "applixware": "aw",
        "atomsvc+xml": "atomsvc",
        "ccxml+xml": "ccxml",
        "cdmi-capability": "cdmia",
        "cdmi-container": "cdmic",
        "cdmi-domain": "cdmid",
        "cdmi-object": "cdmio",
        "cdmi-queue": "cdmiq",
        "docbook+xml": "dbk",
        "dssc+der": "dssc",
        "dssc+xml": "xdssc",
        "emma+xml": "emma",
        "epub+zip": "epub",
        "exi": "exi",
        "font-tdpfr": "pfr",
        "gml+xml": "gml",
        "gpx+xml": "gpx",
        "gxf": "gxf",
        "hyperstudio": "stk",
        "inkml+xml": [
            "ink",
            "inkml"
        ],
        "ipfix": "ipfix",
        "json": "json",
        "jsonml+json": "jsonml",
        "lost+xml": "lostxml",
        "mads+xml": "mads",
        "marc": "mrc",
        "marcxml+xml": "mrcx",
        "mathml+xml": "mathml",
        "mbox": "mbox",
        "mediaservercontrol+xml": "mscml",
        "metalink+xml": "metalink",
        "metalink4+xml": "meta4",
        "mets+xml": "mets",
        "mods+xml": "mods",
        "mp21": [
            "m21",
            "mp21"
        ],
        "mp4": "mp4s",
        "oebps-package+xml": "opf",
        "omdoc+xml": "omdoc",
        "onenote": [
            "onetoc",
            "onetoc2",
            "onetmp",
            "onepkg"
        ],
        "oxps": "oxps",
        "patch-ops-error+xml": "xer",
        "pgp-encrypted": "pgp",
        "pkcs10": "p10",
        "pkcs7-mime": [
            "p7m",
            "p7c"
        ],
        "pkcs7-signature": "p7s",
        "pkcs8": "p8",
        "pkix-attr-cert": "ac",
        "pkix-crl": "crl",
        "pkix-pkipath": "pkipath",
        "pkixcmp": "pki",
        "pls+xml": "pls",
        "prs.cww": "cww",
        "pskc+xml": "pskcxml",
        "reginfo+xml": "rif",
        "relax-ng-compact-syntax": "rnc",
        "resource-lists+xml": "rl",
        "resource-lists-diff+xml": "rld",
        "rls-services+xml": "rs",
        "rpki-ghostbusters": "gbr",
        "rpki-manifest": "mft",
        "rpki-roa": "roa",
        "rsd+xml": "rsd",
        "sbml+xml": "sbml",
        "scvp-cv-request": "scq",
        "scvp-cv-response": "scs",
        "scvp-vp-request": "spq",
        "scvp-vp-response": "spp",
        "sdp": "sdp",
        "set-payment-initiation": "setpay",
        "set-registration-initiation": "setreg",
        "shf+xml": "shf",
        "sparql-query": "rq",
        "sparql-results+xml": "srx",
        "srgs": "gram",
        "srgs+xml": "grxml",
        "sru+xml": "sru",
        "ssdl+xml": "ssdl",
        "ssml+xml": "ssml",
        "tei+xml": [
            "tei",
            "teicorpus"
        ],
        "thraud+xml": "tfi",
        "timestamped-data": "tsd",
        "vnd.3gpp.pic-bw-large": "plb",
        "vnd.3gpp.pic-bw-small": "psb",
        "vnd.3gpp.pic-bw-var": "pvb",
        "vnd.3gpp2.tcap": "tcap",
        "vnd.3m.post-it-notes": "pwn",
        "vnd.accpac.simply.aso": "aso",
        "vnd.accpac.simply.imp": "imp",
        "vnd.acucobol": "acu",
        "vnd.acucorp": [
            "atc",
            "acutc"
        ],
        "vnd.adobe.air-application-installer-package+zip": "air",
        "vnd.adobe.formscentral.fcdt": "fcdt",
        "vnd.adobe.fxp": [
            "fxp",
            "fxpl"
        ],
        "vnd.adobe.xdp+xml": "xdp",
        "vnd.adobe.xfdf": "xfdf",
        "vnd.ahead.space": "ahead",
        "vnd.airzip.filesecure.azf": "azf",
        "vnd.airzip.filesecure.azs": "azs",
        "vnd.amazon.ebook": "azw",
        "vnd.americandynamics.acc": "acc",
        "vnd.amiga.ami": "ami",
        "vnd.anser-web-certificate-issue-initiation": "cii",
        "vnd.anser-web-funds-transfer-initiation": "fti",
        "vnd.antix.game-component": "atx",
        "vnd.apple.installer+xml": "mpkg",
        "vnd.apple.mpegurl": "m3u8",
        "vnd.aristanetworks.swi": "swi",
        "vnd.astraea-software.iota": "iota",
        "vnd.audiograph": "aep",
        "vnd.blueice.multipass": "mpm",
        "vnd.bmi": "bmi",
        "vnd.businessobjects": "rep",
        "vnd.chemdraw+xml": "cdxml",
        "vnd.chipnuts.karaoke-mmd": "mmd",
        "vnd.claymore": "cla",
        "vnd.cloanto.rp9": "rp9",
        "vnd.clonk.c4group": [
            "c4g",
            "c4d",
            "c4f",
            "c4p",
            "c4u"
        ],
        "vnd.cluetrust.cartomobile-config": "c11amc",
        "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
        "vnd.commonspace": "csp",
        "vnd.contact.cmsg": "cdbcmsg",
        "vnd.cosmocaller": "cmc",
        "vnd.crick.clicker": "clkx",
        "vnd.crick.clicker.keyboard": "clkk",
        "vnd.crick.clicker.palette": "clkp",
        "vnd.crick.clicker.template": "clkt",
        "vnd.crick.clicker.wordbank": "clkw",
        "vnd.criticaltools.wbs+xml": "wbs",
        "vnd.ctc-posml": "pml",
        "vnd.cups-ppd": "ppd",
        "vnd.curl.car": "car",
        "vnd.curl.pcurl": "pcurl",
        "vnd.dart": "dart",
        "vnd.data-vision.rdz": "rdz",
        "vnd.dece.data": [
            "uvf",
            "uvvf",
            "uvd",
            "uvvd"
        ],
        "vnd.dece.ttml+xml": [
            "uvt",
            "uvvt"
        ],
        "vnd.dece.unspecified": [
            "uvx",
            "uvvx"
        ],
        "vnd.dece.zip": [
            "uvz",
            "uvvz"
        ],
        "vnd.denovo.fcselayout-link": "fe_launch",
        "vnd.dna": "dna",
        "vnd.dolby.mlp": "mlp",
        "vnd.dpgraph": "dpg",
        "vnd.dreamfactory": "dfac",
        "vnd.ds-keypoint": "kpxx",
        "vnd.dvb.ait": "ait",
        "vnd.dvb.service": "svc",
        "vnd.dynageo": "geo",
        "vnd.ecowin.chart": "mag",
        "vnd.enliven": "nml",
        "vnd.epson.esf": "esf",
        "vnd.epson.msf": "msf",
        "vnd.epson.quickanime": "qam",
        "vnd.epson.salt": "slt",
        "vnd.epson.ssf": "ssf",
        "vnd.eszigno3+xml": [
            "es3",
            "et3"
        ],
        "vnd.ezpix-album": "ez2",
        "vnd.ezpix-package": "ez3",
        "vnd.fdf": "fdf",
        "vnd.fdsn.mseed": "mseed",
        "vnd.fdsn.seed": [
            "seed",
            "dataless"
        ],
        "vnd.flographit": "gph",
        "vnd.fluxtime.clip": "ftc",
        "vnd.framemaker": [
            "fm",
            "frame",
            "maker",
            "book"
        ],
        "vnd.frogans.fnc": "fnc",
        "vnd.frogans.ltf": "ltf",
        "vnd.fsc.weblaunch": "fsc",
        "vnd.fujitsu.oasys": "oas",
        "vnd.fujitsu.oasys2": "oa2",
        "vnd.fujitsu.oasys3": "oa3",
        "vnd.fujitsu.oasysgp": "fg5",
        "vnd.fujitsu.oasysprs": "bh2",
        "vnd.fujixerox.ddd": "ddd",
        "vnd.fujixerox.docuworks": "xdw",
        "vnd.fujixerox.docuworks.binder": "xbd",
        "vnd.fuzzysheet": "fzs",
        "vnd.genomatix.tuxedo": "txd",
        "vnd.geogebra.file": "ggb",
        "vnd.geogebra.tool": "ggt",
        "vnd.geometry-explorer": [
            "gex",
            "gre"
        ],
        "vnd.geonext": "gxt",
        "vnd.geoplan": "g2w",
        "vnd.geospace": "g3w",
        "vnd.gmx": "gmx",
        "vnd.grafeq": [
            "gqf",
            "gqs"
        ],
        "vnd.groove-account": "gac",
        "vnd.groove-help": "ghf",
        "vnd.groove-identity-message": "gim",
        "vnd.groove-injector": "grv",
        "vnd.groove-tool-message": "gtm",
        "vnd.groove-tool-template": "tpl",
        "vnd.groove-vcard": "vcg",
        "vnd.hal+xml": "hal",
        "vnd.handheld-entertainment+xml": "zmm",
        "vnd.hbci": "hbci",
        "vnd.hhe.lesson-player": "les",
        "vnd.hp-hpgl": "hpgl",
        "vnd.hp-hpid": "hpid",
        "vnd.hp-hps": "hps",
        "vnd.hp-jlyt": "jlt",
        "vnd.hp-pcl": "pcl",
        "vnd.hp-pclxl": "pclxl",
        "vnd.hydrostatix.sof-data": "sfd-hdstx",
        "vnd.ibm.minipay": "mpy",
        "vnd.ibm.modcap": [
            "afp",
            "listafp",
            "list3820"
        ],
        "vnd.ibm.rights-management": "irm",
        "vnd.ibm.secure-container": "sc",
        "vnd.iccprofile": [
            "icc",
            "icm"
        ],
        "vnd.igloader": "igl",
        "vnd.immervision-ivp": "ivp",
        "vnd.immervision-ivu": "ivu",
        "vnd.insors.igm": "igm",
        "vnd.intercon.formnet": [
            "xpw",
            "xpx"
        ],
        "vnd.intergeo": "i2g",
        "vnd.intu.qbo": "qbo",
        "vnd.intu.qfx": "qfx",
        "vnd.ipunplugged.rcprofile": "rcprofile",
        "vnd.irepository.package+xml": "irp",
        "vnd.is-xpr": "xpr",
        "vnd.isac.fcs": "fcs",
        "vnd.jam": "jam",
        "vnd.jcp.javame.midlet-rms": "rms",
        "vnd.jisp": "jisp",
        "vnd.joost.joda-archive": "joda",
        "vnd.kahootz": [
            "ktz",
            "ktr"
        ],
        "vnd.kde.karbon": "karbon",
        "vnd.kde.kchart": "chrt",
        "vnd.kde.kformula": "kfo",
        "vnd.kde.kivio": "flw",
        "vnd.kde.kontour": "kon",
        "vnd.kde.kpresenter": [
            "kpr",
            "kpt"
        ],
        "vnd.kde.kspread": "ksp",
        "vnd.kde.kword": [
            "kwd",
            "kwt"
        ],
        "vnd.kenameaapp": "htke",
        "vnd.kidspiration": "kia",
        "vnd.kinar": [
            "kne",
            "knp"
        ],
        "vnd.koan": [
            "skp",
            "skd",
            "skt",
            "skm"
        ],
        "vnd.kodak-descriptor": "sse",
        "vnd.las.las+xml": "lasxml",
        "vnd.llamagraphics.life-balance.desktop": "lbd",
        "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
        "vnd.lotus-1-2-3": "123",
        "vnd.lotus-approach": "apr",
        "vnd.lotus-freelance": "pre",
        "vnd.lotus-notes": "nsf",
        "vnd.lotus-organizer": "org",
        "vnd.lotus-screencam": "scm",
        "vnd.lotus-wordpro": "lwp",
        "vnd.macports.portpkg": "portpkg",
        "vnd.mcd": "mcd",
        "vnd.medcalcdata": "mc1",
        "vnd.mediastation.cdkey": "cdkey",
        "vnd.mfer": "mwf",
        "vnd.mfmp": "mfm",
        "vnd.micrografx.flo": "flo",
        "vnd.micrografx.igx": "igx",
        "vnd.mif": "mif",
        "vnd.mobius.daf": "daf",
        "vnd.mobius.dis": "dis",
        "vnd.mobius.mbk": "mbk",
        "vnd.mobius.mqy": "mqy",
        "vnd.mobius.msl": "msl",
        "vnd.mobius.plc": "plc",
        "vnd.mobius.txf": "txf",
        "vnd.mophun.application": "mpn",
        "vnd.mophun.certificate": "mpc",
        "vnd.ms-artgalry": "cil",
        "vnd.ms-cab-compressed": "cab",
        "vnd.ms-excel.addin.macroenabled.12": "xlam",
        "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
        "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
        "vnd.ms-excel.template.macroenabled.12": "xltm",
        "vnd.ms-fontobject": "eot",
        "vnd.ms-htmlhelp": "chm",
        "vnd.ms-ims": "ims",
        "vnd.ms-lrm": "lrm",
        "vnd.ms-officetheme": "thmx",
        "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
        "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
        "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
        "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
        "vnd.ms-powerpoint.template.macroenabled.12": "potm",
        "vnd.ms-project": [
            "mpp",
            "mpt"
        ],
        "vnd.ms-word.document.macroenabled.12": "docm",
        "vnd.ms-word.template.macroenabled.12": "dotm",
        "vnd.ms-works": [
            "wps",
            "wks",
            "wcm",
            "wdb"
        ],
        "vnd.ms-wpl": "wpl",
        "vnd.ms-xpsdocument": "xps",
        "vnd.mseq": "mseq",
        "vnd.musician": "mus",
        "vnd.muvee.style": "msty",
        "vnd.mynfc": "taglet",
        "vnd.neurolanguage.nlu": "nlu",
        "vnd.nitf": [
            "ntf",
            "nitf"
        ],
        "vnd.noblenet-directory": "nnd",
        "vnd.noblenet-sealer": "nns",
        "vnd.noblenet-web": "nnw",
        "vnd.nokia.n-gage.data": "ngdat",
        "vnd.nokia.n-gage.symbian.install": "n-gage",
        "vnd.nokia.radio-preset": "rpst",
        "vnd.nokia.radio-presets": "rpss",
        "vnd.novadigm.edm": "edm",
        "vnd.novadigm.edx": "edx",
        "vnd.novadigm.ext": "ext",
        "vnd.oasis.opendocument.chart-template": "otc",
        "vnd.oasis.opendocument.formula-template": "odft",
        "vnd.oasis.opendocument.image-template": "oti",
        "vnd.olpc-sugar": "xo",
        "vnd.oma.dd2+xml": "dd2",
        "vnd.openofficeorg.extension": "oxt",
        "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
        "vnd.osgeo.mapguide.package": "mgp",
        "vnd.osgi.dp": "dp",
        "vnd.osgi.subsystem": "esa",
        "vnd.palm": [
            "pdb",
            "pqa",
            "oprc"
        ],
        "vnd.pawaafile": "paw",
        "vnd.pg.format": "str",
        "vnd.pg.osasli": "ei6",
        "vnd.picsel": "efif",
        "vnd.pmi.widget": "wg",
        "vnd.pocketlearn": "plf",
        "vnd.powerbuilder6": "pbd",
        "vnd.previewsystems.box": "box",
        "vnd.proteus.magazine": "mgz",
        "vnd.publishare-delta-tree": "qps",
        "vnd.pvi.ptid1": "ptid",
        "vnd.quark.quarkxpress": [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb"
        ],
        "vnd.realvnc.bed": "bed",
        "vnd.recordare.musicxml": "mxl",
        "vnd.recordare.musicxml+xml": "musicxml",
        "vnd.rig.cryptonote": "cryptonote",
        "vnd.rn-realmedia": "rm",
        "vnd.rn-realmedia-vbr": "rmvb",
        "vnd.route66.link66+xml": "link66",
        "vnd.sailingtracker.track": "st",
        "vnd.seemail": "see",
        "vnd.sema": "sema",
        "vnd.semd": "semd",
        "vnd.semf": "semf",
        "vnd.shana.informed.formdata": "ifm",
        "vnd.shana.informed.formtemplate": "itp",
        "vnd.shana.informed.interchange": "iif",
        "vnd.shana.informed.package": "ipk",
        "vnd.simtech-mindmapper": [
            "twd",
            "twds"
        ],
        "vnd.smart.teacher": "teacher",
        "vnd.solent.sdkm+xml": [
            "sdkm",
            "sdkd"
        ],
        "vnd.spotfire.dxp": "dxp",
        "vnd.spotfire.sfs": "sfs",
        "vnd.stepmania.package": "smzip",
        "vnd.stepmania.stepchart": "sm",
        "vnd.sus-calendar": [
            "sus",
            "susp"
        ],
        "vnd.svd": "svd",
        "vnd.syncml+xml": "xsm",
        "vnd.syncml.dm+wbxml": "bdm",
        "vnd.syncml.dm+xml": "xdm",
        "vnd.tao.intent-module-archive": "tao",
        "vnd.tcpdump.pcap": [
            "pcap",
            "cap",
            "dmp"
        ],
        "vnd.tmobile-livetv": "tmo",
        "vnd.trid.tpt": "tpt",
        "vnd.triscape.mxs": "mxs",
        "vnd.trueapp": "tra",
        "vnd.ufdl": [
            "ufd",
            "ufdl"
        ],
        "vnd.uiq.theme": "utz",
        "vnd.umajin": "umj",
        "vnd.unity": "unityweb",
        "vnd.uoml+xml": "uoml",
        "vnd.vcx": "vcx",
        "vnd.visionary": "vis",
        "vnd.vsf": "vsf",
        "vnd.webturbo": "wtb",
        "vnd.wolfram.player": "nbp",
        "vnd.wqd": "wqd",
        "vnd.wt.stf": "stf",
        "vnd.xara": "xar",
        "vnd.xfdl": "xfdl",
        "vnd.yamaha.hv-dic": "hvd",
        "vnd.yamaha.hv-script": "hvs",
        "vnd.yamaha.hv-voice": "hvp",
        "vnd.yamaha.openscoreformat": "osf",
        "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
        "vnd.yamaha.smaf-audio": "saf",
        "vnd.yamaha.smaf-phrase": "spf",
        "vnd.yellowriver-custom-menu": "cmp",
        "vnd.zul": [
            "zir",
            "zirz"
        ],
        "vnd.zzazz.deck+xml": "zaz",
        "voicexml+xml": "vxml",
        "widget": "wgt",
        "winhlp": "hlp",
        "wsdl+xml": "wsdl",
        "wspolicy+xml": "wspolicy",
        "x-ace-compressed": "ace",
        "x-authorware-bin": [
            "aab",
            "x32",
            "u32",
            "vox"
        ],
        "x-authorware-map": "aam",
        "x-authorware-seg": "aas",
        "x-blorb": [
            "blb",
            "blorb"
        ],
        "x-bzip": "bz",
        "x-bzip2": [
            "bz2",
            "boz"
        ],
        "x-cfs-compressed": "cfs",
        "x-chat": "chat",
        "x-conference": "nsc",
        "x-dgc-compressed": "dgc",
        "x-dtbncx+xml": "ncx",
        "x-dtbook+xml": "dtb",
        "x-dtbresource+xml": "res",
        "x-eva": "eva",
        "x-font-bdf": "bdf",
        "x-font-ghostscript": "gsf",
        "x-font-linux-psf": "psf",
        "x-font-otf": "otf",
        "x-font-pcf": "pcf",
        "x-font-snf": "snf",
        "x-font-ttf": [
            "ttf",
            "ttc"
        ],
        "x-font-type1": [
            "pfa",
            "pfb",
            "pfm",
            "afm"
        ],
        "x-font-woff": "woff",
        "x-freearc": "arc",
        "x-gca-compressed": "gca",
        "x-glulx": "ulx",
        "x-gramps-xml": "gramps",
        "x-install-instructions": "install",
        "x-lzh-compressed": [
            "lzh",
            "lha"
        ],
        "x-mie": "mie",
        "x-mobipocket-ebook": [
            "prc",
            "mobi"
        ],
        "x-ms-application": "application",
        "x-ms-shortcut": "lnk",
        "x-ms-xbap": "xbap",
        "x-msbinder": "obd",
        "x-mscardfile": "crd",
        "x-msclip": "clp",
        "x-msdownload": [
            "exe",
            "dll",
            "com",
            "bat",
            "msi"
        ],
        "x-msmediaview": [
            "mvb",
            "m13",
            "m14"
        ],
        "x-msmetafile": [
            "wmf",
            "wmz",
            "emf",
            "emz"
        ],
        "x-msmoney": "mny",
        "x-mspublisher": "pub",
        "x-msschedule": "scd",
        "x-msterminal": "trm",
        "x-mswrite": "wri",
        "x-nzb": "nzb",
        "x-pkcs12": [
            "p12",
            "pfx"
        ],
        "x-pkcs7-certificates": [
            "p7b",
            "spc"
        ],
        "x-research-info-systems": "ris",
        "x-silverlight-app": "xap",
        "x-sql": "sql",
        "x-stuffitx": "sitx",
        "x-subrip": "srt",
        "x-t3vm-image": "t3",
        "x-tads": "gam",
        "x-tex": "tex",
        "x-tex-tfm": "tfm",
        "x-tgif": "obj",
        "x-xliff+xml": "xlf",
        "x-xz": "xz",
        "x-zmachine": [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8"
        ],
        "xaml+xml": "xaml",
        "xcap-diff+xml": "xdf",
        "xenc+xml": "xenc",
        "xml-dtd": "dtd",
        "xop+xml": "xop",
        "xproc+xml": "xpl",
        "xslt+xml": "xslt",
        "xv+xml": [
            "mxml",
            "xhvml",
            "xvml",
            "xvm"
        ],
        "yang": "yang",
        "yin+xml": "yin",
        "envoy": "evy",
        "fractals": "fif",
        "internet-property-stream": "acx",
        "olescript": "axs",
        "vnd.ms-outlook": "msg",
        "vnd.ms-pkicertstore": "sst",
        "x-compress": "z",
        "x-compressed": "tgz",
        "x-gzip": "gz",
        "x-perfmon": [
            "pma",
            "pmc",
            "pml",
            "pmr",
            "pmw"
        ],
        "x-pkcs7-mime": [
            "p7c",
            "p7m"
        ],
        "ynd.ms-pkipko": "pko"
    },
    "audio": {
        "amr": "amr",
        "amr-wb": "awb",
        "annodex": "axa",
        "basic": [
            "au",
            "snd"
        ],
        "flac": "flac",
        "midi": [
            "mid",
            "midi",
            "kar",
            "rmi"
        ],
        "mpeg": [
            "mpga",
            "mpega",
            "mp2",
            "mp3",
            "m4a",
            "mp2a",
            "m2a",
            "m3a"
        ],
        "mpegurl": "m3u",
        "ogg": [
            "oga",
            "ogg",
            "spx"
        ],
        "prs.sid": "sid",
        "x-aiff": [
            "aif",
            "aiff",
            "aifc"
        ],
        "x-gsm": "gsm",
        "x-ms-wma": "wma",
        "x-ms-wax": "wax",
        "x-pn-realaudio": "ram",
        "x-realaudio": "ra",
        "x-sd2": "sd2",
        "x-wav": "wav",
        "adpcm": "adp",
        "mp4": "mp4a",
        "s3m": "s3m",
        "silk": "sil",
        "vnd.dece.audio": [
            "uva",
            "uvva"
        ],
        "vnd.digital-winds": "eol",
        "vnd.dra": "dra",
        "vnd.dts": "dts",
        "vnd.dts.hd": "dtshd",
        "vnd.lucent.voice": "lvp",
        "vnd.ms-playready.media.pya": "pya",
        "vnd.nuera.ecelp4800": "ecelp4800",
        "vnd.nuera.ecelp7470": "ecelp7470",
        "vnd.nuera.ecelp9600": "ecelp9600",
        "vnd.rip": "rip",
        "webm": "weba",
        "x-aac": "aac",
        "x-caf": "caf",
        "x-matroska": "mka",
        "x-pn-realaudio-plugin": "rmp",
        "xm": "xm",
        "mid": [
            "mid",
            "rmi"
        ]
    },
    "chemical": {
        "x-alchemy": "alc",
        "x-cache": [
            "cac",
            "cache"
        ],
        "x-cache-csf": "csf",
        "x-cactvs-binary": [
            "cbin",
            "cascii",
            "ctab"
        ],
        "x-cdx": "cdx",
        "x-chem3d": "c3d",
        "x-cif": "cif",
        "x-cmdf": "cmdf",
        "x-cml": "cml",
        "x-compass": "cpa",
        "x-crossfire": "bsd",
        "x-csml": [
            "csml",
            "csm"
        ],
        "x-ctx": "ctx",
        "x-cxf": [
            "cxf",
            "cef"
        ],
        "x-embl-dl-nucleotide": [
            "emb",
            "embl"
        ],
        "x-gamess-input": [
            "inp",
            "gam",
            "gamin"
        ],
        "x-gaussian-checkpoint": [
            "fch",
            "fchk"
        ],
        "x-gaussian-cube": "cub",
        "x-gaussian-input": [
            "gau",
            "gjc",
            "gjf"
        ],
        "x-gaussian-log": "gal",
        "x-gcg8-sequence": "gcg",
        "x-genbank": "gen",
        "x-hin": "hin",
        "x-isostar": [
            "istr",
            "ist"
        ],
        "x-jcamp-dx": [
            "jdx",
            "dx"
        ],
        "x-kinemage": "kin",
        "x-macmolecule": "mcm",
        "x-macromodel-input": [
            "mmd",
            "mmod"
        ],
        "x-mdl-molfile": "mol",
        "x-mdl-rdfile": "rd",
        "x-mdl-rxnfile": "rxn",
        "x-mdl-sdfile": [
            "sd",
            "sdf"
        ],
        "x-mdl-tgf": "tgf",
        "x-mmcif": "mcif",
        "x-mol2": "mol2",
        "x-molconn-Z": "b",
        "x-mopac-graph": "gpt",
        "x-mopac-input": [
            "mop",
            "mopcrt",
            "mpc",
            "zmt"
        ],
        "x-mopac-out": "moo",
        "x-ncbi-asn1": "asn",
        "x-ncbi-asn1-ascii": [
            "prt",
            "ent"
        ],
        "x-ncbi-asn1-binary": [
            "val",
            "aso"
        ],
        "x-pdb": [
            "pdb",
            "ent"
        ],
        "x-rosdal": "ros",
        "x-swissprot": "sw",
        "x-vamas-iso14976": "vms",
        "x-vmd": "vmd",
        "x-xtel": "xtel",
        "x-xyz": "xyz"
    },
    "image": {
        "gif": "gif",
        "ief": "ief",
        "jpeg": [
            "jpeg",
            "jpg",
            "jpe"
        ],
        "pcx": "pcx",
        "png": "png",
        "svg+xml": [
            "svg",
            "svgz"
        ],
        "tiff": [
            "tiff",
            "tif"
        ],
        "vnd.djvu": [
            "djvu",
            "djv"
        ],
        "vnd.wap.wbmp": "wbmp",
        "x-canon-cr2": "cr2",
        "x-canon-crw": "crw",
        "x-cmu-raster": "ras",
        "x-coreldraw": "cdr",
        "x-coreldrawpattern": "pat",
        "x-coreldrawtemplate": "cdt",
        "x-corelphotopaint": "cpt",
        "x-epson-erf": "erf",
        "x-icon": "ico",
        "x-jg": "art",
        "x-jng": "jng",
        "x-nikon-nef": "nef",
        "x-olympus-orf": "orf",
        "x-photoshop": "psd",
        "x-portable-anymap": "pnm",
        "x-portable-bitmap": "pbm",
        "x-portable-graymap": "pgm",
        "x-portable-pixmap": "ppm",
        "x-rgb": "rgb",
        "x-xbitmap": "xbm",
        "x-xpixmap": "xpm",
        "x-xwindowdump": "xwd",
        "bmp": "bmp",
        "cgm": "cgm",
        "g3fax": "g3",
        "ktx": "ktx",
        "prs.btif": "btif",
        "sgi": "sgi",
        "vnd.dece.graphic": [
            "uvi",
            "uvvi",
            "uvg",
            "uvvg"
        ],
        "vnd.dwg": "dwg",
        "vnd.dxf": "dxf",
        "vnd.fastbidsheet": "fbs",
        "vnd.fpx": "fpx",
        "vnd.fst": "fst",
        "vnd.fujixerox.edmics-mmr": "mmr",
        "vnd.fujixerox.edmics-rlc": "rlc",
        "vnd.ms-modi": "mdi",
        "vnd.ms-photo": "wdp",
        "vnd.net-fpx": "npx",
        "vnd.xiff": "xif",
        "webp": "webp",
        "x-3ds": "3ds",
        "x-cmx": "cmx",
        "x-freehand": [
            "fh",
            "fhc",
            "fh4",
            "fh5",
            "fh7"
        ],
        "x-pict": [
            "pic",
            "pct"
        ],
        "x-tga": "tga",
        "cis-cod": "cod",
        "pipeg": "jfif"
    },
    "message": {
        "rfc822": [
            "eml",
            "mime",
            "mht",
            "mhtml",
            "nws"
        ]
    },
    "model": {
        "iges": [
            "igs",
            "iges"
        ],
        "mesh": [
            "msh",
            "mesh",
            "silo"
        ],
        "vrml": [
            "wrl",
            "vrml"
        ],
        "x3d+vrml": [
            "x3dv",
            "x3dvz"
        ],
        "x3d+xml": [
            "x3d",
            "x3dz"
        ],
        "x3d+binary": [
            "x3db",
            "x3dbz"
        ],
        "vnd.collada+xml": "dae",
        "vnd.dwf": "dwf",
        "vnd.gdl": "gdl",
        "vnd.gtw": "gtw",
        "vnd.mts": "mts",
        "vnd.vtu": "vtu"
    },
    "text": {
        "cache-manifest": [
            "manifest",
            "appcache"
        ],
        "calendar": [
            "ics",
            "icz",
            "ifb"
        ],
        "css": "css",
        "csv": "csv",
        "h323": "323",
        "html": [
            "html",
            "htm",
            "shtml",
            "stm"
        ],
        "iuls": "uls",
        "mathml": "mml",
        "plain": [
            "txt",
            "text",
            "brf",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "bas"
        ],
        "richtext": "rtx",
        "scriptlet": [
            "sct",
            "wsc"
        ],
        "texmacs": [
            "tm",
            "ts"
        ],
        "tab-separated-values": "tsv",
        "vnd.sun.j2me.app-descriptor": "jad",
        "vnd.wap.wml": "wml",
        "vnd.wap.wmlscript": "wmls",
        "x-bibtex": "bib",
        "x-boo": "boo",
        "x-c++hdr": [
            "h++",
            "hpp",
            "hxx",
            "hh"
        ],
        "x-c++src": [
            "c++",
            "cpp",
            "cxx",
            "cc"
        ],
        "x-component": "htc",
        "x-dsrc": "d",
        "x-diff": [
            "diff",
            "patch"
        ],
        "x-haskell": "hs",
        "x-java": "java",
        "x-literate-haskell": "lhs",
        "x-moc": "moc",
        "x-pascal": [
            "p",
            "pas"
        ],
        "x-pcs-gcd": "gcd",
        "x-perl": [
            "pl",
            "pm"
        ],
        "x-python": "py",
        "x-scala": "scala",
        "x-setext": "etx",
        "x-tcl": [
            "tcl",
            "tk"
        ],
        "x-tex": [
            "tex",
            "ltx",
            "sty",
            "cls"
        ],
        "x-vcalendar": "vcs",
        "x-vcard": "vcf",
        "n3": "n3",
        "prs.lines.tag": "dsc",
        "sgml": [
            "sgml",
            "sgm"
        ],
        "troff": [
            "t",
            "tr",
            "roff",
            "man",
            "me",
            "ms"
        ],
        "turtle": "ttl",
        "uri-list": [
            "uri",
            "uris",
            "urls"
        ],
        "vcard": "vcard",
        "vnd.curl": "curl",
        "vnd.curl.dcurl": "dcurl",
        "vnd.curl.scurl": "scurl",
        "vnd.curl.mcurl": "mcurl",
        "vnd.dvb.subtitle": "sub",
        "vnd.fly": "fly",
        "vnd.fmi.flexstor": "flx",
        "vnd.graphviz": "gv",
        "vnd.in3d.3dml": "3dml",
        "vnd.in3d.spot": "spot",
        "x-asm": [
            "s",
            "asm"
        ],
        "x-c": [
            "c",
            "cc",
            "cxx",
            "cpp",
            "h",
            "hh",
            "dic"
        ],
        "x-fortran": [
            "f",
            "for",
            "f77",
            "f90"
        ],
        "x-opml": "opml",
        "x-nfo": "nfo",
        "x-sfv": "sfv",
        "x-uuencode": "uu",
        "webviewhtml": "htt"
    },
    "video": {
        "avif": ".avif",
        "3gpp": "3gp",
        "annodex": "axv",
        "dl": "dl",
        "dv": [
            "dif",
            "dv"
        ],
        "fli": "fli",
        "gl": "gl",
        "mpeg": [
            "mpeg",
            "mpg",
            "mpe",
            "m1v",
            "m2v",
            "mp2",
            "mpa",
            "mpv2"
        ],
        "mp4": [
            "mp4",
            "mp4v",
            "mpg4"
        ],
        "quicktime": [
            "qt",
            "mov"
        ],
        "ogg": "ogv",
        "vnd.mpegurl": [
            "mxu",
            "m4u"
        ],
        "x-flv": "flv",
        "x-la-asf": [
            "lsf",
            "lsx"
        ],
        "x-mng": "mng",
        "x-ms-asf": [
            "asf",
            "asx",
            "asr"
        ],
        "x-ms-wm": "wm",
        "x-ms-wmv": "wmv",
        "x-ms-wmx": "wmx",
        "x-ms-wvx": "wvx",
        "x-msvideo": "avi",
        "x-sgi-movie": "movie",
        "x-matroska": [
            "mpv",
            "mkv",
            "mk3d",
            "mks"
        ],
        "3gpp2": "3g2",
        "h261": "h261",
        "h263": "h263",
        "h264": "h264",
        "jpeg": "jpgv",
        "jpm": [
            "jpm",
            "jpgm"
        ],
        "mj2": [
            "mj2",
            "mjp2"
        ],
        "vnd.dece.hd": [
            "uvh",
            "uvvh"
        ],
        "vnd.dece.mobile": [
            "uvm",
            "uvvm"
        ],
        "vnd.dece.pd": [
            "uvp",
            "uvvp"
        ],
        "vnd.dece.sd": [
            "uvs",
            "uvvs"
        ],
        "vnd.dece.video": [
            "uvv",
            "uvvv"
        ],
        "vnd.dvb.file": "dvb",
        "vnd.fvt": "fvt",
        "vnd.ms-playready.media.pyv": "pyv",
        "vnd.uvvu.mp4": [
            "uvu",
            "uvvu"
        ],
        "vnd.vivo": "viv",
        "webm": "webm",
        "x-f4v": "f4v",
        "x-m4v": "m4v",
        "x-ms-vob": "vob",
        "x-smv": "smv"
    },
    "x-conference": {
        "x-cooltalk": "ice"
    },
    "x-world": {
        "x-vrml": [
            "vrm",
            "vrml",
            "wrl",
            "flr",
            "wrz",
            "xaf",
            "xof"
        ]
    }
};
const $4768aac94458fdf2$export$53cb456310d1907e = (()=>{
    const mimeTypes = {};
    for(const type in $4768aac94458fdf2$var$table)// eslint-disable-next-line no-prototype-builtins
    if ($4768aac94458fdf2$var$table.hasOwnProperty(type)) {
        for(const subtype in $4768aac94458fdf2$var$table[type])// eslint-disable-next-line no-prototype-builtins
        if ($4768aac94458fdf2$var$table[type].hasOwnProperty(subtype)) {
            const value = $4768aac94458fdf2$var$table[type][subtype];
            if (typeof value == "string") mimeTypes[value] = type + "/" + subtype;
            else for(let indexMimeType = 0; indexMimeType < value.length; indexMimeType++)mimeTypes[value[indexMimeType]] = type + "/" + subtype;
        }
    }
    return mimeTypes;
})();
function $4768aac94458fdf2$export$200548c990602f61(filename) {
    return filename && $4768aac94458fdf2$export$53cb456310d1907e[filename.split(".").pop().toLowerCase()] || (0, $47d50919f633f0fd$export$200548c990602f61)();
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global setTimeout, clearTimeout */ 
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ /*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ const $0fe927a90ceb1a3f$var$table = [];
for(let i = 0; i < 256; i++){
    let t = i;
    for(let j = 0; j < 8; j++)if (t & 1) t = t >>> 1 ^ 0xEDB88320;
    else t = t >>> 1;
    $0fe927a90ceb1a3f$var$table[i] = t;
}
class $0fe927a90ceb1a3f$export$16d8d62894c71747 {
    constructor(crc){
        this.crc = crc || -1;
    }
    append(data) {
        let crc = this.crc | 0;
        for(let offset = 0, length = data.length | 0; offset < length; offset++)crc = crc >>> 8 ^ $0fe927a90ceb1a3f$var$table[(crc ^ data[offset]) & 0xFF];
        this.crc = crc;
    }
    get() {
        return ~this.crc;
    }
}


class $eed2d8869a61cb67$export$b3cd3a37bd85e6ee extends TransformStream {
    constructor(){
        const crc32 = new (0, $0fe927a90ceb1a3f$export$16d8d62894c71747)();
        super({
            transform (chunk) {
                crc32.append(chunk);
            },
            flush (controller) {
                const value = new Uint8Array(4);
                const dataView = new DataView(value.buffer);
                dataView.setUint32(0, crc32.get());
                controller.enqueue(value);
            }
        });
    }
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global crypto, TransformStream */ // deno-lint-ignore-file no-this-alias
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextEncoder */ function $26c9c6b6bd48ee69$export$7d0d7672e8a1c5cf(value) {
    if (typeof TextEncoder == "undefined") {
        value = unescape(encodeURIComponent(value));
        const result = new Uint8Array(value.length);
        for(let i = 0; i < result.length; i++)result[i] = value.charCodeAt(i);
        return result;
    } else return new TextEncoder().encode(value);
}


// Derived from https://github.com/xqdoo00o/jszip/blob/master/lib/sjcl.js and https://github.com/bitwiseshiftleft/sjcl
// deno-lint-ignore-file no-this-alias
/*
 * SJCL is open. You can use, modify and redistribute it under a BSD
 * license or under the GNU GPL, version 2.0.
 */ /** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /*jslint indent: 2, bitwise: false, nomen: false, plusplus: false, white: false, regexp: false */ /** @fileOverview Arrays of bits, encoded as arrays of Numbers.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /**
 * Arrays of bits, encoded as arrays of Numbers.
 * @namespace
 * @description
 * <p>
 * These objects are the currency accepted by SJCL's crypto functions.
 * </p>
 *
 * <p>
 * Most of our crypto primitives operate on arrays of 4-byte words internally,
 * but many of them can take arguments that are not a multiple of 4 bytes.
 * This library encodes arrays of bits (whose size need not be a multiple of 8
 * bits) as arrays of 32-bit words.  The bits are packed, big-endian, into an
 * array of words, 32 bits at a time.  Since the words are double-precision
 * floating point numbers, they fit some extra data.  We use this (in a private,
 * possibly-changing manner) to encode the number of bits actually  present
 * in the last word of the array.
 * </p>
 *
 * <p>
 * Because bitwise ops clear this out-of-band data, these arrays can be passed
 * to ciphers like AES which want arrays of words.
 * </p>
 */ const $e31c6c3d9a051b4b$var$bitArray = {
    /**
	 * Concatenate two bit arrays.
	 * @param {bitArray} a1 The first array.
	 * @param {bitArray} a2 The second array.
	 * @return {bitArray} The concatenation of a1 and a2.
	 */ concat (a1, a2) {
        if (a1.length === 0 || a2.length === 0) return a1.concat(a2);
        const last = a1[a1.length - 1], shift = $e31c6c3d9a051b4b$var$bitArray.getPartial(last);
        if (shift === 32) return a1.concat(a2);
        else return $e31c6c3d9a051b4b$var$bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    },
    /**
	 * Find the length of an array of bits.
	 * @param {bitArray} a The array.
	 * @return {Number} The length of a, in bits.
	 */ bitLength (a) {
        const l = a.length;
        if (l === 0) return 0;
        const x = a[l - 1];
        return (l - 1) * 32 + $e31c6c3d9a051b4b$var$bitArray.getPartial(x);
    },
    /**
	 * Truncate an array.
	 * @param {bitArray} a The array.
	 * @param {Number} len The length to truncate to, in bits.
	 * @return {bitArray} A new array, truncated to len bits.
	 */ clamp (a, len) {
        if (a.length * 32 < len) return a;
        a = a.slice(0, Math.ceil(len / 32));
        const l = a.length;
        len = len & 31;
        if (l > 0 && len) a[l - 1] = $e31c6c3d9a051b4b$var$bitArray.partial(len, a[l - 1] & 0x80000000 >> len - 1, 1);
        return a;
    },
    /**
	 * Make a partial word for a bit array.
	 * @param {Number} len The number of bits in the word.
	 * @param {Number} x The bits.
	 * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
	 * @return {Number} The partial word.
	 */ partial (len, x, _end) {
        if (len === 32) return x;
        return (_end ? x | 0 : x << 32 - len) + len * 0x10000000000;
    },
    /**
	 * Get the number of bits used by a partial word.
	 * @param {Number} x The partial word.
	 * @return {Number} The number of bits used by the partial word.
	 */ getPartial (x) {
        return Math.round(x / 0x10000000000) || 32;
    },
    /** Shift an array right.
	 * @param {bitArray} a The array to shift.
	 * @param {Number} shift The number of bits to shift.
	 * @param {Number} [carry=0] A byte to carry in
	 * @param {bitArray} [out=[]] An array to prepend to the output.
	 * @private
	 */ _shiftRight (a, shift, carry, out) {
        if (out === undefined) out = [];
        for(; shift >= 32; shift -= 32){
            out.push(carry);
            carry = 0;
        }
        if (shift === 0) return out.concat(a);
        for(let i = 0; i < a.length; i++){
            out.push(carry | a[i] >>> shift);
            carry = a[i] << 32 - shift;
        }
        const last2 = a.length ? a[a.length - 1] : 0;
        const shift2 = $e31c6c3d9a051b4b$var$bitArray.getPartial(last2);
        out.push($e31c6c3d9a051b4b$var$bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
        return out;
    }
};
/** @fileOverview Bit array codec implementations.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /**
 * Arrays of bytes
 * @namespace
 */ const $e31c6c3d9a051b4b$export$1c37c01eba8ed446 = {
    bytes: {
        /** Convert from a bitArray to an array of bytes. */ fromBits (arr) {
            const bl = $e31c6c3d9a051b4b$var$bitArray.bitLength(arr);
            const byteLength = bl / 8;
            const out = new Uint8Array(byteLength);
            let tmp;
            for(let i = 0; i < byteLength; i++){
                if ((i & 3) === 0) tmp = arr[i / 4];
                out[i] = tmp >>> 24;
                tmp <<= 8;
            }
            return out;
        },
        /** Convert from an array of bytes to a bitArray. */ toBits (bytes) {
            const out = [];
            let i;
            let tmp = 0;
            for(i = 0; i < bytes.length; i++){
                tmp = tmp << 8 | bytes[i];
                if ((i & 3) === 3) {
                    out.push(tmp);
                    tmp = 0;
                }
            }
            if (i & 3) out.push($e31c6c3d9a051b4b$var$bitArray.partial(8 * (i & 3), tmp));
            return out;
        }
    }
};
const $e31c6c3d9a051b4b$var$hash = {};
/**
 * Context for a SHA-1 operation in progress.
 * @constructor
 */ $e31c6c3d9a051b4b$var$hash.sha1 = class {
    constructor(hash){
        const sha1 = this;
        /**
		 * The hash's block size, in bits.
		 * @constant
		 */ sha1.blockSize = 512;
        /**
		 * The SHA-1 initialization vector.
		 * @private
		 */ sha1._init = [
            0x67452301,
            0xEFCDAB89,
            0x98BADCFE,
            0x10325476,
            0xC3D2E1F0
        ];
        /**
		 * The SHA-1 hash key.
		 * @private
		 */ sha1._key = [
            0x5A827999,
            0x6ED9EBA1,
            0x8F1BBCDC,
            0xCA62C1D6
        ];
        if (hash) {
            sha1._h = hash._h.slice(0);
            sha1._buffer = hash._buffer.slice(0);
            sha1._length = hash._length;
        } else sha1.reset();
    }
    /**
	 * Reset the hash state.
	 * @return this
	 */ reset() {
        const sha1 = this;
        sha1._h = sha1._init.slice(0);
        sha1._buffer = [];
        sha1._length = 0;
        return sha1;
    }
    /**
	 * Input several words to the hash.
	 * @param {bitArray|String} data the data to hash.
	 * @return this
	 */ update(data) {
        const sha1 = this;
        if (typeof data === "string") data = $e31c6c3d9a051b4b$export$1c37c01eba8ed446.utf8String.toBits(data);
        const b = sha1._buffer = $e31c6c3d9a051b4b$var$bitArray.concat(sha1._buffer, data);
        const ol = sha1._length;
        const nl = sha1._length = ol + $e31c6c3d9a051b4b$var$bitArray.bitLength(data);
        if (nl > 9007199254740991) throw new Error("Cannot hash more than 2^53 - 1 bits");
        const c = new Uint32Array(b);
        let j = 0;
        for(let i = sha1.blockSize + ol - (sha1.blockSize + ol & sha1.blockSize - 1); i <= nl; i += sha1.blockSize){
            sha1._block(c.subarray(16 * j, 16 * (j + 1)));
            j += 1;
        }
        b.splice(0, 16 * j);
        return sha1;
    }
    /**
	 * Complete hashing and output the hash value.
	 * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
	 */ finalize() {
        const sha1 = this;
        let b = sha1._buffer;
        const h = sha1._h;
        // Round out and push the buffer
        b = $e31c6c3d9a051b4b$var$bitArray.concat(b, [
            $e31c6c3d9a051b4b$var$bitArray.partial(1, 1)
        ]);
        // Round out the buffer to a multiple of 16 words, less the 2 length words.
        for(let i = b.length + 2; i & 15; i++)b.push(0);
        // append the length
        b.push(Math.floor(sha1._length / 0x100000000));
        b.push(sha1._length | 0);
        while(b.length)sha1._block(b.splice(0, 16));
        sha1.reset();
        return h;
    }
    /**
	 * The SHA-1 logical functions f(0), f(1), ..., f(79).
	 * @private
	 */ _f(t, b, c, d) {
        if (t <= 19) return b & c | ~b & d;
        else if (t <= 39) return b ^ c ^ d;
        else if (t <= 59) return b & c | b & d | c & d;
        else if (t <= 79) return b ^ c ^ d;
    }
    /**
	 * Circular left-shift operator.
	 * @private
	 */ _S(n, x) {
        return x << n | x >>> 32 - n;
    }
    /**
	 * Perform one cycle of SHA-1.
	 * @param {Uint32Array|bitArray} words one block of words.
	 * @private
	 */ _block(words) {
        const sha1 = this;
        const h = sha1._h;
        // When words is passed to _block, it has 16 elements. SHA1 _block
        // function extends words with new elements (at the end there are 80 elements). 
        // The problem is that if we use Uint32Array instead of Array, 
        // the length of Uint32Array cannot be changed. Thus, we replace words with a 
        // normal Array here.
        const w = Array(80); // do not use Uint32Array here as the instantiation is slower
        for(let j = 0; j < 16; j++)w[j] = words[j];
        let a = h[0];
        let b = h[1];
        let c = h[2];
        let d = h[3];
        let e = h[4];
        for(let t = 0; t <= 79; t++){
            if (t >= 16) w[t] = sha1._S(1, w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]);
            const tmp = sha1._S(5, a) + sha1._f(t, b, c, d) + e + w[t] + sha1._key[Math.floor(t / 20)] | 0;
            e = d;
            d = c;
            c = sha1._S(30, b);
            b = a;
            a = tmp;
        }
        h[0] = h[0] + a | 0;
        h[1] = h[1] + b | 0;
        h[2] = h[2] + c | 0;
        h[3] = h[3] + d | 0;
        h[4] = h[4] + e | 0;
    }
};
/** @fileOverview Low-level AES implementation.
 *
 * This file contains a low-level implementation of AES, optimized for
 * size and for efficiency on several browsers.  It is based on
 * OpenSSL's aes_core.c, a public-domain implementation by Vincent
 * Rijmen, Antoon Bosselaers and Paulo Barreto.
 *
 * An older version of this implementation is available in the public
 * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
 * Stanford University 2008-2010 and BSD-licensed for liability
 * reasons.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ const $e31c6c3d9a051b4b$export$f135d47a138454a1 = {};
/**
 * Schedule out an AES key for both encryption and decryption.  This
 * is a low-level class.  Use a cipher mode to do bulk encryption.
 *
 * @constructor
 * @param {Array} key The key as an array of 4, 6 or 8 words.
 */ $e31c6c3d9a051b4b$export$f135d47a138454a1.aes = class {
    constructor(key){
        /**
		 * The expanded S-box and inverse S-box tables.  These will be computed
		 * on the client so that we don't have to send them down the wire.
		 *
		 * There are two tables, _tables[0] is for encryption and
		 * _tables[1] is for decryption.
		 *
		 * The first 4 sub-tables are the expanded S-box with MixColumns.  The
		 * last (_tables[01][4]) is the S-box itself.
		 *
		 * @private
		 */ const aes = this;
        aes._tables = [
            [
                [],
                [],
                [],
                [],
                []
            ],
            [
                [],
                [],
                [],
                [],
                []
            ]
        ];
        if (!aes._tables[0][0][0]) aes._precompute();
        const sbox = aes._tables[0][4];
        const decTable = aes._tables[1];
        const keyLen = key.length;
        let i, encKey, decKey, rcon = 1;
        if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) throw new Error("invalid aes key size");
        aes._key = [
            encKey = key.slice(0),
            decKey = []
        ];
        // schedule encryption keys
        for(i = keyLen; i < 4 * keyLen + 28; i++){
            let tmp = encKey[i - 1];
            // apply sbox
            if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
                tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
                // shift rows and add rcon
                if (i % keyLen === 0) {
                    tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
                    rcon = rcon << 1 ^ (rcon >> 7) * 283;
                }
            }
            encKey[i] = encKey[i - keyLen] ^ tmp;
        }
        // schedule decryption keys
        for(let j = 0; i; j++, i--){
            const tmp = encKey[j & 3 ? i : i - 4];
            if (i <= 4 || j < 4) decKey[j] = tmp;
            else decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
        }
    }
    // public
    /* Something like this might appear here eventually
	name: "AES",
	blockSize: 4,
	keySizes: [4,6,8],
	*/ /**
	 * Encrypt an array of 4 big-endian words.
	 * @param {Array} data The plaintext.
	 * @return {Array} The ciphertext.
	 */ encrypt(data) {
        return this._crypt(data, 0);
    }
    /**
	 * Decrypt an array of 4 big-endian words.
	 * @param {Array} data The ciphertext.
	 * @return {Array} The plaintext.
	 */ decrypt(data) {
        return this._crypt(data, 1);
    }
    /**
	 * Expand the S-box tables.
	 *
	 * @private
	 */ _precompute() {
        const encTable = this._tables[0];
        const decTable = this._tables[1];
        const sbox = encTable[4];
        const sboxInv = decTable[4];
        const d = [];
        const th = [];
        let xInv, x2, x4, x8;
        // Compute double and third tables
        for(let i = 0; i < 256; i++)th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
        for(let x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1){
            // Compute sbox
            let s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
            s = s >> 8 ^ s & 255 ^ 99;
            sbox[x] = s;
            sboxInv[s] = x;
            // Compute MixColumns
            x8 = d[x4 = d[x2 = d[x]]];
            let tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
            let tEnc = d[s] * 0x101 ^ s * 0x1010100;
            for(let i = 0; i < 4; i++){
                encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
                decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
            }
        }
        // Compactify.  Considerable speedup on Firefox.
        for(let i = 0; i < 5; i++){
            encTable[i] = encTable[i].slice(0);
            decTable[i] = decTable[i].slice(0);
        }
    }
    /**
	 * Encryption and decryption core.
	 * @param {Array} input Four words to be encrypted or decrypted.
	 * @param dir The direction, 0 for encrypt and 1 for decrypt.
	 * @return {Array} The four encrypted or decrypted words.
	 * @private
	 */ _crypt(input, dir) {
        if (input.length !== 4) throw new Error("invalid aes block size");
        const key = this._key[dir];
        const nInnerRounds = key.length / 4 - 2;
        const out = [
            0,
            0,
            0,
            0
        ];
        const table = this._tables[dir];
        // load up the tables
        const t0 = table[0];
        const t1 = table[1];
        const t2 = table[2];
        const t3 = table[3];
        const sbox = table[4];
        // state variables a,b,c,d are loaded with pre-whitened data
        let a = input[0] ^ key[0];
        let b = input[dir ? 3 : 1] ^ key[1];
        let c = input[2] ^ key[2];
        let d = input[dir ? 1 : 3] ^ key[3];
        let kIndex = 4;
        let a2, b2, c2;
        // Inner rounds.  Cribbed from OpenSSL.
        for(let i = 0; i < nInnerRounds; i++){
            a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
            b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
            c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
            d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
            kIndex += 4;
            a = a2;
            b = b2;
            c = c2;
        }
        // Last round.
        for(let i = 0; i < 4; i++){
            out[dir ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
            a2 = a;
            a = b;
            b = c;
            c = d;
            d = a2;
        }
        return out;
    }
};
/**
 * Random values
 * @namespace
 */ const $e31c6c3d9a051b4b$export$4385e60b38654f68 = {
    /** 
	 * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
	 * @param {TypedArray} typedArray The array to fill.
	 * @return {TypedArray} The random values.
	 */ getRandomValues (typedArray) {
        const words = new Uint32Array(typedArray.buffer);
        const r = (m_w)=>{
            let m_z = 0x3ade68b1;
            const mask = 0xffffffff;
            return function() {
                m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
                m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
                const result = ((m_z << 0x10) + m_w & mask) / 0x100000000 + .5;
                return result * (Math.random() > .5 ? 1 : -1);
            };
        };
        for(let i = 0, rcache; i < typedArray.length; i += 4){
            const _r = r((rcache || Math.random()) * 0x100000000);
            rcache = _r() * 0x3ade67b7;
            words[i / 4] = _r() * 0x100000000 | 0;
        }
        return typedArray;
    }
};
/** @fileOverview CTR mode implementation.
 *
 * Special thanks to Roy Nicholson for pointing out a bug in our
 * implementation.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /** Brian Gladman's CTR Mode.
* @constructor
* @param {Object} _prf The aes instance to generate key.
* @param {bitArray} _iv The iv for ctr mode, it must be 128 bits.
*/ const $e31c6c3d9a051b4b$export$549ff81930776885 = {};
/**
 * Brian Gladman's CTR Mode.
 * @namespace
 */ $e31c6c3d9a051b4b$export$549ff81930776885.ctrGladman = class {
    constructor(prf, iv){
        this._prf = prf;
        this._initIv = iv;
        this._iv = iv;
    }
    reset() {
        this._iv = this._initIv;
    }
    /** Input some data to calculate.
	 * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
	 */ update(data) {
        return this.calculate(this._prf, data, this._iv);
    }
    incWord(word) {
        if ((word >> 24 & 0xff) === 0xff) {
            let b1 = word >> 16 & 0xff;
            let b2 = word >> 8 & 0xff;
            let b3 = word & 0xff;
            if (b1 === 0xff) {
                b1 = 0;
                if (b2 === 0xff) {
                    b2 = 0;
                    if (b3 === 0xff) b3 = 0;
                    else ++b3;
                } else ++b2;
            } else ++b1;
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
        } else word += 16777216;
        return word;
    }
    incCounter(counter) {
        if ((counter[0] = this.incWord(counter[0])) === 0) // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = this.incWord(counter[1]);
    }
    calculate(prf, data, iv) {
        let l;
        if (!(l = data.length)) return [];
        const bl = $e31c6c3d9a051b4b$var$bitArray.bitLength(data);
        for(let i = 0; i < l; i += 4){
            this.incCounter(iv);
            const e = prf.encrypt(iv);
            data[i] ^= e[0];
            data[i + 1] ^= e[1];
            data[i + 2] ^= e[2];
            data[i + 3] ^= e[3];
        }
        return $e31c6c3d9a051b4b$var$bitArray.clamp(data, bl);
    }
};
const $e31c6c3d9a051b4b$export$5675c2f3af4366e2 = {
    importKey (password) {
        return new $e31c6c3d9a051b4b$export$5675c2f3af4366e2.hmacSha1($e31c6c3d9a051b4b$export$1c37c01eba8ed446.bytes.toBits(password));
    },
    pbkdf2 (prf, salt, count, length) {
        count = count || 10000;
        if (length < 0 || count < 0) throw new Error("invalid params to pbkdf2");
        const byteLength = (length >> 5) + 1 << 2;
        let u, ui, i, j, k;
        const arrayBuffer = new ArrayBuffer(byteLength);
        const out = new DataView(arrayBuffer);
        let outLength = 0;
        const b = $e31c6c3d9a051b4b$var$bitArray;
        salt = $e31c6c3d9a051b4b$export$1c37c01eba8ed446.bytes.toBits(salt);
        for(k = 1; outLength < (byteLength || 1); k++){
            u = ui = prf.encrypt(b.concat(salt, [
                k
            ]));
            for(i = 1; i < count; i++){
                ui = prf.encrypt(ui);
                for(j = 0; j < ui.length; j++)u[j] ^= ui[j];
            }
            for(i = 0; outLength < (byteLength || 1) && i < u.length; i++){
                out.setInt32(outLength, u[i]);
                outLength += 4;
            }
        }
        return arrayBuffer.slice(0, length / 8);
    }
};
/** @fileOverview HMAC implementation.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /** HMAC with the specified hash function.
 * @constructor
 * @param {bitArray} key the key for HMAC.
 * @param {Object} [Hash=hash.sha1] The hash function to use.
 */ $e31c6c3d9a051b4b$export$5675c2f3af4366e2.hmacSha1 = class {
    constructor(key){
        const hmac = this;
        const Hash = hmac._hash = $e31c6c3d9a051b4b$var$hash.sha1;
        const exKey = [
            [],
            []
        ];
        hmac._baseHash = [
            new Hash(),
            new Hash()
        ];
        const bs = hmac._baseHash[0].blockSize / 32;
        if (key.length > bs) key = new Hash().update(key).finalize();
        for(let i = 0; i < bs; i++){
            exKey[0][i] = key[i] ^ 0x36363636;
            exKey[1][i] = key[i] ^ 0x5C5C5C5C;
        }
        hmac._baseHash[0].update(exKey[0]);
        hmac._baseHash[1].update(exKey[1]);
        hmac._resultHash = new Hash(hmac._baseHash[0]);
    }
    reset() {
        const hmac = this;
        hmac._resultHash = new hmac._hash(hmac._baseHash[0]);
        hmac._updated = false;
    }
    update(data) {
        const hmac = this;
        hmac._updated = true;
        hmac._resultHash.update(data);
    }
    digest() {
        const hmac = this;
        const w = hmac._resultHash.finalize();
        const result = new hmac._hash(hmac._baseHash[1]).update(w).finalize();
        hmac.reset();
        return result;
    }
    encrypt(data) {
        if (!this._updated) {
            this.update(data);
            return this.digest(data);
        } else throw new Error("encrypt on already updated hmac called!");
    }
};


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global crypto */ 
const $2c2bd6ed85f5e732$var$GET_RANDOM_VALUES_SUPPORTED = typeof crypto != "undefined" && typeof crypto.getRandomValues == "function";
const $2c2bd6ed85f5e732$export$91dc8f5b62a122fd = "Invalid password";
const $2c2bd6ed85f5e732$export$ae8341b00030fc9d = "Invalid signature";
const $2c2bd6ed85f5e732$export$e6db2db9e24ceff8 = "zipjs-abort-check-password";
function $2c2bd6ed85f5e732$export$960b9ff25e7d4257(array) {
    if ($2c2bd6ed85f5e732$var$GET_RANDOM_VALUES_SUPPORTED) return crypto.getRandomValues(array);
    else return (0, $e31c6c3d9a051b4b$export$4385e60b38654f68).getRandomValues(array);
}


const $7ee95500f310dc9c$var$BLOCK_LENGTH = 16;
const $7ee95500f310dc9c$var$RAW_FORMAT = "raw";
const $7ee95500f310dc9c$var$PBKDF2_ALGORITHM = {
    name: "PBKDF2"
};
const $7ee95500f310dc9c$var$HASH_ALGORITHM = {
    name: "HMAC"
};
const $7ee95500f310dc9c$var$HASH_FUNCTION = "SHA-1";
const $7ee95500f310dc9c$var$BASE_KEY_ALGORITHM = Object.assign({
    hash: $7ee95500f310dc9c$var$HASH_ALGORITHM
}, $7ee95500f310dc9c$var$PBKDF2_ALGORITHM);
const $7ee95500f310dc9c$var$DERIVED_BITS_ALGORITHM = Object.assign({
    iterations: 1000,
    hash: {
        name: $7ee95500f310dc9c$var$HASH_FUNCTION
    }
}, $7ee95500f310dc9c$var$PBKDF2_ALGORITHM);
const $7ee95500f310dc9c$var$DERIVED_BITS_USAGE = [
    "deriveBits"
];
const $7ee95500f310dc9c$var$SALT_LENGTH = [
    8,
    12,
    16
];
const $7ee95500f310dc9c$var$KEY_LENGTH = [
    16,
    24,
    32
];
const $7ee95500f310dc9c$var$SIGNATURE_LENGTH = 10;
const $7ee95500f310dc9c$var$COUNTER_DEFAULT_VALUE = [
    0,
    0,
    0,
    0
];
const $7ee95500f310dc9c$var$UNDEFINED_TYPE = "undefined";
const $7ee95500f310dc9c$var$FUNCTION_TYPE = "function";
// deno-lint-ignore valid-typeof
const $7ee95500f310dc9c$var$CRYPTO_API_SUPPORTED = typeof crypto != $7ee95500f310dc9c$var$UNDEFINED_TYPE;
const $7ee95500f310dc9c$var$subtle = $7ee95500f310dc9c$var$CRYPTO_API_SUPPORTED && crypto.subtle;
const $7ee95500f310dc9c$var$SUBTLE_API_SUPPORTED = $7ee95500f310dc9c$var$CRYPTO_API_SUPPORTED && typeof $7ee95500f310dc9c$var$subtle != $7ee95500f310dc9c$var$UNDEFINED_TYPE;
const $7ee95500f310dc9c$var$codecBytes = (0, $e31c6c3d9a051b4b$export$1c37c01eba8ed446).bytes;
const $7ee95500f310dc9c$var$Aes = (0, $e31c6c3d9a051b4b$export$f135d47a138454a1).aes;
const $7ee95500f310dc9c$var$CtrGladman = (0, $e31c6c3d9a051b4b$export$549ff81930776885).ctrGladman;
const $7ee95500f310dc9c$var$HmacSha1 = (0, $e31c6c3d9a051b4b$export$5675c2f3af4366e2).hmacSha1;
let $7ee95500f310dc9c$var$IMPORT_KEY_SUPPORTED = $7ee95500f310dc9c$var$CRYPTO_API_SUPPORTED && $7ee95500f310dc9c$var$SUBTLE_API_SUPPORTED && typeof $7ee95500f310dc9c$var$subtle.importKey == $7ee95500f310dc9c$var$FUNCTION_TYPE;
let $7ee95500f310dc9c$var$DERIVE_BITS_SUPPORTED = $7ee95500f310dc9c$var$CRYPTO_API_SUPPORTED && $7ee95500f310dc9c$var$SUBTLE_API_SUPPORTED && typeof $7ee95500f310dc9c$var$subtle.deriveBits == $7ee95500f310dc9c$var$FUNCTION_TYPE;
class $7ee95500f310dc9c$export$2bd61c0866eee75e extends TransformStream {
    constructor({ password: password , signed: signed , encryptionStrength: encryptionStrength , checkPasswordOnly: checkPasswordOnly  }){
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((resolve)=>this.resolveReady = resolve),
                    password: password,
                    signed: signed,
                    strength: encryptionStrength - 1,
                    pending: new Uint8Array()
                });
            },
            async transform (chunk, controller) {
                const aesCrypto = this;
                const { password: password , strength: strength , resolveReady: resolveReady , ready: ready  } = aesCrypto;
                if (password) {
                    await $7ee95500f310dc9c$var$createDecryptionKeys(aesCrypto, strength, password, $7ee95500f310dc9c$var$subarray(chunk, 0, $7ee95500f310dc9c$var$SALT_LENGTH[strength] + 2));
                    chunk = $7ee95500f310dc9c$var$subarray(chunk, $7ee95500f310dc9c$var$SALT_LENGTH[strength] + 2);
                    if (checkPasswordOnly) controller.error(new Error((0, $2c2bd6ed85f5e732$export$e6db2db9e24ceff8)));
                    else resolveReady();
                } else await ready;
                const output = new Uint8Array(chunk.length - $7ee95500f310dc9c$var$SIGNATURE_LENGTH - (chunk.length - $7ee95500f310dc9c$var$SIGNATURE_LENGTH) % $7ee95500f310dc9c$var$BLOCK_LENGTH);
                controller.enqueue($7ee95500f310dc9c$var$append(aesCrypto, chunk, output, 0, $7ee95500f310dc9c$var$SIGNATURE_LENGTH, true));
            },
            async flush (controller) {
                const { signed: signed , ctr: ctr , hmac: hmac , pending: pending , ready: ready  } = this;
                await ready;
                const chunkToDecrypt = $7ee95500f310dc9c$var$subarray(pending, 0, pending.length - $7ee95500f310dc9c$var$SIGNATURE_LENGTH);
                const originalSignature = $7ee95500f310dc9c$var$subarray(pending, pending.length - $7ee95500f310dc9c$var$SIGNATURE_LENGTH);
                let decryptedChunkArray = new Uint8Array();
                if (chunkToDecrypt.length) {
                    const encryptedChunk = $7ee95500f310dc9c$var$toBits($7ee95500f310dc9c$var$codecBytes, chunkToDecrypt);
                    hmac.update(encryptedChunk);
                    const decryptedChunk = ctr.update(encryptedChunk);
                    decryptedChunkArray = $7ee95500f310dc9c$var$fromBits($7ee95500f310dc9c$var$codecBytes, decryptedChunk);
                }
                if (signed) {
                    const signature = $7ee95500f310dc9c$var$subarray($7ee95500f310dc9c$var$fromBits($7ee95500f310dc9c$var$codecBytes, hmac.digest()), 0, $7ee95500f310dc9c$var$SIGNATURE_LENGTH);
                    for(let indexSignature = 0; indexSignature < $7ee95500f310dc9c$var$SIGNATURE_LENGTH; indexSignature++){
                        if (signature[indexSignature] != originalSignature[indexSignature]) throw new Error((0, $2c2bd6ed85f5e732$export$ae8341b00030fc9d));
                    }
                }
                controller.enqueue(decryptedChunkArray);
            }
        });
    }
}
class $7ee95500f310dc9c$export$5eab59cbcb1482d5 extends TransformStream {
    constructor({ password: password , encryptionStrength: encryptionStrength  }){
        // deno-lint-ignore prefer-const
        let stream;
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((resolve)=>this.resolveReady = resolve),
                    password: password,
                    strength: encryptionStrength - 1,
                    pending: new Uint8Array()
                });
            },
            async transform (chunk, controller) {
                const aesCrypto = this;
                const { password: password , strength: strength , resolveReady: resolveReady , ready: ready  } = aesCrypto;
                let preamble = new Uint8Array();
                if (password) {
                    preamble = await $7ee95500f310dc9c$var$createEncryptionKeys(aesCrypto, strength, password);
                    resolveReady();
                } else await ready;
                const output = new Uint8Array(preamble.length + chunk.length - chunk.length % $7ee95500f310dc9c$var$BLOCK_LENGTH);
                output.set(preamble, 0);
                controller.enqueue($7ee95500f310dc9c$var$append(aesCrypto, chunk, output, preamble.length, 0));
            },
            async flush (controller) {
                const { ctr: ctr , hmac: hmac , pending: pending , ready: ready  } = this;
                await ready;
                let encryptedChunkArray = new Uint8Array();
                if (pending.length) {
                    const encryptedChunk = ctr.update($7ee95500f310dc9c$var$toBits($7ee95500f310dc9c$var$codecBytes, pending));
                    hmac.update(encryptedChunk);
                    encryptedChunkArray = $7ee95500f310dc9c$var$fromBits($7ee95500f310dc9c$var$codecBytes, encryptedChunk);
                }
                stream.signature = $7ee95500f310dc9c$var$fromBits($7ee95500f310dc9c$var$codecBytes, hmac.digest()).slice(0, $7ee95500f310dc9c$var$SIGNATURE_LENGTH);
                controller.enqueue($7ee95500f310dc9c$var$concat(encryptedChunkArray, stream.signature));
            }
        });
        stream = this;
    }
}
function $7ee95500f310dc9c$var$append(aesCrypto, input, output, paddingStart, paddingEnd, verifySignature) {
    const { ctr: ctr , hmac: hmac , pending: pending  } = aesCrypto;
    const inputLength = input.length - paddingEnd;
    if (pending.length) {
        input = $7ee95500f310dc9c$var$concat(pending, input);
        output = $7ee95500f310dc9c$var$expand(output, inputLength - inputLength % $7ee95500f310dc9c$var$BLOCK_LENGTH);
    }
    let offset;
    for(offset = 0; offset <= inputLength - $7ee95500f310dc9c$var$BLOCK_LENGTH; offset += $7ee95500f310dc9c$var$BLOCK_LENGTH){
        const inputChunk = $7ee95500f310dc9c$var$toBits($7ee95500f310dc9c$var$codecBytes, $7ee95500f310dc9c$var$subarray(input, offset, offset + $7ee95500f310dc9c$var$BLOCK_LENGTH));
        if (verifySignature) hmac.update(inputChunk);
        const outputChunk = ctr.update(inputChunk);
        if (!verifySignature) hmac.update(outputChunk);
        output.set($7ee95500f310dc9c$var$fromBits($7ee95500f310dc9c$var$codecBytes, outputChunk), offset + paddingStart);
    }
    aesCrypto.pending = $7ee95500f310dc9c$var$subarray(input, offset);
    return output;
}
async function $7ee95500f310dc9c$var$createDecryptionKeys(decrypt, strength, password, preamble) {
    const passwordVerificationKey = await $7ee95500f310dc9c$var$createKeys(decrypt, strength, password, $7ee95500f310dc9c$var$subarray(preamble, 0, $7ee95500f310dc9c$var$SALT_LENGTH[strength]));
    const passwordVerification = $7ee95500f310dc9c$var$subarray(preamble, $7ee95500f310dc9c$var$SALT_LENGTH[strength]);
    if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) throw new Error((0, $2c2bd6ed85f5e732$export$91dc8f5b62a122fd));
}
async function $7ee95500f310dc9c$var$createEncryptionKeys(encrypt, strength, password) {
    const salt = (0, $2c2bd6ed85f5e732$export$960b9ff25e7d4257)(new Uint8Array($7ee95500f310dc9c$var$SALT_LENGTH[strength]));
    const passwordVerification = await $7ee95500f310dc9c$var$createKeys(encrypt, strength, password, salt);
    return $7ee95500f310dc9c$var$concat(salt, passwordVerification);
}
async function $7ee95500f310dc9c$var$createKeys(aesCrypto, strength, password, salt) {
    aesCrypto.password = null;
    const encodedPassword = (0, $26c9c6b6bd48ee69$export$7d0d7672e8a1c5cf)(password);
    const baseKey = await $7ee95500f310dc9c$var$importKey($7ee95500f310dc9c$var$RAW_FORMAT, encodedPassword, $7ee95500f310dc9c$var$BASE_KEY_ALGORITHM, false, $7ee95500f310dc9c$var$DERIVED_BITS_USAGE);
    const derivedBits = await $7ee95500f310dc9c$var$deriveBits(Object.assign({
        salt: salt
    }, $7ee95500f310dc9c$var$DERIVED_BITS_ALGORITHM), baseKey, 8 * ($7ee95500f310dc9c$var$KEY_LENGTH[strength] * 2 + 2));
    const compositeKey = new Uint8Array(derivedBits);
    const key = $7ee95500f310dc9c$var$toBits($7ee95500f310dc9c$var$codecBytes, $7ee95500f310dc9c$var$subarray(compositeKey, 0, $7ee95500f310dc9c$var$KEY_LENGTH[strength]));
    const authentication = $7ee95500f310dc9c$var$toBits($7ee95500f310dc9c$var$codecBytes, $7ee95500f310dc9c$var$subarray(compositeKey, $7ee95500f310dc9c$var$KEY_LENGTH[strength], $7ee95500f310dc9c$var$KEY_LENGTH[strength] * 2));
    const passwordVerification = $7ee95500f310dc9c$var$subarray(compositeKey, $7ee95500f310dc9c$var$KEY_LENGTH[strength] * 2);
    Object.assign(aesCrypto, {
        keys: {
            key: key,
            authentication: authentication,
            passwordVerification: passwordVerification
        },
        ctr: new $7ee95500f310dc9c$var$CtrGladman(new $7ee95500f310dc9c$var$Aes(key), Array.from($7ee95500f310dc9c$var$COUNTER_DEFAULT_VALUE)),
        hmac: new $7ee95500f310dc9c$var$HmacSha1(authentication)
    });
    return passwordVerification;
}
async function $7ee95500f310dc9c$var$importKey(format, password, algorithm, extractable, keyUsages) {
    if ($7ee95500f310dc9c$var$IMPORT_KEY_SUPPORTED) try {
        return await $7ee95500f310dc9c$var$subtle.importKey(format, password, algorithm, extractable, keyUsages);
    } catch (_error) {
        $7ee95500f310dc9c$var$IMPORT_KEY_SUPPORTED = false;
        return (0, $e31c6c3d9a051b4b$export$5675c2f3af4366e2).importKey(password);
    }
    else return (0, $e31c6c3d9a051b4b$export$5675c2f3af4366e2).importKey(password);
}
async function $7ee95500f310dc9c$var$deriveBits(algorithm, baseKey, length) {
    if ($7ee95500f310dc9c$var$DERIVE_BITS_SUPPORTED) try {
        return await $7ee95500f310dc9c$var$subtle.deriveBits(algorithm, baseKey, length);
    } catch (_error) {
        $7ee95500f310dc9c$var$DERIVE_BITS_SUPPORTED = false;
        return (0, $e31c6c3d9a051b4b$export$5675c2f3af4366e2).pbkdf2(baseKey, algorithm.salt, $7ee95500f310dc9c$var$DERIVED_BITS_ALGORITHM.iterations, length);
    }
    else return (0, $e31c6c3d9a051b4b$export$5675c2f3af4366e2).pbkdf2(baseKey, algorithm.salt, $7ee95500f310dc9c$var$DERIVED_BITS_ALGORITHM.iterations, length);
}
function $7ee95500f310dc9c$var$concat(leftArray, rightArray) {
    let array = leftArray;
    if (leftArray.length + rightArray.length) {
        array = new Uint8Array(leftArray.length + rightArray.length);
        array.set(leftArray, 0);
        array.set(rightArray, leftArray.length);
    }
    return array;
}
function $7ee95500f310dc9c$var$expand(inputArray, length) {
    if (length && length > inputArray.length) {
        const array = inputArray;
        inputArray = new Uint8Array(length);
        inputArray.set(array, 0);
    }
    return inputArray;
}
function $7ee95500f310dc9c$var$subarray(array, begin, end) {
    return array.subarray(begin, end);
}
function $7ee95500f310dc9c$var$fromBits(codecBytes, chunk) {
    return codecBytes.fromBits(chunk);
}
function $7ee95500f310dc9c$var$toBits(codecBytes, chunk) {
    return codecBytes.toBits(chunk);
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias


const $6aa82ab66de91941$var$HEADER_LENGTH = 12;
class $6aa82ab66de91941$export$e544bedcbaacddb4 extends TransformStream {
    constructor({ password: password , passwordVerification: passwordVerification , checkPasswordOnly: checkPasswordOnly  }){
        super({
            start () {
                Object.assign(this, {
                    password: password,
                    passwordVerification: passwordVerification
                });
                $6aa82ab66de91941$var$createKeys(this, password);
            },
            transform (chunk, controller) {
                const zipCrypto = this;
                if (zipCrypto.password) {
                    const decryptedHeader = $6aa82ab66de91941$var$decrypt(zipCrypto, chunk.subarray(0, $6aa82ab66de91941$var$HEADER_LENGTH));
                    zipCrypto.password = null;
                    if (decryptedHeader[$6aa82ab66de91941$var$HEADER_LENGTH - 1] != zipCrypto.passwordVerification) throw new Error((0, $2c2bd6ed85f5e732$export$91dc8f5b62a122fd));
                    chunk = chunk.subarray($6aa82ab66de91941$var$HEADER_LENGTH);
                }
                if (checkPasswordOnly) controller.error(new Error((0, $2c2bd6ed85f5e732$export$e6db2db9e24ceff8)));
                else controller.enqueue($6aa82ab66de91941$var$decrypt(zipCrypto, chunk));
            }
        });
    }
}
class $6aa82ab66de91941$export$6a553e0f48fe9272 extends TransformStream {
    constructor({ password: password , passwordVerification: passwordVerification  }){
        super({
            start () {
                Object.assign(this, {
                    password: password,
                    passwordVerification: passwordVerification
                });
                $6aa82ab66de91941$var$createKeys(this, password);
            },
            transform (chunk, controller) {
                const zipCrypto = this;
                let output;
                let offset;
                if (zipCrypto.password) {
                    zipCrypto.password = null;
                    const header = (0, $2c2bd6ed85f5e732$export$960b9ff25e7d4257)(new Uint8Array($6aa82ab66de91941$var$HEADER_LENGTH));
                    header[$6aa82ab66de91941$var$HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
                    output = new Uint8Array(chunk.length + header.length);
                    output.set($6aa82ab66de91941$var$encrypt(zipCrypto, header), 0);
                    offset = $6aa82ab66de91941$var$HEADER_LENGTH;
                } else {
                    output = new Uint8Array(chunk.length);
                    offset = 0;
                }
                output.set($6aa82ab66de91941$var$encrypt(zipCrypto, chunk), offset);
                controller.enqueue(output);
            }
        });
    }
}
function $6aa82ab66de91941$var$decrypt(target, input) {
    const output = new Uint8Array(input.length);
    for(let index = 0; index < input.length; index++){
        output[index] = $6aa82ab66de91941$var$getByte(target) ^ input[index];
        $6aa82ab66de91941$var$updateKeys(target, output[index]);
    }
    return output;
}
function $6aa82ab66de91941$var$encrypt(target, input) {
    const output = new Uint8Array(input.length);
    for(let index = 0; index < input.length; index++){
        output[index] = $6aa82ab66de91941$var$getByte(target) ^ input[index];
        $6aa82ab66de91941$var$updateKeys(target, input[index]);
    }
    return output;
}
function $6aa82ab66de91941$var$createKeys(target, password) {
    const keys = [
        0x12345678,
        0x23456789,
        0x34567890
    ];
    Object.assign(target, {
        keys: keys,
        crcKey0: new (0, $0fe927a90ceb1a3f$export$16d8d62894c71747)(keys[0]),
        crcKey2: new (0, $0fe927a90ceb1a3f$export$16d8d62894c71747)(keys[2])
    });
    for(let index = 0; index < password.length; index++)$6aa82ab66de91941$var$updateKeys(target, password.charCodeAt(index));
}
function $6aa82ab66de91941$var$updateKeys(target, byte) {
    let [key0, key1, key2] = target.keys;
    target.crcKey0.append([
        byte
    ]);
    key0 = ~target.crcKey0.get();
    key1 = $6aa82ab66de91941$var$getInt32(Math.imul($6aa82ab66de91941$var$getInt32(key1 + $6aa82ab66de91941$var$getInt8(key0)), 134775813) + 1);
    target.crcKey2.append([
        key1 >>> 24
    ]);
    key2 = ~target.crcKey2.get();
    target.keys = [
        key0,
        key1,
        key2
    ];
}
function $6aa82ab66de91941$var$getByte(target) {
    const temp = target.keys[2] | 2;
    return $6aa82ab66de91941$var$getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function $6aa82ab66de91941$var$getInt8(number) {
    return number & 0xFF;
}
function $6aa82ab66de91941$var$getInt32(number) {
    return number & 0xFFFFFFFF;
}



const $d35c37d9048d276e$var$COMPRESSION_FORMAT = "deflate-raw";
class $d35c37d9048d276e$export$f23141db764e06fe extends TransformStream {
    constructor(options, { chunkSize: chunkSize , CompressionStream: CompressionStream , CompressionStreamNative: CompressionStreamNative  }){
        super({});
        const { compressed: compressed , encrypted: encrypted , useCompressionStream: useCompressionStream , zipCrypto: zipCrypto , signed: signed , level: level  } = options;
        const stream = this;
        let crc32Stream, encryptionStream;
        let readable = $d35c37d9048d276e$var$filterEmptyChunks(super.readable);
        if ((!encrypted || zipCrypto) && signed) {
            [readable, crc32Stream] = readable.tee();
            crc32Stream = $d35c37d9048d276e$var$pipeThrough(crc32Stream, new (0, $eed2d8869a61cb67$export$b3cd3a37bd85e6ee)());
        }
        if (compressed) readable = $d35c37d9048d276e$var$pipeThroughCommpressionStream(readable, useCompressionStream, {
            level: level,
            chunkSize: chunkSize
        }, CompressionStreamNative, CompressionStream);
        if (encrypted) {
            if (zipCrypto) readable = $d35c37d9048d276e$var$pipeThrough(readable, new (0, $6aa82ab66de91941$export$6a553e0f48fe9272)(options));
            else {
                encryptionStream = new (0, $7ee95500f310dc9c$export$5eab59cbcb1482d5)(options);
                readable = $d35c37d9048d276e$var$pipeThrough(readable, encryptionStream);
            }
        }
        $d35c37d9048d276e$var$setReadable(stream, readable, async ()=>{
            let signature;
            if (encrypted && !zipCrypto) signature = encryptionStream.signature;
            if ((!encrypted || zipCrypto) && signed) {
                signature = await crc32Stream.getReader().read();
                signature = new DataView(signature.value.buffer).getUint32(0);
            }
            stream.signature = signature;
        });
    }
}
class $d35c37d9048d276e$export$12a3288b0c0341df extends TransformStream {
    constructor(options, { chunkSize: chunkSize , DecompressionStream: DecompressionStream , DecompressionStreamNative: DecompressionStreamNative  }){
        super({});
        const { zipCrypto: zipCrypto , encrypted: encrypted , signed: signed , signature: signature , compressed: compressed , useCompressionStream: useCompressionStream  } = options;
        let crc32Stream, decryptionStream;
        let readable = $d35c37d9048d276e$var$filterEmptyChunks(super.readable);
        if (encrypted) {
            if (zipCrypto) readable = $d35c37d9048d276e$var$pipeThrough(readable, new (0, $6aa82ab66de91941$export$e544bedcbaacddb4)(options));
            else {
                decryptionStream = new (0, $7ee95500f310dc9c$export$2bd61c0866eee75e)(options);
                readable = $d35c37d9048d276e$var$pipeThrough(readable, decryptionStream);
            }
        }
        if (compressed) readable = $d35c37d9048d276e$var$pipeThroughCommpressionStream(readable, useCompressionStream, {
            chunkSize: chunkSize
        }, DecompressionStreamNative, DecompressionStream);
        if ((!encrypted || zipCrypto) && signed) {
            [readable, crc32Stream] = readable.tee();
            crc32Stream = $d35c37d9048d276e$var$pipeThrough(crc32Stream, new (0, $eed2d8869a61cb67$export$b3cd3a37bd85e6ee)());
        }
        $d35c37d9048d276e$var$setReadable(this, readable, async ()=>{
            if ((!encrypted || zipCrypto) && signed) {
                const streamSignature = await crc32Stream.getReader().read();
                const dataViewSignature = new DataView(streamSignature.value.buffer);
                if (signature != dataViewSignature.getUint32(0, false)) throw new Error((0, $2c2bd6ed85f5e732$export$ae8341b00030fc9d));
            }
        });
    }
}
function $d35c37d9048d276e$var$filterEmptyChunks(readable) {
    return $d35c37d9048d276e$var$pipeThrough(readable, new TransformStream({
        transform (chunk, controller) {
            if (chunk && chunk.length) controller.enqueue(chunk);
        }
    }));
}
function $d35c37d9048d276e$var$setReadable(stream, readable, flush) {
    readable = $d35c37d9048d276e$var$pipeThrough(readable, new TransformStream({
        flush: flush
    }));
    Object.defineProperty(stream, "readable", {
        get () {
            return readable;
        }
    });
}
function $d35c37d9048d276e$var$pipeThroughCommpressionStream(readable, useCompressionStream, options, CodecStreamNative, CodecStream) {
    try {
        const CompressionStream = useCompressionStream && CodecStreamNative ? CodecStreamNative : CodecStream;
        readable = $d35c37d9048d276e$var$pipeThrough(readable, new CompressionStream($d35c37d9048d276e$var$COMPRESSION_FORMAT, options));
    } catch (error) {
        if (useCompressionStream) readable = $d35c37d9048d276e$var$pipeThrough(readable, new CodecStream($d35c37d9048d276e$var$COMPRESSION_FORMAT, options));
        else throw error;
    }
    return readable;
}
function $d35c37d9048d276e$var$pipeThrough(readable, transformStream) {
    return readable.pipeThrough(transformStream);
}


const $0ca1613652845fc5$export$7b364f17ef2dca82 = "message";
const $0ca1613652845fc5$export$c443c9777d3a700 = "start";
const $0ca1613652845fc5$export$62b45386af1a69d6 = "pull";
const $0ca1613652845fc5$export$c026d075734dfa81 = "data";
const $0ca1613652845fc5$export$94f33f60a013531c = "ack";
const $0ca1613652845fc5$export$9ac33487a6b3f22b = "close";
const $0ca1613652845fc5$export$c8ea3b6e95d7ab36 = "deflate";
const $0ca1613652845fc5$export$1c8ed04f989a62a8 = "inflate";
class $0ca1613652845fc5$export$5b4e81abd8ae50b3 extends TransformStream {
    constructor(options, config){
        super({});
        const codec = this;
        const { codecType: codecType  } = options;
        let Stream;
        if (codecType.startsWith($0ca1613652845fc5$export$c8ea3b6e95d7ab36)) Stream = (0, $d35c37d9048d276e$export$f23141db764e06fe);
        else if (codecType.startsWith($0ca1613652845fc5$export$1c8ed04f989a62a8)) Stream = (0, $d35c37d9048d276e$export$12a3288b0c0341df);
        let size = 0;
        const stream = new Stream(options, config);
        const readable = super.readable;
        const transformStream = new TransformStream({
            transform (chunk, controller) {
                if (chunk && chunk.length) {
                    size += chunk.length;
                    controller.enqueue(chunk);
                }
            },
            flush () {
                const { signature: signature  } = stream;
                Object.assign(codec, {
                    signature: signature,
                    size: size
                });
            }
        });
        Object.defineProperty(codec, "readable", {
            get () {
                return readable.pipeThrough(stream).pipeThrough(transformStream);
            }
        });
    }
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global Worker, URL, TransformStream, WritableStream */ 

// deno-lint-ignore valid-typeof
const $0b33c5a95b8d8340$var$WEB_WORKERS_SUPPORTED = typeof Worker != (0, $cb6f24583fb9d4f7$export$817d840279c95122);
class $0b33c5a95b8d8340$export$fca1864ffae7c17d {
    constructor(workerData, { readable: readable , writable: writable  }, { options: options , config: config , streamOptions: streamOptions , useWebWorkers: useWebWorkers , transferStreams: transferStreams , scripts: scripts  }, onTaskFinished){
        const { signal: signal  } = streamOptions;
        Object.assign(workerData, {
            busy: true,
            readable: readable.pipeThrough(new $0b33c5a95b8d8340$var$ProgressWatcherStream(readable, streamOptions, config), {
                signal: signal
            }),
            writable: writable,
            options: Object.assign({}, options),
            scripts: scripts,
            transferStreams: transferStreams,
            terminate () {
                const { worker: worker , busy: busy  } = workerData;
                if (worker && !busy) {
                    worker.terminate();
                    workerData.interface = null;
                }
            },
            onTaskFinished () {
                workerData.busy = false;
                onTaskFinished(workerData);
            }
        });
        return (useWebWorkers && $0b33c5a95b8d8340$var$WEB_WORKERS_SUPPORTED ? $0b33c5a95b8d8340$var$createWebWorkerInterface : $0b33c5a95b8d8340$var$createWorkerInterface)(workerData, config);
    }
}
class $0b33c5a95b8d8340$var$ProgressWatcherStream extends TransformStream {
    constructor(readableSource, { onstart: onstart , onprogress: onprogress , size: size , onend: onend  }, { chunkSize: chunkSize  }){
        let chunkOffset = 0;
        super({
            start () {
                if (onstart) $0b33c5a95b8d8340$var$callHandler(onstart, size);
            },
            async transform (chunk, controller) {
                chunkOffset += chunk.length;
                if (onprogress) await $0b33c5a95b8d8340$var$callHandler(onprogress, chunkOffset, size);
                controller.enqueue(chunk);
            },
            flush () {
                readableSource.size = chunkOffset;
                if (onend) $0b33c5a95b8d8340$var$callHandler(onend, chunkOffset);
            }
        }, {
            highWaterMark: 1,
            size: ()=>chunkSize
        });
    }
}
async function $0b33c5a95b8d8340$var$callHandler(handler, ...parameters) {
    try {
        await handler(...parameters);
    } catch (_error) {
    // ignored
    }
}
function $0b33c5a95b8d8340$var$createWorkerInterface(workerData, config) {
    return {
        run: ()=>$0b33c5a95b8d8340$var$runWorker(workerData, config)
    };
}
function $0b33c5a95b8d8340$var$createWebWorkerInterface(workerData, { baseURL: baseURL , chunkSize: chunkSize  }) {
    if (!workerData.interface) Object.assign(workerData, {
        worker: $0b33c5a95b8d8340$var$getWebWorker(workerData.scripts[0], baseURL, workerData),
        interface: {
            run: ()=>$0b33c5a95b8d8340$var$runWebWorker(workerData, {
                    chunkSize: chunkSize
                })
        }
    });
    return workerData.interface;
}
async function $0b33c5a95b8d8340$var$runWorker({ options: options , readable: readable , writable: writable , onTaskFinished: onTaskFinished  }, config) {
    const codecStream = new (0, $0ca1613652845fc5$export$5b4e81abd8ae50b3)(options, config);
    try {
        await readable.pipeThrough(codecStream).pipeTo(writable, {
            preventClose: true,
            preventAbort: true
        });
        const { signature: signature , size: size  } = codecStream;
        return {
            signature: signature,
            size: size
        };
    } finally{
        onTaskFinished();
    }
}
async function $0b33c5a95b8d8340$var$runWebWorker(workerData, config) {
    let resolveResult, rejectResult;
    const result = new Promise((resolve, reject)=>{
        resolveResult = resolve;
        rejectResult = reject;
    });
    Object.assign(workerData, {
        reader: null,
        writer: null,
        resolveResult: resolveResult,
        rejectResult: rejectResult,
        result: result
    });
    const { readable: readable , options: options , scripts: scripts  } = workerData;
    const { writable: writable , closed: closed  } = $0b33c5a95b8d8340$var$watchClosedStream(workerData.writable);
    const streamsTransferred = $0b33c5a95b8d8340$var$sendMessage({
        type: (0, $0ca1613652845fc5$export$c443c9777d3a700),
        scripts: scripts.slice(1),
        options: options,
        config: config,
        readable: readable,
        writable: writable
    }, workerData);
    if (!streamsTransferred) Object.assign(workerData, {
        reader: readable.getReader(),
        writer: writable.getWriter()
    });
    const resultValue = await result;
    try {
        await writable.close();
    } catch (_error) {
    // ignored
    }
    await closed;
    return resultValue;
}
function $0b33c5a95b8d8340$var$watchClosedStream(writableSource) {
    const writer = writableSource.getWriter();
    let resolveStreamClosed;
    const closed = new Promise((resolve)=>resolveStreamClosed = resolve);
    const writable = new WritableStream({
        async write (chunk) {
            await writer.ready;
            await writer.write(chunk);
        },
        close () {
            writer.releaseLock();
            resolveStreamClosed();
        },
        abort (reason) {
            return writer.abort(reason);
        }
    });
    return {
        writable: writable,
        closed: closed
    };
}
let $0b33c5a95b8d8340$var$classicWorkersSupported = true;
let $0b33c5a95b8d8340$var$transferStreamsSupported = true;
function $0b33c5a95b8d8340$var$getWebWorker(url, baseURL, workerData) {
    const workerOptions = {
        type: "module"
    };
    let scriptUrl, worker;
    // deno-lint-ignore valid-typeof
    if (typeof url == (0, $cb6f24583fb9d4f7$export$31a3bc04c4494acf)) url = url();
    try {
        scriptUrl = new URL(url, baseURL);
    } catch (_error) {
        scriptUrl = url;
    }
    if ($0b33c5a95b8d8340$var$classicWorkersSupported) try {
        worker = new Worker(scriptUrl);
    } catch (_error) {
        $0b33c5a95b8d8340$var$classicWorkersSupported = false;
        worker = new Worker(scriptUrl, workerOptions);
    }
    else worker = new Worker(scriptUrl, workerOptions);
    worker.addEventListener((0, $0ca1613652845fc5$export$7b364f17ef2dca82), (event)=>$0b33c5a95b8d8340$var$onMessage(event, workerData));
    return worker;
}
function $0b33c5a95b8d8340$var$sendMessage(message, { worker: worker , writer: writer , onTaskFinished: onTaskFinished , transferStreams: transferStreams  }) {
    try {
        let { value: value , readable: readable , writable: writable  } = message;
        const transferables = [];
        if (value) {
            const { buffer: buffer , length: length  } = value;
            if (length != buffer.byteLength) value = new Uint8Array(value);
            message.value = value.buffer;
            transferables.push(message.value);
        }
        if (transferStreams && $0b33c5a95b8d8340$var$transferStreamsSupported) {
            if (readable) transferables.push(readable);
            if (writable) transferables.push(writable);
        } else message.readable = message.writable = null;
        if (transferables.length) try {
            worker.postMessage(message, transferables);
            return true;
        } catch (_error) {
            $0b33c5a95b8d8340$var$transferStreamsSupported = false;
            message.readable = message.writable = null;
            worker.postMessage(message);
        }
        else worker.postMessage(message);
    } catch (error) {
        if (writer) writer.releaseLock();
        onTaskFinished();
        throw error;
    }
}
async function $0b33c5a95b8d8340$var$onMessage({ data: data  }, workerData) {
    const { type: type , value: value , messageId: messageId , result: result , error: error  } = data;
    const { reader: reader , writer: writer , resolveResult: resolveResult , rejectResult: rejectResult , onTaskFinished: onTaskFinished  } = workerData;
    try {
        if (error) {
            const { message: message , stack: stack , code: code , name: name  } = error;
            const responseError = new Error(message);
            Object.assign(responseError, {
                stack: stack,
                code: code,
                name: name
            });
            close(responseError);
        } else {
            if (type == (0, $0ca1613652845fc5$export$62b45386af1a69d6)) {
                const { value: value , done: done  } = await reader.read();
                $0b33c5a95b8d8340$var$sendMessage({
                    type: (0, $0ca1613652845fc5$export$c026d075734dfa81),
                    value: value,
                    done: done,
                    messageId: messageId
                }, workerData);
            }
            if (type == (0, $0ca1613652845fc5$export$c026d075734dfa81)) {
                await writer.ready;
                await writer.write(new Uint8Array(value));
                $0b33c5a95b8d8340$var$sendMessage({
                    type: (0, $0ca1613652845fc5$export$94f33f60a013531c),
                    messageId: messageId
                }, workerData);
            }
            if (type == (0, $0ca1613652845fc5$export$9ac33487a6b3f22b)) close(null, result);
        }
    } catch (error) {
        close(error);
    }
    function close(error, result) {
        if (error) rejectResult(error);
        else resolveResult(result);
        if (writer) writer.releaseLock();
        onTaskFinished();
    }
}


let $eb7b040113c02588$var$pool = [];
const $eb7b040113c02588$var$pendingRequests = [];
let $eb7b040113c02588$var$indexWorker = 0;
async function $eb7b040113c02588$export$dd2e08b4a54c623f(stream, workerOptions) {
    const { options: options , config: config  } = workerOptions;
    const { transferStreams: transferStreams , useWebWorkers: useWebWorkers , useCompressionStream: useCompressionStream , codecType: codecType , compressed: compressed , signed: signed , encrypted: encrypted  } = options;
    const { workerScripts: workerScripts , maxWorkers: maxWorkers , terminateWorkerTimeout: terminateWorkerTimeout  } = config;
    workerOptions.transferStreams = transferStreams || transferStreams === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd);
    const streamCopy = !compressed && !signed && !encrypted && !workerOptions.transferStreams;
    workerOptions.useWebWorkers = !streamCopy && (useWebWorkers || useWebWorkers === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) && config.useWebWorkers);
    workerOptions.scripts = workerOptions.useWebWorkers && workerScripts ? workerScripts[codecType] : [];
    options.useCompressionStream = useCompressionStream || useCompressionStream === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) && config.useCompressionStream;
    let worker;
    const workerData = $eb7b040113c02588$var$pool.find((workerData)=>!workerData.busy);
    if (workerData) {
        $eb7b040113c02588$var$clearTerminateTimeout(workerData);
        worker = new (0, $0b33c5a95b8d8340$export$fca1864ffae7c17d)(workerData, stream, workerOptions, onTaskFinished);
    } else if ($eb7b040113c02588$var$pool.length < maxWorkers) {
        const workerData = {
            indexWorker: $eb7b040113c02588$var$indexWorker
        };
        $eb7b040113c02588$var$indexWorker++;
        $eb7b040113c02588$var$pool.push(workerData);
        worker = new (0, $0b33c5a95b8d8340$export$fca1864ffae7c17d)(workerData, stream, workerOptions, onTaskFinished);
    } else worker = await new Promise((resolve)=>$eb7b040113c02588$var$pendingRequests.push({
            resolve: resolve,
            stream: stream,
            workerOptions: workerOptions
        }));
    return worker.run();
    function onTaskFinished(workerData) {
        if ($eb7b040113c02588$var$pendingRequests.length) {
            const [{ resolve: resolve , stream: stream , workerOptions: workerOptions  }] = $eb7b040113c02588$var$pendingRequests.splice(0, 1);
            resolve(new (0, $0b33c5a95b8d8340$export$fca1864ffae7c17d)(workerData, stream, workerOptions, onTaskFinished));
        } else if (workerData.worker) {
            $eb7b040113c02588$var$clearTerminateTimeout(workerData);
            if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) workerData.terminateTimeout = setTimeout(()=>{
                $eb7b040113c02588$var$pool = $eb7b040113c02588$var$pool.filter((data)=>data != workerData);
                workerData.terminate();
            }, terminateWorkerTimeout);
        } else $eb7b040113c02588$var$pool = $eb7b040113c02588$var$pool.filter((data)=>data != workerData);
    }
}
function $eb7b040113c02588$var$clearTerminateTimeout(workerData) {
    const { terminateTimeout: terminateTimeout  } = workerData;
    if (terminateTimeout) {
        clearTimeout(terminateTimeout);
        workerData.terminateTimeout = null;
    }
}
function $eb7b040113c02588$export$797d499998d6363b() {
    $eb7b040113c02588$var$pool.forEach((workerData)=>{
        $eb7b040113c02588$var$clearTerminateTimeout(workerData);
        workerData.terminate();
    });
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ 
function $6561ad2b1cab3e5c$export$2bee588cb9b7b41d(e) {
    const t = ()=>URL.createObjectURL(new Blob([
            'const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self;class k{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const v=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;v[e]=t}class S{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^v[255&(t^e[n])];this.t=t}get(){return~this.t}}class z extends p{constructor(){const e=new S;super({transform(t){e.append(t)},flush(t){const n=new i(4);new l(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}}const C={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=C.i(n);return 32===r?e.concat(t):C.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+C.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=C.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=C.i(s);return r.push(C.h(t+i&31,t+i>32?n:r.pop(),1)),r}},x={p:{m(e){const t=C.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)0==(3&s)&&(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},g(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3==(3&n)&&(t.push(r),r=0);return 3&n&&t.push(C.h(8*(3&n),r)),t}}},_=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=x.A.g(e));const n=t.C=C.concat(t.C,e),r=t._,i=t._=r+C.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.C;const n=e.S;t=C.concat(t,[C.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.I(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}P(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.P(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.P(5,o)+n.V(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.P(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},A={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},I={importKey:e=>new I.R(x.p.g(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=C;for(t=x.p.g(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=_,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.U=new n(t.K[0])}reset(){const e=this;e.U=new e.M(e.K[0]),e.N=!1}update(e){this.N=!0,this.U.update(e)}digest(){const e=this,t=e.U.D(),n=new e.M(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},D=void 0!==h&&"function"==typeof h.getRandomValues,V="Invalid password",P="Invalid signature",R="zipjs-abort-check-password";function B(e){return D?h.getRandomValues(e):A.getRandomValues(e)}const E=16,M={name:"PBKDF2"},K=t.assign({hash:{name:"HMAC"}},M),U=t.assign({iterations:1e3,hash:{name:"SHA-1"}},M),N=["deriveBits"],O=[8,12,16],T=[16,24,32],W=10,j=[0,0,0,0],H="undefined",L="function",F=typeof h!=H,q=F&&h.subtle,G=F&&typeof q!=H,J=x.p,Q=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},X=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=C.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return C.u(t,s)}},Y=I.R;let Z=F&&G&&typeof q.importKey==L,$=F&&G&&typeof q.deriveBits==L;class ee extends p{constructor({password:e,signed:n,encryptionStrength:r,checkPasswordOnly:o}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,signed:n,X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:c,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await re(e,t,n,ie(r,0,O[t])),o=ie(r,O[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(V)})(n,c,r,ie(e,0,O[c]+2)),e=ie(e,O[c]+2),o?t.error(new s(R)):f()):await a;const l=new i(e.length-W-(e.length-W)%E);t.enqueue(ne(n,e,l,0,W,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;await c;const f=ie(o,0,o.length-W),a=ie(o,o.length-W);let l=new i;if(f.length){const e=ce(J,f);r.update(e);const t=n.update(e);l=oe(J,t)}if(t){const e=ie(oe(J,r.digest()),0,W);for(let t=0;W>t;t++)if(e[t]!=a[t])throw new s(P)}e.enqueue(l)}})}}class te extends p{constructor({password:e,encryptionStrength:n}){let r;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,X:n-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=B(new i(O[t]));return se(r,await re(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%E);a.set(f,0),t.enqueue(ne(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:s,ready:o}=this;await o;let c=new i;if(s.length){const e=t.update(ce(J,s));n.update(e),c=oe(J,e)}r.signature=oe(J,n.digest()).slice(0,W),e.enqueue(se(c,r.signature))}}),r=this}}function ne(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=se(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%E)),u=0;l-E>=u;u+=E){const e=ce(J,ie(t,u,u+E));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(oe(J,s),u+r)}return e.pending=ie(t,u),n}async function re(n,r,s,o){n.password=null;const c=(e=>{if(void 0===w){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(s),f=await(async(e,t,n,r,s)=>{if(!Z)return I.importKey(t);try{return await q.importKey("raw",t,n,!1,s)}catch(e){return Z=!1,I.importKey(t)}})(0,c,K,0,N),a=await(async(e,t,n)=>{if(!$)return I.B(t,e.salt,U.iterations,n);try{return await q.deriveBits(e,t,n)}catch(r){return $=!1,I.B(t,e.salt,U.iterations,n)}})(t.assign({salt:o},U),f,8*(2*T[r]+2)),l=new i(a),u=ce(J,ie(l,0,T[r])),h=ce(J,ie(l,T[r],2*T[r])),d=ie(l,2*T[r]);return t.assign(n,{keys:{key:u,$:h,passwordVerification:d},Y:new X(new Q(u),e.from(j)),Z:new Y(h)}),d}function se(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ie(e,t,n){return e.subarray(t,n)}function oe(e,t){return e.m(t)}function ce(e,t){return e.g(t)}class fe extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;if(n.password){const t=le(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(V);e=e.subarray(12)}r?t.error(new s(R)):t.enqueue(le(n,e))}})}}class ae extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=B(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(ue(n,t),0),s=12}else r=new i(e.length),s=0;r.set(ue(n,e),s),t.enqueue(r)}})}}function le(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,n[r]);return n}function ue(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,t[r]);return n}function we(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new S(r[0]),te:new S(r[2])});for(let t=0;t<n.length;t++)he(e,n.charCodeAt(t))}function he(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=ye(r.imul(ye(s+pe(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function de(e){const t=2|e.keys[2];return pe(r.imul(t,1^t)>>>8)}function pe(e){return 255&e}function ye(e){return 4294967295&e}const me="deflate-raw";class be extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=ke(super.readable);i&&!c||!f||([d,w]=d.tee(),w=ze(w,new z)),s&&(d=Se(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=ze(d,new ae(e)):(h=new te(e),d=ze(d,h))),ve(u,d,(async()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=await w.getReader().read(),e=new l(e.value.buffer).getUint32(0)),u.signature=e}))}}class ge extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=ke(super.readable);o&&(i?d=ze(d,new fe(e)):(h=new ee(e),d=ze(d,h))),a&&(d=Se(d,u,{chunkSize:t},r,n)),o&&!i||!c||([d,w]=d.tee(),w=ze(w,new z)),ve(this,d,(async()=>{if((!o||i)&&c){const e=await w.getReader().read(),t=new l(e.value.buffer);if(f!=t.getUint32(0,!1))throw new s(P)}}))}}function ke(e){return ze(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ve(e,n,r){n=ze(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Se(e,t,n,r,s){try{e=ze(e,new(t&&r?r:s)(me,n))}catch(r){if(!t)throw r;e=ze(e,new s(me,n))}return e}function ze(e,t){return e.pipeThrough(t)}const Ce="data";class xe extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=be:s.startsWith("inflate")&&(i=ge);let o=0;const c=new i(e,n),f=super.readable,a=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=c;t.assign(r,{signature:e,size:o})}});t.defineProperty(r,"readable",{get:()=>f.pipeThrough(c).pipeThrough(a)})}}const _e=new a,Ae=new a;let Ie=0;async function De(e){try{const{options:t,scripts:r,config:s}=e;r&&r.length&&importScripts.apply(void 0,r),self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new k(self.Deflate)),self.Inflate&&(s.DecompressionStream=new k(self.Inflate));const i={highWaterMark:1,size:()=>s.chunkSize},o=e.readable||new y({async pull(e){const t=new u((e=>_e.set(Ie,e)));Ve({type:"pull",messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ae.set(Ie,t),Ve({type:Ce,value:e,messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new xe(t,s);await o.pipeThrough(f).pipeTo(c,{preventClose:!0,preventAbort:!0});try{await c.close()}catch(e){}const{signature:a,size:l}=f;Ve({type:"close",result:{signature:a,size:l}})}catch(e){Pe(e)}}function Ve(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Pe(e){const{message:t,stack:n,code:r,name:s}=e;d({error:{message:t,stack:n,code:r,name:s}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&De(e),t==Ce){const e=_e.get(n);_e.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ae.get(n);Ae.delete(n),e()}}catch(e){Pe(e)}}));const Re=-2;function Be(t){return Ee(t.map((([t,n])=>new e(t).fill(n,0,t))))}function Ee(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?Ee(n):n)),[])}const Me=[0,1,2,3].concat(...Be([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Ke(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Ue(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}Ke.ge=[0,1,2,3,4,5,6,7].concat(...Be([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Ke.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Ke.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Ke.Se=e=>256>e?Me[e]:Me[256+(e>>>7)],Ke.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ke.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ke.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ke._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ne=Be([[144,8],[112,9],[24,7],[8,8]]);Ue.Ae=Ee([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ne[t]])));const Oe=Be([[30,5]]);function Te(e,t,n,r,s){const i=this;i.Ie=e,i.De=t,i.Ve=n,i.Pe=r,i.Re=s}Ue.Be=Ee([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,Oe[t]]))),Ue.Ee=new Ue(Ue.Ae,Ke.ze,257,286,15),Ue.Me=new Ue(Ue.Be,Ke.Ce,0,30,15),Ue.Ke=new Ue(null,Ke.xe,0,19,7);const We=[new Te(0,0,0,0,0),new Te(4,4,8,4,1),new Te(4,5,16,8,1),new Te(4,6,32,32,1),new Te(4,4,16,16,2),new Te(8,16,32,32,2),new Te(8,16,128,128,2),new Te(8,32,128,256,2),new Te(32,128,258,1024,2),new Te(32,258,258,4096,2)],je=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],He=113,Le=666,Fe=262;function qe(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function Ge(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,_,A,I,D,V,P,R,B,E,M,K;const U=new Ke,N=new Ke,O=new Ke;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)K[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?K[2*n]+=i:0!==n?(n!=r&&K[2*n]++,K[32]++):i>10?K[36]++:K[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ue[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,K)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,K),o--),Y(16,K),X(o-3,2)):o>10?(Y(18,K),X(o-11,7)):(Y(17,K),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(Ke.ge[n]+256+1)]++,M[2*Ke.Se(t)]++),0==(8191&W)&&V>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+Ke.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=Ke.ge[s],Y(i+256+1,t),o=Ke.ze[i],0!==o&&(s-=Ke.ke[i],X(s,o)),r--,i=Ke.Se(r),Y(i,n),o=Ke.Ce[i],0!==o&&(r-=Ke.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ue.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;V>0?(U.ne(e),N.ne(e),o=(()=>{let t;for(G(E,U.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===K[2*Ke._e[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Ue.Ae,Ue.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(K[2*Ke._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(U.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-_-C,0===s&&0===C&&0===_)s=f;else if(-1==s)s--;else if(C>=f+f-Fe){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+_,s),_+=e,3>_||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Fe>_&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=A;const o=C>f-Fe?C-(f-Fe):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>A||(r>>=2),c>_&&(c=_);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>_?_:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],K=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&qe(t,r[i+1],r[i],e.le)&&i++,!qe(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Re:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ue=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),V=S,P=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=He,c=0,U.re=E,U.ie=Ue.Ee,N.re=M,N.ie=Ue.Me,O.re=K,O.ie=Ue.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe,C=0,k=0,_=0,v=A=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=He&&n!=Le?Re:(e.Oe=null,e.Ne=null,e.Ue=null,d=null,h=null,u=null,e.Fe=null,n==He?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Re:(We[V].Re!=We[t].Re&&0!==e.qe&&(r=e.Ye(1)),V!=t&&(V=t,D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe),P=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Re;if(3>i)return 0;for(i>f-Fe&&(i=f-Fe,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Re;if(!r.$e||!r.et&&0!==r.We||n==Le&&4!=i)return r.Le=je[4],Re;if(0===r.tt)return r.Le=je[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(V-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=He,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=je[7],-5;if(n==Le&&0!==t.We)return r.Le=je[7],-5;if(0!==t.We||0!==_||0!=i&&n!=Le){switch(R=-1,We[V].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=_){if(ie(),0===_&&0==e)return 0;if(0===_)break}if(C+=_,_=0,n=k+r,(0===C||C>=n)&&(_=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Fe&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Fe||2!=P&&(v=oe(r)),3>v)n=ee(0,255&u[C]),_--,C++;else if(n=ee(C-x,v-3),_-=v,v>D||3>_)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),A=v,S=x,v=2,0!==s&&D>A&&f-Fe>=(C-s&65535)&&(2!=P&&(v=oe(s)),5>=v&&(1==P||3==v&&C-x>4096)&&(v=2)),3>A||v>A)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,_--,0===t.tt)return 0}else z=1,C++,_--;else{r=C+_-3,n=ee(C-1-S,A-3),_-=A-1,A-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--A);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Le),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Ue.Ae),$(),9>1+H+10-F&&(X(2,3),Y(256,Ue.Ae),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function Je(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function Qe(e){const t=new Je,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.slice(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]||new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}Je.prototype={He(e,t){const n=this;return n.Fe=new Ge,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Re},Qe(){const e=this;if(!e.Fe)return Re;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Re},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Re},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ue.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const Xe=-2,Ye=-3,Ze=-5,$e=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],et=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],tt=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],nt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],rt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],st=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],it=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ot(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,_,A,I,D;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return Ye;if(0>(I-=n[g]))return Ye;for(n[g]+=I,i[1]=k=0,C=1,A=2;0!=--g;)i[A]=k+=n[C],A++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,_=-S,s[0]=0,x=0,D=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>_+S;){if(b++,_+=S,D=m-_,D=D>S?S:D,(y=1<<(k=v-_))>p+1&&(y-=p+1,A=v,D>k))for(;++k<D&&(y<<=1)>n[++A];)y-=n[A];if(D=1<<k,h[0]+D>1440)return Ye;s[b]=x=h[0],h[0]+=D,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>_-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-_,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-_,k=g>>>_;D>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;0!=(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<_)-1;(g&z)!=i[b];)b--,_-=S,z=(1<<_)-1}return 0!==I&&1!=m?Ze:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==Ye?f.Le="oversubscribed dynamic bit lengths tree":a!=Ze&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=Ye),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,nt,rt,a,i,u,e,t),0!=h||0===i[0]?(h==Ye?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=Ye),h):(c(288),h=o(s,n,r,0,st,it,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==Ye?w.Le="oversubscribed distance tree":h==Ze?(w.Le="incomplete distance tree",h=Ye):-4!=h&&(w.Le="empty distance tree with lengths",h=Ye),h):0)}}function ct(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=$e[e],g=$e[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15,k=a[z+2]+(w&$e[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&$e[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(0!=(64&u))return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye;f+=a[z+2],f+=w&$e[u],z=3*(l+f),u=a[z]}break}if(0!=(64&u))return 0!=(32&u)?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye);if(f+=a[z+2],f+=w&$e[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,_=0,A=0;for(A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,m=p(u,w,r,h,s,d,e,y),A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>>=n[g+1],_-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(0!=(16&k)){a=15&k,i=n[g+2],t=2;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}if(0!=(32&k)){t=7;break}return t=9,y.Le="invalid literal/length code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 2:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}i+=x&$e[b],x>>=b,_-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>=n[g+1],_-=n[g+1],k=n[g],0!=(16&k)){a=15&k,l=n[g+2],t=4;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 4:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}l+=x&$e[b],x>>=b,_-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(_>7&&(_-=8,v++,A--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 9:return m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);default:return m=Xe,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ot.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=et,r[0]=tt,0);const ft=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function at(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new ct;let h=0,d=new f(4320);const p=new ot;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,_,A,I,D;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ot.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[ft[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[ft[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==Ye&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&$e[i]))+1],w=d[3*(u[0]+(f&$e[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&$e[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,_=[],A=[],I=[],D=[],_[0]=9,A[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,_,A,I,D,d,e),0!=i)return i==Ye&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(_[0],A[0],d,I[0],d,D[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=Xe,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const lt=13,ut=[0,0,255,255];function wt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):Xe}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),Xe):(e.zt=r,n.gt.kt=new at(n,1<<r),t(n),0)),e._t=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return Xe;const s=e.gt;for(t=4==t?Ze:0,n=Ze;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=lt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=lt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=lt,e.Le="incorrect header check",s.marker=5;break}if(0==(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=lt,e.Le="need dictionary",s.marker=0,Xe;case 7:if(n=s.kt.ut(e,n),n==Ye){s.mode=lt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case lt:return Ye;default:return Xe}},e.At=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return Xe;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return Xe;const c=e.gt;if(c.mode!=lt&&(c.mode=lt,c.marker=0),0===(n=e.We))return Ze;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==ut[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?Ye:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Dt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():Xe}function ht(){}function dt(e){const t=new ht,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t._t(0),c&&a===Ze){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.slice(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]||new i,l}},this.flush=()=>{t.Ct()}}ht.prototype={xt(e){const t=this;return t.gt=new wt,e||(e=15),t.gt.xt(t,e)},_t(e){const t=this;return t.gt?t.gt._t(t,e):Xe},Ct(){const e=this;if(!e.gt)return Xe;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):Xe},At(e,t){const n=this;return n.gt?n.gt.At(n,e,t):Xe},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=Qe,self.Inflate=dt};\n'
        ], {
            type: "text/javascript"
        }));
    e({
        workerScripts: {
            inflate: [
                t
            ],
            deflate: [
                t
            ]
        }
    });
}



/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // deno-lint-ignore-file no-this-alias
function $af7fb5069f7ed6ed$export$9b952ca07c20c1ad(library, options = {}, registerDataHandler) {
    return {
        Deflate: $af7fb5069f7ed6ed$var$createCodecClass(library.Deflate, options.deflate, registerDataHandler),
        Inflate: $af7fb5069f7ed6ed$var$createCodecClass(library.Inflate, options.inflate, registerDataHandler)
    };
}
function $af7fb5069f7ed6ed$var$createCodecClass(constructor, constructorOptions, registerDataHandler) {
    return class {
        constructor(options){
            const codecAdapter = this;
            const onData = (data)=>{
                if (codecAdapter.pendingData) {
                    const previousPendingData = codecAdapter.pendingData;
                    codecAdapter.pendingData = new Uint8Array(previousPendingData.length + data.length);
                    const { pendingData: pendingData  } = codecAdapter;
                    pendingData.set(previousPendingData, 0);
                    pendingData.set(data, previousPendingData.length);
                } else codecAdapter.pendingData = new Uint8Array(data);
            };
            if (Object.hasOwn(options, "level") && options.level === undefined) delete options.level;
            codecAdapter.codec = new constructor(Object.assign({}, constructorOptions, options));
            registerDataHandler(codecAdapter.codec, onData);
        }
        append(data) {
            this.codec.push(data);
            return getResponse(this);
        }
        flush() {
            this.codec.push(new Uint8Array(), true);
            return getResponse(this);
        }
    };
    function getResponse(codec) {
        if (codec.pendingData) {
            const output = codec.pendingData;
            codec.pendingData = null;
            return output;
        } else return new Uint8Array();
    }
}



/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global Blob, atob, btoa, XMLHttpRequest, URL, fetch, ReadableStream, WritableStream, FileReader, TransformStream, Response */ // deno-lint-ignore-file no-this-alias


const $53e25169918aa98b$var$ERR_HTTP_STATUS = "HTTP error ";
const $53e25169918aa98b$export$b71577fe3c3fd8a2 = "HTTP Range not supported";
const $53e25169918aa98b$export$7fd7075d73b79aba = "Writer iterator completed too soon";
const $53e25169918aa98b$var$CONTENT_TYPE_TEXT_PLAIN = "text/plain";
const $53e25169918aa98b$var$HTTP_HEADER_CONTENT_LENGTH = "Content-Length";
const $53e25169918aa98b$var$HTTP_HEADER_CONTENT_RANGE = "Content-Range";
const $53e25169918aa98b$var$HTTP_HEADER_ACCEPT_RANGES = "Accept-Ranges";
const $53e25169918aa98b$var$HTTP_HEADER_RANGE = "Range";
const $53e25169918aa98b$var$HTTP_HEADER_CONTENT_TYPE = "Content-Type";
const $53e25169918aa98b$var$HTTP_METHOD_HEAD = "HEAD";
const $53e25169918aa98b$var$HTTP_METHOD_GET = "GET";
const $53e25169918aa98b$var$HTTP_RANGE_UNIT = "bytes";
const $53e25169918aa98b$var$DEFAULT_CHUNK_SIZE = 65536;
const $53e25169918aa98b$var$PROPERTY_NAME_WRITABLE = "writable";
class $53e25169918aa98b$var$Stream {
    constructor(){
        this.size = 0;
    }
    init() {
        this.initialized = true;
    }
}
class $53e25169918aa98b$export$2f7a2f0e90c07dc4 extends $53e25169918aa98b$var$Stream {
    get readable() {
        const reader = this;
        const { chunkSize: chunkSize = $53e25169918aa98b$var$DEFAULT_CHUNK_SIZE  } = reader;
        const readable = new ReadableStream({
            start () {
                this.chunkOffset = 0;
            },
            async pull (controller) {
                const { offset: offset = 0 , size: size , diskNumberStart: diskNumberStart  } = readable;
                const { chunkOffset: chunkOffset  } = this;
                controller.enqueue(await $53e25169918aa98b$export$e21b2fe168d56a89(reader, offset + chunkOffset, Math.min(chunkSize, size - chunkOffset), diskNumberStart));
                if (chunkOffset + chunkSize > size) controller.close();
                else this.chunkOffset += chunkSize;
            }
        });
        return readable;
    }
}
class $53e25169918aa98b$export$d7a960146e1a269e extends $53e25169918aa98b$var$Stream {
    constructor(){
        super();
        const writer = this;
        const writable = new WritableStream({
            write (chunk) {
                return writer.writeUint8Array(chunk);
            }
        });
        Object.defineProperty(writer, $53e25169918aa98b$var$PROPERTY_NAME_WRITABLE, {
            get () {
                return writable;
            }
        });
    }
    writeUint8Array() {
    // abstract
    }
}
class $53e25169918aa98b$export$b43666fe9f809ae0 extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(dataURI){
        super();
        let dataEnd = dataURI.length;
        while(dataURI.charAt(dataEnd - 1) == "=")dataEnd--;
        const dataStart = dataURI.indexOf(",") + 1;
        Object.assign(this, {
            dataURI: dataURI,
            dataStart: dataStart,
            size: Math.floor((dataEnd - dataStart) * 0.75)
        });
    }
    readUint8Array(offset, length) {
        const { dataStart: dataStart , dataURI: dataURI  } = this;
        const dataArray = new Uint8Array(length);
        const start = Math.floor(offset / 3) * 4;
        const bytes = atob(dataURI.substring(start + dataStart, Math.ceil((offset + length) / 3) * 4 + dataStart));
        const delta = offset - Math.floor(start / 4) * 3;
        for(let indexByte = delta; indexByte < delta + length; indexByte++)dataArray[indexByte - delta] = bytes.charCodeAt(indexByte);
        return dataArray;
    }
}
class $53e25169918aa98b$export$e54009c5f365f844 extends $53e25169918aa98b$export$d7a960146e1a269e {
    constructor(contentType){
        super();
        Object.assign(this, {
            data: "data:" + (contentType || "") + ";base64,",
            pending: []
        });
    }
    writeUint8Array(array) {
        const writer = this;
        let indexArray = 0;
        let dataString = writer.pending;
        const delta = writer.pending.length;
        writer.pending = "";
        for(indexArray = 0; indexArray < Math.floor((delta + array.length) / 3) * 3 - delta; indexArray++)dataString += String.fromCharCode(array[indexArray]);
        for(; indexArray < array.length; indexArray++)writer.pending += String.fromCharCode(array[indexArray]);
        if (dataString.length > 2) writer.data += btoa(dataString);
        else writer.pending = dataString;
    }
    getData() {
        return this.data + btoa(this.pending);
    }
}
class $53e25169918aa98b$export$aa5015be25fe7f79 extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(blob){
        super();
        Object.assign(this, {
            blob: blob,
            size: blob.size
        });
    }
    async readUint8Array(offset, length) {
        const reader = this;
        const offsetEnd = offset + length;
        const blob = offset || offsetEnd < reader.size ? reader.blob.slice(offset, offsetEnd) : reader.blob;
        return new Uint8Array(await blob.arrayBuffer());
    }
}
class $53e25169918aa98b$export$b1948fceba813858 extends $53e25169918aa98b$var$Stream {
    constructor(contentType){
        super();
        const writer = this;
        const transformStream = new TransformStream();
        const headers = [];
        if (contentType) headers.push([
            $53e25169918aa98b$var$HTTP_HEADER_CONTENT_TYPE,
            contentType
        ]);
        Object.defineProperty(writer, $53e25169918aa98b$var$PROPERTY_NAME_WRITABLE, {
            get () {
                return transformStream.writable;
            }
        });
        writer.blob = new Response(transformStream.readable, {
            headers: headers
        }).blob();
    }
    getData() {
        return this.blob;
    }
}
class $53e25169918aa98b$export$43d3fd7deddee00 extends $53e25169918aa98b$export$aa5015be25fe7f79 {
    constructor(text){
        super(new Blob([
            text
        ], {
            type: $53e25169918aa98b$var$CONTENT_TYPE_TEXT_PLAIN
        }));
    }
}
class $53e25169918aa98b$export$4e2ccb0172e96d5b extends $53e25169918aa98b$export$b1948fceba813858 {
    constructor(encoding){
        super(encoding);
        Object.assign(this, {
            encoding: encoding,
            utf8: !encoding || encoding.toLowerCase() == "utf-8"
        });
    }
    async getData() {
        const { encoding: encoding , utf8: utf8  } = this;
        const blob = await super.getData();
        if (blob.text && utf8) return blob.text();
        else {
            const reader = new FileReader();
            return new Promise((resolve, reject)=>{
                Object.assign(reader, {
                    onload: ({ target: target  })=>resolve(target.result),
                    onerror: ()=>reject(reader.error)
                });
                reader.readAsText(blob, encoding);
            });
        }
    }
}
class $53e25169918aa98b$var$FetchReader extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(url, options){
        super();
        $53e25169918aa98b$var$createHtpReader(this, url, options);
    }
    async init() {
        await $53e25169918aa98b$var$initHttpReader(this, $53e25169918aa98b$var$sendFetchRequest, $53e25169918aa98b$var$getFetchRequestData);
        super.init();
    }
    readUint8Array(index, length) {
        return $53e25169918aa98b$var$readUint8ArrayHttpReader(this, index, length, $53e25169918aa98b$var$sendFetchRequest, $53e25169918aa98b$var$getFetchRequestData);
    }
}
class $53e25169918aa98b$var$XHRReader extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(url, options){
        super();
        $53e25169918aa98b$var$createHtpReader(this, url, options);
    }
    async init() {
        await $53e25169918aa98b$var$initHttpReader(this, $53e25169918aa98b$var$sendXMLHttpRequest, $53e25169918aa98b$var$getXMLHttpRequestData);
        super.init();
    }
    readUint8Array(index, length) {
        return $53e25169918aa98b$var$readUint8ArrayHttpReader(this, index, length, $53e25169918aa98b$var$sendXMLHttpRequest, $53e25169918aa98b$var$getXMLHttpRequestData);
    }
}
function $53e25169918aa98b$var$createHtpReader(httpReader, url, options) {
    const { preventHeadRequest: preventHeadRequest , useRangeHeader: useRangeHeader , forceRangeRequests: forceRangeRequests  } = options;
    options = Object.assign({}, options);
    delete options.preventHeadRequest;
    delete options.useRangeHeader;
    delete options.forceRangeRequests;
    delete options.useXHR;
    Object.assign(httpReader, {
        url: url,
        options: options,
        preventHeadRequest: preventHeadRequest,
        useRangeHeader: useRangeHeader,
        forceRangeRequests: forceRangeRequests
    });
}
async function $53e25169918aa98b$var$initHttpReader(httpReader, sendRequest, getRequestData) {
    const { url: url , useRangeHeader: useRangeHeader , forceRangeRequests: forceRangeRequests  } = httpReader;
    if ($53e25169918aa98b$var$isHttpFamily(url) && (useRangeHeader || forceRangeRequests)) {
        const { headers: headers  } = await sendRequest($53e25169918aa98b$var$HTTP_METHOD_GET, httpReader, $53e25169918aa98b$var$getRangeHeaders(httpReader));
        if (!forceRangeRequests && headers.get($53e25169918aa98b$var$HTTP_HEADER_ACCEPT_RANGES) != $53e25169918aa98b$var$HTTP_RANGE_UNIT) throw new Error($53e25169918aa98b$export$b71577fe3c3fd8a2);
        else {
            let contentSize;
            const contentRangeHeader = headers.get($53e25169918aa98b$var$HTTP_HEADER_CONTENT_RANGE);
            if (contentRangeHeader) {
                const splitHeader = contentRangeHeader.trim().split(/\s*\/\s*/);
                if (splitHeader.length) {
                    const headerValue = splitHeader[1];
                    if (headerValue && headerValue != "*") contentSize = Number(headerValue);
                }
            }
            if (contentSize === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) await $53e25169918aa98b$var$getContentLength(httpReader, sendRequest, getRequestData);
            else httpReader.size = contentSize;
        }
    } else await $53e25169918aa98b$var$getContentLength(httpReader, sendRequest, getRequestData);
}
async function $53e25169918aa98b$var$readUint8ArrayHttpReader(httpReader, index, length, sendRequest, getRequestData) {
    const { useRangeHeader: useRangeHeader , forceRangeRequests: forceRangeRequests , options: options  } = httpReader;
    if (useRangeHeader || forceRangeRequests) {
        const response = await sendRequest($53e25169918aa98b$var$HTTP_METHOD_GET, httpReader, $53e25169918aa98b$var$getRangeHeaders(httpReader, index, length));
        if (response.status != 206) throw new Error($53e25169918aa98b$export$b71577fe3c3fd8a2);
        return new Uint8Array(await response.arrayBuffer());
    } else {
        const { data: data  } = httpReader;
        if (!data) await getRequestData(httpReader, options);
        return new Uint8Array(httpReader.data.subarray(index, index + length));
    }
}
function $53e25169918aa98b$var$getRangeHeaders(httpReader, index = 0, length = 1) {
    return Object.assign({}, $53e25169918aa98b$var$getHeaders(httpReader), {
        [$53e25169918aa98b$var$HTTP_HEADER_RANGE]: $53e25169918aa98b$var$HTTP_RANGE_UNIT + "=" + index + "-" + (index + length - 1)
    });
}
function $53e25169918aa98b$var$getHeaders({ options: options  }) {
    const { headers: headers  } = options;
    if (headers) {
        if (Symbol.iterator in headers) return Object.fromEntries(headers);
        else return headers;
    }
}
async function $53e25169918aa98b$var$getFetchRequestData(httpReader) {
    await $53e25169918aa98b$var$getRequestData(httpReader, $53e25169918aa98b$var$sendFetchRequest);
}
async function $53e25169918aa98b$var$getXMLHttpRequestData(httpReader) {
    await $53e25169918aa98b$var$getRequestData(httpReader, $53e25169918aa98b$var$sendXMLHttpRequest);
}
async function $53e25169918aa98b$var$getRequestData(httpReader, sendRequest) {
    const response = await sendRequest($53e25169918aa98b$var$HTTP_METHOD_GET, httpReader, $53e25169918aa98b$var$getHeaders(httpReader));
    httpReader.data = new Uint8Array(await response.arrayBuffer());
    if (!httpReader.size) httpReader.size = httpReader.data.length;
}
async function $53e25169918aa98b$var$getContentLength(httpReader, sendRequest, getRequestData) {
    if (httpReader.preventHeadRequest) await getRequestData(httpReader, httpReader.options);
    else {
        const response = await sendRequest($53e25169918aa98b$var$HTTP_METHOD_HEAD, httpReader, $53e25169918aa98b$var$getHeaders(httpReader));
        const contentLength = response.headers.get($53e25169918aa98b$var$HTTP_HEADER_CONTENT_LENGTH);
        if (contentLength) httpReader.size = Number(contentLength);
        else await getRequestData(httpReader, httpReader.options);
    }
}
async function $53e25169918aa98b$var$sendFetchRequest(method, { options: options , url: url  }, headers) {
    const response = await fetch(url, Object.assign({}, options, {
        method: method,
        headers: headers
    }));
    if (response.status < 400) return response;
    else throw response.status == 416 ? new Error($53e25169918aa98b$export$b71577fe3c3fd8a2) : new Error($53e25169918aa98b$var$ERR_HTTP_STATUS + (response.statusText || response.status));
}
function $53e25169918aa98b$var$sendXMLHttpRequest(method, { url: url  }, headers) {
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener("load", ()=>{
            if (request.status < 400) {
                const headers = [];
                request.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((header)=>{
                    const splitHeader = header.trim().split(/\s*:\s*/);
                    splitHeader[0] = splitHeader[0].trim().replace(/^[a-z]|-[a-z]/g, (value)=>value.toUpperCase());
                    headers.push(splitHeader);
                });
                resolve({
                    status: request.status,
                    arrayBuffer: ()=>request.response,
                    headers: new Map(headers)
                });
            } else reject(request.status == 416 ? new Error($53e25169918aa98b$export$b71577fe3c3fd8a2) : new Error($53e25169918aa98b$var$ERR_HTTP_STATUS + (request.statusText || request.status)));
        }, false);
        request.addEventListener("error", (event)=>reject(event.detail.error), false);
        request.open(method, url);
        if (headers) for (const entry of Object.entries(headers))request.setRequestHeader(entry[0], entry[1]);
        request.responseType = "arraybuffer";
        request.send();
    });
}
class $53e25169918aa98b$export$34b9a22e660cb902 extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(url, options = {}){
        super();
        Object.assign(this, {
            url: url,
            reader: options.useXHR ? new $53e25169918aa98b$var$XHRReader(url, options) : new $53e25169918aa98b$var$FetchReader(url, options)
        });
    }
    set size(value) {
    // ignored
    }
    get size() {
        return this.reader.size;
    }
    async init() {
        await this.reader.init();
        super.init();
    }
    readUint8Array(index, length) {
        return this.reader.readUint8Array(index, length);
    }
}
class $53e25169918aa98b$export$18c85c2468f3bcdb extends $53e25169918aa98b$export$34b9a22e660cb902 {
    constructor(url, options = {}){
        options.useRangeHeader = true;
        super(url, options);
    }
}
class $53e25169918aa98b$export$d6e62de78e81ef8b extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(array){
        super();
        Object.assign(this, {
            array: array,
            size: array.length
        });
    }
    readUint8Array(index, length) {
        return this.array.slice(index, index + length);
    }
}
class $53e25169918aa98b$export$1581aa6fcae2be12 extends $53e25169918aa98b$export$d7a960146e1a269e {
    init(initSize = 0) {
        Object.assign(this, {
            offset: 0,
            array: new Uint8Array(initSize)
        });
        super.init();
    }
    writeUint8Array(array) {
        const writer = this;
        if (writer.offset + array.length > writer.array.length) {
            const previousArray = writer.array;
            writer.array = new Uint8Array(previousArray.length + array.length);
            writer.array.set(previousArray);
        }
        writer.array.set(array, writer.offset);
        writer.offset += array.length;
    }
    getData() {
        return this.array;
    }
}
class $53e25169918aa98b$export$4a205ec0d59f143b extends $53e25169918aa98b$export$2f7a2f0e90c07dc4 {
    constructor(readers){
        super();
        this.readers = readers;
    }
    async init() {
        const reader = this;
        const { readers: readers  } = reader;
        reader.lastDiskNumber = 0;
        await Promise.all(readers.map(async (diskReader)=>{
            await diskReader.init();
            reader.size += diskReader.size;
        }));
        super.init();
    }
    async readUint8Array(offset, length, diskNumber = 0) {
        const reader = this;
        const { readers: readers  } = this;
        let result;
        let currentDiskNumber = diskNumber;
        if (currentDiskNumber == -1) currentDiskNumber = readers.length - 1;
        let currentReaderOffset = offset;
        while(currentReaderOffset >= readers[currentDiskNumber].size){
            currentReaderOffset -= readers[currentDiskNumber].size;
            currentDiskNumber++;
        }
        const currentReader = readers[currentDiskNumber];
        const currentReaderSize = currentReader.size;
        if (currentReaderOffset + length <= currentReaderSize) result = await $53e25169918aa98b$export$e21b2fe168d56a89(currentReader, currentReaderOffset, length);
        else {
            const chunkLength = currentReaderSize - currentReaderOffset;
            result = new Uint8Array(length);
            result.set(await $53e25169918aa98b$export$e21b2fe168d56a89(currentReader, currentReaderOffset, chunkLength));
            result.set(await reader.readUint8Array(offset + chunkLength, length - chunkLength, diskNumber), chunkLength);
        }
        reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
        return result;
    }
}
class $53e25169918aa98b$export$d0ab482cfe396675 extends $53e25169918aa98b$var$Stream {
    constructor(writerGenerator, maxSize = 4294967295){
        super();
        const zipWriter = this;
        Object.assign(zipWriter, {
            diskNumber: 0,
            diskOffset: 0,
            size: 0,
            maxSize: maxSize,
            availableSize: maxSize
        });
        let diskSourceWriter, diskWritable, diskWriter;
        const writable = new WritableStream({
            async write (chunk) {
                const { availableSize: availableSize  } = zipWriter;
                if (!diskWriter) {
                    const { value: value , done: done  } = await writerGenerator.next();
                    if (done && !value) throw new Error($53e25169918aa98b$export$7fd7075d73b79aba);
                    else {
                        diskSourceWriter = value;
                        diskSourceWriter.size = 0;
                        if (diskSourceWriter.maxSize) zipWriter.maxSize = diskSourceWriter.maxSize;
                        zipWriter.availableSize = zipWriter.maxSize;
                        await $53e25169918aa98b$export$a0b98872cda67175(diskSourceWriter);
                        diskWritable = value.writable;
                        diskWriter = diskWritable.getWriter();
                    }
                    await this.write(chunk);
                } else if (chunk.length >= availableSize) {
                    await writeChunk(chunk.slice(0, availableSize));
                    await closeDisk();
                    zipWriter.diskOffset += diskSourceWriter.size;
                    zipWriter.diskNumber++;
                    diskWriter = null;
                    await this.write(chunk.slice(availableSize));
                } else await writeChunk(chunk);
            },
            async close () {
                await diskWriter.ready;
                await closeDisk();
            }
        });
        Object.defineProperty(zipWriter, $53e25169918aa98b$var$PROPERTY_NAME_WRITABLE, {
            get () {
                return writable;
            }
        });
        async function writeChunk(chunk) {
            const chunkLength = chunk.length;
            if (chunkLength) {
                await diskWriter.ready;
                await diskWriter.write(chunk);
                diskSourceWriter.size += chunkLength;
                zipWriter.size += chunkLength;
                zipWriter.availableSize -= chunkLength;
            }
        }
        async function closeDisk() {
            diskWritable.size = diskSourceWriter.size;
            await diskWriter.close();
        }
    }
}
function $53e25169918aa98b$var$isHttpFamily(url) {
    const { baseURL: baseURL  } = (0, $efd91934aae95642$export$3de01744a82b21a4)();
    const { protocol: protocol  } = new URL(url, baseURL);
    return protocol == "http:" || protocol == "https:";
}
async function $53e25169918aa98b$export$a0b98872cda67175(stream, initSize) {
    if (stream.init && !stream.initialized) await stream.init(initSize);
}
function $53e25169918aa98b$export$f1859256e2c1b583(reader) {
    if (Array.isArray(reader)) reader = new $53e25169918aa98b$export$4a205ec0d59f143b(reader);
    if (reader instanceof ReadableStream) reader = {
        readable: reader
    };
    return reader;
}
function $53e25169918aa98b$export$456ededfff5caf38(writer) {
    if (writer.writable === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) && typeof writer.next == (0, $cb6f24583fb9d4f7$export$31a3bc04c4494acf)) writer = new $53e25169918aa98b$export$d0ab482cfe396675(writer);
    if (writer instanceof WritableStream) writer = {
        writable: writer
    };
    const { writable: writable  } = writer;
    if (writable.size === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) writable.size = 0;
    const splitZipFile = writer instanceof $53e25169918aa98b$export$d0ab482cfe396675;
    if (!splitZipFile) Object.assign(writer, {
        diskNumber: 0,
        diskOffset: 0,
        availableSize: Infinity,
        maxSize: Infinity
    });
    return writer;
}
function $53e25169918aa98b$export$e21b2fe168d56a89(reader, offset, size, diskNumber) {
    return reader.readUint8Array(offset, size, diskNumber);
}
const $53e25169918aa98b$export$f5a4bcb16c763bf = $53e25169918aa98b$export$4a205ec0d59f143b;
const $53e25169918aa98b$export$3fae4ae4d4037452 = $53e25169918aa98b$export$d0ab482cfe396675;


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global BigInt, Response, WritableStream */ // deno-lint-ignore-file no-this-alias




/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextDecoder */ /*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextDecoder */ const $9c55ee482f88dded$var$CP437 = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼\xb6\xa7▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5₧ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf⌐\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■ ".split("");
const $9c55ee482f88dded$var$VALID_CP437 = $9c55ee482f88dded$var$CP437.length == 256;
function $9c55ee482f88dded$export$a8c5cef0e5aa59d(stringValue) {
    if ($9c55ee482f88dded$var$VALID_CP437) {
        let result = "";
        for(let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++)result += $9c55ee482f88dded$var$CP437[stringValue[indexCharacter]];
        return result;
    } else return new TextDecoder().decode(stringValue);
}


function $8ed3c5fba4cc4fe6$export$ec5093c33bb05608(value, encoding) {
    if (encoding && encoding.trim().toLowerCase() == "cp437") return (0, $9c55ee482f88dded$export$a8c5cef0e5aa59d)(value);
    else return new TextDecoder(encoding).decode(value);
}



/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ const $49205c704188ee40$export$7cb34c0446d5e73c = "filename";
const $49205c704188ee40$export$8af9d1148acf11c9 = "rawFilename";
const $49205c704188ee40$export$913af20931e15b8d = "comment";
const $49205c704188ee40$export$1c36320356a93dfd = "rawComment";
const $49205c704188ee40$export$5e71691aad485393 = "uncompressedSize";
const $49205c704188ee40$export$861550afceeff652 = "compressedSize";
const $49205c704188ee40$export$a0ed58f9c052b48f = "offset";
const $49205c704188ee40$export$1460480c421a45d7 = "diskNumberStart";
const $49205c704188ee40$export$b5975be130cdee5a = "lastModDate";
const $49205c704188ee40$export$2c6d96036f0c8404 = "rawLastModDate";
const $49205c704188ee40$export$38536c34bf195762 = "lastAccessDate";
const $49205c704188ee40$export$5570e37ecc35afa4 = "rawLastAccessDate";
const $49205c704188ee40$export$35683c84007fdb24 = "creationDate";
const $49205c704188ee40$export$69dd0577421a4e21 = "rawCreationDate";
const $49205c704188ee40$export$19d79b7c5d3cd2e = "internalFileAttribute";
const $49205c704188ee40$export$628e45477de4f0a9 = "externalFileAttribute";
const $49205c704188ee40$export$786cfe936e151722 = "msDosCompatible";
const $49205c704188ee40$export$22d1400c63f09fcb = "zip64";
const $49205c704188ee40$var$PROPERTY_NAMES = [
    $49205c704188ee40$export$7cb34c0446d5e73c,
    $49205c704188ee40$export$8af9d1148acf11c9,
    $49205c704188ee40$export$861550afceeff652,
    $49205c704188ee40$export$5e71691aad485393,
    $49205c704188ee40$export$b5975be130cdee5a,
    $49205c704188ee40$export$2c6d96036f0c8404,
    $49205c704188ee40$export$913af20931e15b8d,
    $49205c704188ee40$export$1c36320356a93dfd,
    $49205c704188ee40$export$38536c34bf195762,
    $49205c704188ee40$export$35683c84007fdb24,
    $49205c704188ee40$export$a0ed58f9c052b48f,
    $49205c704188ee40$export$1460480c421a45d7,
    $49205c704188ee40$export$1460480c421a45d7,
    $49205c704188ee40$export$19d79b7c5d3cd2e,
    $49205c704188ee40$export$628e45477de4f0a9,
    $49205c704188ee40$export$786cfe936e151722,
    $49205c704188ee40$export$22d1400c63f09fcb,
    "directory",
    "bitFlag",
    "encrypted",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "version",
    "versionMadeBy",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp"
];
class $49205c704188ee40$export$3bb977b3ba9d3b59 {
    constructor(data){
        $49205c704188ee40$var$PROPERTY_NAMES.forEach((name)=>this[name] = data[name]);
    }
}


const $8800f6a9ee230af8$export$cdcc3e34e6ecabd5 = "File format is not recognized";
const $8800f6a9ee230af8$export$b6d0395361933eb0 = "End of central directory not found";
const $8800f6a9ee230af8$export$3051d6f90cf589c8 = "End of Zip64 central directory not found";
const $8800f6a9ee230af8$export$6aed7fa9c46f86f3 = "End of Zip64 central directory locator not found";
const $8800f6a9ee230af8$export$887abb173462391f = "Central directory header not found";
const $8800f6a9ee230af8$export$63582277da496ca7 = "Local file header not found";
const $8800f6a9ee230af8$export$f12a4c2bd2e2cd28 = "Zip64 extra field not found";
const $8800f6a9ee230af8$export$812ffdea842816a5 = "File contains encrypted entry";
const $8800f6a9ee230af8$export$dfb2271b2ffc772d = "Encryption method not supported";
const $8800f6a9ee230af8$export$923b2f78451b7a99 = "Compression method not supported";
const $8800f6a9ee230af8$export$555887561ca63f85 = "Split zip file";
const $8800f6a9ee230af8$var$CHARSET_UTF8 = "utf-8";
const $8800f6a9ee230af8$var$CHARSET_CP437 = "cp437";
const $8800f6a9ee230af8$var$ZIP64_PROPERTIES = [
    [
        (0, $49205c704188ee40$export$5e71691aad485393),
        (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)
    ],
    [
        (0, $49205c704188ee40$export$861550afceeff652),
        (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)
    ],
    [
        (0, $49205c704188ee40$export$a0ed58f9c052b48f),
        (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)
    ],
    [
        (0, $49205c704188ee40$export$1460480c421a45d7),
        (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)
    ]
];
const $8800f6a9ee230af8$var$ZIP64_EXTRACTION = {
    [(0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)]: {
        getValue: $8800f6a9ee230af8$var$getUint32,
        bytes: 4
    },
    [(0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)]: {
        getValue: $8800f6a9ee230af8$var$getBigUint64,
        bytes: 8
    }
};
class $8800f6a9ee230af8$export$25e4af3b2af7fc76 {
    constructor(reader, options = {}){
        Object.assign(this, {
            reader: (0, $53e25169918aa98b$export$f1859256e2c1b583)(reader),
            options: options,
            config: (0, $efd91934aae95642$export$3de01744a82b21a4)()
        });
    }
    async *getEntriesGenerator(options = {}) {
        const zipReader = this;
        let { reader: reader  } = zipReader;
        const { config: config  } = zipReader;
        await (0, $53e25169918aa98b$export$a0b98872cda67175)(reader);
        if (reader.size === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) || !reader.readUint8Array) {
            reader = new (0, $53e25169918aa98b$export$aa5015be25fe7f79)(await new Response(reader.readable).blob());
            await (0, $53e25169918aa98b$export$a0b98872cda67175)(reader);
        }
        if (reader.size < (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68)) throw new Error($8800f6a9ee230af8$export$cdcc3e34e6ecabd5);
        reader.chunkSize = (0, $efd91934aae95642$export$f0bad416b890a4ec)(config);
        const endOfDirectoryInfo = await $8800f6a9ee230af8$var$seekSignature(reader, (0, $cb6f24583fb9d4f7$export$13a06f7e64cf6a1), reader.size, (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68), (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd) * 16);
        if (!endOfDirectoryInfo) {
            const signatureArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, 0, 4);
            const signatureView = $8800f6a9ee230af8$var$getDataView(signatureArray);
            if ($8800f6a9ee230af8$var$getUint32(signatureView) == (0, $cb6f24583fb9d4f7$export$40fbd2cd06477e1d)) throw new Error($8800f6a9ee230af8$export$555887561ca63f85);
            else throw new Error($8800f6a9ee230af8$export$b6d0395361933eb0);
        }
        const endOfDirectoryView = $8800f6a9ee230af8$var$getDataView(endOfDirectoryInfo);
        let directoryDataLength = $8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 12);
        let directoryDataOffset = $8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 16);
        const commentOffset = endOfDirectoryInfo.offset;
        const commentLength = $8800f6a9ee230af8$var$getUint16(endOfDirectoryView, 20);
        const appendedDataOffset = commentOffset + (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68) + commentLength;
        let lastDiskNumber = $8800f6a9ee230af8$var$getUint16(endOfDirectoryView, 4);
        const expectedLastDiskNumber = reader.lastDiskNumber || 0;
        let diskNumber = $8800f6a9ee230af8$var$getUint16(endOfDirectoryView, 6);
        let filesLength = $8800f6a9ee230af8$var$getUint16(endOfDirectoryView, 8);
        let prependedDataLength = 0;
        let startOffset = 0;
        if (directoryDataOffset == (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a) || directoryDataLength == (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a) || filesLength == (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd) || diskNumber == (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) {
            const endOfDirectoryLocatorArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, endOfDirectoryInfo.offset - (0, $cb6f24583fb9d4f7$export$c545bb91a1b43732), (0, $cb6f24583fb9d4f7$export$c545bb91a1b43732));
            const endOfDirectoryLocatorView = $8800f6a9ee230af8$var$getDataView(endOfDirectoryLocatorArray);
            if ($8800f6a9ee230af8$var$getUint32(endOfDirectoryLocatorView, 0) != (0, $cb6f24583fb9d4f7$export$5078166106cbcc66)) throw new Error($8800f6a9ee230af8$export$3051d6f90cf589c8);
            directoryDataOffset = $8800f6a9ee230af8$var$getBigUint64(endOfDirectoryLocatorView, 8);
            let endOfDirectoryArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, directoryDataOffset, (0, $cb6f24583fb9d4f7$export$9eb09cdd39f04a62), -1);
            let endOfDirectoryView = $8800f6a9ee230af8$var$getDataView(endOfDirectoryArray);
            const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - (0, $cb6f24583fb9d4f7$export$c545bb91a1b43732) - (0, $cb6f24583fb9d4f7$export$9eb09cdd39f04a62);
            if ($8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 0) != (0, $cb6f24583fb9d4f7$export$8414b1953f7f48c6) && directoryDataOffset != expectedDirectoryDataOffset) {
                const originalDirectoryDataOffset = directoryDataOffset;
                directoryDataOffset = expectedDirectoryDataOffset;
                prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
                endOfDirectoryArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, directoryDataOffset, (0, $cb6f24583fb9d4f7$export$9eb09cdd39f04a62), -1);
                endOfDirectoryView = $8800f6a9ee230af8$var$getDataView(endOfDirectoryArray);
            }
            if ($8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 0) != (0, $cb6f24583fb9d4f7$export$8414b1953f7f48c6)) throw new Error($8800f6a9ee230af8$export$6aed7fa9c46f86f3);
            if (lastDiskNumber == (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) lastDiskNumber = $8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 16);
            if (diskNumber == (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) diskNumber = $8800f6a9ee230af8$var$getUint32(endOfDirectoryView, 20);
            if (filesLength == (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) filesLength = $8800f6a9ee230af8$var$getBigUint64(endOfDirectoryView, 32);
            if (directoryDataLength == (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)) directoryDataLength = $8800f6a9ee230af8$var$getBigUint64(endOfDirectoryView, 40);
            directoryDataOffset -= directoryDataLength;
        }
        if (expectedLastDiskNumber != lastDiskNumber) throw new Error($8800f6a9ee230af8$export$555887561ca63f85);
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) throw new Error($8800f6a9ee230af8$export$cdcc3e34e6ecabd5);
        let offset = 0;
        let directoryArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, directoryDataOffset, directoryDataLength, diskNumber);
        let directoryView = $8800f6a9ee230af8$var$getDataView(directoryArray);
        if (directoryDataLength) {
            const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - directoryDataLength;
            if ($8800f6a9ee230af8$var$getUint32(directoryView, offset) != (0, $cb6f24583fb9d4f7$export$a72d49bf27f9bcd) && directoryDataOffset != expectedDirectoryDataOffset) {
                const originalDirectoryDataOffset = directoryDataOffset;
                directoryDataOffset = expectedDirectoryDataOffset;
                prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
                directoryArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, directoryDataOffset, directoryDataLength, diskNumber);
                directoryView = $8800f6a9ee230af8$var$getDataView(directoryArray);
            }
        }
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) throw new Error($8800f6a9ee230af8$export$cdcc3e34e6ecabd5);
        const filenameEncoding = $8800f6a9ee230af8$var$getOptionValue(zipReader, options, "filenameEncoding");
        const commentEncoding = $8800f6a9ee230af8$var$getOptionValue(zipReader, options, "commentEncoding");
        for(let indexFile = 0; indexFile < filesLength; indexFile++){
            const fileEntry = new $8800f6a9ee230af8$var$ZipEntry(reader, config, zipReader.options);
            if ($8800f6a9ee230af8$var$getUint32(directoryView, offset) != (0, $cb6f24583fb9d4f7$export$a72d49bf27f9bcd)) throw new Error($8800f6a9ee230af8$export$887abb173462391f);
            $8800f6a9ee230af8$var$readCommonHeader(fileEntry, directoryView, offset + 6);
            const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
            const filenameOffset = offset + 46;
            const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
            const commentOffset = extraFieldOffset + fileEntry.extraFieldLength;
            const versionMadeBy = $8800f6a9ee230af8$var$getUint16(directoryView, offset + 4);
            const msDosCompatible = (versionMadeBy & 0) == 0;
            const rawFilename = directoryArray.subarray(filenameOffset, extraFieldOffset);
            const commentLength = $8800f6a9ee230af8$var$getUint16(directoryView, offset + 32);
            const endOffset = commentOffset + commentLength;
            const rawComment = directoryArray.subarray(commentOffset, endOffset);
            const filenameUTF8 = languageEncodingFlag;
            const commentUTF8 = languageEncodingFlag;
            const directory = msDosCompatible && ($8800f6a9ee230af8$var$getUint8(directoryView, offset + 38) & (0, $cb6f24583fb9d4f7$export$2d169f352844a92f)) == (0, $cb6f24583fb9d4f7$export$2d169f352844a92f);
            const offsetFileEntry = $8800f6a9ee230af8$var$getUint32(directoryView, offset + 42) + prependedDataLength;
            Object.assign(fileEntry, {
                versionMadeBy: versionMadeBy,
                msDosCompatible: msDosCompatible,
                compressedSize: 0,
                uncompressedSize: 0,
                commentLength: commentLength,
                directory: directory,
                offset: offsetFileEntry,
                diskNumberStart: $8800f6a9ee230af8$var$getUint16(directoryView, offset + 34),
                internalFileAttribute: $8800f6a9ee230af8$var$getUint16(directoryView, offset + 36),
                externalFileAttribute: $8800f6a9ee230af8$var$getUint32(directoryView, offset + 38),
                rawFilename: rawFilename,
                filenameUTF8: filenameUTF8,
                commentUTF8: commentUTF8,
                rawExtraField: directoryArray.subarray(extraFieldOffset, commentOffset)
            });
            const [filename, comment] = await Promise.all([
                (0, $8ed3c5fba4cc4fe6$export$ec5093c33bb05608)(rawFilename, filenameUTF8 ? $8800f6a9ee230af8$var$CHARSET_UTF8 : filenameEncoding || $8800f6a9ee230af8$var$CHARSET_CP437),
                (0, $8ed3c5fba4cc4fe6$export$ec5093c33bb05608)(rawComment, commentUTF8 ? $8800f6a9ee230af8$var$CHARSET_UTF8 : commentEncoding || $8800f6a9ee230af8$var$CHARSET_CP437)
            ]);
            Object.assign(fileEntry, {
                rawComment: rawComment,
                filename: filename,
                comment: comment,
                directory: directory || filename.endsWith((0, $cb6f24583fb9d4f7$export$4a765df57d89fe04))
            });
            startOffset = Math.max(offsetFileEntry, startOffset);
            await $8800f6a9ee230af8$var$readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
            const entry = new (0, $49205c704188ee40$export$3bb977b3ba9d3b59)(fileEntry);
            entry.getData = (writer, options)=>fileEntry.getData(writer, entry, options);
            offset = endOffset;
            const { onprogress: onprogress  } = options;
            if (onprogress) try {
                await onprogress(indexFile + 1, filesLength, new (0, $49205c704188ee40$export$3bb977b3ba9d3b59)(fileEntry));
            } catch (_error) {
            // ignored
            }
            yield entry;
        }
        const extractPrependedData = $8800f6a9ee230af8$var$getOptionValue(zipReader, options, "extractPrependedData");
        const extractAppendedData = $8800f6a9ee230af8$var$getOptionValue(zipReader, options, "extractAppendedData");
        if (extractPrependedData) zipReader.prependedData = startOffset > 0 ? await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, 0, startOffset) : new Uint8Array();
        zipReader.comment = commentLength ? await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, commentOffset + (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68), commentLength) : new Uint8Array();
        if (extractAppendedData) zipReader.appendedData = appendedDataOffset < reader.size ? await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, appendedDataOffset, reader.size - appendedDataOffset) : new Uint8Array();
        return true;
    }
    async getEntries(options = {}) {
        const entries = [];
        for await (const entry of this.getEntriesGenerator(options))entries.push(entry);
        return entries;
    }
    async close() {}
}
class $8800f6a9ee230af8$var$ZipEntry {
    constructor(reader, config, options){
        Object.assign(this, {
            reader: reader,
            config: config,
            options: options
        });
    }
    async getData(writer, fileEntry, options = {}) {
        const zipEntry = this;
        const { reader: reader , offset: offset , diskNumberStart: diskNumberStart , extraFieldAES: extraFieldAES , compressionMethod: compressionMethod , config: config , bitFlag: bitFlag , signature: signature , rawLastModDate: rawLastModDate , uncompressedSize: uncompressedSize , compressedSize: compressedSize  } = zipEntry;
        const localDirectory = zipEntry.localDirectory = {};
        const dataArray = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, offset, 30, diskNumberStart);
        const dataView = $8800f6a9ee230af8$var$getDataView(dataArray);
        let password = $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "password");
        password = password && password.length && password;
        if (extraFieldAES) {
            if (extraFieldAES.originalCompressionMethod != (0, $cb6f24583fb9d4f7$export$367f2443b409227a)) throw new Error($8800f6a9ee230af8$export$923b2f78451b7a99);
        }
        if (compressionMethod != (0, $cb6f24583fb9d4f7$export$6135a805f19e5577) && compressionMethod != (0, $cb6f24583fb9d4f7$export$2cf0a12381b29e07)) throw new Error($8800f6a9ee230af8$export$923b2f78451b7a99);
        if ($8800f6a9ee230af8$var$getUint32(dataView, 0) != (0, $cb6f24583fb9d4f7$export$2b2cf5904cb82788)) throw new Error($8800f6a9ee230af8$export$63582277da496ca7);
        $8800f6a9ee230af8$var$readCommonHeader(localDirectory, dataView, 4);
        localDirectory.rawExtraField = localDirectory.extraFieldLength ? await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, offset + 30 + localDirectory.filenameLength, localDirectory.extraFieldLength, diskNumberStart) : new Uint8Array();
        await $8800f6a9ee230af8$var$readCommonFooter(zipEntry, localDirectory, dataView, 4);
        Object.assign(fileEntry, {
            lastAccessDate: localDirectory.lastAccessDate,
            creationDate: localDirectory.creationDate
        });
        const encrypted = zipEntry.encrypted && localDirectory.encrypted;
        const zipCrypto = encrypted && !extraFieldAES;
        if (encrypted) {
            if (!zipCrypto && extraFieldAES.strength === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) throw new Error($8800f6a9ee230af8$export$dfb2271b2ffc772d);
            else if (!password) throw new Error($8800f6a9ee230af8$export$812ffdea842816a5);
        }
        const dataOffset = offset + 30 + localDirectory.filenameLength + localDirectory.extraFieldLength;
        const readable = reader.readable;
        readable.diskNumberStart = diskNumberStart;
        readable.offset = dataOffset;
        let size = readable.size = compressedSize;
        const signal = $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "signal");
        const checkPasswordOnly = $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "checkPasswordOnly");
        if (checkPasswordOnly) writer = new WritableStream();
        writer = (0, $53e25169918aa98b$export$456ededfff5caf38)(writer);
        await (0, $53e25169918aa98b$export$a0b98872cda67175)(writer, uncompressedSize);
        const { writable: writable  } = writer;
        const { onstart: onstart , onprogress: onprogress , onend: onend  } = options;
        const workerOptions = {
            options: {
                codecType: (0, $0ca1613652845fc5$export$1c8ed04f989a62a8),
                password: password,
                zipCrypto: zipCrypto,
                encryptionStrength: extraFieldAES && extraFieldAES.strength,
                signed: $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "checkSignature"),
                passwordVerification: zipCrypto && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 0xFF : signature >>> 24 & 0xFF),
                signature: signature,
                compressed: compressionMethod != 0,
                encrypted: encrypted,
                useWebWorkers: $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "useWebWorkers"),
                useCompressionStream: $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "useCompressionStream"),
                transferStreams: $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "transferStreams"),
                checkPasswordOnly: checkPasswordOnly
            },
            config: config,
            streamOptions: {
                signal: signal,
                size: size,
                onstart: onstart,
                onprogress: onprogress,
                onend: onend
            }
        };
        let outputSize = 0;
        try {
            ({ outputSize: outputSize  } = await (0, $eb7b040113c02588$export$dd2e08b4a54c623f)({
                readable: readable,
                writable: writable
            }, workerOptions));
        } catch (error) {
            if (!checkPasswordOnly || error.message != (0, $2c2bd6ed85f5e732$export$e6db2db9e24ceff8)) throw error;
        } finally{
            const preventClose = $8800f6a9ee230af8$var$getOptionValue(zipEntry, options, "preventClose");
            writable.size += outputSize;
            if (!preventClose && !writable.locked) await writable.close();
        }
        return checkPasswordOnly ? undefined : writer.getData ? writer.getData() : writable;
    }
}
function $8800f6a9ee230af8$var$readCommonHeader(directory, dataView, offset) {
    const rawBitFlag = directory.rawBitFlag = $8800f6a9ee230af8$var$getUint16(dataView, offset + 2);
    const encrypted = (rawBitFlag & (0, $cb6f24583fb9d4f7$export$7db0c075c39cb343)) == (0, $cb6f24583fb9d4f7$export$7db0c075c39cb343);
    const rawLastModDate = $8800f6a9ee230af8$var$getUint32(dataView, offset + 6);
    Object.assign(directory, {
        encrypted: encrypted,
        version: $8800f6a9ee230af8$var$getUint16(dataView, offset),
        bitFlag: {
            level: (rawBitFlag & (0, $cb6f24583fb9d4f7$export$ac9ca09a23eb90ff)) >> 1,
            dataDescriptor: (rawBitFlag & (0, $cb6f24583fb9d4f7$export$3ec1d940e3bc0a58)) == (0, $cb6f24583fb9d4f7$export$3ec1d940e3bc0a58),
            languageEncodingFlag: (rawBitFlag & (0, $cb6f24583fb9d4f7$export$fb6e9f896320db55)) == (0, $cb6f24583fb9d4f7$export$fb6e9f896320db55)
        },
        rawLastModDate: rawLastModDate,
        lastModDate: $8800f6a9ee230af8$var$getDate(rawLastModDate),
        filenameLength: $8800f6a9ee230af8$var$getUint16(dataView, offset + 22),
        extraFieldLength: $8800f6a9ee230af8$var$getUint16(dataView, offset + 24)
    });
}
async function $8800f6a9ee230af8$var$readCommonFooter(fileEntry, directory, dataView, offset) {
    const { rawExtraField: rawExtraField  } = directory;
    const extraField = directory.extraField = new Map();
    const rawExtraFieldView = $8800f6a9ee230af8$var$getDataView(new Uint8Array(rawExtraField));
    let offsetExtraField = 0;
    try {
        while(offsetExtraField < rawExtraField.length){
            const type = $8800f6a9ee230af8$var$getUint16(rawExtraFieldView, offsetExtraField);
            const size = $8800f6a9ee230af8$var$getUint16(rawExtraFieldView, offsetExtraField + 2);
            extraField.set(type, {
                type: type,
                data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
            });
            offsetExtraField += 4 + size;
        }
    } catch (_error) {
    // ignored
    }
    const compressionMethod = $8800f6a9ee230af8$var$getUint16(dataView, offset + 4);
    Object.assign(directory, {
        signature: $8800f6a9ee230af8$var$getUint32(dataView, offset + 10),
        uncompressedSize: $8800f6a9ee230af8$var$getUint32(dataView, offset + 18),
        compressedSize: $8800f6a9ee230af8$var$getUint32(dataView, offset + 14)
    });
    const extraFieldZip64 = extraField.get((0, $cb6f24583fb9d4f7$export$3da9e4d76b1bf88));
    if (extraFieldZip64) {
        $8800f6a9ee230af8$var$readExtraFieldZip64(extraFieldZip64, directory);
        directory.extraFieldZip64 = extraFieldZip64;
    }
    const extraFieldUnicodePath = extraField.get((0, $cb6f24583fb9d4f7$export$b48bdd5195f1a53a));
    if (extraFieldUnicodePath) {
        await $8800f6a9ee230af8$var$readExtraFieldUnicode(extraFieldUnicodePath, (0, $49205c704188ee40$export$7cb34c0446d5e73c), (0, $49205c704188ee40$export$8af9d1148acf11c9), directory, fileEntry);
        directory.extraFieldUnicodePath = extraFieldUnicodePath;
    }
    const extraFieldUnicodeComment = extraField.get((0, $cb6f24583fb9d4f7$export$b49699c0acb50fe1));
    if (extraFieldUnicodeComment) {
        await $8800f6a9ee230af8$var$readExtraFieldUnicode(extraFieldUnicodeComment, (0, $49205c704188ee40$export$913af20931e15b8d), (0, $49205c704188ee40$export$1c36320356a93dfd), directory, fileEntry);
        directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
    }
    const extraFieldAES = extraField.get((0, $cb6f24583fb9d4f7$export$714aa3fe052f4e13));
    if (extraFieldAES) {
        $8800f6a9ee230af8$var$readExtraFieldAES(extraFieldAES, directory, compressionMethod);
        directory.extraFieldAES = extraFieldAES;
    } else directory.compressionMethod = compressionMethod;
    const extraFieldNTFS = extraField.get((0, $cb6f24583fb9d4f7$export$93e014de2b9c33c8));
    if (extraFieldNTFS) {
        $8800f6a9ee230af8$var$readExtraFieldNTFS(extraFieldNTFS, directory);
        directory.extraFieldNTFS = extraFieldNTFS;
    }
    const extraFieldExtendedTimestamp = extraField.get((0, $cb6f24583fb9d4f7$export$6cfe9e8823acaac3));
    if (extraFieldExtendedTimestamp) {
        $8800f6a9ee230af8$var$readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory);
        directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
    }
}
function $8800f6a9ee230af8$var$readExtraFieldZip64(extraFieldZip64, directory) {
    directory.zip64 = true;
    const extraFieldView = $8800f6a9ee230af8$var$getDataView(extraFieldZip64.data);
    const missingProperties = $8800f6a9ee230af8$var$ZIP64_PROPERTIES.filter(([propertyName, max])=>directory[propertyName] == max);
    for(let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++){
        const [propertyName, max] = missingProperties[indexMissingProperty];
        if (directory[propertyName] == max) {
            const extraction = $8800f6a9ee230af8$var$ZIP64_EXTRACTION[max];
            directory[propertyName] = extraFieldZip64[propertyName] = extraction.getValue(extraFieldView, offset);
            offset += extraction.bytes;
        } else if (extraFieldZip64[propertyName]) throw new Error($8800f6a9ee230af8$export$f12a4c2bd2e2cd28);
    }
}
async function $8800f6a9ee230af8$var$readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
    const extraFieldView = $8800f6a9ee230af8$var$getDataView(extraFieldUnicode.data);
    const crc32 = new (0, $0fe927a90ceb1a3f$export$16d8d62894c71747)();
    crc32.append(fileEntry[rawPropertyName]);
    const dataViewSignature = $8800f6a9ee230af8$var$getDataView(new Uint8Array(4));
    dataViewSignature.setUint32(0, crc32.get(), true);
    Object.assign(extraFieldUnicode, {
        version: $8800f6a9ee230af8$var$getUint8(extraFieldView, 0),
        signature: $8800f6a9ee230af8$var$getUint32(extraFieldView, 1),
        [propertyName]: await (0, $8ed3c5fba4cc4fe6$export$ec5093c33bb05608)(extraFieldUnicode.data.subarray(5)),
        valid: !fileEntry.bitFlag.languageEncodingFlag && extraFieldUnicode.signature == $8800f6a9ee230af8$var$getUint32(dataViewSignature, 0)
    });
    if (extraFieldUnicode.valid) {
        directory[propertyName] = extraFieldUnicode[propertyName];
        directory[propertyName + "UTF8"] = true;
    }
}
function $8800f6a9ee230af8$var$readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
    const extraFieldView = $8800f6a9ee230af8$var$getDataView(extraFieldAES.data);
    const strength = $8800f6a9ee230af8$var$getUint8(extraFieldView, 4);
    Object.assign(extraFieldAES, {
        vendorVersion: $8800f6a9ee230af8$var$getUint8(extraFieldView, 0),
        vendorId: $8800f6a9ee230af8$var$getUint8(extraFieldView, 2),
        strength: strength,
        originalCompressionMethod: compressionMethod,
        compressionMethod: $8800f6a9ee230af8$var$getUint16(extraFieldView, 5)
    });
    directory.compressionMethod = extraFieldAES.compressionMethod;
}
function $8800f6a9ee230af8$var$readExtraFieldNTFS(extraFieldNTFS, directory) {
    const extraFieldView = $8800f6a9ee230af8$var$getDataView(extraFieldNTFS.data);
    let offsetExtraField = 4;
    let tag1Data;
    try {
        while(offsetExtraField < extraFieldNTFS.data.length && !tag1Data){
            const tagValue = $8800f6a9ee230af8$var$getUint16(extraFieldView, offsetExtraField);
            const attributeSize = $8800f6a9ee230af8$var$getUint16(extraFieldView, offsetExtraField + 2);
            if (tagValue == (0, $cb6f24583fb9d4f7$export$109a97d45e55cdec)) tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
            offsetExtraField += 4 + attributeSize;
        }
    } catch (_error) {
    // ignored
    }
    try {
        if (tag1Data && tag1Data.length == 24) {
            const tag1View = $8800f6a9ee230af8$var$getDataView(tag1Data);
            const rawLastModDate = tag1View.getBigUint64(0, true);
            const rawLastAccessDate = tag1View.getBigUint64(8, true);
            const rawCreationDate = tag1View.getBigUint64(16, true);
            Object.assign(extraFieldNTFS, {
                rawLastModDate: rawLastModDate,
                rawLastAccessDate: rawLastAccessDate,
                rawCreationDate: rawCreationDate
            });
            const lastModDate = $8800f6a9ee230af8$var$getDateNTFS(rawLastModDate);
            const lastAccessDate = $8800f6a9ee230af8$var$getDateNTFS(rawLastAccessDate);
            const creationDate = $8800f6a9ee230af8$var$getDateNTFS(rawCreationDate);
            const extraFieldData = {
                lastModDate: lastModDate,
                lastAccessDate: lastAccessDate,
                creationDate: creationDate
            };
            Object.assign(extraFieldNTFS, extraFieldData);
            Object.assign(directory, extraFieldData);
        }
    } catch (_error) {
    // ignored
    }
}
function $8800f6a9ee230af8$var$readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory) {
    const extraFieldView = $8800f6a9ee230af8$var$getDataView(extraFieldExtendedTimestamp.data);
    const flags = $8800f6a9ee230af8$var$getUint8(extraFieldView, 0);
    const timeProperties = [];
    const timeRawProperties = [];
    if ((flags & 0x1) == 0x1) {
        timeProperties.push((0, $49205c704188ee40$export$b5975be130cdee5a));
        timeRawProperties.push((0, $49205c704188ee40$export$2c6d96036f0c8404));
    }
    if ((flags & 0x2) == 0x2) {
        timeProperties.push((0, $49205c704188ee40$export$38536c34bf195762));
        timeRawProperties.push((0, $49205c704188ee40$export$5570e37ecc35afa4));
    }
    if ((flags & 0x4) == 0x4) {
        timeProperties.push((0, $49205c704188ee40$export$35683c84007fdb24));
        timeRawProperties.push((0, $49205c704188ee40$export$69dd0577421a4e21));
    }
    let offset = 1;
    timeProperties.forEach((propertyName, indexProperty)=>{
        if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
            const time = $8800f6a9ee230af8$var$getUint32(extraFieldView, offset);
            directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date(time * 1000);
            const rawPropertyName = timeRawProperties[indexProperty];
            extraFieldExtendedTimestamp[rawPropertyName] = time;
        }
        offset += 4;
    });
}
async function $8800f6a9ee230af8$var$seekSignature(reader, signature, startOffset, minimumBytes, maximumLength) {
    const signatureArray = new Uint8Array(4);
    const signatureView = $8800f6a9ee230af8$var$getDataView(signatureArray);
    $8800f6a9ee230af8$var$setUint32(signatureView, 0, signature);
    const maximumBytes = minimumBytes + maximumLength;
    return await seek(minimumBytes) || await seek(Math.min(maximumBytes, startOffset));
    async function seek(length) {
        const offset = startOffset - length;
        const bytes = await (0, $53e25169918aa98b$export$e21b2fe168d56a89)(reader, offset, length);
        for(let indexByte = bytes.length - minimumBytes; indexByte >= 0; indexByte--){
            if (bytes[indexByte] == signatureArray[0] && bytes[indexByte + 1] == signatureArray[1] && bytes[indexByte + 2] == signatureArray[2] && bytes[indexByte + 3] == signatureArray[3]) return {
                offset: offset + indexByte,
                buffer: bytes.slice(indexByte, indexByte + minimumBytes).buffer
            };
        }
    }
}
function $8800f6a9ee230af8$var$getOptionValue(zipReader, options, name) {
    return options[name] === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) ? zipReader.options[name] : options[name];
}
function $8800f6a9ee230af8$var$getDate(timeRaw) {
    const date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
    try {
        return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5, (time & 0x001F) * 2, 0);
    } catch (_error) {
    // ignored
    }
}
function $8800f6a9ee230af8$var$getDateNTFS(timeRaw) {
    return new Date(Number(timeRaw / BigInt(10000) - BigInt(11644473600000)));
}
function $8800f6a9ee230af8$var$getUint8(view, offset) {
    return view.getUint8(offset);
}
function $8800f6a9ee230af8$var$getUint16(view, offset) {
    return view.getUint16(offset, true);
}
function $8800f6a9ee230af8$var$getUint32(view, offset) {
    return view.getUint32(offset, true);
}
function $8800f6a9ee230af8$var$getBigUint64(view, offset) {
    return Number(view.getBigUint64(offset, true));
}
function $8800f6a9ee230af8$var$setUint32(view, offset, value) {
    view.setUint32(offset, value, true);
}
function $8800f6a9ee230af8$var$getDataView(array) {
    return new DataView(array.buffer);
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global BigInt */ // deno-lint-ignore-file no-this-alias






const $183a0115a003f583$export$c3407be3767d007d = "File already exists";
const $183a0115a003f583$export$aa00b8eb8e30f01e = "Zip file comment exceeds 64KB";
const $183a0115a003f583$export$c5631773b8d6c9e2 = "File entry comment exceeds 64KB";
const $183a0115a003f583$export$e7ba549a0a27f4f5 = "File entry name exceeds 64KB";
const $183a0115a003f583$export$6a674c09fe1f3dec = "Version exceeds 65535";
const $183a0115a003f583$export$a52a97f6f11df530 = "The strength must equal 1, 2, or 3";
const $183a0115a003f583$export$84caeb3441d47629 = "Extra field type exceeds 65535";
const $183a0115a003f583$export$ca2bf648520d566 = "Extra field data exceeds 64KB";
const $183a0115a003f583$export$2866c0d2403d5bac = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')";
const $183a0115a003f583$var$EXTRAFIELD_DATA_AES = new Uint8Array([
    0x07,
    0x00,
    0x02,
    0x00,
    0x41,
    0x45,
    0x03,
    0x00,
    0x00
]);
let $183a0115a003f583$var$workers = 0;
const $183a0115a003f583$var$pendingEntries = [];
class $183a0115a003f583$export$50f5658480930b4c {
    constructor(writer, options = {}){
        writer = (0, $53e25169918aa98b$export$456ededfff5caf38)(writer);
        Object.assign(this, {
            writer: writer,
            addSplitZipSignature: writer instanceof (0, $53e25169918aa98b$export$d0ab482cfe396675),
            options: options,
            config: (0, $efd91934aae95642$export$3de01744a82b21a4)(),
            files: new Map(),
            filenames: new Set(),
            offset: writer.writable.size,
            pendingEntriesSize: 0,
            pendingAddFileCalls: new Set(),
            bufferedWrites: 0
        });
    }
    async add(name = "", reader, options = {}) {
        const zipWriter = this;
        const { pendingAddFileCalls: pendingAddFileCalls , config: config  } = zipWriter;
        if ($183a0115a003f583$var$workers < config.maxWorkers) $183a0115a003f583$var$workers++;
        else await new Promise((resolve)=>$183a0115a003f583$var$pendingEntries.push(resolve));
        let promiseAddFile;
        try {
            name = name.trim();
            if (zipWriter.filenames.has(name)) throw new Error($183a0115a003f583$export$c3407be3767d007d);
            zipWriter.filenames.add(name);
            promiseAddFile = $183a0115a003f583$var$addFile(zipWriter, name, reader, options);
            pendingAddFileCalls.add(promiseAddFile);
            return await promiseAddFile;
        } catch (error) {
            zipWriter.filenames.delete(name);
            throw error;
        } finally{
            pendingAddFileCalls.delete(promiseAddFile);
            const pendingEntry = $183a0115a003f583$var$pendingEntries.shift();
            if (pendingEntry) pendingEntry();
            else $183a0115a003f583$var$workers--;
        }
    }
    async close(comment = new Uint8Array(), options = {}) {
        const zipWriter = this;
        const { pendingAddFileCalls: pendingAddFileCalls , writer: writer  } = this;
        const { writable: writable  } = writer;
        while(pendingAddFileCalls.size)await Promise.all(Array.from(pendingAddFileCalls));
        await $183a0115a003f583$var$closeFile(this, comment, options);
        const preventClose = $183a0115a003f583$var$getOptionValue(zipWriter, options, "preventClose");
        if (!preventClose) await writable.close();
        return writer.getData ? writer.getData() : writable;
    }
}
async function $183a0115a003f583$var$addFile(zipWriter, name, reader, options) {
    name = name.trim();
    if (options.directory && !name.endsWith((0, $cb6f24583fb9d4f7$export$4a765df57d89fe04))) name += (0, $cb6f24583fb9d4f7$export$4a765df57d89fe04);
    else options.directory = name.endsWith((0, $cb6f24583fb9d4f7$export$4a765df57d89fe04));
    const rawFilename = (0, $26c9c6b6bd48ee69$export$7d0d7672e8a1c5cf)(name);
    if ($183a0115a003f583$var$getLength(rawFilename) > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$e7ba549a0a27f4f5);
    const comment = options.comment || "";
    const rawComment = (0, $26c9c6b6bd48ee69$export$7d0d7672e8a1c5cf)(comment);
    if ($183a0115a003f583$var$getLength(rawComment) > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$c5631773b8d6c9e2);
    const version = $183a0115a003f583$var$getOptionValue(zipWriter, options, "version", (0, $cb6f24583fb9d4f7$export$e0f048be47b3707));
    if (version > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$6a674c09fe1f3dec);
    const versionMadeBy = $183a0115a003f583$var$getOptionValue(zipWriter, options, "versionMadeBy", 20);
    if (versionMadeBy > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$6a674c09fe1f3dec);
    const lastModDate = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$b5975be130cdee5a), new Date());
    const lastAccessDate = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$38536c34bf195762));
    const creationDate = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$35683c84007fdb24));
    const msDosCompatible = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$786cfe936e151722), true);
    const internalFileAttribute = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$19d79b7c5d3cd2e), 0);
    const externalFileAttribute = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$628e45477de4f0a9), 0);
    const password = $183a0115a003f583$var$getOptionValue(zipWriter, options, "password");
    const encryptionStrength = $183a0115a003f583$var$getOptionValue(zipWriter, options, "encryptionStrength", 3);
    const zipCrypto = $183a0115a003f583$var$getOptionValue(zipWriter, options, "zipCrypto");
    const extendedTimestamp = $183a0115a003f583$var$getOptionValue(zipWriter, options, "extendedTimestamp", true);
    const keepOrder = $183a0115a003f583$var$getOptionValue(zipWriter, options, "keepOrder", true);
    const level = $183a0115a003f583$var$getOptionValue(zipWriter, options, "level");
    const useWebWorkers = $183a0115a003f583$var$getOptionValue(zipWriter, options, "useWebWorkers");
    const bufferedWrite = $183a0115a003f583$var$getOptionValue(zipWriter, options, "bufferedWrite");
    const dataDescriptorSignature = $183a0115a003f583$var$getOptionValue(zipWriter, options, "dataDescriptorSignature", false);
    const signal = $183a0115a003f583$var$getOptionValue(zipWriter, options, "signal");
    const useCompressionStream = $183a0115a003f583$var$getOptionValue(zipWriter, options, "useCompressionStream");
    let dataDescriptor = $183a0115a003f583$var$getOptionValue(zipWriter, options, "dataDescriptor", true);
    let zip64 = $183a0115a003f583$var$getOptionValue(zipWriter, options, (0, $49205c704188ee40$export$22d1400c63f09fcb));
    if (password !== (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) && encryptionStrength !== (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) && (encryptionStrength < 1 || encryptionStrength > 3)) throw new Error($183a0115a003f583$export$a52a97f6f11df530);
    let rawExtraField = new Uint8Array();
    const { extraField: extraField  } = options;
    if (extraField) {
        let extraFieldSize = 0;
        let offset = 0;
        extraField.forEach((data)=>extraFieldSize += 4 + $183a0115a003f583$var$getLength(data));
        rawExtraField = new Uint8Array(extraFieldSize);
        extraField.forEach((data, type)=>{
            if (type > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$84caeb3441d47629);
            if ($183a0115a003f583$var$getLength(data) > (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) throw new Error($183a0115a003f583$export$ca2bf648520d566);
            $183a0115a003f583$var$arraySet(rawExtraField, new Uint16Array([
                type
            ]), offset);
            $183a0115a003f583$var$arraySet(rawExtraField, new Uint16Array([
                $183a0115a003f583$var$getLength(data)
            ]), offset + 2);
            $183a0115a003f583$var$arraySet(rawExtraField, data, offset + 4);
            offset += 4 + $183a0115a003f583$var$getLength(data);
        });
    }
    let maximumCompressedSize = 0;
    let maximumEntrySize = 0;
    let uncompressedSize = 0;
    const zip64Enabled = zip64 === true;
    if (reader) {
        reader = (0, $53e25169918aa98b$export$f1859256e2c1b583)(reader);
        await (0, $53e25169918aa98b$export$a0b98872cda67175)(reader);
        if (reader.size === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) {
            dataDescriptor = true;
            if (zip64 || zip64 === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) {
                zip64 = true;
                maximumCompressedSize = (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
            }
        } else {
            uncompressedSize = reader.size;
            maximumCompressedSize = $183a0115a003f583$var$getMaximumCompressedSize(uncompressedSize);
        }
    }
    const { diskOffset: diskOffset , diskNumber: diskNumber , maxSize: maxSize  } = zipWriter.writer;
    const zip64UncompressedSize = zip64Enabled || uncompressedSize >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
    const zip64CompressedSize = zip64Enabled || maximumCompressedSize >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
    const zip64Offset = zip64Enabled || zipWriter.offset + zipWriter.pendingEntriesSize - diskOffset >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
    const supportZip64SplitFile = $183a0115a003f583$var$getOptionValue(zipWriter, options, "supportZip64SplitFile", true);
    const zip64DiskNumberStart = supportZip64SplitFile && zip64Enabled || diskNumber + Math.ceil(zipWriter.pendingEntriesSize / maxSize) >= (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd);
    if (zip64Offset || zip64UncompressedSize || zip64CompressedSize || zip64DiskNumberStart) {
        if (zip64 === false || !keepOrder) throw new Error($183a0115a003f583$export$2866c0d2403d5bac);
        else zip64 = true;
    }
    zip64 = zip64 || false;
    options = Object.assign({}, options, {
        rawFilename: rawFilename,
        rawComment: rawComment,
        version: version,
        versionMadeBy: versionMadeBy,
        lastModDate: lastModDate,
        lastAccessDate: lastAccessDate,
        creationDate: creationDate,
        rawExtraField: rawExtraField,
        zip64: zip64,
        zip64UncompressedSize: zip64UncompressedSize,
        zip64CompressedSize: zip64CompressedSize,
        zip64Offset: zip64Offset,
        zip64DiskNumberStart: zip64DiskNumberStart,
        password: password,
        level: level,
        useWebWorkers: useWebWorkers,
        encryptionStrength: encryptionStrength,
        extendedTimestamp: extendedTimestamp,
        zipCrypto: zipCrypto,
        bufferedWrite: bufferedWrite,
        keepOrder: keepOrder,
        dataDescriptor: dataDescriptor,
        dataDescriptorSignature: dataDescriptorSignature,
        signal: signal,
        msDosCompatible: msDosCompatible,
        internalFileAttribute: internalFileAttribute,
        externalFileAttribute: externalFileAttribute,
        useCompressionStream: useCompressionStream
    });
    const headerInfo = $183a0115a003f583$var$getHeaderInfo(options);
    const dataDescriptorInfo = $183a0115a003f583$var$getDataDescriptorInfo(options);
    maximumEntrySize = $183a0115a003f583$var$getLength(headerInfo.localHeaderArray, dataDescriptorInfo.dataDescriptorArray) + maximumCompressedSize;
    zipWriter.pendingEntriesSize += maximumEntrySize;
    let fileEntry;
    try {
        fileEntry = await $183a0115a003f583$var$getFileEntry(zipWriter, name, reader, {
            headerInfo: headerInfo,
            dataDescriptorInfo: dataDescriptorInfo
        }, options);
    } finally{
        zipWriter.pendingEntriesSize -= maximumEntrySize;
    }
    Object.assign(fileEntry, {
        name: name,
        comment: comment,
        extraField: extraField
    });
    return new (0, $49205c704188ee40$export$3bb977b3ba9d3b59)(fileEntry);
}
async function $183a0115a003f583$var$getFileEntry(zipWriter, name, reader, entryInfo, options) {
    const { files: files , writer: writer  } = zipWriter;
    const { keepOrder: keepOrder , dataDescriptor: dataDescriptor , signal: signal  } = options;
    const { headerInfo: headerInfo  } = entryInfo;
    const previousFileEntry = Array.from(files.values()).pop();
    let fileEntry = {};
    let bufferedWrite;
    let releaseLockWriter;
    let releaseLockCurrentFileEntry;
    let writingBufferedEntryData;
    let writingEntryData;
    let fileWriter;
    files.set(name, fileEntry);
    try {
        let lockPreviousFileEntry;
        if (keepOrder) {
            lockPreviousFileEntry = previousFileEntry && previousFileEntry.lock;
            requestLockCurrentFileEntry();
        }
        if (options.bufferedWrite || zipWriter.writerLocked || zipWriter.bufferedWrites && keepOrder || !dataDescriptor) {
            fileWriter = new (0, $53e25169918aa98b$export$b1948fceba813858)();
            fileWriter.writable.size = 0;
            bufferedWrite = true;
            zipWriter.bufferedWrites++;
            await (0, $53e25169918aa98b$export$a0b98872cda67175)(writer);
        } else {
            fileWriter = writer;
            await requestLockWriter();
        }
        await (0, $53e25169918aa98b$export$a0b98872cda67175)(fileWriter);
        const { writable: writable  } = writer;
        let { diskOffset: diskOffset  } = writer;
        if (zipWriter.addSplitZipSignature) {
            delete zipWriter.addSplitZipSignature;
            const signatureArray = new Uint8Array(4);
            const signatureArrayView = $183a0115a003f583$var$getDataView(signatureArray);
            $183a0115a003f583$var$setUint32(signatureArrayView, 0, (0, $cb6f24583fb9d4f7$export$40fbd2cd06477e1d));
            await $183a0115a003f583$var$writeData(writable, signatureArray);
            zipWriter.offset += 4;
        }
        if (!bufferedWrite) {
            await lockPreviousFileEntry;
            await skipDiskIfNeeded(writable);
        }
        const { diskNumber: diskNumber  } = writer;
        writingEntryData = true;
        fileEntry.diskNumberStart = diskNumber;
        fileEntry = await $183a0115a003f583$var$createFileEntry(reader, fileWriter, fileEntry, entryInfo, zipWriter.config, options);
        writingEntryData = false;
        files.set(name, fileEntry);
        fileEntry.filename = name;
        if (bufferedWrite) {
            await fileWriter.writable.close();
            let blob = await fileWriter.getData();
            await lockPreviousFileEntry;
            await requestLockWriter();
            writingBufferedEntryData = true;
            if (!dataDescriptor) blob = await $183a0115a003f583$var$writeExtraHeaderInfo(fileEntry, blob, writable, options);
            await skipDiskIfNeeded(writable);
            fileEntry.diskNumberStart = writer.diskNumber;
            diskOffset = writer.diskOffset;
            await blob.stream().pipeTo(writable, {
                preventClose: true,
                preventAbort: true,
                signal: signal
            });
            writable.size += blob.size;
            writingBufferedEntryData = false;
        }
        fileEntry.offset = zipWriter.offset - diskOffset;
        if (fileEntry.zip64) $183a0115a003f583$var$setZip64ExtraInfo(fileEntry, options);
        else if (fileEntry.offset >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a)) throw new Error($183a0115a003f583$export$2866c0d2403d5bac);
        zipWriter.offset += fileEntry.length;
        return fileEntry;
    } catch (error) {
        if (bufferedWrite && writingBufferedEntryData || !bufferedWrite && writingEntryData) {
            zipWriter.hasCorruptedEntries = true;
            if (error) try {
                error.corruptedEntry = true;
            } catch (_error) {
            // ignored
            }
            if (bufferedWrite) zipWriter.offset += fileWriter.writable.size;
            else zipWriter.offset = fileWriter.writable.size;
        }
        files.delete(name);
        throw error;
    } finally{
        if (bufferedWrite) zipWriter.bufferedWrites--;
        if (releaseLockCurrentFileEntry) releaseLockCurrentFileEntry();
        if (releaseLockWriter) releaseLockWriter();
    }
    function requestLockCurrentFileEntry() {
        fileEntry.lock = new Promise((resolve)=>releaseLockCurrentFileEntry = resolve);
    }
    async function requestLockWriter() {
        zipWriter.writerLocked = true;
        const { lockWriter: lockWriter  } = zipWriter;
        zipWriter.lockWriter = new Promise((resolve)=>releaseLockWriter = ()=>{
                zipWriter.writerLocked = false;
                resolve();
            });
        await lockWriter;
    }
    async function skipDiskIfNeeded(writable) {
        if (headerInfo.localHeaderArray.length > writer.availableSize) {
            writer.availableSize = 0;
            await $183a0115a003f583$var$writeData(writable, new Uint8Array());
        }
    }
}
async function $183a0115a003f583$var$createFileEntry(reader, writer, { diskNumberStart: diskNumberStart , lock: lock  }, entryInfo, config, options) {
    const { headerInfo: headerInfo , dataDescriptorInfo: dataDescriptorInfo  } = entryInfo;
    const { localHeaderArray: localHeaderArray , headerArray: headerArray , lastModDate: lastModDate , rawLastModDate: rawLastModDate , encrypted: encrypted , compressed: compressed , version: version , compressionMethod: compressionMethod , rawExtraFieldExtendedTimestamp: rawExtraFieldExtendedTimestamp , rawExtraFieldNTFS: rawExtraFieldNTFS , rawExtraFieldAES: rawExtraFieldAES  } = headerInfo;
    const { dataDescriptorArray: dataDescriptorArray  } = dataDescriptorInfo;
    const { rawFilename: rawFilename , lastAccessDate: lastAccessDate , creationDate: creationDate , password: password , level: level , zip64: zip64 , zip64UncompressedSize: zip64UncompressedSize , zip64CompressedSize: zip64CompressedSize , zip64Offset: zip64Offset , zip64DiskNumberStart: zip64DiskNumberStart , zipCrypto: zipCrypto , dataDescriptor: dataDescriptor , directory: directory , versionMadeBy: versionMadeBy , rawComment: rawComment , rawExtraField: rawExtraField , useWebWorkers: useWebWorkers , onstart: onstart , onprogress: onprogress , onend: onend , signal: signal , encryptionStrength: encryptionStrength , extendedTimestamp: extendedTimestamp , msDosCompatible: msDosCompatible , internalFileAttribute: internalFileAttribute , externalFileAttribute: externalFileAttribute , useCompressionStream: useCompressionStream  } = options;
    const fileEntry = {
        lock: lock,
        versionMadeBy: versionMadeBy,
        zip64: zip64,
        directory: Boolean(directory),
        filenameUTF8: true,
        rawFilename: rawFilename,
        commentUTF8: true,
        rawComment: rawComment,
        rawExtraFieldExtendedTimestamp: rawExtraFieldExtendedTimestamp,
        rawExtraFieldNTFS: rawExtraFieldNTFS,
        rawExtraFieldAES: rawExtraFieldAES,
        rawExtraField: rawExtraField,
        extendedTimestamp: extendedTimestamp,
        msDosCompatible: msDosCompatible,
        internalFileAttribute: internalFileAttribute,
        externalFileAttribute: externalFileAttribute,
        diskNumberStart: diskNumberStart
    };
    let compressedSize = 0;
    let uncompressedSize = 0;
    let signature;
    const { writable: writable  } = writer;
    if (reader) {
        reader.chunkSize = (0, $efd91934aae95642$export$f0bad416b890a4ec)(config);
        await $183a0115a003f583$var$writeData(writable, localHeaderArray);
        const readable = reader.readable;
        const size = readable.size = reader.size;
        const workerOptions = {
            options: {
                codecType: (0, $0ca1613652845fc5$export$c8ea3b6e95d7ab36),
                level: level,
                password: password,
                encryptionStrength: encryptionStrength,
                zipCrypto: encrypted && zipCrypto,
                passwordVerification: encrypted && zipCrypto && rawLastModDate >> 8 & 0xFF,
                signed: true,
                compressed: compressed,
                encrypted: encrypted,
                useWebWorkers: useWebWorkers,
                useCompressionStream: useCompressionStream,
                transferStreams: false
            },
            config: config,
            streamOptions: {
                signal: signal,
                size: size,
                onstart: onstart,
                onprogress: onprogress,
                onend: onend
            }
        };
        const result = await (0, $eb7b040113c02588$export$dd2e08b4a54c623f)({
            readable: readable,
            writable: writable
        }, workerOptions);
        writable.size += result.size;
        signature = result.signature;
        uncompressedSize = reader.size = readable.size;
        compressedSize = result.size;
    } else await $183a0115a003f583$var$writeData(writable, localHeaderArray);
    let rawExtraFieldZip64;
    if (zip64) {
        let rawExtraFieldZip64Length = 4;
        if (zip64UncompressedSize) rawExtraFieldZip64Length += 8;
        if (zip64CompressedSize) rawExtraFieldZip64Length += 8;
        if (zip64Offset) rawExtraFieldZip64Length += 8;
        if (zip64DiskNumberStart) rawExtraFieldZip64Length += 4;
        rawExtraFieldZip64 = new Uint8Array(rawExtraFieldZip64Length);
    } else rawExtraFieldZip64 = new Uint8Array();
    $183a0115a003f583$var$setEntryInfo({
        signature: signature,
        rawExtraFieldZip64: rawExtraFieldZip64,
        compressedSize: compressedSize,
        uncompressedSize: uncompressedSize,
        headerInfo: headerInfo,
        dataDescriptorInfo: dataDescriptorInfo
    }, options);
    if (dataDescriptor) await $183a0115a003f583$var$writeData(writable, dataDescriptorArray);
    Object.assign(fileEntry, {
        uncompressedSize: uncompressedSize,
        compressedSize: compressedSize,
        lastModDate: lastModDate,
        rawLastModDate: rawLastModDate,
        creationDate: creationDate,
        lastAccessDate: lastAccessDate,
        encrypted: encrypted,
        length: $183a0115a003f583$var$getLength(localHeaderArray, dataDescriptorArray) + compressedSize,
        compressionMethod: compressionMethod,
        version: version,
        headerArray: headerArray,
        signature: signature,
        rawExtraFieldZip64: rawExtraFieldZip64,
        zip64UncompressedSize: zip64UncompressedSize,
        zip64CompressedSize: zip64CompressedSize,
        zip64Offset: zip64Offset,
        zip64DiskNumberStart: zip64DiskNumberStart
    });
    return fileEntry;
}
function $183a0115a003f583$var$getHeaderInfo(options) {
    const { rawFilename: rawFilename , lastModDate: lastModDate , lastAccessDate: lastAccessDate , creationDate: creationDate , password: password , level: level , zip64: zip64 , zipCrypto: zipCrypto , dataDescriptor: dataDescriptor , directory: directory , rawExtraField: rawExtraField , encryptionStrength: encryptionStrength , extendedTimestamp: extendedTimestamp  } = options;
    const compressed = level !== 0 && !directory;
    const encrypted = Boolean(password && $183a0115a003f583$var$getLength(password));
    let version = options.version;
    let rawExtraFieldAES;
    if (encrypted && !zipCrypto) {
        rawExtraFieldAES = new Uint8Array($183a0115a003f583$var$getLength($183a0115a003f583$var$EXTRAFIELD_DATA_AES) + 2);
        const extraFieldAESView = $183a0115a003f583$var$getDataView(rawExtraFieldAES);
        $183a0115a003f583$var$setUint16(extraFieldAESView, 0, (0, $cb6f24583fb9d4f7$export$714aa3fe052f4e13));
        $183a0115a003f583$var$arraySet(rawExtraFieldAES, $183a0115a003f583$var$EXTRAFIELD_DATA_AES, 2);
        $183a0115a003f583$var$setUint8(extraFieldAESView, 8, encryptionStrength);
    } else rawExtraFieldAES = new Uint8Array();
    let rawExtraFieldNTFS;
    let rawExtraFieldExtendedTimestamp;
    if (extendedTimestamp) {
        rawExtraFieldExtendedTimestamp = new Uint8Array(9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0));
        const extraFieldExtendedTimestampView = $183a0115a003f583$var$getDataView(rawExtraFieldExtendedTimestamp);
        $183a0115a003f583$var$setUint16(extraFieldExtendedTimestampView, 0, (0, $cb6f24583fb9d4f7$export$6cfe9e8823acaac3));
        $183a0115a003f583$var$setUint16(extraFieldExtendedTimestampView, 2, $183a0115a003f583$var$getLength(rawExtraFieldExtendedTimestamp) - 4);
        const extraFieldExtendedTimestampFlag = 0x1 + (lastAccessDate ? 0x2 : 0) + (creationDate ? 0x4 : 0);
        $183a0115a003f583$var$setUint8(extraFieldExtendedTimestampView, 4, extraFieldExtendedTimestampFlag);
        $183a0115a003f583$var$setUint32(extraFieldExtendedTimestampView, 5, Math.floor(lastModDate.getTime() / 1000));
        if (lastAccessDate) $183a0115a003f583$var$setUint32(extraFieldExtendedTimestampView, 9, Math.floor(lastAccessDate.getTime() / 1000));
        if (creationDate) $183a0115a003f583$var$setUint32(extraFieldExtendedTimestampView, 13, Math.floor(creationDate.getTime() / 1000));
        try {
            rawExtraFieldNTFS = new Uint8Array(36);
            const extraFieldNTFSView = $183a0115a003f583$var$getDataView(rawExtraFieldNTFS);
            const lastModTimeNTFS = $183a0115a003f583$var$getTimeNTFS(lastModDate);
            $183a0115a003f583$var$setUint16(extraFieldNTFSView, 0, (0, $cb6f24583fb9d4f7$export$93e014de2b9c33c8));
            $183a0115a003f583$var$setUint16(extraFieldNTFSView, 2, 32);
            $183a0115a003f583$var$setUint16(extraFieldNTFSView, 8, (0, $cb6f24583fb9d4f7$export$109a97d45e55cdec));
            $183a0115a003f583$var$setUint16(extraFieldNTFSView, 10, 24);
            $183a0115a003f583$var$setBigUint64(extraFieldNTFSView, 12, lastModTimeNTFS);
            $183a0115a003f583$var$setBigUint64(extraFieldNTFSView, 20, $183a0115a003f583$var$getTimeNTFS(lastAccessDate) || lastModTimeNTFS);
            $183a0115a003f583$var$setBigUint64(extraFieldNTFSView, 28, $183a0115a003f583$var$getTimeNTFS(creationDate) || lastModTimeNTFS);
        } catch (_error) {
            rawExtraFieldNTFS = new Uint8Array();
        }
    } else rawExtraFieldNTFS = rawExtraFieldExtendedTimestamp = new Uint8Array();
    let bitFlag = (0, $cb6f24583fb9d4f7$export$fb6e9f896320db55);
    if (dataDescriptor) bitFlag = bitFlag | (0, $cb6f24583fb9d4f7$export$3ec1d940e3bc0a58);
    let compressionMethod = (0, $cb6f24583fb9d4f7$export$6135a805f19e5577);
    if (compressed) compressionMethod = (0, $cb6f24583fb9d4f7$export$2cf0a12381b29e07);
    if (zip64) version = version > (0, $cb6f24583fb9d4f7$export$c695aaa0200b0023) ? version : (0, $cb6f24583fb9d4f7$export$c695aaa0200b0023);
    if (encrypted) {
        bitFlag = bitFlag | (0, $cb6f24583fb9d4f7$export$7db0c075c39cb343);
        if (!zipCrypto) {
            version = version > (0, $cb6f24583fb9d4f7$export$476ad4f47ce8ae93) ? version : (0, $cb6f24583fb9d4f7$export$476ad4f47ce8ae93);
            compressionMethod = (0, $cb6f24583fb9d4f7$export$367f2443b409227a);
            if (compressed) rawExtraFieldAES[9] = (0, $cb6f24583fb9d4f7$export$2cf0a12381b29e07);
        }
    }
    const headerArray = new Uint8Array(26);
    const headerView = $183a0115a003f583$var$getDataView(headerArray);
    $183a0115a003f583$var$setUint16(headerView, 0, version);
    $183a0115a003f583$var$setUint16(headerView, 2, bitFlag);
    $183a0115a003f583$var$setUint16(headerView, 4, compressionMethod);
    const dateArray = new Uint32Array(1);
    const dateView = $183a0115a003f583$var$getDataView(dateArray);
    let lastModDateMsDos;
    if (lastModDate < (0, $cb6f24583fb9d4f7$export$c21855736e7fcd29)) lastModDateMsDos = (0, $cb6f24583fb9d4f7$export$c21855736e7fcd29);
    else if (lastModDate > (0, $cb6f24583fb9d4f7$export$c4acb27cbfd4cf71)) lastModDateMsDos = (0, $cb6f24583fb9d4f7$export$c4acb27cbfd4cf71);
    else lastModDateMsDos = lastModDate;
    $183a0115a003f583$var$setUint16(dateView, 0, (lastModDateMsDos.getHours() << 6 | lastModDateMsDos.getMinutes()) << 5 | lastModDateMsDos.getSeconds() / 2);
    $183a0115a003f583$var$setUint16(dateView, 2, (lastModDateMsDos.getFullYear() - 1980 << 4 | lastModDateMsDos.getMonth() + 1) << 5 | lastModDateMsDos.getDate());
    const rawLastModDate = dateArray[0];
    $183a0115a003f583$var$setUint32(headerView, 6, rawLastModDate);
    $183a0115a003f583$var$setUint16(headerView, 22, $183a0115a003f583$var$getLength(rawFilename));
    const extraFieldLength = $183a0115a003f583$var$getLength(rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
    $183a0115a003f583$var$setUint16(headerView, 24, extraFieldLength);
    const localHeaderArray = new Uint8Array(30 + $183a0115a003f583$var$getLength(rawFilename) + extraFieldLength);
    const localHeaderView = $183a0115a003f583$var$getDataView(localHeaderArray);
    $183a0115a003f583$var$setUint32(localHeaderView, 0, (0, $cb6f24583fb9d4f7$export$2b2cf5904cb82788));
    $183a0115a003f583$var$arraySet(localHeaderArray, headerArray, 4);
    $183a0115a003f583$var$arraySet(localHeaderArray, rawFilename, 30);
    $183a0115a003f583$var$arraySet(localHeaderArray, rawExtraFieldAES, 30 + $183a0115a003f583$var$getLength(rawFilename));
    $183a0115a003f583$var$arraySet(localHeaderArray, rawExtraFieldExtendedTimestamp, 30 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldAES));
    $183a0115a003f583$var$arraySet(localHeaderArray, rawExtraFieldNTFS, 30 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp));
    $183a0115a003f583$var$arraySet(localHeaderArray, rawExtraField, 30 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS));
    return {
        localHeaderArray: localHeaderArray,
        headerArray: headerArray,
        headerView: headerView,
        lastModDate: lastModDate,
        rawLastModDate: rawLastModDate,
        encrypted: encrypted,
        compressed: compressed,
        version: version,
        compressionMethod: compressionMethod,
        rawExtraFieldExtendedTimestamp: rawExtraFieldExtendedTimestamp,
        rawExtraFieldNTFS: rawExtraFieldNTFS,
        rawExtraFieldAES: rawExtraFieldAES
    };
}
function $183a0115a003f583$var$getDataDescriptorInfo(options) {
    const { zip64: zip64 , dataDescriptor: dataDescriptor , dataDescriptorSignature: dataDescriptorSignature  } = options;
    let dataDescriptorArray = new Uint8Array();
    let dataDescriptorView, dataDescriptorOffset = 0;
    if (dataDescriptor) {
        dataDescriptorArray = new Uint8Array(zip64 ? dataDescriptorSignature ? 24 : 20 : dataDescriptorSignature ? 16 : 12);
        dataDescriptorView = $183a0115a003f583$var$getDataView(dataDescriptorArray);
        if (dataDescriptorSignature) {
            dataDescriptorOffset = 4;
            $183a0115a003f583$var$setUint32(dataDescriptorView, 0, (0, $cb6f24583fb9d4f7$export$fb8fb01339553b17));
        }
    }
    return {
        dataDescriptorArray: dataDescriptorArray,
        dataDescriptorView: dataDescriptorView,
        dataDescriptorOffset: dataDescriptorOffset
    };
}
function $183a0115a003f583$var$setEntryInfo(entryInfo, options) {
    const { signature: signature , rawExtraFieldZip64: rawExtraFieldZip64 , compressedSize: compressedSize , uncompressedSize: uncompressedSize , headerInfo: headerInfo , dataDescriptorInfo: dataDescriptorInfo  } = entryInfo;
    const { headerView: headerView , encrypted: encrypted  } = headerInfo;
    const { dataDescriptorView: dataDescriptorView , dataDescriptorOffset: dataDescriptorOffset  } = dataDescriptorInfo;
    const { zip64: zip64 , zip64UncompressedSize: zip64UncompressedSize , zip64CompressedSize: zip64CompressedSize , zipCrypto: zipCrypto , dataDescriptor: dataDescriptor  } = options;
    if ((!encrypted || zipCrypto) && signature !== (0, $cb6f24583fb9d4f7$export$a43287864529b8fd)) {
        $183a0115a003f583$var$setUint32(headerView, 10, signature);
        if (dataDescriptor) $183a0115a003f583$var$setUint32(dataDescriptorView, dataDescriptorOffset, signature);
    }
    if (zip64) {
        const rawExtraFieldZip64View = $183a0115a003f583$var$getDataView(rawExtraFieldZip64);
        $183a0115a003f583$var$setUint16(rawExtraFieldZip64View, 0, (0, $cb6f24583fb9d4f7$export$3da9e4d76b1bf88));
        $183a0115a003f583$var$setUint16(rawExtraFieldZip64View, 2, rawExtraFieldZip64.length - 4);
        let rawExtraFieldZip64Offset = 4;
        if (zip64UncompressedSize) {
            $183a0115a003f583$var$setUint32(headerView, 18, (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a));
            $183a0115a003f583$var$setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(uncompressedSize));
            rawExtraFieldZip64Offset += 8;
        }
        if (zip64CompressedSize) {
            $183a0115a003f583$var$setUint32(headerView, 14, (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a));
            $183a0115a003f583$var$setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(compressedSize));
        }
        if (dataDescriptor) {
            $183a0115a003f583$var$setBigUint64(dataDescriptorView, dataDescriptorOffset + 4, BigInt(compressedSize));
            $183a0115a003f583$var$setBigUint64(dataDescriptorView, dataDescriptorOffset + 12, BigInt(uncompressedSize));
        }
    } else {
        $183a0115a003f583$var$setUint32(headerView, 14, compressedSize);
        $183a0115a003f583$var$setUint32(headerView, 18, uncompressedSize);
        if (dataDescriptor) {
            $183a0115a003f583$var$setUint32(dataDescriptorView, dataDescriptorOffset + 4, compressedSize);
            $183a0115a003f583$var$setUint32(dataDescriptorView, dataDescriptorOffset + 8, uncompressedSize);
        }
    }
}
async function $183a0115a003f583$var$writeExtraHeaderInfo(fileEntry, entryData, writable, { zipCrypto: zipCrypto  }) {
    const arrayBuffer = await $183a0115a003f583$var$sliceAsArrayBuffer(entryData, 0, 26);
    const arrayBufferView = new DataView(arrayBuffer);
    if (!fileEntry.encrypted || zipCrypto) $183a0115a003f583$var$setUint32(arrayBufferView, 14, fileEntry.signature);
    if (fileEntry.zip64) {
        $183a0115a003f583$var$setUint32(arrayBufferView, 18, (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a));
        $183a0115a003f583$var$setUint32(arrayBufferView, 22, (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a));
    } else {
        $183a0115a003f583$var$setUint32(arrayBufferView, 18, fileEntry.compressedSize);
        $183a0115a003f583$var$setUint32(arrayBufferView, 22, fileEntry.uncompressedSize);
    }
    await $183a0115a003f583$var$writeData(writable, new Uint8Array(arrayBuffer));
    return entryData.slice(arrayBuffer.byteLength);
}
function $183a0115a003f583$var$setZip64ExtraInfo(fileEntry, options) {
    const { rawExtraFieldZip64: rawExtraFieldZip64 , offset: offset , diskNumberStart: diskNumberStart  } = fileEntry;
    const { zip64UncompressedSize: zip64UncompressedSize , zip64CompressedSize: zip64CompressedSize , zip64Offset: zip64Offset , zip64DiskNumberStart: zip64DiskNumberStart  } = options;
    const rawExtraFieldZip64View = $183a0115a003f583$var$getDataView(rawExtraFieldZip64);
    let rawExtraFieldZip64Offset = 4;
    if (zip64UncompressedSize) rawExtraFieldZip64Offset += 8;
    if (zip64CompressedSize) rawExtraFieldZip64Offset += 8;
    if (zip64Offset) {
        $183a0115a003f583$var$setBigUint64(rawExtraFieldZip64View, rawExtraFieldZip64Offset, BigInt(offset));
        rawExtraFieldZip64Offset += 8;
    }
    if (zip64DiskNumberStart) $183a0115a003f583$var$setUint32(rawExtraFieldZip64View, rawExtraFieldZip64Offset, diskNumberStart);
}
async function $183a0115a003f583$var$closeFile(zipWriter, comment, options) {
    const { files: files , writer: writer  } = zipWriter;
    const { diskOffset: diskOffset , writable: writable  } = writer;
    let { diskNumber: diskNumber  } = writer;
    let offset = 0;
    let directoryDataLength = 0;
    let directoryOffset = zipWriter.offset - diskOffset;
    let filesLength = files.size;
    for (const [, { rawFilename: rawFilename , rawExtraFieldZip64: rawExtraFieldZip64 , rawExtraFieldAES: rawExtraFieldAES , rawExtraField: rawExtraField , rawComment: rawComment , rawExtraFieldExtendedTimestamp: rawExtraFieldExtendedTimestamp , rawExtraFieldNTFS: rawExtraFieldNTFS  }] of files)directoryDataLength += 46 + $183a0115a003f583$var$getLength(rawFilename, rawComment, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
    const directoryArray = new Uint8Array(directoryDataLength);
    const directoryView = $183a0115a003f583$var$getDataView(directoryArray);
    await (0, $53e25169918aa98b$export$a0b98872cda67175)(writer);
    let directoryDiskOffset = 0;
    for (const [indexFileEntry, fileEntry] of Array.from(files.values()).entries()){
        const { offset: fileEntryOffset , rawFilename: rawFilename , rawExtraFieldZip64: rawExtraFieldZip64 , rawExtraFieldAES: rawExtraFieldAES , rawExtraFieldNTFS: rawExtraFieldNTFS , rawExtraField: rawExtraField , rawComment: rawComment , versionMadeBy: versionMadeBy , headerArray: headerArray , directory: directory , zip64: zip64 , zip64UncompressedSize: zip64UncompressedSize , zip64CompressedSize: zip64CompressedSize , zip64DiskNumberStart: zip64DiskNumberStart , zip64Offset: zip64Offset , msDosCompatible: msDosCompatible , internalFileAttribute: internalFileAttribute , externalFileAttribute: externalFileAttribute , extendedTimestamp: extendedTimestamp , lastModDate: lastModDate , diskNumberStart: diskNumberStart , uncompressedSize: uncompressedSize , compressedSize: compressedSize  } = fileEntry;
        let rawExtraFieldExtendedTimestamp;
        if (extendedTimestamp) {
            rawExtraFieldExtendedTimestamp = new Uint8Array(9);
            const extraFieldExtendedTimestampView = $183a0115a003f583$var$getDataView(rawExtraFieldExtendedTimestamp);
            $183a0115a003f583$var$setUint16(extraFieldExtendedTimestampView, 0, (0, $cb6f24583fb9d4f7$export$6cfe9e8823acaac3));
            $183a0115a003f583$var$setUint16(extraFieldExtendedTimestampView, 2, $183a0115a003f583$var$getLength(rawExtraFieldExtendedTimestamp) - 4);
            $183a0115a003f583$var$setUint8(extraFieldExtendedTimestampView, 4, 0x1);
            $183a0115a003f583$var$setUint32(extraFieldExtendedTimestampView, 5, Math.floor(lastModDate.getTime() / 1000));
        } else rawExtraFieldExtendedTimestamp = new Uint8Array();
        const extraFieldLength = $183a0115a003f583$var$getLength(rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
        $183a0115a003f583$var$setUint32(directoryView, offset, (0, $cb6f24583fb9d4f7$export$a72d49bf27f9bcd));
        $183a0115a003f583$var$setUint16(directoryView, offset + 4, versionMadeBy);
        const headerView = $183a0115a003f583$var$getDataView(headerArray);
        if (!zip64UncompressedSize) $183a0115a003f583$var$setUint32(headerView, 18, uncompressedSize);
        if (!zip64CompressedSize) $183a0115a003f583$var$setUint32(headerView, 14, compressedSize);
        $183a0115a003f583$var$arraySet(directoryArray, headerArray, offset + 6);
        $183a0115a003f583$var$setUint16(directoryView, offset + 30, extraFieldLength);
        $183a0115a003f583$var$setUint16(directoryView, offset + 32, $183a0115a003f583$var$getLength(rawComment));
        $183a0115a003f583$var$setUint16(directoryView, offset + 34, zip64 && zip64DiskNumberStart ? (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd) : diskNumberStart);
        $183a0115a003f583$var$setUint16(directoryView, offset + 36, internalFileAttribute);
        if (externalFileAttribute) $183a0115a003f583$var$setUint32(directoryView, offset + 38, externalFileAttribute);
        else if (directory && msDosCompatible) $183a0115a003f583$var$setUint8(directoryView, offset + 38, (0, $cb6f24583fb9d4f7$export$2d169f352844a92f));
        $183a0115a003f583$var$setUint32(directoryView, offset + 42, zip64 && zip64Offset ? (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a) : fileEntryOffset);
        $183a0115a003f583$var$arraySet(directoryArray, rawFilename, offset + 46);
        $183a0115a003f583$var$arraySet(directoryArray, rawExtraFieldZip64, offset + 46 + $183a0115a003f583$var$getLength(rawFilename));
        $183a0115a003f583$var$arraySet(directoryArray, rawExtraFieldAES, offset + 46 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldZip64));
        $183a0115a003f583$var$arraySet(directoryArray, rawExtraFieldExtendedTimestamp, offset + 46 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES));
        $183a0115a003f583$var$arraySet(directoryArray, rawExtraFieldNTFS, offset + 46 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp));
        $183a0115a003f583$var$arraySet(directoryArray, rawExtraField, offset + 46 + $183a0115a003f583$var$getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS));
        $183a0115a003f583$var$arraySet(directoryArray, rawComment, offset + 46 + $183a0115a003f583$var$getLength(rawFilename) + extraFieldLength);
        const directoryEntryLength = 46 + $183a0115a003f583$var$getLength(rawFilename, rawComment) + extraFieldLength;
        if (offset - directoryDiskOffset > writer.availableSize) {
            writer.availableSize = 0;
            await $183a0115a003f583$var$writeData(writable, directoryArray.slice(directoryDiskOffset, offset));
            directoryDiskOffset = offset;
        }
        offset += directoryEntryLength;
        if (options.onprogress) try {
            await options.onprogress(indexFileEntry + 1, files.size, new (0, $49205c704188ee40$export$3bb977b3ba9d3b59)(fileEntry));
        } catch (_error) {
        // ignored
        }
    }
    await $183a0115a003f583$var$writeData(writable, directoryDiskOffset ? directoryArray.slice(directoryDiskOffset) : directoryArray);
    let lastDiskNumber = writer.diskNumber;
    const { availableSize: availableSize  } = writer;
    if (availableSize < (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68)) lastDiskNumber++;
    let zip64 = $183a0115a003f583$var$getOptionValue(zipWriter, options, "zip64");
    if (directoryOffset >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a) || directoryDataLength >= (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a) || filesLength >= (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd) || lastDiskNumber >= (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) {
        if (zip64 === false) throw new Error($183a0115a003f583$export$2866c0d2403d5bac);
        else zip64 = true;
    }
    const endOfdirectoryArray = new Uint8Array(zip64 ? (0, $cb6f24583fb9d4f7$export$4edccc0d25441f8c) : (0, $cb6f24583fb9d4f7$export$6383d4b2e2323b68));
    const endOfdirectoryView = $183a0115a003f583$var$getDataView(endOfdirectoryArray);
    offset = 0;
    if (zip64) {
        $183a0115a003f583$var$setUint32(endOfdirectoryView, 0, (0, $cb6f24583fb9d4f7$export$8414b1953f7f48c6));
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 4, BigInt(44));
        $183a0115a003f583$var$setUint16(endOfdirectoryView, 12, 45);
        $183a0115a003f583$var$setUint16(endOfdirectoryView, 14, 45);
        $183a0115a003f583$var$setUint32(endOfdirectoryView, 16, lastDiskNumber);
        $183a0115a003f583$var$setUint32(endOfdirectoryView, 20, diskNumber);
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 24, BigInt(filesLength));
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 32, BigInt(filesLength));
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 40, BigInt(directoryDataLength));
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 48, BigInt(directoryOffset));
        $183a0115a003f583$var$setUint32(endOfdirectoryView, 56, (0, $cb6f24583fb9d4f7$export$5078166106cbcc66));
        $183a0115a003f583$var$setBigUint64(endOfdirectoryView, 64, BigInt(directoryOffset) + BigInt(directoryDataLength));
        $183a0115a003f583$var$setUint32(endOfdirectoryView, 72, lastDiskNumber + 1);
        const supportZip64SplitFile = $183a0115a003f583$var$getOptionValue(zipWriter, options, "supportZip64SplitFile", true);
        if (supportZip64SplitFile) {
            lastDiskNumber = (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd);
            diskNumber = (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd);
        }
        filesLength = (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd);
        directoryOffset = (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
        directoryDataLength = (0, $cb6f24583fb9d4f7$export$dbfc2ae0cf3df69a);
        offset += (0, $cb6f24583fb9d4f7$export$9eb09cdd39f04a62) + (0, $cb6f24583fb9d4f7$export$c545bb91a1b43732);
    }
    $183a0115a003f583$var$setUint32(endOfdirectoryView, offset, (0, $cb6f24583fb9d4f7$export$13a06f7e64cf6a1));
    $183a0115a003f583$var$setUint16(endOfdirectoryView, offset + 4, lastDiskNumber);
    $183a0115a003f583$var$setUint16(endOfdirectoryView, offset + 6, diskNumber);
    $183a0115a003f583$var$setUint16(endOfdirectoryView, offset + 8, filesLength);
    $183a0115a003f583$var$setUint16(endOfdirectoryView, offset + 10, filesLength);
    $183a0115a003f583$var$setUint32(endOfdirectoryView, offset + 12, directoryDataLength);
    $183a0115a003f583$var$setUint32(endOfdirectoryView, offset + 16, directoryOffset);
    const commentLength = $183a0115a003f583$var$getLength(comment);
    if (commentLength) {
        if (commentLength <= (0, $cb6f24583fb9d4f7$export$4164cee1a26178fd)) $183a0115a003f583$var$setUint16(endOfdirectoryView, offset + 20, commentLength);
        else throw new Error($183a0115a003f583$export$aa00b8eb8e30f01e);
    }
    await $183a0115a003f583$var$writeData(writable, endOfdirectoryArray);
    if (commentLength) await $183a0115a003f583$var$writeData(writable, comment);
}
function $183a0115a003f583$var$sliceAsArrayBuffer(blob, start, end) {
    if (start || end) return blob.slice(start, end).arrayBuffer();
    else return blob.arrayBuffer();
}
async function $183a0115a003f583$var$writeData(writable, array) {
    const streamWriter = writable.getWriter();
    await streamWriter.ready;
    writable.size += $183a0115a003f583$var$getLength(array);
    await streamWriter.write(array);
    streamWriter.releaseLock();
}
function $183a0115a003f583$var$getTimeNTFS(date) {
    if (date) return (BigInt(date.getTime()) + BigInt(11644473600000)) * BigInt(10000);
}
function $183a0115a003f583$var$getOptionValue(zipWriter, options, name, defaultValue) {
    const result = options[name] === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) ? zipWriter.options[name] : options[name];
    return result === (0, $cb6f24583fb9d4f7$export$a43287864529b8fd) ? defaultValue : result;
}
function $183a0115a003f583$var$getMaximumCompressedSize(uncompressedSize) {
    return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}
function $183a0115a003f583$var$setUint8(view, offset, value) {
    view.setUint8(offset, value);
}
function $183a0115a003f583$var$setUint16(view, offset, value) {
    view.setUint16(offset, value, true);
}
function $183a0115a003f583$var$setUint32(view, offset, value) {
    view.setUint32(offset, value, true);
}
function $183a0115a003f583$var$setBigUint64(view, offset, value) {
    view.setBigUint64(offset, value, true);
}
function $183a0115a003f583$var$arraySet(array, typedArray, offset) {
    array.set(typedArray, offset);
}
function $183a0115a003f583$var$getDataView(array) {
    return new DataView(array.buffer);
}
function $183a0115a003f583$var$getLength(...arrayLikes) {
    let result = 0;
    arrayLikes.forEach((arrayLike)=>arrayLike && (result += arrayLike.length));
    return result;
}


/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global WritableStream */ // deno-lint-ignore-file no-this-alias




class $0218ca92e030fc58$var$ZipEntry {
    constructor(fs, name, params, parent){
        const zipEntry = this;
        if (fs.root && parent && parent.getChildByName(name)) throw new Error("Entry filename already exists");
        if (!params) params = {};
        Object.assign(zipEntry, {
            fs: fs,
            name: name,
            data: params.data,
            options: params.options,
            id: fs.entries.length,
            parent: parent,
            children: [],
            uncompressedSize: 0
        });
        fs.entries.push(zipEntry);
        if (parent) zipEntry.parent.children.push(zipEntry);
    }
    moveTo(target) {
        // deprecated
        const zipEntry = this;
        zipEntry.fs.move(zipEntry, target);
    }
    getFullname() {
        return this.getRelativeName();
    }
    getRelativeName(ancestor = this.fs.root) {
        const zipEntry = this;
        let relativeName = zipEntry.name;
        let entry = zipEntry.parent;
        while(entry && entry != ancestor){
            relativeName = (entry.name ? entry.name + "/" : "") + relativeName;
            entry = entry.parent;
        }
        return relativeName;
    }
    isDescendantOf(ancestor) {
        let entry = this.parent;
        while(entry && entry.id != ancestor.id)entry = entry.parent;
        return Boolean(entry);
    }
    rename(name) {
        const parent = this.parent;
        if (parent && parent.getChildByName(name)) throw new Error("Entry filename already exists");
        else this.name = name;
    }
}
class $0218ca92e030fc58$var$ZipFileEntry extends $0218ca92e030fc58$var$ZipEntry {
    constructor(fs, name, params, parent){
        super(fs, name, params, parent);
        const zipEntry = this;
        zipEntry.Reader = params.Reader;
        zipEntry.Writer = params.Writer;
        if (params.getData) zipEntry.getData = params.getData;
    }
    clone() {
        return new $0218ca92e030fc58$var$ZipFileEntry(this.fs, this.name, this);
    }
    async getData(writer, options = {}) {
        const zipEntry = this;
        if (!writer || writer.constructor == zipEntry.Writer && zipEntry.data) return zipEntry.data;
        else {
            const reader = zipEntry.reader = new zipEntry.Reader(zipEntry.data, options);
            await Promise.all([
                (0, $53e25169918aa98b$export$a0b98872cda67175)(reader),
                (0, $53e25169918aa98b$export$a0b98872cda67175)(writer, zipEntry.data.uncompressedSize)
            ]);
            const readable = reader.readable;
            readable.size = zipEntry.uncompressedSize = reader.size;
            await readable.pipeTo(writer.writable);
            return writer.getData ? writer.getData() : writer.writable;
        }
    }
    isPasswordProtected() {
        return this.data.encrypted;
    }
    async checkPassword(password, options = {}) {
        const zipEntry = this;
        if (zipEntry.isPasswordProtected()) {
            options.password = password;
            options.checkPasswordOnly = true;
            try {
                await zipEntry.data.getData(null, options);
                return true;
            } catch (error) {
                if (error.message == (0, $2c2bd6ed85f5e732$export$91dc8f5b62a122fd)) return false;
                else throw error;
            }
        } else return true;
    }
    getText(encoding, options) {
        return this.getData(new (0, $53e25169918aa98b$export$4e2ccb0172e96d5b)(encoding), options);
    }
    getBlob(mimeType, options) {
        return this.getData(new (0, $53e25169918aa98b$export$b1948fceba813858)(mimeType), options);
    }
    getData64URI(mimeType, options) {
        return this.getData(new (0, $53e25169918aa98b$export$e54009c5f365f844)(mimeType), options);
    }
    getUint8Array(options) {
        return this.getData(new (0, $53e25169918aa98b$export$1581aa6fcae2be12)(), options);
    }
    getWritable(writable = new WritableStream(), options) {
        return this.getData({
            writable: writable
        }, options);
    }
    replaceBlob(blob) {
        Object.assign(this, {
            data: blob,
            Reader: (0, $53e25169918aa98b$export$aa5015be25fe7f79),
            Writer: (0, $53e25169918aa98b$export$b1948fceba813858),
            reader: null
        });
    }
    replaceText(text) {
        Object.assign(this, {
            data: text,
            Reader: (0, $53e25169918aa98b$export$43d3fd7deddee00),
            Writer: (0, $53e25169918aa98b$export$4e2ccb0172e96d5b),
            reader: null
        });
    }
    replaceData64URI(dataURI) {
        Object.assign(this, {
            data: dataURI,
            Reader: (0, $53e25169918aa98b$export$b43666fe9f809ae0),
            Writer: (0, $53e25169918aa98b$export$e54009c5f365f844),
            reader: null
        });
    }
    replaceUint8Array(array) {
        Object.assign(this, {
            data: array,
            Reader: (0, $53e25169918aa98b$export$d6e62de78e81ef8b),
            Writer: (0, $53e25169918aa98b$export$1581aa6fcae2be12),
            reader: null
        });
    }
    replaceReadable(readable) {
        Object.assign(this, {
            data: null,
            Reader: function() {
                return {
                    readable: readable
                };
            },
            Writer: null,
            reader: null
        });
    }
}
class $0218ca92e030fc58$var$ZipDirectoryEntry extends $0218ca92e030fc58$var$ZipEntry {
    constructor(fs, name, params, parent){
        super(fs, name, params, parent);
        this.directory = true;
    }
    clone(deepClone) {
        const zipEntry = this;
        const clonedEntry = new $0218ca92e030fc58$var$ZipDirectoryEntry(zipEntry.fs, zipEntry.name);
        if (deepClone) clonedEntry.children = zipEntry.children.map((child)=>{
            const childClone = child.clone(deepClone);
            childClone.parent = clonedEntry;
            return childClone;
        });
        return clonedEntry;
    }
    addDirectory(name, options) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            options: options
        }, true);
    }
    addText(name, text, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            data: text,
            Reader: (0, $53e25169918aa98b$export$43d3fd7deddee00),
            Writer: (0, $53e25169918aa98b$export$4e2ccb0172e96d5b),
            options: options
        });
    }
    addBlob(name, blob, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            data: blob,
            Reader: (0, $53e25169918aa98b$export$aa5015be25fe7f79),
            Writer: (0, $53e25169918aa98b$export$b1948fceba813858),
            options: options
        });
    }
    addData64URI(name, dataURI, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            data: dataURI,
            Reader: (0, $53e25169918aa98b$export$b43666fe9f809ae0),
            Writer: (0, $53e25169918aa98b$export$e54009c5f365f844),
            options: options
        });
    }
    addUint8Array(name, array, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            data: array,
            Reader: (0, $53e25169918aa98b$export$d6e62de78e81ef8b),
            Writer: (0, $53e25169918aa98b$export$1581aa6fcae2be12),
            options: options
        });
    }
    addHttpContent(name, url, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            data: url,
            Reader: class extends (0, $53e25169918aa98b$export$34b9a22e660cb902) {
                constructor(url){
                    super(url, options);
                }
            },
            options: options
        });
    }
    addReadable(name, readable, options = {}) {
        return $0218ca92e030fc58$var$addChild(this, name, {
            Reader: function() {
                return {
                    readable: readable
                };
            },
            options: options
        });
    }
    addFileSystemEntry(fileSystemEntry, options = {}) {
        return $0218ca92e030fc58$var$addFileSystemEntry(this, fileSystemEntry, options);
    }
    addData(name, params) {
        return $0218ca92e030fc58$var$addChild(this, name, params);
    }
    importBlob(blob, options) {
        return this.importZip(new (0, $53e25169918aa98b$export$aa5015be25fe7f79)(blob), options);
    }
    importData64URI(dataURI, options) {
        return this.importZip(new (0, $53e25169918aa98b$export$b43666fe9f809ae0)(dataURI), options);
    }
    importUint8Array(array, options) {
        return this.importZip(new (0, $53e25169918aa98b$export$d6e62de78e81ef8b)(array), options);
    }
    importHttpContent(url, options) {
        return this.importZip(new (0, $53e25169918aa98b$export$34b9a22e660cb902)(url, options), options);
    }
    importReadable(readable, options) {
        return this.importZip({
            readable: readable
        }, options);
    }
    exportBlob(options = {}) {
        return this.exportZip(new (0, $53e25169918aa98b$export$b1948fceba813858)(options.mimeType || "application/zip"), options);
    }
    exportData64URI(options = {}) {
        return this.exportZip(new (0, $53e25169918aa98b$export$e54009c5f365f844)(options.mimeType || "application/zip"), options);
    }
    exportUint8Array(options = {}) {
        return this.exportZip(new (0, $53e25169918aa98b$export$1581aa6fcae2be12)(), options);
    }
    async exportWritable(writable = new WritableStream(), options = {}) {
        await this.exportZip({
            writable: writable
        }, options);
        return writable;
    }
    async importZip(reader, options = {}) {
        await (0, $53e25169918aa98b$export$a0b98872cda67175)(reader);
        const zipReader = new (0, $8800f6a9ee230af8$export$25e4af3b2af7fc76)(reader, options);
        const importedEntries = [];
        const entries = await zipReader.getEntries();
        for (const entry of entries){
            let parent = this;
            try {
                const path = entry.filename.split("/");
                const name = path.pop();
                path.forEach((pathPart, pathIndex)=>{
                    const previousParent = parent;
                    parent = parent.getChildByName(pathPart);
                    if (!parent) {
                        parent = new $0218ca92e030fc58$var$ZipDirectoryEntry(this.fs, pathPart, {
                            data: pathIndex == path.length - 1 ? entry : null
                        }, previousParent);
                        importedEntries.push(parent);
                    }
                });
                if (!entry.directory) importedEntries.push($0218ca92e030fc58$var$addChild(parent, name, {
                    data: entry,
                    Reader: $0218ca92e030fc58$var$getZipBlobReader(Object.assign({}, options))
                }));
            } catch (error) {
                try {
                    error.cause = {
                        entry: entry
                    };
                } catch (_error) {
                // ignored
                }
                throw error;
            }
        }
        return importedEntries;
    }
    async exportZip(writer, options) {
        const zipEntry = this;
        await Promise.all([
            $0218ca92e030fc58$var$initReaders(zipEntry, options.readerOptions),
            (0, $53e25169918aa98b$export$a0b98872cda67175)(writer)
        ]);
        const zipWriter = new (0, $183a0115a003f583$export$50f5658480930b4c)(writer, options);
        await $0218ca92e030fc58$var$exportZip(zipWriter, zipEntry, $0218ca92e030fc58$var$getTotalSize([
            zipEntry
        ], "uncompressedSize"), options);
        await zipWriter.close();
        return writer.getData ? writer.getData() : writer.writable;
    }
    getChildByName(name) {
        const children = this.children;
        for(let childIndex = 0; childIndex < children.length; childIndex++){
            const child = children[childIndex];
            if (child.name == name) return child;
        }
    }
    isPasswordProtected() {
        const children = this.children;
        for(let childIndex = 0; childIndex < children.length; childIndex++){
            const child = children[childIndex];
            if (child.isPasswordProtected()) return true;
        }
        return false;
    }
    async checkPassword(password, options = {}) {
        const children = this.children;
        const result = await Promise.all(children.map((child)=>child.checkPassword(password, options)));
        return !result.includes(false);
    }
}
class $0218ca92e030fc58$var$FS {
    constructor(){
        $0218ca92e030fc58$var$resetFS(this);
    }
    get children() {
        return this.root.children;
    }
    remove(entry) {
        $0218ca92e030fc58$var$detach(entry);
        this.entries[entry.id] = null;
    }
    move(entry, destination) {
        if (entry == this.root) throw new Error("Root directory cannot be moved");
        else {
            if (destination.directory) {
                if (!destination.isDescendantOf(entry)) {
                    if (entry != destination) {
                        if (destination.getChildByName(entry.name)) throw new Error("Entry filename already exists");
                        $0218ca92e030fc58$var$detach(entry);
                        entry.parent = destination;
                        destination.children.push(entry);
                    }
                } else throw new Error("Entry is a ancestor of target entry");
            } else throw new Error("Target entry is not a directory");
        }
    }
    find(fullname) {
        const path = fullname.split("/");
        let node = this.root;
        for(let index = 0; node && index < path.length; index++)node = node.getChildByName(path[index]);
        return node;
    }
    getById(id) {
        return this.entries[id];
    }
    getChildByName(name) {
        return this.root.getChildByName(name);
    }
    addDirectory(name, options) {
        return this.root.addDirectory(name, options);
    }
    addText(name, text, options) {
        return this.root.addText(name, text, options);
    }
    addBlob(name, blob, options) {
        return this.root.addBlob(name, blob, options);
    }
    addData64URI(name, dataURI, options) {
        return this.root.addData64URI(name, dataURI, options);
    }
    addHttpContent(name, url, options) {
        return this.root.addHttpContent(name, url, options);
    }
    addReadable(name, readable, options) {
        return this.root.addReadable(name, readable, options);
    }
    addFileSystemEntry(fileSystemEntry, options) {
        return this.root.addFileSystemEntry(fileSystemEntry, options);
    }
    addData(name, params) {
        return this.root.addData(name, params);
    }
    importBlob(blob, options) {
        $0218ca92e030fc58$var$resetFS(this);
        return this.root.importBlob(blob, options);
    }
    importData64URI(dataURI, options) {
        $0218ca92e030fc58$var$resetFS(this);
        return this.root.importData64URI(dataURI, options);
    }
    importUint8Array(array, options) {
        $0218ca92e030fc58$var$resetFS(this);
        return this.root.importUint8Array(array, options);
    }
    importHttpContent(url, options) {
        $0218ca92e030fc58$var$resetFS(this);
        return this.root.importHttpContent(url, options);
    }
    importReadable(readable, options) {
        $0218ca92e030fc58$var$resetFS(this);
        return this.root.importReadable(readable, options);
    }
    importZip(reader, options) {
        return this.root.importZip(reader, options);
    }
    exportBlob(options) {
        return this.root.exportBlob(options);
    }
    exportData64URI(options) {
        return this.root.exportData64URI(options);
    }
    exportUint8Array(options) {
        return this.root.exportUint8Array(options);
    }
    exportWritable(writable, options) {
        return this.root.exportWritable(writable, options);
    }
    isPasswordProtected() {
        return this.root.isPasswordProtected();
    }
    async checkPassword(password, options) {
        return this.root.checkPassword(password, options);
    }
}
const $0218ca92e030fc58$export$69c37fe6a10b78d4 = {
    FS: $0218ca92e030fc58$var$FS,
    ZipDirectoryEntry: $0218ca92e030fc58$var$ZipDirectoryEntry,
    ZipFileEntry: $0218ca92e030fc58$var$ZipFileEntry
};
function $0218ca92e030fc58$var$getTotalSize(entries, propertyName) {
    let size = 0;
    entries.forEach(process);
    return size;
    function process(entry) {
        size += entry[propertyName];
        if (entry.children) entry.children.forEach(process);
    }
}
function $0218ca92e030fc58$var$getZipBlobReader(options) {
    return class extends (0, $53e25169918aa98b$export$2f7a2f0e90c07dc4) {
        constructor(entry, options = {}){
            super();
            this.entry = entry;
            this.options = options;
        }
        async init() {
            const zipBlobReader = this;
            zipBlobReader.size = zipBlobReader.entry.uncompressedSize;
            const data = await zipBlobReader.entry.getData(new (0, $53e25169918aa98b$export$b1948fceba813858)(), Object.assign({}, zipBlobReader.options, options));
            zipBlobReader.data = data;
            zipBlobReader.blobReader = new (0, $53e25169918aa98b$export$aa5015be25fe7f79)(data);
            super.init();
        }
        readUint8Array(index, length) {
            return this.blobReader.readUint8Array(index, length);
        }
    };
}
async function $0218ca92e030fc58$var$initReaders(entry, options) {
    if (entry.children.length) await Promise.all(entry.children.map(async (child)=>{
        if (child.directory) await $0218ca92e030fc58$var$initReaders(child, options);
        else {
            const reader = child.reader = new child.Reader(child.data, options);
            try {
                await (0, $53e25169918aa98b$export$a0b98872cda67175)(reader);
            } catch (error) {
                try {
                    error.entryId = child.id;
                    error.cause = {
                        entry: child
                    };
                } catch (_error) {
                // ignored
                }
                throw error;
            }
            child.uncompressedSize = reader.size;
        }
    }));
}
function $0218ca92e030fc58$var$detach(entry) {
    if (entry.parent) {
        const children = entry.parent.children;
        children.forEach((child, index)=>{
            if (child.id == entry.id) children.splice(index, 1);
        });
    }
}
async function $0218ca92e030fc58$var$exportZip(zipWriter, entry, totalSize, options) {
    const selectedEntry = entry;
    const entryOffsets = new Map();
    await process(zipWriter, entry);
    async function process(zipWriter, entry) {
        await exportChild();
        async function exportChild() {
            if (options.bufferedWrite) await Promise.allSettled(entry.children.map(processChild));
            else for (const child of entry.children)await processChild(child);
        }
        async function processChild(child) {
            const name = options.relativePath ? child.getRelativeName(selectedEntry) : child.getFullname();
            let externalFileAttribute;
            let versionMadeBy;
            let comment;
            let lastModDate;
            let childOptions = child.options || {};
            if (child.data instanceof (0, $49205c704188ee40$export$3bb977b3ba9d3b59)) ({ externalFileAttribute: externalFileAttribute , versionMadeBy: versionMadeBy , comment: comment , lastModDate: lastModDate  } = child.data);
            await zipWriter.add(name, child.reader, Object.assign({
                directory: child.directory
            }, Object.assign({}, options, {
                externalFileAttribute: externalFileAttribute,
                versionMadeBy: versionMadeBy,
                comment: comment,
                lastModDate: lastModDate,
                onprogress: async (indexProgress)=>{
                    if (options.onprogress) {
                        entryOffsets.set(name, indexProgress);
                        try {
                            await options.onprogress(Array.from(entryOffsets.values()).reduce((previousValue, currentValue)=>previousValue + currentValue), totalSize);
                        } catch (_error) {
                        // ignored
                        }
                    }
                }
            }, childOptions)));
            await process(zipWriter, child);
        }
    }
}
async function $0218ca92e030fc58$var$addFileSystemEntry(zipEntry, fileSystemEntry, options) {
    if (fileSystemEntry.isDirectory) {
        const entry = zipEntry.addDirectory(fileSystemEntry.name, options);
        await addDirectory(entry, fileSystemEntry);
        return entry;
    } else return new Promise((resolve, reject)=>fileSystemEntry.file((file)=>resolve(zipEntry.addBlob(fileSystemEntry.name, file, options)), reject));
    async function addDirectory(zipEntry, fileEntry) {
        const children = await getChildren(fileEntry);
        for (const child of children)if (child.isDirectory) await addDirectory(zipEntry.addDirectory(child.name, options), child);
        else await new Promise((resolve, reject)=>{
            child.file((file)=>{
                const childZipEntry = zipEntry.addBlob(child.name, file, options);
                childZipEntry.uncompressedSize = file.size;
                resolve(childZipEntry);
            }, reject);
        });
    }
    function getChildren(fileEntry) {
        return new Promise((resolve, reject)=>{
            let entries = [];
            if (fileEntry.isDirectory) readEntries(fileEntry.createReader());
            if (fileEntry.isFile) resolve(entries);
            function readEntries(directoryReader) {
                directoryReader.readEntries((temporaryEntries)=>{
                    if (!temporaryEntries.length) resolve(entries);
                    else {
                        entries = entries.concat(temporaryEntries);
                        readEntries(directoryReader);
                    }
                }, reject);
            }
        });
    }
}
function $0218ca92e030fc58$var$resetFS(fs) {
    fs.entries = [];
    fs.root = new $0218ca92e030fc58$var$ZipDirectoryEntry(fs);
}
function $0218ca92e030fc58$var$addChild(parent, name, params, directory) {
    if (parent.directory) return directory ? new $0218ca92e030fc58$var$ZipDirectoryEntry(parent.fs, name, params, parent) : new $0218ca92e030fc58$var$ZipFileEntry(parent.fs, name, params, parent);
    else throw new Error("Parent entry is not a directory");
}


let $0782f9e05a29eeb3$var$baseURL;
try {
    $0782f9e05a29eeb3$var$baseURL = "file:///node_modules/@zip.js/zip.js/lib/zip-fs.js";
} catch (_error) {
// ignored
}
(0, $efd91934aae95642$export$8d21e34596265fa2)({
    baseURL: $0782f9e05a29eeb3$var$baseURL
});
(0, $6561ad2b1cab3e5c$export$2bee588cb9b7b41d)((0, $efd91934aae95642$export$8d21e34596265fa2));


(0, $efd91934aae95642$export$8d21e34596265fa2)({
    Deflate: $39b8545e666ec171$export$ae157b6234afe138,
    Inflate: $5d6fb71db276993f$export$d1de70a877d6e43c
});



const $afa9fb8bb7aaf429$var$API_URL = `https://civitai.com/api/v1/images`;
const $afa9fb8bb7aaf429$var$extractFilebasenameFromImageUrl = (url)=>{
    const filename = url.split("/").slice(-1)[0];
    return filename.split(".")[0];
};
const $afa9fb8bb7aaf429$export$c6ace8a485846f08 = async (modelId, postId)=>{
    let url = $afa9fb8bb7aaf429$var$API_URL;
    let params = [];
    if (postId) params.push(`postId=${postId}`);
    if (modelId) params.push(`modelId=${modelId}`);
    if (params.length > 0) url = `${url}?${params.join("&")}`;
    const response = await fetch(url);
    if (response.status >= 400) throw new Error(` ${response.status} ${response.statusText}`);
    return await response.json();
};
const $afa9fb8bb7aaf429$export$2ab75dd31a3868f2 = async (url)=>{
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "image/webp,image/jpeg,image/avif;q=0.9,image/apng;q=0.8,image/*;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                Origin: "https://civitai.com",
                Referer: "https://civitai.com/",
                Cookie: document.cookie
            }
        });
        const contentType = response.headers.get("content-type") || "";
        const blob = await response.blob();
        return {
            blob: blob,
            contentType: contentType
        };
    } catch (error) {
        if (url.includes("image.civitai.com")) return await $afa9fb8bb7aaf429$export$2ab75dd31a3868f2(url.replace("image.civitai.com", "imagecache.civitai.com"));
        throw error;
    }
};
const $afa9fb8bb7aaf429$export$b6bc24646229cedd = (button)=>(zipFilename)=>async (imgInfo)=>{
            const addedNames = new Set();
            const blobWriter = new (0, $53e25169918aa98b$export$b1948fceba813858)(`application/zip`);
            const zipWriter = new (0, $183a0115a003f583$export$50f5658480930b4c)(blobWriter);
            let counter = 0;
            let error = null;
            for (const x of imgInfo){
                if (button) button.innerText = `${counter + 1} / ${imgInfo.length} ${(0, $0fccda82d33153ac$export$ccac0588af5e2fe6)()}`;
                try {
                    const response = await $afa9fb8bb7aaf429$export$2ab75dd31a3868f2(x.url);
                    if (!response) throw new Error("response is null");
                    const { blob: blob , contentType: contentType  } = response;
                    let name = $afa9fb8bb7aaf429$var$extractFilebasenameFromImageUrl(x.url) || x.hash.replace(/[\;\:\?\*\.]/g, "_");
                    while(addedNames.has(name))name += "_";
                    const filename = contentType && `${name}.${contentType.split("/")[1]}` || `${name}.png`;
                    await zipWriter.add(filename, new (0, $53e25169918aa98b$export$aa5015be25fe7f79)(blob));
                    addedNames.add(name);
                    if (!!x.meta) {
                        const jsonFilename = name + ".json";
                        await zipWriter.add(jsonFilename, new (0, $53e25169918aa98b$export$43d3fd7deddee00)(JSON.stringify(x.meta)));
                    }
                    counter += 1;
                } catch (e) {
                    console.log("error: ", e.message, x.url);
                    error = new Error(`${e.message}, ${x.url}`);
                    break;
                }
                await (0, $0fccda82d33153ac$export$e772c8ff12451969)(100);
            }
            if (error) {
                alert(error.message);
                return;
            }
            (0, $b9a27db92abc3f0f$exports.saveAs)(await zipWriter.close(undefined, {}), zipFilename);
        };


const $9a7e0bde1a099030$var$BUTTON_ID = "download-all-gallery-images-and-prompts";
const $9a7e0bde1a099030$var$downloadGalleryImagesAndPrompts = (modelId, postId)=>async ()=>{
        const data = await (0, $afa9fb8bb7aaf429$export$c6ace8a485846f08)(modelId, postId);
        const button = await (0, $0fccda82d33153ac$export$1a1c301579a08d1e)(`#${$9a7e0bde1a099030$var$BUTTON_ID}`);
        if (!button) return;
        await (0, $afa9fb8bb7aaf429$export$b6bc24646229cedd)(button)(`modelId_${modelId}-postId_${postId}.zip`)(data.items.map((x)=>({
                ...x,
                url: x.url.replace(`width=${x.width}`, `width=${x.width},optimized=true`)
            })));
        if (button) {
            button.setAttribute("style", (0, $a5923d2edfc72bc5$export$dbe9a8011f5e5b2d));
            button.innerText = ` ${data.items.length} / ${data.items.length} ${(0, $0fccda82d33153ac$export$4d9f09007b08c03d)()}`;
        }
    };
const $9a7e0bde1a099030$var$downloadSingleImagesAndPrompts = async ()=>{
    const data = (0, $0fccda82d33153ac$export$ce1398d1c23018fa)();
    const model = data.props.pageProps.trpcState.json.queries[0];
    const { id: id , url: url , meta: meta , width: width , name: name , hash: hash  } = model.state.data;
    const imgUrl = (0, $0fccda82d33153ac$export$b56cc0ee0a85f41e)(url, width, name);
    const button = await (0, $0fccda82d33153ac$export$1a1c301579a08d1e)(`#${$9a7e0bde1a099030$var$BUTTON_ID}`);
    if (!button) return;
    await (0, $afa9fb8bb7aaf429$export$b6bc24646229cedd)(button)(`imageId_${id}.zip`)([
        {
            url: imgUrl,
            hash: hash,
            meta: meta
        }
    ]);
    if (button) {
        button.setAttribute("style", (0, $a5923d2edfc72bc5$export$dbe9a8011f5e5b2d));
        button.innerText = (0, $0fccda82d33153ac$export$4d9f09007b08c03d)();
    }
};
const $9a7e0bde1a099030$export$5fd187c0d03a79e = async ()=>{
    const matchedModel = window.location.href.match(/modelId=(?<modelId>\d*)/);
    const matchedModelVersion = window.location.href.match(/modelVersionId=(?<modelVersionId>\d*)/);
    const matchedPost = window.location.href.match(/postId=(?<postId>\d*)/);
    const modelId = matchedModel?.groups?.modelId || "";
    const modelVersionId = matchedModelVersion?.groups?.modelVersionId || "";
    const postId = matchedPost?.groups?.postId || "";
    document.querySelector(`#${$9a7e0bde1a099030$var$BUTTON_ID}`)?.remove();
    const button = document.createElement("button");
    if (!postId && !modelId && !modelVersionId) button.addEventListener("click", $9a7e0bde1a099030$var$downloadSingleImagesAndPrompts);
    else button.addEventListener("click", $9a7e0bde1a099030$var$downloadGalleryImagesAndPrompts(modelId, postId));
    button.id = $9a7e0bde1a099030$var$BUTTON_ID;
    button.innerText = (0, $0fccda82d33153ac$export$d397f86d22f413e8)();
    button.setAttribute("style", (0, $a5923d2edfc72bc5$export$fd4d27a26b4854f3));
    const buttonParent = document.querySelector("#freezeBlock .mantine-Stack-root");
    if (buttonParent) buttonParent.appendChild(button);
};





const $8d59c42601ba8f61$var$BUTTON_ID = "download-all-images-and-prompts";
const $8d59c42601ba8f61$var$getModelInfo = ()=>{
    const data = (0, $0fccda82d33153ac$export$ce1398d1c23018fa)();
    const model = data.props.pageProps.trpcState.json.queries[1];
    return model.state.data;
};
const $8d59c42601ba8f61$var$getImagesData = ()=>{
    const data = (0, $0fccda82d33153ac$export$ce1398d1c23018fa)();
    const images = data.props.pageProps.trpcState.json.queries[0];
    return images.state.data.pages[0].items;
};
const $8d59c42601ba8f61$var$downloadImagesAndPrompts = async ()=>{
    const button = await (0, $0fccda82d33153ac$export$1a1c301579a08d1e)(`#${$8d59c42601ba8f61$var$BUTTON_ID}`);
    button?.removeEventListener("click", $8d59c42601ba8f61$var$downloadImagesAndPrompts);
    const model = await $8d59c42601ba8f61$var$getModelInfo();
    const modelName = model.name;
    const modelVersions = model.modelVersions;
    const imageData = $8d59c42601ba8f61$var$getImagesData();
    const modelVersionName = modelVersions.find((x)=>x.id === imageData[0].modelVersionId).name || "";
    const urlAndMeta = imageData.map((x)=>({
            url: (0, $0fccda82d33153ac$export$b56cc0ee0a85f41e)(x.url, x.width, x.name),
            hash: x.hash,
            meta: x.meta
        }));
    await (0, $afa9fb8bb7aaf429$export$b6bc24646229cedd)(button)(`${modelName}[${model.id}]_${modelVersionName}.zip`)(urlAndMeta);
    if (button) {
        button.setAttribute("style", (0, $a5923d2edfc72bc5$export$dbe9a8011f5e5b2d));
        button.innerText = ` ${urlAndMeta.length} / ${urlAndMeta.length} ${(0, $0fccda82d33153ac$export$4d9f09007b08c03d)()}`;
    }
};
const $8d59c42601ba8f61$export$1403061a46292b4 = async ()=>{
    const downloadButtonSelector = "a[href^='/api/download/models/']";
    await (0, $0fccda82d33153ac$export$1a1c301579a08d1e)(downloadButtonSelector);
    const button = document.createElement("a");
    button.addEventListener("click", $8d59c42601ba8f61$var$downloadImagesAndPrompts);
    button.id = $8d59c42601ba8f61$var$BUTTON_ID;
    button.innerText = (0, $0fccda82d33153ac$export$d397f86d22f413e8)();
    button.setAttribute("style", (0, $a5923d2edfc72bc5$export$fd4d27a26b4854f3));
    const buttonParent = document.querySelector(downloadButtonSelector);
    if (buttonParent) buttonParent.parentNode?.appendChild(button);
};



// see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
const $29e4e9967394a818$var$observer = new MutationObserver(async (_mutationList)=>{
    if ($29e4e9967394a818$var$prevHref !== window.location.href) {
        if (!window.location.href.includes("/images/") || !$29e4e9967394a818$var$prevHref.includes("/images/")) window.location.reload();
        $29e4e9967394a818$var$prevHref = window.location.href;
    }
});
let $29e4e9967394a818$var$prevHref = "";
(async function() {
    $29e4e9967394a818$var$prevHref = window.location.href;
    (0, $0fccda82d33153ac$export$bef1f36f5486a6a3)("start");
    const html = document.querySelector("html");
    if (html) $29e4e9967394a818$var$observer.observe(html, {
        attributes: true,
        childList: true,
        subtree: true
    });
    if (window.location.href.includes("/models/")) {
        (0, $0fccda82d33153ac$export$bef1f36f5486a6a3)("models");
        // FIXME: adhoc: wait for Nextjs rendering finish
        await (0, $0fccda82d33153ac$export$e772c8ff12451969)(2000);
        await (0, $8d59c42601ba8f61$export$1403061a46292b4)();
        const showMoreButton = Array.from(document.querySelectorAll("button")).filter((x)=>x.innerHTML === "Show More")[0];
        showMoreButton && showMoreButton.click();
    // TODO: add download all gallery images
    }
    if (window.location.href.includes("/images/")) {
        (0, $0fccda82d33153ac$export$bef1f36f5486a6a3)("images");
        // FIXME: adhoc: wait for Nextjs rendering finish
        await (0, $0fccda82d33153ac$export$e772c8ff12451969)(2000);
        await (0, $9a7e0bde1a099030$export$5fd187c0d03a79e)();
    }
    (0, $0fccda82d33153ac$export$bef1f36f5486a6a3)("done");
})();

})();
