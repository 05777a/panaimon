// --- 初期設定 ---
document.getElementById("thumbnail").src = "white.jpg";

// 動画IDとタイトルのデータ
const videos = [
  {videoId: 'u8h6kv40TBg', title: '『ドーンマンポートの入り口』を探してみた【原神LunaV】', publishedAt: '2026-03-30'},
  {videoId: 'UAUbuw7zvoQ', title: '徒歩で地方伝説全部倒したら何時間かかる？【原神】', publishedAt: '2026-03-29'},
  {videoId: '6sARfN0e764', title: '【予告番組】あかん、好きになっちゃう！好きになっちゃうよ！【原神】', publishedAt: '2026-03-28'},
  {videoId: '_mn094MR12Y', title: '【30章】ずっと賑やかなヴィルヴィにメンタルケアをしてもらう艦長【今から崩壊3rd】', publishedAt: '2026-03-28'},
  {videoId: 'mK88EPsiEQs', title: '【予告番組】『あの港』が超絶クオリティでやってきたぞー！！【原神】', publishedAt: '2026-03-27'},
  {videoId: 'YcREPCOqRQ4', title: 'キノコンイベ終了後にもう一度訪れると…【原神LunaV】', publishedAt: '2026-03-26'},
  {videoId: 'NKzAMCLBAHQ', title: 'リンネアさん聞こえますか？オレ達から貴方への輪舞曲です【原神LunaV】', publishedAt: '2026-03-25'},
  {videoId: 'BRbV9i1ccxg', title: '3周年！9000人！この夏、最高の冒険がキミを待っている【YouTube実況】', publishedAt: '2026-03-25'},
  {videoId: 'goAeYvMmm1s', title: '恐怖！超巨大ジョッキ持ち込み大団長！【原神LunaV】', publishedAt: '2026-03-24'},
  {videoId: '8RtbTjZB6dI', title: 'あの『超新星バーテンダー』再び！【原神LunaV】', publishedAt: '2026-03-23'},
  {videoId: 'DKUOW7zW2ZM', title: '【暁&風立ち】聖遺物ストーリー読み読みラジオ【原神LunaV】', publishedAt: '2026-03-22'},
  {videoId: '_l3hd8yaKu4', title: '『毎年恒例のアレ』をやってみた【原神LunaV】', publishedAt: '2026-03-21'},
  {videoId: 'CmIIynaeVFg', title: '【29章】〇〇〇が死んだ【今から崩壊3rd】', publishedAt: '2026-03-21'},
  {videoId: 'BFc-Bh5gQcE', title: 'モンドに『あの仲間たち』が大集合した結果ｗｗ【原神LunaV】', publishedAt: '2026-03-20'},
  {videoId: 'JwO7NGxEMmA', title: '物語の「もうひとつの可能性」【原神LunaV】', publishedAt: '2026-03-19'},
  {videoId: 'OGWFH7vbjmI', title: '【名探偵】『来年のテイワット』を超予想してみた【原神LunaV】', publishedAt: '2026-03-18'},
  {videoId: 'Pta_gQQnWIQ', title: '『謎の雷蛍術師』が現れてしまうｗｗ【原神LunaV】', publishedAt: '2026-03-17'},
  {videoId: 'degyW-VdWDU', title: '何やってんだよ！大団長！【原神LunaV】', publishedAt: '2026-03-16'},
  {videoId: '7cFadS8Vy-M', title: '最高の回転で魅せろ！昇り炎天選手権！【原神】', publishedAt: '2026-03-15'},
  {videoId: '5WIBD9ltNJk', title: '【検証】モンドへの凱旋、実際何日かかるの？【原神LunaV】', publishedAt: '2026-03-14'},
  {videoId: 'PerLVsa-qJs', title: '【29章】あたしたちの始まり【今から崩壊3rd】', publishedAt: '2026-03-14'},
  {videoId: 'GqiNq9mZ6vw', title: '【原神】シャルロットのつかいかた２', publishedAt: '2026-03-13'},
  {videoId: 'IBVHT2q3c6Q', title: 'おかえり、大団長【原神LunaV】', publishedAt: '2026-03-12'},
  {videoId: '7xrMIOFMFng', title: '『血染めの騎士』の最後の物語【原神LunaV】', publishedAt: '2026-03-11'},
  {videoId: 'm4iYzqALrCE', title: '『北風』の名を継ぐ騎士【原神LunaV】', publishedAt: '2026-03-10'},
  {videoId: 'KoihypKsLdE', title: '月光の祝福がないキプマキの崖はめっちゃ危険なのでは？【原神LunaV】', publishedAt: '2026-03-09'},
  {videoId: '9HRQ36sPEX0', title: '【私的】地脈巡りのすゝめ【原神】', publishedAt: '2026-03-08'},
  {videoId: 'UdS81dc1Up4', title: 'ヤモリくんはなぁ… 幽境に来たらアカンわ…【原神LunaV】', publishedAt: '2026-03-07'},
  {videoId: 'ekPNVO5_Ffw', title: '【29章】とんでもないボリュームの新章が始まったんだがｗｗ【今から崩壊3rd】', publishedAt: '2026-03-07'},
  {videoId: 'fhkZzgOUKmA', title: '選ばれたのは『リンネア』でした【原神LunaV】', publishedAt: '2026-03-06'},
  {videoId: 'gXdud-o3tOQ', title: 'アルティメットをいろんなファルカで遊んでみた【原神LunaV】', publishedAt: '2026-03-05'},
  {videoId: '_0G_bd5srxY', title: '幽境の激戦『アルティメット』に初見で突撃した結果ｗｗｗ【原神LunaV】', publishedAt: '2026-03-04'},
  {videoId: 'TFHDnNigqYE', title: 'あのキャラクターが復活してました【原神LunaIV】', publishedAt: '2026-03-03'},
  {videoId: '1DtRgjoUdNM', title: '【裏】プレイ1700日越え旅人が最近やってること【原神】', publishedAt: '2026-03-02'},
  {videoId: 'WbS81Tt_Hj4', title: '『オール限定完凸編成』で遊んでみたら役割大渋滞！【原神LunaV】', publishedAt: '2026-03-01'},
  {videoId: 'H1r9KNiAtEc', title: '最強の足腰を持つ男【原神LunaV】', publishedAt: '2026-02-28'},
  {videoId: 'PQqtAgyUExk', title: '『古の楽園』のコンテンツをすべて読み、ついに出発する艦長【今から崩壊3rd】', publishedAt: '2026-02-28'},
  {videoId: 'KlauwaW_nJM', title: '完凸フリーナ入りの『水ファルカ』がマジで好き【原神LunaV】', publishedAt: '2026-02-27'},
  {videoId: 'Zwa0_TZZum4', title: '【感想】『完凸ファルカ』で10時間くらい遊んでみた【原神LunaV】', publishedAt: '2026-02-26'},
  {videoId: 'PxMBdBA6It4', title: 'ファルカをいきなり『完凸 三冠 Lv100』で遊んでみた【原神LunaV】', publishedAt: '2026-02-25'},
  {videoId: '2cmJANdwcg0', title: '『大団長ファルカ』完凸するまで無限ガチャ！【原神LunaV】', publishedAt: '2026-02-25'},
  {videoId: 't1MW-k7sDmw', title: '【感想回】霜月より、ナド・クライに愛をこめて【原神LunaIV】', publishedAt: '2026-02-24'},
  {videoId: 'GRlKpOx8H-g', title: '【悲報】兹白さん、もう普通に空を飛び始めてしまうｗ【原神LunaIV】', publishedAt: '2026-02-24'},
  {videoId: 'avK3jxku5Vw', title: '白馬の仙人、璃月港で白馬の仙人を見る！【原神LunaIV】', publishedAt: '2026-02-23'},
  {videoId: 'BMy7Xl2xvlY', title: '【大苦戦】『激戦の旅路』条件見なくても取り切れる説【原神LunaIV】', publishedAt: '2026-02-23'},
  {videoId: 'jGNcD83_cc8', title: '『伴月紀聞』とは今週でお別れです【原神LunaIV】', publishedAt: '2026-02-23'},
  {videoId: 'Jt13CUf-BTI', title: '白馬の仙人、マジパネェ！【原神LunaIV】', publishedAt: '2026-02-22'},
  {videoId: '6wxCHdk3txE', title: '『あのNPC』がボイス付きで帰ってきました【原神LunaIV】', publishedAt: '2026-02-22'},
  {videoId: '1LrAIrKyHGI', title: '月隠しの謎現象『詹諸呑月』を追え！【原神LunaIV】', publishedAt: '2026-02-21'},
  {videoId: 'Dl8nAZYsf78', title: '罰として20週走らせる ←実際にやってみた【原神LunaIV】', publishedAt: '2026-02-21'},
  {videoId: 'fcpxz2lU1kw', title: '『君にしかできないこと』【今から崩壊3rd】', publishedAt: '2026-02-21'},
  {videoId: 'GUzOXRmaZUI', title: '『最強トレコン』を使わずコンプリートを狙った結果ｗｗｗ【原神LunaIV】', publishedAt: '2026-02-20'},
  {videoId: 'pdZEZe98-G0', title: '最終クエスト『英雄の証』で星になった一般片手剣【モンハンワイルズ】', publishedAt: '2026-02-20'},
  {videoId: 'YV6DwELKPZg', title: 'ライトキーパーの巡回には『隠し要素』がありました【原神LunaIV】', publishedAt: '2026-02-19'},
  {videoId: 'cVhoeT-rtkA', title: '今期の螺旋が結構難しかったです【原神LunaIV】', publishedAt: '2026-02-19'},
  {videoId: '5OdE7q-STQ4', title: '『識者の証』をすべて揃えた結果…【原神LunaIV】', publishedAt: '2026-02-18'},
  {videoId: '_r7YgltpeMc', title: '歴戦王になった『アルシュベルド』が流石に最強でした【モンハンワイルズ】', publishedAt: '2026-02-18'},
  {videoId: '9OMevFgmIqM', title: 'すべてが『あの男の伏線』だった新地方伝説を知っていますか？【原神LunaIV】', publishedAt: '2026-02-17'},
  {videoId: 'SA5HassWOrU', title: 'ピラミダさん、凄いことになってしまうｗｗｗ【原神LunaIV】', publishedAt: '2026-02-16'},
  {videoId: 'p2yPGhfSq7s', title: 'ファルカの性能紹介が来たので見てみた【原神】', publishedAt: '2026-02-16'},
  {videoId: '7wM81eBFARI', title: 'キプマキの崖はとんでもないものを封印していきました【原神LunaIV】', publishedAt: '2026-02-15'},
  {videoId: 'VMYTNt646ZY', title: '【予告番組】『凱旋』するぞ お前ら！【原神】【最高】', publishedAt: '2026-02-14'},
  {videoId: 'vAhDYIwlNCI', title: '『もう一人の〇〇〇〇』【今から崩壊3rd】', publishedAt: '2026-02-14'},
  {videoId: 'qA7y0qQ3pd4', title: '【予告番組】ファルカさん、顧客の要望に150%でお応えしてしまうｗｗｗ【原神】', publishedAt: '2026-02-13'},
  {videoId: '432Qrs4loOg', title: '『エンブラの柱』ってそんなに怖いものだったの？【原神LunaIV】', publishedAt: '2026-02-12'},
  {videoId: 'gcdIGPrITYw', title: '『変奏』？変奏って何のことよ…【原神LunaIV】', publishedAt: '2026-02-12'},
  {videoId: 'MJl3kbUjuAE', title: 'ガチ素人が3ヶ月間お絵描きしてみた結果', publishedAt: '2026-02-11'},
  {videoId: 'amRMnN31_eA', title: '『ホラー全振り』の世界任務に心を躍らせる旅人【原神LunaIV】', publishedAt: '2026-02-10'},
  {videoId: 'jrsAdTMYMyQ', title: 'おそらくドラゴンスパインを見てきた者達だ 面構えが違う【原神LunaIV】', publishedAt: '2026-02-09'},
  {videoId: 'JfCHlISKhnI', title: '乗れ【原神LunaIV】', publishedAt: '2026-02-08'},
  {videoId: '-Xo0lXEFxt4', title: '西風騎士団の『タル運び』で不正を働いた結果ｗｗｗ【原神LunaIV】', publishedAt: '2026-02-07'},
  {videoId: '07srooKVfFw', title: '『気分はどう？』【今から崩壊3rd】', publishedAt: '2026-02-07'},
  {videoId: '3JdPAwkl4gA', title: '旅人さん、出会って2秒で調査分隊に所属してしまうｗｗ【原神LunaIV】', publishedAt: '2026-02-06'},
  {videoId: 'Boj_STSnapw', title: '月へ 『To the Moon』を実況プレイ ④終', publishedAt: '2026-02-05'},
  {videoId: 'dxRb5znTaKE', title: '月へ 『To the Moon』を実況プレイ ③', publishedAt: '2026-02-04'},
  {videoId: 'dXjBdwf1dzM', title: '月へ 『To the Moon』を実況プレイ ②', publishedAt: '2026-02-03'},
  {videoId: 'qSKn30hmqxw', title: '月へ 『To the Moon』を実況プレイ ①', publishedAt: '2026-02-02'},
  {videoId: 'XopiXOXIZ60', title: 'To the Moon【原神LunaIV】', publishedAt: '2026-02-01'},
  {videoId: 'iXAhpfC2AVw', title: 'とりあえず50時間くらいプレイしたけど神ゲーでした【アークナイツエンド:フィールド】', publishedAt: '2026-02-01'},
  {videoId: '8uvQaHrTG1o', title: '私たちの家【原神LunaIV】', publishedAt: '2026-01-31'},
  {videoId: '8xYgOD2xfQA', title: '戦闘を全てだと思っていた英傑【今から崩壊3rd】', publishedAt: '2026-01-31'},
  {videoId: 'nilDaYnrz-U', title: '昼も夜も月光が我らを結ばん【原神LunaIV】', publishedAt: '2026-01-30'},
  {videoId: 'grDTiq3dUY4', title: '迷子の小さな鳩【原神LunaIV】', publishedAt: '2026-01-29'},
  {videoId: 'ZgjnvQKrYqM', title: '世界を救うための術式【原神LunaIV】', publishedAt: '2026-01-28'},
  {videoId: '5YlQj6jWFKs', title: '月光に思いを乗せて【原神LunaIV】', publishedAt: '2026-01-27'},
  {videoId: 'Z6Ahe4gw5No', title: '魔神任務の『影のMVP』が確定してるんだがｗｗ【原神LunaIV】', publishedAt: '2026-01-26'},
  {videoId: 'xxYgf_siWds', title: '駄目だ！許可しない！瞬影レンズがいないと駄目なんだ！【原神LunaIV】', publishedAt: '2026-01-25'},
  {videoId: '62wiucYssS4', title: '神子、月感電やって。【原神LunaIV】', publishedAt: '2026-01-24'},
  {videoId: 'lteD4jTwxzQ', title: 'どうかお許し「ください」【今から崩壊3rd】', publishedAt: '2026-01-24'},
  {videoId: 'AeO6WloykxE', title: 'とんでもないゲームが生まれてしまった【アークナイツ:エンドフィールド】', publishedAt: '2026-01-23'},
  {videoId: 'HcMXAuE0o7Y', title: '【生態】ライトキーパーを観察してみたら…【原神LunaIV】', publishedAt: '2026-01-22'},
  {videoId: 'XZLGXkdc-Y8', title: '新週ボス『博士』をとりあえず100回倒してみた【原神LunaIV】', publishedAt: '2026-01-21'},
  {videoId: 'jVvt4SepUWg', title: '最強の『おばあちゃん』に遭遇した結果ｗｗｗ【原神LunaIV】', publishedAt: '2026-01-20'},
  {videoId: '1qOUoFD_USY', title: '【悲報】新精鋭『闇の漁師』さん、完全に狩られる側へ…【原神LunaIV】', publishedAt: '2026-01-19'},
  {videoId: 'u29WdubBtnQ', title: '最新ボス『昏き魘夢の主』の華麗なムーブを刮目せよ！【原神LunaIV】', publishedAt: '2026-01-18'},
  {videoId: 'L7JmJ8xsfww', title: '何やらとんでもない世界任務に触れてしまう旅人【原神LunaIV】', publishedAt: '2026-01-17'},
  {videoId: 'ccRt0B_EQ7I', title: '【楽園3章】自称『最弱』の英傑【今から崩壊3rd】', publishedAt: '2026-01-17'},
  {videoId: 'NT64uJhjnkI', title: '巡回中のライトキーパーはどこに行くの？【原神LunaIV】', publishedAt: '2026-01-16'},
  {videoId: 'i9MkqBHrzl8', title: 'ネムリヒツジさん、やはり『あの生物』の面影を漂わせてしまうww【原神LunaIV】', publishedAt: '2026-01-15'},
  {videoId: 'J6U0THavv54', title: 'すまん、ピラミダってどうやって行くの？【原神LunaIV】', publishedAt: '2026-01-14'},
  {videoId: 'jBnKGPpvorg', title: 'コロンビーナ爆誕の裏であの『伝説のバグ』が修正されてしまうｗｗ【原神LunaIV】', publishedAt: '2026-01-14'},
  {videoId: 'DeauVubuAew', title: '突入前夜！LunaⅠ世界任務を思い出そうツアー！【原神LunaIII】', publishedAt: '2026-01-13'},
  {videoId: '1fYsmJHK-4A', title: '君たち、『炎魂戦記』って知ってるか？【原神LunaIII】', publishedAt: '2026-01-12'},
  {videoId: 'CxYttC3V37Q', title: 'ラジオしてみた【原神】', publishedAt: '2026-01-11'},
  {videoId: 'dOqDynDJPZA', title: 'あなたが犯人ですよね？ドーヴェントさん【原神LunaIII】', publishedAt: '2026-01-11'},
  {videoId: 'MbHLDmRQgpk', title: '新コンテンツ『魔女の課題』をやってみた【原神LunaIII】', publishedAt: '2026-01-10'},
  {videoId: 'zVXt-LkrCpU', title: '【28章】「あなた」の話をしましょう【今から崩壊3rd】', publishedAt: '2026-01-10'},
  {videoId: 'xbEcwdY_8d4', title: '準備はいいか？オレはできてる【原神LunaIII】', publishedAt: '2026-01-09'},
  {videoId: 'ufe4b8B_QkM', title: '週ボス『召使』とは今週でお別れです【原神LunaIII】', publishedAt: '2026-01-08'},
  {videoId: 'cxJc3KMatsI', title: '『ドゥリン』が書く物語【原神LunaIII】', publishedAt: '2026-01-07'},
  {videoId: 'PRkQswaq1Yw', title: '物語の終わり【原神LunaIII】', publishedAt: '2026-01-06'},
  {videoId: 'J9SoQA3L83A', title: 'シムランカメンバーが再集結した結果ｗｗ【原神LunaIII】', publishedAt: '2026-01-05'},
  {videoId: 'uldW3bJ1XfA', title: '魔女執筆の『小さな魔女と消えない炎』を読む【原神LunaIII】', publishedAt: '2026-01-04'},
  {videoId: 'ursBHuzXhPQ', title: '【予告番組】じゃあ、直接5倍の情報量で…【原神】', publishedAt: '2026-01-03'},
  {videoId: 'VKEtFON2_oI', title: '【28章】たった一人の彼女【今から崩壊3rd】', publishedAt: '2026-01-03'},
  {videoId: 'XM83oCUlPqU', title: '【予告番組】開いたー！！！！！！【原神】', publishedAt: '2026-01-02'},
  {videoId: 'pE0ZuezmYGc', title: '【検証】稲妻の初詣、流石に大変すぎる説【原神】', publishedAt: '2026-01-01'},
  {videoId: 'tLGjE7CMliE', title: '2026年の妹です　今年の抱負をお話しします…', publishedAt: '2026-01-01'},
  {videoId: 'iptx6kCcnLU', title: '【108】除夜のグーシィ・トース【原神】', publishedAt: '2025-12-31'},
  {videoId: '6nDHBM2mPBU', title: '【2025年末】寄り道ぱないもん【原神】', publishedAt: '2025-12-30'},
  {videoId: 'O5r9wOnp-Yc', title: '【2025年】今年遊んだゲームを振り返っちゃおう！【よいお年を】', publishedAt: '2025-12-29'},
  {videoId: '3irfo_g1d-4', title: '【名探偵】コロンビーナの性能を勝手に妄想して楽しもうの会が行われました【原神LunaIII】', publishedAt: '2025-12-28'},
  {videoId: 'hIJ7oVgo5f4', title: '【vlog失敗】パイモンに会いに行ってきたよ【テイワットグッズ2025】', publishedAt: '2025-12-27'},
  {videoId: 'Mko63lXmKR4', title: '【28章】ヒーローになれなかった者【今から崩壊3rd】', publishedAt: '2025-12-27'},
  {videoId: 'Se7nVouVC4Q', title: '『分岐だらけ』のドゥリンの伝説任務がすげぇー！！【原神LunaIII】', publishedAt: '2025-12-26'},
  {videoId: '8C-vXb_fZKg', title: 'ナシャタウンプレゼント配達RTA 8:40【原神】', publishedAt: '2025-12-25'},
  {videoId: 'PSYPkREMif4', title: 'テイワットでいちばん楽しい夜【原神LunaIII】', publishedAt: '2025-12-24'},
  {videoId: 'StU9ha3IQSU', title: '【悲報】仕上げ用魔鉱さん、逝く【原神】', publishedAt: '2025-12-23'},
  {videoId: '1pXYq0GXp3w', title: '【総出演】クルムカケ工房のパフォーマンスが始まった結果ｗｗｗｗ【原神LunaIII】', publishedAt: '2025-12-22'},
  {videoId: 'GlU9BdDVikA', title: '一見、悪徳に見えて、ただモラと原石を貯めているだけの旅人【原神】', publishedAt: '2025-12-21'},
  {videoId: 'YG4B6UkVDQo', title: '祈月の夜の『超サプライズ』がマジで最高過ぎるｗｗｗ【原神LunaIII】', publishedAt: '2025-12-20'},
  {videoId: 'u-D_Q1yGa38', title: '【28章】真の理の律者【今から崩壊3rd】', publishedAt: '2025-12-20'},
  {videoId: 'fTC5-Jl_Rj0', title: 'この名前が嫌いじゃないなら【原神LunaIII】', publishedAt: '2025-12-19'},
  {videoId: 'G_qWGnH25O0', title: '最終追加モンスター『ゴグマジオス』が劇場版過ぎるｗｗｗ【モンハンワイルズ】', publishedAt: '2025-12-18'},
  {videoId: 'LuE2NlZQPck', title: '何が時間の無駄よ！(ﾂﾝﾂﾝ)【原神LunaIII】', publishedAt: '2025-12-17'},
  {videoId: 'S7ilAwA4xyc', title: '『アリス』さん、明らかに〇〇〇〇を越えてしまうｗｗ【原神LunaIII】', publishedAt: '2025-12-16'},
  {videoId: 'RQs6V0TuNrc', title: '『モンド騎士チーム』ついに宇宙船スリープポッドへ…【原神LunaIII】', publishedAt: '2025-12-15'},
  {videoId: 'X2qZ4kJfjLo', title: '【裏】1か月お絵描きと向き合った男、悟りを開く【原神】', publishedAt: '2025-12-14'},
  {videoId: 'Skmio83DrmQ', title: '【再来】恐怖！チーム編成数パンパン男！【原神】', publishedAt: '2025-12-13'},
  {videoId: 'CfrVM14PMF4', title: '【27章】私と一緒に世界を救いましょう！【今から崩壊3rd】', publishedAt: '2025-12-13'},
  {videoId: 'bAe-w-Kia1I', title: '秘聞の館の『限定コンテンツ』が超おもしろい件！【原神LunaIII】', publishedAt: '2025-12-12'},
  {videoId: 'A0OQT9W2lnE', title: 'この動画を見る前に魔神任務を終わらせてくれ！！！【原神LunaIII】', publishedAt: '2025-12-11'},
  {videoId: '3G6N33jcZY8', title: '【ファルカ式】1ヶ月毎日絵を描き続けたらそれなりに上手くなる？【原神】', publishedAt: '2025-12-10'},
  {videoId: 'YgPBPHGuY6A', title: 'ドゥリン無凸確保で勝手に完凸になった人がいます【原神LunaIII】', publishedAt: '2025-12-09'},
  {videoId: 'aAnxmvtU3w0', title: 'おいパイモン、俺とデュオリンゴで勝負しろ【原神×Duolingo】', publishedAt: '2025-12-08'},
  {videoId: 'DTNKf0hqboc', title: '【爆走】『豊穣の邦ｰ猛スピード観光』って本当に可能なの？【原神】', publishedAt: '2025-12-07'},
  {videoId: 'xqzW8d-SdFY', title: '【お知らせもある】愛してくれて、ありがとう【YouTube実況】', publishedAt: '2025-12-06'},
  {videoId: 'atOjSfBgo7U', title: '【27章】私は明日に向かいます【今から崩壊3rd】', publishedAt: '2025-12-06'},
  {videoId: '5YSXQduxCEI', title: '【私的】2025年度MVPキャラクターを表彰します【原神】', publishedAt: '2025-12-05'},
  {videoId: 'F3TvWxzeFYA', title: '冒険の証の『追跡機能』がアップデートされてました【原神LunaIII】', publishedAt: '2025-12-04'},
  {videoId: 'rkYjQzlVtX0', title: 'ボビックさん、大迫力の『新必殺技』を獲得してしまうｗｗ【原神LunaIII】', publishedAt: '2025-12-03'},
  {videoId: 'TxrD9gTDkao', title: '【นักล่า有り】ヤフォダの性能、『タイ語』で見ても大体分かるんじゃね？【原神】', publishedAt: '2025-12-02'},
  {videoId: 'T71X3-aMsFg', title: 'コロンビーナ、ナド・クライが注目するバーテンダーを知る 他【原神LunaII】', publishedAt: '2025-12-01'},
  {videoId: 'qI3S19yIKHY', title: '【v5.8】最高の夏 『テノチズトク』を覚えていますか？【原神】【2025マップ振り返り】', publishedAt: '2025-11-30'},
  {videoId: 'DR1Lu7gxR-0', title: '【v5.5】2025年に実装された新マップを振り返ろう！【原神】【豊穣の邦】', publishedAt: '2025-11-29'},
  {videoId: 'j8EYVbSK_iI', title: '【27章】過去を心に刻み付けるのは【今から崩壊3rd】', publishedAt: '2025-11-29'},
  {videoId: 'wvUKTu56bTk', title: '夜蘭の提示した『輸送ルート』は再現可能なの？【原神LunaII】', publishedAt: '2025-11-28'},
  {videoId: '6e_Zs8IGyBk', title: '原神Only upの『最難関マップ』で9時間沼った結果ｗｗ【原神LunaII】', publishedAt: '2025-11-27'},
  {videoId: 'eUxdSRWdKPA', title: 'トキの王と3つの贈り物【原神LunaII】', publishedAt: '2025-11-26'},
  {videoId: 'oEyBX_cbUrQ', title: '【ﾈｺ】『トキの王 トート』現る！【原神LunaII】', publishedAt: '2025-11-25'},
  {videoId: 'kmoNiSU-sTg', title: 'ところで、ワシの『謎解きバディ』を見てくれ。こいつをどう思う？【原神LunaII】', publishedAt: '2025-11-24'},
  {videoId: 'yQ_p-4XnAtI', title: '『魔女の課題』が楽しみすぎるので妄想しまくろう！【原神】', publishedAt: '2025-11-23'},
  {videoId: '5R6GzXuaBS8', title: '【予告番組】ボビックさん、変わり果てた姿で発見されるｗｗw【原神】', publishedAt: '2025-11-22'},
  {videoId: 'PW-NP77rwmQ', title: '【26章】14年前のあの日【今から崩壊3rd】', publishedAt: '2025-11-22'},
  {videoId: '8xXrJ9TF44M', title: '【予告番組】フィッシュルさん、うっかり終焉を嘆く詩になってしまうｗ【原神】', publishedAt: '2025-11-21'},
  {videoId: 'AhcMJBiQyGA', title: 'ナド・クライのマップ追加、もしかして準備完了？【原神LunaII】', publishedAt: '2025-11-20'},
  {videoId: 'O9TK9w5HRDs', title: '新競技『リズムビート風の翼ストーリー』で新記録樹立！？【原神LunaII】', publishedAt: '2025-11-19'},
  {videoId: 'ap7OE-19_Q0', title: '既視感しかない音ゲーイベントがやってきた結果ｗｗ【原神LunaII】', publishedAt: '2025-11-18'},
  {videoId: 'e5ERSwTVzdA', title: '『アドバンスド・パイモン』出現！【原神LunaII】', publishedAt: '2025-11-17'},
  {videoId: 'k0k9CkZSDUk', title: '『魔神任務読了後に見返したいあれこれ』を読もうの会【原神LunaII】', publishedAt: '2025-11-16'},
  {videoId: '9DTw4qh_v0g', title: '魔神任務の『クリア後』が盛り沢山過ぎるｗｗｗ【原神LunaII】', publishedAt: '2025-11-15'},
  {videoId: 'fN1DHQsNUSE', title: '【26章】諸君、人類の未来のために祝ってくれ【今から崩壊3rd】', publishedAt: '2025-11-15'},
  {videoId: 'VumJVLRkbBU', title: 'エピローグで最高の一年が約束されてしまい、目からクーヴァキを放出する旅人【原神LunaII】', publishedAt: '2025-11-14'},
  {videoId: 'NcPEQCV5x64', title: '普通に詰みになる謎挙動を調査してくれるライノ竜【原神】', publishedAt: '2025-11-13'},
  {videoId: '-6jEa52XGe0', title: '超決戦！月の狩人レリル【原神LunaII】', publishedAt: '2025-11-12'},
  {videoId: 'oTphH_bktl0', title: 'すべてを終わらせる方法【原神LunaII】', publishedAt: '2025-11-11'},
  {videoId: 'i9rnwKzsv9o', title: '新たな幕開け、新たな伝説の始まり【原神LunaII】', publishedAt: '2025-11-10'},
  {videoId: '2TEgjZ0Q4-0', title: '今年の魔神任務がドリームチーム過ぎるｗｗｗ【原神LunaII】', publishedAt: '2025-11-09'},
  {videoId: 'W-Lm9nulCLw', title: 'シャルロット稲妻不法入国RTA 19分45秒【原神】', publishedAt: '2025-11-08'},
  {videoId: 'PejVm4fWzp8', title: '【26章】彼女たちが気付かなかった隅に【今から崩壊3rd】', publishedAt: '2025-11-08'},
  {videoId: '-Lg-wrOCZQ4', title: 'おすすめタブの全てを『興味なし』にするとその先に待つのは何か【X実況】', publishedAt: '2025-11-07'},
  {videoId: '90sZX24SoFg', title: '謎のローグライクゲーでとんでもないバーサーカーを生み出す旅人【原神LunaII】', publishedAt: '2025-11-06'},
  {videoId: 'f6uhmd1UEiU', title: '『今ここで、お前は生まれ変わるんだ。』【原神LunaII】', publishedAt: '2025-11-05'},
  {videoId: 'j90zYOtIW08', title: '月の狩人レリルと『？？？』【原神LunaII】', publishedAt: '2025-11-04'},
  {videoId: 'twH2V3lXEfI', title: '西風騎士団『ファルカ大団長』来たー！！！【原神LunaII】', publishedAt: '2025-11-03'},
  {videoId: 'WZvKYWZkZMY', title: '流行目前！？最近ドハマりしているゲームを紹介します！【原神】#1', publishedAt: '2025-11-02'},
  {videoId: '4nOF_CHsPHI', title: '2年ぶりに復帰して『最強モンスター』を倒すには何乙かかる？【サンブレイク】', publishedAt: '2025-11-02'},
  {videoId: 'moOua6u9xCk', title: '『ラウマでしか見れない会話』が出てきてびっくり【原神】', publishedAt: '2025-11-01'},
  {videoId: 'pTiTjNN9jAY', title: '【26章】君たちが出会った『もう一人の彼』【今から崩壊3rd】', publishedAt: '2025-11-01'},
  {videoId: '1D2mswS8-U4', title: 'ンアーッ！ 命の契約がデカすぎます！【原神LunaII】', publishedAt: '2025-10-31'},
  {videoId: 'PQKis4fWwuM', title: '【怖い】私のユーモアで笑うまで、帰しません【原神】', publishedAt: '2025-10-30'},
  {videoId: 'T5bwHXbh0B8', title: '【名探偵】ちょっと早いですがナド・クライの今後を大予想する会議が行われました【原神LunaII】', publishedAt: '2025-10-29'},
  {videoId: 'T8lg25fXKjE', title: '『ドール』を上限解放してみた【原神LunaII】', publishedAt: '2025-10-28'},
  {videoId: 'cDeWm9ny4dk', title: '何故か見覚えがある『登り続けるゲーム』に絶望する旅人達【原神LunaII】', publishedAt: '2025-10-27'},
  {videoId: '0GgrCMnSF0Y', title: 'ドリーさん、マジで超重要キャラになってしまうｗ【原神】', publishedAt: '2025-10-26'},
  {videoId: '492u8-vOv4k', title: '【暇】歴代最長メンテ中に続々と集まってきた旅人達【原神LunaII】', publishedAt: '2025-10-26'},
  {videoId: 'NR7gg6EeczI', title: '『風の行方（星々の幻境ver）』で大はしゃぎする旅人【原神LunaII】', publishedAt: '2025-10-25'},
  {videoId: 'z4veaRtUtUc', title: '【26章】『知っているのによく知らない相手』【今から崩壊3rd】', publishedAt: '2025-10-25'},
  {videoId: 'hra5yBH2PEA', title: '【収録めっちゃ前】あの『神イベ』が常設化したぞー！！【原神】', publishedAt: '2025-10-24'},
  {videoId: 'CZ75rPmYuxI', title: '超大型コンテンツ『星々の幻境』で遊んでみた【原神LunaII】', publishedAt: '2025-10-23'},
  {videoId: 'HDO8eTosLI0', title: '幽境内定の新ボス『霜夜の空を巡る霊主』がカッコ良すぎるｗｗ【原神LunaII】', publishedAt: '2025-10-22'},
  {videoId: 'DXWpA3DzRZU', title: '歴戦王になった『ヌ・エグドラ』に初見で挑む一般片手剣【モンハンワイルズ】', publishedAt: '2025-10-22'},
  {videoId: 'etnOM40s5Ac', title: 'LunaⅠで追加された書類を読み漁ってLunaⅡに備えよう【原神】', publishedAt: '2025-10-21'},
  {videoId: 'yEQa0sqr3a4', title: '『原神LunaⅠ』を2週間で60時間遊びつくした結果ｗｗｗ', publishedAt: '2025-10-21'},
  {videoId: 'YWrfF1Qhtws', title: '「カチャカチャ軍団さん、やりなさい」「はい…」【原神LunaI】', publishedAt: '2025-10-20'},
  {videoId: '0rGPJU-XI14', title: '60時間探索の末、謎のNPCに深すぎる考察をする旅人【原神LunaI】', publishedAt: '2025-10-20'},
  {videoId: 'FdDD9lQdvk0', title: '最後のエリア『ケラティの眼』でさらなる謎に溺れる旅人【原神LunaI】', publishedAt: '2025-10-19'},
  {videoId: '3OSoQTFFWE0', title: '喋り続けてみた【原神】', publishedAt: '2025-10-19'},
  {videoId: 'yd7gB-cDLTw', title: '最強の陸巡艇『ボビック』が規格外すぎるｗｗ【原神LunaI】', publishedAt: '2025-10-18'},
  {videoId: 'HPgnUXAu5UE', title: '【25章幕間】突然登場した『シュガーズ』に復習不足を悟る新人艦長【今から崩壊3rd】', publishedAt: '2025-10-18'},
  {videoId: 'FMM_PGdEvPc', title: '【超悲報】宝盗イタチさん、普通に兵器を使い始めてしまうｗｗ【原神LunaI】', publishedAt: '2025-10-17'},
  {videoId: 'JiS3DvMGRNU', title: '大人気飲料『フォンタ』さん、勝手に改名を約束されてしまうｗ【原神LunaI】', publishedAt: '2025-10-16'},
  {videoId: '9_b8fuHt4U4', title: '『宙の外』に至った結果…【原神LunaI】', publishedAt: '2025-10-15'},
  {videoId: 'EbjRsEt-O90', title: 'ナド・クライの『長編世界任務』がマジで面白い件【原神LunaI】', publishedAt: '2025-10-14'},
  {videoId: '_xF-SN7Dbso', title: '幻のNPC『ヒディンバ』をガチ捜索した結果ｗｗｗ【原神LunaI】', publishedAt: '2025-10-13'},
  {videoId: 'fKBBNJwhg6A', title: 'レッド・ミラーの後継？謎の怪盗『ニェドチカ』【原神LunaI】', publishedAt: '2025-10-12'},
  {videoId: 'WbyBWjTW6mM', title: 'まさかの『○○なしエンド』に涙が止まらない鬼川兄【深夜放送】③終', publishedAt: '2025-10-12'},
  {videoId: '4XtKGTH5gts', title: '怒涛の連続攻撃に青学の柱になってしまう男【深夜放送】②', publishedAt: '2025-10-11'},
  {videoId: '_4SAiunsVMQ', title: '【予告番組】星々の幻境すげえーー！！ネフェルも来るよ【原神LunaI】', publishedAt: '2025-10-11'},
  {videoId: 'ikLUfyt7xMs', title: '【楽園2章終】ケビンの『とあるエピソード』に心躍らせる艦長とエリシア【今から崩壊3rd】', publishedAt: '2025-10-11'},
  {videoId: 'jeKHl_EB0Rs', title: '結局リスナーが一番怖い【深夜放送】①', publishedAt: '2025-10-10'},
  {videoId: 'geSTxtxMhng', title: '【悲報】『クーヴァキ実験設計局』さん、マジでガバガバ過ぎてしまうｗ【原神LunaI】', publishedAt: '2025-10-10'},
  {videoId: '8uCWWpwCEaA', title: '霜月の子で受け取った『聖物』が闇深過ぎて泣いちゃった【原神LunaI】', publishedAt: '2025-10-09'},
  {videoId: 'rnKSHUcN0oQ', title: '【考えるな、感じろ】第一回！サングマハベイ選手権！【原神】', publishedAt: '2025-10-08'},
  {videoId: 'xVMCeJhcKQg', title: 'ヒーシ島の『隠しエリア』で衝撃の過去に触れる旅人【原神LunaI】', publishedAt: '2025-10-07'},
  {videoId: '2yyw0a8tVVg', title: 'クーヴァキをマスターした『蟹』に出会った結果ｗｗｗ【原神LunaI】', publishedAt: '2025-10-06'},
  {videoId: 'hz_GJ5IiX_o', title: '【探索編】1つ目の世界任務から『超重要NPC』が出てきてクーヴァキが乱れてしまう旅人【原神LunaI】', publishedAt: '2025-10-05'},
  {videoId: 'LDMXD5m40Kc', title: '空月の歌第二幕、絶望の『ラスボス』へ…【原神LunaI】', publishedAt: '2025-10-04'},
  {videoId: 'wrBKsdpJ5F0', title: '本物で、唯一の『メビウス』【今から崩壊3rd】', publishedAt: '2025-10-04'},
  {videoId: 'OFD45bBhWuM', title: '二度と戻れない月の影に落ちた者【原神LunaI】', publishedAt: '2025-10-03'},
  {videoId: '3ZyDOq0rkfM', title: '今年の旅人は何もないのか…？【原神LunaI】', publishedAt: '2025-10-02'},
  {videoId: '82xECJWgNik', title: '【バグなし】零式オメガ ネルスキュラ『未討伐』 サポハンなし一般片手剣【モンハンワイルズ】', publishedAt: '2025-10-02'},
  {videoId: 'tWF6wCruCEc', title: '【バグ？】零式オメガ ネルスキュラ『未討伐』 片手剣ソロ【モンハンワイルズ】', publishedAt: '2025-10-02'},
  {videoId: 'R7bviKgldtM', title: '【結構むずい】幻想シアターの『月諭モード』に初見で挑んでみた【原神LunaI】', publishedAt: '2025-10-01'},
  {videoId: 'iBeqeHM2YPU', title: 'フラッグシップの『懸賞依頼』が面白過ぎるｗｗ【原神LunaI】', publishedAt: '2025-09-30'},
  {videoId: 'eZbiEiN-Vv8', title: '気を付けて、月は嘘をつくから【原神LunaI】', publishedAt: '2025-09-29'},
  {videoId: 'LcVPTgeeRsU', title: '恒例の周年Webイベ『心をたどる旅』がカオス過ぎるｗｗ【原神】', publishedAt: '2025-09-29'},
  {videoId: 'UPGwFiQgGq0', title: '【30乙】通常オメガ サポハンなしソロ 一般片手剣【モンハンワイルズ】', publishedAt: '2025-09-29'},
  {videoId: 'DJ1Dpp74Lg8', title: '【祝】5年間でお世話になった編成で遊んでみた【原神LunaI】', publishedAt: '2025-09-28'},
  {videoId: '1BWLAwUy94Y', title: '幽境の激戦『アルティメット』に本気で挑んだ結果ｗｗｗ【原神LunaI】', publishedAt: '2025-09-27'},
  {videoId: 'OraK_8IiI-I', title: 'あなたは一体何度『死』を？【今から崩壊3rd】', publishedAt: '2025-09-27'},
  {videoId: '-Sr5N4Lcg-s', title: '『ヤフォダプラン』を選んだ結果ｗｗｗ【原神LunaI】', publishedAt: '2025-09-26'},
  {videoId: 'ERFBwFa1fuc', title: '【感想回】ナド・クライの妹です。この度はLuna1が最高過ぎて申し訳ございません。【原神LunaI】', publishedAt: '2025-09-25'},
  {videoId: 'Evfuu2XxrFA', title: 'これは奇跡が交わる夜【原神LunaI】', publishedAt: '2025-09-24'},
  {videoId: 'dUJRvJqaD5s', title: '最強のトレジャーコンパスvs冒険ランク60【原神LunaI】', publishedAt: '2025-09-23'},
  {videoId: 'UvbdaBb8v0M', title: 'キャサリン、ウソだよな…？【原神LunaI】', publishedAt: '2025-09-22'},
  {videoId: 'NxqK13K-3cg', title: '【超悲報】ナタとのお別れ、〇〇過ぎてしまうｗｗｗ【原神LunaI】', publishedAt: '2025-09-21'},
  {videoId: 'C3vbePDMDEM', title: '【リベンジ】のんびり旅行記のキャラに『偶然』会うことは出来るのか？【原神LunaI】', publishedAt: '2025-09-20'},
  {videoId: 'G4cv9Ud0xq8', title: '【楽園2章】『古の楽園に問題が発生した』【今から崩壊3rd】', publishedAt: '2025-09-20'},
  {videoId: 'z3K_pT1IMuo', title: '【ない】パハ島周辺の『浮遊島』に何もないわけないだろ！【原神LunaI】', publishedAt: '2025-09-19'},
  {videoId: 'z-6SifI9bfw', title: 'ラウマの天賦『動物寄せ』が面白過ぎるのですが【原神LunaI】', publishedAt: '2025-09-18'},
  {videoId: 'X2aJoCyOdmw', title: '【EX初見】魔改造されたドレイクに超ゴリ押しを仕掛けた結果ｗｗ【原神LunaI】', publishedAt: '2025-09-17'},
  {videoId: 'OmGa2UN_T1g', title: '新地方伝説『ラスコルニコフ』に初見で挑んでみた【原神LunaI】', publishedAt: '2025-09-17'},
  {videoId: 'dBP-xlf4I5Y', title: '【悲報】新精鋭『ワイルドハント』さん、無事轢かれる【原神LunaI】', publishedAt: '2025-09-16'},
  {videoId: 'E3PKYVrzNkg', title: '【LunaI】追加された聖遺物のストーリーを読もう！【原神】', publishedAt: '2025-09-16'},
  {videoId: '4rhHUpIktk0', title: '最新ボス『ボコボコダッグ』が猟奇的すぎるｗｗ【原神LunaI】', publishedAt: '2025-09-15'},
  {videoId: 'Sn1ZC7_p1Zw', title: 'ナド・クライ初日からスタックしまくってしまう旅人【原神LunaI】', publishedAt: '2025-09-14'},
  {videoId: 'bVR83H_wZIc', title: '新地方伝説『カニ皇帝』に初見で挑んでみた【原神LunaI】', publishedAt: '2025-09-13'},
  {videoId: 'udu9KVGDEh4', title: '【ロビー会話編③】エリシアｰケビン【今から崩壊3rd】', publishedAt: '2025-09-13'},
  {videoId: 'H6EpwoYQoys', title: '超スケールの『ファデュイ新拠点』がデカすぎる…【原神LunaI】', publishedAt: '2025-09-12'},
  {videoId: 'EY9vz4YZ3sk', title: '【遭難】『ナド・クライ』初日からUIとマップを縛った結果ｗｗｗ【原神LunaI】', publishedAt: '2025-09-11'},
  {videoId: 'uXoS6-MH8is', title: 'レベル100にしてみた【原神LunaI】', publishedAt: '2025-09-10'},
  {videoId: '_rl5Qcx_hzQ', title: '空から『ナド・クライ』に行ってみた【原神LunaI】', publishedAt: '2025-09-10'},
  {videoId: '95v5kXLghyE', title: '【アプデ】残りの月反応ってもしかして…？【原神LunaI】', publishedAt: '2025-09-10'},
  {videoId: 'kaCthMG49Xo', title: '【貯モラ男】明日ナド・クライになってそうな所を巡ってみよう【原神5.8】', publishedAt: '2025-09-09'},
  {videoId: 'BCT7EfGODdQ', title: '【特別番組】ナタは『どう』面白かったのか？【原神】', publishedAt: '2025-09-09'},
  {videoId: 'jhL-yMgJnIA', title: '【総決算】一般旅人によるナタエネミー討伐数ランキング【原神5.8】', publishedAt: '2025-09-08'},
  {videoId: 'lyIEa49hGrk', title: 'ナタの敵全部倒したら何モラ？【原神】', publishedAt: '2025-09-07'},
  {videoId: 'NxuUaGYzm6E', title: '【感想回】夏最高！オマエも夏最高と叫びなさい！【原神5.8】', publishedAt: '2025-09-06'},
  {videoId: '4bVtaluMUjU', title: '【ロビー会話編②】スウｰエデンｰメビウス【今から崩壊3rd】', publishedAt: '2025-09-06'},
  {videoId: 'QjW2ks1Y9MM', title: '『ナタ最後の宝箱』を探してみた【原神5.8】', publishedAt: '2025-09-05'},
  {videoId: 'KIagY7bgxBQ', title: 'パイモンさん、フラグ建築が止まらないでしまう…【原神5.8】', publishedAt: '2025-09-04'},
  {videoId: 'BWFfeJgcvq4', title: 'シード実装までなるべくポリクロームを回収しよう【ゼンレスゾーンゼロ】', publishedAt: '2025-09-04'},
  {videoId: 'R17gZBFa9d4', title: '極悪モラロンダリングの手口！『ブラックマネー・ロード』を追え！【原神5.8】', publishedAt: '2025-09-03'},
  {videoId: 'Hk2UlYHGyao', title: '『最後の鍵』【原神5.8】', publishedAt: '2025-09-02'},
  {videoId: 'xa9OgOBY8Ek', title: '『半年前の世界任務』が超必修科目すぎるｗｗ【原神5.8】', publishedAt: '2025-09-01'},
  {videoId: '3nE7CPOjxT0', title: '暗号筒とナド・クライの機械人形『イネファ』【原神5.8】', publishedAt: '2025-08-31'},
  {videoId: 'lFVl9MdW9j8', title: '【予告番組】ナド・クライさん、圧倒的情報量で到来してしまう…【原神】', publishedAt: '2025-08-30'},
  {videoId: 'z7zyfn-qYww', title: '【ロビー会話編①】サクラｰ千劫ｰ華【今から崩壊3rd】', publishedAt: '2025-08-30'},
  {videoId: 'nxpbei5-XLo', title: '5周年目玉アップデートの『鍛錬の道』と『無主の星屑』を見てみた【原神】', publishedAt: '2025-08-30'},
  {videoId: 'vmOhSvevQrg', title: 'ナド・クライで『一番初めに会う』のはフリンズ説【原神】', publishedAt: '2025-08-29'},
  {videoId: 'x4OpnyLCfoM', title: '【私的】ナド・クライ以降もやり続けてそうな日課集【原神】', publishedAt: '2025-08-28'},
  {videoId: 'irSjO_OMq68', title: '『疾風のナナシアン』に完凸マーヴィカで挑んだ結果ｗｗｗ【原神5.8】', publishedAt: '2025-08-27'},
  {videoId: '5agZZz_xVLY', title: 'ナタ編『最終世界任務』怒涛のクライマックスへ…【原神5.8】', publishedAt: '2025-08-26'},
  {videoId: '80uFlJJXDGQ', title: '【にんじん】『ルラ』さん、立派な野菜に育ってしまう…【原神5.8】', publishedAt: '2025-08-25'},
  {videoId: 'AcvZagnp4RA', title: '【全部】ナタ編のアップデートを振り返ろう【原神】', publishedAt: '2025-08-24'},
  {videoId: 'lePgy-JwS8o', title: '『最低設定』で遊んでPS4を回顧しよう！【原神】', publishedAt: '2025-08-23'},
  {videoId: '_FUlc7D6SMI', title: '圧倒的コンテンツ量に漸く気付き、コラリーになってしまった艦長【今から崩壊3rd】', publishedAt: '2025-08-23'},
  {videoId: '1kGx32fw5z8', title: '時と風、燼寂海の謎【原神5.8】', publishedAt: '2025-08-22'},
  {videoId: 'aqRsvBrxo1Q', title: '謎の人物『海内さん』の正体に気付いてしまう旅人【原神5.8】', publishedAt: '2025-08-21'},
  {videoId: 'mE93kTPHMSQ', title: '『夢で見た場所』に行った結果ｗｗｗ【原神5.8】', publishedAt: '2025-08-20'},
  {videoId: 'PKQKf3UAExc', title: '真の冒険者なら『アイドルピピルパン』を目指せ！【原神5.8】', publishedAt: '2025-08-19'},
  {videoId: 'ByHZYOtSF88', title: '『祝福の子』【原神5.8】', publishedAt: '2025-08-18'},
  {videoId: '-ULfhr83ulQ', title: 'カクーク、三面相！【原神5.8】', publishedAt: '2025-08-17'},
  {videoId: '5O1rKgY2rsI', title: '1年間温めていた『例のゲーム』が面白過ぎる【ゼンレスゾーンゼロ】', publishedAt: '2025-08-16'},
  {videoId: '9Uz_H7tVVww', title: '【追憶編③】エリシアｰケビン【今から崩壊3rd】', publishedAt: '2025-08-16'},
  {videoId: 'h1huxxxjbYA', title: '【何これ】一方その頃イファとオロルンは…【原神5.8】', publishedAt: '2025-08-15'},
  {videoId: 'P_nbbGZrqwM', title: 'プ、プルル…（ｷｭﾝ…）【原神5.8】', publishedAt: '2025-08-14'},
  {videoId: 'V4amZ7TbHAk', title: '【傑作】『パイン峠』のアトラクションすげぇー！！【原神5.8】', publishedAt: '2025-08-13'},
  {videoId: 'OdD_mssbmFY', title: '新大型コンテンツ『UGC』が凄そうすぎる件ｗｗ【原神】', publishedAt: '2025-08-13'},
  {videoId: 'XcDw8OXqBCg', title: 'ベネットとスプラトゥーンした結果ｗｗ【原神5.8】', publishedAt: '2025-08-12'},
  {videoId: 'SL2-KBfGb5Q', title: '『自称』原神写真部がサムネ撮影の裏側をお届け！【原神】', publishedAt: '2025-08-11'},
  {videoId: 'MmZd8R4aL6M', title: '【登録者8000人】よりぬきchぱないもん【ありがとう】', publishedAt: '2025-08-10'},
  {videoId: 'U2Dm7Q7pB-M', title: '超大型ボス『バクナワ』にギミックなしで挑んでみたら…【原神5.8】', publishedAt: '2025-08-09'},
  {videoId: 'HsVF7oUOtDs', title: '【追憶編②】スウｰエデンｰメビウス【今から崩壊3rd】', publishedAt: '2025-08-09'},
  {videoId: 'nKAy0gk3ZjI', title: '人々の願いを叶える太陽【原神5.8】', publishedAt: '2025-08-08'},
  {videoId: 'YEG9FLfPRPU', title: '【初見】幽境の激戦『エクストラ』で3時間負け続けた結果ｗｗ【原神5.8】', publishedAt: '2025-08-07'},
  {videoId: 'iPLeCDsFeyg', title: '『新生ベニー冒険団』、出発！【原神5.8】', publishedAt: '2025-08-06'},
  {videoId: 'PlFJAA_WiPo', title: '最強の『〇〇〇〇』に遭遇した結果ｗｗｗ【原神5.8】', publishedAt: '2025-08-05'},
  {videoId: 'KTxyacqf2OU', title: '野菜が出たら即終了 のびのびマーケット【原神5.8】', publishedAt: '2025-08-04'},
  {videoId: 'z0BH9jDUQhk', title: '【選とは】来るver6.0でアプデされて欲しいもの24選！【原神5.8】', publishedAt: '2025-08-03'},
  {videoId: '8tfe4XdUIsg', title: '最新マップ『テノチズトク』さん、様子がおかしい【原神5.8】', publishedAt: '2025-08-02'},
  {videoId: 'eWXk5cdWwOg', title: '【追憶編①】サクラｰ千劫-華【今から崩壊3rd】', publishedAt: '2025-08-02'},
  {videoId: 'YHKvmUAimrQ', title: '幽境内定の『新地方伝説』に初見で挑んでみた【原神5.8】', publishedAt: '2025-08-01'},
  {videoId: 'xCO7xUm-Z6A', title: '【超悲報】『アシャ』さん、すべての竜を過去にしてしまうｗｗ【原神5.8】', publishedAt: '2025-07-31'},
  {videoId: 'h9pmQJiEdZ8', title: '新マップ『テノチズトク』に海から侵入する一般記者【原神5.8】', publishedAt: '2025-07-30'},
  {videoId: 'IiuNTD4Ohhs', title: '【悲報】スタッフさん、逆に精鋭にされないでしまうｗ【原神5.8】', publishedAt: '2025-07-30'},
  {videoId: 'J3RLJ0eV1GU', title: '1バージョンで1モラも使わなければ凄く貯モラできるのでは？【原神5.7】', publishedAt: '2025-07-29'},
  {videoId: 'OD8d7sWwcSc', title: '【感想回】悪い やっぱ辛えわ【原神5.7】', publishedAt: '2025-07-28'},
  {videoId: 'O2guysOzyKo', title: 'アプデ前に『燼寂海とベネット&ウェンティ』について見返そうの巻【原神5.7】', publishedAt: '2025-07-27'},
  {videoId: 'rFktP7EOXZQ', title: '【まとめ見】伝説の香水『アウグストゥス』と復讐の道【原神】', publishedAt: '2025-07-26'},
  {videoId: 'aOO35BfSdlk', title: '『可愛い女の子にできないことはない』【今から崩壊3rd】', publishedAt: '2025-07-26'},
  {videoId: 'zZ6l4aJE5RA', title: '【夏休み】スカークの伝説任務で『読書感想文』書こうぜｗｗ【原神】', publishedAt: '2025-07-25'},
  {videoId: 'CVmOjwpjxCg', title: '【名探偵？】『ナド・クライの場所』を超考察した結果ｗｗｗ【原神】', publishedAt: '2025-07-24'},
  {videoId: 'j7HGunOQ-BI', title: '【誓いｰ終曲】聖遺物のストーリーを全部読んだよ【原神】', publishedAt: '2025-07-23'},
  {videoId: '6KQGl1LWfyw', title: '『歴戦王ウズトゥナ』に初見で行ってみたら可愛いです【モンハンワイルズ】', publishedAt: '2025-07-23'},
  {videoId: '7c6r7iM4CiQ', title: '『ナド・クライPV』来たー！！…ファルカ、それはどういうこと？【原神】', publishedAt: '2025-07-22'},
  {videoId: 'MmQ61ge0X40', title: 'サムネが下手すぎるかもしれません', publishedAt: '2025-07-21'},
  {videoId: 'LZWO8pE9UhM', title: '【灰燼ｰ黒曜】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-21'},
  {videoId: 'CmWaJkU9C-Q', title: 'スカークがくれた『謎のアイテム』をうっかり使ってしまう男【原神5.7】', publishedAt: '2025-07-20'},
  {videoId: 'sIkA_d_UXcY', title: '【予告番組】夏イベ！ナタマップ！燼寂海！最高の夏が来てしまう…【原神】', publishedAt: '2025-07-19'},
  {videoId: 'L0qf2Hv1CVw', title: '【古の楽園編】『彼女が戻ってきた』【今から崩壊3rd】', publishedAt: '2025-07-19'},
  {videoId: 'S6M0hB7NJ2E', title: '「あなた」と「私」の喧嘩と和解【原神5.7】', publishedAt: '2025-07-18'},
  {videoId: '_zc1LqkpdEo', title: 'スカークの『過去編』が流石に辛すぎる…【原神5.7】', publishedAt: '2025-07-17'},
  {videoId: 'KAsy1WYnC4g', title: '【断章ｰ遂げ想】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-17'},
  {videoId: 'fyjCmkWPntg', title: '燼寂海、ウソだよな…？【原神】', publishedAt: '2025-07-16'},
  {videoId: 'ETX_DoEXk8o', title: '『スカーク師匠』に剣の修行をつけてもらった結果ｗｗ【原神5.7】', publishedAt: '2025-07-15'},
  {videoId: 'KEL2QZkiCjg', title: '25章『明日を燃やす炎』 ｰおまけ編ｰ【今から崩壊3rd】', publishedAt: '2025-07-14'},
  {videoId: 'kHfkH_XHFXI', title: '【在りし日ｰ残響】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-14'},
  {videoId: 'ETekSTD59RU', title: '『史上最悪の選択肢』に遭遇し、心が折れてしまう旅人【原神5.7】', publishedAt: '2025-07-13'},
  {videoId: 'hhVWF6FM9qU', title: '【25章】「『文句ある？』」【今から崩壊3rd】', publishedAt: '2025-07-13'},
  {videoId: '7gi72MjP0Yw', title: 'ダインスレイヴ、待望の瞬間！【原神5.7】', publishedAt: '2025-07-12'},
  {videoId: 'L-MVR14naRo', title: '【25章】逃れられない運命【今から崩壊3rd】', publishedAt: '2025-07-12'},
  {videoId: 'a8jcrHCMY38', title: '【名探偵】今年の『夏イベスキン』は誰かを決める会議が行われました【原神5.7】', publishedAt: '2025-07-11'},
  {videoId: 'zS9oTcdV4Fo', title: '謎に包まれた少女『ティレル』と宇宙船の鍵【原神5.7】', publishedAt: '2025-07-10'},
  {videoId: '5A40YicjJKw', title: '【ファントムｰ劇団】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-10'},
  {videoId: 'CLs5zbZ0Rds', title: 'ダジャレを言っているだけで出番が終わってしまった男【原神5.7】', publishedAt: '2025-07-09'},
  {videoId: 'ZxCy_Gg49ks', title: '今年の幕間PVが急に来たー！超妄想を喋る！【原神5.7】', publishedAt: '2025-07-09'},
  {videoId: '3fJuj4wfMdw', title: '【祝復刻】『完凸マーヴィカ』を半年間使い倒したので感想を喋る【原神】', publishedAt: '2025-07-08'},
  {videoId: 'c9t_oMU-5nQ', title: 'テイワットで『流れ星』を見たことはありますか？【原神】', publishedAt: '2025-07-07'},
  {videoId: '6c3EytNHx48', title: '【水仙ｰ花海】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-07'},
  {videoId: 'njjeiMEE38c', title: '【悲報】平蔵さん、迷宮入りした結果大量発生してしまうｗｗ【原神5.7】', publishedAt: '2025-07-06'},
  {videoId: 'oABxTS0TBbA', title: 'のんびり旅行記さん、伏線だらけのイベントになってしまうｗ【原神5.7】', publishedAt: '2025-07-05'},
  {videoId: 'dXIpNC4KY0w', title: '【24章】Ich liebe dich 【今から崩壊3rd】', publishedAt: '2025-07-05'},
  {videoId: '-PI75GvNM0Y', title: '『300人』とマルチしたらプロフのキャラコンプ出来るんじゃね？【原神】', publishedAt: '2025-07-04'},
  {videoId: 'rNRVfcGu_Ug', title: 'のんびり旅行記さん、あまりにも尊いエピソードを作ってしまう…【原神5.7】', publishedAt: '2025-07-03'},
  {videoId: 'jtovZqI_kk8', title: '【砂上ｰ楽園】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-07-03'},
  {videoId: 'wYtH2bbANYI', title: '【神コンテンツ】幽境野良マルチを100回くらい遊んできた【原神5.7】', publishedAt: '2025-07-02'},
  {videoId: 'nI8luNxvC34', title: '『あのキャラ』にナド・クライ&スキンフラグが立ってしまうｗｗ【原神5.7】', publishedAt: '2025-07-01'},
  {videoId: 'a3y_F-OUQ0c', title: '復活した『セルレギオス』の火力は凄い！【モンハンワイルズ】', publishedAt: '2025-06-30'},
  {videoId: 'GX6BlF4Dcww', title: 'そ の た め の 右 脚【モンハンワイルズ】', publishedAt: '2025-06-30'},
  {videoId: '3VOmVuRHclw', title: '【深林ｰ金メッキ】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-30'},
  {videoId: 'uUGqBmKdIIA', title: '【劇場版】幽境の激戦‐ 2人のマスター‐【原神5.7】', publishedAt: '2025-06-29'},
  {videoId: 'znaSURCgbjA', title: '幽境の激戦『野良マルチ』でマスターに挑んだ結果ｗｗｗ【原神5.7】', publishedAt: '2025-06-28'},
  {videoId: 'bD6V_jx7Scw', title: '【24章】『本当にそうだった？』【今から崩壊3rd】', publishedAt: '2025-06-28'},
  {videoId: 't0NGld-gWAY', title: '新イベント『知略バトル大作戦』が面白過ぎるｗｗ【原神5.7】', publishedAt: '2025-06-27'},
  {videoId: 'FXCXoC0x28g', title: '今、『幽境の激戦マルチ』がアツいかもしれない【原神5.7】', publishedAt: '2025-06-26'},
  {videoId: 'IKpH72q4n4o', title: '【辰砂ｰ余響】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-26'},
  {videoId: 'KAtOymfYT-0', title: '新コンテンツ『幽境の激戦』を初見でやってみた【原神5.7】', publishedAt: '2025-06-25'},
  {videoId: 'mvU6ifXAIm8', title: '【知略バトル】最強の『クク竜』が爆誕した結果ｗｗｗ【原神5.7】', publishedAt: '2025-06-24'},
  {videoId: 'ff1ytYNO3cI', title: 'のんびり旅行記のキャラに『偶然』会うことは出来るのか？【原神5.7】', publishedAt: '2025-06-23'},
  {videoId: 'KmbtQxsVGMU', title: '【華館ｰ海染】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-23'},
  {videoId: 'qqFBm7L1MWk', title: 'あと一歩で完成しそうな『一括装備機能』をしっかり使ってみる【原神5.7】', publishedAt: '2025-06-22'},
  {videoId: 'LToYTdlQm4o', title: '呑星の鯨100体誅伐RTA　67分51秒【原神】', publishedAt: '2025-06-21'},
  {videoId: 'XEGDuGZpmHE', title: '【24章】唯一正しいこと【今から崩壊3rd】', publishedAt: '2025-06-21'},
  {videoId: 'gzfmyW1ch00', title: '唐突に実装フラグが立った『武器スキン』を考えてみよう【原神5.7】', publishedAt: '2025-06-20'},
  {videoId: '78q9ExJ8RiQ', title: '今、刹那樹脂（が貰える塵歌壺）がアツい！【原神5.7】', publishedAt: '2025-06-19'},
  {videoId: 'RVocXEXZ9VQ', title: '【しめ縄ｰ絶縁】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-19'},
  {videoId: 'Qy4DangvCjg', title: '絶 対 再 構 築【原神】', publishedAt: '2025-06-18'},
  {videoId: 'iEPT7R-gQ_o', title: 'お前さんが…マイセット機能ちゃんか…？【原神5.7】', publishedAt: '2025-06-18'},
  {videoId: 'lM98fIVa7ts', title: '【感想回】先生、やっぱり俺、フォンテーヌが好きです【原神5.6】', publishedAt: '2025-06-17'},
  {videoId: 'kue8akKobic', title: '【まとめ見】メリュジーヌ先生とどんな姿にもなれる薬【原神】', publishedAt: '2025-06-17'},
  {videoId: 'bFJEr-zo4BM', title: '『フロムゲー素人』が夜の王にソロで挑んでみた結果ｗｗ【ELDENRING NIGHTREIGN】', publishedAt: '2025-06-16'},
  {videoId: 'MS4n9U77HyI', title: '【千岩ｰ蒼白】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-16'},
  {videoId: 'fGs5xnwCOWk', title: 'この見た目で超扱いやすい『無頼漢』に心ときめく初心者夜渡り【ELDENRING NIGHTREIGN】', publishedAt: '2025-06-15'},
  {videoId: 'i0P_-i6FX8s', title: '間章第4幕『背理』 衝撃のラストへ…【原神5.6】', publishedAt: '2025-06-14'},
  {videoId: '2EiiBZEc5TE', title: '【23章】それが私の好きな名前【今から崩壊3rd】', publishedAt: '2025-06-14'},
  {videoId: 'ULAb9ET62FE', title: '初の『レジェンド二刀流』でラスボスに挑む初心者夜渡り【ELDENRING NIGHTREIGN】', publishedAt: '2025-06-13'},
  {videoId: 'SKIfg6vQsqs', title: '書籍『時の旅人&石素人』が面白過ぎるんだが！【原神】', publishedAt: '2025-06-13'},
  {videoId: 'TO2NR8YlxR4', title: 'モンドが最も助けを必要とするとき…【原神5.6】', publishedAt: '2025-06-12'},
  {videoId: 'cHgwktubl6I', title: '【逆飛びｰ沈淪】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-12'},
  {videoId: 'poaAMcG2oy0', title: '『聖啓の塵』にふさわしい聖遺物オーディションが開催されました【原神5.6】', publishedAt: '2025-06-11'},
  {videoId: '89tg5CH_qsA', title: 'モンド防衛戦！あの激アツ名シーン再び【原神5.6】', publishedAt: '2025-06-10'},
  {videoId: 'UX7lDhYLh1M', title: '貴公を『初めてのフロムゲー』に選んで正解でした【ELDENRING NIGHTREIGN】', publishedAt: '2025-06-09'},
  {videoId: '65VNyAt1PD4', title: '【463本】うっかり1年間毎日動画投稿した結果ｗｗｗ', publishedAt: '2025-06-09'},
  {videoId: 'fYdZePYh_5I', title: '【血染めｰ悠久】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-09'},
  {videoId: 'eYYzXmLC3yg', title: '『4年半越し』に解禁された西風騎士団2階で事件発生！？【原神5.6】', publishedAt: '2025-06-08'},
  {videoId: 'mCjh5h1aw-8', title: '【終】鎖を断ち、原初に返る【モンハンワイルズ】', publishedAt: '2025-06-08'},
  {videoId: '9eyXFOm3USA', title: '【予告番組②】燼寂海、お前は夏イベになれ。【原神】', publishedAt: '2025-06-07'},
  {videoId: 'icSepP8hPTU', title: '【予告番組①】『ver5.7PV』が難しすぎて泣いちゃった【原神】', publishedAt: '2025-06-07'},
  {videoId: 'saVbTl9jU9A', title: '【23章】ようこそ、『支配劇場』へ！【今から崩壊3rd】', publishedAt: '2025-06-07'},
  {videoId: 'fPeKFObjt_s', title: 'アルベド、ウソだよな…？【原神5.6】', publishedAt: '2025-06-06'},
  {videoId: 'mi7otA6CJ7U', title: '【名探偵】燼寂海、お前ホンマに来るんか…？【原神5.6】', publishedAt: '2025-06-05'},
  {videoId: 'zMtZ17WuyFg', title: '【魔女ｰ旧貴族】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-05'},
  {videoId: 'nGADKOg85jM', title: '『原神GeoGuessr』に6時間挑み続けた結果ｗｗｗ【lostgamer.io】', publishedAt: '2025-06-04'},
  {videoId: 'fNjKQpr-81s', title: '【吉報】『一括装備機能』さん、1年半の時を経て完成する【原神】', publishedAt: '2025-06-03'},
  {videoId: 'K-h08pyNoJI', title: '『原神版』GeoGuessr？流石に余裕です【lostgamer.io】', publishedAt: '2025-06-02'},
  {videoId: 'ddLQGdym8mM', title: '【楽団ｰ雷怒】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-06-02'},
  {videoId: 'A-VRJOXPht0', title: '【まとめ見】山の王の意志と払うべき代償【原神】', publishedAt: '2025-06-01'},
  {videoId: 'nuc26329lrE', title: '歴戦！歴戦！歴戦！【モンハンワイルズ】', publishedAt: '2025-06-01'},
  {videoId: 'RDm4niu9yHU', title: 'リオセスリにフォンテーヌ廷のおすすめ物件を教えてあげよう！【原神5.6】', publishedAt: '2025-05-31'},
  {videoId: 'Qel31l_CRqQ', title: '【23章】ゼーレにとって、私は何？【今から崩壊3rd】', publishedAt: '2025-05-31'},
  {videoId: '0ecoptq1yq4', title: '【備忘録】☆8ゴア硬すぎてワロタ【モンハンワイルズ】', publishedAt: '2025-05-30'},
  {videoId: 'u2sWf59Vtss', title: '皆さん、デキる監督は『白ひげ』ですよ【原神5.6】', publishedAt: '2025-05-30'},
  {videoId: 'Eby3PUokrXA', title: 'もうこれ一本の映影では？【原神5.6】', publishedAt: '2025-05-29'},
  {videoId: '3yYG7OPGB6s', title: '【剣闘士ｰ翠緑】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-29'},
  {videoId: '_IfW5hPII2o', title: '公式お墨付きの強モンス『☆8ゴア・マガラ』に行ってみた【モンハンワイルズ】', publishedAt: '2025-05-28'},
  {videoId: '2eswBLcjdAU', title: '『龍』と『竜』出会う。【原神5.6】', publishedAt: '2025-05-28'},
  {videoId: 'aYjQsGJQ30I', title: 'Q「原神って始め時ありますか？」【原神】', publishedAt: '2025-05-27'},
  {videoId: '_c8_UZlgP2k', title: 'ナタの漢達、フォンテーヌに大上陸！【原神5.6】', publishedAt: '2025-05-26'},
  {videoId: 'fV8zP87HB3s', title: '【火渡りｰ愛され】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-26'},
  {videoId: 'DNkHg3wrSRI', title: '初歴戦&IBからの刺客に心が躍りまくる男【モンハンワイルズ】', publishedAt: '2025-05-25'},
  {videoId: 'zTjppcxCRJM', title: 'ライノ竜特大ジャンプ選手権で新記録爆誕！？【原神】', publishedAt: '2025-05-24'},
  {videoId: '6SoZsGffUGY', title: '【22章】『完全なる私だ！』【今から崩壊3rd】', publishedAt: '2025-05-24'},
  {videoId: 'Ct2eV-XpCzU', title: '『プクプク獣』を雇った結果ｗｗｗ【原神5.6】', publishedAt: '2025-05-23'},
  {videoId: 'CU8XCtLkIRQ', title: '映影ランドの『NPC』がみんな知り合いな件ｗ【原神5.6】', publishedAt: '2025-05-22'},
  {videoId: 'c4PJOiMAd10', title: '【氷風-雷討ち】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-22'},
  {videoId: 'gIgHR1wJaz4', title: '【超悲報】モニカさん、ありえない量の罪を背負ってしまうｗｗ【原神5.6】', publishedAt: '2025-05-21'},
  {videoId: '9NTVT2xTT2U', title: '【召喚】『オートメーション対局』にハマりすぎてしまったのですが【原神5.6】', publishedAt: '2025-05-20'},
  {videoId: 'j4k82yyFQBg', title: 'ヴァレサさん、うっかり映影ランドで一番稼いでしまうｗ【原神5.6】', publishedAt: '2025-05-19'},
  {videoId: '3ms0wa_7Blk', title: '【学者-祭り】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-19'},
  {videoId: '8ZjU9L3fAtc', title: '突然ケーキに風元素をぶち込み始めてしまう旅人【原神5.6】', publishedAt: '2025-05-18'},
  {videoId: 'yjIPhyawNf4', title: 'アズズさん、とんでもない飯テロを仕掛けてしまう…【モンハンワイルズ】', publishedAt: '2025-05-18'},
  {videoId: '-PEWkpb4jrc', title: '『なんか』と言ったら即終了ver5.5初見探索編【原神】', publishedAt: '2025-05-17'},
  {videoId: 'yKQZUh5zNLU', title: '【21章】『私は万物を変えます』【今から崩壊3rd】', publishedAt: '2025-05-17'},
  {videoId: 'XpqwGj05AUw', title: '【悲報】パイモン社長、たった1期のミスで従業員をクビにしてしまう…【原神5.6】', publishedAt: '2025-05-16'},
  {videoId: 'wILUAnetzaI', title: 'やっぱり次作るなら’’ドゥボール’’か…♠【原神5.6】', publishedAt: '2025-05-15'},
  {videoId: 'OrfPQvNecGQ', title: '【勇士-武人-博徒】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-15'},
  {videoId: 'IHRzr7noKW0', title: '死ぬほど遊んだ『神イベ』がリメイクされた結果ｗｗｗ【原神5.6】', publishedAt: '2025-05-14'},
  {videoId: 'ct-xQVu_11w', title: 'フォンテーヌさん、今度はパワハラが横行してしまうｗ【原神5.6】', publishedAt: '2025-05-13'},
  {videoId: '_Zzhc9y9hmQ', title: '200個以上のマップピン、そのすべてを’’把握’’していますか？【原神5.6】', publishedAt: '2025-05-12'},
  {videoId: 'lL9d2zUVgRo', title: '【教官-亡命者-守護】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-12'},
  {videoId: 'ydqWPJ8Qchg', title: 'ナタで『最もインフレしたコンテンツ』を知っていますか？【原神5.6】', publishedAt: '2025-05-11'},
  {videoId: 'ICrUO34zpKY', title: '『ハンターの意志』を遂行し、念願の上位に至る【モンハンワイルズ】', publishedAt: '2025-05-11'},
  {videoId: 'tzygFLiLPtQ', title: '『全ワープポイント』でトレジャーコンパス使うと何個のモラ箱が出てくる？【原神5.6】', publishedAt: '2025-05-10'},
  {videoId: 'lNRPVTldPPk', title: '【21章】『もしかしたら、どこかの世界では…』【今から崩壊3rd】', publishedAt: '2025-05-10'},
  {videoId: '-rWNOSE-2bk', title: '新週ボス『扉に通ずる対局』のアチーブに初見で挑んでみた【原神5.6】', publishedAt: '2025-05-09'},
  {videoId: '07LVKNrEk7w', title: 'やっぱり燼寂海じゃなかった『謎の島』に行ってみた【原神5.6】', publishedAt: '2025-05-08'},
  {videoId: 'vd5Trk_ANhI', title: '【旅人-奇跡-狂戦士】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-08'},
  {videoId: 'F1xdcdUOGKE', title: 'さらに便利になった『合成台』を使ってみた【原神5.6】', publishedAt: '2025-05-07'},
  {videoId: 'J40JQ1B78T8', title: '1週間ぶりに『ちびの休憩所』に行った結果…【原神5.5】', publishedAt: '2025-05-06'},
  {videoId: 'vAl7X7s-0JI', title: '『団結の魔法』でまたも泣かされる旅人【原神5.5】', publishedAt: '2025-05-06'},
  {videoId: '_YdooaXZV00', title: '人を惑わせる結晶と謎のクク小竜『アントゥ』【原神5.5】', publishedAt: '2025-05-05'},
  {videoId: 'QnFUTiZV2ec', title: '【冒険者-幸運-医者】聖遺物のストーリーを全部読む【原神】', publishedAt: '2025-05-05'},
  {videoId: 'oUtqwAWVFOs', title: '『栄華の祭典』、開幕！【原神5.5】', publishedAt: '2025-05-04'},
  {videoId: 'BrmGjmqQm6k', title: '生き方を見つけた護竜【モンハンワイルズ】', publishedAt: '2025-05-04'},
  {videoId: 'fBOFiYGeCRY', title: '【感想回】ちゃんと大きくなるんだぞ、パイナモン【原神5.5】', publishedAt: '2025-05-03'},
  {videoId: '7K76nxjeFBM', title: '【20章】『ずっと覚えていたいと思います』【今から崩壊3rd】', publishedAt: '2025-05-03'},
  {videoId: 'zV3sk7DwYoQ', title: '取り逃しているアチーブメントを大捜索してみた【原神5.5】', publishedAt: '2025-05-02'},
  {videoId: 'OB2J-kbkn70', title: 'ver6.0はナド・クライ！いろいろ感想を喋ってみた【原神】', publishedAt: '2025-05-01'},
  {videoId: 'kvOA-j-Okl0', title: 'ペンギンさん、地方伝説になってもいじめられてしまうｗ【原神5.5】', publishedAt: '2025-04-30'},
  {videoId: 'cFay4qnR48k', title: '『歴戦王』になったレ・ダウに初見で挑む一般片手剣【モンハンワイルズ】', publishedAt: '2025-04-30'},
  {videoId: '11pmi63iPEo', title: '飯の時間だぁーーッ！！【原神5.5】', publishedAt: '2025-04-29'},
  {videoId: 'JQISdg2aUH0', title: '『呑星の鯨』とは今週でお別れです【原神5.5】', publishedAt: '2025-04-28'},
  {videoId: '62OTjdyg61c', title: 'ライノ竜さん、変わり果てた姿で発見される…【原神5.5】', publishedAt: '2025-04-27'},
  {videoId: '3QPUXiXBW4A', title: 'とんでもない『闇深世界観』に大興奮の一般片手剣【モンハンワイルズ】', publishedAt: '2025-04-27'},
  {videoId: 'TMoUBibKlFw', title: '【予告番組】全人類が燼寂海だと思った謎の島、ボス用だった件ｗｗ【原神】', publishedAt: '2025-04-26'},
  {videoId: '1EHXrK0BKzU', title: '【20章】『自分にできること』【今から崩壊3rd】', publishedAt: '2025-04-26'},
  {videoId: 'JxSIjULXPMY', title: 'どこか既視感のある『喋るキノコン』に出会う一行【原神5.5】', publishedAt: '2025-04-25'},
  {videoId: 'UxOgi1of450', title: '火山を噴火させた状態で部族見聞を進めると…【原神5.5】', publishedAt: '2025-04-24'},
  {videoId: 'kiUCf6Y5k14', title: '古の聖山で謎すぎる死を遂げる旅人【原神5.5】', publishedAt: '2025-04-23'},
  {videoId: 'rm47sxxd0vA', title: '【朗報】トレジャーコンパスさん、もはやすべてを探知し始めてしまうｗ【原神】', publishedAt: '2025-04-23'},
  {videoId: 'KwZJG1JP_L8', title: '劇場版 豊穣の邦 -消えたポッチャリの謎-【原神5.5】', publishedAt: '2025-04-22'},
  {videoId: 'r6dZJkD6SkM', title: '【怪異あり】生配信の映像、『全部録画』でも絶対バレない説！【原神】', publishedAt: '2025-04-21'},
  {videoId: 'koYh-pAdJ54', title: '明らかにマップ外を飛んでいる『秘源の龍像』に乗ると…【原神5.5】', publishedAt: '2025-04-20'},
  {videoId: 'H7nwSaoVMpA', title: '谷底から『黒い炎』がやってくる【モンハンワイルズ】', publishedAt: '2025-04-20'},
  {videoId: '3LwDCMJBnHk', title: '最後に出現した任務名ですべてを察し、壊れてしまった旅人【原神5.5】', publishedAt: '2025-04-19'},
  {videoId: 'MEYq8BDut_c', title: '【19章】もし俺たち二人とも生き残れたら【今から崩壊3rd】', publishedAt: '2025-04-19'},
  {videoId: '5J5M0pJMZ5Y', title: '『■■■■■■■■■』を起動しますか？【原神5.5】', publishedAt: '2025-04-18'},
  {videoId: 'v0VTIjsmsOk', title: '実は神アプデされていた塵歌壺の石回収をやってみた【原神5.5】', publishedAt: '2025-04-17'},
  {videoId: 'x-rdBczhxKA', title: '旅の終着点『聖山の心』が綺麗すぎる【原神5.5】', publishedAt: '2025-04-16'},
  {videoId: 'SJJiSSp_6Ns', title: '古の聖山マップの『一番高いところ』を目指してみたら…【原神5.5】', publishedAt: '2025-04-15'},
  {videoId: '2nWwyKiycYQ', title: '世界任務のギミックで詰んでしまい、無事マグマに沈む旅人【原神5.5】', publishedAt: '2025-04-14'},
  {videoId: 'DNhuWz-vWY0', title: '液体燃素から知恵を授かった結果ｗｗｗ【原神5.5】', publishedAt: '2025-04-13'},
  {videoId: 'PV1CVOflcjo', title: '決戦！生態系の頂点！【モンハンワイルズ】', publishedAt: '2025-04-13'},
  {videoId: 'oQ21l-ZhjHs', title: '火山山頂からアイテムを落とせば豊穣の邦に届くの？【原神5.5】', publishedAt: '2025-04-12'},
  {videoId: 'o0z9-2f7ax4', title: '【18章】氷の風が吼える【今から崩壊3rd】', publishedAt: '2025-04-12'},
  {videoId: 'tZkoLxk4_lI', title: '【激長】質問をいっぱい頂いたので無限に喋るよ【原神】', publishedAt: '2025-04-11'},
  {videoId: 't8aHTtnIiDI', title: 'シャルロットのお誕生日会に『あのキャラ達』が立ち上がりました【原神5.5】', publishedAt: '2025-04-10'},
  {videoId: '_XHIEYBu8TE', title: '火山の内部へ！新マップ『聖都トゥラン』が凄すぎるｗｗ【原神5.5】', publishedAt: '2025-04-09'},
  {videoId: 'CMwQJpEQf2M', title: '『烈力』って、ご存知ですか？【原神5.5】', publishedAt: '2025-04-08'},
  {videoId: 'NlBlF-3BBOw', title: '新マップさん、ペンギンを空から降らせまくってしまうｗｗｗ【原神5.5】', publishedAt: '2025-04-07'},
  {videoId: 'haHXSSPA57U', title: 'トゥラン大火山の『登山ルート』を知っていますか？【原神5.5】', publishedAt: '2025-04-06'},
  {videoId: 'yPLMgaGcI7A', title: '見ていてね、ハンターが何をやるのかを。【モンハンワイルズ】', publishedAt: '2025-04-06'},
  {videoId: 'sD8k_wfhzl8', title: '『タマミツネ』さん、うっかりMR火力を出してしまうｗｗ【モンハンワイルズ】', publishedAt: '2025-04-05'},
  {videoId: 'ukEIFYv3b18', title: 'ついに辿り着いた『豊穣の邦』を大満喫する旅人【原神5.5】', publishedAt: '2025-04-05'},
  {videoId: 'OEtb_KRSK10', title: '【17章】全ての星が、私たちの敵【今から崩壊3rd】', publishedAt: '2025-04-05'},
  {videoId: 'Rpumptxu3Ng', title: 'ハチャメチャに強くなった『ゾ・シア』に挑む一般片手剣【モンハンワイルズ】', publishedAt: '2025-04-04'},
  {videoId: 'nzTY05nuXw4', title: '【裏】5.5で生まれ変わった『トゥラン大火山』の噴火を見よう【原神】', publishedAt: '2025-04-04'},
  {videoId: '3FEWyFuau_U', title: '果樹園の番竜『ワナナ』と死闘を繰り広げた結果ｗｗｗ【原神5.5】', publishedAt: '2025-04-03'},
  {videoId: 'Gfxfqg9RAeY', title: '【悲報】新精鋭『マグマイタチ』さん、マジで居ない【原神5.5】', publishedAt: '2025-04-02'},
  {videoId: 'VV8aAYMt70A', title: 'サムネ素材屋さん【原神】', publishedAt: '2025-04-02'},
  {videoId: 'RqnhneOM0jo', title: '火山の噴火をカメラ歩きで乗り切ることは出来るのか【原神5.5】', publishedAt: '2025-04-01'},
  {videoId: 'ugzPsQAD-gA', title: '冒険ランク60旅人、唐突に最大のピンチを迎えてしまうｗｗ【原神5.5】', publishedAt: '2025-03-31'},
  {videoId: '4qtlW4lnIpQ', title: '【経験則】地方伝説のアチーブ、情報なしで取り切れる？【原神5.5】', publishedAt: '2025-03-30'},
  {videoId: 'ibLCeIsgrUw', title: '【ストーリー編】驚天動地の狩り、ついに来る！【モンハンワイルズ】', publishedAt: '2025-03-30'},
  {videoId: 'Cy8FxaIHma0', title: 'UIオフで初見の地方伝説を倒していたら…【原神5.5】', publishedAt: '2025-03-29'},
  {videoId: 'VibIsIQDxV0', title: '【17章】主教と英雄【今から崩壊3rd】', publishedAt: '2025-03-29'},
  {videoId: 'BQVZRO_v1vE', title: 'ヴァレサモチーフを持たせた八重神子で飛んでみた【原神5.5】', publishedAt: '2025-03-28'},
  {videoId: 'P7SFF2uOwr4', title: '『ライノ竜』さん、突進ですべてを破壊してしまうｗｗ【原神5.5】', publishedAt: '2025-03-27'},
  {videoId: 'SboUPpo_2H8', title: '空から『トゥラン大火山』に飛び込んでみた結果ｗｗｗ【原神5.5】', publishedAt: '2025-03-26'},
  {videoId: 's6Y4CjDz6J8', title: 'ちびの冒険も終幕へ…アップデート内容見てみた【原神5.5】', publishedAt: '2025-03-26'},
  {videoId: '-kOU6Oz1-qw', title: '【突入前夜】ver5.5楽しみなところスペシャル【原神5.4】', publishedAt: '2025-03-25'},
  {videoId: '0Ta8vXZLXTk', title: '【振り返り】おかげさまでチャンネル2周年！ありがとう！', publishedAt: '2025-03-24'},
  {videoId: '0pkD-VTqKQE', title: '40時間かけて辿り着いた『裏ラスボス』に挑む一般片手剣【モンハンワイルズ】', publishedAt: '2025-03-23'},
  {videoId: '75NpSRbOarw', title: 'ナヴィアさん、10か月越しの設定回収をしてしまうｗ【原神5.4】', publishedAt: '2025-03-23'},
  {videoId: 'LHcUpSVLd7Q', title: '『ゴア・マガラ』だけ強さが別格過ぎないか？ｗ【モンハンワイルズ】', publishedAt: '2025-03-22'},
  {videoId: 'KhhOrkf1MHU', title: 'ノエル、そんなポーションで大丈夫か？【原神5.4】', publishedAt: '2025-03-22'},
  {videoId: 'txDYARdKOpM', title: '【16章】この命は、彼女に救われたのですから！【今から崩壊3rd】', publishedAt: '2025-03-22'},
  {videoId: 'Ob1uT8bDt6c', title: '落下八重神子さん、唐突に始まってしまうww【原神5.4】', publishedAt: '2025-03-21'},
  {videoId: 'On-uPIhPMDg', title: '『グラビモス』は普通にゴジラになってしまいました…【モンハンワイルズ】', publishedAt: '2025-03-20'},
  {videoId: 'WYEaS_-YlFY', title: '【サンタ有】1泊2日！モンド‐璃月再観光の旅【原神】', publishedAt: '2025-03-20'},
  {videoId: 'A26yq2R48c4', title: '帰ってきた『イャンクック』の新技が怖すぎるｗｗｗ【モンハンワイルズ】', publishedAt: '2025-03-19'},
  {videoId: 'NrrNn1a0njE', title: '☆5雷法器に大型新人が現れるそうです【原神5.4】', publishedAt: '2025-03-19'},
  {videoId: 'qs5w5tcggHg', title: '【のんびり旅行記】閑雲のモンド旅行はどんなルートだったの？【原神5.4】', publishedAt: '2025-03-18'},
  {videoId: '4_mK_9rtnME', title: '20時間かけてラスボスに辿り着いた一般片手剣【モンハンワイルズ】', publishedAt: '2025-03-17'},
  {videoId: 'fakVQ4VS8C8', title: '【まとめ見】ファントムハンター審判の時！【原神】', publishedAt: '2025-03-17'},
  {videoId: 'xbNhlhxjXMY', title: '【ネタバレ注意】個人的にワイルズのストーリーが本当に面白いと思った一戦【モンハンワイルズ】', publishedAt: '2025-03-16'},
  {videoId: 'V1QWxup4Vvk', title: '狛荷屋は花祭会場からシトラリ家まで何時間でお届けするのか【原神5.4】', publishedAt: '2025-03-16'},
  {videoId: 'o7F7lEVby4k', title: '【予告番組】『浮燃ペンギン』さん、地方伝説になってしまうｗｗｗ【原神】', publishedAt: '2025-03-15'},
  {videoId: 'HTU7Orzme3w', title: '弩級、弩級、超弩級！頂点モンスター『ジン・ダハド』【モンハンワイルズ】', publishedAt: '2025-03-15'},
  {videoId: 'i5wr2AFpBB8', title: '【15章】天命最強のS級戦乙女『デュランダル』【今から崩壊3rd】', publishedAt: '2025-03-15'},
  {videoId: 'AIVBqn9AgiA', title: 'アプデまで待てないので『豊穣の邦』を探してみた【原神5.4】', publishedAt: '2025-03-14'},
  {videoId: 'YTs8bOhjt7w', title: '謎だらけの『リオレウス』がカッコ良すぎるｗｗ【モンハンワイルズ】', publishedAt: '2025-03-13'},
  {videoId: 'PSpY3b4d93w', title: '『原神預言』がさっぱり分からないので関連文書を読んでみた【原神5.4】', publishedAt: '2025-03-13'},
  {videoId: 'upbroAzBCvc', title: 'あかん、ワイルズの片手剣楽しすぎる…【モンハンワイルズ】', publishedAt: '2025-03-12'},
  {videoId: 'CtqBx84wwhI', title: 'エリクシルの裏に地味な神アプデがありました【原神5.4】', publishedAt: '2025-03-12'},
  {videoId: 'y9I6VJUk_B8', title: '『のんびり旅行記』さん、最高のイベント過ぎてしまう…【原神5.4】', publishedAt: '2025-03-11'},
  {videoId: 'MIVXJgixH7U', title: '衝撃の新モンスターに出会うも、またもポリゴンに襲われる男【モンハンワイルズ】', publishedAt: '2025-03-10'},
  {videoId: 'UAOCmijLBkA', title: 'ほら、グーグー鳴ってる！【原神5.4】', publishedAt: '2025-03-10'},
  {videoId: 'hRmQQ-dkz4Y', title: '初めての『麻痺片手剣』で攻略難易度が崩壊してそうな件について【モンハンワイルズ】', publishedAt: '2025-03-09'},
  {videoId: 'm8C5BXdh7GQ', title: 'ノエルに片手剣を持たせた結果…【原神5.4】', publishedAt: '2025-03-09'},
  {videoId: 'graL_4qTeDk', title: '新モンスター『アジャラカン』はただの猿（モンキー）じゃあない！【モンハンワイルズ】', publishedAt: '2025-03-08'},
  {videoId: 'qtT0ocb7NzE', title: 'フィッシュル語録、いつの間にか書籍化されてしまうｗ【原神5.4】', publishedAt: '2025-03-08'},
  {videoId: 'L-o1bKr6uns', title: '【14章】一緒にこの完璧じゃない世界を！【今から崩壊3rd】', publishedAt: '2025-03-08'},
  {videoId: 'rcP8gXEiRG0', title: '閑雲さん、モンド大満喫旅行をしてしまうｗｗ【原神5.4】', publishedAt: '2025-03-07'},
  {videoId: 'MR0Z3Cj8kho', title: '復活した『ネルスキュラ』装備で無事ロボになってしまう一般ハンター【モンハンワイルズ】', publishedAt: '2025-03-06'},
  {videoId: 'KNT5XsM0dho', title: '唐突にやってきた神イベ！『のんびり旅行記』をやってみた【原神5.4】', publishedAt: '2025-03-06'},
  {videoId: '4cIkc8biotE', title: '製品版『レ・ダウ』との再会がアツすぎるｗｗｗ【モンハンワイルズ】', publishedAt: '2025-03-05'},
  {videoId: 'NmwgyvjJUg4', title: '新モンスター『ププロポル』だけホラゲー出身なんだがｗｗ【モンハンワイルズ】', publishedAt: '2025-03-04'},
  {videoId: 'DVb0_XuuOl4', title: '三川花祭、ファンサービスの塊過ぎてしまうｗｗ【原神5.4】', publishedAt: '2025-03-04'},
  {videoId: 'rPEpzMme7mI', title: '緋の森の頂点！『ウズトゥナ』に挑む一般片手剣【モンハンワイルズ】', publishedAt: '2025-03-03'},
  {videoId: 'hjnySz0PlUw', title: '【悲報】河童さん、逝く…【原神5.4】', publishedAt: '2025-03-03'},
  {videoId: 'cYLocWK3F-A', title: 'ついに復活した『ババコンガ』がフッサフサでした【モンハンワイルズ】', publishedAt: '2025-03-02'},
  {videoId: 'HBhESr6oYnA', title: '【裏】1350日を超えて、今やってること【原神】', publishedAt: '2025-03-02'},
  {videoId: 'Gre5FSLyg7A', title: '新モンスター『ラバラ・バリナ』が怖すぎる件について【モンハンワイルズ】', publishedAt: '2025-03-01'},
  {videoId: 'Sya5pGPFmzU', title: 'ﾄﾞｩﾜｧ!【原神5.4】', publishedAt: '2025-03-01'},
  {videoId: 'U-yn3_lbjo0', title: '【14章】崩壊を永遠に終わらせる希望【今から崩壊3rd】', publishedAt: '2025-03-01'},
  {videoId: 'lICBN3jwg_s', title: '知り得たか？ミケラの刃、『ケマトリス』を…【モンハンワイルズ】', publishedAt: '2025-02-28'},
  {videoId: 'UEdqQ3Otwl4', title: '帰ってきた『ジャストラッシュ』があまりにも爽快な件ｗｗｗ【モンハンワイルズ】', publishedAt: '2025-02-28'},
  {videoId: 'R3ICHVPiYaY', title: '【名探偵】ナタ折り返し！今後のアプデ予想会議が行われました【原神5.4】', publishedAt: '2025-02-28'},
  {videoId: '_WsNhNZNamg', title: '名探偵パイモン、再び！【原神5.4】', publishedAt: '2025-02-27'},
  {videoId: 'pTznKsf38q0', title: '三川花祭で貰えた『稲妻見聞録』を読んでみた【原神5.4】', publishedAt: '2025-02-26'},
  {videoId: 'r7Ua-kef3qg', title: 'なんか…八重神子、超可愛くね…？【原神5.4】', publishedAt: '2025-02-25'},
  {videoId: 'yH60Utk6icc', title: '【大没ネタ】テペトル竜はこだまの子に一人で上京できるの？他【原神】', publishedAt: '2025-02-24'},
  {videoId: 'vwHfsDkeWVA', title: '稲妻の夜と安眠を守る者【原神5.4】', publishedAt: '2025-02-23'},
  {videoId: 'xloFwB7j2rk', title: '『江村一玄斎』の指導を受けて幸せになろう！【原神5.4】', publishedAt: '2025-02-22'},
  {videoId: 'Y4tcErIZnqc', title: '【13章】神話は再び現実となる【今から崩壊3rd】', publishedAt: '2025-02-22'},
  {videoId: 'sAJhYmDkLS0', title: 'グラボによって高度に抽象化された世界で遊んでみた【原神】', publishedAt: '2025-02-21'},
  {videoId: 'L0W4cE3s1Ig', title: 'れんや、お前はこの家の柱になれ【誘拐事件】④終', publishedAt: '2025-02-20'},
  {videoId: 'kEu1zO8Nj8k', title: '秋沙銭湯の『夢喰獏一族』、現る！【原神5.4】', publishedAt: '2025-02-19'},
  {videoId: 'tEorMby-eYI', title: '【超悲報】ラスボスさん、数で攻めてしまう…【誘拐事件】③', publishedAt: '2025-02-18'},
  {videoId: 'PWpuUJZctpE', title: '2024年一番使った『閑雲』が登場して1年経ちました【原神5.4】', publishedAt: '2025-02-17'},
  {videoId: 'wy0PlT6yD6A', title: '【悲報】ピエロさん、緊急来日【誘拐事件】②', publishedAt: '2025-02-16'},
  {videoId: 'qpFyifOi4n0', title: 'オチカンが『秋沙銭湯』に旅行するには何日休みが必要なのか【原神5.4】', publishedAt: '2025-02-15'},
  {videoId: 'WBg6602p3oU', title: '【12章】君たちは崩壊について、何も知らない【今から崩壊3rd】', publishedAt: '2025-02-15'},
  {videoId: 'z8QY-fp9jSQ', title: '結局お母さんが一番怖い【誘拐事件】①', publishedAt: '2025-02-14'},
  {videoId: '3PtRXkIfol4', title: '便利になった『育成ガイド』を使ってみた【原神5.4】', publishedAt: '2025-02-13'},
  {videoId: '4G8rk535fCo', title: 'ついにオープンした『秋沙銭湯』に行ってみた【原神5.4】', publishedAt: '2025-02-12'},
  {videoId: 'GtebwOv-Ibc', title: '【感想回】次回でナタバージョン折り返し…？？【原神5.3】', publishedAt: '2025-02-11'},
  {videoId: 'wQ9cb31srZU', title: '【改姓】今年のメインヒロインは胡桃でした【原神5.3】', publishedAt: '2025-02-11'},
  {videoId: 'O7fA2QfMB7o', title: '個人的名場面で振り返る『灼烈の反魂の詩』&『あの烈日のように』【原神5.3】', publishedAt: '2025-02-10'},
  {videoId: 'jU6ROHLbq6g', title: '冥蝶、一縷の香りを残して【原神5.3】', publishedAt: '2025-02-10'},
  {videoId: 'DN5TF_05Lmo', title: 'アルシュベルド戦なら片手剣で’’守護’’れ！！【モンハンワイルズβ】', publishedAt: '2025-02-09'},
  {videoId: '9rHr55SXs8Q', title: '【集合知】俺と視聴者がよく取り逃していた宝箱60連【原神】', publishedAt: '2025-02-09'},
  {videoId: 'rRjXMPkchOo', title: 'レ・ダウがカッコ良くなって帰ってきました【モンハンワイルズβ】', publishedAt: '2025-02-08'},
  {videoId: 'bPMuk0nRIZw', title: '【12章】どこか見覚えのあるキャラが大量登場するも、理解が追い付かない艦長【今から崩壊3rd】', publishedAt: '2025-02-08'},
  {videoId: '7MzazJPpl1I', title: '迦毘琉璃ーー印！【原神5.3】', publishedAt: '2025-02-07'},
  {videoId: 'NP2eNgeQVRo', title: 'とりあえず霄灯を1000個買った結果ｗｗ【原神5.3】', publishedAt: '2025-02-06'},
  {videoId: '8E3TOtKadS0', title: '【大解剖】chぱないもんについて、すべて教えます【新規向け】', publishedAt: '2025-02-05'},
  {videoId: 'K_CHtyx6JmU', title: '『熟知の奔流』が神アプデされて帰ってきました【原神5.3】', publishedAt: '2025-02-04'},
  {videoId: 'UiaRXu_bHEE', title: '海灯祭、ありえない量の設定が追加されてしまうｗｗ【原神5.3】', publishedAt: '2025-02-03'},
  {videoId: 'purVAlhBaf8', title: 'テイワットで大流行した『あの本』を読んでみよう【原神5.3】', publishedAt: '2025-02-02'},
  {videoId: 'kjN_TRLcb90', title: '【裏】全218種類の料理を全パターン作る【原神】', publishedAt: '2025-02-02'},
  {videoId: 'tU0h4dsAZZU', title: '全料理を作りまくれば、バッグがパンパンになるのでは？【原神】', publishedAt: '2025-02-01'},
  {videoId: 'xl5GLmtsLAU', title: '【11章幕間】そして『彼女』は目を覚ます【今から崩壊3rd】', publishedAt: '2025-02-01'},
  {videoId: 'ZT-dRBfjzY4', title: '記憶の色、キミへの返事【原神5.3】', publishedAt: '2025-01-31'},
  {videoId: 'l7seKnPaQBQ', title: 'やっぱりフォンテーヌ人じゃないか！【原神5.3】', publishedAt: '2025-01-30'},
  {videoId: 'N4Ngot0O8-g', title: 'お願い、大シャーマン！【原神5.3】', publishedAt: '2025-01-29'},
  {videoId: 'd4jj52Rk-4s', title: '【予告番組】ﾄﾞｩﾜｧ!ｾﾝﾄｳｵｰﾌﾟﾝ!【原神】', publishedAt: '2025-01-28'},
  {videoId: 'aFQtn_mTRKg', title: '【原始人】初めて画質設定を『高』にしてみた結果ｗｗ【原神】', publishedAt: '2025-01-27'},
  {videoId: '7c0HMaM6TkQ', title: '【裏】稲妻からナタまでﾏﾀｰﾘバイク旅【原神】', publishedAt: '2025-01-26'},
  {videoId: 'NAkhYxVjxkA', title: '第二小隊が急に激ツヨになってしまいました…【今から崩壊3rd】', publishedAt: '2025-01-25'},
  {videoId: 'fEhG2rsdpbg', title: 'おい、虫相撲しろよ【原神5.3】', publishedAt: '2025-01-24'},
  {videoId: 'QU9D_NO4p5c', title: '【名探偵】復刻キャラ予想、ルーレットの方が当たるのでは？【原神5.3】', publishedAt: '2025-01-23'},
  {videoId: 'pc113HOf2Fw', title: '太陽に祝福された者たち【原神5.3】', publishedAt: '2025-01-22'},
  {videoId: 'ZK6qN6AfKfQ', title: '炎を宿した『謎の少年』の正体は…？【原神5.3】', publishedAt: '2025-01-21'},
  {videoId: 'JChl7bNa-k8', title: '『次に完凸したいキャラ検討委員会』が開催されました【原神】', publishedAt: '2025-01-20'},
  {videoId: '6atrTaN_L0o', title: '【まとめ見】沈黙の殿と2人の適合者【原神】', publishedAt: '2025-01-19'},
  {videoId: 'LieAu-oRDkU', title: '【裏】モラと和解しました【原神】', publishedAt: '2025-01-19'},
  {videoId: 'vQP-U-Z0ack', title: 'ティミドの『新必殺技』で、舞え！【今から崩壊3rd】', publishedAt: '2025-01-18'},
  {videoId: 'pqWVxCVvFyE', title: 'アハウ、全部出せ。【原神5.3】', publishedAt: '2025-01-17'},
  {videoId: '4ptVaZ9TBeQ', title: '開発公認の『超高難易度イベント』で無事に燃え尽きました【原神5.3】', publishedAt: '2025-01-16'},
  {videoId: 'yccsKpjjmTw', title: 'マーヴィカとシトラリでスメールまで飛べーい！【原神5.3】', publishedAt: '2025-01-15'},
  {videoId: 'VmQu3UNCY7M', title: 'きょうだい、マジかよ！【原神5.3】', publishedAt: '2025-01-14'},
  {videoId: 'SZ2I1VT3cNM', title: '主人公は、三人の偉大な英雄【原神5.3】', publishedAt: '2025-01-13'},
  {videoId: 'MASpjvT5C_g', title: '『ナタの英雄全員』に会えるまで野良マルチした結果ｗｗｗ【原神5.3】', publishedAt: '2025-01-12'},
  {videoId: 'cWg8jHLY9RE', title: '完凸したマーヴィカで思う存分遊んでみた【原神5.3】', publishedAt: '2025-01-11'},
  {videoId: 'dIA9Iuksgh0', title: 'なんだこのメインヒロイン！？【今から崩壊3rd】', publishedAt: '2025-01-11'},
  {videoId: 'Mh8syz3KW20', title: '『炎神』マーヴィカ完凸まで無限ガチャ！【原神5.3】', publishedAt: '2025-01-10'},
  {videoId: '2aEhJKEl5u8', title: '我々は独りで戦ったりしない【原神5.3】', publishedAt: '2025-01-09'},
  {videoId: '2Z16OnduQPE', title: 'ついに完成した古名、その名は…【原神5.3】', publishedAt: '2025-01-08'},
  {videoId: 'vLpOAXgYHVI', title: '【原神】Twitterに上げた迷場面&バグ集【MHRS他】＃1', publishedAt: '2025-01-08'},
  {videoId: '7lR13RHZ4iw', title: 'いつの日か、約束の場所に【原神5.3】', publishedAt: '2025-01-07'},
  {videoId: 'fvNW8ZKuzj4', title: '新年一発目にガチャが…裏返るｯｯ！！【原神5.3】', publishedAt: '2025-01-06'},
  {videoId: 'QOsqyi7eoB8', title: '追加されたナタの壺と『浮世巡遊・5』を探してみた【原神5.3】', publishedAt: '2025-01-05'},
  {videoId: 'xfQnhMmluOY', title: '無限に味がするコンテンツ、後崩壊書【今から崩壊3rd】', publishedAt: '2025-01-05'},
  {videoId: 'TlJlRFrDw-k', title: '冒険ランク60になってもスイートフラワーが欲しい！【原神】', publishedAt: '2025-01-04'},
  {videoId: 'lPnEFk1J5JI', title: 'とりあえず『蝕まれし源焔の主』を100体討伐した【原神5.3】', publishedAt: '2025-01-03'},
  {videoId: 'x4XjB4IttsY', title: '『挑戦者・10』に初見で挑んでみた【原神5.3】', publishedAt: '2025-01-02'},
  {videoId: '6ww6zsJQDjI', title: 'ver5.3のボス連戦が新時代すぎるｗｗ【原神5.3】', publishedAt: '2025-01-01'},
  {videoId: '1tAETj07eIE', title: '「感じたぞッ！『神』が来るッ！」【原神5.3】', publishedAt: '2025-01-01'},
  {videoId: '0nPUXLPHFBs', title: 'ナーサリー・オブ・ナイトメアにアイテムを落とした結果ｗｗｗ【原神5.2】', publishedAt: '2024-12-31'},
  {videoId: '2gp_nYUhZ5w', title: '【全3本】年末なので没になった企画動画を供養します【原神】', publishedAt: '2024-12-31'},
  {videoId: 'DSN_8EKW_Rw', title: '【感想回】高まる期待、決戦前夜！【原神5.2】', publishedAt: '2024-12-30'},
  {videoId: '_6X3mDx0WGk', title: '【キャベツ】キャベツを求めしばあちゃん【原神5.2】', publishedAt: '2024-12-29'},
  {videoId: '0NyLL1cKkMU', title: '取り逃していた隠しアチーブを大調査してみた【原神5.2】', publishedAt: '2024-12-28'},
  {videoId: 'B2quSbNCHR8', title: '【90日目】初心者最終日なので『終末』に挑んでみた【今から崩壊3rd】', publishedAt: '2024-12-28'},
  {videoId: 'oi1wqj9Ozb8', title: '2024年『集め直しが大変だったアイテム』4選！【原神】', publishedAt: '2024-12-27'},
  {videoId: 'yqm_Y9mqwxE', title: '『全マップ100%探索』でエキスやモラはどれくらい増える？【原神5.2】', publishedAt: '2024-12-26'},
  {videoId: '7nMjRu0gMyM', title: 'ポケモンバトルが始まった結果ｗｗ【原神5.2】', publishedAt: '2024-12-25'},
  {videoId: 'Z6ako2SQj50', title: 'クリスマスはバラチコを水没させよう！【原神】', publishedAt: '2024-12-25'},
  {videoId: 'utdvCCty9W8', title: '【サンタ】こだまの子の誰にもバレず、ニエガにプレゼントを届けろ！【原神】', publishedAt: '2024-12-24'},
  {videoId: 'J6TgEClz-Ok', title: 'アペプちゃんとは今週でお別れです【原神5.2】', publishedAt: '2024-12-23'},
  {videoId: 'xy3X_AHMDcs', title: 'こちらが原神の主人公ご一行です（？）【原神5.2】', publishedAt: '2024-12-22'},
  {videoId: 'EH0ENS9Uyy0', title: '【悲報】パムポイント、唐突なインフレ【崩壊スターレイル】', publishedAt: '2024-12-22'},
  {videoId: 'rY2msEOcP9M', title: '【予告番組】陸海空を制する神、その名はマーヴィカ【原神】', publishedAt: '2024-12-21'},
  {videoId: 'NvQTAlZg29c', title: '主人公の『新必殺技』が壊れすぎている件ｗｗ【今から崩壊3rd】', publishedAt: '2024-12-21'},
  {videoId: 'hWpKAZDtR1U', title: '地方伝説『リライ』は今期最強候補！【原神5.2】', publishedAt: '2024-12-20'},
  {videoId: 'NEe0_Pp2Dwg', title: 'テパルの『空中工房』がマジで凄すぎるｗｗ【原神5.2】', publishedAt: '2024-12-19'},
  {videoId: '-6pU2bHEoZU', title: '【爆速】ボス周回は新たな次元へ…【原神】', publishedAt: '2024-12-18'},
  {videoId: 'fy40nC5y5MA', title: '部族見聞で現れる謎の気球に乗ってみたら…【原神5.2】', publishedAt: '2024-12-17'},
  {videoId: 'VGs66y_NkGo', title: '幻写霊さん、無事にインフレを果たす【原神5.2】', publishedAt: '2024-12-16'},
  {videoId: '4Is_0gUze1A', title: 'フォンテーヌ人、やっぱり倫理観が終わってしまう…【原神5.2】', publishedAt: '2024-12-15'},
  {videoId: 'QJPwWFdY-z4', title: '1年半段ボールベッドで寝ていた主人公【崩壊:スターレイル】', publishedAt: '2024-12-15'},
  {videoId: 'uKukrzheLu8', title: 'イクトミ竜が本気を出した結果ｗｗ【原神5.2】', publishedAt: '2024-12-14'},
  {videoId: 'yztcLfDtmu8', title: '『後崩壊書2部』超進化を遂げてしまうｗｗ【今から崩壊3rd】', publishedAt: '2024-12-14'},
  {videoId: 'KPVblWt2TQM', title: '【名探偵】おめぇの出番だ！七七！【原神5.2】', publishedAt: '2024-12-13'},
  {videoId: 'ZY6ja4h16K8', title: '謎だらけのNPC『クエニン』を追った結果…【原神5.2】', publishedAt: '2024-12-12'},
  {videoId: 'KOgXiyPJA5E', title: '【朗報】『アハウ』さん、やっぱり凄いヤツだった【原神5.2】', publishedAt: '2024-12-11'},
  {videoId: 'GpR27iVr6Vw', title: '【日課】お前が全狩りするのは、俺だと思ってた…【原神5.2】', publishedAt: '2024-12-10'},
  {videoId: 'B6D7IlagkF8', title: '【懐古】一番初めに育てた聖遺物を覚えていますか？【原神5.2】', publishedAt: '2024-12-09'},
  {videoId: 'Y6DpMcdEjS4', title: 'テペトル竜愛好家の夢の地が発見されてしまうｗｗ【原神5.2】', publishedAt: '2024-12-08'},
  {videoId: 'ogDcn2IVPyU', title: '『私たちは終着点で再会する』【原神5.2】', publishedAt: '2024-12-07'},
  {videoId: '6FJvAME11mg', title: '芽衣隊長すいません、これはもうデートです【今から崩壊3rd】', publishedAt: '2024-12-07'},
  {videoId: '2l14kWKHjEI', title: '【私的】2024年度MVPキャラクターを発表します【原神】', publishedAt: '2024-12-06'},
  {videoId: 'lQXV_2DrmCw', title: '【悲報】ココウィクさん、やりすぎてしまう…【原神5.2】', publishedAt: '2024-12-05'},
  {videoId: 'hcm54DNDalg', title: '『天蛇の船』からクク竜でスメールまで飛んでいける？【原神5.2】', publishedAt: '2024-12-04'},
  {videoId: 'QBuIqUyztoo', title: 'オシカ・ナタの隠しマップがマジで凄すぎるｗｗ【原神5.2】', publishedAt: '2024-12-03'},
  {videoId: '3Qfkn9YoV3c', title: '【無理】オシカ・ナタの『悪龍』で精鋭狩り出来るんじゃね？【原神5.2】', publishedAt: '2024-12-02'},
  {videoId: 'piYlcsf4e7Y', title: '『特別招待キャスト』の鍾離はめちゃくちゃ硬いのでは？【原神5.2】', publishedAt: '2024-12-01'},
  {videoId: 'Swz3Y_G1wEE', title: '地方伝説『鉄髭』戦で名探偵を発揮してしまう男【原神5.2】', publishedAt: '2024-11-30'},
  {videoId: '6cXSu92yGig', title: 'スターレイルコラボ、気合が入りすぎてしまうｗｗ【今から崩壊3rd】', publishedAt: '2024-11-30'},
  {videoId: 'me0yxqsqqqk', title: 'もっと分かりやすく『見せよう』【原神5.2】', publishedAt: '2024-11-29'},
  {videoId: 'oOKeBjUMLdQ', title: 'より綺麗になったトゥラン大火山の噴火が見たい【原神5.2】', publishedAt: '2024-11-28'},
  {videoId: '-5AFD2zCL9k', title: '戦火を超えて、立ち上がる人々【原神5.2】', publishedAt: '2024-11-27'},
  {videoId: 'C6oenTmgsjI', title: 'クク竜の飛行性能が凄すぎる【原神】', publishedAt: '2024-11-26'},
  {videoId: 'OvaZm6UCYS0', title: '【悲報】新精鋭『ミミックフローラ』さん、硬すぎる【原神5.2】', publishedAt: '2024-11-25'},
  {videoId: 'gckCf8Hfq1o', title: '霧に包まれた『謎の島』を目指したら…【原神5.2】', publishedAt: '2024-11-24'},
  {videoId: 'Sz3Gi61QnmE', title: '【私的】聖遺物の『いるorいらない』ってどう判断するの？【原神5.2】', publishedAt: '2024-11-24'},
  {videoId: 'SHmZgl_6L3Y', title: '天空の島から地方伝説を落とした結果ｗwｗ【原神5.2】', publishedAt: '2024-11-23'},
  {videoId: 'VtaAy4GYaho', title: '【編年史】名前は…『テレサ』と名付けた【今から崩壊3rd】', publishedAt: '2024-11-23'},
  {videoId: 'ZqwKCA0bwyc', title: '新エリア『オシカ・ナタ』がマジでデカすぎるｗｗ【原神5.2】', publishedAt: '2024-11-22'},
  {videoId: 'NBboJOmJ5Wo', title: '竹材さん、7分で上限狩りされてしまう…【原神5.2】', publishedAt: '2024-11-21'},
  {videoId: 'nu0Wnalv4sU', title: 'ついに実装！『クク竜』が楽しすぎるんだがｗｗ【原神5.2】', publishedAt: '2024-11-20'},
  {videoId: '9oDJ9BoMM4Q', title: '旧貴族さん、ついに役目を終える【原神5.2】', publishedAt: '2024-11-20'},
  {videoId: 'mboxXVGrPjQ', title: '【素朴】ここから『5000m』先には何があるのか【原神】', publishedAt: '2024-11-19'},
  {videoId: 'o374iDnzjwY', title: 'マイクの値段が『5000円』変わると視聴者は気付くのか？【FIFINE AmpliGame AM8】', publishedAt: '2024-11-18'},
  {videoId: 'c9tZwj9s_eE', title: '【感想回】『偽りの空』にアビスへの思いを馳せる【原神5.1】', publishedAt: '2024-11-17'},
  {videoId: '3arpuzd3xM4', title: '【11章】すべては夢のようで【今から崩壊3rd】', publishedAt: '2024-11-16'},
  {videoId: 'y1XeyvGOVY8', title: 'ナタ前半マップ『最後の宝箱』に10時間沼った結果ｗｗ【原神5.1】', publishedAt: '2024-11-15'},
  {videoId: 'w4kcOhqdi2I', title: '【裏】壺がッ泣くまで狛犬を置くのをやめないッ!他【原神】', publishedAt: '2024-11-14'},
  {videoId: 'gQJ7SLLNSPg', title: '【審判録】後崩壊書第一部、とんでもないことになってしまう【今から崩壊3rd】', publishedAt: '2024-11-13'},
  {videoId: 'xK9m8oQw1e0', title: '「花車が揺らぎ ナヒーダは目を開ける」【原神5.1】', publishedAt: '2024-11-12'},
  {videoId: 'BtAGBBZjbao', title: '『あの勇者』がボイス付きで帰ってきたんだがｗｗ【原神5.1】', publishedAt: '2024-11-11'},
  {videoId: '4udwJX3AQic', title: '【原神】シャルロットのつかいかた【入社2年目】', publishedAt: '2024-11-10'},
  {videoId: 'BANr_s_w7i4', title: '【予告番組】復ッ活ッ！釣り復活ッッ！釣り復活ッッ！【原神】', publishedAt: '2024-11-09'},
  {videoId: 'LvlIr_YG0xY', title: '【11章】その世界で君の答えを聞かせて【今から崩壊3rd】', publishedAt: '2024-11-09'},
  {videoId: 'OSd50absLTs', title: '常設コンテンツ『古の楽園』がめちゃくちゃ好みな件ｗｗ【今から崩壊3rd】', publishedAt: '2024-11-08'},
  {videoId: 'IBBy1sTCbj0', title: '【名探偵】ホヨバース！リオセスリとシャルロットをどこにやった？【原神5.1】', publishedAt: '2024-11-07'},
  {videoId: 'tpWauRdmFyQ', title: '便利アイテム改善の波、大到来してしまうww【原神5.1】', publishedAt: '2024-11-06'},
  {videoId: 'HJanWpFQ1vQ', title: 'ニィロウ、サプライズ作戦最大のピンチを救う【原神5.1】', publishedAt: '2024-11-05'},
  {videoId: '-ap8HhX5ano', title: 'ナヒーダへの’’極秘’’サプライズ計画が始動する…【原神5.1】', publishedAt: '2024-11-04'},
  {videoId: '2fJCh6Gx59w', title: 'レ・ダウと思しき生命体と戦ってみた【モンハンワイルズβ】', publishedAt: '2024-11-03'},
  {videoId: 'PUDxvVw8BAA', title: '【仙力20万】負荷上限が1.6倍になった塵歌壺を埋め尽くしてみた【原神】', publishedAt: '2024-11-02'},
  {videoId: 'zd9pw82wWBc', title: '【10章】崩壊獣を身に宿す2人組『ロザリアとリリア』【今から崩壊3rd】', publishedAt: '2024-11-02'},
  {videoId: 'GESQq0KYQJw', title: '限界スペックPCで禁足地に行った結果ｗｗｗ【モンハンワイルズβ】', publishedAt: '2024-11-01'},
  {videoId: '4xikgGVR8mI', title: 'そして、『ニエガ』は誕生する…【原神5.1】', publishedAt: '2024-10-31'},
  {videoId: 'V3vy-y0O5LE', title: '新コンテンツであの『有名キャラ』に出会う艦長【今から崩壊3rd】', publishedAt: '2024-10-30'},
  {videoId: '_NQPulzAzWc', title: 'ラゾーリ、ウソだよな？【原神5.1】', publishedAt: '2024-10-29'},
  {videoId: 'jQo3aTLm6oQ', title: 'パイモンさん、机の下から生えてきてしまう…【原神5.1】', publishedAt: '2024-10-28'},
  {videoId: 'vZSGwFzNL3Y', title: 'スメールのNPC100人にナヒーダの誕生日を祝わせたい【原神】', publishedAt: '2024-10-27'},
  {videoId: 'gOEINMshA98', title: '登録者5000人！総再生回数100万回！好きな動画を振り返ってみた', publishedAt: '2024-10-26'},
  {videoId: 'ehYrQhV6cN4', title: '【九章幕間】フカさん、謎ばかり残してしまう…【今から崩壊3rd】', publishedAt: '2024-10-26'},
  {videoId: 'tmVS-gh88x4', title: '【激務】『伝達使』の仕事を実際に体験してみた【原神5.1】', publishedAt: '2024-10-25'},
  {videoId: 's5D6PhHG2Bk', title: 'ナタのために【原神5.1】', publishedAt: '2024-10-24'},
  {videoId: 'v980LcSg-4M', title: 'チュートリアルを卒業し、セルマの犬になってしまう艦長【今から崩壊3rd】', publishedAt: '2024-10-23'},
  {videoId: 'QVpS70xv7L4', title: '絶望の門が開く【原神5.1】', publishedAt: '2024-10-22'},
  {videoId: 'J8iTn4icWC8', title: 'ナタ防衛戦！新システムが凄すぎる【原神5.1】', publishedAt: '2024-10-21'},
  {videoId: 'mHAoTA9tGF0', title: '5人目の英雄の覚醒、そして『隊長』の正体…【原神5.1】', publishedAt: '2024-10-20'},
  {videoId: 'B4AxIuhpX9s', title: 'クソサムネ師たち【原神】', publishedAt: '2024-10-19'},
  {videoId: 'eDzbcfpbTls', title: '【第九章】世界はもう、美しくない【今から崩壊3rd】', publishedAt: '2024-10-19'},
  {videoId: 'Ei4ZMDWtosM', title: 'マルチイベに3時間潜りまくったら何キャラに出会える？【原神】', publishedAt: '2024-10-18'},
  {videoId: 'iREUQqbpGlw', title: 'チャスカさん、これはもう風の行方です【原神5.1】', publishedAt: '2024-10-17'},
  {videoId: 'FmFpcnik6Qs', title: '崩壊3rdのオープンワールドすげえ！【今から崩壊3rd】', publishedAt: '2024-10-16'},
  {videoId: '_gN1I3U_CYQ', title: 'ば、ばあちゃん！？【原神5.1】', publishedAt: '2024-10-15'},
  {videoId: 'D9yhwnFrVD8', title: 'ついに『黒曜石の老婆』のシトラリ現る【原神5.1】', publishedAt: '2024-10-14'},
  {videoId: 'Vy7y58FhpF8', title: '【対決者Ⅰ】ナタの全地方伝説攻略を総まとめ！【原神】', publishedAt: '2024-10-13'},
  {videoId: 'BoGmBd5faT4', title: '【裏】4周年イベント『テイワットの思い出』が大満足でした【原神】', publishedAt: '2024-10-12'},
  {videoId: 'XY4LxD3elv4', title: '『第二律者』が再び現れてしまう…【今から崩壊3rd】', publishedAt: '2024-10-12'},
  {videoId: 'desEmhHWv1g', title: '大ダメバフ時代のサロンメンバーで遊んでみた【原神5.1】', publishedAt: '2024-10-11'},
  {videoId: 'txv94eLajcI', title: '新ボスのために追加された地下マップを探してみた【原神5.1】', publishedAt: '2024-10-10'},
  {videoId: '1nUkRX63Ja0', title: '合成台さん、4年目にしてついに’’覚醒’’【原神5.1】', publishedAt: '2024-10-09'},
  {videoId: 'C0KyOa6D9KE', title: '【感想回】ナタ、最高の国【原神5.0】', publishedAt: '2024-10-08'},
  {videoId: '0H6BLTCJTok', title: 'すべてをかっさらう男、その名は『淵上』【原神5.0】', publishedAt: '2024-10-08'},
  {videoId: '_nzV_qPWY8c', title: 'ナタの取り逃しているアチーブを大調査してみた【原神5.0】', publishedAt: '2024-10-07'},
  {videoId: 'Mb6PaPhc-Kw', title: 'ちびテペトル竜、覚醒してダメチャレを始めてしまうｗｗ【原神5.0】', publishedAt: '2024-10-07'},
  {videoId: 'kMcZzLK3PZA', title: 'ついに上陸した『静寂の浮遊島』の圧倒的絶景！【原神5.0】', publishedAt: '2024-10-06'},
  {videoId: '2C4rneyR_4k', title: 'テイワットの魚、全部釣るのにどれくらいかかる？【原神】', publishedAt: '2024-10-06'},
  {videoId: 'n7EaNziG1mM', title: '地方伝説『神骨の蛇姫』が大変すすれました【原神5.0】', publishedAt: '2024-10-05'},
  {videoId: 'M1ZR71Ys9-U', title: 'キアナのパパ『ジークフリート』カッコ良すぎないか？【今から崩壊3rd】', publishedAt: '2024-10-05'},
  {videoId: '-GIEI01jtIs', title: '【悲報】ユムカ竜さん、続々とマグマに身を投げてしまう…【原神5.0】', publishedAt: '2024-10-04'},
  {videoId: 'sHOjbXtbihE', title: 'ついに遭遇した『クク竜』がカッコ良すぎるｗｗ【原神5.0】', publishedAt: '2024-10-03'},
  {videoId: 'npYw2cuKi2Y', title: '【木こり】一緒にフレイムボム材を上限狩りしましょう【原神】', publishedAt: '2024-10-02'},
  {videoId: 'yNbUrWrlcqE', title: '『神秘の島』に辿り着いた者たち【原神5.0】', publishedAt: '2024-10-02'},
  {videoId: 'A7UhoW1EIHI', title: 'ついにやってきた岩の幻想シアターを遊んでみた【原神5.0】', publishedAt: '2024-10-01'},
  {videoId: 'xIv8v4V3W84', title: '『旅の意味』とは？流泉の衆トップガイドに聞いた＿＿＿【原神5.0】', publishedAt: '2024-09-30'},
  {videoId: 'HBg65OIjU40', title: '流泉の衆の伝説『神秘の島』を目指せ！【原神5.0】', publishedAt: '2024-09-29'},
  {videoId: 'u6QsqTluZmw', title: '4周年おめでとう！周年データまとめ見てみた【原神】', publishedAt: '2024-09-29'},
  {videoId: 'FB5GJBKsIog', title: '【予告番組】コシーホさん、5.1イベントで住み家を奪われてしまうｗ【原神】', publishedAt: '2024-09-28'},
  {videoId: 'UL34P1kW1rE', title: 'ログイン2日目にとんでもない地雷を踏んでしまう男【今から崩壊3rd】', publishedAt: '2024-09-28'},
  {videoId: 'MEMTVnPAc98', title: '設定眺めてたら隠しアチーブ出たんだがｗｗ【原神5.0】', publishedAt: '2024-09-27'},
  {videoId: '1zaeB-I3_sE', title: '超お喋りなアビス教団の使者『山下』【原神5.0】', publishedAt: '2024-09-26'},
  {videoId: 'JcfPkSkPFjM', title: '今月で螺旋9.10層とはお別れです【原神5.0】', publishedAt: '2024-09-25'},
  {videoId: 'g1YDXxyr0Bk', title: 'これはナタを守り続けたカーンルイア人の英雄譚【原神5.0】', publishedAt: '2024-09-24'},
  {videoId: 'rM66atdj87w', title: '流泉の衆の『謎の浮遊島』を直接登ってみたら…【原神5.0】', publishedAt: '2024-09-23'},
  {videoId: 't_t4uSlHQ5E', title: '【悲報】ヌヴィレットさん、地方伝説と化してしまう…【原神5.0】', publishedAt: '2024-09-22'},
  {videoId: 'Bd3uMsSyCfc', title: '『精鋭上限狩り』ってエキス何個分？【原神】', publishedAt: '2024-09-21'},
  {videoId: 'fKy1I5qQMaY', title: 'すまん、これ8年前のゲームってマジ？【今から崩壊3rd】', publishedAt: '2024-09-21'},
  {videoId: 'vAupnFdy0lM', title: 'これ以上元素を吸収してしまうと俺は灰燼に帰してしまう【原神5.0】', publishedAt: '2024-09-20'},
  {videoId: 'jg0brCNHn20', title: '500年の計画と『6人の英雄』【原神5.0】', publishedAt: '2024-09-19'},
  {videoId: 'kImBNg6VDoI', title: 'ムアラニさん、覚醒する【原神5.0】', publishedAt: '2024-09-18'},
  {videoId: 'JDgfIlnDFUc', title: 'テペトル竜で地方伝説を倒せるのか？【原神5.0】', publishedAt: '2024-09-17'},
  {videoId: 'ZeYpyvLLqMk', title: '最強メンバーでいざ！『夜神の国』へ【原神5.0】', publishedAt: '2024-09-16'},
  {videoId: '0kD3QpkCc9I', title: '懸木の民と伝説の偵察員『ヴィチャマ』【原神5.0】', publishedAt: '2024-09-15'},
  {videoId: 'DhNsfPxN9ys', title: '超激戦！炎神vs執行官1位『隊長』【原神5.0】', publishedAt: '2024-09-14'},
  {videoId: '0BnDXZmTOUQ', title: '史上最凶の『亀』に遭遇した結果ｗｗｗ【原神5.0】', publishedAt: '2024-09-13'},
  {videoId: 'LoeVuOJ_UH8', title: '旅人さん、4年ぶりの能力でナタを救ってしまう【原神5.0】', publishedAt: '2024-09-12'},
  {videoId: 'VmXCIDsrwhE', title: 'デイリーimpact　ナタ編【原神5.0】', publishedAt: '2024-09-11'},
  {videoId: '4SBDy5JnDFk', title: '【日課】恐怖！ナタ精鋭全討伐男！【原神5.0】', publishedAt: '2024-09-10'},
  {videoId: 'gx2HyQl1S2w', title: 'ナタさん、ついに『水着』を解禁してしまう…【原神5.0】', publishedAt: '2024-09-09'},
  {videoId: 'K2Bx0AbSNPE', title: 'ヌヴィレットさん、見てますか？これがナタの泳ぎです【原神5.0】', publishedAt: '2024-09-08'},
  {videoId: 'uDxvlu20HZA', title: '隠しアチーブさん、無慈悲すぎてしまう…【原神5.0】', publishedAt: '2024-09-07'},
  {videoId: 'u_u3zXtuC9s', title: 'トゥラン大火山の『噴火』見たことある？【原神5.0】', publishedAt: '2024-09-07'},
  {videoId: 'cHTfmZXwT8w', title: '魔改造されたファデュイ3兄弟が発見されてしまうｗｗ【原神5.0】', publishedAt: '2024-09-06'},
  {videoId: 'krlpHE8uU0s', title: 'ついに登場！ナタの炎神『マーヴィカ』【原神5.0】', publishedAt: '2024-09-05'},
  {videoId: 'LTtSeld_j8Q', title: '『ムアラニ』さん、こう見えて負けなしです【原神5.0】', publishedAt: '2024-09-04'},
  {videoId: 'SFfgDo4MwZk', title: '【え？】実は像に触れなくても属性変えられます【原神5.0】', publishedAt: '2024-09-03'},
  {videoId: 'wkodGjcf9YU', title: '【ほこたて】地方伝説の必殺タックルとディシア【原神5.0】', publishedAt: '2024-09-02'},
  {videoId: '4vgMlGfKOo4', title: '『マスターモード』の幻想シアターをやってみた【原神5.0】', publishedAt: '2024-09-01'},
  {videoId: 'YJOlhrNU6dE', title: '【悲報】太りすぎたユムカ竜さん、見つかる【原神5.0】', publishedAt: '2024-08-31'},
  {videoId: 'Pr1BpBYbDuw', title: 'ナタの地方伝説さん、ぶっ壊れてしまう…【原神5.0】', publishedAt: '2024-08-30'},
  {videoId: 'xGOM8AT3Bu4', title: '新マップ『ナタ』で初日からUIオフにした結果ｗｗ【原神5.0】', publishedAt: '2024-08-29'},
  {videoId: 'yaQBkoqBk1I', title: '蛍さん、ついに竜になってしまうｗｗ【原神5.0】', publishedAt: '2024-08-28'},
  {videoId: 'siKNjIaR8QY', title: '炎主人公、どこ行った？【原神5.0】', publishedAt: '2024-08-28'},
  {videoId: 'lmFBtQ6xsxs', title: '【貯モラ男】明日ナタになってそうな所を巡ってみよう【原神4.8】', publishedAt: '2024-08-27'},
  {videoId: 'cc3rxYxXSCg', title: '狛荷屋チャレンジカップ シムランカ駅伝選手権【原神】', publishedAt: '2024-08-26'},
  {videoId: 'HfXtJmWp4xk', title: '【裏】恐怖！フォンテーヌの動画を上げ終えました男！【原神】', publishedAt: '2024-08-26'},
  {videoId: '1GskS53JlmY', title: 'フォンテーヌ編のアップデートを全部見てみた【原神】', publishedAt: '2024-08-25'},
  {videoId: '6jJ7ISGZjBg', title: '全人類がメロピデ要塞だと思っていた『イプシシマスの塔』【フォンテーヌお別れツアー】', publishedAt: '2024-08-25'},
  {videoId: 'AfE8PH9Qgr8', title: 'フォンテーヌの敵全部倒したら何モラ稼げる？【原神】', publishedAt: '2024-08-24'},
  {videoId: 'hO0fBooJ_X0', title: '復讐の結末と謎の便利アイテム『イェレーナ』【原神4.8】', publishedAt: '2024-08-23'},
  {videoId: 'ZPk_Te0bNvo', title: '探索難易度’’SSS’’の大監獄！メロピデ要塞【フォンテーヌお別れツアー】', publishedAt: '2024-08-23'},
  {videoId: 'NqhG1cYGkso', title: '不運な人間と『血の償い』【原神4.8】', publishedAt: '2024-08-22'},
  {videoId: 'L2UiiQeg7kk', title: 'フォンテーヌで周回しまくった日課ルート集【原神】', publishedAt: '2024-08-22'},
  {videoId: 'Sf0aAv48Yu0', title: '【まとめ見】壁炉の家と『存在しない子供』【原神】', publishedAt: '2024-08-21'},
  {videoId: '1W8aozfL7Ps', title: '数千万モラの伝説の香水『アウグストゥス』を探せ！【原神4.8】', publishedAt: '2024-08-21'},
  {videoId: 'otCtXQx5GDQ', title: 'まだまだたくさんの『旅』が待ってるから【原神4.8】', publishedAt: '2024-08-20'},
  {videoId: 'bT85F3WoOD4', title: 'フォンテーヌで何体敵を倒したのか知ってる？【原神4.8】', publishedAt: '2024-08-20'},
  {videoId: 'pjJMbWjdzLM', title: '【まとめ見】千織ブランドに込められた意味 【原神】', publishedAt: '2024-08-19'},
  {videoId: 'smA2PfFvgKk', title: '【爆速】『囁きの島』にあの乗り物があるんだがｗｗ【原神4.8】', publishedAt: '2024-08-19'},
  {videoId: 'uAIIZcfvL4o', title: 'スメールキャラ総出演のエピローグが謎過ぎるｗｗ【原神4.8】', publishedAt: '2024-08-18'},
  {videoId: 'wQynpnQ3Jso', title: '『水仙十字物語』とかいうガチ名作【フォンテーヌお別れツアー】', publishedAt: '2024-08-18'},
  {videoId: 'rqyfZ62YTYA', title: 'ガイアさん、ありえないくらい日焼けしてしまう…【原神4.8】', publishedAt: '2024-08-17'},
  {videoId: 'G-fpdCPG1kQ', title: '【裏】ゲーム内1週間で何モラ稼げる？後編【原神】', publishedAt: '2024-08-17'},
  {videoId: 'EyjJ2y7hQgg', title: 'ver5.0が激アツすぎて流石にイグニッションです【原神4.8】', publishedAt: '2024-08-16'},
  {videoId: 'xtWRZP69OO8', title: 'フルパワー縛りでチュンボールした結果ｗｗ【原神4.8】', publishedAt: '2024-08-15'},
  {videoId: 'ew1YEY-Rf-s', title: '予告番組ではまだ’’上’’を見せてくれるらしい…【原神4.8】', publishedAt: '2024-08-15'},
  {videoId: 'hHcLdGhpU-0', title: '【奇跡】野良マルチし続けたら視聴者に会えるのか？【原神】', publishedAt: '2024-08-14'},
  {videoId: 'NGmZ9NTg4lQ', title: '【名探偵】来るver5.0の『神アプデ』を大予想してみた【原神4.8】', publishedAt: '2024-08-13'},
  {videoId: 'LMpUMHtiQzY', title: 'フォンテーヌ『最後の宝箱』を大調査してみた【原神】', publishedAt: '2024-08-12'},
  {videoId: 'B1BbW0SERR0', title: '『UIオフ原神ジオゲッサー』が流石に面白い件ｗｗ【原神4.8】', publishedAt: '2024-08-11'},
  {videoId: '3Ds-TkLlYAo', title: '【裏】ゲーム内1週間で何モラ稼げる？前編【原神】', publishedAt: '2024-08-11'},
  {videoId: '59N_Mn3FS5w', title: 'すべての始まりの地 エピクレシス歌劇場【フォンテーヌお別れツアー】', publishedAt: '2024-08-10'},
  {videoId: 'pCBSm0JpoO4', title: 'これで空飛ぶ仲間がもう一人増えたぜ！【原神4.8】', publishedAt: '2024-08-09'},
  {videoId: 'ZNMmw2ElQLY', title: '邂逅！シムランカの『悪龍』【原神4.8】', publishedAt: '2024-08-08'},
  {videoId: 'JEpTZyulDcg', title: 'オリジナル料理を100個作るのって大変なんじゃね？【原神】', publishedAt: '2024-08-07'},
  {videoId: 'a_FK-2XWe1U', title: 'シムランカを救うのは、俺だと思ってた…【原神4.8】', publishedAt: '2024-08-06'},
  {videoId: 'EohObdB7eo4', title: '童話の王国シムランカと『運命の女神』【原神4.8】', publishedAt: '2024-08-05'},
  {videoId: 'bO9rCueeiy8', title: '【グロシ有】さらばフォンテーヌ！七天神像巡りツアー【原神】', publishedAt: '2024-08-04'},
  {videoId: 'yiGfmBhQQ4Q', title: '【裏】怪盗綺良々 遅刻集【原神】', publishedAt: '2024-08-04'},
  {videoId: 'm-F41U41C8k', title: 'ゲーム内7日間で旅費を稼げ！出稼ぎ7Days！【原神】', publishedAt: '2024-08-03'},
  {videoId: 'LYinIcpBQ9k', title: 'シムランカさん、オマージュが豊富すぎてしまうｗｗ【原神4.8】', publishedAt: '2024-08-02'},
  {videoId: 'suAoIURwdoo', title: '遊びやすくなった幻想シアターをやってみた【原神4.8】', publishedAt: '2024-08-01'},
  {videoId: 'qM9edVPZYwI', title: 'オービック家の聖地に色んな方法で侵入すると…【原神4.8】', publishedAt: '2024-07-31'},
  {videoId: '9OV87lzx2Z8', title: 'ナヴィアさん、これはもう星穹列車です…【原神4.8】', publishedAt: '2024-07-30'},
  {videoId: '3hQwfbb9jPw', title: '怪盗綺良々は本当に遅刻しないの？【原神】', publishedAt: '2024-07-29'},
  {videoId: 'bHOZNwmigHY', title: 'オルビット城の『国王』が知り合いすぎるｗｗ【原神4.8】', publishedAt: '2024-07-28'},
  {videoId: 'y7Q6UQbBrxA', title: '【撮り鉄】走る海上列車の写真を撮りたい！【原神4.8】', publishedAt: '2024-07-27'},
  {videoId: 'tapg_lNQ2m8', title: '男たちの夢、シムランカの『海上列車』【原神4.8】', publishedAt: '2024-07-26'},
  {videoId: 'hMC3XvpzpmE', title: 'リオセスリさん、唐突に空を飛んでしまう…【原神4.8】', publishedAt: '2024-07-25'},
  {videoId: '8AkcKo1tTpc', title: 'お前はベルウィンド王国の『守護者』になれ…【原神4.8】', publishedAt: '2024-07-24'},
  {videoId: 'jhfE0pEU9Bk', title: 'キスに決まってるだろ＿＿＿＿。【原神4.8】', publishedAt: '2024-07-23'},
  {videoId: 'vrvjFij3Ae8', title: 'シムランカにガチャが実装されてしまうｗｗ【原神4.8】', publishedAt: '2024-07-22'},
  {videoId: 'RHTF_Y2aBog', title: '限定マップ『シムランカ』でっけえぇええ！！【原神4.8】', publishedAt: '2024-07-21'},
  {videoId: '_PehDAW0a5U', title: '【裏】この夏、最もアイテムを崖から転がした男【原神】', publishedAt: '2024-07-21'},
  {videoId: 'mGFlOoVViuA', title: '『空想の軌跡』を初見でやってみた【原神4.8】', publishedAt: '2024-07-20'},
  {videoId: '9yEQplhxhQo', title: '【裏】UIオフ初見螺旋がハードモードすぎるｗｗ【原神】', publishedAt: '2024-07-20'},
  {videoId: 'Q-9a2xgG6wc', title: 'UIオフで住民リクエスト？余裕です【原神4.8】', publishedAt: '2024-07-19'},
  {videoId: 'XY2Z8ENup4M', title: 'ver4.8のボス周回が速すぎるｗｗ【原神4.8】', publishedAt: '2024-07-18'},
  {videoId: 'SKTaDSWs2mc', title: '激キモ秘境さん、変わり果てた姿で発見される…【原神4.8】', publishedAt: '2024-07-17'},
  {videoId: '5Oqt0b_rPpk', title: 'デイリー依頼とは今日でお別れかもしれません【原神4.7】', publishedAt: '2024-07-16'},
  {videoId: 'KvDSz-1j_JI', title: '【神アプデ】4.8の楽しみなところスペシャル【原神4.7】', publishedAt: '2024-07-15'},
  {videoId: '5FmCOXhJdS0', title: '【裏】週ボス召使は自傷で倒れるの？【原神】', publishedAt: '2024-07-15'},
  {videoId: 'HUrYDNgbXVc', title: 'サロンメンバーがまた強くなりました【原神】', publishedAt: '2024-07-14'},
  {videoId: 'b0JKblHyIEM', title: 'ついにあの秘境の難しさがバレたようです【原神4.7】', publishedAt: '2024-07-13'},
  {videoId: 'VUPzvtuEVKg', title: '召使戦で『3000秒』取材をしてみた【原神】', publishedAt: '2024-07-12'},
  {videoId: 'SnehQ6UfXSo', title: 'ありがとう、メリュジーヌ先生【原神4.7】', publishedAt: '2024-07-11'},
  {videoId: '7o_M1TSFjPs', title: 'シグウィンの外見の秘密とは…【原神4.7】', publishedAt: '2024-07-10'},
  {videoId: 'UwjC22oNfF4', title: 'リオセスリが復刻しないのでフリーナが完凸になりました【原神4.7】', publishedAt: '2024-07-09'},
  {videoId: 'A9E5VPdqrmg', title: '狛犬と屏風を敷き詰めて最高率の壺作ろうずｗｗ【原神】', publishedAt: '2024-07-08'},
  {videoId: 'sPU7XFzUN9Y', title: '崖からアイテム転がし選手権で大記録樹立！？【原神】', publishedAt: '2024-07-07'},
  {videoId: 'VcSAyQ8ooXc', title: 'アーンショウのお隣さん、ついに判明【原神4.7】', publishedAt: '2024-07-06'},
  {videoId: 'PtXPnAMtYhU', title: '蛍さん、風邪で逝く…【原神4.7】', publishedAt: '2024-07-05'},
  {videoId: '_Vx1gD8siBw', title: '【名探偵】今年の夏イベ枠大予想大会が開かれました【原神4.7】', publishedAt: '2024-07-04'},
  {videoId: 'nibgVHJL3WY', title: '【裏】幻想シアターで詰みたい男が現れました（？）他【原神】', publishedAt: '2024-07-03'},
  {videoId: 'oCAVO8o0YiE', title: 'パイモンさん、俺たちに内緒で美を探求してしまう…【原神4.7】', publishedAt: '2024-07-02'},
  {videoId: 'AqHyKbbXnkI', title: '『幻想シアター』に初見で挑んでみた【原神4.7】', publishedAt: '2024-07-01'},
  {videoId: 'dTG4OJM2-kg', title: '千尋の砂漠の『赤鷲』全部倒したら鳥肉パラダイス！？【原神】', publishedAt: '2024-06-30'},
  {videoId: 'w6araF0sI5M', title: '木こりしていたらなぜか釣り人が集まってしまいました【原神】', publishedAt: '2024-06-29'},
  {videoId: 'wFks_aRwnKI', title: '【裏】最もバリアフリーな国はどこ？【原神】', publishedAt: '2024-06-28'},
  {videoId: 'IBOBLeq5B4Y', title: '誕生日の八重神子をたくさん使ってみた【原神】', publishedAt: '2024-06-27'},
  {videoId: 'SIdixC4Qbjs', title: '『探索派遣』実際にやってみたら大変なのでは？【原神】', publishedAt: '2024-06-26'},
  {videoId: 'Ax0GcXK0ZF4', title: '恐怖！チーム編成数パンパン男！【原神】', publishedAt: '2024-06-25'},
  {videoId: 'B4872EXB38g', title: '【感想回】俺は本当に蛍なのか…？【原神4.7】', publishedAt: '2024-06-24'},
  {videoId: '1tj4znaLUcE', title: '【裏】久々にシャルロットでフォンテーヌを渡ってみた【原神】', publishedAt: '2024-06-23'},
  {videoId: 'PDrWe-66dnU', title: 'フォンテーヌ’’最強’’の決闘代理人【原神4.7】', publishedAt: '2024-06-22'},
  {videoId: 'bBiGzHuFrV8', title: 'お宝大好き三銃士、現る【原神4.7】', publishedAt: '2024-06-21'},
  {videoId: 'Bd1uWNpLY48', title: 'テイワットで買えるもの全部買ったら何モラ？【原神】', publishedAt: '2024-06-20'},
  {videoId: '6KGa-AKc8Lg', title: '【裏】誰ともマッチングしない本当の秘境を求めて【原神】', publishedAt: '2024-06-19'},
  {videoId: '7MQ2lhlkoKM', title: '科学院跡地に追加された謎の地下空間【原神4.7】', publishedAt: '2024-06-18'},
  {videoId: '3yVEOlomgqc', title: 'クロリンデさん、3歳で剣を握ってしまう…【原神4.7】', publishedAt: '2024-06-17'},
  {videoId: 'HXUJptvHm1s', title: '誰ともマッチングしない秘境ってあるの？【原神】', publishedAt: '2024-06-16'},
  {videoId: '30VVQ3JnLNM', title: 'クロリンデ（GM）を無視して詰んだ結果…【原神4.7】', publishedAt: '2024-06-15'},
  {videoId: 'XHR58I1OoKg', title: 'クロリンデの伝説任務気合入りすぎだろｗｗ【原神4.7】', publishedAt: '2024-06-14'},
  {videoId: 'XwJWC8RAMQw', title: '【234個】おいドラゴンスパイン、宝箱全部出せ【原神】', publishedAt: '2024-06-13'},
  {videoId: '1nOoTascuNI', title: '『存在の証明』【原神4.7】', publishedAt: '2024-06-12'},
  {videoId: 'ShiiE1eQGtc', title: '『末光の剣』ダインスレイヴ【原神4.7】', publishedAt: '2024-06-11'},
  {videoId: 'dF-RGtqbMhE', title: '【裏】キャラが全員戦闘不能だったら七天神像はどうする？【原神】', publishedAt: '2024-06-10'},
  {videoId: 'o-5_trM1xn4', title: '『記憶の中にしか存在しない人』【原神4.7】', publishedAt: '2024-06-08'},
  {videoId: 'uWXer9V1qWY', title: '一撃で七天神像枯らして天理泣かそうぜｗｗｗ【原神】', publishedAt: '2024-06-07'},
  {videoId: 'dRmIeJKQRVE', title: '一括装備機能がまたアップデートしてたので使ってみた【原神4.7】', publishedAt: '2024-06-06'},
  {videoId: 'vW7L9BqVFG8', title: '螺旋さん、月1更新になるも超便利になってしまう…【原神4.7】', publishedAt: '2024-06-05'},
  {videoId: 'Z8tLhSsF9cw', title: '【不穏】4.7の楽しみなところスペシャル【原神4.6】', publishedAt: '2024-06-04'},
  {videoId: 'bnxEqLABxBM', title: '『コレイ！コップ！』【原神4.6】', publishedAt: '2024-06-04'},
  {videoId: '2z3sRKMfc-E', title: '決闘！vs沈黙の殿がアツすぎる【原神4.6】', publishedAt: '2024-06-03'},
  {videoId: 'IqT_QqEa2iU', title: '1億モラ貯まったのでちょっと使ってみた【原神】', publishedAt: '2024-06-03'},
  {videoId: 'hjIHHGnhO-M', title: 'デカすぎる特殊マップ『沈黙の殿』と『セトス』【原神4.6】', publishedAt: '2024-06-02'},
  {videoId: 'PVI-vEwnLSo', title: 'スメールのガバガバテントの謎がついに明かされる…【原神4.6】', publishedAt: '2024-06-01'},
  {videoId: 'wI2P_kyf4qA', title: '天理視点ミニマップ禁止でフォンテーヌ廷から脱出できるか【原神】', publishedAt: '2024-06-01'},
  {videoId: 'VqE3JcVax1Y', title: '【終】徒歩で全ボス巡り旅 稲妻編【原神】', publishedAt: '2024-05-31'},
  {videoId: 'eS71X6l0og0', title: '1年ぶりのセノがいつも通りでした【原神4.6】', publishedAt: '2024-05-31'},
  {videoId: 'JygBO_g2Z3Q', title: '一斗さん、異様に歌が上手すぎてしまう…【原神4.6】', publishedAt: '2024-05-30'},
  {videoId: 'DYGJU_5AmPU', title: '【裏】徒歩で全ボス巡り旅 スメールｰ層岩巨淵編【原神】', publishedAt: '2024-05-29'},
  {videoId: 'ysdpNndx7J4', title: '稲妻にロックの波がやってきた！【原神4.6】', publishedAt: '2024-05-29'},
  {videoId: 'P0hUYbLzyaw', title: 'アチーブメントコンプリート！1226個振り返ってみた【原神】', publishedAt: '2024-05-28'},
  {videoId: 'W74DwuYBzU8', title: '残りの隠しアチーブを一斉捜査してみた【原神4.6】', publishedAt: '2024-05-27'},
  {videoId: 'AvFMoJ9nWE0', title: '『時を超えた空想』でフォンテーヌに技術革新が起きそう！【原神4.6】', publishedAt: '2024-05-26'},
  {videoId: 'JyUJpaggxDM', title: '【裏】徒歩で全ボス巡り旅 フォンテーヌ編【原神】', publishedAt: '2024-05-26'},
  {videoId: '4PFI-8kqqIw', title: 'フォンテーヌ最終マップの世界任務が少なすぎて泣いちゃった【原神4.6】', publishedAt: '2024-05-25'},
  {videoId: '_ly6ytu3FmM', title: '【悲報】爆炎樹さん、手術成功で無事壊れる【原神4.6】', publishedAt: '2024-05-25'},
  {videoId: 'pxN4IGsvTrs', title: '【裏】徒歩で全ボス巡り旅 モンド璃月編【原神】', publishedAt: '2024-05-24'},
  {videoId: '6-CxTXjg0mE', title: 'ヴィシャップ無限狩りスポットが実装されとる！【原神4.6】', publishedAt: '2024-05-24'},
  {videoId: 'kWsoIf2FF-M', title: '【波乱】徒歩で全ボス撃破するとどれくらいかかるの？ 後編【原神4.6】', publishedAt: '2024-05-23'},
  {videoId: 'piv2GuxKnIM', title: '徒歩で全ボス撃破するとどれくらいかかるの？ 前編【原神4.6】', publishedAt: '2024-05-22'},
  {videoId: 'FnyWINHnhew', title: '新卒デッドエージェントさん、現る【原神4.6】', publishedAt: '2024-05-21'},
  {videoId: 'mAYnJvwAWkM', title: '猫と魔神と龍王と諧律のカンティクル【原神4.6】', publishedAt: '2024-05-20'},
  {videoId: 'Pw8ahGts1m0', title: 'レムスさん聞こえますか？オレ達から貴方への鎮魂歌です【原神4.6】', publishedAt: '2024-05-19'},
  {videoId: 'jMZPTfb7clw', title: '【裏】買い忘れレシピ大捜索スペシャル【原神】', publishedAt: '2024-05-19'},
  {videoId: 'qAEQ-62S_U4', title: '孤高の地方伝説『シネアス』【原神4.6】', publishedAt: '2024-05-18'},
  {videoId: 'Fu4DFztZWsU', title: 'そろそろ全レシピの熟練度をマスター出来るのでは？【原神】', publishedAt: '2024-05-17'},
  {videoId: 'tJ8g8pS658Y', title: '往日の海の『永遠の都』が絶景過ぎる…【原神4.6】', publishedAt: '2024-05-16'},
  {videoId: 'zDmPZgWMZdU', title: '【ネタバレ有】ピノコニー編で情緒を破壊されたので喋らせてください【スターレイル】', publishedAt: '2024-05-15'},
  {videoId: 'eOuyI85umbo', title: '負荷上限分の狛犬で来壺者を出迎えてやろう【原神】', publishedAt: '2024-05-14'},
  {videoId: 'f6l36LgVyy4', title: '『巨大黄金アンコウ』とかいう可愛すぎるマシナリーｗｗ【原神4.6】', publishedAt: '2024-05-13'},
  {videoId: 'YAEiggO-bFA', title: '【感謝】登録者2000人！よりぬきchぱないもん', publishedAt: '2024-05-12'},
  {videoId: 'lwx1EQV9iak', title: '行ってらっしゃい クリーヴ【原神4.6】', publishedAt: '2024-05-11'},
  {videoId: 'so0ddpOXkag', title: '璃月に宝箱が26個もあるらしいので大調査してみた【原神4.6】', publishedAt: '2024-05-10'},
  {videoId: 'K9lGKJh20Zk', title: '執行官第4位『召使』戦が絶望的すぎる…【原神4.6】', publishedAt: '2024-05-09'},
  {videoId: 'OSoJcuMSQ9Y', title: 'しれっと変更されていたある場所の謎【原神4.6】', publishedAt: '2024-05-08'},
  {videoId: 'cPLicpkYEO8', title: 'もしも明日、ペトリコール町に出張になったら…【原神】', publishedAt: '2024-05-07'},
  {videoId: 'k5thGl8SSJw', title: '壁炉の家の亡霊？『クリーヴ』【原神4.6】', publishedAt: '2024-05-06'},
  {videoId: 'dHZdjgkxRkM', title: '『存在しない子供』、分かってしまったかもしれません…【原神4.6】', publishedAt: '2024-05-05'},
  {videoId: '3dgdJCldHJg', title: '【香川】実際日課にどれくらいかけてるのか測ってみた【原神】', publishedAt: '2024-05-04'},
  {videoId: 'NabsJy5Hcg8', title: '【裏】半年ぶりの魔偶トリオに会いに行く【原神】', publishedAt: '2024-05-03'},
  {videoId: '-BW2GY19M2s', title: 'ウスさん、無事旅人に手懐けられる【原神4.6】', publishedAt: '2024-05-02'},
  {videoId: 'y_ZU1um8sbs', title: '【裏】ひっそり追加されたスメールマップを探索したら宝箱がなかった【原神】', publishedAt: '2024-05-01'},
  {videoId: 'Bvc4C7y1rtY', title: '超優秀になったトレジャーコンパスを使ってみた【原神4.6】', publishedAt: '2024-04-30'},
  {videoId: 'HXbAxdHdk9c', title: '光って喋る謎の猫『ウッスー』【原神4.6】', publishedAt: '2024-04-29'},
  {videoId: 'ppoAV1U8gbs', title: '新マップで別の銀河の男に遭遇したんだがｗｗ【原神4.6】', publishedAt: '2024-04-28'},
  {videoId: '30jWmzUvTpc', title: '『挑戦者・9』に初見で挑んでみた【原神4.6】', publishedAt: '2024-04-27'},
  {videoId: 'cDxbNHcroy0', title: '神子、ファトゥス4位を止めてくれ【原神4.6】', publishedAt: '2024-04-26'},
  {videoId: 'LzTx090wE3o', title: '超快適になった塵歌壺の石回収をやってみた【原神4.6】', publishedAt: '2024-04-25'},
  {videoId: 'D3dV4kay8W4', title: '【悲報】メタモンさん、変わり果てた姿で発見される【原神4.6】', publishedAt: '2024-04-24'},
  {videoId: '_PwCi5AOT_Y', title: '『ネコネコ白魔法使い』現る【原神4.5】', publishedAt: '2024-04-23'},
  {videoId: 'SYlc-m5diMM', title: '【裏】vsコーチ 激闘の記録【ヒトカラ🎤】', publishedAt: '2024-04-22'},
  {videoId: 'acv7vdfaMGw', title: '【裏】26歳、初めてのガイア不法入国【原神】', publishedAt: '2024-04-22'},
  {videoId: 'QcflwNMjVFw', title: '『命の契約』で力尽きる前にフォンテーヌを1周できる？【原神】', publishedAt: '2024-04-21'},
  {videoId: 'wWJdiDjjqdw', title: 'デートイベントのアチーブが遊ばれてる件【原神4.5】', publishedAt: '2024-04-20'},
  {videoId: 'OmLldB10avM', title: '【3927㎞】閑雲は日に千里を駆けるらしい…【原神】', publishedAt: '2024-04-19'},
  {videoId: 'pwHozxLWkic', title: 'リネットさん、モードが多すぎる【原神4.5】', publishedAt: '2024-04-18'},
  {videoId: '-miT2U6UwH0', title: '【裏】4.6の楽しみなところスペシャル【原神4.5】', publishedAt: '2024-04-17'},
  {videoId: 'Ju8SRFg4tco', title: '#ありがとう七葉寂照秘密主【原神4.5】', publishedAt: '2024-04-16'},
  {videoId: 'HHCDSaL2QIw', title: '地脈の花に終点はあるの？【原神】', publishedAt: '2024-04-16'},
  {videoId: 'hq7WXY21HNY', title: '【定期】こんなところにもフリーナ殿【原神4.5】', publishedAt: '2024-04-15'},
  {videoId: 'jnFv6BwhQ6Q', title: 'シュヴルーズ&リネさん、やってしまう…【原神4.5】', publishedAt: '2024-04-14'},
  {videoId: 'AQecetzWdcU', title: '苦節3時間、ついにもえかを救う男【ヒトカラ🎤】④終', publishedAt: '2024-04-13'},
  {videoId: 'oBsKBhsnuHQ', title: '【裏】杉を上限狩りして花粉を消滅させよう【原神】', publishedAt: '2024-04-13'},
  {videoId: 'Fprlx_KKmj4', title: 'リネットとデートできるって聞いてたんですが…【原神4.5】', publishedAt: '2024-04-12'},
  {videoId: 'mEYbLUWPWbI', title: 'ver4.6で追加されそうな所達を歩いてみた【原神4.5】', publishedAt: '2024-04-11'},
  {videoId: 'Oh3hzFzt8Ug', title: '【悲報】ラスボスさん、マジで強すぎてしまうｗ【ヒトカラ🎤】③', publishedAt: '2024-04-10'},
  {videoId: 'BrpnBJNyAAY', title: '【誕生日】シャルロットはフォンテーヌ廷から脱出できたの？【原神4.5】', publishedAt: '2024-04-10'},
  {videoId: 'xUAhHwl5fls', title: 'シャルロットvsガイア 稲妻不法入国バトル【原神】', publishedAt: '2024-04-09'},
  {videoId: 'lt7DJLM90TE', title: '一般おじさん、一線を越えてしまう…【ヒトカラ🎤】②', publishedAt: '2024-04-08'},
  {videoId: 'h4Y1Y8ziwxs', title: 'リネットに貰った謎のアイテム『運命指示器』【原神4.5】', publishedAt: '2024-04-08'},
  {videoId: 'pTh3D9y09Gg', title: '【裏】モンドに特級ポーション士が生まれるまで【原神4.5】', publishedAt: '2024-04-07'},
  {videoId: 'A1feCA5IK7Q', title: '音ゲーの難しさが一番怖い【ヒトカラ🎤】①', publishedAt: '2024-04-06'},
  {videoId: 'dzmhci6cZWo', title: '呑星の鯨を1000頭誅伐してみた【原神】', publishedAt: '2024-04-05'},
  {videoId: 'H-PlpfFeSpw', title: '一括装備機能にいろんなキャラの聖遺物を任せてみた【原神4.5】', publishedAt: '2024-04-04'},
  {videoId: 'j7ug1RFQh_I', title: '視聴者と挑む『サムネだけ見てタイトル当て選手権』【第二回】', publishedAt: '2024-04-03'},
  {videoId: 'WOkVhFjdGPQ', title: '格の違いを見せつける『雷鳴の裁錦師』【原神4.5】', publishedAt: '2024-04-02'},
  {videoId: 's0NPUkKVM7A', title: '【裏】半休ヌヴィレットと新卒ナヒーダの道中トーク【原神】', publishedAt: '2024-04-02'},
  {videoId: 'Lv6aEd8ZleQ', title: 'モンドの新社会人は教令院で働けるの？【原神】', publishedAt: '2024-04-01'},
  {videoId: 'AStvh8fA7Xo', title: '千織屋の商品を全千切りした結果…【原神4.5】', publishedAt: '2024-03-31'},
  {videoId: 'Cc9i90TA2bI', title: '【ネタ会議】視聴者さん、絶妙すぎるネタを提案してしまう…', publishedAt: '2024-03-30'},
  {videoId: 'YOPJ1aUpc6s', title: '『千織屋』の作りこみすげえ！【原神4.5】', publishedAt: '2024-03-30'},
  {videoId: '66YpdZh4-7E', title: '狛荷屋チャレンジカップ 沈玉の谷川下り選手権【原神】', publishedAt: '2024-03-29'},
  {videoId: '6To4ofJWE6c', title: '特級ポーション士、モラをカンストさせ現役引退【原神4.5】', publishedAt: '2024-03-28'},
  {videoId: 'OBtP4-hQ-YI', title: '推し達がやってきたので使ってみた【白猫】', publishedAt: '2024-03-28'},
  {videoId: 'GT92b6sZ3dM', title: '「愚か」の意味を知っているか？【原神4.5】', publishedAt: '2024-03-27'},
  {videoId: 'yFTSpdVOMjk', title: '【裏】冒険の証の『普通』の敵も全部倒したら…【原神】', publishedAt: '2024-03-26'},
  {videoId: 'Nl84NsjsmPA', title: '狛荷屋に迫る、ポーションの魔の手【原神4.5】', publishedAt: '2024-03-25'},
  {videoId: 'Ykammzz_s6E', title: 'ポーションさん、突然インフレを始めてしまう…【原神4.5】', publishedAt: '2024-03-24'},
  {videoId: 'BAMraWh-d7M', title: '【悲報】モンドさん、もうポーション産業をやめられない【原神4.5】', publishedAt: '2024-03-23'},
  {videoId: 'xT9dCKusfew', title: 'ヌヴィレットは本当に半日で観光できたの？【原神4.4】', publishedAt: '2024-03-22'},
  {videoId: 'GwUNiqAtgbo', title: 'ポーションイベのコンテンツ量ヤバくない？【原神4.5】', publishedAt: '2024-03-21'},
  {videoId: '26bsbXA0UWc', title: 'ドエロいポーションを目指し、営業停止になる男【原神4.5】', publishedAt: '2024-03-20'},
  {videoId: 'nfKGeIs_knA', title: '1000人ありがとう！チャンネル1年目を振り返ってみた', publishedAt: '2024-03-20'},
  {videoId: 'eqoYEVsew4I', title: '【難】これ、どのパイモン？【原神】', publishedAt: '2024-03-19'},
  {videoId: 'hMOuhMbmCnc', title: '蛍のアトリエ、開幕【原神4.5】', publishedAt: '2024-03-18'},
  {videoId: 'bLhWXOR_rnQ', title: '【裏】そろそろ七葉（略）主のバリアを無視したい【原神】', publishedAt: '2024-03-17'},
  {videoId: 'oYPtzrOXF5w', title: 'エウルア、覚えておくわ構文の活用形を発見【原神4.4】', publishedAt: '2024-03-16'},
  {videoId: 'Fg76zy87nHE', title: '璃月での遭遇率が高すぎる荒瀧派【原神4.4】', publishedAt: '2024-03-15'},
  {videoId: 'hf9fTn6iIw8', title: '【原神】魔法鍾女使ってみた', publishedAt: '2024-03-15'},
  {videoId: 'Nr2RLoFodXE', title: 'ファルザン先輩の舌を唸らせたい【原神4.4】', publishedAt: '2024-03-14'},
  {videoId: '0HsNG-5OugI', title: 'シェフ旅人、初日からとんでもない料理を振る舞う【原神4.4】', publishedAt: '2024-03-13'},
  {videoId: 'ANGMhtDGcos', title: 'これから毎日地方伝説を狩ろうぜ？【原神4.5】', publishedAt: '2024-03-13'},
  {videoId: '0zHa6FGftA8', title: 'フリーナと鍾離、ついに邂逅【原神4.4】', publishedAt: '2024-03-12'},
  {videoId: 'FA1es5DwNv8', title: '冒険の証の精鋭を全部倒すとどれくらい稼げる？【原神】', publishedAt: '2024-03-12'},
  {videoId: '1qvcFpakneM', title: 'チームフォンテーヌ、翹英荘に大集合【原神4.4】', publishedAt: '2024-03-11'},
  {videoId: '5GVoVNLGoeo', title: '海灯祭、今年も神ムービーを作ってしまう…【原神4.4】', publishedAt: '2024-03-10'},
  {videoId: '1BDw5qjPuM4', title: '昼間から凧上げに勤しむ岩神【原神4.4】', publishedAt: '2024-03-09'},
  {videoId: 'B_AbZQ7GiS8', title: '【裏】知恵冠余らせ委員会 対策会議【原神】', publishedAt: '2024-03-08'},
  {videoId: '85TZ5trxWDY', title: '誰？【原神4.4】', publishedAt: '2024-03-08'},
  {videoId: 'ZsFTrdODwog', title: 'パイモン、凧になる【原神4.4】', publishedAt: '2024-03-07'},
  {videoId: 'hShjRI06b6g', title: '仙人さん、茶葉を爆買いしてしまう…【原神4.4】', publishedAt: '2024-03-06'},
  {videoId: 'w45blwLa-eE', title: '【悲報】削月築陽&理水畳山、モブ落ち【原神4.4】', publishedAt: '2024-03-05'},
  {videoId: '7_u7oJMV49o', title: '【裏】妾自身が殺生櫻になる事じゃ【原神】', publishedAt: '2024-03-04'},
  {videoId: 'Zvzfxk-fdSY', title: '【裏】1000日超えたけど、やってて良かった日課【原神】', publishedAt: '2024-03-02'},
  {videoId: 'mndydm1MsYw', title: '沈玉の谷隠しアチーブ多すぎィ！至急調査します【原神4.4】', publishedAt: '2024-03-01'},
  {videoId: 'Rt5n96se1hQ', title: 'シャンジュン、ウソだよな？【原神4.4】', publishedAt: '2024-02-29'},
  {videoId: '9x_vmfgGhmU', title: '遺瓏埠の宝箱がIQ高過ぎる【原神4.4】', publishedAt: '2024-02-28'},
  {videoId: 'gi78T3-kj2s', title: '古華派の遺宝、まさかの『暗鉄剣』？【原神4.4】', publishedAt: '2024-02-27'},
  {videoId: 'a1S1SV0UxOk', title: 'パイモンさん、とんでもない料理を作ってしまう…【原神4.4】', publishedAt: '2024-02-26'},
  {videoId: '4JZeRMo0RaI', title: 'ついに古華派に入門するぞ！【原神4.4】', publishedAt: '2024-02-25'},
  {videoId: 'zmC7UVmwwes', title: '激ムズ風景パズルvs冒険ランク60【原神4.4】', publishedAt: '2024-02-24'},
  {videoId: 'aIlqdWKxHg0', title: 'ランダム出現の霊淵がレア過ぎるｗｗ【原神4.4】', publishedAt: '2024-02-23'},
  {videoId: 'Yrz-7La6cJg', title: '【原神】八重神子のつかいかた', publishedAt: '2024-02-22'},
  {videoId: 'eNXhyU3HWC0', title: '【まとめ見】留雲借風真君のお引越し秘話【原神】', publishedAt: '2024-02-20'},
  {videoId: 'ZQJ5EitmnzY', title: '閑雲、家を買う【原神4.4】', publishedAt: '2024-02-19'},
  {videoId: 'E30VHDjsKRo', title: 'ずっと浸ってたい この夢【原神4.4】', publishedAt: '2024-02-18'},
  {videoId: 'AjEEDAGrlfE', title: '実は伏線だらけだった閑鶴の章【原神4.4】', publishedAt: '2024-02-17'},
  {videoId: 'QYjLDbsL1ok', title: '申鶴、バイトを始める【原神4.4】', publishedAt: '2024-02-16'},
  {videoId: '2P2BWSyHFJ8', title: '閑雲さん、お母さんキャラに仕上がってしまう【原神4.4】', publishedAt: '2024-02-15'},
  {videoId: 'a88DUElBPok', title: '璃月の地方伝説は強いの？【原神4.4】', publishedAt: '2024-02-14'},
  {videoId: 'wGYHKbRA_TA', title: '『沈玉の祝福』とかいう不器用ラブコメ【原神4.4】', publishedAt: '2024-02-13'},
  {videoId: 'jHhMYYhnw2A', title: '沈玉の谷がまた広くなってしまったんだがｗｗ【原神4.4】', publishedAt: '2024-02-12'},
  {videoId: 'jOWPFDvjzu0', title: '【猫載】綺良々で沈玉の谷を駆け抜ける【原神】', publishedAt: '2024-02-11'},
  {videoId: 'mCO5svD67-8', title: 'マオくん、とんでもないものと友達になってしまう【原神4.4】', publishedAt: '2024-02-10'},
  {videoId: 'yZ60ksXtris', title: '【4.4】璃月とフォンテーヌは『半日必着』になったの？【原神】', publishedAt: '2024-02-09'},
  {videoId: 'Vwv08hBdavE', title: '突如始まったモブの戦闘で、戦場カメラマンになってしまう男【原神4.4】', publishedAt: '2024-02-08'},
  {videoId: 'zB-NOtMNvmk', title: '『遺瓏埠』のギミックが螺旋より難しいんだがｗｗ【原神4.4】', publishedAt: '2024-02-07'},
  {videoId: 'SMSOaxJj_iw', title: '＜零＞の熾天をリルテットで遊ぶ【白猫プロジェクト】', publishedAt: '2024-02-07'},
  {videoId: 'Y7kDP8jEIlA', title: '沈玉の谷で水上タクシーを発見し、爆上がりする男【原神4.4】', publishedAt: '2024-02-06'},
  {videoId: 'fd4O8Qp5ZOQ', title: '『聖遺物一括装備』が結構おもしろい【原神4.4】', publishedAt: '2024-02-05'},
  {videoId: 'u1B5uRlmaYM', title: '【猫載】綺良々でモンドｰフォンテーヌｰ稲妻を歩く【原神】', publishedAt: '2024-02-04'},
  {videoId: 'IQU9FV4seK8', title: '沈玉の谷の精鋭達がみんな可愛い件【原神4.4】', publishedAt: '2024-02-03'},
  {videoId: '8flPKaRzVqI', title: 'ぴょんぴょん超開花八重神子使ってみた【原神】', publishedAt: '2024-02-02'},
  {videoId: 'WXZ5O60DZjo', title: '上陸早々、茶葉泥棒を繰り返すモンドの英雄【原神4.4】', publishedAt: '2024-02-01'},
  {videoId: '39fs7UAdk4g', title: '【観光】沈玉の谷からフォンテーヌに上陸しよう！【原神4.4】', publishedAt: '2024-01-31'},
  {videoId: '4myosRlJ-oU', title: '『アン・イシュワルダ』とかいう色々規格外なラスボス【MHWI】', publishedAt: '2024-01-30'},
  {videoId: 'vDk0ZX9qJsY', title: '全ハンターの母『マム・タロト』【MHWI】', publishedAt: '2024-01-29'},
  {videoId: 'LQ9FhMuaVnI', title: '【悲報】忍さん、うっかりインスタントラーメンを開発【原神4.3】', publishedAt: '2024-01-28'},
  {videoId: 'w3JQSJc_phY', title: 'なぜか虫相撲にノリノリな煙緋【原神4.3】', publishedAt: '2024-01-27'},
  {videoId: '-1xBc8Au3t0', title: '綺良々の『半日必着』はどの国まで？【原神】後編', publishedAt: '2024-01-26'},
  {videoId: '5oERtrssW9Y', title: '【旅行】綺良々の『半日必着』はどの国まで？【原神】前編', publishedAt: '2024-01-25'},
  {videoId: 'hMNIZk6qj7M', title: 'これを虫相撲と言い張る勇気【原神4.3】', publishedAt: '2024-01-24'},
  {videoId: 'MseXj-0Pbdw', title: '【裏】『呑星の鯨』100連討伐の裏で、スカークに思いを馳せる男【原神】', publishedAt: '2024-01-23'},
  {videoId: 'KhI4cOncetY', title: '古代樹のクシャがキモすぎる【MHWI】', publishedAt: '2024-01-22'},
  {videoId: 'mdijCB4ca8E', title: '【裏】1月度カットした動画まとめ　無限ミラボ編【MHWI】', publishedAt: '2024-01-21'},
  {videoId: 'VFquFxYnt7E', title: 'トリプルクラウンになったシャルロットを表と裏で使ってみた【原神】', publishedAt: '2024-01-19'},
  {videoId: 'EQscgr93CSE', title: '人類の9割が忘れてしまった『氷刃佩くベリオロス』【MHWI】', publishedAt: '2024-01-18'},
  {videoId: '_FTiJ9Klnx8', title: '『二銃士』100000点とさせてください…【原神4.3】', publishedAt: '2024-01-17'},
  {videoId: 'PmNb6D80Ud8', title: 'もうこの映像でフリーナ賞取れるのでは？【原神4.3】', publishedAt: '2024-01-16'},
  {videoId: 'TeA9RsBSA8Q', title: '宵宮とこっそり抜け出すイベントが始まってしまう…【原神4.3】', publishedAt: '2024-01-14'},
  {videoId: 'dOlNLgMdRqU', title: '陸珊瑚の’’王’’はキリンかネロか【MHWI】', publishedAt: '2024-01-13'},
  {videoId: 'mP_sTA83cEg', title: '【102頭】チャンネル登録者の人数分捕鯨してみた【原神】', publishedAt: '2024-01-12'},
  {videoId: 'LOOZjLQRgto', title: '2世代の最強ラージャンと連戦したら脳が壊れちゃった【MHWI/MHRS】', publishedAt: '2024-01-11'},
  {videoId: 'UA3ZgbIwfgY', title: 'それは…「正義」だ。【原神4.3】', publishedAt: '2024-01-10'},
  {videoId: '_Wp1WQdMZV4', title: 'アルバトリオン装備で『ミラボレアス』を倒したい【MHWI】', publishedAt: '2024-01-09'},
  {videoId: 'dsVDGDjMijA', title: 'シュヴルーズさん今勤務中ですよ！【原神4.3】', publishedAt: '2024-01-07'},
  {videoId: 'QpAivaxh12M', title: '最強メンバーによる映影収録が始まる…【原神4.3】', publishedAt: '2024-01-06'},
  {videoId: 'dvznUW-uAbs', title: '最強のふたり 千織&シュヴルーズ【原神4.3】', publishedAt: '2024-01-05'},
  {videoId: 'sXpw2S8T6GA', title: '4年ぶりのアルバに『冰気片手』を解禁した結果ｗｗ【MHWI】', publishedAt: '2024-01-04'},
  {videoId: 'G6udtiiIO1g', title: 'フリーナ、パスタ買ってあげるから監督やってくれ【原神4.3】', publishedAt: '2024-01-03'},
  {videoId: 'C1IKjHg0zp8', title: 'ブレスワンパン装備で王カーナがキツすぎるｗｗ【MHWI】', publishedAt: '2024-01-02'},
  {videoId: 'BRUF8EFC3z8', title: 'フォンテーヌに神里家と宵宮一行がやって来た！【原神4.3】', publishedAt: '2024-01-01'},
  {videoId: 'oWKVRVra5ZE', title: '【年末極ノ番】2023年のカットしたトークを1つにして君にぶつける【原神/MHWI】', publishedAt: '2023-12-31'},
  {videoId: 'ULT27X9pjlo', title: '最推しモンスター『ネルギガンテ』が可愛すぎる【MHWI】', publishedAt: '2023-12-30'},
  {videoId: 'UXslSkj3Ma0', title: '蛍さん、身体能力が限界突破してしまう…【原神4.3】', publishedAt: '2023-12-28'},
  {videoId: 's80MHvI8bBg', title: 'ナヴィアのマカロンがデカすぎる【原神4.3】', publishedAt: '2023-12-27'},
  {videoId: 'L_knSSn6G68', title: 'ナヴィアとの記念撮影が最高すぎる【原神4.3】', publishedAt: '2023-12-26'},
  {videoId: '3k0iHFM8Kok', title: 'シャルロットサンタ、稲妻に不法入国を試みる【原神】', publishedAt: '2023-12-25'},
  {videoId: 'Gye5MFHklWI', title: '【裏】シャルロット無限海渡り道中記【原神】Q', publishedAt: '2023-12-24'},
  {videoId: 'X7rtUMlVlPc', title: '【裏】シャルロット無限海渡り道中記【原神】破', publishedAt: '2023-12-23'},
  {videoId: '-tkJ8oW1JXo', title: '【裏】シャルロット無限海渡り道中記【原神】序', publishedAt: '2023-12-22'},
  {videoId: 'XZip-VdsfbA', title: '【大余韻】個人的名場面で振り返る『罪人の円舞曲』【原神】', publishedAt: '2023-12-21'},
  {videoId: 'Uwy2OImz4DA', title: '【裏】新時代の聖遺物厳選は判断が早すぎた【原神4.3】', publishedAt: '2023-12-20'},
  {videoId: '5ioRH6gurK8', title: 'お前が王になるんだよ【原神4.2】', publishedAt: '2023-12-19'},
  {videoId: 'sF1HSCuDoJU', title: 'またホヨバが男の子の頬を赤らめさせてる【原神4.2】', publishedAt: '2023-12-18'},
  {videoId: 'rg1LtXIysDc', title: '20時間かけて探索を終わらせる男【原神4.2】', publishedAt: '2023-12-16'},
  {videoId: 'NAngajekZyM', title: 'いってらっしゃい　キャタピラー【原神4.2】', publishedAt: '2023-12-15'},
  {videoId: 'afZXX_rcgXc', title: 'キャタピラー誕生秘話が闇深過ぎる【原神4.2】', publishedAt: '2023-12-14'},
  {videoId: '-VUzoxW_RNY', title: '剣客猫『ドン・シラノ』さん、空を飛ぶ【原神4.2】', publishedAt: '2023-12-13'},
  {videoId: '44vddEMZ_BQ', title: '『啓示の書』、ついに揃う【原神4.2】', publishedAt: '2023-12-12'},
  {videoId: 'sehuw1Qj3ZQ', title: 'メロピデ要塞に人が増えすぎてパンパンな件【原神4.2】', publishedAt: '2023-12-11'},
  {videoId: 'W-VXQqWQ_sE', title: 'ショシベルさん、普通に人を〇してしまう…【原神4.2】', publishedAt: '2023-12-10'},
  {videoId: 'SJZH0K2hBfA', title: '【苦行】シャルロットでフォンテーヌの海を横断したい【原神】', publishedAt: '2023-12-08'},
  {videoId: 'nnh7UnSVS9Y', title: 'もれなく全員の様子がおかしい謎の世界任務が始まってしまうｗｗ【原神4.2】', publishedAt: '2023-12-07'},
  {videoId: '6QsK0gZXizU', title: '謎のメリュジーヌ『パシーフ』現る【原神4.2】', publishedAt: '2023-12-06'},
  {videoId: 'epn2pF9peck', title: '大長編任務『水仙十字物語』のサプライズが良すぎる剣【原神4.2】', publishedAt: '2023-12-05'},
  {videoId: '6ukoJaX_9uo', title: '降臨者の次は『超越者』になってしまったのだが【原神4.2】', publishedAt: '2023-12-04'},
  {videoId: 'FnGBtEXu9fE', title: '『マリアンの物語』のラスボスが鯨よりヤバそうｗｗ【原神4.2】', publishedAt: '2023-12-02'},
  {videoId: '_z6v_RI3ZJk', title: 'ジェイコブさん、人類の補完を計画してしまう…【原神4.2】', publishedAt: '2023-12-01'},
  {videoId: 'p59tHQdbv20', title: '『ザ・ラスティ―・ラダー』の雰囲気が磯丸すぎる【原神4.2】', publishedAt: '2023-11-30'},
  {videoId: '4vv9SIX8mMg', title: 'チーム水仙十字結社、始動【原神4.2】', publishedAt: '2023-11-29'},
  {videoId: 'zp-6gawBiRU', title: '【悲報】『呑星の鯨』さん、めちゃくちゃ弱い【原神4.2】', publishedAt: '2023-11-28'},
  {videoId: 'yQRwpB29k3U', title: '【パロディ】シャルロットが可愛すぎる【原神】', publishedAt: '2023-11-28'},
  {videoId: 'c2gT86ZMGBE', title: '神を騙り、神の目に止まった人【原神4.2】', publishedAt: '2023-11-27'},
  {videoId: 'IzcGgZ0GL0U', title: '元水神の初めての友達【原神4.2】', publishedAt: '2023-11-26'},
  {videoId: 'KITCHR1FX7A', title: '賃貸で大学生みたいな生活を送るフリーナ【原神4.2】', publishedAt: '2023-11-25'},
  {videoId: 'IBm0w-_BR_U', title: '『神の心』さん不穏すぎてしまう【原神4.2】', publishedAt: '2023-11-24'},
  {videoId: 'VyD-PoOFj30', title: 'エピローグが最高過ぎる【原神4.2】', publishedAt: '2023-11-23'},
  {videoId: 'QqIYVRuSo4s', title: '神の死刑と予言の結末は…【原神4.2】', publishedAt: '2023-11-22'},
  {videoId: 'w1Cj4VK1roU', title: '『第182375幕』【原神4.2】', publishedAt: '2023-11-21'},
  {videoId: '-LRQmHkK1Qo', title: 'フリーナの正体が辛過ぎる【原神4.2】', publishedAt: '2023-11-20'},
  {videoId: 'y8o0Dexq7Gk', title: '正義と『原罪』の国フォンテーヌ【原神4.2】', publishedAt: '2023-11-18'},
  {videoId: 'OHUX2gcG-n8', title: '気が付けばいつもピンク髪の法器をメインにしている【原神】', publishedAt: '2023-11-17'},
  {videoId: 'sbRIJIzjdj8', title: '一番の被害者、彼なのではないか【原神4.2】', publishedAt: '2023-11-16'},
  {videoId: 'tVh0wyNqmRg', title: '『神』を裁く裁判、始まる【原神4.2】', publishedAt: '2023-11-15'},
  {videoId: 'K7h8-5W-imY', title: 'スキル置いてウロウロ編成が思ったよりもやりよる【原神】', publishedAt: '2023-11-14'},
  {videoId: 'X-SD4HFSPVM', title: '『魔女会』とかいう一生謎な勢力【原神4.2】', publishedAt: '2023-11-13'},
  {videoId: 'bcWy8B2zOY8', title: '死後も裁判し続けるやばすぎる国【原神4.2】', publishedAt: '2023-11-12'},
  {videoId: 'xOBsenRQE9k', title: '罪人の円舞曲、絶望的なスタートをしてしまう…【原神4.2】', publishedAt: '2023-11-11'},
  {videoId: 'zQA4GBNqHhc', title: '『水形タルパ』とかいうパワー系に分からされる男【原神4.2】', publishedAt: '2023-11-10'},
  {videoId: 'axgi73Wd8rg', title: '完凸シャルロットで殴ろうとしたらハードルが高かった【原神4.2】', publishedAt: '2023-11-09'},
  {videoId: 'noZa34qYMc0', title: '【グロシ】シャルロット完凸まで無限ガチャ【原神4.2】', publishedAt: '2023-11-08'},
  {videoId: 'GHwRIUPjxgI', title: '4.2直前だけど不穏要素しか残ってない件【原神4.1】', publishedAt: '2023-11-07'},
  {videoId: 'md-aawJ5CVc', title: 'フォンテーヌの敵全部倒したらレベルどこまで上がる？【原神4.1】', publishedAt: '2023-11-06'},
  {videoId: 'eGp6wvok8-Y', title: '【裏】後編：レベル7リオセスリとフォンテーヌ全討伐の旅【原神】', publishedAt: '2023-11-04'},
  {videoId: 'TvfH78DES6E', title: '【裏】レベル1リオセスリとフォンテーヌ全討伐の旅【原神】', publishedAt: '2023-11-03'},
  {videoId: 'QK0SdurFAlE', title: '【裏】どうやら3PT要らなくなったらしい【原神】', publishedAt: '2023-11-01'},
  {videoId: 'NW8YldWk3k4', title: '清泉町、3年越しのフラグ回収【原神4.1】', publishedAt: '2023-10-31'},
  {videoId: 'MgGN90wA6-4', title: 'ディオナさん、ほぼ小松だった【原神4.1】', publishedAt: '2023-10-30'},
  {videoId: 'GtrDZZYXdeY', title: '詩歌大会参戦も、漢字力が終わっている旅人【原神4.1】', publishedAt: '2023-10-28'},
  {videoId: 'tz6GhHnAHJ0', title: 'もしかしてオラオラですかーッ！？【原神4.1】', publishedAt: '2023-10-27'},
  {videoId: '_wKicZr5dkQ', title: 'パイモンさん、デリカシーが終わる【原神4.1】', publishedAt: '2023-10-26'},
  {videoId: 'pIf38_jVnHY', title: '【裏】4.1探索終了！後語り【原神】', publishedAt: '2023-10-25'},
  {videoId: 'VZQnDIHWKCY', title: '丸1週間かけて探索を終わらせる男【原神4.1】', publishedAt: '2023-10-25'},
  {videoId: '4ddw4mpXlao', title: 'アーニャ in フォンテーヌ【原神4.1】', publishedAt: '2023-10-24'},
  {videoId: 'GBcVfKMn1wA', title: 'メロピデ要塞の初見コンプが無理ゲーな件【原神4.1】', publishedAt: '2023-10-23'},
  {videoId: 'B3BhnS5czvQ', title: '【裏】スタレ+原神で現代最強が生まれるのでは【原神】', publishedAt: '2023-10-22'},
  {videoId: 'ViIJHcweViA', title: 'フォンタがぶ飲みでアチーブ貰える国、フォンテーヌ【原神4.1】', publishedAt: '2023-10-21'},
  {videoId: '7y8bJPo7MR4', title: 'フォンテーヌ山頂、流石に綺麗すぎる【原神4.1】', publishedAt: '2023-10-20'},
  {videoId: 'GWItwqZqf48', title: 'パイモンにもへそくりがあった件【原神4.1】', publishedAt: '2023-10-19'},
  {videoId: 'hdPdO0OHpfU', title: 'メロピデ要塞さん、無限に世界任務を生んでしまう…【原神4.1】', publishedAt: '2023-10-18'},
  {videoId: 'YZ4En7upGAM', title: '冒険ランク60、コーチングデビュー【原神4.1】', publishedAt: '2023-10-17'},
  {videoId: 'h4oqNQ0zlF4', title: '科学院さん、2度目のアパマン【原神4.1】', publishedAt: '2023-10-16'},
  {videoId: 'cYqFFBgCs2Q', title: '【裏】スターレイルとの比較の中で話が逸れるくだり【原神】', publishedAt: '2023-10-16'},
  {videoId: 'X6eF6a_MSf8', title: '『イゾルト』とかいうファデュイ最高戦力【原神4.1】', publishedAt: '2023-10-15'},
  {videoId: 'i0nIFik4pLg', title: 'ヒルチャールの集落にヤバいのあるけど…【原神4.1】', publishedAt: '2023-10-14'},
  {videoId: 'hu39LsjF8eQ', title: '原海アベラントの『頂点』【原神4.1】', publishedAt: '2023-10-13'},
  {videoId: 'uvRSD8L6ggQ', title: '【悲報】フォンテーヌ、やっぱりダメそう【原神4.1】', publishedAt: '2023-10-12'},
  {videoId: 'ioub8lfKVBY', title: 'デカすぎんだろ…【原神4.1】', publishedAt: '2023-10-11'},
  {videoId: 'QPDw9eY4Tg0', title: 'フォンテーヌ信号機三姉妹【原神4.1】', publishedAt: '2023-10-10'},
  {videoId: 'BSg4YCSiZKc', title: '水龍泣かないで【原神4.1】', publishedAt: '2023-10-09'},
  {videoId: 'a2uzIcpYTHc', title: 'ヌヴィレットさん、辛過ぎる【原神4.1】', publishedAt: '2023-10-06'},
  {videoId: 'P35YLGPPcoI', title: '相棒、ウソだよな？【原神4.1】', publishedAt: '2023-10-05'},
  {videoId: '8LRE-KqAnbs', title: 'ヌヴィレットさん、それはもう神の所業です【原神4.1】', publishedAt: '2023-10-04'},
  {videoId: 'QDjIgJUtshQ', title: 'リオセスリ&クロリンデコンビが激アツ過ぎ【原神4.1】', publishedAt: '2023-10-03'},
  {videoId: 'sQFIg9PH7u8', title: '【悲報】フォンテーヌの海、汚染水になってしまう…【原神4.1】', publishedAt: '2023-10-01'},
  {videoId: 'Fi247XfqAwk', title: 'パイモンさん、言い過ぎてしまう…【原神4.1】', publishedAt: '2023-09-30'},
  {videoId: 'xF4qq_sxmPE', title: '岩神、働く【原神4.1】', publishedAt: '2023-09-29'},
  {videoId: 'BwtW-IC0A8g', title: '承太郎さん、うっかり看守になってしまう…【原神4.1】', publishedAt: '2023-09-28'},
  {videoId: 'Ry60Jv-aYMc', title: '罪状:ケーキつまみ食い【原神4.1】', publishedAt: '2023-09-27'},
  {videoId: 'p6u0Ri5rCZw', title: '来る【原神4.0】', publishedAt: '2023-09-26'},
  {videoId: 'brCECEXNCqI', title: '孤児院を探索するゲームが一番怖い【All Alone】', publishedAt: '2023-09-06'},
  {videoId: 'fnjW2U3VN-o', title: 'フォンテーヌが最高だった【原神4.0】', publishedAt: '2023-09-04'},
  {videoId: 'Ic2gaPOVGEA', title: 'フリーナの部屋に不法侵入したい【原神4.0】', publishedAt: '2023-09-02'},
  {videoId: '43e8jEkQEhU', title: '螺旋にやって来た『鉄甲熔炎帝王』とかいうケジャン【原神4.0】', publishedAt: '2023-09-01'},
  {videoId: 'nAQxqEAjwvw', title: 'アチーブメント『1000』越えの時代到来【原神4.0】', publishedAt: '2023-08-30'},
  {videoId: 'AlI4nDZ_zUQ', title: '『ルキナの泉』の声が不穏でしかない件【原神4.0】', publishedAt: '2023-08-29'},
  {videoId: '8tjfRbUHGxw', title: '『世界式』はもう始まっちゃってるんだよね【原神4.0】', publishedAt: '2023-08-28'},
  {videoId: 'ZlcYAqC8bJQ', title: 'セイモアとかいう擬犬化スヴァローグ【原神4.0】', publishedAt: '2023-08-26'},
  {videoId: 'KhtQQvotwfQ', title: 'シズクちゃん、うっかり地上最強生物になってしまう…【原神4.0】', publishedAt: '2023-08-25'},
  {videoId: 'PeRspwD4e0Q', title: 'リネとかいうオサレマジシャン【原神4.0】', publishedAt: '2023-08-24'},
  {videoId: 'iOdh4Mp8oyc', title: '海底遺跡と謎の円卓がエモすぎる！【原神4.0】', publishedAt: '2023-08-23'},
  {videoId: 'MvSiMFRU0-Q', title: '神を差し置いて主役過ぎる男、ヌヴィレット【原神4.0】', publishedAt: '2023-08-22'},
  {videoId: 'sfpoSc9Wid8', title: '有 罪【原神4.0】', publishedAt: '2023-08-21'},
  {videoId: 'Lc1QNb6qYM8', title: '西の雷電将軍、クロリンデがカッコ良すぎる【原神4.0】', publishedAt: '2023-08-19'},
  {videoId: 'rC6smfyUlBM', title: '逆転裁判始まったけど、どうする？【原神4.0】', publishedAt: '2023-08-18'},
  {videoId: '0BecwcxW3Og', title: '水中探索が良すぎて泣いちゃった【原神4.0】', publishedAt: '2023-08-17'},
  {videoId: 'oM0Na0c-vY8', title: 'フォンテーヌが最高過ぎる【原神4.0】', publishedAt: '2023-08-16'},
  {videoId: 'Mj0rGgm7gik', title: '【裏】チラーズコーヒー新人スタッフの成長の過程【閉店事件】', publishedAt: '2023-08-14'},
  {videoId: 'MCPByFGjiCQ', title: '愛ほど歪んだ呪いはなかった【閉店事件】④終', publishedAt: '2023-08-13'},
  {videoId: 'usCWZAfW6WI', title: '’’特級’’出現【閉店事件】③', publishedAt: '2023-08-12'},
  {videoId: 'xpxp3OeN1nc', title: '超高速ベビーカー事件簿【閉店事件】②', publishedAt: '2023-08-11'},
  {videoId: '4L6HZkAGm9o', title: '何よりもワンオペが怖い【閉店事件】①', publishedAt: '2023-08-10'},
  {videoId: '6BwEU6Hviu4', title: '3000万貯モラ男とスメール振り返り【原神ver3.8】', publishedAt: '2023-08-08'},
  {videoId: 'fNIfOY-agBI', title: '一番わかりやすい通夜の走り方【通夜】', publishedAt: '2023-08-03'},
  {videoId: 'dLNEMM2AWLE', title: '今期螺旋は誰でも連れて行っていいらしい！【原神ver3.8】', publishedAt: '2023-08-01'},
  {videoId: 'u9BHW2GrVgc', title: '今年は『過去最高難易度』らしい…【白猫プロジェクト】', publishedAt: '2023-07-29'},
  {videoId: 'GLgjcOR6dqM', title: 'サムネからタイトル当てクイズがゴミすぎる【三国志？】', publishedAt: '2023-07-25'},
  {videoId: 'EZFwVdIleH4', title: '【全130本】自分の動画ならサムネだけでタイトル完答できるに決まっとる', publishedAt: '2023-07-22'},
  {videoId: 'o4tJad_eiDk', title: 'フォンテーヌとかいう不穏な話しかない国【原神ver3.8】', publishedAt: '2023-07-21'},
  {videoId: 'OS_mXwFaq0Y', title: '一緒にフォンテーヌ行かないか？【原神ver3.8】', publishedAt: '2023-07-20'},
  {videoId: 'nxVzrOoq-jA', title: 'これは…　課金ですね…【原神ver3.8】', publishedAt: '2023-07-17'},
  {videoId: 'l218O0bwbSQ', title: '君はもう大人しくナン焼いててくれ【原神ver3.8】', publishedAt: '2023-07-16'},
  {videoId: '7DIqditst9M', title: '『ワニ型サイクロン仕様ワニアーマー対海戦重艦砲式アミューズメント用ハイドロキャノン』が可愛い【原神ver3.8】', publishedAt: '2023-07-14'},
  {videoId: '-SFSPulElw4', title: 'コレイ、お前もダンサーにならないか？【原神ver3.8】', publishedAt: '2023-07-13'},
  {videoId: 'hZAy_uTneAU', title: '2人でジェットコースター乗れ。【原神ver3.8】', publishedAt: '2023-07-12'},
  {videoId: 'T2BN78Gp3fM', title: 'いよいよジェットコースターも実装された件【原神ver3.8】', publishedAt: '2023-07-11'},
  {videoId: 'Z7wCOXubgSQ', title: '私の剣は、あなたのために在る！【原神ver3.8】', publishedAt: '2023-07-08'},
  {videoId: 'hjer_ThnD5I', title: '謎の秘境を守る正体不明の球体　シズクちゃん【原神ver3.8】', publishedAt: '2023-07-07'},
  {videoId: 'X0Yg4R2Az9g', title: 'ヴェルーリヤ・ミラージュ、でっか！【原神ver3.8】', publishedAt: '2023-07-06'},
  {videoId: 'vq2_oxzQNck', title: '自由過ぎる自動字幕を見つつ振り返り副音声【夜間警備】', publishedAt: '2023-07-04'},
  {videoId: 'VliTfjGMWzI', title: 'Twitterも死んだし俺も死んだわ【夜間警備】⑤終', publishedAt: '2023-07-02'},
  {videoId: '--9p5T4srXo', title: 'パワハラの末路【夜間警備】④', publishedAt: '2023-07-01'},
  {videoId: 'v1-QZs8DXY0', title: '怖かったり怖くなかったりしろ【夜間警備】③', publishedAt: '2023-06-30'},
  {videoId: 'FfcI9D9zRRI', title: '【朗報】幽霊さん、シャイ【夜間警備】②', publishedAt: '2023-06-29'},
  {videoId: 'OPUPZuRd8JA', title: 'すいません、今日でこの仕事辞めたいです【夜間警備】①', publishedAt: '2023-06-28'},
  {videoId: 'CXQ9FV2dl78', title: '行かないで…【原神ver3.7】', publishedAt: '2023-06-25'},
  {videoId: 'F_CksfcZp4A', title: '【悲報】七聖召喚、宝盗団でも流行る【原神ver3.7】', publishedAt: '2023-06-24'},
  {videoId: 'vDyyryaBID8', title: '【離垢者の奴】雷音権現を許すな【原神ver3.7】', publishedAt: '2023-06-22'},
  {videoId: 'iqh-xOU11QY', title: '八重神子メイン運用はある意味難しい【原神ver3.7】', publishedAt: '2023-06-21'},
  {videoId: 'nM32q2vB9c8', title: '君たちどんどん表情豊かになるね【原神ver3.7】', publishedAt: '2023-06-20'},
  {videoId: 'HAxVXetiBNY', title: 'あの荒瀧・天下第一・一斗「無敵」デッキを!?【原神ver3.7】', publishedAt: '2023-06-18'},
  {videoId: 'wQ07L2Nevsc', title: '将軍かよｫｫｫｫｫ!!【原神ver3.7】', publishedAt: '2023-06-17'},
  {videoId: 'AGqdHfs1_28', title: '胡桃は生えてくる【原神ver3.7】', publishedAt: '2023-06-14'},
  {videoId: 'u-92wilb1n4', title: 'ガイア、嘘だろ？【原神ver3.7】', publishedAt: '2023-06-13'},
  {videoId: '4m1XOD_owFE', title: 'こ、これがフォンテーヌの洗礼…！？【原神ver3.7】', publishedAt: '2023-06-11'},
  {videoId: 'avdLg6LX4Cw', title: '歴代最高ムービー、決まる【原神ver3.7】', publishedAt: '2023-06-10'},
  {videoId: 'QAsuwUeKs3I', title: 'お、車いすやんけ！拾ったろ！【原神ver3.7】', publishedAt: '2023-06-04'},
  {videoId: '6dg9DLHt9x0', title: 'スメールのかまって神、参戦【原神ver3.7】', publishedAt: '2023-06-03'},
  {videoId: '7i3jJoSRosQ', title: '宵宮がデートしてくれるって言った！！！【原神ver3.7】', publishedAt: '2023-05-28'},
  {videoId: '_5liWbQFndw', title: 'カーヴェは必ず幸せにします【原神ver3.6】', publishedAt: '2023-05-26'},
  {videoId: 'SxhlEAt4WRs', title: 'これはもう付き合ってます【原神ver3.6】', publishedAt: '2023-05-25'},
  {videoId: 'Hz2E5fLzDRc', title: 'ﾋｬｸﾏﾝﾓﾗｧ!?【原神ver3.6】', publishedAt: '2023-05-24'},
  {videoId: 'srQtrynoy04', title: 'あっ…（察し）【原神ver3.6】', publishedAt: '2023-05-23'},
  {videoId: 'K-Oi9bGaDUM', title: '学院祭の謎競技が可愛すぎる【原神ver3.6】', publishedAt: '2023-05-22'},
  {videoId: 'JZ5o4M6V-4E', title: 'もうずっと漫才しててくれ【原神ver3.6】', publishedAt: '2023-05-21'},
  {videoId: 'LtFpoF9Qt5E', title: '学院祭、普通に過酷すぎでは？【原神ver3.6】', publishedAt: '2023-05-10'},
  {videoId: 'BvfUSJWMI14', title: 'アルハイゼンとニィロウの微妙なコンビがとても良い【原神ver3.6】', publishedAt: '2023-05-08'},
  {videoId: '70kYbi2TZjY', title: '【朗報】キャンディス、外に出る【原神ver3.6】', publishedAt: '2023-05-06'},
  {videoId: 'oFGm-mKFsaM', title: '【裏】10人の凄さは如何にして伝えるべきか【サンブレイク】', publishedAt: '2023-05-03'},
  {videoId: 'owLQhIdaiYw', title: '特別討究激昂ラージャンさん、様子がおかしい【サンブレイク】', publishedAt: '2023-05-01'},
  {videoId: '4JznhKLaH90', title: '特討シャガル初見に天衣合気片手で【サンブレイク】', publishedAt: '2023-04-29'},
  {videoId: 'WMiiX4siNPw', title: '3.6新マップ感想回【原神ver3.6】', publishedAt: '2023-04-27'},
  {videoId: 'AjWwva5KqWw', title: '克服シャガルマガラに分からされる合気片手使い【サンブレイク】', publishedAt: '2023-04-26'},
  {videoId: 'oGR6AeZ4GQ0', title: 'ソルシュ、お前死なないのか…？【原神ver3.6】', publishedAt: '2023-04-25'},
  {videoId: 'Ht1NlKWFL-I', title: 'なぜか盾無しニンジャソードでアマツに挑む男を救う【サンブレイク】', publishedAt: '2023-04-23'},
  {videoId: 'hDBdR0isa8g', title: '終盤にマジで申し訳程度の対空をされるソルシュ様【原神ver3.6】', publishedAt: '2023-04-23'},
  {videoId: '9qfz6vk8TQY', title: '「地下の国」の入り口が意味深すぎて大興奮【原神ver3.6】', publishedAt: '2023-04-22'},
  {videoId: '4Tk44v0DhA0', title: '【悲報】ナセジュナさん、どう考えても裏切ってしまう…【原神ver3.6】', publishedAt: '2023-04-19'},
  {videoId: 'KPStrSILcIs', title: '1クエストで200回合気取ってみたい【サンブレイク】', publishedAt: '2023-04-17'},
  {videoId: '5VzG8FCQwhY', title: 'あり得ない量のギミックを司る花霊「ソルシュ様」【原神ver3.6】', publishedAt: '2023-04-16'},
  {videoId: 'u6HjgiKJPf4', title: '【懐古】かつて全人類が使ったヴィルフリートさん、100億ダメ出してしまう…【白猫】', publishedAt: '2023-04-15'},
  {videoId: 'GPB2w6bcKCM', title: '新精鋭ヒルチャールレンジャーのアイテムが不穏すぎる【原神ver3.6】', publishedAt: '2023-04-14'},
  {videoId: 'iormYIVtXXE', title: '良ボス過ぎて必殺技見れない件【原神ver3.6】', publishedAt: '2023-04-13'},
  {videoId: 'royk9Q0Qy04', title: 'マップ追加のアプデ待ちの時間、最高過ぎるだろ！【原神ver3.5】', publishedAt: '2023-04-11'},
  {videoId: 'QXQuZFf3hdo', title: '【裏】野良マルチで10回昇竜するまでの道中【サンブレイク】①', publishedAt: '2023-04-01'},
  {videoId: 'gJxyHCT-0V8', title: '登録者10人記念に10人の攻撃を滅昇竜に変換する【サンブレイク】', publishedAt: '2023-03-29'},
  {videoId: 'g3ZCu7lJHM0', title: '俺よりオトモアイルーのほうがモンハン上手くないか？【サンブレイク】', publishedAt: '2023-03-26'},
];


