package dario.gabriel.mypersonalblog.util;

public class PaginationUtil {
    /**
     * @param page the page of the query.
     * @return the next 50 rows.
     */
    public static int normalizePage(int page) {
        if (page == 1) {
            page = 0;
        } else {
            page = (page - 1) * 50;
        }
        return page;
    }
}
