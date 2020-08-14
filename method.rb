# メソッド
# メソッドとは一言で言うと「処理のかたまり」

# メソッドの定義と使い方
# メソッドの定義の仕方
# def メソッド名

# end

# # 合計金額を表示するメソッド
# def disp_sum

#   # 商品の値段(price)と個数(num)
#   price = 1980
#   num = 20

#   # 商品の合計購入金額を計算
#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}円です"

# end

# puts disp_sum

# # 合計金額を表示するメソッド（returnを使っても上記と同じ値になる）
# def disp_sum

#   price = 1980
#   num = 20

#   # return を記述
#   return "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}円です"

# end

# puts disp_sum


# 合計金額を表示するメソッド（returnを使いメソッドの途中で処理を抜けたい場合）
# def disp_sum

#   price = 1980
#   num = -1

#   # return を記述
#   return "商品の購入数は0以上にしてください" if num <= 0

#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"

# end

# puts disp_sum


# メソッドの引数

# ()の中のprice, numが引数を受け取る変数
# def disp_sum(price, num)

#   return "商品の購入数は0以上にしてください" if num <= 0

#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"

# end

# # ()の中の値がdisp_sumの引数：左からprice, numの順番となる
# puts disp_sum(1980, 20)
# puts disp_sum(2480, 20)
# puts disp_sum(72980, 20)

# def disp_sum(price, num)

#   return "商品の購入数は0以上にしてください" if num <= 0

#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"

# end

# # 引数を-1にする
# puts disp_sum(1980, -1)

# def disp_sum(price, num)

#   return "商品の購入数は0以上にしてください：入力値 #{num}" if num <= 0

#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"

# end

# # 引数を-1にする
# puts disp_sum(1980, -1)

# デフォルト値付きの引数

def disp_sum(price = 1980, num = 20)

  return "商品の購入数は0以上にしてください：入力値 #{num}" if num <= 0

  "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}円です"

end

# 引数を無しにしてメソッドを呼び出し
puts disp_sum()

def 