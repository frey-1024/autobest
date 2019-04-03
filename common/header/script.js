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

function HandleHeader(data) {
  this.data = data;
  this.el = {
    menuBtn: document.getElementById('testId'),
    headerDrawer: document.getElementById('header-drawer'),
    drawerWrap: document.getElementById('drawer-wrap')
  };
  this.el.menuBtn.onclick = function() {
    addClass(this.el.headerDrawer, 'open');
  }.bind(this);
  this.el.drawerWrap.onclick = function() {
    removeClass(this.el.headerDrawer, 'open');
  }.bind(this);
}

/**
 * 更新header中依赖的数据
 * @param data
 */
HandleHeader.prototype.refresh = function(data) {
  this.data = data;
};

module.exports = {
  HandleHeader: HandleHeader
};
