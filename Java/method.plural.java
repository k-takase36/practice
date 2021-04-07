class Main {
  public static void main(String[] args) {
    // それぞれ年齢に関する引数を追加
    printData("Kate Jones", 27);
    printData("John Christopher Smith", 65);
  }

  // 年齢に関する引数を受け取る
  public static void printData(String name,int age) {
    System.out.println("私の名前は" + name + "です");
    // 「年齢は◯◯歳です」と出力
    System.out.println("年齢は" + age + "歳です");
    
  }
}