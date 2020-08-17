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
params = { name: "Tanaka", email: "hoge@co.ne.jp", address: "Saitama" }

# データの書き換え
params[:name] = "Saitou"

# データの追加
params[:age] = 33

puts params[:name]
puts params[:age]

# 存在しないキーを指定するとnilになる
p params[:hobby]