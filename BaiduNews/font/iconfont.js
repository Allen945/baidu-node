;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.132336 776.99128C885.010459 772.869403 751.58361 639.442554 677.598572 565.457516c36.308951-50.146097 57.728796-111.777783 57.728796-178.420599 0-168.212096-136.362714-304.57481-304.57481-304.57481S126.177747 218.823797 126.177747 387.035894s136.362714 304.57481 304.57481 304.57481c70.178339 0 134.801149-23.74889 186.303126-63.629179 74.093509 74.093509 206.134801 206.134801 210.543204 210.543204 6.139837 6.139837 37.691437 17.045211 58.499345-3.762697C906.905118 813.955146 894.845455 782.704398 889.132336 776.99128zM213.199707 387.035894c0-120.151497 97.402377-217.553874 217.552851-217.553874s217.552851 97.402377 217.552851 217.553874-97.402377 217.552851-217.552851 217.552851S213.199707 507.187391 213.199707 387.035894z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M576 896c0 35.346-28.654 64-64 64s-64-28.654-64-64L448 576 128 576c-35.346 0-64-28.654-64-64s28.654-64 64-64l320 0L448 128c0-35.346 28.654-64 64-64s64 28.655 64 64l0 320 320 0c35.346 0 64 28.654 64 64s-28.654 64-64 64L576 576 576 896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M648.992 567.872C720.416 522.4 768 442.72 768 352c0-141.152-114.848-256-256-256s-256 114.848-256 256c0 89.952 46.72 169.024 117.056 214.72C206.944 620 64 764.608 64 960l64 0c0-210.56 198.56-352 384-352 181.28 0 384 150.528 384 352l64 0C960 773.024 814.048 623.616 648.992 567.872zM320 352c0-105.888 86.112-192 192-192s192 86.112 192 192-86.112 192-192 192S320 457.888 320 352z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ShareBaidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M224.576 532.48c95.552-20.48 81.92-136.576 81.92-160.448-3.392-37.568-51.2-105.792-112.64-102.4C115.328 276.48 105.088 389.12 105.088 389.12c-13.632 54.592 23.936 163.84 119.488 143.36z m102.4 201.344c-3.392 6.848-10.24 27.392-3.392 47.808 10.24 40.96 44.352 40.96 44.352 40.96h51.2v-122.88h-54.592c-23.936 6.848-34.176 27.328-37.568 34.112z m78.528-392.512c54.592 0 95.552-61.44 95.552-136.512 0-75.136-44.352-136.576-95.552-136.576-54.656 0-95.616 61.44-95.616 136.576-3.392 75.072 40.96 136.512 95.616 136.512z m228.672 6.848c71.68 10.24 116.032-68.288 126.272-122.88 10.24-58.048-37.504-122.88-88.704-136.576-51.2-10.24-112.64 68.288-119.488 122.88-6.848 64.896 10.24 129.728 81.92 136.576z m174.08 341.312S699.008 604.16 634.24 512c-88.768-136.576-211.648-81.92-252.608-10.24C340.608 569.984 275.84 614.4 265.6 624.64c-10.24 10.24-133.12 78.464-105.792 201.344 27.264 122.88 122.88 119.488 122.88 119.488s71.68 6.848 153.6-10.24c81.92-17.088 153.6 3.392 153.6 3.392s194.56 64.896 245.76-61.44c54.592-122.88-27.328-187.712-27.328-187.712z m-331.072 184.32H350.848c-54.592-10.24-75.072-47.808-78.464-54.592-3.456-6.848-17.088-37.568-10.24-85.376 23.872-75.072 88.704-81.92 88.704-81.92H419.2v-81.92h58.048v303.808z m235.52 0h-143.36c-54.656-13.632-58.048-54.592-58.048-54.592v-160.448h58.048v143.36c3.392 13.632 23.872 17.088 23.872 17.088h58.048v-160.448h61.44v215.04z m204.8-426.688c0-27.264-23.936-109.184-109.248-109.184-85.312 0-95.552 78.464-95.552 133.12 0 51.2 3.392 126.272 109.184 122.88 105.856-3.392 95.616-119.488 95.616-146.816z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)