let currentVideo = null; // 現在の動画データ
let count = 0;           // 問題数
let count_result = 0;    // 正解数

// ==============================
// 🔍 サムネイル表示（キーワード検索付き）
// ==============================
document.getElementById("buttonA").addEventListener("click", () => {
  const keyword = (document.getElementById("keywordInput")?.value || "").trim();

  // キーワードで絞り込み（空なら全件）
  let candidates;
  if (keyword === "") {
    candidates = videos.slice();
  } else {
    const keyLower = keyword.toLowerCase();
    candidates = videos.filter(v => v.title.toLowerCase().includes(keyLower));
  }

  // 該当がない場合
  if (!candidates || candidates.length === 0) {
    alert("該当する動画が見つかりませんでした。");
    return;
  }

  // フィルタ後の中からランダム選択
  currentVideo = candidates[Math.floor(Math.random() * candidates.length)];

  // サムネイル表示
  const thumbnailUrl = `https://img.youtube.com/vi/${currentVideo.videoId}/maxresdefault.jpg`;
  document.getElementById("thumbnail").src = thumbnailUrl;

  // タイトル非表示
  document.getElementById("title").style.visibility = "hidden";

  // フォームクリア
  clearText();
});

// Enterキーでもサムネイル表示
document.getElementById("keywordInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("buttonA").click();
  }
});

