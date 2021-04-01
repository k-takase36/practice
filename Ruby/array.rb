# 配列
# 配列の定義
# users = ["Saitou", "Tanaka", "Suzuki", "Yamada"]
# ages = [22, 34, 12, 45]

# 配列から要素を取り出す
# ages = [22, 34, 12, 45]
# # 0はインデックス番号を示す
# puts ages[0]

# ages = [22, 34, 12, 45]

# # 0番目の要素：22を取り出す
# puts ages[0]

# # 1番目の要素：34を取り出す
# puts ages[1]

# # 2番目の要素：12を取り出す
# puts ages[2]

# # 3番目の要素：45を取り出す
# puts ages[3]

# 配列と繰り返し処理
# 「配列から要素を取り出すときは繰り返し処理で取り出す」ということを頭に入れておく.
# users = ["satou", "tanaka", "yamada", "shimizu"]

# users.each do |name|
#   puts "Hello!! #{name}."
# end

# 配列課題プログラム(if,each)
puts "様々な言語のHello World"
puts ""

languages = ["Ruby", "PHP" , "Java"]

languages.each do |language|
  if language  == "Ruby"
    puts "#{language}：puts \"Hello World!\""
  elsif language == "PHP"
    puts "#{language}：echo \"Hello World!\";"
  else language == "Java"
    puts "#{language}：System.out.println(\"Hello World!\");"
  end
end

# 配列課題プログラム(case,each)
puts "様々な言語のHello World"
puts ""

languages = ["Ruby", "PHP" , "Java"]

languages.each do |language|
  case language
    when "Ruby"
      puts "#{language}：puts \"Hello World!\""
    when "PHP"
      puts "#{language}：echo \"Hello World!\";"
    when "Java"
      puts "#{language}：System.out.println(\"Hello World!\");"
  end
end