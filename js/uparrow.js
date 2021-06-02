//スクロール量を取得する関数
function getScrolled() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('page-top');

//ボタンの表示・非表示
window.onscroll = function () {
  (getScrolled() > 100) ? topButton.classList.add('fade-in') : topButton.classList.remove('fade-in');
};

//トップに移動する関数

$(function () {
  $('#page-top').click(function () {
    //id名#pagetopがクリックされたら、以下の処理を実行
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  });
});