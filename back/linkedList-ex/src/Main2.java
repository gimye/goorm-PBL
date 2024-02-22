public class Main2 {
    public static void main(String[] args) {
        MyStack<Integer> stack = new MyStack<>();

        // push
        stack.push(1);
        stack.push(2);
        stack.push(3);

        // pop
        Integer popItem = stack.pop();
        System.out.println("popItem = " + popItem);

        // peek
        System.out.println("p = " + stack.peek());

        // 예외처리 확인
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

    }

}
