package dario.gabriel.mypersonalblog.util;

public class PaginationUtil {
    /**
     * @param page the page of the query.
     * @param size the number of result for each <i>page</i>.
     * @return the next <i>size</i> rows.
     */
    public static int normalize(int page, int size) {
        if (page == 1) {
            page = 0;
        } else {
            page = (page - 1) * size;
        }
        return page;
    }
}
