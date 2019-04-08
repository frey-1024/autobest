function hasClass(el, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length <= 0) return false; // 当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + el.className + ' ');
}

function addClass(el, cls) {
  if (!hasClass(el, cls)) {
    el.className = el.className === '' ? cls : el.className + ' ' + cls;
  }
}

function removeClass(el, cls) {
  if (hasClass(el, cls)) {
    let newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    el.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

function getElementLeft(el) {
  let actualLeft = el.offsetLeft;
  let current = el.offsetParent;
  // 如果当前元素不是根元素
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(el) {
  let actualTop = el.offsetTop;
  let current = el.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

// 动画执行时间
const timeout = 300;

function HandleHeader(data) {
  this.data = data;
  this.el = {
    menuBtn: document.getElementById('header-menu'),
    headerDrawer: document.getElementById('header-drawer'),
    drawerWrap: document.getElementById('drawer-wrap'),
    closeDrawer: document.getElementById('close-drawer'),
    closePopover: document.getElementById('close-popover'),
    headerPopover: document.getElementById('header-popover'),
    popoverWrap: document.getElementById('popover-wrap'),
    contactBtn: document.getElementById('contact-btn'),
    popoverArrow: document.getElementById('popover-arrow')
  };
  this.drawerInit();
  this.popoverInit();
}

/**
 * 原型方法
 * @param data
 */
HandleHeader.prototype = {
  constructor: HandleHeader,
  refresh: function(data) {
    this.data = data;
  },
  exiting: function(ev, el) {
    ev.stopPropagation();
    addClass(el, 'exiting');
    removeClass(el, 'open');
    setTimeout(function() {
      removeClass(el, 'exiting');
    }, timeout);
  },
  drawerInit: function() {
    const self = this;
    self.el.menuBtn.onclick = function() {
      addClass(self.el.headerDrawer, 'open');
    };
    self.el.drawerWrap.onclick = function(ev) {
      ev.stopPropagation();
    };
    self.el.headerDrawer.onclick = function(ev) {
      self.exiting(ev, self.el.headerDrawer);
    };
    self.el.closeDrawer.onclick = function(ev) {
      self.exiting(ev, self.el.headerDrawer);
    };
  },
  popoverInit: function() {
    const right = 15;
    const self = this;
    self.el.contactBtn.onclick = function(ev) {
      const el = ev.target;
      const top = getElementTop(el) + el.offsetHeight + 10;
      // 箭头的位置
      const arrowRight =
        window.screen.width -
        (getElementLeft(el) + el.offsetWidth / 2) -
        right -
        self.el.popoverArrow.offsetWidth / 2;
      self.el.popoverArrow.style.right = arrowRight + 'px';
      self.el.popoverWrap.style.right = right + 'px';
      self.el.popoverWrap.style.top = top + 'px';
      addClass(self.el.headerPopover, 'open');
    };
    self.el.popoverWrap.onclick = function(ev) {
      ev.stopPropagation();
    };
    self.el.headerPopover.onclick = function(ev) {
      self.exiting(ev, self.el.headerPopover);
    };
    self.el.closePopover.onclick = function(ev) {
      self.exiting(ev, self.el.headerPopover);
    };
  }
};

module.exports = {
  HandleHeader: HandleHeader
};
