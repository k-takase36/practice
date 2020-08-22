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

# # # 値段
# # car_price = 1000000
# # # 車体の色
# # car_color = red
# # # 乗車人数
# # car_capacity = 4

# # これが10台になったら?効率が悪く労力がかかる
# # car_price1 = 1000021
# # car_color1 = "red"
# # car_capacity1 = 4
# # car_price2 = 1002000
# # car_color2 = "blue"
# # car_capacity2 = 20
# # car_price3 = 3000000
# # car_color3 = "green"
# # car_capacity3 = 6
# # car_price4 = 1500000
# # car_color4 = "yellow"
# # car_capacity4 = 8
# # car_price5 = 8000000
# # car_color5 = "red"
# # car_capacity5 = 6
# # car_price6 = 4000000
# # car_color6 = "dark"
# # car_capacity6 = 4
# # car_price7 = 1030000
# # car_color7 = "white"
# # car_capacity7 = 2
# # car_price8 = 1000930
# # car_color8 = "green"
# # car_capacity8 = 4
# # car_price9 = 5000000
# # car_color9 = "yellow"
# # car_capacity9 = 40
# # car_price10 = 3000000
# # car_color10 = "red"
# # car_capacity10 = 8

# # クラスを使って定義した場合

# # クラス：車の設計図
# class Car
#   attr_accessor :price, :color, :capacity

#   def initialize(price, color, capacity)
#     self.price = price
#     self.color = color
#     self.capacity = capacity
#   end
# end

# # 設計図から生み出された車
# car1 = Car.new(1000021, "red", 4)
# car2 = Car.new(1002000, "blue", 20)
# car3 = Car.new(3000000, "green", 6)
# car4 = Car.new(1500000, "yellow", 8)
# car5 = Car.new(8000000, "red", 6)
# car6 = Car.new(4000000, "dark", 4)
# car7 = Car.new(1030000, "white", 2)
# car8 = Car.new(1000930, "green", 4)
# car9 = Car.new(5000000, "yellow", 40)
# car10 = Car.new(3000000, "red", 8)

# # クラスの構成要素

# # 構成要素	用途
# # プロパティ	クラスが持つ情報
# # メソッド	クラスが持つ機能
# # initializeメソッド	プロパティの初期値の設定

# # クラスの定義とインスタンス化
# # クラスを定義
# # クラスを定義するときは class クラス名 で始まり end で終わる
# class Car

# end

# # クラスをインスタンス化
# car = Car.new

# # インスタンス変数
# # インスタンス変数は、クラスから作成されたインスタンスごとに独立して持つことができる変数
# class Car
#   # インスタンス変数は@をつけて表す
#   @color
# end

# メソッド
# 定義したインスタンス変数に値を代入したい場合は、以下のようなメソッドを定義
# メソッドとは「一連の処理のかたまり」であり、前述した通り「クラスの機能」を定義するために使用されるもの

# 定義したメソッド（セッター）を利用する場合は、以下のようなコードを書く
# class Car
#   # セッター、 @name に値を代入（変数に値を設定するのでセッターと呼ばれている）
#   def color=(color)
#     @color = color
#   end
# end

# car = Car.new

# Carクラスのcolorにredを代入（セッターを利用）
# car.color = "red"

# colorに代入したredを表示するためには、以下のようなメソッドを定義する
# class Car
#   # ゲッター、colorの値を表示するメソッド（値を取り出すのでゲッターと呼ばれている）
#   def color
#     @color
#   end
# # セッター
#   def color=(color)
#     @color = color
#   end
# end

# car = Car.new
# car.color = "red"

# # Carクラスのcolorに格納されたredの値を取得(ゲッターを利用)
# puts car.color

# initializeメソッド
# initializeメソッドは、通常のメソッドとは異なり、クラスがインスタンス化された時に実行されるという特徴を持っている

# class Car
#   # initializeメソッドで初期値を設定
#   def initialize
#     @color = "red"
#   end

# #   def color
# #     @color
# #   end

# #   def color=(color)
# #     @color = color
# #   end
# # end

# # # インスタンス化された瞬間にinitializeメソッドが呼び出され
# # # colorにredが代入される
# # car = Car.new

# # # colorにredを代入する記述がいらなくなる
# # # car.color = "red"

# # # colorを呼び出すとredが表示される
# # puts car.color

# # # 柔軟にプロパティの値を変えるにはどうすれば良いか？
# # # initialize メソッドには引数を渡す
# # class Car
# #   # initializeメソッドで引数を受け取れるようにする
# #   def initialize(color)
# #     @color = color
# #   end

# #   def color
# #     @color
# #   end

# #   def color=(color)
# #     @color = color
# #   end
# # end

# # # インスタンス化する際にinitializeメソッドに値を渡す
# # car1 = Car.new("red")
# # car2 = Car.new("green")
# # car3 = Car.new("blue")

# # # colorを呼び出すと代入された値が表示される
# # puts car1.color
# # puts car2.color
# # puts car3.color

# # アクセサ（セッター、ゲッター）
# # Rubyのクラスでは、インスタンス変数に値を代入したり、値を取り出したりといった時に、専用のメソッドを定義
# # →これらのメソッドのことをセッター、ゲッターと言う

# class Car

#   def initialize(color)
#     @color = color
#   end

# #   # ゲッター
# #   def color
# #     @color
# #   end

# #   # セッター
# #   def color=(color)
# #     @color = color
# #   end
# # end

# # # より簡単に効率よく記述する方法
# # # attr_reader（ゲッター）
# # # attr_writer（セッター）を使う

# # class Car

# #   # ゲッター
# #   attr_reader :color
# #   # セッター
# #   attr_writer :color

# #   def initialize(color)
# #     @color = color
# #   end

# # end

# #   # このゲッターとセッターは、attr_accessorを用いるとさらに簡潔にまとめることができる
# #   class Car

# #     # セッター&ゲッター
# #     attr_accessor :color
  
# #     def initialize(color)
# #       @color = color
# #     end
  
# #   end

# #   # 今までの全てのメソッドを効率よく柔軟に使用すると以下のようなコードになる
#   class Car
#     attr_accessor :color
#     def initialize(color)
#       @color = color
#     end
#   end
  
#   car1 = Car.new("red")
#   car2 = Car.new("green")
#   car3 = Car.new("blue")
  
#   puts car1.color
#   puts car2.color
#   puts car3.color


#   # Carクラスに、さらにpriceやcapacityなどの値を追加
#   class Car
#     attr_accessor :color, :price, :capacity
#     def initialize(color, price, capacity)
#       @color = color
#       @price = price
#       @capacity = capacity
#     end
#   end
  
#   car1 = Car.new("red", 1000021, 4)
#   car2 = Car.new("blue", 1002000, 20)
#   car3 = Car.new("green", 3000000, 6)
  
#   puts car1.color
#   puts car1.price
#   puts car1.capacity
  
#   puts car2.color
#   puts car2.price
#   puts car2.capacity
  
#   puts car3.color
#   puts car3.price
#   puts car3.capacity

# プログラム作成

main.rb
class Task
  
  @count = 0

  def initialize(**params)

  end
end

class Todo

end

task1 = Task.new(name: "洗濯", content: "8時までに干し終える")
task2 = Task.new(name:"仕事", content: "9時〜18時まで仕事")
task3 = Task,new(name: "買い物", content: "卵, ネギ")

todo = Todo.new
todo.add(task1)
todo.add(task2)
todo.add(task3)
todo.info
todo.delete(id: 1)
todo.info