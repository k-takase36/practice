# each
# eachは配列や範囲オブジェクトに対して使用することができる繰り返し処理です
# 配列とは何個も要素を格納することができるもので、範囲オブジェクトとは0~100のように、数値的な範囲を表すデータのこと

# users = ["satou", "tanaka", "yamada", "shimizu"]

# # 配列に対してeach文で中身を表示
# # usersの要素１つ１つをnameに代入してブロック内の処理を実行
# users.each do |user|
#   puts "Hello!! #{user}."
# end

# ages = [20, 60, 27, 23]

# ages.each do |age|
#   puts "I'm #{age} years old."
# end

# items = ["book", "food", "movie", "music"]

# items.each do |item|
#   puts "I bought #{item}"
# end

# prefectures = ["Hokkaido", "Okinawa", "Saitama", "Ibaraki"]

# prefectures.each do |prefecture|
#   puts "#{prefecture} is awesome!!"
# end

# each.with_index
# 名前の通り繰り返し処理であるeachをindex番号付きで実行するということ

# users = ["satou", "tanaka", "yamada", "shimizu"]

# # インデックス番号と配列の要素を同時に出力
# users.each.with_index(1) do |name, i|
#   puts "No.#{i} #{name}"
# end

# ages = [20, 40, 50 ,75]

# ages.each.with_index(1) do |age, i|
#   puts "No.#{i}  I'm #{age} years old."
# end

# items = ["book", "food", "movie", "music"]

# items.each.with_index(1) do |item, i|
#   puts "No.#{i} I bought #{item}"
# end

# prefectures = ["Hokkaido", "Okinawa", "Saitama", "Ibaraki"]

# prefectures.each.with_index(1) do |prefecture, i|
#   puts "No.#{i} #{prefecture} is awesome!!"
# end

# サンプルプログラム

# チーム分けするメンバーの名前を格納する配列を定義
# user_list = ["Yanagi", "Saitou", "Aoyagi", "Imai", "Obata", "Takahashi"]

# # チームA,Bのメンバーを格納するための配列
# team_a = []
# team_b = []

# # 配列を取り出すためのeach
# user_list.each.with_index do |user, i|
#   if i.odd?
#     # 配列に要素を格納する
#     team_a << user
#   else
#     # 配列に要素を格納する
#     team_b << user
#   end
# end

# # チームAのメンバーを表示
# # \nを入れて改行
# text = "チームA\n"
# team_a.each.with_index(1) do |member, i|
#   # テキストに文字列連結
#   # チームメンバーを「〜さん」と表示する
#   text += "NO.#{i}:#{member}さん\n"
# end

# # チームBのメンバーを表示
# # \nを入れて改行
# text += "\nチームB\n"
# team_b.each.with_index(1) do |member, i|
#   # テキストに文字列連結
#   # チームメンバーを「〜さん」と表示する
#   text += "No.#{i}:#{member}さん\n"
# end

# # チーム分けの情報を表示
# puts text

# shuffleメソッドを使用し、配列の各要素をランダムに並び替える
user_list = ["Yanagi", "Saitou", "Aoyagi", "Imai", "Obata", "Takahashi"]

# user_listの要素をランダムに入れ替える(破壊的メソッド)
user_list.shuffle!

team_a = []
team_b = []

user_list.each.with_index do |user, i|
  if i.odd?
    team_a << user
  else
    team_b << user
  end
end

text = "チームA\n"
# each.with_indexに変更
team_a.each.with_index(1) do |member, i|
  # 各メンバーに番号を振る
  text += "No.#{i}：#{member}さん\n"
end
text += "\nチームB\n"
team_b.each.with_index(1) do |member, i|
  # 各メンバーに番号を振る
  text += "No.#{i}：#{member}さん\n"
end

puts text