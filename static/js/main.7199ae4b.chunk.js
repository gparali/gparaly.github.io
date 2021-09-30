(this.webpackJsonpphosphor = this.webpackJsonpphosphor || []).push([[0], [, , , , , , , , , function(e) {
    e.exports = JSON.parse('{"config":{},"screens":[{"id":"screen0","type":"screen","content":["CHOI OUTPOST ACCESS TERMINAL","============================","","Welcome to Choi Outpost, a property of DYSON PHYTOLOGY (c), where innovation is our top priority (tm).","","============================","",{"text":"> ACCEPT EULA & LOG IN","type":"link","target":"menu"}]},{"id":"menu","type":"screen","content":["Main Menu","=========","","[A] :: Administrator access only","",{"text":"> FACILITY TERMINALS","type":"link","target":"terminals"},{"text":"> COMMS [A]","type":"link","target":[{"target":"lockedDialog","type":"dialog","shiftKey":false},{"target":"comms","type":"link","shiftKey":true}]},{"text":"> PLANET INFO","type":"link","target":"planet"}]},{"id":"comms","type":"screen","content":["COMMS","=====","","1 vessel detected in proximity.","",{"text":"> HAIL TEMPEST","target":"hailtempest","type":"link"},{"text":"> MESSAGES","target":"messages","type":"link"},"","======","",{"text":"< BACK","target":"menu","type":"link"}]},{"id":"hailtempest","type":"screen","content":["Transmitting","============","","..........................................","..........................................","","COMMUNICATION CHANNEL OPENED","","======","",{"text":"< CLOSE CHANNEL","target":"comms","type":"link"}]},{"id":"messages","type":"screen","content":["MESSAGES","========","","Authorized messaged received last month from planet: 2","",{"text":"> 2366-08-15.0915","target":"message2","type":"link"},{"text":"> 2366-08-11.0804","target":"message1","type":"link"},"","Unauthorized messages declined and purged last month from planet: 255","","========","",{"text":"< BACK","target":"comms","type":"link"}]},{"id":"planet","type":"screen","content":["PLANET INFO","===========","",{"type":"bitmap","src":"https://i.imgur.com/Ma2K9Mq.jpg","className":"lighten"},"","PLANET MURANDAL, ACHEROL SYSTEM","","For the most part, the planet of Murandal is a barren ice rock. From space, its surface appearing as a mixture of swirling greys and browns. The majority of the planet is covered by thick ice caps, and a somewhat alkaline ocean below. The planet’s diameter is roughly 13,000 km / 8080 miles, and has gravity just slightly higher than that of Earth. The planet is situated roughly 14 AU from the local star, a red dwarf.","","The planetary atmosphere is breathable, though prolonged exposure will result in mildly toxic effects. Weather tends towards heavy cloud cover, and near constant sleet fall. “Ice dust” covers almost everything with time if left unattended.","","The ice sheets covering the planet around 1km / 0.6 miles thick, and the ocean below is both pitch black, no sunlight breaches the ice, and is freezing at around -4°C / 25°F. The water is slightly alkaline and filled with large quantities of reflective detritus picked up from the ocean floor, a black, flaky expanse.","","The only life on the surface are bacteria, and the largest and most complex life within the ocean are small crab-like creatures, while a variety of algae and mossy plants dot the ocean floor.","","===========","",{"text":"< BACK","target":"menu","type":"link"}]},{"id":"message1","type":"screen","content":["DATE: 2366-08-11.0804","SENDER: Dr. Eunha Taibhse, Choi Lab Admin","","SUBJECT: Mole","","======","","Hello Station,","","This is Dr. Taibhse. It seems a corporate spy bypassed company security protocols","The mole has been apprehended. No further action required","","Best Regards","Dr. Eunha Taibhse, Choi Lab Admin","","======","",{"text":"< BACK","target":"messages","type":"link"}]},{"id":"message2","type":"screen","content":["DATE: 2366-08-15.0915","SENDER: Dr. Eunha Taibhse, Choi Lab Admin","","SUBJECT: Containment Failure","","======","","Hello Station,","","This is Dr. Taibhse. It seems our mole caused and containement failure.","The outbreak has been contained and additional measures taken.","","No further action required.","","Best Regards","Dr. Eunha Taibhse, Choi Lab Admin","","======","",{"text":"< BACK","target":"messages","type":"link"}]},{"id":"terminals","type":"screen","content":["FACILITY TERMINALS","==================","","[A] :: Administrator access only","",{"text":"> DELANGE ORBITAL STATION [A]","target":[{"target":"lockedDialog","type":"dialog","shiftKey":false},{"target":"delange","type":"link","shiftKey":true}],"type":"link"},{"text":"> JAPLINE’S ACHE GROUND HABITATION [A]","target":[{"target":"lockedDialog","type":"dialog","shiftKey":false},{"target":"ground","type":"link","shiftKey":true}],"type":"link"},{"text":"> CHOI UNDERWATER LABS [A]","target":[{"target":"lockedDialog","type":"dialog","shiftKey":false},{"target":"choi","type":"link","shiftKey":true}],"type":"link"},"","==================","",{"text":"< BACK","target":"menu","type":"link"}]},{"id":"delange","type":"screen","content":["DELANGE ACCESS TERMINAL","=======================","",{"text":"> FACILITY SCEMATIC","target":"dmap","type":"link"},{"text":"> SECURITY FEEDS","target":"dsecurity","type":"link"},{"text":"> PERSONNEL","target":"dpersonnel","type":"link"},{"text":"> DIAGNOSTICS","target":"ddiagnostics","type":"link"},{"text":"> DOCK ACTIVITY","target":"ddock","type":"link"},{"text":"> CARGO REGISTRY","target":"dcargo","type":"link"},"","=======================","",{"text":"< BACK","target":"menu","type":"link"}]},{"id":"dsecurity","type":"screen","content":["SECURITY FEEDS","==============","",{"type":"bitmap","src":"https://i.imgur.com/UbWRMCZ.jpg","className":"lighten"},"","==============","",{"text":"< BACK","target":"delange","type":"link"}]},{"id":"dcargo","type":"screen","content":["CARGO REGISTRY","==============","","Files availiable: 0","","Last sceduled data purge was on: 2366-08-20.1000","","==============","",{"text":"< BACK","target":"delange","type":"link"}]},{"id":"ddock","type":"screen","content":["DOCK ACTIVITY","=============","","Docking bay activity (past 6 months):","","2366-04-28.0633 - Bay 1 : Arrive :: Tempest","2366-04-29.0834 - Bay 1 : Depart :: Tempest","2366-06-19.1223 - Bay 1 : Arrive :: Tempest","2366-06-20.1604 - Bay 1 : Depart :: Tempest","2366-08-23.1004 - Bay 1 : Arrive :: Tempest","","=============","",{"text":"< BACK","target":"delange","type":"link"}]},{"id":"dmap","type":"screen","content":["DELANGE ORBITAL SCEMATIC","========================","",{"type":"bitmap","src":"https://i.imgur.com/DHilJt3.png","className":"lighten"},"","A copy of the map is now available via data tablet.","","========================","",{"text":"< BACK","target":"delange","type":"link"}]}],"dialogs":[{"id":"lockedDialog","type":"alert","content":["Error! Authorization required."]},{"id":"airlockError","type":"alert","content":["ERROR! Lock override in effect.","","Cannot unlock remotely. Manual intervention required."]}]}')
}
, , , , , function(e, t, n) {
    e.exports = n(27)
}
, , , , , function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var a, i, r, s, c, o = n(0), l = n.n(o), u = n(11), m = n.n(u), d = n(12), p = n(2), f = n(3), v = n(1), h = n(4), y = n(5), g = (n(19),
    n(13)), S = (n(20),
    function(e) {
        Object(y.a)(n, e);
        var t = Object(h.a)(n);
        function n(e) {
            var a;
            Object(p.a)(this, n),
            (a = t.call(this, e))._cursorInterval = 10,
            a._animateTimerId = null,
            a._cursorRef = null,
            a._cursorY = null,
            a._cursorRef = l.a.createRef(),
            a._cursorY = 0;
            var i = !!e.autocomplete
              , r = !1 === e.autostart;
            return a._cursorInterval = e.speed || a._cursorInterval,
            a.state = {
                index: 0,
                char: 0,
                active: !1,
                done: i,
                paused: r
            },
            a._animate = a._animate.bind(Object(v.a)(a)),
            a._updateState = a._updateState.bind(Object(v.a)(a)),
            a
        }
        return Object(f.a)(n, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.text
                  , n = e.className
                  , a = this.state
                  , i = a.char
                  , r = a.done
                  , s = a.active
                  , c = t.substr(0, i)
                  , o = t.substr(i, 1) || " "
                  , u = t.substr(i + 1);
                if (!s || r)
                    return null;
                var m = ["__teletype__", n || null].join(" ").trim();
                return l.a.createElement("div", {
                    className: m
                }, l.a.createElement("span", {
                    className: "visible"
                }, c), l.a.createElement("span", {
                    className: "cursor",
                    ref: this._cursorRef
                }, o), l.a.createElement("span", {
                    className: "hidden"
                }, u))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this
                  , t = this.state
                  , n = t.paused;
                t.done ? this._onComplete() : n || this.setState({
                    active: !0
                }, (function() {
                    return e._animate()
                }
                ))
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                !t.done && this.state.done && this._onComplete(),
                this.state.done || this._animate()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                null !== this._animateTimerId && (clearTimeout(this._animateTimerId),
                this._animateTimerId = null)
            }
        }, {
            key: "_animate",
            value: function() {
                this._clearAnimateTimer(),
                this.state.paused || (this._getCursorPosition(),
                this._animateTimerId = window.setTimeout(this._updateState, this._cursorInterval))
            }
        }, {
            key: "_getCursorPosition",
            value: function() {
                var e = this.props.onNewLine
                  , t = this._cursorRef
                  , n = this._cursorY;
                if (t && t.current) {
                    var a = t.current.offsetTop;
                    n !== a && (this._cursorY = a,
                    e && e())
                }
            }
        }, {
            key: "_clearAnimateTimer",
            value: function() {
                null !== this._animateTimerId && (window.clearTimeout(this._animateTimerId),
                this._animateTimerId = null)
            }
        }, {
            key: "_updateState",
            value: function() {
                var e = this.props.text
                  , t = this.state
                  , n = t.char
                  , a = t.active
                  , i = t.done
                  , r = t.paused;
                if (!i) {
                    var s = n
                      , c = a
                      , o = i
                      , l = r;
                    c || (c = !0),
                    n < e.length ? s = n + 1 : (c = !1,
                    o = !0),
                    this.setState({
                        char: s,
                        active: c,
                        done: o,
                        paused: l
                    })
                }
            }
        }, {
            key: "_onComplete",
            value: function() {
                var e = this.props.onComplete;
                e && e()
            }
        }]),
        n
    }(o.Component)), _ = (n(21),
    function(e) {
        var t = e.text
          , n = e.target
          , a = e.className
          , i = e.onClick
          , r = e.onRendered
          , s = ["__link__", a || null].join(" ").trim();
        return Object(o.useEffect)((function() {
            return r && r()
        }
        )),
        l.a.createElement("span", {
            className: s,
            onClick: function(e) {
                return i && i(n, e.shiftKey)
            }
        }, t)
    }
    ), k = function(e) {
        var t = e.text
          , n = e.className
          , a = e.onRendered
          , i = ["__text__", n || null].join(" ").trim();
        return Object(o.useEffect)((function() {
            return a && a()
        }
        )),
        l.a.createElement("div", {
            className: i
        }, t)
    }, E = (n(22),
    [.01, .02, .03, .05, .08, .13, .21, .34, .55, .89, 1]), N = function(e) {
        Object(y.a)(n, e);
        var t = Object(h.a)(n);
        function n(e) {
            var a;
            Object(p.a)(this, n),
            (a = t.call(this, e))._canvasRef = null,
            a._animateTimerId = null,
            a._currentStep = 0,
            a._clearAnimationTimer = function() {
                a._animateTimerId && (window.clearInterval(a._animateTimerId),
                a._animateTimerId = null)
            }
            ,
            a._canvasRef = l.a.createRef();
            var i = !a.props.autocomplete;
            return a.state = {
                loading: i,
                image: new Image
            },
            a
        }
        return Object(f.a)(n, [{
            key: "render",
            value: function() {
                var e = this.props.className
                  , t = this.state.loading
                  , n = ["__image__", e || null].join(" ").trim();
                return l.a.createElement("div", {
                    className: n
                }, t && l.a.createElement("div", {
                    className: "progressbar"
                }), l.a.createElement("canvas", {
                    ref: this._canvasRef
                }))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this._loadImage()
            }
        }, {
            key: "_resampleImage",
            value: function(e) {
                var t = this.state.image
                  , n = this._canvasRef.current
                  , a = n.getContext("2d")
                  , i = t.width
                  , r = t.height
                  , s = i * e
                  , c = r * e;
                a.imageSmoothingEnabled = !1,
                a.drawImage(t, 0, 0, s, c),
                a.drawImage(n, 0, 0, s, c, 0, 0, i, r)
            }
        }, {
            key: "_animate",
            value: function() {
                var e = this
                  , t = this.props.onComplete;
                this._clearAnimationTimer(),
                this._animateTimerId = window.setInterval((function() {
                    e._currentStep < E.length ? (e._resampleImage(E[e._currentStep]),
                    e._currentStep++) : (e._clearAnimationTimer(),
                    t && t())
                }
                ), 150)
            }
        }, {
            key: "_loadImage",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.autocomplete
                  , a = t.onComplete
                  , i = t.src
                  , r = this.state.image
                  , s = this._canvasRef.current
                  , c = s.getContext("2d");
                c && r && (r.onload = function() {
                    var t = r.width
                      , i = r.height;
                    s.width = t,
                    s.height = i,
                    n ? (c.drawImage(r, 0, 0),
                    a && a()) : e.setState({
                        loading: !1
                    }, (function() {
                        return e._animate()
                    }
                    ))
                }
                ,
                r.src = i)
            }
        }]),
        n
    }(o.Component), I = n(8), x = (n(23),
    function(e) {
        var t = e.disabled
          , n = e.prompt
          , a = e.className
          , i = e.commands
          , r = e.onCommand
          , s = e.onRendered
          , c = Object(o.useRef)()
          , u = ["__prompt__", t ? "disabled" : null, a || null].join(" ").trim()
          , m = Object(o.useState)("")
          , d = Object(I.a)(m, 2)
          , p = d[0]
          , f = d[1]
          , v = function(e) {
            if (t)
                f("");
            else {
                e.preventDefault();
                var n = e.key.toLowerCase();
                switch (n) {
                case "backspace":
                    p.length && f(p.slice(0, -1));
                    break;
                case "enter":
                    !function() {
                        if (r) {
                            var e = i.find((function(e) {
                                return e.command === p
                            }
                            ));
                            f(""),
                            e && r(p, e.action)
                        }
                    }();
                    break;
                default:
                    1 === n.length && n.match(/[a-z0-9,.<>/?[\]{}'";:*&^%$#@!~]/) && f(p + n)
                }
            }
        };
        return Object(o.useEffect)((function() {
            return s && s(),
            document.addEventListener("keydown", v),
            function() {
                return document.removeEventListener("keydown", v)
            }
        }
        )),
        l.a.createElement("div", {
            className: u,
            onClick: function() {
                return c.current.focus()
            }
        }, n && l.a.createElement("span", {
            className: "prompt"
        }, n), l.a.createElement("span", {
            className: "input",
            ref: c
        }, p))
    }
    ), A = (n(24),
    function(e) {
        var t = e.className
          , n = e.states
          , a = e.onRendered
          , i = ["__toggle__", t || null].join(" ").trim()
          , r = n.find((function(e) {
            return !0 === e.active
        }
        ))
          , s = r && r.text || ""
          , c = Object(o.useState)(r)
          , u = Object(I.a)(c, 2)
          , m = u[0]
          , d = u[1]
          , p = Object(o.useCallback)((function() {
            if (m) {
                var e = n.findIndex((function(e) {
                    return e === m
                }
                ));
                n.forEach((function(e) {
                    return e.active = !1
                }
                ));
                var t = n[e + 1 === n.length ? 0 : e + 1];
                t.active = !0,
                d(t)
            }
        }
        ), [n, m, d]);
        return Object(o.useEffect)((function() {
            return a && a()
        }
        )),
        l.a.createElement("div", {
            className: i,
            onClick: p
        }, s)
    }
    ), C = (n(25),
    function(e) {
        var t = e.text
          , n = e.className
          , a = e.onClose
          , i = ["__modal__", n || null].join(" ").trim()
          , r = Object(o.useCallback)((function(e) {
            switch (e.preventDefault(),
            e.key.toLowerCase()) {
            case "enter":
            case "escape":
                a && a()
            }
        }
        ), [a]);
        return Object(o.useEffect)((function() {
            return document.addEventListener("keydown", r),
            function() {
                return document.removeEventListener("keydown", r)
            }
        }
        )),
        l.a.createElement("section", {
            className: i,
            onClick: a
        }, l.a.createElement("div", {
            className: "content"
        }, ("string" === typeof t ? [t] : t).map((function(e, t) {
            return l.a.createElement("p", {
                key: t
            }, e)
        }
        ))))
    }
    ), O = (n(26),
    function() {
        return l.a.createElement("section", {
            className: "__scanlines__"
        })
    }
    ), T = n(9);
    !function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Alert = 1] = "Alert",
        e[e.Confirm = 2] = "Confirm",
        e[e.Dialog = 3] = "Dialog"
    }(a || (a = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Screen = 1] = "Screen",
        e[e.Static = 2] = "Static"
    }(i || (i = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Text = 1] = "Text",
        e[e.Link = 2] = "Link",
        e[e.Bitmap = 3] = "Bitmap",
        e[e.Prompt = 4] = "Prompt",
        e[e.Toggle = 5] = "Toggle"
    }(r || (r = {})),
    function(e) {
        e[e.Unloaded = 0] = "Unloaded",
        e[e.Ready = 1] = "Ready",
        e[e.Active = 2] = "Active",
        e[e.Done = 3] = "Done"
    }(s || (s = {})),
    function(e) {
        e[e.Unset = 0] = "Unset",
        e[e.Ready = 1] = "Ready",
        e[e.Active = 2] = "Active",
        e[e.Done = 3] = "Done"
    }(c || (c = {}));
    var D = function(e) {
        Object(y.a)(n, e);
        var t = Object(h.a)(n);
        function n(e) {
            var a;
            return Object(p.a)(this, n),
            (a = t.call(this, e))._containerRef = void 0,
            a._lineheight = null,
            a._colwidth = null,
            a._containerRef = l.a.createRef(),
            a.state = {
                screens: [],
                dialogs: [],
                activeScreenId: null,
                activeElementId: null,
                activeDialogId: null,
                loadingQueue: [],
                status: c.Unset,
                renderScanlines: !0
            },
            a._changeScreen = a._changeScreen.bind(Object(v.a)(a)),
            a._setElementState = a._setElementState.bind(Object(v.a)(a)),
            a._handlePromptCommand = a._handlePromptCommand.bind(Object(v.a)(a)),
            a._handleTeletypeNewLine = a._handleTeletypeNewLine.bind(Object(v.a)(a)),
            a._handleLinkClick = a._handleLinkClick.bind(Object(v.a)(a)),
            a
        }
        return Object(f.a)(n, [{
            key: "render",
            value: function() {
                var e = this.state
                  , t = e.activeScreenId
                  , n = e.activeDialogId
                  , a = e.renderScanlines;
                return l.a.createElement("div", {
                    className: "phosphor"
                }, l.a.createElement("section", {
                    className: "__main__",
                    ref: this._containerRef
                }, t && this._renderScreen()), n && this._renderDialog(), a && l.a.createElement(O, null))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this._parseScreens(),
                this._parseDialogs()
            }
        }, {
            key: "_parseScreens",
            value: function() {
                var e = this
                  , t = T.screens.map((function(t) {
                    return e._buildScreen(t)
                }
                ));
                if (t.length) {
                    this.setState({
                        screens: t
                    }, (function() {
                        return e._setActiveScreen(0)
                    }
                    ))
                }
            }
        }, {
            key: "_parseDialogs",
            value: function() {
                var e = this
                  , t = T.dialogs.map((function(t) {
                    return e._buildDialog(t)
                }
                ));
                t.length && this.setState({
                    dialogs: t
                })
            }
        }, {
            key: "_buildDialog",
            value: function(e) {
                var t = e.id || null
                  , n = this._getDialogType(e.type)
                  , i = null;
                return n === a.Alert && (i = e.content),
                {
                    id: t,
                    type: n,
                    content: i
                }
            }
        }, {
            key: "_getDialogType",
            value: function(e) {
                switch (e.toLowerCase()) {
                case "alert":
                    return a.Alert;
                case "confirm":
                    return a.Confirm;
                case "dialog":
                    return a.Dialog;
                default:
                    return a.Unknown
                }
            }
        }, {
            key: "_setActiveScreen",
            value: function(e) {
                var t = this
                  , n = this.state.screens[e].id;
                this.setState({
                    activeScreenId: n
                }, (function() {
                    return t._activateScreen()
                }
                ))
            }
        }, {
            key: "_activateScreen",
            value: function() {
                var e = this._getScreen(this.state.activeScreenId)
                  , t = c.Active;
                switch (e.type) {
                case i.Static:
                    this.setState({
                        status: t
                    });
                    break;
                case i.Screen:
                    e.content[0].state = s.Active,
                    this.setState({
                        status: t,
                        activeElementId: e.content[0].id
                    })
                }
            }
        }, {
            key: "_buildScreen",
            value: function(e) {
                var t = e.id || null
                  , n = this._getScreenType(e.type)
                  , a = this._parseScreenContent(e.content).flat();
                if (t && n)
                    return {
                        id: t,
                        type: n,
                        content: a
                    }
            }
        }, {
            key: "_getScreenType",
            value: function(e) {
                switch (e.toLowerCase()) {
                case "screen":
                    return i.Screen;
                case "static":
                    return i.Static;
                default:
                    return i.Unknown
                }
            }
        }, {
            key: "_renderScreen",
            value: function() {
                var e = this
                  , t = this._getScreen(this.state.activeScreenId);
                if (t)
                    return t.content.map((function(t, n) {
                        return t.state === s.Ready ? null : t.state === s.Active ? l.a.createElement("div", {
                            className: "active",
                            key: n
                        }, e._renderActiveElement(t, n)) : t.state === s.Done ? l.a.createElement("div", {
                            className: "rendered",
                            key: n
                        }, e._renderStaticElement(t, n)) : null
                    }
                    ))
            }
        }, {
            key: "_getScreen",
            value: function(e) {
                return this.state.screens.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "_parseScreenContent",
            value: function(e) {
                var t = this;
                return e ? e.map((function(e) {
                    return t._parseScreenContentElement(e)
                }
                )).flat().map((function(e) {
                    return t._generateScreenData(e)
                }
                )) : []
            }
        }, {
            key: "_generateScreenData",
            value: function(e) {
                var t = Object(g.a)()
                  , n = e.onLoad || null;
                if (n) {
                    var a = Object(d.a)(this.state.loadingQueue);
                    a.push(e.id),
                    this.setState({
                        loadingQueue: a
                    })
                }
                var i = n ? s.Unloaded : s.Ready;
                if ("string" === typeof e)
                    return {
                        id: t,
                        type: r.Text,
                        text: e,
                        state: i,
                        onLoad: n
                    };
                if (e.type)
                    switch (e.type.toLowerCase()) {
                    case "text":
                        return {
                            id: t,
                            type: r.Text,
                            text: e.text,
                            className: e.className,
                            state: i,
                            onLoad: n
                        };
                    case "link":
                        return {
                            id: t,
                            type: r.Link,
                            target: e.target,
                            className: e.className,
                            text: e.text,
                            state: i,
                            onLoad: n
                        };
                    case "image":
                    case "bitmap":
                        return {
                            id: t,
                            type: r.Bitmap,
                            src: e.src,
                            alt: e.alt,
                            className: e.className,
                            state: i,
                            onLoad: n
                        };
                    case "prompt":
                        return {
                            id: t,
                            type: r.Prompt,
                            prompt: e.prompt || "$> ",
                            className: e.className,
                            commands: e.commands,
                            state: i,
                            onLoad: n
                        };
                    case "toggle":
                        return {
                            id: t,
                            type: r.Toggle,
                            states: e.states,
                            state: i
                        };
                    default:
                        return
                    }
            }
        }, {
            key: "_parseScreenContentElement",
            value: function(e) {
                return "string" === typeof e ? e.split("\n") : e
            }
        }, {
            key: "_renderActiveElement",
            value: function(e, t) {
                var n = this
                  , a = e.type;
                if (a === r.Text || a === r.Link || a === r.Prompt) {
                    var i = a === r.Prompt ? e.prompt : e.text;
                    return l.a.createElement(S, {
                        key: t,
                        text: i,
                        onComplete: function() {
                            return n._activateNextScreenData()
                        },
                        onNewLine: this._handleTeletypeNewLine,
                        autocomplete: !1,
                        className: e.className
                    })
                }
                if (a === r.Toggle) {
                    var s = e.states.find((function(e) {
                        return !0 === e.active
                    }
                    )).text;
                    return l.a.createElement(S, {
                        key: t,
                        text: s,
                        onComplete: function() {
                            return n._activateNextScreenData()
                        },
                        onNewLine: this._handleTeletypeNewLine,
                        autocomplete: !1,
                        className: e.className
                    })
                }
                if (a === r.Bitmap) {
                    return l.a.createElement(N, {
                        key: t,
                        className: e.className,
                        src: e.src,
                        alt: e.alt,
                        onComplete: function() {
                            return n._activateNextScreenData()
                        }
                    })
                }
                return this._activateNextScreenData(),
                null
            }
        }, {
            key: "_renderStaticElement",
            value: function(e, t) {
                var n = this
                  , a = e.className || ""
                  , i = function() {
                    n._setElementState(e.id, s.Done)
                };
                if (e.type === r.Text) {
                    var c = e.text.length ? e.text : "\0";
                    return l.a.createElement(k, {
                        key: t,
                        className: a,
                        text: c,
                        onRendered: i
                    })
                }
                if (e.type === r.Link)
                    return l.a.createElement(_, {
                        key: t,
                        text: e.text,
                        target: e.target,
                        className: a,
                        onClick: this._handleLinkClick,
                        onRendered: i
                    });
                if (e.type === r.Bitmap) {
                    return l.a.createElement(N, {
                        key: t,
                        className: a,
                        src: e.src,
                        alt: e.alt,
                        onComplete: function() {
                            n._setElementState(e.id, s.Done)
                        },
                        autocomplete: !0
                    })
                }
                return e.type === r.Prompt ? l.a.createElement(x, {
                    key: t,
                    className: a,
                    disabled: !!this.state.activeDialogId,
                    prompt: e.prompt,
                    commands: e.commands,
                    onCommand: this._handlePromptCommand
                }) : e.type === r.Toggle ? l.a.createElement(A, {
                    key: t,
                    className: a,
                    states: e.states
                }) : null
            }
        }, {
            key: "_changeScreen",
            value: function(e) {
                this._unloadScreen();
                var t = this._getScreen(e).content[0];
                t.state = s.Active,
                this.setState({
                    activeScreenId: e,
                    activeElementId: t.id,
                    status: c.Active
                })
            }
        }, {
            key: "_setElementState",
            value: function(e, t) {
                var n = this._getScreen(this.state.activeScreenId).content.find((function(t) {
                    return t.id === e
                }
                ));
                n && n.state !== t && (n.state = t)
            }
        }, {
            key: "_unloadScreen",
            value: function() {
                this._getScreen(this.state.activeScreenId).content.forEach((function(e) {
                    e.state = s.Unloaded
                }
                ))
            }
        }, {
            key: "_getScreenDataById",
            value: function(e) {
                return this._getScreen(this.state.activeScreenId).content.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "_activateNextScreenData",
            value: function() {
                var e = this._getScreen(this.state.activeScreenId)
                  , t = e.content.findIndex((function(e) {
                    return e.state === s.Active
                }
                ));
                -1 !== t && (e.content[t].state = s.Done,
                t !== e.content.length - 1 ? (e.content[t + 1].state = s.Active,
                this.setState({
                    activeElementId: e.content[t + 1].id
                })) : this.setState({
                    activeElementId: null,
                    status: c.Done
                }))
            }
        }, {
            key: "_getActiveScreenData",
            value: function() {
                var e = this._getScreen(this.state.activeScreenId)
                  , t = e.content.findIndex((function(e) {
                    return e.state === s.Active
                }
                ));
                if (t > -1)
                    return e.content[t];
                var n = e.content[0];
                return n.state === s.Done || n.state === s.Unloaded ? null : (n.state = s.Active,
                n)
            }
        }, {
            key: "_setActiveScreenDataByIndex",
            value: function(e) {
                this._getScreen(this.state.activeScreenId).content[e].state = s.Active
            }
        }, {
            key: "_toggleDialog",
            value: function(e) {
                this.setState({
                    activeDialogId: e || null
                })
            }
        }, {
            key: "_handlePromptCommand",
            value: function(e, t) {
                if (t && t.type)
                    switch (t.type) {
                    case "link":
                        t.target && this._changeScreen(t.target);
                        break;
                    case "dialog":
                        t.target && this._toggleDialog(t.target);
                        break;
                    case "console":
                        console.log(e, t)
                    }
            }
        }, {
            key: "_renderDialog",
            value: function() {
                var e = this
                  , t = this.state
                  , n = t.activeDialogId
                  , a = t.dialogs;
                if (!n)
                    return null;
                var i = a.find((function(e) {
                    return e.id === n
                }
                ));
                if (!i)
                    return null;
                return l.a.createElement(C, {
                    text: i.content,
                    onClose: function() {
                        return e._toggleDialog()
                    }
                })
            }
        }, {
            key: "_handleTeletypeNewLine",
            value: function() {}
        }, {
            key: "_handleLinkClick",
            value: function(e, t) {
                if ("string" !== typeof e) {
                    var n = e.find((function(e) {
                        return e.shiftKey === t
                    }
                    ));
                    if (n) {
                        if ("dialog" === n.type)
                            return void this._toggleDialog(n.target);
                        if ("link" === n.type)
                            return void this._changeScreen(n.target)
                    }
                } else
                    this._changeScreen(e)
            }
        }]),
        n
    }(o.Component);
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    m.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(D, null)), document.getElementById("root")),
    "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
        e.unregister()
    }
    )).catch((function(e) {
        console.error(e.message)
    }
    ))
}
], [[14, 1, 2]]]);
//# sourceMappingURL=main.7199ae4b.chunk.js.map
