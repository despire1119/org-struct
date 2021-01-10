import Mock from "mockjs";
import { dataTree } from "./storeclerk";
import { getListByCateIds } from "./api";
Mock.mock(getListByCateIds, options => {
  console.log(options);
  // return Mock.mock({
  //   status: "SUCCEED",
  //   result: dataTree
  // });
  return dataTree
});
Mock.setup({
  timeout: "200-400"
});