// ==============================
// 🎯 タイトル表示（正答判定 + 履歴更新）
// ==============================
document.getElementById("buttonB").addEventListener("click", () => {
  count_up();
  historyText();

  if (currentVideo) {
    document.getElementById("title").innerText = `${currentVideo.title}`;
    document.getElementById("title").style.visibility = "visible";
  } else {
    alert("サムネイルが表示されていません。");
  }
});


// ==============================
// 📜 履歴表示切替（ポップアップ版）
// ==============================
document.getElementById("toggleHistory").addEventListener("click", function() {
  const historyModal = document.getElementById("history-modal");
  
  // hiddenクラスを付け外ししてポップアップを開閉
  historyModal.classList.toggle("hidden");
});

// ポップアップの外側（黒い背景）をタップした時も閉じるようにするおまけ
document.getElementById("history-modal").addEventListener("click", function(e) {
  if (e.target.id === "history-modal") {
    this.classList.add("hidden");
  }
});
// ==============================
// ▶️ 動画を視聴するボタン
// ==============================
document.getElementById("buttonC").addEventListener("click", function() {
  if (currentVideo && currentVideo.videoId) {
    window.open("https://www.youtube.com/watch?v=" + currentVideo.videoId, "_blank");
  } else {
    alert("先にサムネイルを表示してください。");
  }
});

