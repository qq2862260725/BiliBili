(function() {
    /**
     * Tween.js
     *
     * t: current time（当前时间）；
     * b: beginning value（初始值）；
     * c: change in value（变化量）； // 是变化的量，并不是结束值
     * d: duration（持续时间）。
     * you can visit 'http://easings.net/zh-cn' to get effect
     */
    window.Tween = {
        Linear: function(t, b, c, d) {
            return c * t / d + b;
        },
        Quad: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        Cubic: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        Quart: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        Quint: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        Sine: {
            easeIn: function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        Expo: {
            easeIn: function(t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function(t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        Circ: {
            easeIn: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        Elastic: {
            easeIn: function(t, b, c, d, a, p) {
                var s;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (typeof p == "undefined") p = d * .3;
                if (!a || a < Math.abs(c)) {
                    s = p / 4;
                    a = c;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function(t, b, c, d, a, p) {
                var s;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (typeof p == "undefined") p = d * .3;
                if (!a || a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function(t, b, c, d, a, p) {
                var s;
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (typeof p == "undefined") p = d * (.3 * 1.5);
                if (!a || a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        },
        Back: {
            easeIn: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        Bounce: {
            easeIn: function(t, b, c, d) {
                return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut: function(t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function(t, b, c, d) {
                if (t < d / 2) {
                    return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                } else {
                    return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                }
            }
        }
    }
})();

(function() {
    /**
     * 动画函数封装  (不足：目前只传递了一个执行函数即对应的时间函数，待增加针对同时进行的多个动画使用多个时间函数)
     * 
     * @param number form 初始位置 必须
     * @param number to 最终位置 必须
     * @param number during 动画时间 大于0 单位 秒 必须
     * @param function animateFn 动画内容  必须 其参数是通过内部取出来的，所以在使用上需要注意
     * @param function mathFn 动画函数  非必须 默认 linear
     */
    window.mathAnimation = function(from, to, during, animateFn, mathFn) {
        if (arguments.length < 4) return console.error('至少需要4个参数');
        if (typeof from !== 'number') return console.error('请传入有效的参数 #1');
        if (typeof to !== 'number') return console.error('请传入有效的参数 #2');
        if (typeof during !== 'number' || during <= 0) return console.error('请传入有效的参数 #3');
        if (typeof animateFn !== 'function') return console.error('请传入有效的参数 #4');
        if (typeof mathFn !== 'function') return console.error('请传入有效的参数 #5');
        if (!window.Tween) return console.error('缺少Teeen对象');

        if (!window.requestAnimationFrame) {
            requestAnimationFrame = function(fn) {
                setTimeout(fn, 1000 / 60);
            };
        }

        mathFn = mathFn || Tween.Linear;

        var start = Date.now();

        var _step = function() {
            var cur = (Date.now() - start) / 1000;
            var value = mathFn(cur, from, to - from, during); // Tween中需求的第三个参数是变化的量，而非终点值
            if (cur <= during) {
                animateFn(value, cur)
                requestAnimationFrame(_step);
            } else {
                animateFn(to, cur, true);
            }
        }
        _step();
    }
})();

Object.keys(Tween).forEach(function(item) {
	console.log(typeof Tween[item]);
	if (typeof Tween[item] === 'function') {
		createCanvasCurve(Tween[item], item);
	} else {
		Object.keys(Tween[item]).forEach(function(subItem) {
			createCanvasCurve(Tween[item][subItem], item + '.' + subItem);
		})
	}
});

function createCanvasCurve(mathFn, str) {
	var p = document.createElement('p');
	p.innerText = 'Tween.' + str;
	document.body.appendChild(p);

	createCurve(mathFn);
	createAnimation(mathFn)
}

function createCurve(mathFn) {
	var canvas = getCanvas();	

	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'red';

	var length = 200;
	var originX = 50;
	var originY = 50;

	drawOther(ctx, originX, originY, length)

	for (var i = 0; i < length; i++) {
		ctx.beginPath();
		var x = i + originX;
		var y = mathFn(x - originX, originY, length, length); // 注意此处传递进入的第一个参数跟下方的arc使用的参数x的值是不一样的
		ctx.arc(x, y, 1, 0, Math.PI * 2);
		ctx.fill();
	}
}

function getCanvas() {
	var canvas = document.createElement('canvas');
	canvas.width = 300;
	canvas.height = 300;
	canvas.style.border = '1px solid #ccc';
	document.body.appendChild(canvas);
	return canvas;
}

function createAnimation(mathFn) {
	var canvas = getCanvas();

	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'red';

	var length = 200;
	var originX = 50;
	var originY = 50;
	var during = 2;
	var rectWidth = 5;

	var draw = function() {
	    var value = arguments[0] || 1; // 传递过来的值
	    var cur = arguments[1];
	    var end = arguments[2]; // 结束

	    if (end) {
	        console.log('This animation is over');
	        mathAnimation(50, 250, during, draw, mathFn); // 结束了再次运行
	    }

	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    drawOther(ctx, originX, originY, length);
	    ctx.fillRect(cur / during * length + originX - rectWidth / 2, value - rectWidth / 2, rectWidth, rectWidth);
	};

	mathAnimation(50, 250, during, draw, mathFn);
}

function drawOther(ctx, x, y, length) {
	var text = '0,0';
	ctx.font = '15px Arial';
	ctx.fillText(text, x - (ctx.measureText(text).width), y);
	ctx.fillText('x', x + length + 5, y);
	ctx.fillText('y', x - 10, y + length);
	ctx.beginPath();
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(x, y, length, length);
}