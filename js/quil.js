! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        t.exports = n(1)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = r(n(2)),
            i = n(46),
            l = n(49),
            a = n(54),
            s = r(n(55)),
            u = r(n(56)),
            c = n(57),
            f = r(c),
            h = n(47),
            p = n(48),
            d = n(50),
            y = n(51),
            v = r(n(58)),
            b = r(n(59)),
            g = r(n(60)),
            m = r(n(61)),
            _ = r(n(62)),
            O = r(n(63)),
            w = r(n(64)),
            x = r(n(65)),
            k = n(32),
            E = r(k),
            j = r(n(66)),
            A = r(n(67)),
            N = r(n(68)),
            q = r(n(69)),
            T = r(n(101)),
            S = r(n(103)),
            P = r(n(104)),
            L = r(n(105)),
            C = r(n(106)),
            M = r(n(108));
        o.default.register({
            "attributors/class/align": i.AlignClass,
            "attributors/class/background": h.BackgroundClass,
            "attributors/class/color": p.ColorClass,
            "attributors/class/direction": l.DirectionClass,
            "attributors/class/font": d.FontClass,
            "attributors/class/size": y.SizeClass,
            "attributors/style/align": i.AlignStyle,
            "attributors/style/background": h.BackgroundStyle,
            "attributors/style/color": p.ColorStyle,
            "attributors/style/direction": l.DirectionStyle,
            "attributors/style/font": d.FontStyle,
            "attributors/style/size": y.SizeStyle
        }, !0), o.default.register({
            "formats/align": i.AlignClass,
            "formats/direction": l.DirectionClass,
            "formats/indent": a.IndentClass,
            "formats/background": h.BackgroundStyle,
            "formats/color": p.ColorStyle,
            "formats/font": d.FontClass,
            "formats/size": y.SizeClass,
            "formats/blockquote": s.default,
            "formats/code-block": E.default,
            "formats/header": u.default,
            "formats/list": f.default,
            "formats/bold": v.default,
            "formats/code": k.Code,
            "formats/italic": b.default,
            "formats/link": g.default,
            "formats/script": m.default,
            "formats/strike": _.default,
            "formats/underline": O.default,
            "formats/image": w.default,
            "formats/video": x.default,
            "formats/list/item": c.ListItem,
            "modules/formula": j.default,
            "modules/syntax": A.default,
            "modules/toolbar": N.default,
            "themes/bubble": C.default,
            "themes/snow": M.default,
            "ui/icons": q.default,
            "ui/picker": T.default,
            "ui/icon-picker": P.default,
            "ui/color-picker": S.default,
            "ui/tooltip": L.default
        }, !0), t.exports = o.default
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = r(n(3)),
            i = r(n(19)),
            l = n(33),
            a = r(l),
            s = r(n(34)),
            u = r(n(43)),
            c = r(n(38)),
            f = r(n(35)),
            h = r(n(36)),
            p = r(n(44)),
            d = r(n(37)),
            y = r(n(45)),
            v = r(n(52)),
            b = r(n(53));
        i.default.register({
            "blots/block": a.default,
            "blots/block/embed": l.BlockEmbed,
            "blots/break": s.default,
            "blots/container": u.default,
            "blots/cursor": c.default,
            "blots/embed": f.default,
            "blots/inline": h.default,
            "blots/scroll": p.default,
            "blots/text": d.default,
            "modules/clipboard": y.default,
            "modules/history": v.default,
            "modules/keyboard": b.default
        }), o.default.register(a.default, s.default, c.default, h.default, p.default, d.default), t.exports = i.default
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(8),
            i = n(13),
            l = n(14),
            a = n(15),
            s = n(16),
            u = n(17),
            c = n(18),
            f = n(9),
            h = n(11),
            p = n(12),
            d = n(10),
            y = n(7),
            v = {
                Scope: y.Scope,
                create: y.create,
                find: y.find,
                query: y.query,
                register: y.register,
                Container: r.default,
                Format: o.default,
                Leaf: i.default,
                Embed: u.default,
                Scroll: l.default,
                Block: s.default,
                Inline: a.default,
                Text: c.default,
                Attributor: {
                    Attribute: f.default,
                    Class: h.default,
                    Style: p.default,
                    Store: d.default
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = v
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = a.find(t);
            if (null == e) try {
                e = a.create(t)
            } catch (n) {
                e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function(t) {
                    e.domNode.appendChild(t)
                }), t.parentNode.replaceChild(e.domNode, t), e.attach()
            }
            return e
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(5),
            l = n(6),
            a = n(7),
            s = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return o(e, t), e.prototype.appendChild = function(t) {
                    this.insertBefore(t)
                }, e.prototype.attach = function() {
                    var e = this;
                    t.prototype.attach.call(this), this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function(t) {
                        try {
                            var n = r(t);
                            e.insertBefore(n, e.children.head)
                        } catch (t) {
                            if (t instanceof a.ParchmentError) return;
                            throw t
                        }
                    })
                }, e.prototype.deleteAt = function(t, e) {
                    if (0 === t && e === this.length()) return this.remove();
                    this.children.forEachAt(t, e, function(t, e, n) {
                        t.deleteAt(e, n)
                    })
                }, e.prototype.descendant = function(t, n) {
                    var r = this.children.find(n),
                        o = r[0],
                        i = r[1];
                    return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                }, e.prototype.descendants = function(t, n, r) {
                    void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
                    var o = [],
                        i = r;
                    return this.children.forEachAt(n, r, function(n, r, l) {
                        (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= l
                    }), o
                }, e.prototype.detach = function() {
                    this.children.forEach(function(t) {
                        t.detach()
                    }), t.prototype.detach.call(this)
                }, e.prototype.formatAt = function(t, e, n, r) {
                    this.children.forEachAt(t, e, function(t, e, o) {
                        t.formatAt(e, o, n, r)
                    })
                }, e.prototype.insertAt = function(t, e, n) {
                    var r = this.children.find(t),
                        o = r[0],
                        i = r[1];
                    if (o) o.insertAt(i, e, n);
                    else {
                        var l = null == n ? a.create("text", e) : a.create(e, n);
                        this.appendChild(l)
                    }
                }, e.prototype.insertBefore = function(t, e) {
                    if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e) {
                            return t instanceof e
                        })) throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                    t.insertInto(this, e)
                }, e.prototype.length = function() {
                    return this.children.reduce(function(t, e) {
                        return t + e.length()
                    }, 0)
                }, e.prototype.moveChildren = function(t, e) {
                    this.children.forEach(function(n) {
                        t.insertBefore(n, e)
                    })
                }, e.prototype.optimize = function() {
                    if (t.prototype.optimize.call(this), 0 === this.children.length)
                        if (null != this.statics.defaultChild) {
                            var e = a.create(this.statics.defaultChild);
                            this.appendChild(e), e.optimize()
                        } else this.remove()
                }, e.prototype.path = function(t, n) {
                    void 0 === n && (n = !1);
                    var r = this.children.find(t, n),
                        o = r[0],
                        i = r[1],
                        l = [
                            [this, t]
                        ];
                    return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]), l)
                }, e.prototype.removeChild = function(t) {
                    this.children.remove(t)
                }, e.prototype.replace = function(n) {
                    n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n)
                }, e.prototype.split = function(t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next
                    }
                    var n = this.clone();
                    return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function(t, r, o) {
                        t = t.split(r, e), n.appendChild(t)
                    }), n
                }, e.prototype.unwrap = function() {
                    this.moveChildren(this.parent, this.next), this.remove()
                }, e.prototype.update = function(t) {
                    var e = this,
                        n = [],
                        o = [];
                    t.forEach(function(t) {
                        t.target === e.domNode && "childList" === t.type && (n.push.apply(n, t.addedNodes), o.push.apply(o, t.removedNodes))
                    }), o.forEach(function(t) {
                        var n = a.find(t);
                        null != n && (null != n.domNode.parentNode && n.domNode.parentNode !== e.domNode || n.detach())
                    }), n.filter(function(t) {
                        return t.parentNode == e.domNode
                    }).sort(function(t, e) {
                        return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                    }).forEach(function(t) {
                        var n = null;
                        null != t.nextSibling && (n = a.find(t.nextSibling));
                        var o = r(t);
                        o.next == n && null != o.next || (null != o.parent && o.parent.removeChild(e), e.insertBefore(o, n))
                    })
                }, e
            }(l.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = s
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t() {
                this.head = this.tail = void 0, this.length = 0
            }
            return t.prototype.append = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                this.insertBefore(t[0], void 0), t.length > 1 && this.append.apply(this, t.slice(1))
            }, t.prototype.contains = function(t) {
                for (var e, n = this.iterator(); e = n();)
                    if (e === t) return !0;
                return !1
            }, t.prototype.insertBefore = function(t, e) {
                t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = void 0, this.head = this.tail = t), this.length += 1
            }, t.prototype.offset = function(t) {
                for (var e = 0, n = this.head; null != n;) {
                    if (n === t) return e;
                    e += n.length(), n = n.next
                }
                return -1
            }, t.prototype.remove = function(t) {
                this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
            }, t.prototype.iterator = function(t) {
                return void 0 === t && (t = this.head),
                    function() {
                        var e = t;
                        return null != t && (t = t.next), e
                    }
            }, t.prototype.find = function(t, e) {
                void 0 === e && (e = !1);
                for (var n, r = this.iterator(); n = r();) {
                    var o = n.length();
                    if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];
                    t -= o
                }
                return [null, 0]
            }, t.prototype.forEach = function(t) {
                for (var e, n = this.iterator(); e = n();) t(e)
            }, t.prototype.forEachAt = function(t, e, n) {
                if (!(e <= 0))
                    for (var r, o = this.find(t), i = o[0], l = t - o[1], a = this.iterator(i);
                        (r = a()) && l < t + e;) {
                        var s = r.length();
                        t > l ? n(r, t - l, Math.min(e, l + s - t)) : n(r, 0, Math.min(s, t + e - l)), l += s
                    }
            }, t.prototype.map = function(t) {
                return this.reduce(function(e, n) {
                    return e.push(t(n)), e
                }, [])
            }, t.prototype.reduce = function(t, e) {
                for (var n, r = this.iterator(); n = r();) e = t(e, n);
                return e
            }, t
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = n
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = function() {
                function t(t) {
                    this.domNode = t, this.attach()
                }
                return Object.defineProperty(t.prototype, "statics", {
                    get: function() {
                        return this.constructor
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.create = function(t) {
                    if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
                    var e;
                    return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                }, t.prototype.attach = function() {
                    this.domNode[r.DATA_KEY] = {
                        blot: this
                    }
                }, t.prototype.clone = function() {
                    var t = this.domNode.cloneNode();
                    return r.create(t)
                }, t.prototype.detach = function() {
                    null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY]
                }, t.prototype.deleteAt = function(t, e) {
                    this.isolate(t, e).remove()
                }, t.prototype.formatAt = function(t, e, n, o) {
                    var i = this.isolate(t, e);
                    if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
                    else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                        var l = r.create(this.statics.scope);
                        i.wrap(l), l.format(n, o)
                    }
                }, t.prototype.insertAt = function(t, e, n) {
                    var o = null == n ? r.create("text", e) : r.create(e, n),
                        i = this.split(t);
                    this.parent.insertBefore(o, i)
                }, t.prototype.insertInto = function(t, e) {
                    if (null != this.parent && this.parent.children.remove(this), t.children.insertBefore(this, e), null != e) var n = e.domNode;
                    null != this.next && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t
                }, t.prototype.isolate = function(t, e) {
                    var n = this.split(t);
                    return n.split(e), n
                }, t.prototype.length = function() {
                    return 1
                }, t.prototype.offset = function(t) {
                    return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                }, t.prototype.optimize = function() {
                    null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
                }, t.prototype.remove = function() {
                    null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                }, t.prototype.replace = function(t) {
                    null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
                }, t.prototype.replaceWith = function(t, e) {
                    var n = "string" == typeof t ? r.create(t, e) : t;
                    return n.replace(this), n
                }, t.prototype.split = function(t, e) {
                    return 0 === t ? this : this.next
                }, t.prototype.update = function(t) {
                    void 0 === t && (t = [])
                }, t.prototype.wrap = function(t, e) {
                    var n = "string" == typeof t ? r.create(t, e) : t;
                    return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
                }, t.blotName = "abstract", t
            }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o
    }, function(t, e) {
        "use strict";

        function n(t, r) {
            return void 0 === r && (r = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : r ? n(t.parentNode, r) : null
        }

        function r(t, e) {
            void 0 === e && (e = f.ANY);
            var n;
            if ("string" == typeof t) n = c[t] || a[t];
            else if (t instanceof Text) n = c.text;
            else if ("number" == typeof t) t & f.LEVEL & f.BLOCK ? n = c.block : t & f.LEVEL & f.INLINE && (n = c.inline);
            else if (t instanceof HTMLElement) {
                var r = (t.getAttribute("class") || "").split(/\s+/);
                for (var o in r)
                    if (n = s[r[o]]) break;
                n = n || u[t.tagName]
            }
            return null == n ? null : e & f.LEVEL & n.scope && e & f.TYPE & n.scope ? n : null
        }

        function o() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
            if (t.length > 1) return t.map(function(t) {
                return o(t)
            });
            var n = t[0];
            if ("string" != typeof n.blotName && "string" != typeof n.attrName) throw new l("Invalid definition");
            if ("abstract" === n.blotName) throw new l("Cannot register abstract class");
            return c[n.blotName || n.attrName] = n, "string" == typeof n.keyName ? a[n.keyName] = n : (null != n.className && (s[n.className] = n), null != n.tagName && (Array.isArray(n.tagName) ? n.tagName = n.tagName.map(function(t) {
                return t.toUpperCase()
            }) : n.tagName = n.tagName.toUpperCase(), (Array.isArray(n.tagName) ? n.tagName : [n.tagName]).forEach(function(t) {
                null != u[t] && null != n.className || (u[t] = n)
            }))), n
        }
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            l = function(t) {
                function e(e) {
                    e = "[Parchment] " + e, t.call(this, e), this.message = e, this.name = this.constructor.name
                }
                return i(e, t), e
            }(Error);
        e.ParchmentError = l;
        var a = {},
            s = {},
            u = {},
            c = {};
        e.DATA_KEY = "__blot",
            function(t) {
                t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
            }(e.Scope || (e.Scope = {}));
        var f = e.Scope;
        e.create = function(t, e) {
            var n = r(t);
            if (null == n) throw new l("Unable to create " + t + " blot");
            var o = n;
            return new o(t instanceof Node ? t : o.create(e), e)
        }, e.find = n, e.query = r, e.register = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(9),
            i = n(10),
            l = n(4),
            a = n(7),
            s = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e.formats = function(t) {
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                }, e.prototype.attach = function() {
                    t.prototype.attach.call(this), this.attributes = new i.default(this.domNode)
                }, e.prototype.format = function(t, e) {
                    var n = a.query(t);
                    n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                }, e.prototype.formats = function() {
                    var t = this.attributes.values(),
                        e = this.statics.formats(this.domNode);
                    return null != e && (t[this.statics.blotName] = e), t
                }, e.prototype.replaceWith = function(e, n) {
                    var r = t.prototype.replaceWith.call(this, e, n);
                    return this.attributes.copy(r), r
                }, e.prototype.update = function(e) {
                    var n = this;
                    t.prototype.update.call(this, e), e.some(function(t) {
                        return t.target === n.domNode && "attributes" === t.type
                    }) && this.attributes.build()
                }, e.prototype.wrap = function(n, r) {
                    var o = t.prototype.wrap.call(this, n, r);
                    return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o
                }, e
            }(l.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = s
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = function() {
                function t(t, e, n) {
                    void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                    var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                    null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                }
                return t.keys = function(t) {
                    return [].map.call(t.attributes, function(t) {
                        return t.name
                    })
                }, t.prototype.add = function(t, e) {
                    return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                }, t.prototype.canAdd = function(t, e) {
                    return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || this.whitelist.indexOf(e) > -1)
                }, t.prototype.remove = function(t) {
                    t.removeAttribute(this.keyName)
                }, t.prototype.value = function(t) {
                    return t.getAttribute(this.keyName)
                }, t
            }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o
    }, function(t, e, n) {
        "use strict";
        var r = n(9),
            o = n(11),
            i = n(12),
            l = n(7),
            a = function() {
                function t(t) {
                    this.attributes = {}, this.domNode = t, this.build()
                }
                return t.prototype.attribute = function(t, e) {
                    e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                }, t.prototype.build = function() {
                    var t = this;
                    this.attributes = {};
                    var e = r.default.keys(this.domNode),
                        n = o.default.keys(this.domNode),
                        a = i.default.keys(this.domNode);
                    e.concat(n).concat(a).forEach(function(e) {
                        var n = l.query(e, l.Scope.ATTRIBUTE);
                        n instanceof r.default && (t.attributes[n.attrName] = n)
                    })
                }, t.prototype.copy = function(t) {
                    var e = this;
                    Object.keys(this.attributes).forEach(function(n) {
                        var r = e.attributes[n].value(e.domNode);
                        t.format(n, r)
                    })
                }, t.prototype.move = function(t) {
                    var e = this;
                    this.copy(t), Object.keys(this.attributes).forEach(function(t) {
                        e.attributes[t].remove(e.domNode)
                    }), this.attributes = {}
                }, t.prototype.values = function() {
                    var t = this;
                    return Object.keys(this.attributes).reduce(function(e, n) {
                        return e[n] = t.attributes[n].value(t.domNode), e
                    }, {})
                }, t
            }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) {
                return 0 === t.indexOf(e + "-")
            })
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return o(e, t), e.keys = function(t) {
                    return (t.getAttribute("class") || "").split(/\s+/).map(function(t) {
                        return t.split("-").slice(0, -1).join("-")
                    })
                }, e.prototype.add = function(t, e) {
                    return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
                }, e.prototype.remove = function(t) {
                    r(t, this.keyName).forEach(function(e) {
                        t.classList.remove(e)
                    }), 0 === t.classList.length && t.removeAttribute("class")
                }, e.prototype.value = function(t) {
                    return (r(t, this.keyName)[0] || "").slice(this.keyName.length + 1)
                }, e
            }(n(9).default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.split("-"),
                n = e.slice(1).map(function(t) {
                    return t[0].toUpperCase() + t.slice(1)
                }).join("");
            return e[0] + n
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return o(e, t), e.keys = function(t) {
                    return (t.getAttribute("style") || "").split(";").map(function(t) {
                        return t.split(":")[0].trim()
                    })
                }, e.prototype.add = function(t, e) {
                    return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0)
                }, e.prototype.remove = function(t) {
                    t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
                }, e.prototype.value = function(t) {
                    return t.style[r(this.keyName)]
                }, e
            }(n(9).default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(6),
            i = n(7),
            l = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e.value = function(t) {
                    return !0
                }, e.prototype.index = function(t, e) {
                    return t !== this.domNode ? -1 : Math.min(e, 1)
                }, e.prototype.position = function(t, e) {
                    var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                    return t > 0 && (n += 1), [this.parent.domNode, n]
                }, e.prototype.value = function() {
                    return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;
                    var t
                }, e.scope = i.Scope.INLINE_BLOT, e
            }(o.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(4),
            i = n(7),
            l = {
                attributes: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            },
            a = function(t) {
                function e(e) {
                    var n = this;
                    t.call(this, e), this.parent = null, this.observer = new MutationObserver(function(t) {
                        n.update(t)
                    }), this.observer.observe(this.domNode, l)
                }
                return r(e, t), e.prototype.detach = function() {
                    t.prototype.detach.call(this), this.observer.disconnect()
                }, e.prototype.deleteAt = function(e, n) {
                    this.update(), 0 === e && n === this.length() ? this.children.forEach(function(t) {
                        t.remove()
                    }) : t.prototype.deleteAt.call(this, e, n)
                }, e.prototype.formatAt = function(e, n, r, o) {
                    this.update(), t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.insertAt = function(e, n, r) {
                    this.update(), t.prototype.insertAt.call(this, e, n, r)
                }, e.prototype.optimize = function(e) {
                    var n = this;
                    void 0 === e && (e = []), t.prototype.optimize.call(this), e.push.apply(e, this.observer.takeRecords());
                    for (var r = function(t, e) {
                            void 0 === e && (e = !0), null != t && t !== n && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && r(t.parent))
                        }, l = function(t) {
                            null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(l), t.optimize())
                        }, a = e, s = 0; a.length > 0; s += 1) {
                        if (s >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                        a.forEach(function(t) {
                            var e = i.find(t.target, !0);
                            null != e && (e.domNode === t.target && ("childList" === t.type ? (r(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function(t) {
                                var e = i.find(t, !1);
                                r(e, !1), e instanceof o.default && e.children.forEach(function(t) {
                                    r(t, !1)
                                })
                            })) : "attributes" === t.type && r(e.prev)), r(e))
                        }), this.children.forEach(l), a = this.observer.takeRecords(), e.push.apply(e, a)
                    }
                }, e.prototype.update = function(e) {
                    var n = this;
                    (e = e || this.observer.takeRecords()).map(function(t) {
                        var e = i.find(t.target, !0);
                        if (null != e) return null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null)
                    }).forEach(function(t) {
                        null != t && t !== n && t.update(t.domNode[i.DATA_KEY].mutations || [])
                    }), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations), this.optimize(e)
                }, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
            }(o.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (Object.keys(t).length !== Object.keys(e).length) return !1;
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8),
            l = n(7),
            a = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return o(e, t), e.formats = function(n) {
                    if (n.tagName !== e.tagName) return t.formats.call(this, n)
                }, e.prototype.format = function(n, r) {
                    var o = this;
                    n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function(t) {
                        t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t)
                    }), this.unwrap())
                }, e.prototype.formatAt = function(e, n, r, o) {
                    null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE) ? this.isolate(e, n).format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.optimize = function() {
                    t.prototype.optimize.call(this);
                    var n = this.formats();
                    if (0 === Object.keys(n).length) return this.unwrap();
                    var o = this.next;
                    o instanceof e && o.prev === this && r(n, o.formats()) && (o.moveChildren(this), o.remove())
                }, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
            }(i.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(8),
            i = n(7),
            l = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e.formats = function(n) {
                    var r = i.query(e.blotName).tagName;
                    if (n.tagName !== r) return t.formats.call(this, n)
                }, e.prototype.format = function(n, r) {
                    n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName)
                }, e.prototype.formatAt = function(e, n, r, o) {
                    null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.insertAt = function(e, n, r) {
                    if (null == r || null != i.query(n, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);
                    else {
                        var o = this.split(e),
                            l = i.create(n, r);
                        o.parent.insertBefore(l, o)
                    }
                }, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
            }(o.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e.formats = function(t) {}, e.prototype.format = function(e, n) {
                    t.prototype.formatAt.call(this, 0, this.length(), e, n)
                }, e.prototype.formatAt = function(e, n, r, o) {
                    0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.formats = function() {
                    return this.statics.formats(this.domNode)
                }, e
            }(n(13).default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(13),
            i = n(7),
            l = function(t) {
                function e(e) {
                    t.call(this, e), this.text = this.statics.value(this.domNode)
                }
                return r(e, t), e.create = function(t) {
                    return document.createTextNode(t)
                }, e.value = function(t) {
                    return t.data
                }, e.prototype.deleteAt = function(t, e) {
                    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                }, e.prototype.index = function(t, e) {
                    return this.domNode === t ? e : -1
                }, e.prototype.insertAt = function(e, n, r) {
                    null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
                }, e.prototype.length = function() {
                    return this.text.length
                }, e.prototype.optimize = function() {
                    t.prototype.optimize.call(this), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                }, e.prototype.position = function(t, e) {
                    return void 0 === e && (e = !1), [this.domNode, t]
                }, e.prototype.split = function(t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next
                    }
                    var n = i.create(this.domNode.splitText(t));
                    return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
                }, e.prototype.update = function(t) {
                    var e = this;
                    t.some(function(t) {
                        return "characterData" === t.type && t.target === e.domNode
                    }) && (this.text = this.statics.value(this.domNode))
                }, e.prototype.value = function() {
                    return this.text
                }, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
            }(o.default);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (null == (e = (0, g.default)(!0, {
                    container: t,
                    modules: {
                        clipboard: !0,
                        keyboard: !0,
                        history: !0
                    }
                }, e)).theme || e.theme === w.DEFAULTS.theme) e.theme = _.default;
            else if (e.theme = w.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?");
            var n = (0, g.default)(!0, {}, e.theme.DEFAULTS);
            [n, e].forEach(function(t) {
                t.modules = t.modules || {}, Object.keys(t.modules).forEach(function(e) {
                    !0 === t.modules[e] && (t.modules[e] = {})
                })
            });
            var r = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce(function(t, e) {
                var n = w.import("modules/" + e);
                return null == n ? O.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t
            }, {});
            return null != e.modules && null != e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                container: e.modules.toolbar
            }), e = (0, g.default)(!0, {}, w.DEFAULTS, {
                modules: r
            }, n, e), ["bounds", "container"].forEach(function(t) {
                "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
            }), e
        }

        function l(t, e, n, r, o) {
            var i = {};
            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : s(n)) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), o = o || p.default.sources.API, [t, e, i, o]
        }

        function a(t, e, n, r) {
            if (null == t) return null;
            var o = void 0,
                i = void 0;
            if (e instanceof f.default) {
                var l = [t.index, t.index + t.length].map(function(t) {
                        return e.transformPosition(t, r === p.default.sources.USER)
                    }),
                    a = u(l, 2);
                o = a[0], i = a[1]
            } else {
                var s = [t.index, t.index + t.length].map(function(t) {
                        return t < e || t === e && r !== p.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                    }),
                    c = u(s, 2);
                o = c[0], i = c[1]
            }
            return new v.Range(o, i - o)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.overload = e.expandConfig = void 0;
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            u = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            c = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
        n(20);
        var f = r(n(21)),
            h = r(n(28)),
            p = r(n(29)),
            d = r(n(40)),
            y = r(n(3)),
            v = n(41),
            b = r(v),
            g = r(n(26)),
            m = r(n(31)),
            _ = r(n(42)),
            O = (0, m.default)("quill"),
            w = function() {
                function t(e) {
                    var n = this,
                        r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (o(this, t), r = i(e, r), this.container = r.container, null == this.container) return O.error("Invalid Quill container", e);
                    r.debug && t.debug(r.debug);
                    var l = this.container.innerHTML.trim();
                    this.container.classList.add("ql-container"), this.container.innerHTML = "", this.root = this.addContainer("ql-editor"), this.emitter = new p.default, this.scroll = y.default.create(this.root, {
                        emitter: this.emitter,
                        whitelist: r.formats
                    }), this.editor = new h.default(this.scroll, this.emitter), this.selection = new b.default(this.scroll, this.emitter), this.theme = new r.theme(this, r), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.pasteHTML("<div class='ql-editor' style=\"white-space: normal;\">" + l + "<p><br></p></div>"), this.history.clear(), r.readOnly && this.disable(), r.placeholder && this.root.setAttribute("data-placeholder", r.placeholder), this.root.classList.toggle("ql-blank", this.editor.isBlank()), this.emitter.on(p.default.events.TEXT_CHANGE, function(t) {
                        n.root.classList.toggle("ql-blank", n.editor.isBlank())
                    })
                }
                return c(t, null, [{
                    key: "debug",
                    value: function(t) {
                        m.default.level(t)
                    }
                }, {
                    key: "import",
                    value: function(t) {
                        return null == this.imports[t] && O.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t]
                    }
                }, {
                    key: "register",
                    value: function(t, e) {
                        var n = this,
                            r = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                        if ("string" != typeof t) {
                            var o = t.attrName || t.blotName;
                            "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function(r) {
                                n.register(r, t[r], e)
                            })
                        } else null == this.imports[t] || r || O.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName && y.default.register(e)
                    }
                }]), c(t, [{
                    key: "addContainer",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("string" == typeof t) {
                            var n = t;
                            (t = document.createElement("div")).classList.add(n)
                        }
                        return this.container.insertBefore(t, e), t
                    }
                }, {
                    key: "blur",
                    value: function() {
                        this.selection.setRange(null)
                    }
                }, {
                    key: "deleteText",
                    value: function(t, e, n) {
                        var r = l(t, e, n),
                            o = u(r, 4);
                        t = o[0], e = o[1], n = o[3];
                        var i = this.getSelection(),
                            s = this.editor.deleteText(t, e, n);
                        return i = a(i, t, -1 * e, n), this.setSelection(i, p.default.sources.SILENT), s
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.enable(!1)
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.editor.enable(t), t || this.blur()
                    }
                }, {
                    key: "focus",
                    value: function() {
                        this.selection.focus(), this.selection.scrollIntoView()
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? p.default.sources.API : arguments[2],
                            r = this.getSelection(!0),
                            o = new f.default;
                        if (null == r) return o;
                        if (y.default.query(t, y.default.Scope.BLOCK)) o = this.formatLine(r, t, e, n);
                        else {
                            if (0 === r.length) return this.selection.format(t, e), o;
                            o = this.formatText(r, t, e, n)
                        }
                        return this.setSelection(r, p.default.sources.SILENT), o
                    }
                }, {
                    key: "formatLine",
                    value: function(t, e, n, r, o) {
                        var i = void 0,
                            a = l(t, e, n, r, o),
                            s = u(a, 4);
                        t = s[0], e = s[1], i = s[2], o = s[3];
                        var c = this.getSelection(),
                            f = this.editor.formatLine(t, e, i, o);
                        return this.selection.setRange(c, !0, p.default.sources.SILENT), this.selection.scrollIntoView(), f
                    }
                }, {
                    key: "formatText",
                    value: function(t, e, n, r, o) {
                        var i = void 0,
                            a = l(t, e, n, r, o),
                            s = u(a, 4);
                        t = s[0], e = s[1], i = s[2], o = s[3];
                        var c = this.getSelection(),
                            f = this.editor.formatText(t, e, i, o);
                        return this.selection.setRange(c, !0, p.default.sources.SILENT), this.selection.scrollIntoView(), f
                    }
                }, {
                    key: "getBounds",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                        return "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length)
                    }
                }, {
                    key: "getContents",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                            e = arguments.length <= 1 || void 0 === arguments[1] ? this.getLength() - t : arguments[1],
                            n = l(t, e),
                            r = u(n, 2);
                        return t = r[0], e = r[1], this.editor.getContents(t, e)
                    }
                }, {
                    key: "getFormat",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? this.getSelection() : arguments[0],
                            e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                        return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                    }
                }, {
                    key: "getLength",
                    value: function() {
                        return this.scroll.length()
                    }
                }, {
                    key: "getModule",
                    value: function(t) {
                        return this.theme.modules[t]
                    }
                }, {
                    key: "getSelection",
                    value: function() {
                        return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
                    }
                }, {
                    key: "getText",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                            e = arguments.length <= 1 || void 0 === arguments[1] ? this.getLength() - t : arguments[1],
                            n = l(t, e),
                            r = u(n, 2);
                        return t = r[0], e = r[1], this.editor.getText(t, e)
                    }
                }, {
                    key: "hasFocus",
                    value: function() {
                        return this.selection.hasFocus()
                    }
                }, {
                    key: "insertEmbed",
                    value: function(e, n, r) {
                        var o = arguments.length <= 3 || void 0 === arguments[3] ? t.sources.API : arguments[3],
                            i = this.getSelection(),
                            l = this.editor.insertEmbed(e, n, r, o);
                        return i = a(i, l, o), this.setSelection(i, p.default.sources.SILENT), l
                    }
                }, {
                    key: "insertText",
                    value: function(t, e, n, r, o) {
                        var i = void 0,
                            s = this.getSelection(),
                            c = l(t, 0, n, r, o),
                            f = u(c, 4);
                        t = f[0], i = f[2], o = f[3];
                        var h = this.editor.insertText(t, e, i, o);
                        return s = a(s, t, e.length, o), this.setSelection(s, p.default.sources.SILENT), h
                    }
                }, {
                    key: "off",
                    value: function() {
                        return this.emitter.off.apply(this.emitter, arguments)
                    }
                }, {
                    key: "on",
                    value: function() {
                        return this.emitter.on.apply(this.emitter, arguments)
                    }
                }, {
                    key: "once",
                    value: function() {
                        return this.emitter.once.apply(this.emitter, arguments)
                    }
                }, {
                    key: "pasteHTML",
                    value: function(t, e) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? p.default.sources.API : arguments[2];
                        if ("string" == typeof t) return this.setContents(this.clipboard.convert(t), e);
                        var r = this.clipboard.convert(e);
                        return this.updateContents((new f.default).retain(t).concat(r), n)
                    }
                }, {
                    key: "removeFormat",
                    value: function(t, e, n) {
                        var r = this.getSelection(),
                            o = l(t, e, n),
                            i = u(o, 4);
                        t = i[0], e = i[1], n = i[3];
                        var s = this.editor.removeFormat(t, e, n);
                        return r = a(r, s, n), this.setSelection(r, p.default.sources.SILENT), s
                    }
                }, {
                    key: "setContents",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? p.default.sources.API : arguments[1],
                            n = (t = new f.default(t).slice()).ops[t.ops.length - 1];
                        return null != n && "\n" === n.insert[n.insert.length - 1] || t.insert("\n"), t.delete(this.getLength()), this.editor.applyDelta(t, e)
                    }
                }, {
                    key: "setSelection",
                    value: function(e, n, r) {
                        if (null == e) this.selection.setRange(null, n || t.sources.API);
                        else {
                            var o = l(e, n, r),
                                i = u(o, 4);
                            e = i[0], n = i[1], r = i[3], this.selection.setRange(new v.Range(e, n), r)
                        }
                        this.selection.scrollIntoView()
                    }
                }, {
                    key: "setText",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? p.default.sources.API : arguments[1],
                            n = (new f.default).insert(t);
                        return this.setContents(n, e)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? p.default.sources.USER : arguments[0],
                            e = this.scroll.update(t);
                        return this.selection.update(t), e
                    }
                }, {
                    key: "updateContents",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? p.default.sources.API : arguments[1],
                            n = this.getSelection();
                        Array.isArray(t) && (t = new f.default(t.slice()));
                        var r = this.editor.applyDelta(t, e);
                        return null != n && (n = a(n, r, e), this.setSelection(n, p.default.sources.SILENT)), r
                    }
                }]), t
            }();
        w.DEFAULTS = {
            bounds: document.body,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            theme: "default"
        }, w.events = p.default.events, w.sources = p.default.sources, w.version = "1.0.0", w.imports = {
            delta: f.default,
            parchment: y.default,
            "core/module": d.default,
            "core/theme": _.default
        }, e.expandConfig = i, e.overload = l, e.default = w
    }, function(t, e) {
        "use strict";
        var n = document.createElement("div");
        n.classList.toggle("test-class", !1), n.classList.contains("test-class") && function() {
            var t = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, n) {
                return arguments.length > 1 && !this.contains(e) == !n ? n : t.call(this, e)
            }
        }(), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
            return e = e || 0, this.substr(e, t.length) === t
        }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
            var n = this.toString();
            ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
            var r = n.indexOf(t, e);
            return -1 !== r && r === e
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                    if (e = n[i], t.call(o, e, i, n)) return e
            }
        }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1)
        })
    }, function(t, e, n) {
        var r = n(22),
            o = n(23),
            i = n(26),
            l = n(27),
            a = String.fromCharCode(0),
            s = function(t) {
                Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
            };
        s.prototype.insert = function(t, e) {
            var n = {};
            return 0 === t.length ? this : (n.insert = t, "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
        }, s.prototype.delete = function(t) {
            return t <= 0 ? this : this.push({
                delete: t
            })
        }, s.prototype.retain = function(t, e) {
            if (t <= 0) return this;
            var n = {
                retain: t
            };
            return "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
        }, s.prototype.push = function(t) {
            var e = this.ops.length,
                n = this.ops[e - 1];
            if (t = i(!0, {}, t), "object" == typeof n) {
                if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
                    delete: n.delete + t.delete
                }, this;
                if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;
                if (o(t.attributes, n.attributes)) {
                    if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                        insert: n.insert + t.insert
                    }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                    if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                        retain: n.retain + t.retain
                    }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                }
            }
            return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
        }, s.prototype.chop = function() {
            var t = this.ops[this.ops.length - 1];
            return t && t.retain && !t.attributes && this.ops.pop(), this
        }, s.prototype.length = function() {
            return this.ops.reduce(function(t, e) {
                return t + l.length(e)
            }, 0)
        }, s.prototype.slice = function(t, e) {
            t = t || 0, "number" != typeof e && (e = 1 / 0);
            for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext();) {
                var i;
                o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += l.length(i)
            }
            return new s(n)
        }, s.prototype.compose = function(t) {
            for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s; e.hasNext() || n.hasNext();)
                if ("insert" === n.peekType()) r.push(n.next());
                else if ("delete" === e.peekType()) r.push(e.next());
            else {
                var o = Math.min(e.peekLength(), n.peekLength()),
                    i = e.next(o),
                    a = n.next(o);
                if ("number" == typeof a.retain) {
                    var u = {};
                    "number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
                    var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
                    c && (u.attributes = c), r.push(u)
                } else "number" == typeof a.delete && "number" == typeof i.retain && r.push(a)
            }
            return r.chop()
        }, s.prototype.concat = function(t) {
            var e = new s(this.ops.slice());
            return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
        }, s.prototype.diff = function(t) {
            var e = new s;
            if (this.ops === t.ops) return e;
            var n = [this.ops, t.ops].map(function(e) {
                    return e.map(function(n) {
                        if (null != n.insert) return "string" == typeof n.insert ? n.insert : a;
                        var r = e === t.ops ? "on" : "with";
                        throw new Error("diff() called " + r + " non-document")
                    }).join("")
                }),
                i = r(n[0], n[1]),
                u = l.iterator(this.ops),
                c = l.iterator(t.ops);
            return i.forEach(function(t) {
                for (var n = t[1].length; n > 0;) {
                    var i = 0;
                    switch (t[0]) {
                        case r.INSERT:
                            i = Math.min(c.peekLength(), n), e.push(c.next(i));
                            break;
                        case r.DELETE:
                            i = Math.min(n, u.peekLength()), u.next(i), e.delete(i);
                            break;
                        case r.EQUAL:
                            i = Math.min(u.peekLength(), c.peekLength(), n);
                            var a = u.next(i),
                                s = c.next(i);
                            o(a.insert, s.insert) ? e.retain(i, l.attributes.diff(a.attributes, s.attributes)) : e.push(s).delete(i)
                    }
                    n -= i
                }
            }), e.chop()
        }, s.prototype.transform = function(t, e) {
            if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
            for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s; n.hasNext() || r.hasNext();)
                if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
                    if ("insert" === r.peekType()) o.push(r.next());
                    else {
                        var i = Math.min(n.peekLength(), r.peekLength()),
                            a = n.next(i),
                            u = r.next(i);
                        if (a.delete) continue;
                        u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
                    }
            else o.retain(l.length(n.next()));
            return o.chop()
        }, s.prototype.transformPosition = function(t, e) {
            e = !!e;
            for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
                var o = n.peekLength(),
                    i = n.peekType();
                n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
            }
            return t
        }, t.exports = s
    }, function(t, e) {
        function n(t, e) {
            if (t == e) return t ? [
                [h, t]
            ] : [];
            var n = l(t, e),
                o = t.substring(0, n);
            n = a(t = t.substring(n), e = e.substring(n));
            var i = t.substring(t.length - n),
                s = r(t = t.substring(0, t.length - n), e = e.substring(0, e.length - n));
            return o && s.unshift([h, o]), i && s.push([h, i]), u(s), s
        }

        function r(t, e) {
            var r;
            if (!t) return [
                [f, e]
            ];
            if (!e) return [
                [c, t]
            ];
            var i = t.length > e.length ? t : e,
                l = t.length > e.length ? e : t,
                a = i.indexOf(l);
            if (-1 != a) return r = [
                [f, i.substring(0, a)],
                [h, l],
                [f, i.substring(a + l.length)]
            ], t.length > e.length && (r[0][0] = r[2][0] = c), r;
            if (1 == l.length) return [
                [c, t],
                [f, e]
            ];
            var u = s(t, e);
            if (u) {
                var p = u[0],
                    d = u[1],
                    y = u[2],
                    v = u[3],
                    b = u[4],
                    g = n(p, y),
                    m = n(d, v);
                return g.concat([
                    [h, b]
                ], m)
            }
            return o(t, e)
        }

        function o(t, e) {
            for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), l = o, a = 2 * o, s = new Array(a), u = new Array(a), h = 0; h < a; h++) s[h] = -1, u[h] = -1;
            s[l + 1] = 0, u[l + 1] = 0;
            for (var p = n - r, d = p % 2 != 0, y = 0, v = 0, b = 0, g = 0, m = 0; m < o; m++) {
                for (var _ = -m + y; _ <= m - v; _ += 2) {
                    for (var O, w = l + _, x = (O = _ == -m || _ != m && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1) - _; O < n && x < r && t.charAt(O) == e.charAt(x);) O++, x++;
                    if (s[w] = O, O > n) v += 2;
                    else if (x > r) y += 2;
                    else if (d && (j = l + p - _) >= 0 && j < a && -1 != u[j] && O >= (E = n - u[j])) return i(t, e, O, x)
                }
                for (var k = -m + b; k <= m - g; k += 2) {
                    for (var E, j = l + k, A = (E = k == -m || k != m && u[j - 1] < u[j + 1] ? u[j + 1] : u[j - 1] + 1) - k; E < n && A < r && t.charAt(n - E - 1) == e.charAt(r - A - 1);) E++, A++;
                    if (u[j] = E, E > n) g += 2;
                    else if (A > r) b += 2;
                    else if (!d && (w = l + p - k) >= 0 && w < a && -1 != s[w]) {
                        x = l + (O = s[w]) - w;
                        if (E = n - E, O >= E) return i(t, e, O, x)
                    }
                }
            }
            return [
                [c, t],
                [f, e]
            ]
        }

        function i(t, e, r, o) {
            var i = t.substring(0, r),
                l = e.substring(0, o),
                a = t.substring(r),
                s = e.substring(o),
                u = n(i, l),
                c = n(a, s);
            return u.concat(c)
        }

        function l(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
            return o
        }

        function a(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
            return o
        }

        function s(t, e) {
            function n(t, e, n) {
                for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(u, c + 1));) {
                    var h = l(t.substring(n), e.substring(c)),
                        p = a(t.substring(0, n), e.substring(0, c));
                    f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h), r = t.substring(0, n - p), o = t.substring(n + h), i = e.substring(0, c - p), s = e.substring(c + h))
                }
                return 2 * f.length >= t.length ? [r, o, i, s, f] : null
            }
            var r = t.length > e.length ? t : e,
                o = t.length > e.length ? e : t;
            if (r.length < 4 || 2 * o.length < r.length) return null;
            var i, s = n(r, o, Math.ceil(r.length / 4)),
                u = n(r, o, Math.ceil(r.length / 2));
            if (!s && !u) return null;
            i = u ? s && s[4].length > u[4].length ? s : u : s;
            var c, f, h, p;
            return t.length > e.length ? (c = i[0], f = i[1], h = i[2], p = i[3]) : (h = i[0], p = i[1], c = i[2], f = i[3]), [c, f, h, p, i[4]]
        }

        function u(t) {
            t.push([h, ""]);
            for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;) switch (t[n][0]) {
                case f:
                    o++, s += t[n][1], n++;
                    break;
                case c:
                    r++, i += t[n][1], n++;
                    break;
                case h:
                    r + o > 1 ? (0 !== r && 0 !== o && (0 !== (e = l(s, i)) && (n - r - o > 0 && t[n - r - o - 1][0] == h ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [h, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(n - o, r + o, [f, s]) : 0 === o ? t.splice(n - r, r + o, [c, i]) : t.splice(n - r - o, r + o, [c, i], [f, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == h ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = ""
            }
            "" === t[t.length - 1][1] && t.pop();
            var p = !1;
            for (n = 1; n < t.length - 1;) t[n - 1][0] == h && t[n + 1][0] == h && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), p = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), p = !0)), n++;
            p && u(t)
        }
        var c = -1,
            f = 1,
            h = 0,
            p = n;
        p.INSERT = f, p.DELETE = c, p.EQUAL = h, t.exports = p
    }, function(t, e, n) {
        function r(t) {
            return null === t || void 0 === t
        }

        function o(t) {
            return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
        }

        function i(t, e, n) {
            var i, c;
            if (r(t) || r(e)) return !1;
            if (t.prototype !== e.prototype) return !1;
            if (s(t)) return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, n));
            if (o(t)) {
                if (!o(e)) return !1;
                if (t.length !== e.length) return !1;
                for (i = 0; i < t.length; i++)
                    if (t[i] !== e[i]) return !1;
                return !0
            }
            try {
                var f = a(t),
                    h = a(e)
            } catch (t) {
                return !1
            }
            if (f.length != h.length) return !1;
            for (f.sort(), h.sort(), i = f.length - 1; i >= 0; i--)
                if (f[i] != h[i]) return !1;
            for (i = f.length - 1; i >= 0; i--)
                if (c = f[i], !u(t[c], e[c], n)) return !1;
            return typeof t == typeof e
        }
        var l = Array.prototype.slice,
            a = n(24),
            s = n(25),
            u = t.exports = function(t, e, n) {
                return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : i(t, e, n))
            }
    }, function(t, e) {
        function n(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        }(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
    }, function(t, e) {
        function n(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function r(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
        }
        var o = "[object Arguments]" == function() {
            return Object.prototype.toString.call(arguments)
        }();
        (e = t.exports = o ? n : r).supported = n, e.unsupported = r
    }, function(t, e) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            o = function(t) {
                return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
            },
            i = function(t) {
                if (!t || "[object Object]" !== r.call(t)) return !1;
                var e = n.call(t, "constructor"),
                    o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !e && !o) return !1;
                var i;
                for (i in t);
                return void 0 === i || n.call(t, i)
            };
        t.exports = function t() {
            var e, n, r, l, a, s, u = arguments[0],
                c = 1,
                f = arguments.length,
                h = !1;
            for ("boolean" == typeof u ? (h = u, u = arguments[1] || {}, c = 2) : ("object" != typeof u && "function" != typeof u || null == u) && (u = {}); c < f; ++c)
                if (null != (e = arguments[c]))
                    for (n in e) r = u[n], u !== (l = e[n]) && (h && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = r && o(r) ? r : []) : s = r && i(r) ? r : {}, u[n] = t(h, s, l)) : void 0 !== l && (u[n] = l));
            return u
        }
    }, function(t, e, n) {
        function r(t) {
            this.ops = t, this.index = 0, this.offset = 0
        }
        var o = n(23),
            i = n(26),
            l = {
                attributes: {
                    compose: function(t, e, n) {
                        "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                        var r = i(!0, {}, e);
                        n || (r = Object.keys(r).reduce(function(t, e) {
                            return null != r[e] && (t[e] = r[e]), t
                        }, {}));
                        for (var o in t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
                        return Object.keys(r).length > 0 ? r : void 0
                    },
                    diff: function(t, e) {
                        "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                        var n = Object.keys(t).concat(Object.keys(e)).reduce(function(n, r) {
                            return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                        }, {});
                        return Object.keys(n).length > 0 ? n : void 0
                    },
                    transform: function(t, e, n) {
                        if ("object" != typeof t) return e;
                        if ("object" == typeof e) {
                            if (!n) return e;
                            var r = Object.keys(e).reduce(function(n, r) {
                                return void 0 === t[r] && (n[r] = e[r]), n
                            }, {});
                            return Object.keys(r).length > 0 ? r : void 0
                        }
                    }
                },
                iterator: function(t) {
                    return new r(t)
                },
                length: function(t) {
                    return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                }
            };
        r.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0
        }, r.prototype.next = function(t) {
            t || (t = 1 / 0);
            var e = this.ops[this.index];
            if (e) {
                var n = this.offset,
                    r = l.length(e);
                if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
                    delete: t
                };
                var o = {};
                return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o
            }
            return {
                retain: 1 / 0
            }
        }, r.prototype.peekLength = function() {
            return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0
        }, r.prototype.peekType = function() {
            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
        }, t.exports = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            return Object.keys(e).reduce(function(n, r) {
                return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]], n)
            }, {})
        }

        function a(t) {
            return t.ops.reduce(function(t, e) {
                if (1 === e.insert) {
                    var n = (0, m.default)(e.attributes);
                    return delete n.image, t.insert({
                        image: e.attributes.image
                    }, n)
                }
                if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || ((e = (0, m.default)(e)).attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
                    var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                    return t.insert(r, e.attributes)
                }
                return t.push(e)
            }, new f.default)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            u = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            c = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            f = r(n(21)),
            h = r(n(27)),
            p = r(n(29)),
            d = r(n(3)),
            y = r(n(32)),
            v = r(n(38)),
            b = n(33),
            g = r(b),
            m = r(n(39)),
            _ = r(n(23)),
            O = r(n(26)),
            w = function() {
                function t(e, n) {
                    i(this, t), this.scroll = e, this.emitter = n, this.emitter.on(p.default.events.SCROLL_UPDATE, this.update.bind(this, null)), this.delta = this.getDelta(), this.enable()
                }
                return c(t, [{
                    key: "applyDelta",
                    value: function(t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? p.default.sources.API : arguments[1],
                            r = !1;
                        this.scroll.update();
                        var o = this.scroll.length();
                        return this.scroll.batch = !0, (t = a(t)).ops.reduce(function(t, n) {
                            var i = n.retain || n.delete || n.insert.length || 1,
                                l = n.attributes || {};
                            if (null != n.insert) {
                                if ("string" == typeof n.insert) {
                                    var a = n.insert;
                                    a.endsWith("\n") && r && (r = !1, a = a.slice(0, -1)), t >= o && !a.endsWith("\n") && (r = !0), e.scroll.insertAt(t, a);
                                    var c = e.scroll.line(t),
                                        f = u(c, 2),
                                        p = f[0],
                                        y = f[1],
                                        v = (0, O.default)({}, (0, b.bubbleFormats)(p));
                                    if (p instanceof g.default) {
                                        var m = p.descendant(d.default.Leaf, y),
                                            _ = u(m, 1)[0];
                                        v = (0, O.default)(v, (0, b.bubbleFormats)(_))
                                    }
                                    l = h.default.attributes.diff(v, l) || {}
                                } else if ("object" === s(n.insert)) {
                                    var w = Object.keys(n.insert)[0];
                                    if (null == w) return t;
                                    e.scroll.insertAt(t, w, n.insert[w])
                                }
                                o += i
                            }
                            return Object.keys(l).forEach(function(n) {
                                e.scroll.formatAt(t, i, n, l[n])
                            }), t + i
                        }, 0), t.ops.reduce(function(t, n) {
                            return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1)
                        }, 0), this.scroll.batch = !1, this.scroll.optimize(), this.update(t, n)
                    }
                }, {
                    key: "deleteText",
                    value: function(t, e) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? p.default.sources.API : arguments[2];
                        return this.scroll.deleteAt(t, e), this.update((new f.default).retain(t).delete(e), n)
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.scroll.domNode.setAttribute("contenteditable", t)
                    }
                }, {
                    key: "formatLine",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                            o = arguments.length <= 3 || void 0 === arguments[3] ? p.default.sources.API : arguments[3];
                        return this.scroll.update(), Object.keys(r).forEach(function(o) {
                            var i = n.scroll.lines(t, Math.max(e, 1)),
                                l = e;
                            i.forEach(function(e, i) {
                                var a = e.length();
                                if (e instanceof y.default) {
                                    var s = t - e.offset(n.scroll),
                                        u = e.newlineIndex(s + l) - s + 1;
                                    e.formatAt(s, u, o, r[o])
                                } else e.format(o, r[o]);
                                l -= a
                            })
                        }), this.scroll.optimize(), this.update((new f.default).retain(t).retain(e, (0, m.default)(r)), o)
                    }
                }, {
                    key: "formatText",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                            o = arguments.length <= 3 || void 0 === arguments[3] ? p.default.sources.API : arguments[3];
                        return Object.keys(r).forEach(function(o) {
                            n.scroll.formatAt(t, e, o, r[o])
                        }), this.update((new f.default).retain(t).retain(e, (0, m.default)(r)), o)
                    }
                }, {
                    key: "getContents",
                    value: function(t, e) {
                        return this.delta.slice(t, t + e)
                    }
                }, {
                    key: "getDelta",
                    value: function() {
                        return this.scroll.lines().reduce(function(t, e) {
                            return t.concat(e.delta())
                        }, new f.default)
                    }
                }, {
                    key: "getFormat",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            n = [],
                            r = [];
                        0 === e ? this.scroll.path(t).forEach(function(t) {
                            var e = u(t, 1)[0];
                            e instanceof g.default ? n.push(e) : e instanceof d.default.Leaf && r.push(e)
                        }) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(d.default.Leaf, t, e));
                        var o = [n, r].map(function(t) {
                            if (0 === t.length) return {};
                            for (var e = (0, b.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                                var n = t.shift();
                                if (null == n) return e;
                                e = l((0, b.bubbleFormats)(n), e)
                            }
                            return e
                        });
                        return O.default.apply(O.default, o)
                    }
                }, {
                    key: "getText",
                    value: function(t, e) {
                        return this.getContents(t, e).ops.map(function(t) {
                            return "string" == typeof t.insert ? t.insert : ""
                        }).join("")
                    }
                }, {
                    key: "insertEmbed",
                    value: function(t, e, n) {
                        var r = arguments.length <= 3 || void 0 === arguments[3] ? p.default.sources.API : arguments[3];
                        return this.scroll.insertAt(t, e, n), this.update((new f.default).retain(t).insert(o({}, e, n)), r)
                    }
                }, {
                    key: "insertText",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                            o = arguments.length <= 3 || void 0 === arguments[3] ? p.default.sources.API : arguments[3];
                        return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach(function(o) {
                            n.scroll.formatAt(t, e.length, o, r[o])
                        }), this.update((new f.default).retain(t).insert(e, (0, m.default)(r)), o)
                    }
                }, {
                    key: "isBlank",
                    value: function() {
                        if (0 == this.scroll.children.length) return !0;
                        if (this.scroll.children.length > 1) return !1;
                        var t = this.scroll.children.head;
                        return t.length() <= 1 && 0 == Object.keys(t.formats()).length
                    }
                }, {
                    key: "removeFormat",
                    value: function(t, e, n) {
                        var r = this.getText(t, e),
                            o = this.scroll.line(t + e),
                            i = u(o, 2),
                            l = i[0],
                            a = i[1],
                            s = 0,
                            c = new f.default;
                        null != l && (s = l instanceof y.default ? l.newlineIndex(a) - a + 1 : l.length() - a, c = l.delta().slice(a, a + s - 1).insert("\n"));
                        var h = this.getContents(t, e + s).diff((new f.default).insert(r).concat(c)),
                            p = (new f.default).retain(t).concat(h);
                        return this.applyDelta(p, n)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? p.default.sources.USER : arguments[1],
                            r = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                            o = this.delta;
                        if (1 === r.length && "characterData" === r[0].type && d.default.find(r[0].target) ? function() {
                                var n = d.default.find(r[0].target),
                                    i = (0, b.bubbleFormats)(n),
                                    l = n.offset(e.scroll),
                                    a = r[0].oldValue.replace(v.default.CONTENTS, ""),
                                    s = (new f.default).insert(a),
                                    u = (new f.default).insert(n.value()),
                                    c = (new f.default).retain(l).concat(s.diff(u));
                                t = c.ops.reduce(function(t, e) {
                                    return e.insert ? t.insert(e.insert, i) : t.push(e)
                                }, new f.default), e.delta = o.compose(t)
                            }() : (this.delta = this.getDelta(), t && (0, _.default)(o.compose(t), this.delta) || (t = o.diff(this.delta))), t.length() > 0) {
                            var i, l = [p.default.events.TEXT_CHANGE, t, o, n];
                            if ((i = this.emitter).emit.apply(i, [p.default.events.EDITOR_CHANGE].concat(l)), n !== p.default.sources.SILENT) {
                                var a;
                                (a = this.emitter).emit.apply(a, l)
                            }
                        }
                        return t
                    }
                }]), t
            }();
        e.default = w
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = r(n(30)),
            c = (0, r(n(31)).default)("quill:events"),
            f = function(t) {
                function e() {
                    o(this, e);
                    var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t.on("error", c.error), t
                }
                return l(e, t), a(e, [{
                    key: "emit",
                    value: function() {
                        c.log.apply(c, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
                    }
                }]), e
            }(u.default);
        f.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
        }, f.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
        }, e.default = f
    }, function(t, e) {
        "use strict";

        function n(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1
        }

        function r() {}
        var o = Object.prototype.hasOwnProperty,
            i = "function" != typeof Object.create && "~";
        r.prototype._events = void 0, r.prototype.eventNames = function() {
            var t, e = this._events,
                n = [];
            if (!e) return n;
            for (t in e) o.call(e, t) && n.push(i ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, r.prototype.listeners = function(t, e) {
            var n = i ? i + t : t,
                r = this._events && this._events[n];
            if (e) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var o = 0, l = r.length, a = new Array(l); o < l; o++) a[o] = r[o].fn;
            return a
        }, r.prototype.emit = function(t, e, n, r, o, l) {
            var a = i ? i + t : t;
            if (!this._events || !this._events[a]) return !1;
            var s, u, c = this._events[a],
                f = arguments.length;
            if ("function" == typeof c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, e), !0;
                    case 3:
                        return c.fn.call(c.context, e, n), !0;
                    case 4:
                        return c.fn.call(c.context, e, n, r), !0;
                    case 5:
                        return c.fn.call(c.context, e, n, r, o), !0;
                    case 6:
                        return c.fn.call(c.context, e, n, r, o, l), !0
                }
                for (u = 1, s = new Array(f - 1); u < f; u++) s[u - 1] = arguments[u];
                c.fn.apply(c.context, s)
            } else {
                var h, p = c.length;
                for (u = 0; u < p; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, e);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, e, n);
                        break;
                    default:
                        if (!s)
                            for (h = 1, s = new Array(f - 1); h < f; h++) s[h - 1] = arguments[h];
                        c[u].fn.apply(c[u].context, s)
                }
            }
            return !0
        }, r.prototype.on = function(t, e, r) {
            var o = new n(e, r || this),
                l = i ? i + t : t;
            return this._events || (this._events = i ? {} : Object.create(null)), this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], o] : this._events[l].push(o) : this._events[l] = o, this
        }, r.prototype.once = function(t, e, r) {
            var o = new n(e, r || this, !0),
                l = i ? i + t : t;
            return this._events || (this._events = i ? {} : Object.create(null)), this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], o] : this._events[l].push(o) : this._events[l] = o, this
        }, r.prototype.removeListener = function(t, e, n, r) {
            var o = i ? i + t : t;
            if (!this._events || !this._events[o]) return this;
            var l = this._events[o],
                a = [];
            if (e)
                if (l.fn)(l.fn !== e || r && !l.once || n && l.context !== n) && a.push(l);
                else
                    for (var s = 0, u = l.length; s < u; s++)(l[s].fn !== e || r && !l[s].once || n && l[s].context !== n) && a.push(l[s]);
            return a.length ? this._events[o] = 1 === a.length ? a[0] : a : delete this._events[o], this
        }, r.prototype.removeAllListeners = function(t) {
            return this._events ? (t ? delete this._events[i ? i + t : t] : this._events = i ? {} : Object.create(null), this) : this
        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prototype.setMaxListeners = function() {
            return this
        }, r.prefixed = i, void 0 !== t && (t.exports = r)
    }, function(t, e) {
        "use strict";

        function n(t) {
            if (o.indexOf(t) <= o.indexOf(i)) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                console[t].apply(console, n)
            }
        }

        function r(t) {
            return o.reduce(function(e, r) {
                return e[r] = n.bind(console, r, t), e
            }, {})
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = ["error", "warn", "log", "info"],
            i = "warn";
        n.level = r.level = function(t) {
            i = t
        }, e.default = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.Code = void 0;
        var a = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            c = r(n(21)),
            f = r(n(3)),
            h = r(n(33)),
            p = r(n(36)),
            d = r(n(37)),
            y = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), e
            }(p.default);
        y.blotName = "code", y.tagName = "CODE";
        var v = function(t) {
            function e() {
                return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return l(e, t), s(e, [{
                key: "delta",
                value: function() {
                    var t = this,
                        e = this.domNode.textContent;
                    return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function(e, n) {
                        return e.insert(n).insert("\n", t.formats())
                    }, new c.default)
                }
            }, {
                key: "format",
                value: function(t, n) {
                    if (t !== this.statics.blotName || !n) {
                        var r = this.descendant(d.default, this.length() - 1),
                            o = a(r, 1)[0];
                        null != o && o.deleteAt(o.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }
            }, {
                key: "formatAt",
                value: function(t, n, r, o) {
                    if (0 !== n && null != f.default.query(r, f.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                        var i = this.newlineIndex(t);
                        if (!(i < 0 || i >= t + n)) {
                            var l = this.newlineIndex(t, !0) + 1,
                                a = i - l + 1,
                                s = this.isolate(l, a),
                                u = s.next;
                            s.format(r, o), u instanceof e && u.formatAt(0, t - l + n - a, r, o)
                        }
                    }
                }
            }, {
                key: "insertAt",
                value: function(t, e, n) {
                    if (null == n) {
                        var r = this.descendant(d.default, t),
                            o = a(r, 2),
                            i = o[0],
                            l = o[1];
                        i.insertAt(l, e)
                    }
                }
            }, {
                key: "length",
                value: function() {
                    var t = this.domNode.textContent.length;
                    return this.domNode.textContent.endsWith("\n") ? t : t + 1
                }
            }, {
                key: "newlineIndex",
                value: function(t) {
                    if (!(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
                    var e = this.domNode.textContent.slice(t).indexOf("\n");
                    return e > -1 ? t + e : -1
                }
            }, {
                key: "optimize",
                value: function() {
                    this.domNode.textContent.endsWith("\n") || this.appendChild(f.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this);
                    var t = this.next;
                    null != t && t.prev === this && t.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === t.statics.formats(t.domNode) && (t.optimize(), t.moveChildren(this), t.remove())
                }
            }, {
                key: "replace",
                value: function(t) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t) {
                        var e = f.default.find(t);
                        null == e ? t.parentNode.removeChild(t) : e instanceof f.default.Embed ? e.remove() : e.unwrap()
                    })
                }
            }], [{
                key: "create",
                value: function(t) {
                    var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                    return n.setAttribute("spellcheck", !1), n
                }
            }, {
                key: "formats",
                value: function(t) {
                    return !0
                }
            }]), e
        }(h.default);
        v.blotName = "code-block", v.tagName = "PRE", v.TAB = "  ", e.Code = y, e.default = v
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return null == t ? e : ("function" == typeof t.formats && (e = (0, c.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            c = r(n(26)),
            f = r(n(21)),
            h = r(n(3)),
            p = r(n(34)),
            d = r(n(35)),
            y = r(n(36)),
            v = r(n(37)),
            b = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), s(e, [{
                    key: "attach",
                    value: function() {
                        u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new h.default.Attributor.Store(this.domNode)
                    }
                }, {
                    key: "delta",
                    value: function() {
                        return (new f.default).insert(this.value(), (0, c.default)(this.formats(), this.attributes.values()))
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        var n = h.default.query(t, h.default.Scope.BLOCK_ATTRIBUTE);
                        null != n && this.attributes.attribute(n, e)
                    }
                }, {
                    key: "formatAt",
                    value: function(t, e, n, r) {
                        this.format(n, r)
                    }
                }, {
                    key: "insertAt",
                    value: function(t, n, r) {
                        if ("string" == typeof n && n.endsWith("\n")) {
                            var o = h.default.create(g.blotName);
                            this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1))
                        } else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r)
                    }
                }]), e
            }(d.default);
        b.scope = h.default.Scope.BLOCK_BLOT;
        var g = function(t) {
            function e(t) {
                o(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.cache = {}, n
            }
            return l(e, t), s(e, [{
                key: "delta",
                value: function() {
                    return null == this.cache.delta && (this.cache.delta = this.descendants(h.default.Leaf).reduce(function(t, e) {
                        return 0 === e.length() ? t : t.insert(e.value(), a(e))
                    }, new f.default).insert("\n", a(this))), this.cache.delta
                }
            }, {
                key: "deleteAt",
                value: function(t, n) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {}
                }
            }, {
                key: "formatAt",
                value: function(t, n, r, o) {
                    n <= 0 || (h.default.query(r, h.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {})
                }
            }, {
                key: "insertAt",
                value: function(t, n, r) {
                    if (null != r) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                    if (0 !== n.length) {
                        var o = n.split("\n"),
                            i = o.shift();
                        i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                        var l = this;
                        o.reduce(function(t, e) {
                            return (l = l.split(t, !0)).insertAt(0, e), e.length
                        }, t + i.length)
                    }
                }
            }, {
                key: "insertBefore",
                value: function(t, n) {
                    var r = this.children.head;
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof p.default && r.remove(), this.cache = {}
                }
            }, {
                key: "length",
                value: function() {
                    return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length
                }
            }, {
                key: "moveChildren",
                value: function(t, n) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {}
                }
            }, {
                key: "optimize",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this), this.cache = {}
                }
            }, {
                key: "path",
                value: function(t) {
                    return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
                }
            }, {
                key: "removeChild",
                value: function(t) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {}
                }
            }, {
                key: "split",
                value: function(t) {
                    var n = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                    if (n && (0 === t || t >= this.length() - 1)) {
                        var r = this.clone();
                        return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
                    }
                    var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
                    return this.cache = {}, o
                }
            }]), e
        }(h.default.Block);
        g.blotName = "block", g.tagName = "P", g.defaultChild = "break", g.allowedChildren = [y.default, d.default, v.default], e.bubbleFormats = a, e.BlockEmbed = b, e.default = g
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, [{
                    key: "insertInto",
                    value: function(t, n) {
                        0 === t.children.length && a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n)
                    }
                }, {
                    key: "length",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "value",
                    value: function() {
                        return ""
                    }
                }], [{
                    key: "value",
                    value: function(t) {}
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(35)).default);
        s.blotName = "break", s.tagName = "BR", e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(3)).default.Embed);
        e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = (r(n(26)), r(n(35))),
            c = r(n(37)),
            f = r(n(3)),
            h = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), a(e, [{
                    key: "formatAt",
                    value: function(t, n, r, o) {
                        if (e.compare(this.statics.blotName, r) < 0 && f.default.query(r, f.default.Scope.BLOT)) {
                            var i = this.isolate(t, n);
                            o && i.wrap(r, o)
                        } else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o)
                    }
                }], [{
                    key: "compare",
                    value: function(t, n) {
                        var r = e.order.indexOf(t),
                            o = e.order.indexOf(n);
                        return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
                    }
                }]), e
            }(f.default.Inline);
        h.allowedChildren = [h, u.default, c.default], h.order = ["cursor", "inline", "code", "underline", "strike", "italic", "bold", "script", "link"], e.default = h
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(3)).default.Text);
        e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            c = r(n(3)),
            f = r(n(35)),
            h = r(n(29)),
            p = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r
                }
                return l(e, t), u(e, null, [{
                    key: "value",
                    value: function(t) {}
                }]), u(e, [{
                    key: "detach",
                    value: function() {
                        null != this.parent && this.parent.removeChild(this)
                    }
                }, {
                    key: "format",
                    value: function(t, n) {
                        if (0 !== this._length) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                        for (var r = this, o = 0; null != r && r.statics.scope !== c.default.Scope.BLOCK_BLOT;) o += r.offset(r.parent), r = r.parent;
                        null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t, n), this._length = 0)
                    }
                }, {
                    key: "index",
                    value: function(t, n) {
                        return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                    }
                }, {
                    key: "length",
                    value: function() {
                        return this._length
                    }
                }, {
                    key: "position",
                    value: function(t) {
                        return [this.textNode, this.textNode.data.length]
                    }
                }, {
                    key: "remove",
                    value: function() {
                        s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null
                    }
                }, {
                    key: "restore",
                    value: function() {
                        var t = this;
                        if (!this.selection.composing && null != this.parent) {
                            for (var n = this.textNode, r = this.selection.getNativeRange(); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                            this.textNode.data !== e.CONTENTS && (this.textNode.data = this.textNode.data.split(e.CONTENTS).join(""), this.parent.insertBefore(c.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode)), this.remove(), null != r && r.start.node === n && r.end.node === n && this.selection.emitter.once(h.default.events.SCROLL_OPTIMIZE, function() {
                                var e = [r.start.offset, r.end.offset].map(function(t) {
                                        return Math.max(0, Math.min(n.data.length, t - 1))
                                    }),
                                    o = a(e, 2),
                                    i = o[0],
                                    l = o[1];
                                t.selection.setNativeRange(n, i, n, l)
                            })
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this;
                        t.forEach(function(t) {
                            "characterData" === t.type && t.target === e.textNode && e.restore()
                        })
                    }
                }, {
                    key: "value",
                    value: function() {
                        return ""
                    }
                }]), e
            }(f.default);
        p.blotName = "cursor", p.className = "ql-cursor", p.tagName = "span", p.CONTENTS = "\ufeff", e.default = p
    }, function(t, e) {
        var n = function() {
            "use strict";

            function t(e, r, o, i) {
                function l(e, o) {
                    if (null === e) return null;
                    if (0 == o) return e;
                    var c, f;
                    if ("object" != typeof e) return e;
                    if (t.__isArray(e)) c = [];
                    else if (t.__isRegExp(e)) c = new RegExp(e.source, n(e)), e.lastIndex && (c.lastIndex = e.lastIndex);
                    else if (t.__isDate(e)) c = new Date(e.getTime());
                    else {
                        if (u && Buffer.isBuffer(e)) return c = new Buffer(e.length), e.copy(c), c;
                        void 0 === i ? (f = Object.getPrototypeOf(e), c = Object.create(f)) : (c = Object.create(i), f = i)
                    }
                    if (r) {
                        var h = a.indexOf(e);
                        if (-1 != h) return s[h];
                        a.push(e), s.push(c)
                    }
                    for (var p in e) {
                        var d;
                        f && (d = Object.getOwnPropertyDescriptor(f, p)), d && null == d.set || (c[p] = l(e[p], o - 1))
                    }
                    return c
                }
                "object" == typeof r && (o = r.depth, i = r.prototype, r.filter, r = r.circular);
                var a = [],
                    s = [],
                    u = "undefined" != typeof Buffer;
                return void 0 === r && (r = !0), void 0 === o && (o = 1 / 0), l(e, o)
            }

            function e(t) {
                return Object.prototype.toString.call(t)
            }

            function n(t) {
                var e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
            }
            return t.clonePrototype = function(t) {
                if (null === t) return null;
                var e = function() {};
                return e.prototype = t, new e
            }, t.__objToStr = e, t.__isDate = function(t) {
                return "object" == typeof t && "[object Date]" === e(t)
            }, t.__isArray = function(t) {
                return "object" == typeof t && "[object Array]" === e(t)
            }, t.__isRegExp = function(t) {
                return "object" == typeof t && "[object RegExp]" === e(t)
            }, t.__getRegExpFlags = n, t
        }();
        "object" == typeof t && t.exports && (t.exports = n)
    }, function(t, e) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function t(e) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            n(this, t), this.quill = e, this.options = r
        };
        r.DEFAULTS = {}, e.default = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            try {
                e.parentNode
            } catch (t) {
                return !1
            }
            return e instanceof Text && (e = e.parentNode), t.contains(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.Range = void 0;
        var a = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = r(n(3)),
            c = r(n(39)),
            f = r(n(23)),
            h = (r(n(34)), r(n(29))),
            p = (0, r(n(31)).default)("quill:selection"),
            d = function t(e) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                i(this, t), this.index = e, this.length = n
            },
            y = function() {
                function t(e, n) {
                    var r = this;
                    i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.root = this.scroll.domNode, this.root.addEventListener("compositionstart", function() {
                        r.composing = !0
                    }), this.root.addEventListener("compositionend", function() {
                        r.composing = !1
                    }), this.cursor = u.default.create("cursor", this), this.lastRange = this.savedRange = new d(0, 0), ["keyup", "mouseup", "mouseleave", "touchend", "touchleave", "focus", "blur"].forEach(function(t) {
                        r.root.addEventListener(t, function() {
                            setTimeout(r.update.bind(r, h.default.sources.USER), 100)
                        })
                    }), this.emitter.on(h.default.events.EDITOR_CHANGE, function(t, e) {
                        t === h.default.events.TEXT_CHANGE && e.length() > 0 && r.update(h.default.sources.SILENT)
                    }), this.emitter.on(h.default.events.SCROLL_BEFORE_UPDATE, function() {
                        var t = r.getNativeRange();
                        null != t && t.start.node !== r.cursor.textNode && r.emitter.once(h.default.events.SCROLL_UPDATE, function() {
                            try {
                                r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
                            } catch (t) {}
                        })
                    }), this.update(h.default.sources.SILENT)
                }
                return s(t, [{
                    key: "focus",
                    value: function() {
                        if (!this.hasFocus()) {
                            var t = document.body.scrollTop;
                            this.root.focus(), document.body.scrollTop = t, this.setRange(this.savedRange)
                        }
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        this.scroll.update();
                        var n = this.getNativeRange();
                        if (null != n && n.native.collapsed && !u.default.query(t, u.default.Scope.BLOCK)) {
                            if (n.start.node !== this.cursor.textNode) {
                                var r = u.default.find(n.start.node, !1);
                                if (null == r) return;
                                if (r instanceof u.default.Leaf) {
                                    var o = r.split(n.start.offset);
                                    r.parent.insertBefore(this.cursor, o)
                                } else r.insertBefore(this.cursor, n.start.node);
                                this.cursor.attach()
                            }
                            this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                        }
                    }
                }, {
                    key: "getBounds",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            n = this.scroll.length();
                        t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
                        var r = void 0,
                            o = void 0,
                            i = this.scroll.leaf(t),
                            l = a(i, 2),
                            s = l[0],
                            u = l[1];
                        if (null == s) return null;
                        var c = s.position(u, !0),
                            f = a(c, 2);
                        o = f[0], u = f[1];
                        var h = document.createRange();
                        if (e > 0) {
                            h.setStart(o, u);
                            var p = this.scroll.leaf(t + e),
                                d = a(p, 2);
                            if (s = d[0], u = d[1], null == s) return null;
                            var y = s.position(u, !0),
                                v = a(y, 2);
                            o = v[0], u = v[1], h.setEnd(o, u), r = h.getBoundingClientRect()
                        } else {
                            var b = "left";
                            if (o instanceof Text) {
                                u < o.data.length ? (h.setStart(o, u), h.setEnd(o, u + 1)) : (h.setStart(o, u - 1), h.setEnd(o, u), b = "right");
                                g = h.getBoundingClientRect()
                            } else {
                                var g = s.domNode.getBoundingClientRect();
                                u > 0 && (b = "right")
                            }
                            r = {
                                height: g.height,
                                left: g[b],
                                width: 0,
                                top: g.top
                            }
                        }
                        var m = this.root.parentNode.getBoundingClientRect();
                        return {
                            left: r.left - m.left,
                            right: r.left + r.width - m.left,
                            top: r.top - m.top,
                            bottom: r.top + r.height - m.top,
                            height: r.height,
                            width: r.width
                        }
                    }
                }, {
                    key: "getNativeRange",
                    value: function() {
                        var t = document.getSelection();
                        if (null == t || t.rangeCount <= 0) return null;
                        var e = t.getRangeAt(0);
                        if (null == e) return null;
                        if (!l(this.root, e.startContainer) || !e.collapsed && !l(this.root, e.endContainer)) return null;
                        var n = {
                            start: {
                                node: e.startContainer,
                                offset: e.startOffset
                            },
                            end: {
                                node: e.endContainer,
                                offset: e.endOffset
                            },
                            native: e
                        };
                        return [n.start, n.end].forEach(function(t) {
                            for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                else {
                                    if (e.childNodes.length !== n) break;
                                    n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length + 1
                                }
                            t.node = e, t.offset = n
                        }), p.info("getNativeRange", n), n
                    }
                }, {
                    key: "getRange",
                    value: function() {
                        var t = this;
                        if (!this.hasFocus()) return [null, null];
                        var e = this.getNativeRange();
                        if (null == e) return [null, null];
                        var n = [
                            [e.start.node, e.start.offset]
                        ];
                        e.native.collapsed || n.push([e.end.node, e.end.offset]);
                        var r = n.map(function(e) {
                                var n = a(e, 2),
                                    r = n[0],
                                    o = n[1],
                                    i = u.default.find(r, !0),
                                    l = i.offset(t.scroll);
                                return 0 === o ? l : i instanceof u.default.Container ? l + i.length() : l + i.index(r, o)
                            }),
                            i = Math.min.apply(Math, o(r)),
                            l = Math.max.apply(Math, o(r));
                        return [new d(i, l - i), e]
                    }
                }, {
                    key: "hasFocus",
                    value: function() {
                        return document.activeElement === this.root
                    }
                }, {
                    key: "scrollIntoView",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? this.lastRange : arguments[0];
                        if (null != t) {
                            var e = this.getBounds(t.index, t.length);
                            if (null != e)
                                if (this.root.offsetHeight < e.bottom) {
                                    var n = this.scroll.line(Math.min(t.index + t.length, this.scroll.length() - 1)),
                                        r = a(n, 1)[0];
                                    this.root.scrollTop = r.domNode.offsetTop + r.domNode.offsetHeight - this.root.offsetHeight
                                } else if (e.top < 0) {
                                var o = this.scroll.line(Math.min(t.index, this.scroll.length() - 1)),
                                    i = a(o, 1)[0];
                                this.root.scrollTop = i.domNode.offsetTop
                            }
                        }
                    }
                }, {
                    key: "setNativeRange",
                    value: function(t, e) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? t : arguments[2],
                            r = arguments.length <= 3 || void 0 === arguments[3] ? e : arguments[3],
                            o = !(arguments.length <= 4 || void 0 === arguments[4]) && arguments[4];
                        if (p.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                            var i = document.getSelection();
                            if (null != i)
                                if (null != t) {
                                    this.hasFocus() || this.root.focus();
                                    var l = this.getNativeRange();
                                    if (null == l || o || t !== l.start.node || e !== l.start.offset || n !== l.end.node || r !== l.end.offset) {
                                        var a = document.createRange();
                                        a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a)
                                    }
                                } else i.removeAllRanges(), this.root.blur(), document.body.focus()
                        }
                    }
                }, {
                    key: "setRange",
                    value: function(t) {
                        var e = this,
                            n = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                            r = arguments.length <= 2 || void 0 === arguments[2] ? h.default.sources.API : arguments[2];
                        "string" == typeof n && (r = n, n = !1), p.info("setRange", t), null != t ? function() {
                            var r = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                i = [],
                                l = e.scroll.length();
                            r.forEach(function(t, n) {
                                t = Math.min(l - 1, t);
                                var r = void 0,
                                    o = e.scroll.leaf(t),
                                    s = a(o, 2),
                                    u = s[0],
                                    c = s[1],
                                    f = u.position(c, 0 !== n),
                                    h = a(f, 2);
                                r = h[0], c = h[1], i.push(r, c)
                            }), i.length < 2 && (i = i.concat(i)), e.setNativeRange.apply(e, o(i).concat([n]))
                        }() : this.setNativeRange(null), this.update(r)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? h.default.sources.USER : arguments[0],
                            e = void 0,
                            n = this.lastRange,
                            r = this.getRange(),
                            o = a(r, 2);
                        if (this.lastRange = o[0], e = o[1], null != this.lastRange && (this.savedRange = this.lastRange), !(0, f.default)(n, this.lastRange)) {
                            var i;
                            !this.composing && null != e && e.native.collapsed && e.start.node !== this.cursor.textNode && this.cursor.restore();
                            var l = [h.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(n), t];
                            if ((i = this.emitter).emit.apply(i, [h.default.events.EDITOR_CHANGE].concat(l)), t !== h.default.sources.SILENT) {
                                var s;
                                (s = this.emitter).emit.apply(s, l)
                            }
                        }
                    }
                }]), t
            }();
        e.Range = d, e.default = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = (r(n(26)), r(n(29)), function() {
                function t(e, n) {
                    o(this, t), this.quill = e, this.options = n, this.modules = {}
                }
                return i(t, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        Object.keys(this.options.modules).forEach(function(e) {
                            null == t.modules[e] && t.addModule(e)
                        })
                    }
                }, {
                    key: "addModule",
                    value: function(t) {
                        var e = this.quill.constructor.import("modules/" + t);
                        return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                    }
                }]), t
            }());
        l.DEFAULTS = {
            modules: {}
        }, l.themes = {
            default: l
        }, e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(n(3)),
            s = n(33),
            u = r(s),
            c = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), e
            }(a.default.Container);
        c.allowedChildren = [u.default, s.BlockEmbed, c], e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a(t) {
            return t instanceof d.default || t instanceof p.BlockEmbed
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            c = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            f = r(n(3)),
            h = r(n(29)),
            p = n(33),
            d = r(p),
            y = r(n(34)),
            v = r(n(43)),
            b = r(n(32)),
            g = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function(t, e) {
                        return t[e] = !0, t
                    }, {})), r.optimize(), r
                }
                return l(e, t), u(e, [{
                    key: "deleteAt",
                    value: function(t, n) {
                        var r = this.line(t),
                            o = s(r, 2),
                            i = o[0],
                            l = o[1],
                            a = this.line(t + n),
                            u = s(a, 1)[0];
                        if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != u && i !== u && l > 0 && !(i instanceof p.BlockEmbed) && !(u instanceof p.BlockEmbed)) {
                            u instanceof b.default && u.deleteAt(u.length() - 1, 1);
                            var f = u.children.head instanceof y.default ? null : u.children.head;
                            i.moveChildren(u, f), i.remove()
                        }
                        this.optimize()
                    }
                }, {
                    key: "formatAt",
                    value: function(t, n, r, o) {
                        (null == this.whitelist || this.whitelist[r]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize())
                    }
                }, {
                    key: "insertAt",
                    value: function(t, n, r) {
                        if (null == r || null == this.whitelist || this.whitelist[n]) {
                            if (t >= this.length())
                                if (null == r || null == f.default.query(n, f.default.Scope.BLOCK)) {
                                    var o = f.default.create(this.statics.defaultChild);
                                    this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r)
                                } else {
                                    var i = f.default.create(n, r);
                                    this.appendChild(i)
                                }
                            else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                            this.optimize()
                        }
                    }
                }, {
                    key: "insertBefore",
                    value: function(t, n) {
                        if (t.statics.scope === f.default.Scope.INLINE_BLOT) {
                            var r = f.default.create(this.statics.defaultChild);
                            r.appendChild(t), t = r
                        }
                        c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
                    }
                }, {
                    key: "leaf",
                    value: function(t) {
                        return this.path(t).pop() || [null, -1]
                    }
                }, {
                    key: "line",
                    value: function(t) {
                        return this.descendant(a, t)
                    }
                }, {
                    key: "lines",
                    value: function() {
                        return function t(e, n, r) {
                            var o = [],
                                i = r;
                            return e.children.forEachAt(n, r, function(e, n, r) {
                                a(e) ? o.push(e) : e instanceof f.default.Container && (o = o.concat(t(e, n, i))), i -= r
                            }), o
                        }(this, arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], arguments.length <= 1 || void 0 === arguments[1] ? Number.MAX_VALUE : arguments[1])
                    }
                }, {
                    key: "optimize",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        !0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_OPTIMIZE, t))
                    }
                }, {
                    key: "path",
                    value: function(t) {
                        return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        if (!0 !== this.batch) {
                            var n = h.default.sources.USER;
                            "string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_BEFORE_UPDATE, n, t), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(h.default.events.SCROLL_UPDATE, n, t)
                        }
                    }
                }]), e
            }(f.default.Scroll);
        g.blotName = "scroll", g.className = "ql-editor", g.tagName = "DIV", g.defaultChild = "block", g.allowedChildren = [d.default, p.BlockEmbed, v.default], e.default = g
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        function l(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function u(t) {
            if (t.nodeType !== Node.ELEMENT_NODE) return {};
            return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
        }

        function c(t, e) {
            for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                var o = t.ops[r];
                if ("string" != typeof o.insert) break;
                n = o.insert + n
            }
            return n.slice(-1 * e.length) === e
        }

        function f(t) {
            if (0 === t.childNodes.length) return !1;
            var e = u(t);
            return ["block", "list-item"].indexOf(e.display) > -1
        }

        function h(t, e, n) {
            return n.compose((new _.default).retain(n.length(), o({}, t, !0)))
        }

        function p(t, e) {
            var n = O.default.Attributor.Attribute.keys(t),
                r = O.default.Attributor.Class.keys(t),
                o = O.default.Attributor.Style.keys(t),
                i = {};
            return n.concat(r).concat(o).forEach(function(e) {
                var n = O.default.query(e, O.default.Scope.ATTRIBUTE);
                null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || null != L[e] && (n = L[e], i[n.attrName] = n.value(t))
            }), Object.keys(i).length > 0 && (e = e.compose((new _.default).retain(e.length(), i))), e
        }

        function d(t, e) {
            var n = O.default.query(t);
            if (null == n) return e;
            if (n.prototype instanceof O.default.Embed) {
                var r = {},
                    i = n.value(t);
                null != i && (r[n.blotName] = i, e = (new _.default).insert(r, n.formats(t)))
            } else if ("function" == typeof n.formats) {
                var l = o({}, n.blotName, n.formats(t));
                e = e.compose((new _.default).retain(e.length(), l))
            }
            return e
        }

        function y(t, e) {
            return f(t) && !c(e, "\n") && e.insert("\n"), e
        }

        function v(t, e) {
            if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
                var n = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);
                t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
            }
            return e
        }

        function b(t, e) {
            var n = t.data;
            if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
            if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
                var r = function(t, e) {
                    return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e
                };
                n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
            }
            return e.insert(n)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
        var g = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            m = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            _ = r(n(21)),
            O = r(n(3)),
            w = r(n(19)),
            x = r(n(31)),
            k = r(n(40)),
            E = n(46),
            j = n(47),
            A = n(48),
            N = n(49),
            q = n(50),
            T = n(51),
            S = (0, x.default)("quill:clipboard"),
            P = [
                [Node.TEXT_NODE, b],
                ["br", function(t, e) {
                    return c(e, "\n") || e.insert("\n"), e
                }],
                [Node.ELEMENT_NODE, y],
                [Node.ELEMENT_NODE, d],
                [Node.ELEMENT_NODE, v],
                [Node.ELEMENT_NODE, p],
                [Node.ELEMENT_NODE, function(t, e) {
                    var n = {},
                        r = t.style || {};
                    return r.fontWeight && "bold" === u(t).fontWeight && (n.bold = !0), Object.keys(n).length > 0 && (e = e.compose((new _.default).retain(e.length(), n))), parseFloat(r.textIndent || 0) > 0 && (e = (new _.default).insert("\t").concat(e)), e
                }],
                ["b", h.bind(h, "bold")],
                ["i", h.bind(h, "italic")],
                ["style", function(t, e) {
                    return new _.default
                }]
            ],
            L = [E.AlignStyle, j.BackgroundStyle, A.ColorStyle, N.DirectionStyle, q.FontStyle, T.SizeStyle].reduce(function(t, e) {
                return t[e.keyName] = e, t
            }, {}),
            C = function(t) {
                function e(t, n) {
                    l(this, e);
                    var r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], P.concat(r.options.matchers).forEach(function(t) {
                        r.addMatcher.apply(r, i(t))
                    }), r
                }
                return s(e, t), m(e, [{
                    key: "addMatcher",
                    value: function(t, e) {
                        this.matchers.push([t, e])
                    }
                }, {
                    key: "convert",
                    value: function(t) {
                        var e = this,
                            n = "__ql-matcher";
                        "string" == typeof t && (this.container.innerHTML = t);
                        var r = [],
                            o = [];
                        this.matchers.forEach(function(t) {
                            var i = g(t, 2),
                                l = i[0],
                                a = i[1];
                            switch (l) {
                                case Node.TEXT_NODE:
                                    r.push(a);
                                    break;
                                case Node.ELEMENT_NODE:
                                    o.push(a);
                                    break;
                                default:
                                    [].forEach.call(e.container.querySelectorAll(l), function(t) {
                                        t[n] = t[n] || [], t[n].push(a)
                                    })
                            }
                        });
                        var i = function t(e) {
                            return e.nodeType === e.TEXT_NODE ? r.reduce(function(t, n) {
                                return n(e, t)
                            }, new _.default) : e.nodeType === e.ELEMENT_NODE ? [].reduce.call(e.childNodes || [], function(r, i) {
                                var l = t(i);
                                return i.nodeType === e.ELEMENT_NODE && (l = o.reduce(function(t, e) {
                                    return e(i, t)
                                }, l), l = (i[n] || []).reduce(function(t, e) {
                                    return e(i, t)
                                }, l)), r.concat(l)
                            }, new _.default) : new _.default
                        }(this.container);
                        return c(i, "\n") && null == i.ops[i.ops.length - 1].attributes && (i = i.compose((new _.default).retain(i.length() - 1).delete(1))), S.log("convert", this.container.innerHTML, i), this.container.innerHTML = "", i
                    }
                }, {
                    key: "onPaste",
                    value: function(t) {
                        var e = this;
                        if (!t.defaultPrevented) {
                            var n = this.quill.getSelection(),
                                r = (new _.default).retain(n.index).delete(n.length),
                                o = document.body.scrollTop;
                            this.container.focus(), setTimeout(function() {
                                r = r.concat(e.convert()), e.quill.updateContents(r, w.default.sources.USER), e.quill.setSelection(r.length() - n.length, w.default.sources.SILENT), document.body.scrollTop = o, e.quill.selection.scrollIntoView()
                            }, 1)
                        }
                    }
                }]), e
            }(k.default);
        C.DEFAULTS = {
            matchers: []
        }, e.default = C, e.matchAttributor = p, e.matchBlot = d, e.matchNewline = y, e.matchSpacing = v, e.matchText = b
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AlignStyle = e.AlignClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            o = {
                scope: r.default.Scope.BLOCK,
                whitelist: ["right", "center", "justify"]
            },
            i = new r.default.Attributor.Class("align", "ql-align", o),
            l = new r.default.Attributor.Style("align", "text-align", o);
        e.AlignClass = i, e.AlignStyle = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BackgroundStyle = e.BackgroundClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            o = n(48),
            i = new r.default.Attributor.Class("background", "ql-bg", {
                scope: r.default.Scope.INLINE
            }),
            l = new o.ColorAttributor("background", "background-color", {
                scope: r.default.Scope.INLINE
            });
        e.BackgroundClass = i, e.BackgroundStyle = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            u = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, [{
                    key: "value",
                    value: function(t) {
                        var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
                        return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(t) {
                            return ("00" + parseInt(t).toString(16)).slice(-2)
                        }).join("")) : n
                    }
                }]), e
            }(s.default.Attributor.Style),
            c = new s.default.Attributor.Class("color", "ql-color", {
                scope: s.default.Scope.INLINE
            }),
            f = new u("color", "color", {
                scope: s.default.Scope.INLINE
            });
        e.ColorAttributor = u, e.ColorClass = c, e.ColorStyle = f
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DirectionStyle = e.DirectionClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            o = {
                scope: r.default.Scope.BLOCK,
                whitelist: ["rtl"]
            },
            i = new r.default.Attributor.Class("direction", "ql-direction", o),
            l = new r.default.Attributor.Style("direction", "direction", o);
        e.DirectionClass = i, e.DirectionStyle = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.FontClass = e.FontStyle = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            o = {
                scope: r.default.Scope.INLINE,
                whitelist: ["serif", "monospace"]
            },
            i = new r.default.Attributor.Class("font", "ql-font", o),
            l = new r.default.Attributor.Style("font", "font-family", o);
        e.FontStyle = l, e.FontClass = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SizeStyle = e.SizeClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            o = new r.default.Attributor.Class("size", "ql-size", {
                scope: r.default.Scope.INLINE,
                whitelist: ["small", "large", "huge"]
            }),
            i = new r.default.Attributor.Style("size", "font-size", {
                scope: r.default.Scope.INLINE,
                whitelist: ["10px", "18px", "32px"]
            });
        e.SizeClass = o, e.SizeStyle = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a(t) {
            var e = t.ops[t.ops.length - 1];
            return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function(t) {
                return null != c.default.query(t, c.default.Scope.BLOCK)
            }))
        }

        function s(t) {
            var e = t.ops.reduce(function(t, e) {
                    return t += e.delete || 0
                }, 0),
                n = t.length() - e;
            return a(t) && (n -= 1), n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getLastChangeIndex = e.default = void 0;
        var u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            c = r(n(3)),
            f = r(n(19)),
            h = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(f.default.events.EDITOR_CHANGE, function(t, e, n, o) {
                        t !== f.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== f.default.sources.USER ? r.transform(e) : r.record(e, n))
                    }), r.quill.keyboard.addBinding({
                        key: "Z",
                        shortKey: !0
                    }, r.undo.bind(r)), r.quill.keyboard.addBinding({
                        key: "Z",
                        shortKey: !0,
                        shiftKey: !0
                    }, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
                        key: "Y",
                        shortKey: !0
                    }, r.redo.bind(r)), r
                }
                return l(e, t), u(e, [{
                    key: "change",
                    value: function(t, e) {
                        if (0 !== this.stack[t].length) {
                            var n = this.stack[t].pop();
                            this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], f.default.sources.USER), this.ignoreChange = !1;
                            var r = s(n[t]);
                            this.quill.setSelection(r), this.quill.selection.scrollIntoView(), this.stack[e].push(n)
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.stack = {
                            undo: [],
                            redo: []
                        }
                    }
                }, {
                    key: "record",
                    value: function(t, e) {
                        if (0 !== t.ops.length) {
                            this.stack.redo = [];
                            var n = this.quill.getContents().diff(e),
                                r = Date.now();
                            if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                var o = this.stack.undo.pop();
                                n = n.compose(o.undo), t = o.redo.compose(t)
                            } else this.lastRecorded = r;
                            this.stack.undo.push({
                                redo: t,
                                undo: n
                            }), this.stack.undo.length > this.options.maxStack && this.stack.undo.unshift()
                        }
                    }
                }, {
                    key: "redo",
                    value: function() {
                        this.change("redo", "undo")
                    }
                }, {
                    key: "transform",
                    value: function(t) {
                        this.stack.undo.forEach(function(e) {
                            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                        }), this.stack.redo.forEach(function(e) {
                            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                        })
                    }
                }, {
                    key: "undo",
                    value: function() {
                        this.change("undo", "redo")
                    }
                }]), e
            }(r(n(40)).default);
        h.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
        }, e.default = h, e.getLastChangeIndex = s
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a(t) {
            this.quill.deleteText(t, m.default.sources.USER), this.quill.setSelection(t.index, m.default.sources.SILENT), this.quill.selection.scrollIntoView()
        }

        function s(t, e) {
            var n = this;
            t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
            var r = Object.keys(e.format).reduce(function(t, n) {
                return g.default.query(n, g.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t
            }, {});
            this.quill.insertText(t.index, "\n", r, m.default.sources.USER), this.quill.selection.scrollIntoView(), Object.keys(e.format).forEach(function(t) {
                null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], m.default.sources.USER))
            })
        }

        function u(t) {
            return {
                key: k.keys.TAB,
                shiftKey: !t,
                format: {
                    "code-block": !0
                },
                handler: function(e) {
                    var n = g.default.query("code-block"),
                        r = e.index,
                        o = e.length,
                        i = this.quill.scroll.descendant(n, r),
                        l = p(i, 2),
                        a = l[0],
                        s = l[1];
                    if (null != a) {
                        var u = this.quill.scroll.offset(a),
                            c = a.newlineIndex(s, !0) + 1,
                            f = a.newlineIndex(u + s + o),
                            h = a.domNode.textContent.slice(c, f).split("\n");
                        s = 0, h.forEach(function(e, i) {
                            t ? (a.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) : e.startsWith(n.TAB) && (a.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB.length : o -= n.TAB.length), s += e.length + 1
                        }), this.quill.update(m.default.sources.USER), this.quill.setSelection(r, o, m.default.sources.SILENT)
                    }
                }
            }
        }

        function c(t) {
            return {
                key: t[0].toUpperCase(),
                shortKey: !0,
                handler: function(e, n) {
                    this.quill.format(t, !n.format[t], m.default.sources.USER)
                }
            }
        }

        function f(t) {
            if ("string" == typeof t || "number" == typeof t) return f({
                key: t
            });
            if ("object" === (void 0 === t ? "undefined" : h(t)) && (t = (0, y.default)(t, !1)), "string" == typeof t.key)
                if (null != k.keys[t.key.toUpperCase()]) t.key = k.keys[t.key.toUpperCase()];
                else {
                    if (1 !== t.key.length) return null;
                    t.key = t.key.toUpperCase().charCodeAt(0)
                }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            p = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            d = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            y = r(n(39)),
            v = r(n(23)),
            b = r(n(26)),
            g = (r(n(21)), r(n(3))),
            m = r(n(19)),
            _ = r(n(31)),
            O = r(n(40)),
            w = (r(n(33)), (0, _.default)("quill:keyboard")),
            x = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
            k = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.bindings = {}, Object.keys(r.options.bindings).forEach(function(t) {
                        r.options.bindings[t] && r.addBinding(r.options.bindings[t])
                    }), r.addBinding({
                        key: e.keys.ENTER,
                        shiftKey: null
                    }, s), r.addBinding({
                        key: e.keys.ENTER,
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }, function() {}), r.addBinding({
                        key: e.keys.BACKSPACE
                    }, {
                        collapsed: !0,
                        prefix: /^.?$/
                    }, function(t) {
                        0 !== t.index && (this.quill.deleteText(t.index - 1, 1, m.default.sources.USER), this.quill.selection.scrollIntoView())
                    }), r.addBinding({
                        key: e.keys.DELETE
                    }, {
                        collapsed: !0,
                        suffix: /^$/
                    }, function(t) {
                        t.index >= this.quill.getLength() - 1 || this.quill.deleteText(t.index, 1, m.default.sources.USER)
                    }), r.addBinding({
                        key: e.keys.BACKSPACE
                    }, {
                        collapsed: !1
                    }, a), r.addBinding({
                        key: e.keys.DELETE
                    }, {
                        collapsed: !1
                    }, a), r.listen(), r
                }
                return l(e, t), d(e, null, [{
                    key: "match",
                    value: function(t, e) {
                        return (!!(e = f(e)).shortKey === t[x] || null === e.shortKey) && !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) {
                            return n != x && !!e[n] !== t[n] && null !== e[n]
                        }) && e.key === (t.which || t.keyCode)
                    }
                }]), d(e, [{
                    key: "addBinding",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                            r = f(t);
                        if (null == r || null == r.key) return w.warn("Attempted to add invalid keyboard binding", r);
                        "function" == typeof e && (e = {
                            handler: e
                        }), "function" == typeof n && (n = {
                            handler: n
                        }), r = (0, b.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
                    }
                }, {
                    key: "listen",
                    value: function() {
                        var t = this;
                        this.quill.root.addEventListener("keydown", function(n) {
                            if (!n.defaultPrevented) {
                                var r = n.which || n.keyCode,
                                    o = (t.bindings[r] || []).filter(function(t) {
                                        return e.match(n, t)
                                    });
                                if (0 !== o.length) {
                                    var i = t.quill.getSelection();
                                    if (null != i) {
                                        var l = t.quill.scroll.line(i.index),
                                            a = p(l, 2),
                                            s = a[0],
                                            u = a[1],
                                            c = t.quill.scroll.leaf(i.index),
                                            f = p(c, 2),
                                            d = f[0],
                                            y = f[1],
                                            b = 0 === i.length ? [d, y] : t.quill.scroll.leaf(i.index + i.length),
                                            m = p(b, 2),
                                            _ = m[0],
                                            O = m[1],
                                            w = d instanceof g.default.Text ? d.value().slice(0, y) : "",
                                            x = _ instanceof g.default.Text ? _.value().slice(O) : "",
                                            k = {
                                                collapsed: 0 === i.length,
                                                empty: 0 === i.length && s.length() <= 1,
                                                format: t.quill.getFormat(i),
                                                offset: u,
                                                prefix: w,
                                                suffix: x
                                            };
                                        o.some(function(e) {
                                            if (null != e.collapsed && e.collapsed !== k.collapsed) return !1;
                                            if (null != e.empty && e.empty !== k.empty) return !1;
                                            if (null != e.offset && e.offset !== k.offset) return !1;
                                            if (Array.isArray(e.format)) {
                                                if (e.format.every(function(t) {
                                                        return null == k.format[t]
                                                    })) return !1
                                            } else if ("object" === h(e.format) && !Object.keys(e.format).every(function(t) {
                                                    return !0 === e.format[t] ? null != k.format[t] : !1 === e.format[t] ? null == k.format[t] : (0, v.default)(e.format[t], k.format[t])
                                                })) return !1;
                                            return !(null != e.prefix && !e.prefix.test(k.prefix)) && (!(null != e.suffix && !e.suffix.test(k.suffix)) && !0 !== e.handler.call(t, i, k))
                                        }) && n.preventDefault()
                                    }
                                }
                            }
                        })
                    }
                }]), e
            }(O.default);
        k.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
        }, k.DEFAULTS = {
            bindings: {
                bold: c("bold"),
                italic: c("italic"),
                underline: c("underline"),
                indent: {
                    key: k.keys.TAB,
                    format: ["blockquote", "indent", "list"],
                    handler: function(t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format("indent", "+1", m.default.sources.USER)
                    }
                },
                outdent: {
                    key: k.keys.TAB,
                    shiftKey: !0,
                    format: ["blockquote", "indent", "list"],
                    handler: function(t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format("indent", "-1", m.default.sources.USER)
                    }
                },
                "outdent backspace": {
                    key: k.keys.BACKSPACE,
                    collapsed: !0,
                    format: ["blockquote", "indent", "list"],
                    offset: 0,
                    handler: function(t, e) {
                        null != e.format.indent ? this.quill.format("indent", "-1", m.default.sources.USER) : null != e.format.blockquote ? this.quill.format("blockquote", !1, m.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, m.default.sources.USER)
                    }
                },
                "indent code-block": u(!0),
                "outdent code-block": u(!1),
                "remove tab": {
                    key: k.keys.TAB,
                    shiftKey: !0,
                    collapsed: !0,
                    prefix: /\t$/,
                    handler: function(t, e) {
                        this.quill.deleteText(t.index - 1, 1, m.default.sources.USER)
                    }
                },
                tab: {
                    key: k.keys.TAB,
                    handler: function(t, e) {
                        e.collapsed || this.quill.scroll.deleteAt(t.index, t.length), this.quill.insertText(t.index, "\t", m.default.sources.USER), this.quill.setSelection(t.index + 1, m.default.sources.SILENT)
                    }
                },
                "list empty enter": {
                    key: k.keys.ENTER,
                    collapsed: !0,
                    format: ["list"],
                    empty: !0,
                    handler: function(t, e) {
                        this.quill.format("list", !1, m.default.sources.USER), e.format.indent && this.quill.format("indent", !1, m.default.sources.USER)
                    }
                },
                "header enter": {
                    key: k.keys.ENTER,
                    collapsed: !0,
                    format: ["header"],
                    suffix: /^$/,
                    handler: function(t) {
                        this.quill.scroll.insertAt(t.index, "\n"), this.quill.formatText(t.index + 1, 1, "header", !1, m.default.sources.USER), this.quill.setSelection(t.index + 1, m.default.sources.SILENT), this.quill.selection.scrollIntoView()
                    }
                },
                "list autofill": {
                    key: " ",
                    collapsed: !0,
                    format: {
                        list: !1
                    },
                    prefix: /^(1\.|-)$/,
                    handler: function(t, e) {
                        var n = e.prefix.length;
                        this.quill.scroll.deleteAt(t.index - n, n), this.quill.formatLine(t.index - n, 1, "list", 1 === n ? "bullet" : "ordered", m.default.sources.USER), this.quill.setSelection(t.index - n, m.default.sources.SILENT)
                    }
                }
            }
        }, e.default = k
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.IndentClass = void 0;
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            u = new(function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, [{
                    key: "add",
                    value: function(t, n) {
                        if ("+1" === n || "-1" === n) {
                            var r = this.value(t) || 0;
                            n = "+1" === n ? r + 1 : r - 1
                        }
                        return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
                    }
                }]), e
            }(s.default.Attributor.Class))("indent", "ql-indent", {
                scope: s.default.Scope.BLOCK,
                whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
            });
        e.IndentClass = u
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(33)).default);
        l.blotName = "blockquote", l.tagName = "blockquote", e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, null, [{
                    key: "formats",
                    value: function(t) {
                        return this.tagName.indexOf(t.tagName) + 1
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(33)).default);
        a.blotName = "header", a.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.ListItem = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            c = (r(n(26)), r(n(21)), r(n(3))),
            f = r(n(33)),
            h = r(n(43)),
            p = function(t) {
                function e() {
                    return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), s(e, [{
                    key: "format",
                    value: function(t, n) {
                        t !== d.blotName || n ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(c.default.create(this.statics.scope))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
                    }
                }, {
                    key: "replaceWith",
                    value: function(t, n) {
                        return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
                    }
                }], [{
                    key: "formats",
                    value: function(t) {
                        return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
                    }
                }]), e
            }(f.default);
        p.blotName = "list-item", p.tagName = "LI";
        var d = function(t) {
            function e() {
                return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return a(e, t), s(e, [{
                key: "format",
                value: function(t, e) {
                    this.children.length > 0 && this.children.tail.format(t, e)
                }
            }, {
                key: "formats",
                value: function() {
                    return o({}, this.statics.blotName, this.statics.formats(this.domNode))
                }
            }, {
                key: "insertBefore",
                value: function(t, n) {
                    if (t instanceof p) u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
                    else {
                        var r = null == n ? this.length() : n.offset(this),
                            o = this.split(r);
                        o.parent.insertBefore(t, o)
                    }
                }
            }, {
                key: "optimize",
                value: function() {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this);
                    var t = this.next;
                    null != t && t.prev === this && t.statics.blotName === this.statics.blotName && t.domNode.tagName === this.domNode.tagName && (t.moveChildren(this), t.remove())
                }
            }, {
                key: "replace",
                value: function(t) {
                    if (t.statics.blotName !== this.statics.blotName) {
                        var n = c.default.create(this.statics.defaultChild);
                        t.moveChildren(n), this.appendChild(n)
                    }
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                }
            }], [{
                key: "create",
                value: function(t) {
                    return "ordered" === t ? t = "OL" : "bullet" === t && (t = "UL"), u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                }
            }, {
                key: "formats",
                value: function(t) {
                    return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? "bullet" : void 0
                }
            }]), e
        }(h.default);
        d.blotName = "list", d.scope = c.default.Scope.BLOCK_BLOT, d.tagName = ["OL", "UL"], d.defaultChild = "list-item", d.allowedChildren = [p], e.ListItem = p, e.default = d
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, [{
                    key: "optimize",
                    value: function() {
                        a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return !0
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(36)).default);
        s.blotName = "bold", s.tagName = ["STRONG", "B"], e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(58)).default);
        l.blotName = "italic", l.tagName = ["EM", "I"], e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function l(t, e) {
            var n = document.createElement("a");
            n.href = t;
            var r = n.href.slice(0, n.href.indexOf(":"));
            return e.indexOf(r) > -1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.sanitize = e.default = void 0;
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), a(e, [{
                    key: "format",
                    value: function(t, n) {
                        if (t !== this.statics.blotName || !n) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                        n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("target", "_blank"), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return t.getAttribute("href")
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return l(t, ["http", "https", "mailto"]) ? t : this.SANITIZED_URL
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(36)).default);
        u.blotName = "link", u.tagName = "A", u.SANITIZED_URL = "about:blank", e.default = u, e.sanitize = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, null, [{
                    key: "create",
                    value: function(t) {
                        return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(36)).default);
        s.blotName = "script", s.tagName = ["SUB", "SUP"], e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(36)).default);
        l.blotName = "strike", l.tagName = "S", e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t) {
            function e() {
                return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return i(e, t), e
        }(function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(36)).default);
        l.blotName = "underline", l.tagName = "U", e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = r(n(35)),
            c = n(60),
            f = (r(c), function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), a(e, [{
                    key: "format",
                    value: function(t, n) {
                        "height" === t || "width" === t ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        var e = {};
                        return t.hasAttribute("height") && (e.height = t.getAttribute("height")), t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
                    }
                }, {
                    key: "match",
                    value: function(t) {
                        return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("src")
                    }
                }]), e
            }(u.default));
        f.blotName = "image", f.tagName = "IMG", e.default = f
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = n(33),
            u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(60)),
            c = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return i(e, t), l(e, [{
                    key: "format",
                    value: function(t, n) {
                        "height" === t || "width" === t ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        var e = {};
                        return t.hasAttribute("height") && (e.height = t.getAttribute("height")), t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return u.default.sanitize(t)
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("src")
                    }
                }]), e
            }(s.BlockEmbed);
        c.blotName = "video", c.className = "ql-video", c.tagName = "IFRAME",c.width = "800", e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.FormulaBlot = void 0;
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = r(n(35)),
            c = r(n(19)),
            f = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), a(e, [{
                    key: "index",
                    value: function(t, e) {
                        return 1
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return "string" == typeof t && (katex.render(t, n), n.setAttribute("data-value", t)), n.setAttribute("contenteditable", !1), n
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("data-value")
                    }
                }]), e
            }(u.default);
        f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN", e.FormulaBlot = f, e.default = function() {
            if (null == window.katex) throw new Error("Formula module requires KaTeX.");
            c.default.register(f, !0)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.CodeToken = e.CodeBlock = void 0;
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = r(n(3)),
            c = r(n(19)),
            f = r(n(40)),
            h = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return l(e, t), a(e, [{
                    key: "replaceWith",
                    value: function(t) {
                        this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
                    }
                }, {
                    key: "highlight",
                    value: function(t) {
                        if (this.cachedHTML !== this.domNode.innerHTML) {
                            var e = this.domNode.textContent;
                            (e.trim().length > 0 || null == this.cachedHTML) && (this.domNode.innerHTML = t(e), this.attach()), this.cachedHTML = this.domNode.innerHTML
                        }
                    }
                }]), e
            }(r(n(32)).default);
        h.className = "ql-syntax";
        var p = new u.default.Attributor.Class("token", "hljs", {
                scope: u.default.Scope.INLINE
            }),
            d = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                    c.default.register(p, !0), c.default.register(h, !0);
                    var l = null;
                    return r.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                        null == l && (l = setTimeout(function() {
                            r.highlight(), l = null
                        }, 100))
                    }), r.highlight(), r
                }
                return l(e, t), a(e, [{
                    key: "highlight",
                    value: function() {
                        var t = this;
                        if (!this.quill.selection.composing) {
                            var e = this.quill.getSelection();
                            this.quill.scroll.descendants(h).forEach(function(e) {
                                e.highlight(t.options.highlight)
                            }), this.quill.update(c.default.sources.SILENT), null != e && this.quill.setSelection(e, c.default.sources.SILENT)
                        }
                    }
                }]), e
            }(f.default);
        d.DEFAULTS = {
            highlight: null == window.hljs ? null : function(t) {
                return window.hljs.highlightAuto(t).value
            }
        }, e.CodeBlock = h, e.CodeToken = p, e.default = d
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function s(t, e, n) {
            var r = document.createElement("button");
            r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r)
        }

        function u(t, e) {
            Array.isArray(e[0]) || (e = [e]), e.forEach(function(e) {
                var n = document.createElement("span");
                n.classList.add("ql-formats"), e.forEach(function(t) {
                    if ("string" == typeof t) s(n, t);
                    else {
                        var e = Object.keys(t)[0],
                            r = t[e];
                        Array.isArray(r) ? c(n, e, r) : s(n, e, r)
                    }
                }), t.appendChild(n)
            })
        }

        function c(t, e, n) {
            var r = document.createElement("select");
            r.classList.add("ql-" + e), n.forEach(function(t) {
                var e = document.createElement("option");
                !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e)
            }), t.appendChild(r)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.addControls = e.default = void 0;
        var f = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            h = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            p = (r(n(26)), r(n(21))),
            d = r(n(3)),
            y = r(n(19)),
            v = r(n(31)),
            b = r(n(40)),
            g = (0, v.default)("quill:toolbar"),
            m = function(t) {
                function e(t, n) {
                    i(this, e);
                    var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    if (Array.isArray(r.options.container)) {
                        var o = document.createElement("div");
                        u(o, r.options.container), t.container.parentNode.insertBefore(o, t.container), r.container = o
                    } else "string" == typeof r.options.container ? r.container = document.querySelector(r.options.container) : r.container = r.options.container;
                    if (!(r.container instanceof HTMLElement)) {
                        var a;
                        return a = g.error("Container required for toolbar", r.options), l(r, a)
                    }
                    return r.container.classList.add("ql-toolbar"), r.controls = [], r.handlers = {}, Object.keys(r.options.handlers).forEach(function(t) {
                        r.addHandler(t, r.options.handlers[t])
                    }), r.container.addEventListener("mousedown", function(t) {
                        t.preventDefault()
                    }), [].forEach.call(r.container.querySelectorAll("button, select"), function(t) {
                        r.attach(t)
                    }), r.quill.on(y.default.events.EDITOR_CHANGE, function(t, e) {
                        t === y.default.events.SELECTION_CHANGE && r.update(e)
                    }), r.quill.on(y.default.events.SCROLL_OPTIMIZE, function() {
                        var t = r.quill.selection.getRange(),
                            e = f(t, 1)[0];
                        r.update(e)
                    }), r
                }
                return a(e, t), h(e, [{
                    key: "addHandler",
                    value: function(t, e) {
                        this.handlers[t] = e
                    }
                }, {
                    key: "attach",
                    value: function(t) {
                        var e = this,
                            n = [].find.call(t.classList, function(t) {
                                return 0 === t.indexOf("ql-")
                            });
                        if (n) {
                            if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
                                if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void g.warn("ignoring attaching to disabled format", n, t);
                                if (null == d.default.query(n)) return void g.warn("ignoring attaching to nonexistent format", n, t)
                            }
                            var r = "SELECT" === t.tagName ? "change" : "click";
                            t.addEventListener(r, function(r) {
                                var i = void 0;
                                if ("SELECT" === t.tagName) {
                                    if (t.selectedIndex < 0) return;
                                    var l = t.options[t.selectedIndex];
                                    i = !l.hasAttribute("selected") && (l.value || !1)
                                } else i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();
                                e.quill.focus();
                                var a = e.quill.selection.getRange(),
                                    s = f(a, 1)[0];
                                if (null != e.handlers[n]) e.handlers[n].call(e, i);
                                else if (d.default.query(n).prototype instanceof d.default.Embed) {
                                    if (!(i = prompt("Enter " + n))) return;
                                    e.quill.updateContents((new p.default).retain(s.index).delete(s.length).insert(o({}, n, i)), y.default.sources.USER)
                                } else e.quill.format(n, i, y.default.sources.USER);
                                e.update(s)
                            }), this.controls.push([n, t])
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = null == t ? {} : this.quill.getFormat(t);
                        this.controls.forEach(function(n) {
                            var r = f(n, 2),
                                o = r[0],
                                i = r[1];
                            if ("SELECT" === i.tagName) {
                                var l = void 0;
                                if (null == t) l = null;
                                else if (null == e[o]) l = i.querySelector("option[selected]");
                                else if (!Array.isArray(e[o])) {
                                    var a = e[o];
                                    "string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' + a + '"]')
                                }
                                null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0
                            } else if (null == t) i.classList.remove("ql-active");
                            else if (i.hasAttribute("value")) {
                                var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");
                                i.classList.toggle("ql-active", s)
                            } else i.classList.toggle("ql-active", null != e[o])
                        })
                    }
                }]), e
            }(b.default);
        m.DEFAULTS = {}, m.DEFAULTS = {
            container: null,
            handlers: {
                clean: function(t) {
                    var e = this,
                        n = this.quill.getSelection();
                    if (null != n)
                        if (0 == n.length) {
                            var r = this.quill.getFormat();
                            Object.keys(r).forEach(function(t) {
                                null != d.default.query(t, d.default.Scope.INLINE) && e.quill.format(t, !1)
                            })
                        } else this.quill.removeFormat(n, y.default.sources.USER)
                },
                direction: function(t) {
                    var e = this.quill.getFormat().align;
                    "rtl" === t && null == e ? this.quill.format("align", "right", y.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, y.default.sources.USER), this.quill.format("direction", t, y.default.sources.USER)
                },
                link: function(t) {
                    !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, y.default.sources.USER)
                },
                indent: function(t) {
                    var e = this.quill.getSelection(),
                        n = this.quill.getFormat(e),
                        r = parseInt(n.indent || 0);
                    if ("+1" === t || "-1" === t) {
                        var o = "+1" === t ? 1 : -1;
                        "rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, y.default.sources.USER)
                    }
                }
            }
        }, e.default = m, e.addControls = u
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            align: {
                "": n(70),
                center: n(71),
                right: n(72),
                justify: n(73)
            },
            background: n(74),
            blockquote: n(75),
            bold: n(76),
            clean: n(77),
            "code-block": n(78),
            color: n(79),
            direction: {
                "": n(80),
                rtl: n(81)
            },
            float: {
                center: n(82),
                full: n(83),
                left: n(84),
                right: n(85)
            },
            formula: n(86),
            header: {
                1: n(87),
                2: n(88)
            },
            italic: n(89),
            image: n(90),
            indent: {
                "+1": n(91),
                "-1": n(92)
            },
            link: n(93),
            list: {
                ordered: n(94),
                bullet: n(95)
            },
            script: {
                sub: n(96),
                super: n(97)
            },
            strike: n(98),
            underline: n(99),
            video: n(100)
        }
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class="ql-stroke ql-thin" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class="ql-stroke ql-thin" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(102)),
            a = function() {
                function t(e) {
                    var n = this;
                    r(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("click", function(t) {
                        n.container.classList.toggle("ql-expanded")
                    }), this.select.addEventListener("change", this.update.bind(this))
                }
                return i(t, [{
                    key: "buildItem",
                    value: function(t) {
                        var e = this,
                            n = document.createElement("span");
                        return n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function(t) {
                            e.selectItem(n, !0)
                        }), n
                    }
                }, {
                    key: "buildLabel",
                    value: function() {
                        var t = document.createElement("span");
                        return t.classList.add("ql-picker-label"), t.innerHTML = l.default, this.container.appendChild(t), t
                    }
                }, {
                    key: "buildOptions",
                    value: function() {
                        var t = this,
                            e = document.createElement("span");
                        e.classList.add("ql-picker-options"), [].slice.call(this.select.options).forEach(function(n) {
                            var r = t.buildItem(n);
                            e.appendChild(r), n.hasAttribute("selected") && t.selectItem(r)
                        }), this.container.appendChild(e)
                    }
                }, {
                    key: "buildPicker",
                    value: function() {
                        var t = this;
                        [].slice.call(this.select.attributes).forEach(function(e) {
                            t.container.setAttribute(e.name, e.value)
                        }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.container.classList.remove("ql-expanded")
                    }
                }, {
                    key: "selectItem",
                    value: function(t) {
                        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                            n = this.container.querySelector(".ql-selected");
                        if (t !== n)
                            if (null != n && n.classList.remove("ql-selected"), null != t) {
                                if (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e) {
                                    if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
                                    else if ("object" === ("undefined" == typeof Event ? "undefined" : o(Event))) {
                                        var r = document.createEvent("Event");
                                        r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
                                    }
                                    this.close()
                                }
                            } else this.label.removeAttribute("data-value"), this.label.removeAttribute("data-label")
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = void 0;
                        if (this.select.selectedIndex > -1) {
                            var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                            t = this.select.options[this.select.selectedIndex], this.selectItem(e)
                        } else this.selectItem(null);
                        var n = null != t && t !== this.select.querySelector("option[selected]");
                        this.label.classList.toggle("ql-active", n)
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                function e(t, n) {
                    r(this, e);
                    var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.label.innerHTML = n, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t) {
                        t.classList.add("ql-primary")
                    }), i
                }
                return i(e, t), l(e, [{
                    key: "buildItem",
                    value: function(t) {
                        var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
                        return n.style.backgroundColor = t.getAttribute("value") || "", n
                    }
                }, {
                    key: "selectItem",
                    value: function(t, n) {
                        a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
                        var r = this.label.querySelector(".ql-color-label"),
                            o = t ? t.getAttribute("data-value") || "" : "";
                        r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o)
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(101)).default);
        e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function(t) {
                function e(t, n) {
                    r(this, e);
                    var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(t) {
                        t.innerHTML = n[t.getAttribute("data-value") || ""]
                    }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i
                }
                return i(e, t), l(e, [{
                    key: "selectItem",
                    value: function(t, n) {
                        a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML
                    }
                }]), e
            }(function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(101)).default);
        e.default = s
    }, function(t, e) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function() {
                function t(e, r) {
                    var o = this;
                    n(this, t), this.quill = e, this.boundsContainer = r, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE;
                    var i = parseInt(window.getComputedStyle(this.root).marginTop);
                    this.quill.root.addEventListener("scroll", function() {
                        o.root.style.marginTop = -1 * o.quill.root.scrollTop + i + "px", o.checkBounds()
                    }), this.hide()
                }
                return r(t, [{
                    key: "checkBounds",
                    value: function() {
                        this.root.classList.toggle("ql-out-top", this.root.offsetTop <= 0), this.root.classList.remove("ql-out-bottom"), this.root.classList.toggle("ql-out-bottom", this.root.offsetTop + this.root.offsetHeight >= this.quill.root.offsetHeight)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.root.classList.add("ql-hidden")
                    }
                }, {
                    key: "position",
                    value: function(t) {
                        var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                            n = t.bottom + this.quill.root.scrollTop;
                        this.root.style.left = e + "px", this.root.style.top = n + "px";
                        var r = this.boundsContainer.getBoundingClientRect(),
                            o = this.root.getBoundingClientRect(),
                            i = 0;
                        return o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), this.checkBounds(), i
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
                    }
                }]), t
            }();
        e.default = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = r(n(26)),
            c = r(n(29)),
            f = (r(n(53)), n(107)),
            h = r(f),
            p = (r(n(69)), n(41)),
            d = [
                ["bold", "italic", "link"],
                [{
                    header: 1
                }, {
                    header: 2
                }, "blockquote"]
            ],
            y = function(t) {
                function e(t, n) {
                    o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = d);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.container.classList.add("ql-bubble"), r
                }
                return l(e, t), s(e, [{
                    key: "extendToolbar",
                    value: function(t) {
                        this.tooltip = new v(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button"))), this.buildPickers([].slice.call(t.container.querySelectorAll("select")))
                    }
                }]), e
            }(h.default);
        y.DEFAULTS = (0, u.default)(!0, {}, f.BaseTooltip.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        var v = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.quill.on(c.default.events.EDITOR_CHANGE, function(t, e) {
                    if (t === c.default.events.SELECTION_CHANGE)
                        if (null != e && e.length > 0) {
                            r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
                            var n = r.quill.scroll.lines(e.index, e.length);
                            if (1 === n.length) r.position(r.quill.getBounds(e));
                            else {
                                var o = n[n.length - 1],
                                    i = o.offset(r.quill.scroll),
                                    l = Math.min(o.length() - 1, e.index + e.length - i),
                                    a = r.quill.getBounds(new p.Range(i, l));
                                r.position(a)
                            }
                        } else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
                }), r
            }
            return l(e, t), s(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function(e) {
                        t.root.classList.remove("ql-editing")
                    }), this.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                        setTimeout(function() {
                            if (!t.root.classList.contains("ql-hidden")) {
                                var e = t.quill.getSelection();
                                null != e && t.position(t.quill.getBounds(e))
                            }
                        }, 1)
                    })
                }
            }, {
                key: "cancel",
                value: function() {
                    this.show()
                }
            }, {
                key: "position",
                value: function(t) {
                    var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t);
                    if (0 === n) return n;
                    var r = this.root.querySelector(".ql-tooltip-arrow");
                    r.style.marginLeft = "", r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
                }
            }]), e
        }(f.BaseTooltip);
        v.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.default = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function a(t, e) {
            var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
            e.forEach(function(e) {
                var r = document.createElement("option");
                e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.BaseTooltip = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            c = r(n(26)),
            f = r(n(21)),
            h = r(n(29)),
            p = r(n(53)),
            d = r(n(42)),
            y = r(n(103)),
            v = r(n(104)),
            b = r(n(101)),
            g = r(n(105)),
            m = r(n(69)),
            _ = [!1, "center", "right", "justify"],
            O = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
            w = [!1, "serif", "monospace"],
            x = ["1", "2", "3", !1],
            k = ["small", !1, "large", "huge"],
            E = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return document.body.addEventListener("click", function e(n) {
                        if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
                        null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function(t) {
                            t.container.contains(n.target) || t.close()
                        })
                    }), r
                }
                return l(e, t), s(e, [{
                    key: "addModule",
                    value: function(t) {
                        var n = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
                        return "toolbar" === t && this.extendToolbar(n), n
                    }
                }, {
                    key: "buildButtons",
                    value: function(t) {
                        t.forEach(function(t) {
                            (t.getAttribute("class") || "").split(/\s+/).forEach(function(e) {
                                if (e.startsWith("ql-") && (e = e.slice("ql-".length), null != m.default[e]))
                                    if ("direction" === e) t.innerHTML = m.default[e][""] + m.default[e].rtl;
                                    else if ("string" == typeof m.default[e]) t.innerHTML = m.default[e];
                                else {
                                    var n = t.value || "";
                                    null != n && m.default[e][n] && (t.innerHTML = m.default[e][n])
                                }
                            })
                        })
                    }
                }, {
                    key: "buildPickers",
                    value: function(t) {
                        var e = this;
                        this.pickers = t.map(function(t) {
                            if (t.classList.contains("ql-align")) return null == t.querySelector("option") && a(t, _), new v.default(t, m.default.align);
                            if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                                var e = t.classList.contains("ql-background") ? "background" : "color";
                                return null == t.querySelector("option") && a(t, O, "background" === e ? "#ffffff" : "#000000"), new y.default(t, m.default[e])
                            }
                            return null == t.querySelector("option") && (t.classList.contains("ql-font") ? a(t, w) : t.classList.contains("ql-header") ? a(t, x) : t.classList.contains("ql-size") && a(t, k)), new b.default(t)
                        });
                        var n = function() {
                            e.pickers.forEach(function(t) {
                                t.update()
                            })
                        };
                        this.quill.on(h.default.events.SELECTION_CHANGE, n).on(h.default.events.SCROLL_OPTIMIZE, n)
                    }
                }]), e
            }(d.default);
        E.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        formula: function(t) {
                            this.quill.theme.tooltip.edit("formula")
                        },
                        image: function(t) {
                            var e = this,
                                n = this.container.querySelector("input.ql-image[type=file]");
                            null == n && ((n = document.createElement("input")).setAttribute("type", "file"), n.setAttribute("accept", "image/*"), n.classList.add("ql-image"), n.addEventListener("change", function() {
                                if (null != n.files && null != n.files[0]) {
                                    var t = new FileReader;
                                    t.onload = function(t) {
                                        var r = e.quill.getSelection(!0);
                                        e.quill.updateContents((new f.default).retain(r.index).delete(r.length).insert({
                                            image: t.target.result
                                        }), h.default.sources.USER), n.value = ""
                                    }, t.readAsDataURL(n.files[0])
                                }
                            }), this.container.appendChild(n)), n.click()
                        },
                        video: function(t) {
                            this.quill.theme.tooltip.edit("video")
                        }
                    }
                }
            }
        });
        var j = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
            }
            return l(e, t), s(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    this.textbox.addEventListener("keydown", function(e) {
                        p.default.match(e, "enter") ? (t.save(), e.preventDefault()) : p.default.match(e, "escape") && (t.cancel(), e.preventDefault())
                    })
                }
            }, {
                key: "cancel",
                value: function() {
                    this.hide()
                }
            }, {
                key: "edit",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "link" : arguments[0],
                        e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
                }
            }, {
                key: "restoreFocus",
                value: function() {
                    var t = this.quill.root.scrollTop;
                    this.quill.focus(), this.quill.root.scrollTop = t
                }
            }, {
                key: "save",
                value: function() {
                    var t = this.textbox.value;
                    switch (this.root.getAttribute("data-mode")) {
                        case "link":
                            var e = this.quill.root.scrollTop;
                            this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, h.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, h.default.sources.USER)), this.quill.root.scrollTop = e;
                            break;
                        case "video":
                            var n = t.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                            n ? t = n[1] + "://www.youtube.com/embed/" + n[3] + "?showinfo=0" : (n = t.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/)) && (t = n[1] + "://player.vimeo.com/video/" + n[3] + "/");
                        case "formula":
                            var r = this.quill.getSelection(!0),
                                o = r.index + r.length;
                            null != r && (this.quill.insertEmbed(o, this.root.getAttribute("data-mode"), t, h.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(o + 1, " ", h.default.sources.USER), this.quill.setSelection(o + 2, h.default.sources.USER))
                    }
                    this.textbox.value = "", this.hide()
                }
            }]), e
        }(g.default);
        e.BaseTooltip = j, e.default = E
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var l = o.get;
                if (void 0 !== l) return l.call(r)
            },
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            c = r(n(26)),
            f = r(n(29)),
            h = n(107),
            p = r(h),
            d = r(n(60)),
            y = (r(n(101)), n(41)),
            v = [
                [{
                    header: ["1", "2", "3", !1]
                }],
                ["bold", "italic", "underline", "link"],
                [{
                    list: "ordered"
                }, {
                    list: "bullet"
                }],
                ["clean"]
            ],
            b = function(t) {
                function e(t, n) {
                    o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = v);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.container.classList.add("ql-snow"), r
                }
                return l(e, t), u(e, [{
                    key: "extendToolbar",
                    value: function(t) {
                        t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button"))), this.buildPickers([].slice.call(t.container.querySelectorAll("select"))), this.tooltip = new g(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                            key: "K",
                            shortKey: !0
                        }, function(e, n) {
                            t.handlers.link.call(t, !n.format.link)
                        })
                    }
                }]), e
            }(p.default);
        b.DEFAULTS = (0, c.default)(!0, {}, p.default.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            if (t) {
                                var e = this.quill.getSelection();
                                if (null == e || 0 == e.length) return;
                                var n = this.quill.getText(e);
                                /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n), this.quill.theme.tooltip.edit("link", n)
                            } else this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        var g = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.preview = r.root.querySelector("a.ql-preview"), r
            }
            return l(e, t), u(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e) {
                        t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
                    }), this.root.querySelector("a.ql-remove").addEventListener("click", function(e) {
                        null != t.linkRange && (t.restoreFocus(), t.quill.formatText(t.linkRange, "link", !1, f.default.sources.USER), delete t.linkRange), e.preventDefault(), t.hide()
                    }), this.quill.on(f.default.events.SELECTION_CHANGE, function(e) {
                        if (null != e) {
                            if (0 === e.length) {
                                var n = t.quill.scroll.descendant(d.default, e.index),
                                    r = a(n, 2),
                                    o = r[0],
                                    i = r[1];
                                if (null != o) {
                                    t.linkRange = new y.Range(e.index - i, o.length());
                                    var l = d.default.formats(o.domNode);
                                    return t.preview.textContent = l, t.preview.setAttribute("href", l), t.show(), void t.position(t.quill.getBounds(t.linkRange))
                                }
                            }
                            t.hide()
                        }
                    })
                }
            }, {
                key: "show",
                value: function() {
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
                }
            }]), e
        }(h.BaseTooltip);
        g.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = b
    }])
});