// ==============================
// 🐦 ツイート機能
// ==============================
document.getElementById("tweetButton").addEventListener("click", function () {
  const tweetCount = count || 0;
  const tweetCorrect = count_result || 0;
  const rate = tweetCount > 0 ? Math.round((tweetCorrect / tweetCount) * 100) : 0;
  const tweetText = `サムネだけ見てタイトル当て選手権\n${tweetCount}問中${tweetCorrect}問正解しました！(正答率:${rate}%)\nhttps://05777a.github.io/panaimon/index.html`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
});

// ==============================
// 🔢 正解数カウント
// ==============================
function count_up() {
  if (currentVideo) count++;

  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");

  if (currentVideo && currentVideo.title) {
    if ((form1 && form1.value.trim() === currentVideo.title) ||
        (form2 && form2.value.trim() === currentVideo.title)) {
      count_result++;
    }
  }

  result1.innerHTML = count + "問中";
  result2.innerHTML = count_result + "問正解！";
  rate.innerHTML = "正答率：" + Math.round((count_result / count) * 100) + "%";
}

// ==============================
// 🧹 フォームクリア
// ==============================
function clearText() {
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  if (form1) form1.value = '';
  if (form2) form2.value = '';
}

// ==============================
// 📜 履歴更新
// ==============================
function historyText() {
  const history = document.getElementById("history");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");

  let newHistoryText = '';

  if (form1 && form1.value.trim() !== '') {
    newHistoryText += `回答: ${form1.value}<br>`;
  }
  if (form2 && form2.value.trim() !== '') {
    newHistoryText += `回答: ${form2.value}<br>`;
  }

  if (currentVideo && currentVideo.title) {
    newHistoryText += `正解: <a href="https://www.youtube.com/watch?v=${currentVideo.videoId}" target="_blank">${currentVideo.title}</a><br>`;
  }

  if (newHistoryText) {
    history.innerHTML += newHistoryText + '<br>';
  }
}

