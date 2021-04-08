class Main {
  public static void main(String[] args) {
    // fullNameメソッドの結果を変数nameに代入
    String name = fullName("Kate", "Jones");
    
    // printDataの引数を書き換える
    printData("name", 27);
    
    // ここは書き換えない
    printData("John Christopher Smith", 65);
    
  }

  public static void printData(String name, int age) {
    System.out.println("私の名前は" + name + "です");
    System.out.println("年齢は" + age + "歳です");
  }

  // fullNameメソッドを定義する
  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }  
  
}