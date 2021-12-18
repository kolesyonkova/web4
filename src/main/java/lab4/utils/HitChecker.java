package lab4.utils;

public class HitChecker {
    public static boolean checkArea(int x, float y, int R) {
        return R != 0 && (R > 0 ? doCheck(x, y, R) : doCheck(-x, -y, -R));
    }

    private static boolean doCheck(int x, float y, int R) {
        double tmp = Double.parseDouble(String.valueOf(R));
        return (x >= 0 && y >= 0 && x <= R && y <= tmp / 2) | (x <= 0 && y <= 0 && x * x + y * y <= R * R) | (x >= 0 && y <= 0 && y >= 0.5 * Double.parseDouble(String.valueOf(x)) - tmp / 2);
    }
}