// ==============================
// 💬 入力フォーム切替（スマホ用）
// ==============================
function switchInput() {
  const container = document.getElementById("input-container");
  if (window.matchMedia("(max-width: 1300px)").matches) {
    container.innerHTML = '<textarea id="form2" class="title_text"></textarea>';
  } else {
    container.innerHTML = '<input type="text" class="title_text" id="form1">';
  }
}
switchInput();
window.addEventListener("resize", switchInput);

// ==============================
// 📱 ナビメニュー開閉
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

document.getElementById("buttonA").addEventListener("click", () => {
  const keyword = (document.getElementById("keywordInput")?.value || "").trim().toLowerCase();
  
  // 追加：入力された日付を取得
  const startDate = document.getElementById("startDate").value; // YYYY-MM-DD 形式
  const endDate = document.getElementById("endDate").value;     // YYYY-MM-DD 形式

  // フィルタリング処理
  let candidates = videos.filter(v => {
    // 1. キーワードチェック
    const matchKeyword = keyword === "" || v.title.toLowerCase().includes(keyword);
    
    // 2. 日付チェック（動画の yyyy/MM/dd を yyyy-MM-dd に変換して比較）
    const videoDate = v.publishedAt ? v.publishedAt.split(' ')[0].replace(/\//g, '-') : "";
    
    let matchDate = true;
    if (startDate && videoDate < startDate) matchDate = false;
    if (endDate && videoDate > endDate) matchDate = false;

    return matchKeyword && matchDate;
  });

  // 該当がない場合
  if (candidates.length === 0) {
    alert("該当する期間・キーワードの動画が見つかりませんでした。");
    return;
  }

  // フィルタ後の中からランダム選択
  currentVideo = candidates[Math.floor(Math.random() * candidates.length)];

  // サムネイル表示処理（以下略）
  const thumbnailUrl = `https://img.youtube.com/vi/${currentVideo.videoId}/maxresdefault.jpg`;
  document.getElementById("thumbnail").src = thumbnailUrl;
  document.getElementById("title").style.visibility = "hidden";
  clearText();
});
// ==============================
// 💡 ヒント表示・切り替え機能
// ==============================
document.getElementById("hintButton").addEventListener("click", () => {
  if (!currentVideo) {
    alert("先にサムネイルを表示してください。");
    return;
  }

  const hintContent = document.getElementById("hint-content");
  const hintElement = document.getElementById("hintText");

  // すでにヒントが生成されているかチェック（空なら生成）
  if (hintElement.innerText === "") {
    const fullTitle = currentVideo.title;
    const titleArray = fullTitle.split('');
    const keepVisibleReg = /[\s【】「」『』\[\]()（）、！!？?._\-+]/;
    const maskableIndices = [];

    for (let i = 0; i < titleArray.length; i++) {
      if (!keepVisibleReg.test(titleArray[i])) {
        maskableIndices.push(i);
      }
    }

    let revealCount = Math.floor(maskableIndices.length / 3);
    if (revealCount === 0 && maskableIndices.length > 0) revealCount = 1;

    const shuffled = maskableIndices.slice().sort(() => 0.5 - Math.random());
    const revealedIndices = new Set(shuffled.slice(0, revealCount));

    let hint = '';
    for (let i = 0; i < titleArray.length; i++) {
      if (keepVisibleReg.test(titleArray[i]) || revealedIndices.has(i)) {
        hint += titleArray[i];
      } else {
        hint += '○';
      }
    }
    hintElement.innerHTML = `ヒント：${hint} <br><small>(${currentVideo.publishedAt} 投稿)</small>`;
  }

  // 表示・非表示を切り替える（hiddenクラスの付け外し）
  hintContent.classList.toggle("hidden");
});

// 次の問題（buttonA）を押したときはヒントを完全にリセットする
document.getElementById("buttonA").addEventListener("click", () => {
  const hintContent = document.getElementById("hint-content");
  const hintElement = document.getElementById("hintText");
  
  if (hintContent) hintContent.classList.add("hidden"); // 非表示に戻す
  if (hintElement) hintElement.innerText = "";        // 中身を空にする
});

// --- 追加：ヒントの状態管理 ---
let hintLevel = 0; 

document.getElementById("hintButton").addEventListener("click", () => {
  if (!currentVideo) {
    alert("先にサムネイルを表示してください。");
    return;
  }

  // 段階を上げる（最大3まで）
  hintLevel++;
  if (hintLevel > 3) hintLevel = 3;

  const hintContent = document.getElementById("hint-content");
  const hintElement = document.getElementById("hintText");
  const hintBtn = document.getElementById("hintButton");
  
  const fullTitle = currentVideo.title;
  const titleArray = fullTitle.split('');

  // 1. 記号（【 】など）だけは最初から見せる設定
  // ※中の文字はマスク対象に含めるため、正規表現を調整
  const keepVisibleReg = /[【】「」『』\[\]()（）\s]/; 
  const maskableIndices = [];

  for (let i = 0; i < titleArray.length; i++) {
    if (!keepVisibleReg.test(titleArray[i])) {
      maskableIndices.push(i);
    }
  }

  // 2. 段階に応じた公開率の設定
  let revealRate = 0;
  if (hintLevel === 1) revealRate = 0;    // 全伏せ（記号のみ）
  if (hintLevel === 2) revealRate = 0.33; // 1/3公開
  if (hintLevel === 3) revealRate = 0.6;  // 約半分以上公開

  // 3. 公開する場所を固定するために、動画ごとにランダム順を保持
  if (!currentVideo.shuffledIndices) {
    currentVideo.shuffledIndices = maskableIndices.slice().sort(() => 0.5 - Math.random());
  }

  const revealCount = Math.floor(maskableIndices.length * revealRate);
  const revealedIndices = new Set(currentVideo.shuffledIndices.slice(0, revealCount));

  // 4. 文字列の組み立て
  let hint = '';
  for (let i = 0; i < titleArray.length; i++) {
    if (keepVisibleReg.test(titleArray[i]) || revealedIndices.has(i)) {
      hint += titleArray[i];
    } else {
      hint += '○';
    }
  }

  // 表示更新
  hintElement.innerHTML = `<strong>ヒント ${hintLevel}/3：</strong>${hint} <small>(${currentVideo.publishedAt} 投稿)</small>`;
 
 
  hintContent.classList.remove("hidden");

  // ボタンの文字を変える
  if (hintLevel < 3) {
    hintBtn.innerText = `💡 次のヒントを表示 (${hintLevel + 1}/3)`;
  } else {
    hintBtn.innerText = "💡 ヒント最大表示中";
    hintBtn.style.opacity = "0.6";
  }
});

// --- buttonA（次を引く）の時にリセットする処理を追加 ---
document.getElementById("buttonA").addEventListener("click", () => {
  hintLevel = 0; // レベルをリセット
  const hintBtn = document.getElementById("hintButton");
  hintBtn.innerText = "💡 ヒントを表示 (1/3)";
  hintBtn.style.opacity = "1";
  document.getElementById("hint-content").classList.add("hidden");
  document.getElementById("hintText").innerText = "";
});


// --- 履歴モーダルを閉じるボタン（×）の処理を追加 ---
document.getElementById("closeHistory").addEventListener("click", function() {
  document.getElementById("history-modal").classList.add("hidden");
});

// ==============================
// 📱 ナビメニュー開閉
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", function (e) {
      // メニューの active クラスを付け外しする
      navMenu.classList.toggle("active");
      // クリックイベントが他に伝わって即座に閉じないようにする
      e.stopPropagation();
    });

    // メニュー以外をクリックした時に閉じる（おまけ機能）
    document.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  }
});

// 画面が読み込まれたら実行
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", (e) => {
      // .show クラスを付け外しする
      navMenu.classList.toggle("show");
      
      // メニューをクリックした時にイベントが外に漏れないようにする
      e.stopPropagation();
    });

    // メニュー以外（画面のどこか）をクリックしたら閉じるようにする
    document.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  }
});
