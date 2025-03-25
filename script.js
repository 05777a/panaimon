<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>chぱないもん サムネイルガチャ</title>
    <link rel="stylesheet" href="style2.css" />
  </head>
  <body>
    <div class="container">
    <header>
      <h1 id="header">chぱないもん サムネイルガチャ</h1>
      <button id="menu-icon">&#9776;</button>
      <nav id="nav-menu">
        <ul>
          <li id="li1">ホーム</li>
          <li id="li2"><a href="about.html">このサイトについて</a></li>
        </ul>
      </nav>
    </header>
    <div class="inner">

    <main>
    <button id="buttonA">ランダムサムネイル表示</button>

    <br />
    <img id="thumbnail" src="" alt="YouTube サムネイル" />
    <br />
    <form>
      <!-- <input type="text" id="form" class="title_text" name="form" /> -->
      <!-- <textarea id="form" class="title_text"></textarea> -->
      <div id="input-container"></div>
    </form>

    <div id="title-container">
      <p
        id="title"
        class="title_text"
        style="visibility: hidden; margin: 0"
      ></p>
    </div>
    <button id="buttonB">タイトル表示</button>
    <div>
      <h2>履歴</h2>
      <div id="history"></div>
    </div>



   </main>
  </div>

  <!-- <footer>
  </footer> -->

  </div>

  <script src="script.js"></script>
  </body>

</html>
