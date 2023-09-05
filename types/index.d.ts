declare global {
  type DataResponse = {
    errors: any[];
    list: List<{}>[];
    message: any[];
    pageInfo: PageInfo;
  };

  type List<T> = {
    [key: string]: T;
  };

  type PageInfo = {
    endPageNo: number;
    firstIndex: number;
    lastIndex: number;
    param: string;
    path: string;
    perPage: number;
    startPageNo: number;
    totalCnt: number;
    totalPageCnt: number;
  };
}

export {};
