# a = 10
# b = 15

# print "aはb以上？："
# puts a >= b
# print "aはb以下？："
# puts a <= b
# print "aはbより大きい？："
# puts a > b
# print "aはbより小さい？："
# puts a < b
# print "aはbと同じ？："
# puts a == b

# # 条件がtrueの場合は実行される
# if true
#   puts "実行されます"
# end

# # 条件がfalseの場合は実行されない
# if false
#   puts "実行されません"
# end

# 娘の好きなアニメ = 100

# if 娘のアニメ > 80
#   puts "プリキュア"
# elsif 娘の愛情度 > 50
#   puts ""
# else
#   puts ""
# end

# hp = 3

# if hp > 10
#   puts "勇者は元気だ"
# # 複数の条件を指定するときに使う
# elsif hp > 5
#   puts "勇者は弱っている"
# elsif hp > 3
#   puts "勇者はかなり弱っている"
# elsif hp > 0
#   puts "勇者は瀕死だ"
# else
#   puts "勇者はしんだ"
# end

# caseの使用例です。
# month = 6

# # 比較対象をcaseの後に記述
# case month
# # 比較対象と比較する値を記述
# when 3..5
#   puts "春です"
# when 6..8
#   puts "夏です"
# when 9..11
#   puts "秋です"
# when 1..12
#   puts "冬です"
# else
#   puts "不正な値です"
# end

# 勇者のhp
brave_hp = 30
# 勇者の攻撃力
brave_attack = 10
# 勇者の防御力
brave_defense = 5
# 敵のhp
enemy_hp = 30
# 敵の攻撃力
enemy_attack = 5
# 敵の防御力
enemy_defense = 10

# 攻撃にランダム要素を入れる
# rand(4)にすると0~3のうちランダムに数字を発生させる
select_attack = rand(4)

if select_attack == 0
  puts "かいしんのいちげき"
  # randの範囲を20~30と大きな値にする
  enemy_damage = brave_attack - enemy_defense + rand(20..30)
  enemy_hp = enemy_hp - enemy_damage
else
  puts "つうじょうこうげき"
  enemy_damage = brave_attack - enemy_defense + rand(3..5)
  enemy_hp = enemy_hp - enemy_damage
end

puts <<~TEXT
敵に#{enemy_damage}のダメージを与えた。
残りHPは#{enemy_hp}だ。
TEXT

# 残りHPによってリアクションを変える
if enemy_hp > 20
  puts "敵は元気だ"
elsif enemy_hp > 10
  puts "敵はちょっと弱っている"
elsif enemy_hp > 5
  puts "敵はかなり弱っている"
elsif enemy_hp > 0
  puts "敵は瀕死だ"
else
  puts "敵は死んだ"
end

# 攻撃にランダム要素を入れる
# rand(4)にすると0~3のうちランダムに数字を発生させる
select_attack = rand(4)

if select_attack == 0
  puts "かいしんのいちげき"
  # randの範囲を20~30と大きな値にする
  brave_damage = enemy_attack - brave_defense + rand(10..20)
  brave_hp = brave_hp - brave_damage
else
  puts "つうじょうこうげき"
  brave_damage = enemy_attack - brave_defense + rand(3..5)
  brave_hp = brave_hp - brave_damage
end

# 勇者に与えるダメージと残りHPの表示
puts <<~TEXT
敵から#{brave_damage}のダメージを受けた。
残りHPは#{brave_hp}だ。
TEXT

# 残りHPによってリアクションを変える
if brave_hp > 20
  puts "勇者は元気だ"
elsif brave_hp > 10
  puts "勇者はちょっと弱っている"
elsif brave_hp > 5
  puts "勇者はかなり弱っている"
elsif brave_hp > 0
  puts "勇者は瀕死だ"
else
  puts "勇者は死んだ"
end