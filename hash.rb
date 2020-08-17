# ハッシュ
# 配列と同様に複数のデータを扱うことができるクラスですが、データはキーとバリューの組み合わせ

# 名前、メール、住所のデータが入ったハッシュの定義
# キー：name, email, address
# バリュー：Tanaka, hoge@co.ne.jp, Saitama
# params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }
# # ハッシュからデータを取り出す
# puts params[:name]

# # ハッシュの別の定義方法
# # キーがシンボルではなく文字列になっている
# params = { "name" => "Tanaka", "email" => "hoge@co.ne.jp", "address" => "Saitama" }

# puts params["email"]

# 現場でもよく使用される書き方
# 途中で改行できる
# params = {
#   name: "Tanaka",
#   email: "hoge@co.ne.jp",
#   address: "Saitama"
# }

# puts params[:address]

# ハッシュの要素を編集
# params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# # データの書き換え
# params[:name] = "Saitou"

# # データの追加
# params[:age] = 33

# puts params[:name]
# puts params[:age]

# # 存在しないキーを指定するとnilになる
# p params[:hobby]

# # ハッシュを使った繰り返し処理
# params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# params.each do |key, value|
#   puts "キー：#{key}"
#   puts "バリュー：#{value}"
# end

# # each メソッドのブロック引数の数を１つにすると、ハッシュの中にキーとバリューが格納される
# params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# params.each do |key_value|
#   # 配列を出力
#   p key_value
# end

# params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# params.each do |key_value|
#   # 配列を出力
#   puts key_value[0]
#   puts key_value[1]
# end

# # ハッシュの比較
# params1 = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }
# params2 = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# # trueが返る
# puts params1 == params2

# params3 = { name: "Tanabe", email: "hoge@co.ne.jp", address: "Tokyo" }
# params4 = { name: "Tanaka", email: "fuga@co.ne.jp", address: "Saitama" }

# # falseが返る
# puts params3 == params4

# ハッシュのサイズを調べる
puts {}.size
puts { name: "Tanabe", email: "hoge@co.ne.jp", address: "Tokyo" }.size