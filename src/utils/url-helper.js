import { LAYOUT_METADATA } from "../consts/metadata";

export function dynamicLayoutMetadata(pathname) {
  // "/todo" -> "/todo/3", split slice
  // 특수한 주소에 따라 연산 필요
  console.log(pathname.split("/"));

  // ["", "todo", "3"]
  // "/todo/3" ----> "/todo"

  const basePath = pathname.split("/").slice(0, 2).join("/");
  // "/" + pathname.split("/")[1]

  return LAYOUT_METADATA[basePath];
}
