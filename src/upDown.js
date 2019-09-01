;(function(window) {
  $(document).on('click', '#standLoad', function() {
    let triggerDelay = 100
    let removeDelay = 1000
    //存放多个下载的url，
    let url_arr = [
      `http://localhost/下午：01浏览器的分类和内核.avi`,
      `http://localhost/下午：01浏览器的分类和内核.avi`,
      `http://localhost/下午：01浏览器的分类和内核.avi`,
      `http://localhost/下午：01浏览器的分类和内核.avi`,
      `http://localhost/下午：01浏览器的分类和内核.avi`
    ]

    url_arr.forEach(function(item, index) {
      _createIFrame(item, index * triggerDelay, removeDelay)
    })
    function _createIFrame(url, triggerDelay, removeDelay) {
      //动态添加iframe，设置src，然后删除
      setTimeout(function() {
        var frame = $(
          '<iframe style="display: none;" class="multi-download"></iframe>'
        )
        frame.attr('src', url)
        $(document.body).after(frame)
        setTimeout(function() {
          frame.remove()
        }, removeDelay)
      }, triggerDelay)
    }
  })
})(window)
