!(function () {
	'use strict';
	function e(e, t, n, a) {
		return new (n || (n = Promise))(function (r, o) {
			function s(e) {
				try {
					c(a.next(e));
				} catch (e) {
					o(e);
				}
			}
			function i(e) {
				try {
					c(a.throw(e));
				} catch (e) {
					o(e);
				}
			}
			function c(e) {
				var t;
				e.done
					? r(e.value)
					: ((t = e.value),
					  t instanceof n
							? t
							: new n(function (e) {
									e(t);
							  })).then(s, i);
			}
			c((a = a.apply(e, t || [])).next());
		});
	}
	function t(e, t) {
		var n,
			a,
			r,
			o,
			s = {
				label: 0,
				sent: function () {
					if (1 & r[0]) throw r[1];
					return r[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(o = { next: i(0), throw: i(1), return: i(2) }),
			'function' == typeof Symbol &&
				(o[Symbol.iterator] = function () {
					return this;
				}),
			o
		);
		function i(o) {
			return function (i) {
				return (function (o) {
					if (n)
						throw new TypeError('Generator is already executing.');
					for (; s; )
						try {
							if (
								((n = 1),
								a &&
									(r =
										2 & o[0]
											? a.return
											: o[0]
											? a.throw ||
											  ((r = a.return) && r.call(a), 0)
											: a.next) &&
									!(r = r.call(a, o[1])).done)
							)
								return r;
							switch (
								((a = 0), r && (o = [2 & o[0], r.value]), o[0])
							) {
								case 0:
								case 1:
									r = o;
									break;
								case 4:
									return s.label++, { value: o[1], done: !1 };
								case 5:
									s.label++, (a = o[1]), (o = [0]);
									continue;
								case 7:
									(o = s.ops.pop()), s.trys.pop();
									continue;
								default:
									if (
										!((r = s.trys),
										(r = r.length > 0 && r[r.length - 1]) ||
											(6 !== o[0] && 2 !== o[0]))
									) {
										s = 0;
										continue;
									}
									if (
										3 === o[0] &&
										(!r || (o[1] > r[0] && o[1] < r[3]))
									) {
										s.label = o[1];
										break;
									}
									if (6 === o[0] && s.label < r[1]) {
										(s.label = r[1]), (r = o);
										break;
									}
									if (r && s.label < r[2]) {
										(s.label = r[2]), s.ops.push(o);
										break;
									}
									r[2] && s.ops.pop(), s.trys.pop();
									continue;
							}
							o = t.call(e, s);
						} catch (e) {
							(o = [6, e]), (a = 0);
						} finally {
							n = r = 0;
						}
					if (5 & o[0]) throw o[1];
					return { value: o[0] ? o[1] : void 0, done: !0 };
				})([o, i]);
			};
		}
	}
	var n = function () {
			return (n =
				Object.assign ||
				function (e) {
					for (var t, n = 1, a = arguments.length; n < a; n++)
						for (var r in (t = arguments[n]))
							Object.prototype.hasOwnProperty.call(t, r) &&
								(e[r] = t[r]);
					return e;
				}).apply(this, arguments);
		},
		a = {
			getHackathonData: function (e) {
				return r.get(r._PREFIX + 'hackathons/' + e).then(function (e) {
					var t, n;
					if (!(null == e ? void 0 : e.error))
						return {
							uuid: e.uuid,
							slug: e.slug,
							name: e.name,
							regEndsAt:
								null ===
									(t =
										null == e
											? void 0
											: e.hackathon_setting) ||
								void 0 === t
									? void 0
									: t.reg_ends_at,
							regStartsAt:
								null ===
									(n =
										null == e
											? void 0
											: e.hackathon_setting) ||
								void 0 === n
									? void 0
									: n.reg_starts_at,
							devfolioOfficial:
								(null == e ? void 0 : e.devfolio_official) ||
								!1,
						};
					throw e.error;
				});
			},
			signIn: function (e, t, n) {
				return r
					.post(r._PREFIX + 'users/signin', {
						username: e,
						password: t,
						captcha_response: n,
					})
					.then(function (t) {
						var n;
						if (!(null == t ? void 0 : t.error))
							return {
								username: t.username,
								accessToken: t.access_token,
								refreshToken: t.refresh_token,
							};
						var r = [];
						switch (
							null === (n = t.error) || void 0 === n
								? void 0
								: n.message
						) {
							case 'Invalid username':
								r.push({
									field: 'id',
									message:
										"Sorry, we couldn't find an account with that username.",
								});
								break;
							case 'Account with this email or username does not exists':
								r.push({
									field: 'id',
									message:
										"Sorry, we couldn't find an account with that " +
										(e.includes('@')
											? 'email'
											: 'username'),
								});
								break;
							case 'Invalid Password':
								r.push({
									field: 'password',
									message:
										"Sorry, that password isn't right.",
								});
								break;
							case 'Invalid captcha response':
								r.push({
									field: 'generic',
									message:
										'Sorry, we could not sign you in as the captcha validation failed.',
								});
								break;
							case 'Login attempts over':
								r.push({
									field: 'generic',
									message:
										'The maximum number of login attempts has been reached. Please try again in an hour.',
								});
						}
						throw (
							(0 === r.length &&
								(a.captureException(t.error),
								r.push({
									field: 'generic',
									message:
										'Sorry, we could not sign you in at the moment.',
								})),
							r)
						);
					});
			},
			register: function (e, t, n) {
				return r
					.post(r._PREFIX + 'users', {
						email: t,
						password: n,
						username: e,
					})
					.then(function (e) {
						var t, n, r, o, s;
						if (!(null == e ? void 0 : e.error))
							return {
								username: e.username,
								accessToken: e.access_token,
								refreshToken: e.refresh_token,
							};
						var i = [];
						if (
							'The server received a request that could not be processed.' ===
							(null === (t = e.error) || void 0 === t
								? void 0
								: t.message)
						) {
							var c =
								null === (n = e.error) || void 0 === n
									? void 0
									: n.source;
							if (null == c ? void 0 : c.email)
								switch (
									null === (r = c.email) || void 0 === r
										? void 0
										: r.msg
								) {
									case 'email already in use':
										i.push({
											field: 'email',
											message:
												'Someone (maybe you?) has already created an account using this email.',
										});
										break;
									case 'must be an email':
										i.push({
											field: 'email',
											message:
												"This doesn't appear to be a valid email address. Please try a different email address.",
										});
								}
							if (null == c ? void 0 : c.username)
								switch (
									null === (o = c.username) || void 0 === o
										? void 0
										: o.msg
								) {
									case 'username not available':
										i.push({
											field: 'username',
											message:
												'Another user with this username already exists. Please try a different username.',
										});
										break;
									case 'invalid username':
										i.push({
											field: 'username',
											message:
												'Username must be minimum 2 characters long, and should not contain spaces or special characters.',
										});
								}
							if (null == c ? void 0 : c.password)
								switch (
									null === (s = c.password) || void 0 === s
										? void 0
										: s.msg
								) {
									case 'password must be atleast 8 characters long':
										i.push({
											field: 'password',
											message:
												'Password must be minimum 8 characters long.',
										});
								}
						}
						throw (
							(0 === i.length &&
								(a.captureException(e.error),
								i.push({
									field: 'generic',
									message:
										'Sorry, we could not create your account at the moment.',
								})),
							i)
						);
					});
			},
			apply: function (e, t, o) {
				var s = 'users/' + e + '/hackathon/' + t + '/apply';
				return r
					.post(
						r._PREFIX + s,
						{},
						n(n({}, r._HEADERS), { access_token: o })
					)
					.then(function (e) {
						var t;
						if (!(null == e ? void 0 : e.error)) return e;
						var n = {
							field: 'generic',
							message: 'Unable to apply to this hackathon.',
						};
						switch (
							null === (t = e.error) || void 0 === t
								? void 0
								: t.message
						) {
							case "Can't apply, hackathon registrations are not open.":
								n.message =
									'Sorry, the hackathon registrations are not open.';
								break;
							case "Can't apply, hackathon registration are close.":
								n.message =
									'Sorry, this hackathon is no longer accepting new registrations.';
								break;
							default:
								a.captureException(e.error);
						}
						throw n;
					});
			},
			captureException: function (e) {
				var t;
				null ===
					(t =
						null === window || void 0 === window
							? void 0
							: window.Sentry) ||
					void 0 === t ||
					t.captureException(e);
			},
		},
		r = {
			_PREFIX: 'https://devfolio.co/api/',
			_HEADERS: { 'Content-Type': 'application/json; charset=utf-8' },
			get: function (e, t) {
				return (
					void 0 === e && (e = ''),
					fetch(e, {
						method: 'GET',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'same-origin',
						headers: t || r._HEADERS,
						referrer: 'no-referrer',
					})
						.then(function (e) {
							return e.json();
						})
						.catch(function (e) {
							throw e;
						})
				);
			},
			post: function (e, t, n) {
				return (
					void 0 === e && (e = ''),
					void 0 === t && (t = {}),
					fetch(e, {
						method: 'POST',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'same-origin',
						headers: n || r._HEADERS,
						referrer: 'no-referrer',
						body: JSON.stringify(t),
					})
						.then(function (e) {
							var t = e.headers.get('content-type');
							return t && t.includes('application/json')
								? e.json()
								: e;
						})
						.catch(function (e) {
							throw e;
						})
				);
			},
		},
		o = {
			padding: 0,
			border: 0,
			margin: 0,
			height: '44px',
			width: '312px',
		},
		s = {
			position: 'fixed',
			left: 0,
			top: 0,
			display: 'none',
			width: '100%',
			height: '100%',
			zIndex: 2147483647,
		},
		i = {
			position: 'relative',
			height: '100%',
			width: '100%',
			display: 'block',
			backgroundColor: 'transparent',
			padding: 0,
			border: 0,
			margin: 0,
		},
		c = {
			_CLASSNAME: 'devfolio-button-iframe',
			_SANDBOX:
				'allow-scripts allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation',
			loadedFrameIds: [],
			createFrame: function (e, t) {
				var n = document.createElement('iframe');
				return (
					(n.src =
						'https://apply.devfolio.co/v2/button?' +
						new URLSearchParams(t).toString()),
					(n.title = 'Apply with Devfolio'),
					(n.className = c._CLASSNAME),
					Object.assign(n.style, o),
					n.setAttribute('sandbox', c._SANDBOX),
					n.addEventListener('load', function () {
						c.loadedFrameIds.push(e);
					}),
					n
				);
			},
			allFrames: function () {
				return document.querySelectorAll('.' + c._CLASSNAME);
			},
			postMessage: function (e, t) {
				c.allFrames().forEach(function (n, a) {
					function r() {
						n.contentWindow.postMessage(
							{ type: e, payload: t },
							'*'
						);
					}
					c.loadedFrameIds.includes(a)
						? r()
						: n.addEventListener('load', r);
				});
			},
		},
		l = {
			_ID: 'devfolio-overlay-iframe',
			_CONTAINER_ID: 'devfolio-overlay-container',
			_SANDBOX:
				'allow-scripts allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups',
			hasLoaded: !1,
			createFrame: function () {
				var e = document.createElement('iframe');
				(e.src = 'https://apply.devfolio.co/v2/overlay'),
					(e.title = 'Continue your hackathon application'),
					(e.id = l._ID),
					Object.assign(e.style, i),
					e.setAttribute('sandbox', l._SANDBOX),
					e.addEventListener('load', function () {
						l.hasLoaded = !0;
					});
				var t = document.createElement('div');
				return (
					(t.id = l._CONTAINER_ID),
					Object.assign(t.style, s),
					t.appendChild(e),
					t
				);
			},
			frame: function () {
				return document.querySelector('#' + l._ID);
			},
			container: function () {
				return document.querySelector('#' + l._CONTAINER_ID);
			},
			postMessage: function (e, t) {
				var n = l.frame();
				function a() {
					n.contentWindow.postMessage({ type: e, payload: t }, '*');
				}
				l.hasLoaded ? a() : n.addEventListener('load', a);
			},
		};
	if (
		'https:' !== window.location.protocol &&
		!(function () {
			var e = window.location.hostname.split('.');
			return 'localhost' === e[e.length - 1];
		})()
	)
		throw new Error(
			'Could not initialize the Apply Now script over a non-secure connection.'
		);
	function u() {
		return document.querySelectorAll('.apply-button');
	}
	window.addEventListener('message', function (e) {
		var t = e.isTrusted,
			n = e.data;
		if (t && (null == n ? void 0 : n.type)) {
			var a = l.container();
			switch (n.type) {
				case 'OPEN_OVERLAY':
					a.style.display = 'block';
					break;
				case 'CLOSE_OVERLAY':
					a.style.display = 'none';
					break;
				default:
					console.log('(SDK) Received unexpected message.', e);
			}
		}
	}),
		(function () {
			e(this, void 0, void 0, function () {
				var e, n, r;
				return t(this, function (t) {
					switch (t.label) {
						case 0:
							return (
								t.trys.push([0, 3, , 4]),
								[
									4,
									new Promise(function (e, t) {
										var n = u();
										if (n.length > 0) {
											var a = n[0].getAttribute(
												'data-hackathon-slug'
											);
											'string' == typeof a &&
												a.length > 0 &&
												e(a);
										}
										t(
											"Could not find an element with the class name 'apply-button' that has a data-hackathon-slug attribute."
										);
									}),
								]
							);
						case 1:
							return (
								(e = t.sent()),
								u().forEach(function (e, t) {
									e.parentNode.replaceChild(
										c.createFrame(t, e.dataset),
										e
									);
								}),
								document.body.appendChild(l.createFrame()),
								[4, a.getHackathonData(e)]
							);
						case 2:
							return (
								(n = t.sent()),
								c.postMessage('SEND_HACKATHON_DATA', n),
								l.postMessage('SEND_HACKATHON_DATA', n),
								[3, 4]
							);
						case 3:
							return (
								'Failed to fetch' ===
								(null == (r = t.sent()) ? void 0 : r.message)
									? c.postMessage('ENABLE_DEV_MODE')
									: console.log('(SDK)', r),
								[3, 4]
							);
						case 4:
							return [2];
					}
				});
			});
		})();
})();
//# sourceMappingURL=sdk.js.map
