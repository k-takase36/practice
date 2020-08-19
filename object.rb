# オブジェクト指向とは
# オブジェクト指向とは、設計図から物を生み出すという考え方のこと
# なぜこのような考え方をプログラミングに取り入れるのかというと、単純に開発効率が上がるから
# プログラムの世界では、設計図のことを クラス 、設計図から生み出された物のことを インスタンス（またはオブジェクト） という

# オブジェクト指向を取り入れるメリット
# ・設計図（クラス）を使いまわすことができる（コードを沢山書かなくて済む）
# ・物（インスタンス）の質を一定に保つことができる（エラーの発生率を下げることができる）
# ・物（インスタンス）のカスタマイズがしやすい（コードを書き換える量が少なくて済む）

# インスタンスの種類
# クラス	説明	例
# String	文字を表す（文字列）	"文字列"
# Integer	整数を扱う（整数）	33
# Float	少数を扱う（少数）	1.5
# Array	複数のデータを格納して一度にたくさんのデータを扱うことができる（配列）	["tanaka","saitou","aoyagi"]
# Hash	キーとバリューの組み合わせでデータを扱う（ハッシュ）	{name: "tanaka", age: 33, hobby: "soccer"}

# クラス使用例
# クラスを使わずに定義した場合

# # 値段
# car_price = 1000000
# # 車体の色
# car_color = red
# # 乗車人数
# car_capacity = 4

# これが10台になったら?効率が悪く労力がかかる
# car_price1 = 1000021
# car_color1 = "red"
# car_capacity1 = 4
# car_price2 = 1002000
# car_color2 = "blue"
# car_capacity2 = 20
# car_price3 = 3000000
# car_color3 = "green"
# car_capacity3 = 6
# car_price4 = 1500000
# car_color4 = "yellow"
# car_capacity4 = 8
# car_price5 = 8000000
# car_color5 = "red"
# car_capacity5 = 6
# car_price6 = 4000000
# car_color6 = "dark"
# car_capacity6 = 4
# car_price7 = 1030000
# car_color7 = "white"
# car_capacity7 = 2
# car_price8 = 1000930
# car_color8 = "green"
# car_capacity8 = 4
# car_price9 = 5000000
# car_color9 = "yellow"
# car_capacity9 = 40
# car_price10 = 3000000
# car_color10 = "red"
# car_capacity10 = 8

# クラスを使って定義した場合

# クラス：車の設計図
class Car
  attr_accessor :price, :color, :capacity

  def initialize(price, color, capacity)
    self.price = price
    self.color = color
    self.capacity = capacity
  end
end

# 設計図から生み出された車
car1 = Car.new(1000021, "red", 4)
car2 = Car.new(1002000, "blue", 20)
car3 = Car.new(3000000, "green", 6)
car4 = Car.new(1500000, "yellow", 8)
car5 = Car.new(8000000, "red", 6)
car6 = Car.new(4000000, "dark", 4)
car7 = Car.new(1030000, "white", 2)
car8 = Car.new(1000930, "green", 4)
car9 = Car.new(5000000, "yellow", 40)
car10 = Car.new(3000000, "red", 8)

# クラスの構成要素

# 構成要素	用途
# プロパティ	クラスが持つ情報
# メソッド	クラスが持つ機能
# initializeメソッド	プロパティの初期値の設定


