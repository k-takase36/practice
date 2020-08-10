# 定義と代入

# name が変数
# "taka" が変数に格納する値
# name = "taka"
# itemo = "book"
# price = 980

# 式展開するとき
# name = "taka"
# puts "Hello!! #{name}"
# # そのまま変数名を書くと変数の値は表示されない
# puts "Hello!! name"

# name = "taka"
# # ヒアドキュメントの中で式展開
# puts <<~TEXT
# Hello!! #{name}
# You are very cool!!
# Let's enjoy programing together!!
# TEXT

# 名前を入れる変数
name = "taka"
# 年齢情報を入れる変数
age = 33
# 住所情報を入れる変数
address = "saitama"
# 電話番号情報を入れる変数
tell = "123-456-7890"

# 変数に格納したデータを式展開で表示
puts <<~TEXT 
【自己紹介】
私の名前は#{name}です。
年齢は#{age}です。
今住んでいるところは#{address}です。
電話番号は#{tell}です。
どうぞよろしくお願いいたします！！
TEXT