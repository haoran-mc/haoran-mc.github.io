/*
 *  /MathJax/jax/output/HTML-CSS/fonts/TeX/fontdata.js
 *
 *  Copyright (c) 2009-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(i, b, q) {
    var p = "2.7.0";
    var m = "MathJax_Main",
        r = "MathJax_Main-bold",
        o = "MathJax_Math-italic",
        h = "MathJax_AMS",
        g = "MathJax_Size1",
        f = "MathJax_Size2",
        e = "MathJax_Size3",
        c = "MathJax_Size4";
    var j = "H",
        a = "V",
        l = {
            load: "extra",
            dir: j
        },
        d = {
            load: "extra",
            dir: a
        };
    var k = [8722, m, 0, 0, 0, -0.31, -0.31];
    var n = [61, m, 0, 0, 0, 0, 0.1];
    i.Augment({
        FONTDATA: {
            version: p,
            TeX_factor: 1,
            baselineskip: 1.2,
            lineH: 0.8,
            lineD: 0.2,
            hasStyleChar: true,
            FONTS: {
                MathJax_Main: "Main/Regular/Main.js",
                "MathJax_Main-bold": "Main/Bold/Main.js",
                "MathJax_Main-italic": "Main/Italic/Main.js",
                "MathJax_Math-italic": "Math/Italic/Main.js",
                "MathJax_Math-bold-italic": "Math/BoldItalic/Main.js",
                MathJax_Caligraphic: "Caligraphic/Regular/Main.js",
                MathJax_Size1: "Size1/Regular/Main.js",
                MathJax_Size2: "Size2/Regular/Main.js",
                MathJax_Size3: "Size3/Regular/Main.js",
                MathJax_Size4: "Size4/Regular/Main.js",
                MathJax_AMS: "AMS/Regular/Main.js",
                MathJax_Fraktur: "Fraktur/Regular/Main.js",
                "MathJax_Fraktur-bold": "Fraktur/Bold/Main.js",
                MathJax_SansSerif: "SansSerif/Regular/Main.js",
                "MathJax_SansSerif-bold": "SansSerif/Bold/Main.js",
                "MathJax_SansSerif-italic": "SansSerif/Italic/Main.js",
                MathJax_Script: "Script/Regular/Main.js",
                MathJax_Typewriter: "Typewriter/Regular/Main.js",
                "MathJax_Caligraphic-bold": "Caligraphic/Bold/Main.js"
            },
            VARIANT: {
                normal: {
                    fonts: [m, g, h],
                    offsetG: 945,
                    variantG: "italic",
                    remap: {
                        913: 65,
                        914: 66,
                        917: 69,
                        918: 90,
                        919: 72,
                        921: 73,
                        922: 75,
                        924: 77,
                        925: 78,
                        927: 79,
                        929: 80,
                        932: 84,
                        935: 88,
                        8214: 8741,
                        8726: [8726, "-TeX-variant"],
                        8463: [8463, "-TeX-variant"],
                        8242: [39, "sans-serif-italic"],
                        10744: [47, b.VARIANT.ITALIC]
                    }
                },
                bold: {
                    fonts: [r, g, h],
                    bold: true,
                    offsetG: 945,
                    variantG: "bold-italic",
                    remap: {
                        913: 65,
                        914: 66,
                        917: 69,
                        918: 90,
                        919: 72,
                        921: 73,
                        922: 75,
                        924: 77,
                        925: 78,
                        927: 79,
                        929: 80,
                        932: 84,
                        935: 88,
                        10744: [47, "bold-italic"],
                        8214: 8741,
                        8602: "\u2190\u0338",
                        8603: "\u2192\u0338",
                        8622: "\u2194\u0338",
                        8653: "\u21D0\u0338",
                        8654: "\u21D4\u0338",
                        8655: "\u21D2\u0338",
                        8708: "\u2203\u0338",
                        8740: "\u2223\u0338",
                        8742: "\u2225\u0338",
                        8769: "\u223C\u0338",
                        8775: "\u2245\u0338",
                        8814: "<\u0338",
                        8815: ">\u0338",
                        8816: "\u2264\u0338",
                        8817: "\u2265\u0338",
                        8832: "\u227A\u0338",
                        8833: "\u227B\u0338",
                        8840: "\u2286\u0338",
                        8841: "\u2287\u0338",
                        8876: "\u22A2\u0338",
                        8877: "\u22A8\u0338",
                        8928: "\u227C\u0338",
                        8929: "\u227D\u0338"
                    }
                },
                italic: {
                    fonts: [o, "MathJax_Main-italic", m, g, h],
                    italic: true,
                    remap: {
                        913: 65,
                        914: 66,
                        917: 69,
                        918: 90,
                        919: 72,
                        921: 73,
                        922: 75,
                        924: 77,
                        925: 78,
                        927: 79,
                        929: 80,
                        932: 84,
                        935: 88
                    }
                },
                "bold-italic": {
                    fonts: ["MathJax_Math-bold-italic", r, g, h],
                    bold: true,
                    italic: true,
                    remap: {
                        913: 65,
                        914: 66,
                        917: 69,
                        918: 90,
                        919: 72,
                        921: 73,
                        922: 75,
                        924: 77,
                        925: 78,
                        927: 79,
                        929: 80,
                        932: 84,
                        935: 88
                    }
                },
                "double-struck": {
                    fonts: [h, m]
                },
                fraktur: {
                    fonts: ["MathJax_Fraktur", m, g, h]
                },
                "bold-fraktur": {
                    fonts: ["MathJax_Fraktur-bold", r, g, h],
                    bold: true
                },
                script: {
                    fonts: ["MathJax_Script", m, g, h]
                },
                "bold-script": {
                    fonts: ["MathJax_Script", r, g, h],
                    bold: true
                },
                "sans-serif": {
                    fonts: ["MathJax_SansSerif", m, g, h]
                },
                "bold-sans-serif": {
                    fonts: ["MathJax_SansSerif-bold", r, g, h],
                    bold: true
                },
                "sans-serif-italic": {
                    fonts: ["MathJax_SansSerif-italic", "MathJax_Main-italic", g, h],
                    italic: true
                },
                "sans-serif-bold-italic": {
                    fonts: ["MathJax_SansSerif-italic", "MathJax_Main-italic", g, h],
                    bold: true,
                    italic: true
                },
                monospace: {
                    fonts: ["MathJax_Typewriter", m, g, h]
                },
                "-tex-caligraphic": {
                    fonts: ["MathJax_Caligraphic", m],
                    offsetA: 65,
                    variantA: "italic"
                },
                "-tex-oldstyle": {
                    fonts: ["MathJax_Caligraphic", m]
                },
                "-tex-mathit": {
                    fonts: ["MathJax_Main-italic", o, m, g, h],
                    italic: true,
                    noIC: true,
                    remap: {
                        913: 65,
                        914: 66,
                        917: 69,
                        918: 90,
                        919: 72,
                        921: 73,
                        922: 75,
                        924: 77,
                        925: 78,
                        927: 79,
                        929: 80,
                        932: 84,
                        935: 88
                    }
                },
                "-TeX-variant": {
                    fonts: [h, m, g],
                    remap: {
                        8808: 57356,
                        8809: 57357,
                        8816: 57361,
                        8817: 57358,
                        10887: 57360,
                        10888: 57359,
                        8740: 57350,
                        8742: 57351,
                        8840: 57366,
                        8841: 57368,
                        8842: 57370,
                        8843: 57371,
                        10955: 57367,
                        10956: 57369,
                        988: 57352,
                        1008: 57353,
                        8726: [8726, b.VARIANT.NORMAL],
                        8463: [8463, b.VARIANT.NORMAL]
                    }
                },
                "-largeOp": {
                    fonts: [f, g, m]
                },
                "-smallOp": {
                    fonts: [g, m]
                },
                "-tex-caligraphic-bold": {
                    fonts: ["MathJax_Caligraphic-bold", "MathJax_Main-bold", "MathJax_Main", "MathJax_Math", "MathJax_Size1"],
                    bold: true,
                    offsetA: 65,
                    variantA: "bold-italic"
                },
                "-tex-oldstyle-bold": {
                    fonts: ["MathJax_Caligraphic-bold", "MathJax_Main-bold", "MathJax_Main", "MathJax_Math", "MathJax_Size1"],
                    bold: true
                }
            },
            RANGES: [{
                name: "alpha",
                low: 97,
                high: 122,
                offset: "A",
                add: 32
            }, {
                name: "number",
                low: 48,
                high: 57,
                offset: "N"
            }, {
                name: "greek",
                low: 945,
                high: 1014,
                offset: "G"
            }],
            RULECHAR: 8722,
            REMAP: {
                8254: 713,
                8400: 8636,
                8401: 8640,
                8406: 8592,
                8417: 8596,
                8428: 8641,
                8429: 8637,
                8430: 8592,
                8431: 8594,
                8432: 42,
                65079: 9182,
                65080: 9183,
                183: 8901,
                697: 8242,
                978: 933,
                8710: 916,
                8213: 8212,
                8215: 95,
                8226: 8729,
                8260: 47,
                8965: 8892,
                8966: 10846,
                9642: 9632,
                9652: 9650,
                9653: 9651,
                9656: 9654,
                9662: 9660,
                9663: 9661,
                9666: 9664,
                9001: 10216,
                9002: 10217,
                12296: 10216,
                12297: 10217,
                10072: 8739,
                10799: 215,
                9723: 9633,
                9724: 9632,
                8450: [67, b.VARIANT.DOUBLESTRUCK],
                8459: [72, b.VARIANT.SCRIPT],
                8460: [72, b.VARIANT.FRAKTUR],
                8461: [72, b.VARIANT.DOUBLESTRUCK],
                8462: [104, b.VARIANT.ITALIC],
                8464: [74, b.VARIANT.SCRIPT],
                8465: [73, b.VARIANT.FRAKTUR],
                8466: [76, b.VARIANT.SCRIPT],
                8469: [78, b.VARIANT.DOUBLESTRUCK],
                8473: [80, b.VARIANT.DOUBLESTRUCK],
                8474: [81, b.VARIANT.DOUBLESTRUCK],
                8475: [82, b.VARIANT.SCRIPT],
                8476: [82, b.VARIANT.FRAKTUR],
                8477: [82, b.VARIANT.DOUBLESTRUCK],
                8484: [90, b.VARIANT.DOUBLESTRUCK],
                8486: [937, b.VARIANT.NORMAL],
                8488: [90, b.VARIANT.FRAKTUR],
                8492: [66, b.VARIANT.SCRIPT],
                8493: [67, b.VARIANT.FRAKTUR],
                8496: [69, b.VARIANT.SCRIPT],
                8497: [70, b.VARIANT.SCRIPT],
                8499: [77, b.VARIANT.SCRIPT],
                8775: 8774,
                8988: 9484,
                8989: 9488,
                8990: 9492,
                8991: 9496,
                8708: "\u2203\u0338",
                8716: "\u220B\u0338",
                8772: "\u2243\u0338",
                8777: "\u2248\u0338",
                8802: "\u2261\u0338",
                8813: "\u224D\u0338",
                8820: "\u2272\u0338",
                8821: "\u2273\u0338",
                8824: "\u2276\u0338",
                8825: "\u2277\u0338",
                8836: "\u2282\u0338",
                8837: "\u2283\u0338",
                8930: "\u2291\u0338",
                8931: "\u2292\u0338",
                10764: "\u222C\u222C",
                8243: "\u2032\u2032",
                8244: "\u2032\u2032\u2032",
                8246: "\u2035\u2035",
                8247: "\u2035\u2035\u2035",
                8279: "\u2032\u2032\u2032\u2032",
                8411: "...",
                8412: "...."
            },
            REMAPACCENT: {
                "\u2192": "\u20D7",
                "\u2032": "'",
                "\u2035": "`"
            },
            REMAPACCENTUNDER: {},
            PLANE1MAP: [
                [119808, 119833, 65, b.VARIANT.BOLD],
                [119834, 119859, 97, b.VARIANT.BOLD],
                [119860, 119885, 65, b.VARIANT.ITALIC],
                [119886, 119911, 97, b.VARIANT.ITALIC],
                [119912, 119937, 65, b.VARIANT.BOLDITALIC],
                [119938, 119963, 97, b.VARIANT.BOLDITALIC],
                [119964, 119989, 65, b.VARIANT.SCRIPT],
                [120068, 120093, 65, b.VARIANT.FRAKTUR],
                [120094, 120119, 97, b.VARIANT.FRAKTUR],
                [120120, 120145, 65, b.VARIANT.DOUBLESTRUCK],
                [120172, 120197, 65, b.VARIANT.BOLDFRAKTUR],
                [120198, 120223, 97, b.VARIANT.BOLDFRAKTUR],
                [120224, 120249, 65, b.VARIANT.SANSSERIF],
                [120250, 120275, 97, b.VARIANT.SANSSERIF],
                [120276, 120301, 65, b.VARIANT.BOLDSANSSERIF],
                [120302, 120327, 97, b.VARIANT.BOLDSANSSERIF],
                [120328, 120353, 65, b.VARIANT.SANSSERIFITALIC],
                [120354, 120379, 97, b.VARIANT.SANSSERIFITALIC],
                [120432, 120457, 65, b.VARIANT.MONOSPACE],
                [120458, 120483, 97, b.VARIANT.MONOSPACE],
                [120488, 120513, 913, b.VARIANT.BOLD],
                [120546, 120570, 913, b.VARIANT.ITALIC],
                [120572, 120603, 945, b.VARIANT.ITALIC],
                [120604, 120628, 913, b.VARIANT.BOLDITALIC],
                [120630, 120661, 945, b.VARIANT.BOLDITALIC],
                [120662, 120686, 913, b.VARIANT.BOLDSANSSERIF],
                [120720, 120744, 913, b.VARIANT.SANSSERIFBOLDITALIC],
                [120782, 120791, 48, b.VARIANT.BOLD],
                [120802, 120811, 48, b.VARIANT.SANSSERIF],
                [120812, 120821, 48, b.VARIANT.BOLDSANSSERIF],
                [120822, 120831, 48, b.VARIANT.MONOSPACE]
            ],
            REMAPGREEK: {
                913: 65,
                914: 66,
                917: 69,
                918: 90,
                919: 72,
                921: 73,
                922: 75,
                924: 77,
                925: 78,
                927: 79,
                929: 80,
                930: 920,
                932: 84,
                935: 88,
                938: 8711,
                970: 8706,
                971: 1013,
                972: 977,
                973: 1008,
                974: 981,
                975: 1009,
                976: 982
            },
            RemapPlane1: function(v, u) {
                for (var t = 0, s = this.PLANE1MAP.length; t < s; t++) {
                    if (v < this.PLANE1MAP[t][0]) {
                        break
                    }
                    if (v <= this.PLANE1MAP[t][1]) {
                        v = v - this.PLANE1MAP[t][0] + this.PLANE1MAP[t][2];
                        if (this.REMAPGREEK[v]) {
                            v = this.REMAPGREEK[v]
                        }
                        u = this.VARIANT[this.PLANE1MAP[t][3]];
                        break
                    }
                }
                return {
                    n: v,
                    variant: u
                }
            },
            DELIMITERS: {
                40: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9115, c],
                        ext: [9116, c],
                        bot: [9117, c]
                    }
                },
                41: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9118, c],
                        ext: [9119, c],
                        bot: [9120, c]
                    }
                },
                47: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ]
                },
                91: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9121, c],
                        ext: [9122, c],
                        bot: [9123, c]
                    }
                },
                92: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ]
                },
                93: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9124, c],
                        ext: [9125, c],
                        bot: [9126, c]
                    }
                },
                123: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9127, c],
                        mid: [9128, c],
                        bot: [9129, c],
                        ext: [9130, c]
                    }
                },
                124: {
                    dir: a,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        ext: [8739, m]
                    }
                },
                125: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9131, c],
                        mid: [9132, c],
                        bot: [9133, c],
                        ext: [9130, c]
                    }
                },
                175: {
                    dir: j,
                    HW: [
                        [0.59, m]
                    ],
                    stretch: {
                        rep: [175, m]
                    }
                },
                710: {
                    dir: j,
                    HW: [
                        [0.267 + 0.25, m],
                        [0.567 + 0.25, g],
                        [1.005 + 0.33, f],
                        [1.447 + 0.33, e],
                        [1.909, c]
                    ]
                },
                732: {
                    dir: j,
                    HW: [
                        [0.333 + 0.25, m],
                        [0.555 + 0.25, g],
                        [1 + 0.33, f],
                        [1.443 + 0.33, e],
                        [1.887, c]
                    ]
                },
                8211: {
                    dir: j,
                    HW: [
                        [0.5, m]
                    ],
                    stretch: {
                        rep: [8211, m]
                    }
                },
                8214: {
                    dir: a,
                    HW: [
                        [0.602, g],
                        [1, m, null, 8741]
                    ],
                    stretch: {
                        ext: [8741, m]
                    }
                },
                8592: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        left: [8592, m],
                        rep: k
                    }
                },
                8593: {
                    dir: a,
                    HW: [
                        [0.888, m]
                    ],
                    stretch: {
                        top: [8593, g],
                        ext: [9168, g]
                    }
                },
                8594: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        rep: k,
                        right: [8594, m]
                    }
                },
                8595: {
                    dir: a,
                    HW: [
                        [0.888, m]
                    ],
                    stretch: {
                        ext: [9168, g],
                        bot: [8595, g]
                    }
                },
                8596: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        left: [8592, m],
                        rep: k,
                        right: [8594, m]
                    }
                },
                8597: {
                    dir: a,
                    HW: [
                        [1.044, m]
                    ],
                    stretch: {
                        top: [8593, g],
                        ext: [9168, g],
                        bot: [8595, g]
                    }
                },
                8656: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        left: [8656, m],
                        rep: n
                    }
                },
                8657: {
                    dir: a,
                    HW: [
                        [0.888, m]
                    ],
                    stretch: {
                        top: [8657, g],
                        ext: [8214, g]
                    }
                },
                8658: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        rep: n,
                        right: [8658, m]
                    }
                },
                8659: {
                    dir: a,
                    HW: [
                        [0.888, m]
                    ],
                    stretch: {
                        ext: [8214, g],
                        bot: [8659, g]
                    }
                },
                8660: {
                    dir: j,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        left: [8656, m],
                        rep: n,
                        right: [8658, m]
                    }
                },
                8661: {
                    dir: a,
                    HW: [
                        [1.044, m]
                    ],
                    stretch: {
                        top: [8657, g],
                        ext: [8214, g],
                        bot: [8659, g]
                    }
                },
                8722: {
                    dir: j,
                    HW: [
                        [0.5, m, 0, 8211]
                    ],
                    stretch: {
                        rep: k
                    }
                },
                8730: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [57345, c],
                        ext: [57344, c],
                        bot: [9143, c],
                        fullExtenders: true
                    }
                },
                8739: {
                    dir: a,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        ext: [8739, m]
                    }
                },
                8741: {
                    dir: a,
                    HW: [
                        [1, m]
                    ],
                    stretch: {
                        ext: [8741, m]
                    }
                },
                8968: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9121, c],
                        ext: [9122, c]
                    }
                },
                8969: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        top: [9124, c],
                        ext: [9125, c]
                    }
                },
                8970: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        ext: [9122, c],
                        bot: [9123, c]
                    }
                },
                8971: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ],
                    stretch: {
                        ext: [9125, c],
                        bot: [9126, c]
                    }
                },
                9130: {
                    dir: a,
                    HW: [
                        [0.32, c]
                    ],
                    stretch: {
                        top: [9130, c],
                        ext: [9130, c],
                        bot: [9130, c]
                    }
                },
                9136: {
                    dir: a,
                    HW: [
                        [0.989, m]
                    ],
                    stretch: {
                        top: [9127, c],
                        ext: [9130, c],
                        bot: [9133, c]
                    }
                },
                9137: {
                    dir: a,
                    HW: [
                        [0.989, m]
                    ],
                    stretch: {
                        top: [9131, c],
                        ext: [9130, c],
                        bot: [9129, c]
                    }
                },
                9168: {
                    dir: a,
                    HW: [
                        [0.602, g],
                        [1, m, null, 8739]
                    ],
                    stretch: {
                        ext: [8739, m]
                    }
                },
                9182: {
                    dir: j,
                    HW: [],
                    stretch: {
                        min: 0.9,
                        left: [57680, c],
                        mid: [
                            [57683, 57682], c
                        ],
                        right: [57681, c],
                        rep: [57684, c]
                    }
                },
                9183: {
                    dir: j,
                    HW: [],
                    stretch: {
                        min: 0.9,
                        left: [57682, c],
                        mid: [
                            [57681, 57680], c
                        ],
                        right: [57683, c],
                        rep: [57684, c]
                    }
                },
                10216: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ]
                },
                10217: {
                    dir: a,
                    HW: [
                        [1, m],
                        [1.2, g],
                        [1.8, f],
                        [2.4, e],
                        [3, c]
                    ]
                },
                10222: {
                    dir: a,
                    HW: [
                        [0.989, m]
                    ],
                    stretch: {
                        top: [9127, c],
                        ext: [9130, c],
                        bot: [9129, c]
                    }
                },
                10223: {
                    dir: a,
                    HW: [
                        [0.989, m]
                    ],
                    stretch: {
                        top: [9131, c],
                        ext: [9130, c],
                        bot: [9133, c]
                    }
                },
                45: {
                    alias: 8722,
                    dir: j
                },
                94: {
                    alias: 710,
                    dir: j
                },
                95: {
                    alias: 8722,
                    dir: j
                },
                126: {
                    alias: 732,
                    dir: j
                },
                713: {
                    alias: 175,
                    dir: j
                },
                770: {
                    alias: 710,
                    dir: j
                },
                771: {
                    alias: 732,
                    dir: j
                },
                780: {
                    alias: 711,
                    dir: j
                },
                818: {
                    alias: 8722,
                    dir: j
                },
                8212: {
                    alias: 8211,
                    dir: j
                },
                8213: {
                    alias: 8211,
                    dir: j
                },
                8215: {
                    alias: 8211,
                    dir: j
                },
                8254: {
                    alias: 175,
                    dir: j
                },
                8407: {
                    alias: 8594,
                    dir: j
                },
                8725: {
                    alias: 47,
                    dir: a
                },
                9001: {
                    alias: 10216,
                    dir: a
                },
                9002: {
                    alias: 10217,
                    dir: a
                },
                9135: {
                    alias: 8722,
                    dir: j
                },
                9472: {
                    alias: 8722,
                    dir: j
                },
                10072: {
                    alias: 8739,
                    dir: a
                },
                12296: {
                    alias: 10216,
                    dir: a
                },
                12297: {
                    alias: 10217,
                    dir: a
                },
                65079: {
                    alias: 9182,
                    dir: j
                },
                65080: {
                    alias: 9183,
                    dir: j
                },
                61: l,
                8606: l,
                8608: l,
                8612: l,
                8613: d,
                8614: l,
                8615: d,
                8624: d,
                8625: d,
                8636: l,
                8637: l,
                8638: d,
                8639: d,
                8640: l,
                8641: l,
                8642: d,
                8643: d,
                8666: l,
                8667: l,
                9140: l,
                9141: l,
                9180: l,
                9181: l,
                9184: l,
                9185: l,
                10502: l,
                10503: l,
                10574: l,
                10575: d,
                10576: l,
                10577: d,
                10586: l,
                10587: l,
                10588: d,
                10589: d,
                10590: l,
                10591: l,
                10592: d,
                10593: d,
                8978: {
                    alias: 9180,
                    dir: j
                },
                8994: {
                    alias: 9180,
                    dir: j
                },
                8995: {
                    alias: 9181,
                    dir: j
                },
                10229: {
                    alias: 8592,
                    dir: j
                },
                10230: {
                    alias: 8594,
                    dir: j
                },
                10231: {
                    alias: 8596,
                    dir: j
                },
                10232: {
                    alias: 8656,
                    dir: j
                },
                10233: {
                    alias: 8658,
                    dir: j
                },
                10234: {
                    alias: 8660,
                    dir: j
                },
                10235: {
                    alias: 8612,
                    dir: j
                },
                10236: {
                    alias: 8614,
                    dir: j
                },
                10237: {
                    alias: 10502,
                    dir: j
                },
                10238: {
                    alias: 10503,
                    dir: j
                }
            }
        }
    });
    i.Font.oldLoadComplete = i.Font.loadComplete;
    i.Font.loadComplete = function(u, v, t, s) {
        if (v != null) {
            this.oldLoadComplete(u, v, t, s)
        }
        if (u.family === g || u.family === f) {
            if (u.version === 1) {
                i.FONTDATA.VARIANT["-largeOp"].remap = {
                    8898: 8899,
                    8899: 8898
                };
                i.FONTDATA.VARIANT["-smallOp"].remap = {
                    8898: 8899,
                    8899: 8898
                }
            }
        }
    };
    i.FONTDATA.FONTS.MathJax_Caligraphic = {
        directory: "Caligraphic/Regular",
        family: "MathJax_Caligraphic",
        testString: "MATHJAX CALIGRAPHIC",
        skew: {
            65: 0.194,
            66: 0.139,
            67: 0.139,
            68: 0.0833,
            69: 0.111,
            70: 0.111,
            71: 0.111,
            72: 0.111,
            73: 0.0278,
            74: 0.167,
            75: 0.0556,
            76: 0.139,
            77: 0.139,
            78: 0.0833,
            79: 0.111,
            80: 0.0833,
            81: 0.111,
            82: 0.0833,
            83: 0.139,
            84: 0.0278,
            85: 0.0833,
            86: 0.0278,
            87: 0.0833,
            88: 0.139,
            89: 0.0833,
            90: 0.139
        },
        32: [0, 0, 250, 0, 0],
        48: [452, 22, 500, 39, 460],
        49: [453, 0, 500, 86, 426],
        50: [453, 0, 500, 44, 449],
        51: [452, 216, 500, 42, 456],
        52: [464, 194, 500, 28, 471],
        53: [453, 216, 500, 50, 448],
        54: [665, 22, 500, 42, 456],
        55: [463, 216, 500, 55, 485],
        56: [666, 21, 500, 43, 456],
        57: [453, 216, 500, 42, 457],
        65: [728, 50, 798, 30, 819],
        66: [705, 22, 657, 32, 664],
        67: [705, 25, 527, 12, 533],
        68: [683, 0, 771, 19, 766],
        69: [705, 22, 528, 30, 564],
        70: [683, 32, 719, 18, 829],
        71: [704, 119, 595, 44, 599],
        72: [683, 48, 845, 18, 803],
        73: [683, 0, 545, -30, 642],
        74: [683, 119, 678, 47, 839],
        75: [705, 22, 762, 32, 732],
        76: [705, 22, 690, 32, 656],
        77: [705, 50, 1201, 28, 1137],
        78: [789, 50, 820, -27, 979],
        79: [705, 22, 796, 58, 777],
        80: [683, 57, 696, 19, 733],
        81: [705, 131, 817, 114, 787],
        82: [682, 22, 848, 19, 837],
        83: [705, 22, 606, 18, 642],
        84: [717, 68, 545, 34, 833],
        85: [683, 28, 626, -17, 687],
        86: [683, 52, 613, 25, 658],
        87: [683, 53, 988, 25, 1034],
        88: [683, 0, 713, 52, 807],
        89: [683, 143, 668, 31, 714],
        90: [683, 0, 725, 37, 767],
        160: [0, 0, 250, 0, 0]
    };
    i.FONTDATA.FONTS["MathJax_Main-bold"] = {
        directory: "Main/Bold",
        family: "MathJax_Main",
        weight: "bold",
        testString: "MathJax Main ^ \u210F \u2223",
        skew: {
            305: 0.0319,
            567: 0.0958,
            8463: -0.0319,
            8467: 0.128,
            8706: 0.0958
        },
        Ranges: [
            [160, 255, "Latin1Supplement"],
            [256, 383, "LatinExtendedA"],
            [384, 591, "LatinExtendedB"],
            [688, 767, "SpacingModLetters"],
            [768, 879, "CombDiacritMarks"],
            [8192, 8303, "GeneralPunctuation"],
            [8400, 8447, "CombDiactForSymbols"],
            [8448, 8527, "LetterlikeSymbols"],
            [8592, 8703, "Arrows"],
            [8704, 8959, "MathOperators"],
            [8960, 9215, "MiscTechnical"],
            [9632, 9727, "GeometricShapes"],
            [9728, 9983, "MiscSymbols"],
            [10176, 10223, "MiscMathSymbolsA"],
            [10224, 10239, "SupplementalArrowsA"],
            [10752, 11007, "SuppMathOperators"]
        ],
        32: [0, 0, 250, 0, 0],
        33: [705, -1, 350, 89, 260],
        34: [694, -329, 603, 38, 492],
        35: [694, 193, 958, 64, 893],
        36: [750, 56, 575, 64, 510],
        37: [750, 56, 958, 65, 893],
        38: [705, 11, 894, 48, 836],
        39: [694, -329, 319, 74, 261],
        40: [750, 249, 447, 103, 382],
        41: [750, 249, 447, 64, 343],
        42: [750, -306, 575, 73, 501],
        43: [633, 131, 894, 64, 829],
        44: [171, 194, 319, 74, 258],
        45: [278, -166, 383, 13, 318],
        46: [171, -1, 319, 74, 245],
        47: [750, 250, 575, 63, 511],
        48: [654, 10, 575, 45, 529],
        49: [655, 0, 575, 80, 494],
        50: [654, 0, 575, 57, 517],
        51: [655, 11, 575, 47, 526],
        52: [656, 0, 575, 32, 542],
        53: [655, 11, 575, 57, 517],
        54: [655, 11, 575, 48, 526],
        55: [676, 11, 575, 64, 558],
        56: [654, 11, 575, 48, 526],
        57: [654, 11, 575, 48, 526],
        58: [444, -1, 319, 74, 245],
        59: [444, 194, 319, 74, 248],
        60: [587, 85, 894, 96, 797],
        61: [393, -109, 894, 64, 829],
        62: [587, 85, 894, 96, 797],
        63: [700, -1, 543, 65, 478],
        64: [699, 6, 894, 64, 829],
        65: [698, 0, 869, 40, 828],
        66: [686, 0, 818, 39, 752],
        67: [697, 11, 831, 64, 766],
        68: [686, 0, 882, 39, 817],
        69: [680, 0, 756, 39, 723],
        70: [680, 0, 724, 39, 675],
        71: [697, 10, 904, 64, 845],
        72: [686, 0, 900, 39, 860],
        73: [686, 0, 436, 25, 410],
        74: [686, 11, 594, 8, 527],
        75: [686, 0, 901, 39, 852],
        76: [686, 0, 692, 39, 643],
        77: [686, 0, 1092, 39, 1052],
        78: [686, 0, 900, 39, 860],
        79: [696, 10, 864, 64, 798],
        80: [686, 0, 786, 39, 721],
        81: [696, 193, 864, 64, 805],
        82: [686, 11, 862, 39, 858],
        83: [697, 11, 639, 64, 574],
        84: [675, 0, 800, 41, 758],
        85: [686, 11, 885, 39, 845],
        86: [686, 7, 869, 25, 843],
        87: [686, 7, 1189, 24, 1164],
        88: [686, 0, 869, 33, 835],
        89: [686, 0, 869, 19, 849],
        90: [686, 0, 703, 64, 645],
        91: [750, 250, 319, 128, 293],
        92: [750, 250, 575, 63, 511],
        93: [750, 250, 319, 25, 190],
        94: [694, -520, 575, 126, 448],
        95: [-10, 61, 575, 0, 574],
        96: [706, -503, 575, 114, 338],
        97: [453, 6, 559, 32, 558],
        98: [694, 6, 639, 29, 600],
        99: [453, 6, 511, 39, 478],
        100: [694, 6, 639, 38, 609],
        101: [452, 6, 527, 32, 494],
        102: [700, 0, 351, 40, 452],
        103: [455, 201, 575, 30, 558],
        104: [694, 0, 639, 37, 623],
        105: [695, 0, 319, 40, 294],
        106: [695, 200, 351, -71, 274],
        107: [694, 0, 607, 29, 587],
        108: [694, 0, 319, 40, 301],
        109: [450, 0, 958, 37, 942],
        110: [450, 0, 639, 37, 623],
        111: [452, 5, 575, 32, 542],
        112: [450, 194, 639, 29, 600],
        113: [450, 194, 607, 38, 609],
        114: [450, 0, 474, 29, 442],
        115: [453, 6, 454, 38, 414],
        116: [635, 5, 447, 21, 382],
        117: [450, 6, 639, 37, 623],
        118: [444, 3, 607, 26, 580],
        119: [444, 4, 831, 25, 805],
        120: [444, 0, 607, 21, 586],
        121: [444, 200, 607, 23, 580],
        122: [444, 0, 511, 32, 462],
        123: [750, 250, 575, 70, 504],
        124: [750, 249, 319, 129, 190],
        125: [750, 250, 575, 70, 504],
        126: [344, -202, 575, 96, 478],
        915: [680, 0, 692, 39, 643],
        916: [698, 0, 958, 56, 901],
        920: [696, 10, 894, 64, 829],
        923: [698, 0, 806, 40, 765],
        926: [675, 0, 767, 48, 718],
        928: [680, 0, 900, 39, 860],
        931: [686, 0, 831, 63, 766],
        933: [697, 0, 894, 64, 829],
        934: [686, 0, 831, 64, 766],
        936: [686, 0, 894, 64, 829],
        937: [696, 0, 831, 51, 779]
    };
    i.FONTDATA.FONTS["MathJax_Main-italic"] = {
        directory: "Main/Italic",
        family: "MathJax_Main",
        style: "italic",
        testString: "MathJax Main ^ \u210F \u2223",
        Ranges: [
            [160, 255, "Latin1Supplement"],
            [768, 879, "CombDiacritMarks"],
            [8192, 8303, "GeneralPunctuation"],
            [8448, 8527, "LetterlikeSymbols"]
        ],
        32: [0, 0, 250, 0, 0],
        33: [716, 0, 307, 107, 380],
        34: [694, -379, 514, 176, 538],
        35: [694, 194, 818, 115, 828],
        37: [750, 56, 818, 145, 847],
        38: [716, 22, 767, 127, 802],
        39: [694, -379, 307, 213, 377],
        40: [750, 250, 409, 144, 517],
        41: [750, 250, 409, 17, 390],
        42: [750, -320, 511, 195, 584],
        43: [557, 57, 767, 139, 753],
        44: [121, 194, 307, 69, 232],
        45: [251, -180, 358, 84, 341],
        46: [121, 0, 307, 107, 231],
        47: [750, 250, 511, 19, 617],
        48: [665, 21, 511, 110, 562],
        49: [666, 0, 511, 110, 468],
        50: [666, 22, 511, 76, 551],
        51: [666, 22, 511, 96, 562],
        52: [666, 194, 511, 46, 478],
        53: [666, 22, 511, 106, 567],
        54: [665, 22, 511, 120, 565],
        55: [666, 22, 511, 136, 634],
        56: [666, 21, 511, 99, 553],
        57: [666, 22, 511, 107, 553],
        58: [431, 0, 307, 107, 308],
        59: [431, 194, 307, 70, 308],
        61: [367, -133, 767, 116, 776],
        63: [716, 0, 511, 195, 551],
        64: [705, 11, 767, 152, 789],
        65: [716, 0, 743, 58, 696],
        66: [683, 0, 704, 57, 732],
        67: [705, 21, 716, 150, 812],
        68: [683, 0, 755, 56, 775],
        69: [680, 0, 678, 54, 743],
        70: [680, -1, 653, 54, 731],
        71: [705, 22, 774, 150, 812],
        72: [683, 0, 743, 54, 860],
        73: [683, 0, 386, 49, 508],
        74: [683, 21, 525, 78, 622],
        75: [683, 0, 769, 54, 859],
        76: [683, 0, 627, 54, 628],
        77: [683, 0, 897, 58, 1010],
        78: [683, 0, 743, 54, 860],
        79: [704, 22, 767, 149, 788],
        80: [683, 0, 678, 55, 729],
        81: [704, 194, 767, 149, 788],
        82: [683, 22, 729, 55, 723],
        83: [705, 22, 562, 74, 633],
        84: [677, 0, 716, 171, 806],
        85: [683, 22, 743, 194, 860],
        86: [683, 22, 743, 205, 868],
        87: [683, 22, 999, 205, 1124],
        88: [683, 0, 743, 50, 825],
        89: [683, 0, 743, 198, 875],
        90: [683, 0, 613, 80, 704],
        91: [750, 250, 307, 73, 446],
        93: [750, 250, 307, -14, 359],
        94: [694, -527, 511, 260, 528],
        95: [-25, 62, 511, 91, 554],
        97: [442, 11, 511, 101, 543],
        98: [694, 11, 460, 108, 467],
        99: [441, 10, 460, 103, 469],
        100: [694, 11, 511, 101, 567],
        101: [442, 10, 460, 107, 470],
        102: [705, 204, 307, -23, 450],
        103: [442, 205, 460, 46, 494],
        104: [694, 11, 511, 69, 544],
        105: [656, 10, 307, 75, 340],
        106: [656, 204, 307, -32, 364],
        107: [694, 11, 460, 69, 498],
        108: [694, 11, 256, 87, 312],
        109: [442, 11, 818, 75, 851],
        110: [442, 11, 562, 75, 595],
        111: [442, 11, 511, 103, 517],
        112: [442, 194, 511, 6, 518],
        113: [442, 194, 460, 101, 504],
        114: [442, 11, 422, 75, 484],
        115: [442, 11, 409, 76, 418],
        116: [626, 11, 332, 87, 373],
        117: [441, 11, 537, 75, 570],
        118: [443, 10, 460, 75, 492],
        119: [443, 11, 664, 75, 696],
        120: [442, 11, 464, 58, 513],
        121: [441, 205, 486, 75, 522],
        122: [442, 11, 409, 54, 466],
        126: [318, -208, 511, 246, 571],
        163: [714, 11, 769, 88, 699],
        305: [441, 10, 307, 75, 340],
        567: [442, 204, 332, -32, 327],
        915: [680, 0, 627, 54, 705],
        916: [716, 0, 818, 70, 751],
        920: [704, 22, 767, 149, 788],
        923: [716, 0, 692, 58, 646],
        926: [677, 0, 664, 74, 754],
        928: [680, 0, 743, 54, 859],
        931: [683, 0, 716, 80, 782],
        933: [705, 0, 767, 213, 832],
        934: [683, 0, 716, 159, 728],
        936: [683, 0, 767, 207, 824],
        937: [705, 0, 716, 100, 759]
    };
    i.FONTDATA.FONTS.MathJax_Main = {
        directory: "Main/Regular",
        family: "MathJax_Main",
        testString: "MathJax Main ^ \u210F \u2223",
        skew: {
            305: 0.0278,
            567: 0.0833,
            8467: 0.111,
            8472: 0.111,
            8706: 0.0833
        },
        Ranges: [
            [688, 767, "SpacingModLetters"],
            [768, 879, "CombDiacritMarks"],
            [9632, 9727, "GeometricShapes"],
            [9728, 9983, "MiscSymbols"]
        ],
        32: [0, 0, 250, 0, 0],
        33: [716, -1, 278, 78, 199],
        34: [694, -379, 500, 34, 372],
        35: [694, 194, 833, 56, 777],
        36: [750, 56, 500, 55, 444],
        37: [750, 56, 833, 56, 776],
        38: [716, 22, 778, 42, 727],
        39: [694, -379, 278, 78, 212],
        40: [750, 250, 389, 94, 333],
        41: [750, 250, 389, 55, 294],
        42: [750, -320, 500, 64, 435],
        43: [583, 82, 778, 56, 722],
        44: [121, 194, 278, 78, 210],
        45: [252, -179, 333, 11, 277],
        46: [120, 0, 278, 78, 199],
        47: [750, 250, 500, 56, 445],
        48: [666, 22, 500, 39, 460],
        49: [666, 0, 500, 83, 427],
        50: [666, 0, 500, 50, 449],
        51: [665, 22, 500, 42, 457],
        52: [677, 0, 500, 28, 471],
        53: [666, 22, 500, 50, 449],
        54: [666, 22, 500, 42, 456],
        55: [676, 22, 500, 55, 485],
        56: [666, 22, 500, 43, 457],
        57: [666, 22, 500, 42, 456],
        58: [430, 0, 278, 78, 199],
        59: [430, 194, 278, 78, 202],
        60: [540, 40, 778, 83, 694],
        61: [367, -133, 778, 56, 722],
        62: [540, 40, 778, 83, 694],
        63: [705, -1, 472, 55, 416],
        64: [705, 11, 778, 56, 722],
        65: [716, 0, 750, 32, 717],
        66: [683, 0, 708, 28, 651],
        67: [705, 21, 722, 56, 666],
        68: [683, 0, 764, 27, 708],
        69: [680, 0, 681, 25, 652],
        70: [680, 0, 653, 25, 610],
        71: [705, 22, 785, 56, 735],
        72: [683, 0, 750, 25, 724],
        73: [683, 0, 361, 21, 339],
        74: [683, 22, 514, 25, 465],
        75: [683, 0, 778, 25, 736],
        76: [683, 0, 625, 25, 582],
        77: [683, 0, 917, 29, 887],
        78: [683, 0, 750, 25, 724],
        79: [705, 22, 778, 56, 722],
        80: [683, 0, 681, 27, 624],
        81: [705, 193, 778, 56, 728],
        82: [683, 22, 736, 27, 732],
        83: [705, 22, 556, 55, 500],
        84: [677, 0, 722, 36, 685],
        85: [683, 22, 750, 25, 724],
        86: [683, 22, 750, 19, 730],
        87: [683, 22, 1028, 18, 1009],
        88: [683, 0, 750, 23, 726],
        89: [683, 0, 750, 11, 738],
        90: [683, 0, 611, 55, 560],
        91: [750, 250, 278, 118, 255],
        92: [750, 250, 500, 56, 444],
        93: [750, 250, 278, 22, 159],
        94: [694, -531, 500, 112, 387],
        95: [-25, 62, 500, 0, 499],
        96: [699, -505, 500, 106, 295],
        97: [448, 11, 500, 34, 493],
        98: [694, 11, 556, 20, 522],
        99: [448, 11, 444, 34, 415],
        100: [694, 11, 556, 34, 535],
        101: [448, 11, 444, 28, 415],
        102: [705, 0, 306, 26, 372],
        103: [453, 206, 500, 29, 485],
        104: [694, 0, 556, 25, 542],
        105: [669, 0, 278, 26, 255],
        106: [669, 205, 306, -55, 218],
        107: [694, 0, 528, 20, 511],
        108: [694, 0, 278, 26, 263],
        109: [442, 0, 833, 25, 819],
        110: [442, 0, 556, 25, 542],
        111: [448, 10, 500, 28, 471],
        112: [442, 194, 556, 20, 522],
        113: [442, 194, 528, 33, 535],
        114: [442, 0, 392, 20, 364],
        115: [448, 11, 394, 33, 359],
        116: [615, 10, 389, 18, 333],
        117: [442, 11, 556, 25, 542],
        118: [431, 11, 528, 19, 508],
        119: [431, 11, 722, 18, 703],
        120: [431, 0, 528, 11, 516],
        121: [431, 204, 528, 19, 508],
        122: [431, 0, 444, 28, 401],
        123: [750, 250, 500, 65, 434],
        124: [750, 249, 278, 119, 159],
        125: [750, 250, 500, 65, 434],
        126: [318, -215, 500, 83, 416],
        160: [0, 0, 250, 0, 0],
        168: [669, -554, 500, 95, 404],
        172: [356, -89, 667, 56, 611],
        175: [590, -544, 500, 69, 430],
        176: [715, -542, 500, 147, 352],
        177: [666, 0, 778, 56, 722],
        180: [699, -505, 500, 203, 393],
        215: [491, -9, 778, 147, 630],
        247: [537, 36, 778, 56, 721],
        305: [442, 0, 278, 26, 255],
        567: [442, 205, 306, -55, 218],
        710: [694, -531, 500, 112, 387],
        711: [644, -513, 500, 114, 385],
        713: [590, -544, 500, 69, 430],
        714: [699, -505, 500, 203, 393],
        715: [699, -505, 500, 106, 295],
        728: [694, -515, 500, 92, 407],
        729: [669, -549, 500, 190, 309],
        732: [668, -565, 500, 83, 416],
        915: [680, 0, 625, 25, 582],
        916: [716, 0, 833, 46, 786],
        920: [705, 22, 778, 56, 722],
        923: [716, 0, 694, 32, 661],
        926: [677, 0, 667, 42, 624],
        928: [680, 0, 750, 25, 724],
        931: [683, 0, 722, 55, 666],
        933: [705, 0, 778, 55, 722],
        934: [683, 0, 722, 56, 665],
        936: [683, 0, 778, 55, 722],
        937: [704, 0, 722, 44, 677],
        8194: [0, 0, 500, 0, 0],
        8195: [0, 0, 999, 0, 0],
        8196: [0, 0, 333, 0, 0],
        8197: [0, 0, 250, 0, 0],
        8198: [0, 0, 167, 0, 0],
        8201: [0, 0, 167, 0, 0],
        8202: [0, 0, 83, 0, 0],
        8211: [285, -248, 500, 0, 499],
        8212: [285, -248, 1000, 0, 999],
        8216: [694, -379, 278, 64, 198],
        8217: [694, -379, 278, 78, 212],
        8220: [694, -379, 500, 128, 466],
        8221: [694, -379, 500, 34, 372],
        8224: [705, 216, 444, 55, 389],
        8225: [705, 205, 444, 55, 389],
        8230: [120, 0, 1172, 78, 1093],
        8242: [560, -43, 275, 30, 262],
        8407: [714, -516, 0, -471, -29],
        8463: [695, 13, 540, 42, 562],
        8465: [705, 10, 722, 55, 693],
        8467: [705, 20, 417, 6, 397],
        8472: [453, 216, 636, 67, 625],
        8476: [716, 22, 722, 40, 715],
        8501: [694, 0, 611, 55, 555],
        8592: [511, 11, 1000, 55, 944],
        8593: [694, 193, 500, 17, 483],
        8594: [511, 11, 1000, 56, 944],
        8595: [694, 194, 500, 17, 483],
        8596: [511, 11, 1000, 55, 944],
        8597: [772, 272, 500, 17, 483],
        8598: [720, 195, 1000, 29, 944],
        8599: [720, 195, 1000, 55, 970],
        8600: [695, 220, 1000, 55, 970],
        8601: [695, 220, 1000, 29, 944],
        8614: [511, 11, 1000, 55, 944],
        8617: [511, 11, 1126, 55, 1070],
        8618: [511, 11, 1126, 55, 1070],
        8636: [511, -230, 1000, 55, 944],
        8637: [270, 11, 1000, 55, 944],
        8640: [511, -230, 1000, 56, 944],
        8641: [270, 11, 1000, 56, 944],
        8652: [671, 11, 1000, 55, 944],
        8656: [525, 24, 1000, 56, 944],
        8657: [694, 194, 611, 31, 579],
        8658: [525, 24, 1000, 56, 944],
        8659: [694, 194, 611, 31, 579],
        8660: [526, 25, 1000, 34, 966],
        8661: [772, 272, 611, 31, 579],
        8704: [694, 22, 556, 0, 556],
        8706: [715, 22, 531, 42, 566],
        8707: [694, 0, 556, 56, 500],
        8709: [772, 78, 500, 39, 460],
        8711: [683, 33, 833, 46, 786],
        8712: [540, 40, 667, 84, 583],
        8713: [716, 215, 667, 84, 583],
        8715: [540, 40, 667, 83, 582],
        8722: [270, -230, 778, 84, 694],
        8723: [500, 166, 778, 56, 722],
        8725: [750, 250, 500, 56, 445],
        8726: [750, 250, 500, 56, 444],
        8727: [465, -35, 500, 64, 435],
        8728: [444, -55, 500, 55, 444],
        8729: [444, -55, 500, 55, 444],
        8730: [800, 200, 833, 72, 853],
        8733: [442, 11, 778, 56, 722],
        8734: [442, 11, 1000, 55, 944],
        8736: [694, 0, 722, 55, 666],
        8739: [750, 249, 278, 119, 159],
        8741: [750, 250, 500, 132, 367],
        8743: [598, 22, 667, 55, 611],
        8744: [598, 22, 667, 55, 611],
        8745: [598, 22, 667, 55, 611],
        8746: [598, 22, 667, 55, 611],
        8747: [716, 216, 417, 55, 472],
        8764: [367, -133, 778, 55, 722],
        8768: [583, 83, 278, 55, 222],
        8771: [464, -36, 778, 55, 722],
        8773: [589, -22, 1000, 55, 722],
        8776: [483, -55, 778, 55, 722],
        8781: [484, -16, 778, 55, 722],
        8784: [670, -133, 778, 56, 722],
        8800: [716, 215, 778, 56, 722],
        8801: [464, -36, 778, 56, 722],
        8804: [636, 138, 778, 83, 694],
        8805: [636, 138, 778, 83, 694],
        8810: [568, 67, 1000, 56, 944],
        8811: [567, 67, 1000, 55, 944],
        8826: [539, 41, 778, 84, 694],
        8827: [539, 41, 778, 83, 694],
        8834: [540, 40, 778, 84, 694],
        8835: [540, 40, 778, 83, 693],
        8838: [636, 138, 778, 84, 694],
        8839: [636, 138, 778, 83, 693],
        8846: [598, 22, 667, 55, 611],
        8849: [636, 138, 778, 84, 714],
        8850: [636, 138, 778, 64, 694],
        8851: [598, 0, 667, 61, 605],
        8852: [598, 0, 667, 61, 605],
        8853: [583, 83, 778, 56, 722],
        8854: [583, 83, 778, 56, 722],
        8855: [583, 83, 778, 56, 722],
        8856: [583, 83, 778, 56, 722],
        8857: [583, 83, 778, 56, 722],
        8866: [694, 0, 611, 55, 555],
        8867: [694, 0, 611, 55, 555],
        8868: [668, 0, 778, 55, 723],
        8869: [668, 0, 778, 55, 723],
        8872: [750, 249, 867, 119, 811],
        8900: [488, -12, 500, 12, 488],
        8901: [310, -190, 278, 78, 199],
        8902: [486, -16, 500, 3, 497],
        8904: [505, 5, 900, 26, 873],
        8942: [900, 30, 278, 78, 199],
        8943: [310, -190, 1172, 78, 1093],
        8945: [820, -100, 1282, 133, 1148],
        8968: [750, 250, 444, 174, 422],
        8969: [750, 250, 444, 21, 269],
        8970: [750, 250, 444, 174, 422],
        8971: [750, 250, 444, 21, 269],
        8994: [388, -122, 1000, 55, 944],
        8995: [378, -134, 1000, 55, 944],
        9136: [744, 244, 412, 55, 357],
        9137: [744, 244, 412, 56, 357],
        10216: [750, 250, 389, 110, 333],
        10217: [750, 250, 389, 55, 278],
        10222: [744, 244, 412, 173, 357],
        10223: [744, 244, 412, 56, 240],
        10229: [511, 11, 1609, 55, 1525],
        10230: [511, 11, 1638, 84, 1553],
        10231: [511, 11, 1859, 55, 1803],
        10232: [525, 24, 1609, 56, 1553],
        10233: [525, 24, 1638, 56, 1582],
        10234: [525, 24, 1858, 56, 1802],
        10236: [511, 11, 1638, 55, 1553],
        10815: [683, 0, 750, 28, 721],
        10927: [636, 138, 778, 84, 694],
        10928: [636, 138, 778, 83, 694]
    };
    i.FONTDATA.FONTS["MathJax_Math-italic"] = {
        directory: "Math/Italic",
        family: "MathJax_Math",
        style: "italic",
        testString: "MathJax Math \u03A5",
        skew: {
            65: 0.139,
            66: 0.0833,
            67: 0.0833,
            68: 0.0556,
            69: 0.0833,
            70: 0.0833,
            71: 0.0833,
            72: 0.0556,
            73: 0.111,
            74: 0.167,
            75: 0.0556,
            76: 0.0278,
            77: 0.0833,
            78: 0.0833,
            79: 0.0833,
            80: 0.0833,
            81: 0.0833,
            82: 0.0833,
            83: 0.0833,
            84: 0.0833,
            85: 0.0278,
            88: 0.0833,
            90: 0.0833,
            99: 0.0556,
            100: 0.167,
            101: 0.0556,
            102: 0.167,
            103: 0.0278,
            104: -0.0278,
            108: 0.0833,
            111: 0.0556,
            112: 0.0833,
            113: 0.0833,
            114: 0.0556,
            115: 0.0556,
            116: 0.0833,
            117: 0.0278,
            118: 0.0278,
            119: 0.0833,
            120: 0.0278,
            121: 0.0556,
            122: 0.0556,
            915: 0.0833,
            916: 0.167,
            920: 0.0833,
            923: 0.167,
            926: 0.0833,
            928: 0.0556,
            931: 0.0833,
            933: 0.0556,
            934: 0.0833,
            936: 0.0556,
            937: 0.0833,
            945: 0.0278,
            946: 0.0833,
            948: 0.0556,
            949: 0.0833,
            950: 0.0833,
            951: 0.0556,
            952: 0.0833,
            953: 0.0556,
            956: 0.0278,
            957: 0.0278,
            958: 0.111,
            959: 0.0556,
            961: 0.0833,
            962: 0.0833,
            964: 0.0278,
            965: 0.0278,
            966: 0.0833,
            967: 0.0556,
            968: 0.111,
            977: 0.0833,
            981: 0.0833,
            1009: 0.0833,
            1013: 0.0556
        },
        32: [0, 0, 250, 0, 0],
        47: [716, 215, 778, 139, 638],
        65: [716, 0, 750, 35, 726],
        66: [683, 0, 759, 35, 756],
        67: [705, 22, 715, 50, 760],
        68: [683, 0, 828, 33, 803],
        69: [680, 0, 738, 31, 764],
        70: [680, 0, 643, 31, 749],
        71: [705, 22, 786, 50, 760],
        72: [683, 0, 831, 31, 888],
        73: [683, 0, 440, 26, 504],
        74: [683, 22, 555, 57, 633],
        75: [683, 0, 849, 31, 889],
        76: [683, 0, 681, 32, 647],
        77: [683, 0, 970, 35, 1051],
        78: [683, 0, 803, 31, 888],
        79: [704, 22, 763, 50, 740],
        80: [683, 0, 642, 33, 751],
        81: [704, 194, 791, 50, 740],
        82: [683, 21, 759, 33, 755],
        83: [705, 22, 613, 52, 645],
        84: [677, 0, 584, 21, 704],
        85: [683, 22, 683, 60, 767],
        86: [683, 22, 583, 52, 769],
        87: [683, 22, 944, 51, 1048],
        88: [683, 0, 828, 26, 852],
        89: [683, -1, 581, 30, 763],
        90: [683, 0, 683, 58, 723],
        97: [441, 10, 529, 33, 506],
        98: [694, 11, 429, 40, 422],
        99: [442, 11, 433, 34, 429],
        100: [694, 10, 520, 33, 523],
        101: [442, 11, 466, 39, 429],
        102: [705, 205, 490, 55, 550],
        103: [442, 205, 477, 10, 480],
        104: [694, 11, 576, 48, 555],
        105: [661, 11, 345, 21, 302],
        106: [661, 204, 412, -12, 403],
        107: [694, 11, 521, 48, 503],
        108: [694, 11, 298, 38, 266],
        109: [442, 11, 878, 21, 857],
        110: [442, 11, 600, 21, 580],
        111: [441, 11, 485, 34, 476],
        112: [442, 194, 503, -39, 497],
        113: [442, 194, 446, 33, 460],
        114: [442, 11, 451, 21, 430],
        115: [442, 10, 469, 53, 419],
        116: [626, 11, 361, 19, 330],
        117: [442, 11, 572, 21, 551],
        118: [443, 11, 485, 21, 467],
        119: [443, 11, 716, 21, 690],
        120: [442, 11, 572, 35, 522],
        121: [442, 205, 490, 21, 496],
        122: [442, 11, 465, 35, 468],
        160: [0, 0, 250, 0, 0],
        915: [680, -1, 615, 31, 721],
        916: [716, 0, 833, 48, 788],
        920: [704, 22, 763, 50, 740],
        923: [716, 0, 694, 35, 670],
        926: [677, 0, 742, 53, 777],
        928: [680, 0, 831, 31, 887],
        931: [683, 0, 780, 58, 806],
        933: [705, 0, 583, 28, 700],
        934: [683, 0, 667, 24, 642],
        936: [683, 0, 612, 21, 692],
        937: [704, 0, 772, 80, 786],
        945: [442, 11, 640, 34, 603],
        946: [705, 194, 566, 23, 573],
        947: [441, 216, 518, 11, 543],
        948: [717, 10, 444, 36, 451],
        949: [452, 22, 466, 27, 428],
        950: [704, 204, 438, 44, 471],
        951: [442, 216, 497, 21, 503],
        952: [705, 10, 469, 35, 462],
        953: [442, 10, 354, 48, 332],
        954: [442, 11, 576, 49, 554],
        955: [694, 12, 583, 47, 556],
        956: [442, 216, 603, 23, 580],
        957: [442, 2, 494, 45, 530],
        958: [704, 205, 438, 21, 443],
        959: [441, 11, 485, 34, 476],
        960: [431, 11, 570, 19, 573],
        961: [442, 216, 517, 23, 510],
        962: [442, 107, 363, 31, 405],
        963: [431, 11, 571, 31, 572],
        964: [431, 13, 437, 18, 517],
        965: [443, 10, 540, 21, 523],
        966: [442, 218, 654, 50, 618],
        967: [442, 204, 626, 25, 600],
        968: [694, 205, 651, 21, 634],
        969: [443, 11, 622, 15, 604],
        977: [705, 11, 591, 21, 563],
        981: [694, 205, 596, 43, 579],
        982: [431, 10, 828, 19, 823],
        1009: [442, 194, 517, 67, 510],
        1013: [431, 11, 406, 40, 382]
    };
    i.FONTDATA.FONTS.MathJax_Size1 = {
        directory: "Size1/Regular",
        family: "MathJax_Size1",
        testString: "() [] {}",
        32: [0, 0, 250, 0, 0],
        40: [850, 349, 458, 152, 422],
        41: [850, 349, 458, 35, 305],
        47: [850, 349, 578, 55, 522],
        91: [850, 349, 417, 202, 394],
        92: [850, 349, 578, 54, 522],
        93: [850, 349, 417, 22, 214],
        123: [850, 349, 583, 105, 477],
        125: [850, 349, 583, 105, 477],
        160: [0, 0, 250, 0, 0],
        710: [744, -551, 556, -8, 564],
        732: [722, -597, 556, 1, 554],
        770: [744, -551, 0, -564, 8],
        771: [722, -597, 0, -555, -2],
        8214: [602, 0, 778, 257, 521],
        8593: [600, 0, 667, 112, 555],
        8595: [600, 0, 667, 112, 555],
        8657: [599, 0, 778, 57, 721],
        8659: [600, -1, 778, 57, 721],
        8719: [750, 250, 944, 55, 888],
        8720: [750, 250, 944, 55, 888],
        8721: [750, 250, 1056, 56, 999],
        8730: [850, 350, 1000, 111, 1020],
        8739: [627, 15, 333, 145, 188],
        8741: [627, 15, 556, 145, 410],
        8747: [805, 306, 472, 55, 610],
        8748: [805, 306, 819, 55, 957],
        8749: [805, 306, 1166, 55, 1304],
        8750: [805, 306, 472, 55, 610],
        8896: [750, 249, 833, 55, 777],
        8897: [750, 249, 833, 55, 777],
        8898: [750, 249, 833, 55, 777],
        8899: [750, 249, 833, 55, 777],
        8968: [850, 349, 472, 202, 449],
        8969: [850, 349, 472, 22, 269],
        8970: [850, 349, 472, 202, 449],
        8971: [850, 349, 472, 22, 269],
        9168: [602, 0, 667, 312, 355],
        10216: [850, 350, 472, 97, 394],
        10217: [850, 350, 472, 77, 374],
        10752: [750, 250, 1111, 56, 1054],
        10753: [750, 250, 1111, 56, 1054],
        10754: [750, 250, 1111, 56, 1054],
        10756: [750, 249, 833, 55, 777],
        10758: [750, 249, 833, 55, 777]
    };
    i.FONTDATA.FONTS.MathJax_Size2 = {
        directory: "Size2/Regular",
        family: "MathJax_Size2",
        testString: "() [] {}",
        32: [0, 0, 250, 0, 0],
        40: [1150, 649, 597, 180, 561],
        41: [1150, 649, 597, 35, 416],
        47: [1150, 649, 811, 56, 754],
        91: [1150, 649, 472, 224, 455],
        92: [1150, 649, 811, 54, 754],
        93: [1150, 649, 472, 16, 247],
        123: [1150, 649, 667, 119, 547],
        125: [1150, 649, 667, 119, 547],
        160: [0, 0, 250, 0, 0],
        710: [772, -565, 1000, -5, 1004],
        732: [750, -611, 1000, 0, 999],
        770: [772, -565, 0, -1005, 4],
        771: [750, -611, 0, -1000, -1],
        8719: [950, 450, 1278, 56, 1221],
        8720: [950, 450, 1278, 56, 1221],
        8721: [950, 450, 1444, 55, 1388],
        8730: [1150, 650, 1000, 111, 1020],
        8747: [1360, 862, 556, 55, 944],
        8748: [1360, 862, 1084, 55, 1472],
        8749: [1360, 862, 1592, 55, 1980],
        8750: [1360, 862, 556, 55, 944],
        8896: [950, 450, 1111, 55, 1055],
        8897: [950, 450, 1111, 55, 1055],
        8898: [949, 450, 1111, 55, 1055],
        8899: [950, 449, 1111, 55, 1055],
        8968: [1150, 649, 528, 224, 511],
        8969: [1150, 649, 528, 16, 303],
        8970: [1150, 649, 528, 224, 511],
        8971: [1150, 649, 528, 16, 303],
        10216: [1150, 649, 611, 112, 524],
        10217: [1150, 649, 611, 85, 498],
        10752: [949, 449, 1511, 56, 1454],
        10753: [949, 449, 1511, 56, 1454],
        10754: [949, 449, 1511, 56, 1454],
        10756: [950, 449, 1111, 55, 1055],
        10758: [950, 450, 1111, 55, 1055]
    };
    i.FONTDATA.FONTS.MathJax_Size3 = {
        directory: "Size3/Regular",
        family: "MathJax_Size3",
        testString: "() [] {}",
        32: [0, 0, 250, 0, 0],
        40: [1450, 949, 736, 209, 701],
        41: [1450, 949, 736, 34, 526],
        47: [1450, 949, 1044, 55, 989],
        91: [1450, 949, 528, 247, 516],
        92: [1450, 949, 1044, 56, 988],
        93: [1450, 949, 528, 11, 280],
        123: [1450, 949, 750, 130, 618],
        125: [1450, 949, 750, 131, 618],
        160: [0, 0, 250, 0, 0],
        710: [772, -564, 1444, -4, 1447],
        732: [749, -610, 1444, 1, 1442],
        770: [772, -564, 0, -1448, 3],
        771: [749, -610, 0, -1443, -2],
        8730: [1450, 950, 1000, 111, 1020],
        8968: [1450, 949, 583, 246, 571],
        8969: [1450, 949, 583, 11, 336],
        8970: [1450, 949, 583, 246, 571],
        8971: [1450, 949, 583, 11, 336],
        10216: [1450, 950, 750, 126, 654],
        10217: [1450, 949, 750, 94, 623]
    };
    i.FONTDATA.FONTS.MathJax_Size4 = {
        directory: "Size4/Regular",
        family: "MathJax_Size4",
        testString: "() [] {}",
        32: [0, 0, 250, 0, 0],
        40: [1750, 1249, 792, 237, 758],
        41: [1750, 1249, 792, 33, 554],
        47: [1750, 1249, 1278, 56, 1221],
        91: [1750, 1249, 583, 269, 577],
        92: [1750, 1249, 1278, 56, 1221],
        93: [1750, 1249, 583, 5, 313],
        123: [1750, 1249, 806, 144, 661],
        125: [1750, 1249, 806, 144, 661],
        160: [0, 0, 250, 0, 0],
        710: [845, -561, 1889, -14, 1902],
        732: [823, -583, 1889, 1, 1885],
        770: [845, -561, 0, -1903, 13],
        771: [823, -583, 0, -1888, -4],
        8730: [1750, 1250, 1000, 111, 1020],
        8968: [1750, 1249, 639, 269, 633],
        8969: [1750, 1249, 639, 5, 369],
        8970: [1750, 1249, 639, 269, 633],
        8971: [1750, 1249, 639, 5, 369],
        9115: [1154, 655, 875, 291, 843],
        9116: [610, 10, 875, 291, 417],
        9117: [1165, 644, 875, 291, 843],
        9118: [1154, 655, 875, 31, 583],
        9119: [610, 10, 875, 457, 583],
        9120: [1165, 644, 875, 31, 583],
        9121: [1154, 645, 667, 319, 666],
        9122: [602, 0, 667, 319, 403],
        9123: [1155, 644, 667, 319, 666],
        9124: [1154, 645, 667, 0, 347],
        9125: [602, 0, 667, 263, 347],
        9126: [1155, 644, 667, 0, 347],
        9127: [899, 10, 889, 384, 718],
        9128: [1160, 660, 889, 170, 504],
        9129: [10, 899, 889, 384, 718],
        9130: [310, 10, 889, 384, 504],
        9131: [899, 10, 889, 170, 504],
        9132: [1160, 660, 889, 384, 718],
        9133: [10, 899, 889, 170, 504],
        9143: [935, 885, 1056, 111, 742],
        10216: [1750, 1248, 806, 140, 703],
        10217: [1750, 1248, 806, 103, 665],
        57344: [625, 14, 1056, 702, 742],
        57345: [605, 14, 1056, 702, 1076],
        57680: [120, 213, 450, -24, 460],
        57681: [120, 213, 450, -10, 474],
        57682: [333, 0, 450, -24, 460],
        57683: [333, 0, 450, -10, 474],
        57684: [120, 0, 400, -10, 410]
    };
    i.FONTDATA.FONTS[m][8722][0] = i.FONTDATA.FONTS[m][43][0];
    i.FONTDATA.FONTS[m][8722][1] = i.FONTDATA.FONTS[m][43][1];
    i.FONTDATA.FONTS[m][8942][0] += 400;
    i.FONTDATA.FONTS[m][8945][0] += 700;
    i.FONTDATA.FONTS[c][57684][0] += 200;
    i.FONTDATA.FONTS[c][57684][1] += 200;
    i.FONTDATA.FONTS[m][8773][2] -= 222;
    i.FONTDATA.FONTS[m][8773][5] = {
        rfix: -222
    };
    MathJax.Hub.Register.LoadHook(i.fontDir + "/Main/Bold/MathOperators.js", function() {
        i.FONTDATA.FONTS[r][8773][2] -= 106;
        i.FONTDATA.FONTS[r][8773][5] = {
            rfix: -106
        }
    });
    MathJax.Hub.Register.LoadHook(i.fontDir + "/Typewriter/Regular/BasicLatin.js", function() {
        i.FONTDATA.FONTS.MathJax_Typewriter[32][2] += 275;
        i.FONTDATA.FONTS.MathJax_Typewriter[32][5] = {
            rfix: 275
        }
    });
    MathJax.Hub.Insert(i.FONTDATA.FONTS[m], {
        61152: [0, 0, -575, 0, 0, {
            space: 1
        }],
        61153: [0, 0, -300, 0, 0, {
            space: 1
        }],
        61160: [0, 0, 25, 0, 0, {
            space: 1
        }]
    });
    if (!i.imgFonts) {
        MathJax.Hub.Browser.Select({
            MSIE: function(u) {
                if (i.config.availableFonts && i.config.availableFonts.length) {
                    i.FONTDATA.REMAP[713] = 175;
                    i.FONTDATA.REMAP[714] = 180;
                    i.FONTDATA.REMAP[715] = 96;
                    i.FONTDATA.REMAP[730] = 176;
                    var t = String.fromCharCode(915) + " " + String.fromCharCode(933) + " " + String.fromCharCode(923);
                    i.FONTDATA.RANGES.push({
                        name: "IEgreek",
                        low: 945,
                        high: 969,
                        offset: "IEG",
                        add: 32
                    });
                    i.FONTDATA.RANGES.push({
                        name: "IEGreek",
                        low: 913,
                        high: 1014,
                        offset: "IEG"
                    });
                    if (i.Font.testFont({
                            family: "MathJax_Greek",
                            testString: t
                        })) {
                        i.Augment({
                            FONTDATA: {
                                VARIANT: {
                                    normal: {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek"
                                    },
                                    fraktur: {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek"
                                    },
                                    script: {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek"
                                    },
                                    "-tex-caligraphic": {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek"
                                    },
                                    "-tex-oldstyle": {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek"
                                    },
                                    "-Greek": {
                                        fonts: ["MathJax_Greek"]
                                    }
                                }
                            }
                        });
                        i.FONTDATA.FONTS.MathJax_Greek = {
                            directory: "Greek/Regular",
                            family: "MathJax_Greek",
                            testString: "\u0393 \u03A5 \u039B",
                            32: [0, 0, 250, 0, 0],
                            160: [0, 0, 250, 0, 0],
                            915: [680, 0, 625, 25, 582],
                            916: [716, 0, 833, 46, 786],
                            920: [705, 22, 778, 56, 722],
                            923: [716, 0, 694, 32, 661],
                            926: [677, 0, 667, 42, 624],
                            928: [680, 0, 750, 25, 724],
                            931: [683, 0, 722, 55, 666],
                            933: [705, 0, 778, 55, 722],
                            934: [683, 0, 722, 56, 665],
                            936: [683, 0, 778, 55, 722],
                            937: [704, 0, 722, 44, 677]
                        }
                    }
                    if (i.Font.testFont({
                            family: "MathJax_Greek",
                            weight: "bold",
                            testString: t
                        })) {
                        i.Augment({
                            FONTDATA: {
                                VARIANT: {
                                    bold: {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek-Bold"
                                    },
                                    "bold-fraktur": {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek-Bold"
                                    },
                                    "bold-script": {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek-Bold"
                                    },
                                    "-Greek-Bold": {
                                        fonts: ["MathJax_Greek-bold"]
                                    }
                                }
                            }
                        });
                        i.FONTDATA.FONTS["MathJax_Greek-bold"] = {
                            directory: "Greek/Bold",
                            family: "MathJax_Greek",
                            weight: "bold",
                            testString: "\u0393 \u03A5 \u039B",
                            32: [0, 0, 250, 0, 0],
                            160: [0, 0, 250, 0, 0],
                            915: [680, 0, 692, 39, 643],
                            916: [698, 0, 958, 56, 901],
                            920: [696, 10, 894, 64, 829],
                            923: [698, 0, 806, 40, 765],
                            926: [675, 0, 767, 48, 718],
                            928: [680, 0, 900, 39, 860],
                            931: [686, 0, 831, 64, 766],
                            933: [697, 0, 894, 64, 829],
                            934: [686, 0, 831, 64, 766],
                            936: [686, 0, 894, 64, 829],
                            937: [696, 1, 831, 51, 779]
                        }
                    }
                    if (i.Font.testFont({
                            family: "MathJax_Greek",
                            style: "italic",
                            testString: t
                        })) {
                        i.Augment({
                            FONTDATA: {
                                VARIANT: {
                                    italic: {
                                        offsetIEG: 913,
                                        variantIEG: "-Greek-Italic"
                                    },
                                    "-Greek-Italic": {
                                        fonts: ["MathJax_Greek-italic"]
                                    }
                                }
                            }
                        });
                        i.FONTDATA.FONTS["MathJax_Greek-italic"] = {
                            directory: "Greek/Italic",
                            family: "MathJax_Greek",
                            style: "italic",
                            testString: "\u0393 \u03A5 \u039B",
                            skew: {
                                915: 0.0833,
                                916: 0.167,
                                920: 0.0833,
                                923: 0.167,
                                926: 0.0833,
                                928: 0.0556,
                                931: 0.0833,
                                933: 0.0556,
                                934: 0.0833,
                                936: 0.0556,
                                937: 0.0833,
                                945: 0.0278,
                                946: 0.0833,
                                948: 0.0556,
                                949: 0.0833,
                                950: 0.0833,
                                951: 0.0556,
                                952: 0.0833,
                                953: 0.0556,
                                956: 0.0278,
                                957: 0.0278,
                                958: 0.111,
                                959: 0.0556,
                                961: 0.0833,
                                962: 0.0833,
                                964: 0.0278,
                                965: 0.0278,
                                966: 0.0833,
                                967: 0.0556,
                                968: 0.111,
                                977: 0.0833,
                                981: 0.0833,
                                1009: 0.0833,
                                1013: 0.0556
                            },
                            32: [0, 0, 250, 0, 0],
                            160: [0, 0, 250, 0, 0],
                            915: [680, -1, 615, 31, 721],
                            916: [716, 0, 833, 48, 788],
                            920: [704, 22, 763, 50, 740],
                            923: [716, 0, 694, 35, 670],
                            926: [678, 0, 742, 53, 777],
                            928: [681, 0, 831, 31, 887],
                            931: [683, 0, 780, 58, 806],
                            933: [705, 0, 583, 28, 700],
                            934: [683, 0, 667, 24, 642],
                            936: [683, 0, 612, 21, 692],
                            937: [704, 0, 772, 80, 786],
                            945: [442, 11, 640, 34, 603],
                            946: [705, 194, 566, 23, 573],
                            947: [441, 216, 518, 11, 543],
                            948: [717, 10, 444, 36, 451],
                            949: [452, 22, 466, 27, 428],
                            950: [704, 204, 438, 44, 471],
                            951: [442, 216, 497, 21, 503],
                            952: [705, 10, 469, 35, 462],
                            953: [442, 10, 354, 48, 332],
                            954: [442, 11, 576, 49, 554],
                            955: [694, 12, 583, 47, 556],
                            956: [442, 216, 603, 23, 580],
                            957: [442, 2, 494, 45, 530],
                            958: [704, 205, 438, 21, 443],
                            959: [441, 11, 485, 34, 476],
                            960: [431, 11, 570, 19, 573],
                            961: [442, 216, 517, 23, 510],
                            962: [442, 107, 363, 31, 405],
                            963: [431, 11, 571, 31, 572],
                            964: [431, 13, 437, 18, 517],
                            965: [443, 10, 540, 21, 523],
                            966: [442, 218, 654, 50, 618],
                            967: [442, 204, 626, 25, 600],
                            968: [694, 205, 651, 21, 634],
                            969: [443, 11, 622, 15, 604],
                            977: [705, 11, 591, 21, 563],
                            981: [694, 205, 596, 43, 579],
                            982: [431, 10, 828, 19, 823],
                            1009: [442, 194, 517, 67, 510],
                            1013: [431, 11, 406, 40, 382]
                        }
                    }
                    if (i.Font.testFont({
                            family: "MathJax_Greek",
                            weight: "bold",
                            style: "italic",
                            testString: t
                        })) {
                        i.Augment({
                            FONTDATA: {
                                VARIANT: {
                                    "bold-italic": {
                                        offsetG: 913,
                                        variantG: "-Greek-Bold-Italic"
                                    },
                                    "-Greek-Bold-Italic": {
                                        fonts: ["MathJax_Greek-bold-italic"]
                                    }
                                },
                                FONTS: {
                                    "MathJax_Greek-bold-italic": "Greek/BoldItalic/Main.js"
                                }
                            }
                        })
                    }
                }
                if (i.msieIE6) {
                    var w = "MathJax_WinIE6";
                    i.FONTDATA.FONTS[w] = "WinIE6/Regular/Main.js";
                    i.FONTDATA.RANGES.push({
                        name: "arrows",
                        low: 8592,
                        high: 8601,
                        offset: "AR"
                    });
                    var v = {
                        variant: "-WinIE6",
                        8658: 57866,
                        8660: 57867,
                        8704: 57868,
                        8706: 57869,
                        8707: 57870,
                        8711: 57871,
                        8712: 57872,
                        8715: 57873,
                        8725: 57874,
                        8730: 57875,
                        8733: 57876,
                        8734: 57877,
                        8736: 57878,
                        8739: 57879,
                        8741: 57880,
                        8743: 57881,
                        8744: 57882,
                        8745: 57883,
                        8746: 57884,
                        8747: 57885,
                        8764: 57886,
                        8776: 57887,
                        8800: 57888,
                        8801: 57889,
                        8804: 57890,
                        8805: 57891,
                        8810: 57892,
                        8811: 57893,
                        8834: 57894,
                        8835: 57895,
                        8838: 57896,
                        8839: 57897,
                        8853: 57898,
                        8857: 57899,
                        8869: 57900,
                        9651: 57901,
                        9661: 57902,
                        9711: 57903,
                        9824: 57904,
                        9825: 57905,
                        9826: 57906,
                        9827: 57907,
                        9837: 57908,
                        9838: 57909,
                        9839: 57910,
                        8806: 58053,
                        8807: 58054,
                        8814: 58055,
                        8815: 58056,
                        8988: 58058,
                        8989: 58059,
                        8990: 58060,
                        8991: 58061,
                        9484: 58058,
                        9488: 58059,
                        9492: 58060,
                        9496: 58061,
                        9585: 58062,
                        9586: 58063,
                        9632: 58064,
                        9633: 58065,
                        9650: 58066,
                        9654: 58068,
                        9660: 58069,
                        9661: 58070,
                        9664: 58071,
                        9674: 58072,
                        8756: 58073,
                        8757: 58074,
                        8786: 58075,
                        9733: 58076,
                        8765: 58077
                    };
                    var y = {
                        variant: "-WinIE6",
                        8658: 57930,
                        8660: 57931,
                        8704: 57932,
                        8706: 57933,
                        8707: 57934,
                        8711: 57935,
                        8712: 57936,
                        8715: 57937,
                        8725: 57938,
                        8730: 57939,
                        8733: 57940,
                        8734: 57941,
                        8736: 57942,
                        8739: 57943,
                        8741: 57944,
                        8743: 57945,
                        8744: 57946,
                        8745: 57947,
                        8746: 57948,
                        8747: 57949,
                        8764: 57950,
                        8776: 57951,
                        8800: 57952,
                        8801: 57953,
                        8804: 57954,
                        8805: 57955,
                        8810: 57956,
                        8811: 57957,
                        8834: 57958,
                        8835: 57959,
                        8838: 57960,
                        8839: 57961,
                        8853: 57962,
                        8857: 57963,
                        8869: 57964,
                        9651: 57965,
                        9661: 57966,
                        9711: 57967,
                        9824: 57968,
                        9825: 57969,
                        9826: 57970,
                        9827: 57971,
                        9837: 57972,
                        9838: 57973,
                        9839: 57974,
                        8806: 58053,
                        8807: 58054,
                        8814: 58055,
                        8815: 58056,
                        8988: 58058,
                        8989: 58059,
                        8990: 58060,
                        8991: 58061,
                        9484: 58058,
                        9488: 58059,
                        9492: 58060,
                        9496: 58061,
                        9585: 58062,
                        9586: 58063,
                        9632: 58064,
                        9633: 58065,
                        9650: 58066,
                        9654: 58068,
                        9660: 58069,
                        9661: 58070,
                        9664: 58071,
                        9674: 58072,
                        8756: 58073,
                        8757: 58074,
                        8786: 58075,
                        9733: 58076,
                        8765: 58077
                    };
                    var s = {
                        offsetAR: 57856,
                        variantAR: "-WinIE6",
                        remap: v
                    };
                    var x = {
                        offsetAR: 57920,
                        variantAR: "-WinIE6",
                        remap: y
                    };
                    i.Augment({
                        FONTDATA: {
                            VARIANT: {
                                normal: s,
                                bold: x,
                                italic: s,
                                "bold-italic": x,
                                "-TeX-variant": {
                                    remap: {
                                        8592: [58049, "-WinIE6"],
                                        8594: [58048, "-WinIE6"],
                                        8739: [58050, "-WinIE6"],
                                        8741: [58051, "-WinIE6"],
                                        8764: [58052, "-WinIE6"],
                                        9651: [58067, "-WinIE6"]
                                    }
                                },
                                "-largeOp": {
                                    fonts: [w, f, g, m],
                                    remap: {
                                        8719: 58000,
                                        8721: 58001,
                                        8747: 58005,
                                        8750: 58006
                                    }
                                },
                                "-smallOp": {
                                    fonts: [w, g, m],
                                    remap: {
                                        8719: 57984,
                                        8721: 57985,
                                        8747: 57989,
                                        8750: 57990
                                    }
                                },
                                "-WinIE6": {
                                    fonts: [w]
                                }
                            },
                            DELIMITERS: {
                                8730: {
                                    HW: {
                                        0: [1, w, null, 57875],
                                        1: [1.2, w, null, 57986],
                                        2: [1.8, w, null, 58002],
                                        3: [2.4, w, null, 58018],
                                        4: [3, w, null, 58034]
                                    }
                                },
                                124: {
                                    stretch: {
                                        ext: [57879, w]
                                    }
                                },
                                8739: {
                                    HW: {
                                        0: [1, w, null, 57879]
                                    },
                                    stretch: {
                                        ext: [57879, w]
                                    }
                                },
                                9168: {
                                    HW: {
                                        1: [1, w, null, 57879]
                                    },
                                    stretch: {
                                        ext: [57879, w]
                                    }
                                },
                                8741: {
                                    HW: {
                                        0: [1, w, null, 57880]
                                    },
                                    stretch: {
                                        ext: [57880, w]
                                    }
                                },
                                8592: {
                                    HW: {
                                        0: [0.889, w, null, 57856]
                                    },
                                    stretch: {
                                        left: [57856, w]
                                    }
                                },
                                8593: {
                                    HW: {
                                        0: [0.888, w, null, 57857]
                                    },
                                    stretch: {
                                        top: [57991, w],
                                        ext: [57993, w]
                                    }
                                },
                                8594: {
                                    HW: {
                                        0: [0.889, w, null, 57858]
                                    },
                                    stretch: {
                                        right: [57858, w]
                                    }
                                },
                                8595: {
                                    HW: {
                                        0: [0.888, w, null, 57859]
                                    },
                                    stretch: {
                                        bot: [57992, w],
                                        ext: [57993, w]
                                    }
                                },
                                8596: {
                                    HW: {
                                        0: [1, w, null, 57860]
                                    },
                                    stretch: {
                                        left: [57856, w],
                                        right: [57858, w]
                                    }
                                },
                                8597: {
                                    HW: {
                                        0: [1.044, w, null, 57859]
                                    },
                                    stretch: {
                                        top: [57991, w],
                                        bot: [57992, w],
                                        ext: [57993, w]
                                    }
                                }
                            }
                        }
                    })
                }
            },
            Chrome: function(t) {
                if (t.isPC && navigator.userAgent.match(/Windows NT (5|6.0)/)) {
                    i.Augment({
                        FONTDATA: {
                            REMAP: {
                                824: "\uEEE0/\uEEE8"
                            },
                            REMAPACCENT: {
                                "\u0307": ".",
                                "\u030B": "\u00B4\uEEE1\u00B4",
                                "\u20D7": "\u2192"
                            }
                        }
                    });
                    delete i.FONTDATA.REMAPACCENT["\u2192"]
                }
                if (t.isPC && !MathJax.Hub.Browser.versionAtLeast("5.0")) {
                    var s = "-WinChrome";
                    i.Augment({
                        FONTDATA: {
                            VARIANT: {
                                normal: {
                                    remap: {
                                        62: [62, s]
                                    }
                                },
                                bold: {
                                    remap: {
                                        58097: [62, s]
                                    }
                                },
                                italic: {
                                    remap: {
                                        100: [100, s]
                                    }
                                },
                                "-tex-caligraphic": {
                                    remap: {
                                        84: [84, s]
                                    }
                                },
                                "-tex-caligraphic-bold": {
                                    remap: {
                                        84: [58096, s]
                                    }
                                },
                                "-largeOp": {
                                    remap: {
                                        10752: [10752, s]
                                    }
                                },
                                "-smallOp": {
                                    remap: {
                                        8899: [8899, s]
                                    }
                                },
                                "-WinChrome": {
                                    fonts: ["MathJax_WinChrome"]
                                }
                            },
                            DELIMITERS: {
                                93: {
                                    stretch: {
                                        bot: [9126, "MathJax_WinChrome"]
                                    }
                                },
                                8971: {
                                    stretch: {
                                        bot: [9126, "MathJax_WinChrome"]
                                    }
                                }
                            }
                        }
                    });
                    i.FONTDATA.FONTS.MathJax_WinChrome = {
                        directory: "WinChrome/Regular",
                        family: "MathJax_WinChrome",
                        testString: "> T d \u23A6 \u2A00",
                        skew: {
                            84: 0.0278,
                            58096: 0.0319
                        },
                        32: [0, 0, 250, 0, 0],
                        62: [540, 40, 778, 83, 694],
                        84: [717, 68, 545, 34, 833],
                        100: [694, 11, 511, 101, 567],
                        160: [0, 0, 250, 0, 0],
                        8899: [750, 249, 833, 55, 777],
                        9126: [1155, 644, 667, 0, 347],
                        10752: [949, 449, 1511, 56, 1454],
                        58096: [720, 69, 644, 38, 947],
                        58097: [587, 85, 894, 96, 797]
                    }
                }
            }
        })
    }(function() {
        var v = i.FONTDATA.FONTS,
            u = i.config.availableFonts;
        var t, s = [];
        if (i.allowWebFonts) {
            for (t in v) {
                if (v[t].family) {
                    if (u && u.length && i.Font.testFont(v[t])) {
                        v[t].available = true;
                        i.Font.loadComplete(v[t])
                    } else {
                        v[t].isWebFont = true;
                        if (i.FontFaceBug) {
                            v[t].family = t
                        }
                        s.push(i.Font.fontFace(t))
                    }
                }
            }
            if (!i.config.preloadWebFonts) {
                i.config.preloadWebFonts = []
            }
            i.config.preloadWebFonts.push(m, o, g);
            if (s.length) {
                i.config.styles["@font-face"] = s
            }
        } else {
            if (u && u.length) {
                for (t in v) {
                    if (v[t].family && i.Font.testFont(v[t])) {
                        v[t].available = true;
                        i.Font.loadComplete(v[t])
                    }
                }
            }
        }
    })();
    q.loadComplete(i.fontDir + "/fontdata.js")
})(MathJax.OutputJax["HTML-CSS"], MathJax.ElementJax.mml, MathJax.Ajax);