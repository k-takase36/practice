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

